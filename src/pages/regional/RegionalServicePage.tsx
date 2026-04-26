import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Check,
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Clock,
  Wind,
  Droplets,
  Sofa,
  Bed,
  LayoutGrid,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { businessConfig } from '@/config/business';
import { getCityBySlug } from '@/config/cities';
import { getRegionalSEO } from '@/config/seo';
import { regionalSofaUrls, regionalMattressUrls, regionalCarpetUrls } from '@/config/regionalUrls';
import { useSchemaOrg } from '@/hooks/useSchemaOrg';

interface RegionalServicePageProps {
  serviceType: 'sofas' | 'alfombras' | 'colchones';
  citySlug: string;
}

const serviceData = {
  sofas: {
    icon: Sofa,
    title: 'Limpieza de Sofás',
    process: [
      'Inspección inicial del estado del sofá y tipo de tela',
      'Aspirado profundo para eliminar polvo y ácaros superficiales',
      'Tratamiento de manchas específicas (grasa, vino, tinta)',
      'Limpieza profunda por inyección-extracción',
      'Desinfección con productos ecológicos certificados',
      'Secado rápido de 1 a 3 horas',
    ],
    benefits: [
      'Eliminación de ácaros, bacterias y alérgenos',
      'Eliminación de malos olores persistentes',
      'Conservación del tejido y prolongación de vida útil',
      'Mejora de la calidad del aire interior',
      'Prevención de plagas y microorganismos',
      'Productos 100% ecológicos y seguros',
    ],
    keywords: [
      'limpieza de sofás con vapor',
      'limpieza ecológica de tapicerías',
      'limpieza de sofás para alérgicos',
      'desinfección de sofás virus y bacterias',
      'limpieza de sofás a domicilio urgente',
      'empresa de limpieza de sofás certificada',
      'blindaje de sofás',
      'limpieza de tapizados de coche',
      'limpieza de sofás comunidades de vecinos',
    ],
  },
  alfombras: {
    icon: LayoutGrid,
    title: 'Lavado de Alfombras',
    process: [
      'Inspección detallada de la alfombra',
      'Aspirado profundo para levantar fibras',
      'Limpieza a fondo con productos específicos',
      'Secado rápido y controlado',
      'Desinfección y neutralización de olores',
    ],
    benefits: [
      'Eliminación de manchas difíciles',
      'Eliminación de ácaros y alérgenos',
      'Preservación de la calidad de las fibras',
      'Neutralización de olores persistentes',
      'Servicio de recogida y entrega disponible',
      'Restauración de alfombras orientales',
    ],
    keywords: [
      'lavado de alfombras profesional',
      'limpieza de alfombras persas',
      'restauración de alfombras orientales',
      'recogida y entrega de alfombras',
      'limpieza alfombras antiácaros',
      'alfombras industriales limpieza',
    ],
  },
  colchones: {
    icon: Bed,
    title: 'Limpieza de Colchones',
    process: [
      'Evaluación del estado del colchón',
      'Aspirado profundo de capas superiores',
      'Tratamiento de manchas y olores orgánicos',
      'Desinfección contra ácaros y bacterias',
      'Secado completo de 12 a 24 horas',
    ],
    benefits: [
      'Eliminación de ácaros del polvo',
      'Eliminación de bacterias y hongos',
      'Mejora del descanso y salud',
      'Alargamiento de la vida útil del colchón',
      'Tratamiento ideal para alérgicos',
      'Productos seguros para bebés',
    ],
    keywords: [
      'limpieza de colchones antiácaros',
      'desinfección de colchones',
      'limpieza colchones alérgicos',
      'eliminar ácaros colchón',
      'limpieza colchones a domicilio',
      'limpieza colchones bebés',
    ],
  },
};

export default function RegionalServicePage({ serviceType, citySlug }: RegionalServicePageProps) {
  useTranslation();
  const { getServiceSchema } = useSchemaOrg();
  const city = getCityBySlug(citySlug);
  const service = serviceData[serviceType];
  const ServiceIcon = service.icon;

  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  if (!city) {
    return null;
  }

  const exactPath =
    serviceType === 'sofas'
      ? `/servicios/${regionalSofaUrls[citySlug]}`
      : serviceType === 'colchones'
      ? `/mas-servicios/${regionalMattressUrls[citySlug]}`
      : `/limpieza-de-alfombras/${regionalCarpetUrls[citySlug]}`;

  const seo = getRegionalSEO(serviceType, city.displayName, exactPath);

  const serviceSchema = getServiceSchema(
    `${service.title} en ${city.displayName}`,
    `${service.title} profesional en ${city.displayName}. Servicio a domicilio con productos ecológicos.`,
    seo.canonical,
    city.displayName
  );

  const breadcrumbItems = [
    {
      label: 'Servicios',
      href:
        serviceType === 'sofas'
          ? '/limpieza-de-sofas/'
          : serviceType === 'alfombras'
          ? '/limpieza-de-alfombras/'
          : '/mas-servicios/',
    },
    { label: `${service.title} en ${city.displayName}` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seo} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 40 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 mb-6"
              >
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">
                  SERVICIO EN {city.displayName.toUpperCase()}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                {service.title}
                <span className="block text-emerald-400">en {city.displayName}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                Servicio profesional de {service.title.toLowerCase()} a domicilio en{' '}
                {city.displayName} y alrededores. Más de {businessConfig.experienceYears} años de
                experiencia. Productos ecológicos y resultados garantizados.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a href={`tel:${businessConfig.phone}`}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Presupuesto
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Hola! Me interesa el servicio de ${service.title.toLowerCase()} en ${city.displayName}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-8 mt-10"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">{businessConfig.experienceYears}+</div>
                  <div className="text-sm text-white/60">Años experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">5K+</div>
                  <div className="text-sm text-white/60">Clientes felices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">
                    <Star className="w-8 h-8 inline text-yellow-400 fill-yellow-400" /> 4.9
                  </div>
                  <div className="text-sm text-white/60">Valoración Google</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <Card className="bg-white/10 backdrop-blur-xl border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <ServiceIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-emerald-300">Servicio a domicilio</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {service.process.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span className="text-white/90 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info local */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : {}}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {service.title} en {city.displayName}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Superclim ofrece servicios profesionales de {service.title.toLowerCase()} en{' '}
                  {city.displayName}, una ciudad con {city.population} habitantes ubicada a{' '}
                  {city.distanceFromSabadell} de nuestra sede en Sabadell. Conocemos bien las
                  particularidades de la zona, incluyendo {city.localReference}.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Trabajamos en todos los barrios de {city.displayName}, incluyendo:{' '}
                  {city.neighborhoods.join(', ')}. Nuestro equipo se desplaza con equipos
                  profesionales para ofrecer el mejor servicio sin que tengas que mover tus muebles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wind className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Por qué limpiar en {city.displayName}?
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En {city.displayName}, los muebles tapizados se ven afectados por{' '}
                  {city.localProblem}. Esto hace que la limpieza profesional sea especialmente
                  importante para mantener un hogar saludable.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nuestros productos ecológicos están especialmente formulados para eliminar los
                  contaminantes típicos de la zona sin dañar los tejidos. El servicio se realiza en
                  tu domicilio con tiempo de secado adaptado a las condiciones climáticas locales.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-sm font-medium mb-4">
              Nuestro Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Cómo trabajamos en <span className="text-emerald-400">{city.displayName}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-white/90 mt-4">{paso}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Beneficios de nuestro servicio en <span className="text-emerald-600">{city.displayName}</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{beneficio}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Palabras clave en alta (nuevo contenido SEO) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Servicios Especializados
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Soluciones especializadas para <span className="text-emerald-600">{city.displayName}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Además de nuestro servicio principal de {service.title.toLowerCase()}, ofrecemos
              soluciones especializadas adaptadas a las necesidades de los hogares y negocios de{' '}
              {city.displayName}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keywords.map((keyword, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-gray-700 text-sm font-medium capitalize">{keyword}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zonas cercanas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              También servimos zonas cercanas a {city.displayName}
            </h2>
            <p className="text-gray-600 mb-8">
              Si resides en una zona próxima a {city.displayName}, también podemos atenderte.
              Consulta disponibilidad sin compromiso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
                  `Hola! Me interesa información sobre ${service.title.toLowerCase()}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
