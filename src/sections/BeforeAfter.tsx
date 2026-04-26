import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const beforeAfterImages = [
  {
    id: '1',
    before: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    after: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000&sat=-100&con=1.5',
    title: 'Limpieza de Sofá',
    description: 'Eliminación de manchas profundas',
  },
  {
    id: '2',
    before: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000&sat=0.3&con=0.8',
    after: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    title: 'Restauración Completa',
    description: 'Recuperación del color original',
  },
  {
    id: '3',
    before: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000&blur=2&sat=0.5',
    after: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
    title: 'Limpieza de Alfombra',
    description: 'Eliminación de ácaros y alérgenos',
  },
];

export function BeforeAfter() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Resultados Reales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('beforeAfter.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={item.before}
                      alt={`${t('beforeAfter.before')} - ${item.title}`}
                      style={{ filter: 'grayscale(30%) brightness(0.8)' }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={item.after}
                      alt={`${t('beforeAfter.after')} - ${item.title}`}
                    />
                  }
                  style={{ height: 300 }}
                  className="w-full"
                  handle={
                    <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-emerald-500">
                      <div className="flex gap-1">
                        <div className="w-0 h-0 border-t-6 border-b-6 border-r-8 border-transparent border-r-emerald-500" />
                        <div className="w-0 h-0 border-t-6 border-b-6 border-l-8 border-transparent border-l-emerald-500" />
                      </div>
                    </div>
                  }
                />

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg">
                  <span className="text-white text-sm font-medium">{t('beforeAfter.before')}</span>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-600/90 backdrop-blur-sm rounded-lg">
                  <span className="text-white text-sm font-medium">{t('beforeAfter.after')}</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
