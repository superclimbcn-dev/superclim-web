import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, ArrowRight, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const locations = [
  {
    key: 'sabadell',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=600',
    coordinates: { lat: 41.5463, lng: 2.1106 },
  },
  {
    key: 'barcelona',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=600',
    coordinates: { lat: 41.3851, lng: 2.1734 },
  },
  {
    key: 'terrassa',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=600',
    coordinates: { lat: 41.5636, lng: 2.0116 },
  },
  {
    key: 'cerdanyola',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600',
    coordinates: { lat: 41.4911, lng: 2.1406 },
  },
  {
    key: 'santCugat',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
    coordinates: { lat: 41.4728, lng: 2.0853 },
  },
  {
    key: 'rubi',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600',
    coordinates: { lat: 41.4923, lng: 2.0321 },
  },
];

export function Locations() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 inline mr-1" />
            Cobertura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('locations.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={t(`locations.cities.${location.key}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <h3 className="text-xl font-bold">
                        {t(`locations.cities.${location.key}.name`)}
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t(`locations.cities.${location.key}.description`)}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm group/link"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Cómo llegar</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-emerald-100 to-teal-100 h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">
                Área de servicio: Barcelona y alrededores
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Sabadell, Barcelona, Terrassa, Cerdanyola, Sant Cugat, Rubí
              </p>
            </div>
            {/* Decorative dots */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-100" />
            <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-200" />
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-150" />
            <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-250" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
