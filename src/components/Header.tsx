import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { businessConfig } from '@/config/business';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
];

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // En páginas interiores, forzar header scrolleado siempre
    if (!isHomePage) {
      setIsScrolled(true);
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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <motion.div 
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-emerald-700' : 'text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Super<span className="text-emerald-500">clim</span>
              </motion.div>
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
                      scrollToSection(item.href);
                    }}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-500 ${
                      isScrolled ? 'text-gray-700' : 'text-white/90'
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
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {t('nav.home')}
                </Link>
              )}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              
              <a
                href={`tel:${businessConfig.phone}`}
                className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
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

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-4">
                  {isHomePage ? (
                    navItems.map((item, index) => (
                      <motion.a
                        key={item.key}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-3 border-b border-gray-100"
                      >
                        {t(`nav.${item.key}`)}
                      </motion.a>
                    ))
                  ) : (
                    <Link
                      to="/"
                      className="text-lg font-medium text-gray-700 hover:text-emerald-600 py-3 border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t('nav.home')}
                    </Link>
                  )}
                  
                  {isHomePage && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6"
                    >
                      <Button
                        onClick={() => scrollToSection('#contact')}
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full py-6"
                      >
                        {t('nav.quote')}
                      </Button>
                    </motion.div>
                  )}

                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    href={`tel:${businessConfig.phone}`}
                    className="flex items-center justify-center gap-2 text-emerald-600 font-medium mt-4"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{businessConfig.phoneDisplay.replace('+34 ', '')}</span>
                  </motion.a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
