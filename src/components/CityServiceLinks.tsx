import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface CityLink {
  name: string;
  href: string;
}

interface CityServiceLinksProps {
  title: string;
  subtitle?: string;
  cities: CityLink[];
  serviceColor?: string;
}

export function CityServiceLinks({
  title,
  subtitle,
  cities,
  serviceColor = 'from-emerald-500 to-teal-500',
}: CityServiceLinksProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Servicio a Domicilio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cities.map((city, index) => (
            <motion.div
              key={city.href}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <Link to={city.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm cursor-pointer h-full">
                  <CardContent className="p-4 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${serviceColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-700 transition-colors truncate">
                        {city.name}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
