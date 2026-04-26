import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Leaf, Award, Shield, Home, ThumbsUp, Zap, CheckCircle } from 'lucide-react';

const features = [
  {
    key: 'ecoProducts',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
  },
  {
    key: 'certified',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'guarantee',
    icon: Shield,
    color: 'from-amber-500 to-orange-500',
  },
  {
    key: 'homeService',
    icon: Home,
    color: 'from-purple-500 to-pink-500',
  },
  {
    key: 'results',
    icon: ThumbsUp,
    color: 'from-rose-500 to-red-500',
  },
  {
    key: 'fast',
    icon: Zap,
    color: 'from-indigo-500 to-violet-500',
  },
];

const trustBadges = [
  'Técnicos certificados',
  'Productos ecológicos',
  'Garantía por escrito',
  'Sin mover muebles',
  'Precios transparentes',
  'Atención 24/7',
];

export function WhyUs() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Nuestra Ventaja
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {t(`whyUs.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`whyUs.${feature.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Confía en los Expertos
              </h3>
              <p className="text-gray-600 mb-6">
                Más de 16 años de experiencia nos avalan como líderes en limpieza profesional 
                de sofás, alfombras y colchones en Barcelona y alrededores.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">16+</div>
                  <div className="text-sm text-gray-500">Años</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">5K+</div>
                  <div className="text-sm text-gray-500">Clientes</div>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">4.9</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
