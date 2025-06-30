
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCourses } from '@/hooks/useCourses';

const Courses = () => {
  const [language, setLanguage] = useState<'th' | 'en'>('th');
  const { courses, loading, error } = useCourses();

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
      popular: 'ยอดนิยม',
      loading: 'กำลังโหลด...',
      error: 'เกิดข้อผิดพลาดในการโหลดข้อมูล'
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
      popular: 'Popular',
      loading: 'Loading...',
      error: 'Error loading data'
    }
  };

  const t = translations[language];

  const getLevelBadge = (level: string) => {
    const levelMap: { [key: string]: { text: string; color: string } } = {
      'Beginner': { text: t.beginner, color: 'bg-green-100 text-green-800' },
      'Intermediate': { text: t.intermediate, color: 'bg-yellow-100 text-yellow-800' },
      'Advanced': { text: t.advanced, color: 'bg-red-100 text-red-800' },
      'A1-B1': { text: 'A1-B1', color: 'bg-blue-100 text-blue-800' },
      'All Levels': { text: language === 'th' ? 'ทุกระดับ' : 'All Levels', color: 'bg-purple-100 text-purple-800' },
      'Customized': { text: language === 'th' ? 'ปรับแต่งได้' : 'Customized', color: 'bg-indigo-100 text-indigo-800' }
    };
    
    return levelMap[level] || { text: level, color: 'bg-gray-100 text-gray-800' };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar language={language} onLanguageChange={setLanguage} />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-lg text-gray-600">{t.loading}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar language={language} onLanguageChange={setLanguage} />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg text-red-600">{t.error}</p>
              <p className="text-sm text-gray-500 mt-2">{error}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
              const title = language === 'th' ? course.title_th : course.title_en;
              const description = language === 'th' ? course.description_th : course.description_en;
              const defaultImage = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
              
              return (
                <Card key={course.id} className="course-card overflow-hidden relative">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={course.image_url || defaultImage}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                    {course.preview_video_url && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          {t.preview}
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={levelInfo.color}>
                        {levelInfo.text}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">4.9</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration_hours} {t.hours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons_count} บทเรียน</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          ฿{course.price_thb?.toLocaleString() || course.price?.toLocaleString()}
                        </span>
                        {course.instructor_name && (
                          <span className="text-sm text-gray-500">
                            {course.instructor_name}
                          </span>
                        )}
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
