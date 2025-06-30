
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Settings } from 'lucide-react';

interface NavbarProps {
  language: 'th' | 'en';
  onLanguageChange: (lang: 'th' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    th: {
      home: 'หน้าหลัก',
      courses: 'คอร์สเรียน',
      pricing: 'ราคา',
      about: 'เกี่ยวกับเรา',
      contact: 'ติดต่อ',
      login: 'เข้าสู่ระบบ',
      register: 'สมัครสมาชิก',
      bookTrial: 'ลองเรียนฟรี'
    },
    en: {
      home: 'Home',
      courses: 'Courses',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
      bookTrial: 'Book Free Trial'
    }
  };

  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">KE</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Kru English</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.home}
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.courses}
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.pricing}
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.about}
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.contact}
            </Link>
          </div>

          {/* Language Switcher & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onLanguageChange('th')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'th' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                TH
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 text-sm rounded ${
                  language === 'en' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                EN
              </button>
            </div>
            
            <Link to="/auth">
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                {t.login}
              </Button>
            </Link>
            
            <Link to="/booking">
              <Button className="btn-primary">
                {t.bookTrial}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.courses}
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.pricing}
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.about}
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </Link>
              
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center justify-between px-3">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onLanguageChange('th')}
                      className={`px-3 py-1 text-sm rounded ${
                        language === 'th' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      ไทย
                    </button>
                    <button
                      onClick={() => onLanguageChange('en')}
                      className={`px-3 py-1 text-sm rounded ${
                        language === 'en' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <div className="mt-3 space-y-2 px-3">
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      {t.login}
                    </Button>
                  </Link>
                  <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full btn-primary">
                      {t.bookTrial}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
