import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sofa, BedDouble, Shield, Phone, Mail, MapPin, Grid3X3, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessConfig } from '@/config/business';

const services = [
  { key: 'sofaCleaning', icon: Sofa, href: businessConfig.urls.services.sofaCleaning },
  { key: 'carpetCleaning', icon: Grid3X3, href: businessConfig.urls.services.carpetCleaning },
  { key: 'mattressCleaning', icon: BedDouble, href: businessConfig.urls.services.mattressCleaning },
  { key: 'impermeabilization', icon: Shield, href: businessConfig.urls.services.impermeabilization },
  { key: 'carpetRestoration', icon: Wrench, href: businessConfig.urls.services.carpetRestoration },
];

const companyLinks = [
  { key: 'home', to: '/#home' },
  { key: 'services', to: '/#services' },
  { key: 'about', to: '/#about' },
  { key: 'contact', to: '/#contact' },
];

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl font-bold mb-4">
                Super<span className="text-emerald-400">clim</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.key}>
                    <Link
                      to={service.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      <service.icon className="w-4 h-4" />
                      {t(`services.${service.key}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <span>{businessConfig.address.full}</span>
                </li>
                <li>
                  <a
                    href={`tel:${businessConfig.phone}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                    <span>{businessConfig.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                    <span>{businessConfig.email}</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Superclim. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                {t('footer.cookies')}
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
