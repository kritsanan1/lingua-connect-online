export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      course_documents: {
        Row: {
          course_id: string | null
          created_at: string | null
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          title_en: string
          title_th: string
          uploaded_by: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          title_en: string
          title_th: string
          uploaded_by?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          title_en?: string
          title_th?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "course_documents_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          created_at: string
          description_en: string | null
          description_th: string | null
          difficulty_level: string | null
          duration_hours: number | null
          duration_weeks: number | null
          id: string
          image_url: string | null
          instructor_name: string | null
          is_premium: boolean | null
          lessons_count: number | null
          level: string | null
          preview_video_url: string | null
          price: number | null
          price_thb: number | null
          title_en: string
          title_th: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description_en?: string | null
          description_th?: string | null
          difficulty_level?: string | null
          duration_hours?: number | null
          duration_weeks?: number | null
          id?: string
          image_url?: string | null
          instructor_name?: string | null
          is_premium?: boolean | null
          lessons_count?: number | null
          level?: string | null
          preview_video_url?: string | null
          price?: number | null
          price_thb?: number | null
          title_en: string
          title_th: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description_en?: string | null
          description_th?: string | null
          difficulty_level?: string | null
          duration_hours?: number | null
          duration_weeks?: number | null
          id?: string
          image_url?: string | null
          instructor_name?: string | null
          is_premium?: boolean | null
          lessons_count?: number | null
          level?: string | null
          preview_video_url?: string | null
          price?: number | null
          price_thb?: number | null
          title_en?: string
          title_th?: string
          updated_at?: string
        }
        Relationships: []
      }
      feedback: {
        Row: {
          comment: string | null
          course_id: string | null
          created_at: string | null
          id: string
          is_public: boolean | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          course_id?: string | null
          created_at?: string | null
          id?: string
          is_public?: boolean | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          course_id?: string | null
          created_at?: string | null
          id?: string
          is_public?: boolean | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      live_class_participants: {
        Row: {
          attendance_duration_minutes: number | null
          class_id: string | null
          id: string
          joined_at: string | null
          left_at: string | null
          user_id: string | null
        }
        Insert: {
          attendance_duration_minutes?: number | null
          class_id?: string | null
          id?: string
          joined_at?: string | null
          left_at?: string | null
          user_id?: string | null
        }
        Update: {
          attendance_duration_minutes?: number | null
          class_id?: string | null
          id?: string
          joined_at?: string | null
          left_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "live_class_participants_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "live_classes"
            referencedColumns: ["id"]
          },
        ]
      }
      live_classes: {
        Row: {
          course_id: string | null
          created_at: string | null
          duration_minutes: number | null
          google_meet_link: string | null
          id: string
          instructor_id: string | null
          is_active: boolean | null
          max_participants: number | null
          scheduled_date: string
          title_en: string
          title_th: string
          zoom_link: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          google_meet_link?: string | null
          id?: string
          instructor_id?: string | null
          is_active?: boolean | null
          max_participants?: number | null
          scheduled_date: string
          title_en: string
          title_th: string
          zoom_link?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          google_meet_link?: string | null
          id?: string
          instructor_id?: string | null
          is_active?: boolean | null
          max_participants?: number | null
          scheduled_date?: string
          title_en?: string
          title_th?: string
          zoom_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "live_classes_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message_en: string | null
          message_th: string | null
          title_en: string
          title_th: string
          type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message_en?: string | null
          message_th?: string | null
          title_en: string
          title_th: string
          type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message_en?: string | null
          message_th?: string | null
          title_en?: string
          title_th?: string
          type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          amount_thb: number | null
          completed_at: string | null
          course_id: string | null
          created_at: string | null
          currency: string | null
          id: string
          payment_method: string | null
          status: string | null
          stripe_session_id: string | null
          user_id: string | null
        }
        Insert: {
          amount_thb?: number | null
          completed_at?: string | null
          course_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          payment_method?: string | null
          status?: string | null
          stripe_session_id?: string | null
          user_id?: string | null
        }
        Update: {
          amount_thb?: number | null
          completed_at?: string | null
          course_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          payment_method?: string | null
          status?: string | null
          stripe_session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      page_analytics: {
        Row: {
          conversion_event: string | null
          created_at: string
          device_type: string | null
          event_type: string
          id: string
          ip_address: unknown | null
          page_url: string | null
          referrer: string | null
          section: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          conversion_event?: string | null
          created_at?: string
          device_type?: string | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          page_url?: string | null
          referrer?: string | null
          section?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          conversion_event?: string | null
          created_at?: string
          device_type?: string | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          page_url?: string | null
          referrer?: string | null
          section?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      privacy_consents: {
        Row: {
          consent_type: string
          consented: boolean
          created_at: string | null
          id: string
          ip_address: unknown | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          consent_type: string
          consented: boolean
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          consent_type?: string
          consented?: boolean
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          age: number | null
          created_at: string | null
          id: string
          language_preference: string | null
          name: string | null
          occupation: string | null
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          age?: number | null
          created_at?: string | null
          id: string
          language_preference?: string | null
          name?: string | null
          occupation?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          age?: number | null
          created_at?: string | null
          id?: string
          language_preference?: string | null
          name?: string | null
          occupation?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      promotional_content: {
        Row: {
          content_en: string | null
          content_th: string | null
          content_type: string
          conversion_rate: number | null
          created_at: string | null
          id: string
          is_active: boolean | null
          variant_name: string
        }
        Insert: {
          content_en?: string | null
          content_th?: string | null
          content_type: string
          conversion_rate?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          variant_name: string
        }
        Update: {
          content_en?: string | null
          content_th?: string | null
          content_type?: string
          conversion_rate?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          variant_name?: string
        }
        Relationships: []
      }
      quiz_attempts: {
        Row: {
          answers: Json
          completed_at: string | null
          id: string
          passed: boolean | null
          quiz_id: string | null
          score: number | null
          started_at: string | null
          time_spent_minutes: number | null
          user_id: string | null
        }
        Insert: {
          answers: Json
          completed_at?: string | null
          id?: string
          passed?: boolean | null
          quiz_id?: string | null
          score?: number | null
          started_at?: string | null
          time_spent_minutes?: number | null
          user_id?: string | null
        }
        Update: {
          answers?: Json
          completed_at?: string | null
          id?: string
          passed?: boolean | null
          quiz_id?: string | null
          score?: number | null
          started_at?: string | null
          time_spent_minutes?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          course_id: string | null
          created_at: string | null
          created_by: string | null
          description_en: string | null
          description_th: string | null
          id: string
          passing_score: number | null
          questions: Json
          time_limit_minutes: number | null
          title_en: string
          title_th: string
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          created_by?: string | null
          description_en?: string | null
          description_th?: string | null
          id?: string
          passing_score?: number | null
          questions: Json
          time_limit_minutes?: number | null
          title_en: string
          title_th: string
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          created_by?: string | null
          description_en?: string | null
          description_th?: string | null
          id?: string
          passing_score?: number | null
          questions?: Json
          time_limit_minutes?: number | null
          title_en?: string
          title_th?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_packages: {
        Row: {
          created_at: string | null
          features: Json | null
          id: string
          includes_private_classes: boolean | null
          includes_recordings: boolean | null
          is_active: boolean | null
          live_classes_per_month: number
          name: string
          name_th: string
          price_thb: number
        }
        Insert: {
          created_at?: string | null
          features?: Json | null
          id?: string
          includes_private_classes?: boolean | null
          includes_recordings?: boolean | null
          is_active?: boolean | null
          live_classes_per_month: number
          name: string
          name_th: string
          price_thb: number
        }
        Update: {
          created_at?: string | null
          features?: Json | null
          id?: string
          includes_private_classes?: boolean | null
          includes_recordings?: boolean | null
          is_active?: boolean | null
          live_classes_per_month?: number
          name?: string
          name_th?: string
          price_thb?: number
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          classes_used: number | null
          created_at: string | null
          end_date: string | null
          id: string
          package_id: string | null
          start_date: string | null
          status: string | null
          stripe_subscription_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          classes_used?: number | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          package_id?: string | null
          start_date?: string | null
          status?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          classes_used?: number | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          package_id?: string | null
          start_date?: string | null
          status?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "subscription_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      testimonials: {
        Row: {
          age: number | null
          course_completed: string | null
          course_taken: string | null
          created_at: string
          id: string
          image_url: string | null
          is_featured: boolean | null
          name_en: string | null
          name_th: string
          occupation: string | null
          quote_en: string | null
          quote_th: string
          rating: number | null
          video_url: string | null
        }
        Insert: {
          age?: number | null
          course_completed?: string | null
          course_taken?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name_en?: string | null
          name_th: string
          occupation?: string | null
          quote_en?: string | null
          quote_th: string
          rating?: number | null
          video_url?: string | null
        }
        Update: {
          age?: number | null
          course_completed?: string | null
          course_taken?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name_en?: string | null
          name_th?: string
          occupation?: string | null
          quote_en?: string | null
          quote_th?: string
          rating?: number | null
          video_url?: string | null
        }
        Relationships: []
      }
      translations: {
        Row: {
          created_at: string | null
          id: string
          key: string
          language: string
          namespace: string
          updated_at: string | null
          value: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          key: string
          language: string
          namespace?: string
          updated_at?: string | null
          value: string
        }
        Update: {
          created_at?: string | null
          id?: string
          key?: string
          language?: string
          namespace?: string
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      user_course_progress: {
        Row: {
          completed_at: string | null
          course_id: string | null
          id: string
          last_accessed: string | null
          progress_percentage: number | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          course_id?: string | null
          id?: string
          last_accessed?: string | null
          progress_percentage?: number | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          course_id?: string | null
          id?: string
          last_accessed?: string | null
          progress_percentage?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_course_progress_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      user_courses: {
        Row: {
          completed_at: string | null
          course_id: string | null
          enrolled_at: string | null
          id: string
          payment_status: string | null
          progress_percentage: number | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          course_id?: string | null
          enrolled_at?: string | null
          id?: string
          payment_status?: string | null
          progress_percentage?: number | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          course_id?: string | null
          enrolled_at?: string | null
          id?: string
          payment_status?: string | null
          progress_percentage?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_courses_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      user_inquiries: {
        Row: {
          course_interest: string | null
          created_at: string
          email: string
          id: string
          language_preference: string | null
          message: string | null
          name: string | null
          phone: string | null
        }
        Insert: {
          course_interest?: string | null
          created_at?: string
          email: string
          id?: string
          language_preference?: string | null
          message?: string | null
          name?: string | null
          phone?: string | null
        }
        Update: {
          course_interest?: string | null
          created_at?: string
          email?: string
          id?: string
          language_preference?: string | null
          message?: string | null
          name?: string | null
          phone?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
