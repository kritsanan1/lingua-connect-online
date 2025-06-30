
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Video, Users, Clock, Calendar, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LiveClassSectionProps {
  language: 'th' | 'en';
}

const LiveClassSection: React.FC<LiveClassSectionProps> = ({ language }) => {
  const translations = {
    th: {
      title: 'คลาสภาษาอังกฤษที่ยืดหยุ่น ปรับแต่งได้ตามใจคุณ',
      subtitle: 'เรียนภาษาอังกฤษออนไลน์กับครูไทย และครูต่างชาติ',
      features: [
        '30 วัน 120+ ชั่วโมง',
        'เรียนสดผ่าน Zoom',
        'เรียนย้อนหลังได้ 24/7'
      ],
      benefits: [
        'เราช่วยให้คุณพูดภาษาอังกฤษได้อย่างมั่นใจ พัฒนาทักษะการพูด ออกเสียง และเพิ่มคำศัพท์ได้จริง',
        'ฝึกสนทนาได้กับแนบกลุ่มเล็ก และเรียนด้วย ตัวเองผ่านวิดีโอ',
        'จัดการรางเรียนเองได้ตามสะดวก เลือกเรียน ตามเป้าหมายและความสนใจของคุณ',
        'เรียนได้ตั้งแต่ผู้เฟิน จนถึงระดับสูง พร้อม พัฒนาอย่างต่อเนื่อง'
      ],
      discount: 'รับส่วนลด 10-20 %',
      note: '*เมื่อซื้อ 3 เดือนขึ้นไป',
      cta: 'ขึ้นลงใน Pricing'
    },
    en: {
      title: 'Flexible English Classes Customized for You',
      subtitle: 'Learn English online with Thai and foreign teachers',
      features: [
        '30 days 120+ hours',
        'Live classes via Zoom',
        'Replay available 24/7'
      ],
      benefits: [
        'We help you speak English confidently, develop speaking skills, pronunciation, and truly increase vocabulary',
        'Practice conversation in small groups and learn independently through videos',
        'Manage your own study schedule conveniently, choose to learn according to your goals and interests',
        'Learn from beginner to advanced level with continuous development'
      ],
      discount: '10-20% Discount',
      note: '*When purchasing 3 months or more',
      cta: 'Go to Pricing'
    }
  };

  const t = translations[language];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Online English Learning"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating feature cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Live Classes</div>
                  <div className="text-sm text-gray-500">Interactive Learning</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Small Groups</div>
                  <div className="text-sm text-gray-500">5 students max</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {t.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.subtitle}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-lg font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-purple-50 rounded-2xl p-6 space-y-4">
              <Badge className="bg-purple-600 text-white px-4 py-2 text-lg">
                {t.discount}
              </Badge>
              <p className="text-sm text-gray-500">{t.note}</p>
              <Link to="/pricing">
                <Button className="btn-secondary">
                  {t.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveClassSection;
