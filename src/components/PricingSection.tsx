
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Users, Clock, BookOpen, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingSectionProps {
  language: 'th' | 'en';
}

const PricingSection: React.FC<PricingSectionProps> = ({ language }) => {
  const translations = {
    th: {
      title: 'แผนและราคา',
      subtitle: 'เรียนสดกำบงอังกฤษกับครูต่างชาติ พร้อมเอกสารครบ ดูย้อนหลังได้ เรียนที่ไหนก็ได้ ทุกเวลา',
      generalEnglish: {
        name: 'General English',
        price: '390',
        duration: 'เดือนละ 390 บาท',
        features: [
          'รับกรณีเข้าเรียน 30 วัน',
          'เรียนกับครูต่างชาติ',
          'เรียนกับครูไทย',
          'เรียนวันละ 4 ชั่วโมง',
          'เดือนละมากกว่า 120 ชั่วโมง',
          'เริมสดผ่านซูม',
          'ฟรี เอกสารประกอบการเรียน',
          'ฟรี วีดีโอย้อนหลัง'
        ],
        button: 'BUY NOW'
      },
      cefrEnglish: {
        name: 'CEFR English',
        price: '590',
        duration: 'เดือนละ 590 บาท',
        features: [
          'สอบระดับ A1-B1',
          'พบครูสีปาปเหลี่่องชั่วโมง',
          'หลักสูตร 4 เดือน',
          'วันามร 120 ชั่วโมง',
          'มีใจระดับก่อนเรียน',
          'เรียนผ่านอีโค',
          'สอบผ่าน รับใบเซอร์ จาก สถาบันระดับโลก'
        ],
        button: 'BUY NOW'
      },
      comboPackage: {
        name: 'Combo แพคสุดคุ้ม',
        subtitle: 'General English + CEFR English',
        description: 'ซื้อ 2 คอร์ส ประหยัดกว่า',
        button: 'BUY NOW'
      },
      smallGroup: {
        name: 'Small group 5 คน',
        subtitle: 'เรียนกับครูชาวต่างชาติ',
        price: '1,500',
        duration: '8 ช่วโมง 1,500 บาท',
        features: [
          'เรียนกลุ่มเล็ก',
          'เน้นสนทนา',
          'จัดกลุ่มตระระดับของผู้เรียน',
          'เรียนกับครูต่างชาติจำาก อเมริกาง'
        ],
        button: 'BOOK NOW'
      },
      discount: 'รับส่วนลด 10-20 %',
      popular: 'ยอดนิยม',
      monthly: '/เดือน'
    },
    en: {
      title: 'Plan and Pricing',
      subtitle: 'Learn English online with native teachers, complete materials, replay available, learn anywhere, anytime',
      generalEnglish: {
        name: 'General English',
        price: '390',
        duration: '390 THB per month',
        features: [
          '30 days access',
          'Learn with native teachers',
          'Learn with Thai teachers',
          '4 hours per day',
          '120+ hours per month',
          'Live classes via Zoom',
          'Free learning materials',
          'Free recorded videos'
        ],
        button: 'BUY NOW'
      },
      cefrEnglish: {
        name: 'CEFR English',
        price: '590',
        duration: '590 THB per month',
        features: [
          'A1-B1 levels',
          'Structured learning path',
          '4-month course',
          '120 hours total',
          'Pre-assessment',
          'Learn via video calls',
          'International certificate upon completion'
        ],
        button: 'BUY NOW'
      },
      comboPackage: {
        name: 'Combo Package',
        subtitle: 'General English + CEFR English',
        description: 'Buy 2 courses, save more',
        button: 'BUY NOW'
      },
      smallGroup: {
        name: 'Small Group 5 People',
        subtitle: 'Learn with native teachers',
        price: '1,500',
        duration: '8 hours 1,500 THB',
        features: [
          'Small group learning',
          'Focus on conversation',
          'Grouped by level',
          'Learn with native teachers from America'
        ],
        button: 'BOOK NOW'
      },
      discount: '10-20% Discount',
      popular: 'Most Popular',
      monthly: '/month'
    }
  };

  const t = translations[language];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* General English */}
          <Card className="course-card relative">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                {t.generalEnglish.name}
              </CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-blue-600">฿{t.generalEnglish.price}</span>
                <span className="text-gray-500">{t.monthly}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{t.generalEnglish.duration}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {t.generalEnglish.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/payment/general">
                <Button className="btn-primary w-full mt-6">
                  {t.generalEnglish.button}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* CEFR English */}
          <Card className="course-card relative">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                {t.cefrEnglish.name}
              </CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold text-blue-600">฿{t.cefrEnglish.price}</span>
                <span className="text-gray-500">{t.monthly}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{t.cefrEnglish.duration}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {t.cefrEnglish.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/payment/cefr">
                <Button className="btn-primary w-full mt-6">
                  {t.cefrEnglish.button}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Combo Package */}
          <Card className="course-card relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1">
              {t.popular}
            </Badge>
            <CardHeader className="text-center pb-4 pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-white font-bold text-2xl">+</div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                {t.comboPackage.name}
              </CardTitle>
              <p className="text-sm text-purple-600 font-medium">{t.comboPackage.subtitle}</p>
              <div className="mt-4">
                <div className="text-red-500 font-bold text-lg">{t.comboPackage.description}</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Badge className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
                  {t.discount}
                </Badge>
              </div>
              <Link to="/payment/combo">
                <Button className="btn-secondary w-full mt-6">
                  {t.comboPackage.button}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Small Group */}
          <Card className="course-card relative bg-gradient-to-br from-red-50 to-red-100">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                {t.smallGroup.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{t.smallGroup.subtitle}</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-red-600">฿{t.smallGroup.price}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{t.smallGroup.duration}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {t.smallGroup.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/booking/small-group">
                <Button className="bg-red-500 hover:bg-red-600 text-white w-full mt-6">
                  {t.smallGroup.button}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Discount Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-3">
            <span className="text-purple-600 font-medium text-lg">{t.discount}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">*เมื่อซื้อ 3 เดือนขึ้นไป</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
