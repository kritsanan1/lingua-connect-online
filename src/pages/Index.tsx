
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PricingSection from '@/components/PricingSection';
import LiveClassSection from '@/components/LiveClassSection';
import ContactSection from '@/components/ContactSection';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [language, setLanguage] = useState<'th' | 'en'>('th');
  const { user, signOut } = useAuth();

  const handleLanguageChange = (lang: 'th' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      
      {/* Auth Status Bar */}
      <div className="fixed top-16 right-4 z-50">
        {user ? (
          <div className="bg-white rounded-lg shadow-lg p-3 flex items-center space-x-3">
            <span className="text-sm text-gray-600">
              {language === 'th' ? 'สวัสดี' : 'Hello'} {user.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={signOut}
              className="text-sm"
            >
              {language === 'th' ? 'ออกจากระบบ' : 'Sign Out'}
            </Button>
          </div>
        ) : (
          <Link to="/auth">
            <Button className="btn-primary">
              {language === 'th' ? 'เข้าสู่ระบบ' : 'Sign In'}
            </Button>
          </Link>
        )}
      </div>
      
      <main className="pt-16">
        <HeroSection language={language} />
        <PricingSection language={language} />
        <LiveClassSection language={language} />
        <ContactSection language={language} />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KE</span>
              </div>
              <span className="text-xl font-bold">Kru English</span>
            </div>
            <p className="text-gray-400 mb-6">
              {language === 'th' 
                ? 'เรียนภาษาอังกฤษออนไลน์กับครูเจ้าของภาษา' 
                : 'Learn English online with native teachers'
              }
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Kru English. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
