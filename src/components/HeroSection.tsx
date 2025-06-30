
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Users, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  language: 'th' | 'en';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const translations = {
    th: {
      headline: 'เรียนภาษาอังกฤษกับครูต่างชาติ พร้อมเอกสารครบ ดูย้อนหลังได้ เรียนที่ไหนก็ได้ ทุกเวลา',
      subheadline: 'เรียนออนไลน์กับครูจากอเมริกา อังกฤษ แคนาดา ออสเตรเลีย',
      cta1: 'เริ่มเรียนฟรี',
      cta2: 'ดูตัวอย่างคอร์ส',
      feature1: 'ครูเจ้าของภาษา',
      feature2: 'เรียนสด + ย้อนหลัง',
      feature3: 'เอกสารครบถ้วน',
      feature4: 'เรียน 24/7',
      students: '1,000+ นักเรียน',
      satisfaction: '98% ความพึงพอใจ'
    },
    en: {
      headline: 'Learn English with British Council teachers with complete materials, replay available, learn anywhere, anytime',
      subheadline: 'Learn online with teachers from America, Britain, Canada, Australia',
      cta1: 'Start Free Trial',
      cta2: 'View Course Preview',
      feature1: 'Native Teachers',
      feature2: 'Live + Recorded',
      feature3: 'Complete Materials',
      feature4: 'Learn 24/7',
      students: '1,000+ Students',
      satisfaction: '98% Satisfaction'
    }
  };

  const t = translations[language];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-secondary hero-pattern opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fadeInUp">
                {t.headline}
              </h1>
              <p className="text-xl text-gray-600 animate-fadeInUp stagger-1">
                {t.subheadline}
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 animate-fadeInUp stagger-2">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">{t.feature1}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">{t.feature2}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{t.feature3}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-gray-700 font-medium">{t.feature4}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp stagger-3">
              <Link to="/booking">
                <Button className="btn-primary text-lg px-8 py-4">
                  {t.cta1}
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="text-lg px-8 py-4 border-2">
                  <Play className="w-5 h-5 mr-2" />
                  {t.cta2}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4 animate-fadeInUp stagger-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{t.students}</div>
                <div className="text-sm text-gray-500">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{t.satisfaction}</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Illustration */}
          <div className="relative animate-slideInRight">
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="English Learning Online"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-fadeInUp stagger-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Live Class</div>
                  <div className="text-sm text-gray-500">Now Active</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-fadeInUp stagger-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Course Materials</div>
                  <div className="text-sm text-gray-500">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
