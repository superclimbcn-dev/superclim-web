import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Wind,
  Leaf,
  Shield,
  Hotel,
  Clock,
  Award,
  Droplets,
  Car,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const especialidades = [
  {
    icon: Wind,
    title: 'Limpieza de Sofás con Vapor',
    description:
      'Técnica de limpieza con vapor que elimina el 99.9% de bacterias y ácaros sin productos químicos agresivos. Ideal para familias con bebés y personas alérgicas.',
    keywords: ['vapor clean sofás', 'limpieza vapor barcelona', 'desinfección vapor'],
  },
  {
    icon: Leaf,
    title: 'Limpieza Ecológica de Tapicerías',
    description:
      'Productos 100% biodegradables y certificados por Ecocert. Limpieza profunda respetuosa con el medio ambiente y segura para mascotas.',
    keywords: ['limpieza ecológica', 'productos biodegradables', 'eco-friendly'],
  },
  {
    icon: Shield,
    title: 'Limpieza de Sofás para Alérgicos',
    description:
      'Tratamiento especializado que elimina ácaros, polen y alérgenos. Recomendado para personas con asma, rinitis alérgica y eczema.',
    keywords: ['antiácaros', 'alergias', 'asma', 'limpieza hipoalergénica'],
  },
  {
    icon: Hotel,
    title: 'Limpieza de Sofás para Airbnb Barcelona',
    description:
      'Servicio express para apartamentos turísticos y alquileres vacacionales. Secado rápido para poder recibir huéspedes el mismo día.',
    keywords: ['airbnb', 'apartamentos turísticos', 'alquiler vacacional', 'limpieza express'],
  },
  {
    icon: Clock,
    title: 'Limpieza de Sofás a Domicilio Urgente',
    description:
      'Servicio de emergencia disponible en menos de 24 horas. Ideal para manchas recientes, derrames accidentales o preparación de eventos.',
    keywords: ['urgente', 'emergencia', '24 horas', 'same day'],
  },
  {
    icon: Award,
    title: 'Empresa de Limpieza de Sofás Certificada',
    description:
      'Técnicos certificados con formación continua. Más de 16 años de experiencia y 156 reseñas de 5 estrellas en Google.',
    keywords: ['certificada', 'profesional', 'experiencia', 'garantía'],
  },
  {
    icon: Droplets,
    title: 'Blindaje de Sofás e Impermeabilización',
    description:
      'Protección avanzada contra líquidos, manchas y desgaste. Tratamiento invisible que no altera la textura ni el color del tejido. Garantía de 2 años.',
    keywords: ['blindaje', 'impermeabilización', 'protección sofás', 'garantía'],
  },
  {
    icon: Car,
    title: 'Limpieza de Tapizados de Coche y Vehículos',
    description:
      'Servicio especializado para tapicería de vehículos: asientos, techos, alfombrillas y maleteros. Eliminamos olores de tabaco y mascotas.',
    keywords: ['coche', 'vehículos', 'tapicería coche', 'eliminar olores'],
  },
  {
    icon: Building2,
    title: 'Limpieza de Sofás en Comunidades de Vecinos',
    description:
      'Servicios coordinados para zonas comunes, porterías y salones sociales. Presupuestos especiales para comunidades y administradores de fincas.',
    keywords: ['comunidades', 'vecinos', 'zonas comunes', 'administradores'],
  },
];

export function SpecializedServices() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="especializados" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Servicios Especializados 2026
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluciones avanzadas para cada{' '}
            <span className="text-emerald-600">necesidad</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Superclim nos adaptamos a las nuevas demandas del mercado. Descubre nuestros
            servicios especializados diseñados para situaciones específicas y clientes exigentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {especialidades.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
            <ArrowRight className="w-5 h-5" />
            <span>Todos nuestros servicios incluyen presupuesto gratuito sin compromiso</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
