/*
  # Complete Database Schema Setup

  1. New Tables
    - `profiles` - User profile information linked to auth.users
    - `user_courses` - Course enrollments and progress tracking
    - `orders` - Payment and order tracking
    - `live_classes` - Live class scheduling and management

  2. Security
    - Enable RLS on all new tables
    - Add comprehensive policies for data access control
    - Ensure users can only access their own data

  3. Functions & Triggers
    - Auto-create profile on user registration
    - Handle new user signup process

  4. Constraints & Indexes
    - Add role validation constraints
    - Ensure data integrity with unique constraints
    - Proper foreign key relationships
*/

-- Check if profiles table exists, create if not
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  phone TEXT,
  age INTEGER,
  occupation TEXT,
  language_preference TEXT DEFAULT 'th',
  role TEXT DEFAULT 'student',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add role constraint if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'profiles_role_check' 
    AND table_schema = 'public'
    AND table_name = 'profiles'
  ) THEN
    ALTER TABLE public.profiles ADD CONSTRAINT profiles_role_check 
    CHECK (role = ANY (ARRAY['student'::text, 'teacher'::text]));
  END IF;
END $$;

-- Create user_courses table for enrollments
CREATE TABLE IF NOT EXISTS public.user_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  progress_percentage INTEGER DEFAULT 0,
  payment_status TEXT DEFAULT 'free'
);

-- Add unique constraint for user_courses if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'user_courses_user_id_course_id_key' 
    AND table_schema = 'public'
    AND table_name = 'user_courses'
  ) THEN
    ALTER TABLE public.user_courses ADD CONSTRAINT user_courses_user_id_course_id_key 
    UNIQUE(user_id, course_id);
  END IF;
END $$;

-- Create orders table for payment tracking
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE SET NULL,
  amount_thb DECIMAL(10,2),
  currency TEXT DEFAULT 'thb',
  status TEXT DEFAULT 'pending',
  payment_method TEXT,
  stripe_session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Add unique constraint for stripe_session_id if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'orders_stripe_session_id_key' 
    AND table_schema = 'public'
    AND table_name = 'orders'
  ) THEN
    ALTER TABLE public.orders ADD CONSTRAINT orders_stripe_session_id_key 
    UNIQUE(stripe_session_id);
  END IF;
END $$;

-- Create live_classes table
CREATE TABLE IF NOT EXISTS public.live_classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  instructor_id UUID REFERENCES auth.users(id),
  title_en TEXT NOT NULL,
  title_th TEXT NOT NULL,
  scheduled_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  max_participants INTEGER DEFAULT 50,
  zoom_link TEXT,
  google_meet_link TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.live_classes ENABLE ROW LEVEL SECURITY;

-- Create or replace all policies
DO $$
BEGIN
  -- Clean up existing policies for profiles
  DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
  DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
  DROP POLICY IF EXISTS "Users can view and edit own profile" ON public.profiles;
  
  -- Create profiles policies
  CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);
    
  CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);
    
  CREATE POLICY "Users can view and edit own profile" ON public.profiles
    FOR ALL USING (auth.uid() = id);

  -- Clean up existing policies for user_courses
  DROP POLICY IF EXISTS "Users can view their own courses" ON public.user_courses;
  DROP POLICY IF EXISTS "Users can enroll in courses" ON public.user_courses;
  DROP POLICY IF EXISTS "Users can view own enrollments" ON public.user_courses;
  DROP POLICY IF EXISTS "Users can manage own enrollments" ON public.user_courses;
  
  -- Create user_courses policies
  CREATE POLICY "Users can view their own courses" ON public.user_courses
    FOR SELECT USING (auth.uid() = user_id);
    
  CREATE POLICY "Users can enroll in courses" ON public.user_courses
    FOR INSERT WITH CHECK (auth.uid() = user_id);
    
  CREATE POLICY "Users can view own enrollments" ON public.user_courses
    FOR ALL USING (auth.uid() = user_id);

  -- Clean up existing policies for orders
  DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
  DROP POLICY IF EXISTS "Users can create their own orders" ON public.orders;
  DROP POLICY IF EXISTS "Users can view own orders" ON public.orders;
  
  -- Create orders policies
  CREATE POLICY "Users can view their own orders" ON public.orders
    FOR SELECT USING (auth.uid() = user_id);
    
  CREATE POLICY "Users can create their own orders" ON public.orders
    FOR INSERT WITH CHECK (auth.uid() = user_id);

  -- Clean up existing policies for live_classes
  DROP POLICY IF EXISTS "Anyone can view live classes" ON public.live_classes;
  DROP POLICY IF EXISTS "Teachers can manage live classes" ON public.live_classes;
  
  -- Create live_classes policies
  CREATE POLICY "Anyone can view live classes" ON public.live_classes
    FOR SELECT TO authenticated USING (true);
    
  CREATE POLICY "Teachers can manage live classes" ON public.live_classes
    FOR ALL TO public USING (
      EXISTS (
        SELECT 1 FROM public.profiles 
        WHERE profiles.id = auth.uid() 
        AND profiles.role = 'teacher'
      )
    );
END $$;

-- Create or replace function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, language_preference)
  VALUES (
    new.id, 
    COALESCE(new.raw_user_meta_data->>'name', new.email), 
    'th'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();