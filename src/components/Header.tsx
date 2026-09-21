import { MobileNavigation } from '@/components/MobileNavigation';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { businessConfig } from '@/config/business';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '/quienes-somos' },
  { key: 'contact', href: '#contact' },
];

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const effectiveIsScrolled = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (!isHomePage) {
      return;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          effectiveIsScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo-superclim.png"
                alt="Superclim"
                className="h-14 w-auto lg:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {isHomePage ? (
                navItems.map((item) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.href.startsWith('/')) {
                        navigate(item.href);
                        return;
                      }
                      scrollToSection(item.href);
                    }}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-500 ${
                      effectiveIsScrolled ? 'text-gray-700' : 'text-white/90'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.a>
                ))
              ) : (
                <Link
                  to="/"
                  className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-500 ${
                    effectiveIsScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {t('nav.home')}
                </Link>
              )}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher isScrolled={effectiveIsScrolled} />
              
              <a
                href={`tel:${businessConfig.phone}`}
                className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  effectiveIsScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>{businessConfig.phoneDisplay.replace('+34 ', '')}</span>
              </a>

              {isHomePage && (
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="hidden sm:flex bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full px-6 shadow-lg shadow-emerald-500/25"
                >
                  {t('nav.quote')}
                </Button>
              )}

              <MobileNavigation isScrolled={effectiveIsScrolled} />
            </div>
          </div>
        </div>
      </motion.header>


    </>
  );
}
