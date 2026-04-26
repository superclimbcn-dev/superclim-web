import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { businessConfig } from '@/config/business';

export function WhatsAppButton() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const tooltipTimer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 5000);

    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 15000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, [hasInteracted]);

  const handleClick = () => {
    setHasInteracted(true);
    setShowTooltip(false);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'WhatsApp Button',
      });
    }
  };

  const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(t('whatsapp.message'))}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bottom-full right-0 mb-3 w-64"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-4 relative">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <p className="text-sm text-gray-700 pr-4">
                    ¿Tienes dudas? Escríbenos por WhatsApp y te respondemos en minutos.
                  </p>
                  <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-6 py-4 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
          >
            <div className="relative">
              <MessageCircle className="w-6 h-6" />
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            </div>
            <span className="font-semibold hidden sm:inline">{t('whatsapp.button')}</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
