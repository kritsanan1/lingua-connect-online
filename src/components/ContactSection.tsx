
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  language: 'th' | 'en';
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const translations = {
    th: {
      title: 'ติดต่อเรา',
      subtitle: 'ภาพตัวอย่างครบ',
      brandName: 'Kru English',
      lineId: 'Line ID: @kruenglish',
      website: 'https://lin.ee/yOEjxmf'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Complete sample images',
      brandName: 'Kru English',
      lineId: 'Line ID: @kruenglish',
      website: 'https://lin.ee/yOEjxmf'
    }
  };

  const t = translations[language];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {t.title}
        </h2>
        
        <div className="bg-blue-600 text-white rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 mr-3" />
              <span className="text-2xl font-bold">{t.subtitle}</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">{t.brandName}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* QR Code Card */}
          <Card className="course-card">
            <CardContent className="p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="w-40 h-40 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">QR Code</span>
                </div>
              </div>
              <p className="text-lg font-medium text-gray-900 mb-2">{t.lineId}</p>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="course-card">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t.brandName}</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span className="font-medium text-gray-900">{t.lineId}</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <ExternalLink className="w-6 h-6 text-blue-600" />
                  <a 
                    href={t.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {t.website}
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-purple-50 rounded-xl">
                  <Mail className="w-6 h-6 text-purple-600" />
                  <span className="font-medium text-gray-900">info@kruenglish.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
