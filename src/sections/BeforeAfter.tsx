import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type BeforeAfterItem = {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
  desktopLayout?: 'split' | 'stacked';
};

const beforeAfterImages: BeforeAfterItem[] = [
  {
    id: '1',
    before: '/images/before-after/img_1438.jpg',
    after: '/images/before-after/img_1448.jpg',
    title: 'Limpieza de Sofá',
    description: 'Recuperación del color y eliminación de manchas visibles',
    desktopLayout: 'stacked',
  },
  {
    id: '2',
    before: '/images/before-after/img_2870.jpg',
    after: '/images/before-after/img_2875.jpg',
    title: 'Limpieza de Sofá Chaise Longue',
    description: 'Tratamiento profundo en zonas de uso diario',
  },
  {
    id: '3',
    before: '/images/before-after/img_0640.jpg',
    after: '/images/before-after/img_0647.jpg',
    title: 'Limpieza de Sillón',
    description: 'Resultado real en tapicería clara',
  },
];

function ResultImage({
  src,
  alt,
  label,
  tone,
  desktopLayout = 'split',
}: {
  src: string;
  alt: string;
  label: string;
  tone: 'before' | 'after';
  desktopLayout?: 'split' | 'stacked';
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gray-100 ${
        desktopLayout === 'stacked' ? '' : 'lg:h-64'
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={
          desktopLayout === 'stacked'
            ? 'h-auto w-full'
            : 'h-auto w-full lg:h-full lg:object-cover'
        }
      />
      <div
        className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg ${
          tone === 'before' ? 'bg-gray-900/75' : 'bg-emerald-600/90'
        }`}
      >
        {label}
      </div>
    </div>
  );
}

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

        <div className="grid gap-8 lg:grid-cols-3">
          {beforeAfterImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200"
            >
              <div
                className={
                  item.desktopLayout === 'stacked'
                    ? 'grid'
                    : 'grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'
                }
              >
                <ResultImage
                  src={item.before}
                  alt={`${t('beforeAfter.before')} - ${item.title}`}
                  label={t('beforeAfter.before')}
                  tone="before"
                  desktopLayout={item.desktopLayout}
                />
                <ResultImage
                  src={item.after}
                  alt={`${t('beforeAfter.after')} - ${item.title}`}
                  label={t('beforeAfter.after')}
                  tone="after"
                  desktopLayout={item.desktopLayout}
                />
              </div>

              <div className="min-h-[104px] p-5 text-center">
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
