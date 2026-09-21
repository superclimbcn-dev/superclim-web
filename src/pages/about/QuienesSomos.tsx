import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Leaf, Users, ShieldCheck, Clock, TrendingUp, Phone, MessageCircle, Home, Building2, Briefcase, Warehouse, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { businessConfig } from '@/config/business';
import { seoConfig } from '@/config/seo';

const audiences = [
  {
    icon: Home,
    title: 'Limpieza especializada para particulares',
    description: 'Sofás, colchones, alfombras, moquetas, tapicerías, impermeabilización y otros servicios especializados para el hogar.',
    href: '/servicios',
    linkLabel: 'Ver servicios para particulares',
  },
  {
    icon: Building2,
    title: 'Comunidades de propietarios',
    description: 'Limpieza y mantenimiento de portales, escaleras, rellanos, ascensores y zonas comunes según las necesidades de cada finca.',
    href: businessConfig.urls.services.communityCleaning,
    linkLabel: 'Ver limpieza de comunidades',
  },
  {
    icon: Briefcase,
    title: 'Empresas y oficinas',
    description: 'Servicios periódicos de limpieza para oficinas y espacios de trabajo, organizados según frecuencia, horarios y necesidades del centro.',
    href: businessConfig.urls.services.officeCleaning,
    linkLabel: 'Ver limpieza para oficinas',
  },
  {
    icon: Warehouse,
    title: 'Naves y centros logísticos',
    description: 'Limpieza profesional para instalaciones industriales, almacenes y centros logísticos, con planificación adaptada a cada instalación.',
    href: businessConfig.urls.services.industrialCleaning,
    linkLabel: 'Ver limpieza industrial y logística',
  },
];

const valores = [
  {
    icon: Leaf,
    title: 'Compromiso con el cuidado',
    description: 'Seleccionamos productos y métodos adecuados a cada superficie, buscando un trabajo eficaz y responsable.',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad del servicio',
    description: 'Trabajamos con procedimientos definidos y atención al detalle en cada intervención.',
  },
  {
    icon: Award,
    title: 'Experiencia',
    description: `Aplicamos la experiencia acumulada durante más de ${businessConfig.experienceYears} años en servicios de limpieza y cuidado de superficies.`,
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    description: 'Adaptamos cada servicio al espacio, las prioridades y las necesidades del cliente.',
  },
  {
    icon: Clock,
    title: 'Organización y puntualidad',
    description: 'Planificamos cada intervención según el horario y las condiciones acordadas.',
  },
  {
    icon: TrendingUp,
    title: 'Mejora continua',
    description: 'Seguimos desarrollando nuestros procesos y servicios para responder a nuevas necesidades de particulares, comunidades y empresas.',
  },
];

export default function QuienesSomos() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.about} />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
          <div className="absolute inset-0 bg-[url('/images/hero-sofa-1920.webp')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <Breadcrumb items={[{ label: 'Quiénes Somos' }]} />

          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 40 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Quiénes <span className="text-emerald-400">Somos</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Superclim Servicios es una empresa de limpieza profesional con base en Sabadell y
              servicio en Barcelona y el Vallès Occidental. Trabajamos con particulares, comunidades
              de propietarios y empresas, ofreciendo servicios adaptados a cada tipo de espacio:
              desde limpieza especializada de tapicerías, colchones y alfombras hasta mantenimiento
              de comunidades, oficinas, naves industriales y centros logísticos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Nuestra <span className="text-emerald-600">Historia</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Superclim nació especializada en la limpieza y el cuidado de tapicerías, sofás,
                  colchones, alfombras y moquetas.
                </p>
                <p>
                  La experiencia adquirida durante años de trabajo nos permitió ampliar
                  progresivamente nuestra actividad hacia otros ámbitos de la limpieza profesional,
                  incorporando servicios para comunidades de propietarios, oficinas, empresas e
                  instalaciones industriales y logísticas.
                </p>
                <p>
                  Hoy combinamos nuestra experiencia en limpieza especializada con servicios
                  periódicos y planificados, adaptando cada intervención al tipo de espacio, la
                  frecuencia necesaria y las prioridades del cliente. Mantenemos la misma filosofía
                  desde el inicio: trabajo profesional, atención directa y cuidado por los detalles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 text-center p-6 bg-emerald-50 rounded-xl">
                      <div className="text-5xl font-bold text-emerald-600 mb-2">{businessConfig.experienceYears}+</div>
                      <div className="text-sm text-gray-600">Años de experiencia en limpieza profesional</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-lg font-bold text-emerald-700 mb-1">Particulares</div>
                      <div className="text-sm text-gray-600">Limpieza especializada para el hogar</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-lg font-bold text-emerald-700 mb-1">Comunidades</div>
                      <div className="text-sm text-gray-600">Mantenimiento de zonas comunes</div>
                    </div>
                    <div className="col-span-2 text-center p-4 bg-emerald-50 rounded-xl">
                      <div className="text-lg font-bold text-emerald-700 mb-1">Empresas</div>
                      <div className="text-sm text-gray-600">Oficinas, naves industriales y centros logísticos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A quién ayudamos */}
      <section className="py-24 bg-white" aria-labelledby="a-quien-ayudamos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="a-quien-ayudamos" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              A quién <span className="text-emerald-600">ayudamos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Servicios de limpieza adaptados a hogares, comunidades y espacios profesionales.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={audience.href}
                  className="group flex h-full flex-col rounded-xl border-0 bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-shadow hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{audience.title}</h3>
                  <p className="flex-1 text-sm text-gray-600 leading-relaxed">{audience.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
                    {audience.linkLabel}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-emerald-600">Valores</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada uno de nuestros servicios, desde la limpieza
              especializada hasta el mantenimiento profesional de espacios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                      <valor.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{valor.title}</h3>
                    <p className="text-gray-600">{valor.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Buscas un servicio de limpieza profesional?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Cuéntanos qué necesitas. Trabajamos con particulares, comunidades y empresas en
              Sabadell, Barcelona y diferentes municipios del Vallès.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/servicios">
                <Button
                  size="lg"
                  className="bg-white text-emerald-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Ver servicios
                </Button>
              </Link>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me gustaría más información sobre sus servicios')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
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
