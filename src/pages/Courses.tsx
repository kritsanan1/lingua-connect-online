
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [language, setLanguage] = useState<'th' | 'en'>('th');

  const translations = {
    th: {
      title: 'คอร์สเรียนทั้งหมด',
      subtitle: 'เลือกคอร์สที่เหมาะกับคุณ',
      beginner: 'ระดับเริ่มต้น',
      intermediate: 'ระดับกลาง',
      advanced: 'ระดับสูง',
      hours: 'ชั่วโมง',
      students: 'นักเรียน',
      rating: 'คะแนน',
      preview: 'ดูตัวอย่าง',
      enroll: 'ลงทะเบียนเรียน',
      popular: 'ยอดนิยม'
    },
    en: {
      title: 'All Courses',
      subtitle: 'Choose the course that suits you',
      beginner: 'Beginner Level',
      intermediate: 'Intermediate Level',
      advanced: 'Advanced Level',
      hours: 'Hours',
      students: 'Students',
      rating: 'Rating',
      preview: 'Preview',
      enroll: 'Enroll Now',
      popular: 'Popular'
    }
  };

  const t = translations[language];

  const courses = [
    {
      id: 1,
      title: language === 'th' ? 'General English' : 'General English',
      description: language === 'th' 
        ? 'เรียนภาษาอังกฤษพื้นฐาน พัฒนาทักษะฟัง พูด อ่าน เขียน' 
        : 'Learn basic English, develop listening, speaking, reading, writing skills',
      level: 'beginner',
      duration: 120,
      students: 1250,
      rating: 4.8,
      price: 390,
      popular: true,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: language === 'th' ? 'CEFR English' : 'CEFR English',
      description: language === 'th' 
        ? 'เรียนตามมาตรฐาน CEFR ระดับ A1-B1 พร้อมใบรับรอง' 
        : 'Learn according to CEFR standards A1-B1 level with certification',
      level: 'intermediate',
      duration: 120,
      students: 980,
      rating: 4.9,
      price: 590,
      popular: false,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: language === 'th' ? 'Business English' : 'Business English',
      description: language === 'th' 
        ? 'ภาษาอังกฤษเพื่อการทำงาน การประชุม การนำเสนอ' 
        : 'English for work, meetings, presentations',
      level: 'advanced',
      duration: 80,
      students: 650,
      rating: 4.7,
      price: 790,
      popular: false,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: language === 'th' ? 'IELTS Preparation' : 'IELTS Preparation',
      description: language === 'th' 
        ? 'เตรียมสอบ IELTS ครบทุกส่วน พร้อมเทคนิคการสอบ' 
        : 'Complete IELTS preparation with exam techniques',
      level: 'advanced',
      duration: 100,
      students: 420,
      rating: 4.9,
      price: 1290,
      popular: false,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: language === 'th' ? 'Conversation English' : 'Conversation English',
      description: language === 'th' 
        ? 'เน้นการสนทนา พูดคุยจริง พัฒนาความมั่นใจ' 
        : 'Focus on conversation, real talk, build confidence',
      level: 'intermediate',
      duration: 60,
      students: 890,
      rating: 4.8,
      price: 490,
      popular: true,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: language === 'th' ? 'Kids English' : 'Kids English',
      description: language === 'th' 
        ? 'ภาษาอังกฤษสำหรับเด็ก สนุก เข้าใจง่าย' 
        : 'English for kids, fun and easy to understand',
      level: 'beginner',
      duration: 40,
      students: 560,
      rating: 4.9,
      price: 290,
      popular: false,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const getLevelBadge = (level: string) => {
    const levels = {
      beginner: { text: t.beginner, color: 'bg-green-100 text-green-800' },
      intermediate: { text: t.intermediate, color: 'bg-yellow-100 text-yellow-800' },
      advanced: { text: t.advanced, color: 'bg-red-100 text-red-800' }
    };
    return levels[level as keyof typeof levels];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600">
              {t.subtitle}
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const levelInfo = getLevelBadge(course.level);
              return (
                <Card key={course.id} className="course-card overflow-hidden relative">
                  {course.popular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-purple-600 text-white">
                      {t.popular}
                    </Badge>
                  )}
                  
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        {t.preview}
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={levelInfo.color}>
                        {levelInfo.text}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration} {t.hours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()} {t.students}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          ฿{course.price.toLocaleString()}
                        </span>
                      </div>
                      
                      <Link to={`/payment/${course.id}`}>
                        <Button className="btn-primary w-full">
                          {t.enroll}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Courses;
