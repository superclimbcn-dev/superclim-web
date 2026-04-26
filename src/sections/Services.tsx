import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { Sofa, BedDouble, Shield, Armchair, Home, ArrowRight, Grid3X3, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { businessConfig } from '@/config/business';

const services = [
  {
    key: 'sofaCleaning',
    icon: Sofa,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    href: businessConfig.urls.services.sofaCleaning,
  },
  {
    key: 'carpetCleaning',
    icon: Grid3X3,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    href: businessConfig.urls.services.carpetCleaning,
  },
  {
    key: 'mattressCleaning',
    icon: BedDouble,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    href: businessConfig.urls.services.mattressCleaning,
  },
  {
    key: 'impermeabilization',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    href: businessConfig.urls.services.impermeabilization,
  },
  {
    key: 'armchairCleaning',
    icon: Armchair,
    color: 'from-rose-500 to-red-500',
    bgColor: 'bg-rose-50',
    href: businessConfig.urls.services.armchairCleaning,
  },
  {
    key: 'homeService',
    icon: Home,
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-50',
    href: businessConfig.urls.services.homeService,
  },
];

export function Services() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Servicios Profesionales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const features = t(`services.${service.key}.features`, { returnObjects: true }) as string[];
            
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-6 lg:p-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {t(`services.${service.key}.title`)}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {t(`services.${service.key}.description`)}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.href}
                      className="inline-flex items-center text-emerald-600 font-medium group/btn hover:text-emerald-700"
                    >
                      <span className="text-sm">Saber más</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
