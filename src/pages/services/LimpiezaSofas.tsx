import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Sofa, 
  Check, 
  Sparkles, 
  Wind,
  Shield,
  Phone,
  MessageCircle,
  Home,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { businessConfig } from '@/config/business';
import { SEOMeta } from '@/components/SEOMeta';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CityServiceLinks } from '@/components/CityServiceLinks';
import { seoConfig } from '@/config/seo';
import { useSchemaOrg } from '@/hooks/useSchemaOrg';
import { UpholsteryClusterLinks } from '@/components/UpholsteryClusterLinks';

const procesoLimpieza = [
  {
    title: "Inspección Inicial",
    description: "Evaluamos el estado del sofá, tipo de tela y manchas para determinar el mejor tratamiento."
  },
  {
    title: "Aspirado Profundo",
    description: "Eliminamos polvo, ácaros y partículas superficiales con equipos industriales de alta potencia."
  },
  {
    title: "Tratamiento de Manchas",
    description: "Aplicamos productos específicos para cada tipo de mancha (grasa, vino, tinta, etc.)."
  },
  {
    title: "Limpieza Profunda",
    description: "Utilizamos técnicas de inyección-extracción para limpiar hasta las capas más profundas."
  },
  {
    title: "Desinfección",
    description: "Eliminamos bacterias, hongos y olores con productos ecológicos certificados."
  },
  {
    title: "Secado Rápido",
    description: "El tiempo de secado varía de 1 a 3 horas dependiendo de las condiciones climáticas."
  }
];

const beneficios = [
  "Eliminación de ácaros, bacterias y alérgenos",
  "Eliminación de malos olores persistentes",
  "Conservación del tejido y prolongación de vida útil",
  "Mejora de la calidad del aire interior",
  "Prevención de plagas y microorganismos",
  "Productos 100% ecológicos y seguros"
];

export default function LimpiezaSofas() {
  useTranslation();
  const { getServiceSchema } = useSchemaOrg();
  const serviceSchema = {
    ...getServiceSchema(
      'Limpieza de Sofás Profesional a Domicilio',
      seoConfig.sofaCleaning.description,
      seoConfig.sofaCleaning.canonical,
    ),
    serviceType: 'Limpieza profesional de sofás a domicilio',
    areaServed: ['Barcelona', 'Sabadell', 'Terrassa', 'Sant Cugat', 'Cerdanyola', 'Barberà del Vallès', 'Sant Quirze']
      .map((name) => ({ '@type': 'City', name })),
  };
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seoConfig.sofaCleaning} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumb items={[{ label: 'Limpieza de Sofás' }]} />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6"
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">LIMPIEZA PROFESIONAL A DOMICILIO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Limpieza de Sofás Profesional a Domicilio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mb-4 text-lg font-semibold leading-relaxed text-blue-200"
              >
                Servicio para quienes buscan limpieza de sofas, limpieza sofas a domicilio o
                limpieza de sofa profesional en Barcelona, Sabadell y localidades cercanas.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                Nuestro servicio de limpieza de sofás a domicilio combina aspirado, tratamiento de manchas
                e inyección-extracción para retirar la suciedad y tratar los malos olores de la tapicería.
                Trabajamos en tu hogar, sin trasladar el sofá, y adaptamos el tratamiento al tejido y a su estado.
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
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Presupuesto
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la limpieza de sofás')}`}
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Servicio a Domicilio</h3>
                      <p className="text-blue-300">Sin mover tus muebles</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      "Trabajamos en tu hogar",
                      "Sin necesidad de traslados",
                      "Tiempo de secado: 1-3 horas",
                      "Productos ecológicos certificados"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center">
                          <Check className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Por qué limpiar el sofá? */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Importancia de la Limpieza
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Por Qué es Importante Limpiar el Sofá <span className="text-blue-600">Regularmente</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-6">
                    <Wind className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Eliminación de Contaminantes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Los sofás son imanes para el polvo, los ácaros y otras partículas diminutas que se asientan en sus tejidos. Estas partículas pueden convertirse en un peligro para la salud, especialmente para las personas que sufren de alergias o problemas respiratorios. La acumulación de polvo y alérgenos puede provocar síntomas como estornudos, picazón en los ojos y problemas respiratorios. La limpieza de sofá regularmente ayuda a eliminar estos contaminantes, mejorando la calidad del aire interior y proporcionando un ambiente más saludable para todos los miembros del hogar.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Prevención de Olores</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Con el tiempo, los sofás pueden absorber olores de diversas fuentes, como la cocina, las mascotas y el humo. Estos olores penetran en las fibras de la tapicería y pueden ser difíciles de eliminar con métodos de limpieza superficial. La limpieza profunda y regular del sofá asegura que se eliminen estos olores, dejando su mueble con un aroma fresco y agradable. Esto es especialmente importante en hogares con mascotas o en áreas con alta humedad, donde los olores pueden volverse particularmente persistentes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Conservación del Tejido</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Existe un mito común de que evitar la limpieza de sofá prolonga su vida útil al reducir el desgaste. Sin embargo, la realidad es opuesta. La suciedad y los residuos que se acumulan en las fibras de la tapicería actúan como abrasivos, causando un desgaste acelerado. Con el tiempo, esto puede llevar a la decoloración, el debilitamiento de las fibras y la necesidad de reemplazar la tapicería mucho antes de lo necesario. La limpieza de sofas regularmente mantiene el tejido en buen estado, ayudando a conservar su apariencia y textura originales por más tiempo.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mejora del Hogar</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Un sofá limpio y bien cuidado realza la estética general de cualquier espacio. Es uno de los elementos más prominentes en la mayoría de las salas de estar, y su estado puede influir significativamente en la impresión general que se tiene del hogar. Un sofá libre de manchas y olores contribuye a un ambiente más acogedor y atractivo, haciendo que tanto usted como sus invitados se sientan más cómodos y a gusto.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso de Limpieza */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-sm font-medium mb-4">
              Nuestro Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Proceso de <span className="text-blue-400">Limpieza Profesional de Sofás</span>
            </h2>
          </motion.div>

          <p className="text-center text-white/80 max-w-3xl mx-auto mb-10">
            Limpiamos sofás de 2, 3 y más plazas. Antes de empezar, revisamos el tipo de tejido,
            el estado del sofá y las manchas para elegir el tratamiento adecuado.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procesoLimpieza.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">{paso.title}</h3>
                  <p className="text-white/70">{paso.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Beneficios de nuestra <span className="text-blue-600">limpieza de sofás</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{beneficio}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-8">
              <Sofa className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para recuperar tu sofá?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Déjanos la limpieza de tu sofá a nosotros. Nuestro equipo técnico quiere 
              acercarse a ti y ofrecerte un servicio de calidad sin que tengas que salir de casa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${businessConfig.phone}`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola! Me interesa la limpieza de sofás. ¿Podrían darme un presupuesto?')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuevo contenido SEO 2026 - Limpieza especializada */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Servicios Especializados 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Limpieza de sofás especializada para cada{' '}
              <span className="text-blue-600">necesidad</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Limpieza de sofás con vapor
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nuestra técnica de limpieza con vapor elimina el 99.9% de bacterias y ácaros sin
                    necesidad de productos químicos agresivos. Ideal para familias con bebés,
                    personas con alergias y quienes buscan una limpieza profunda y natural.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Limpieza de sofás para alérgicos
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Tratamiento especializado que elimina ácaros del polvo, polen y otros alérgenos
                    acumulados en la tapicería. Recomendado para personas con asma, rinitis alérgica
                    y dermatitis atópica. Mejora la calidad del aire interior de tu hogar.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['antiácaros', 'alergias', 'asma', 'calidad del aire'].map((kw, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                        {kw}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Limpieza de sofás para Airbnb y viviendas turísticas
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Servicio express diseñado para propietarios de apartamentos turísticos en
                    Barcelona. Secado rápido que permite recibir huéspedes el mismo día. Mantén tus
                    sofás impecables y consigue mejores reseñas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['airbnb', 'apartamentos turísticos', 'express', 'secado rápido'].map((kw, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                        {kw}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Limpieza ecológica de tapicerías
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Productos 100% biodegradables certificados por Ecocert. Limpieza profunda
                    respetuosa con el medio ambiente, segura para niños, mascotas y plantas. Cuidamos
                    tu hogar y el planeta.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['ecológico', 'biodegradable', 'seguro mascotas', 'Ecocert'].map((kw, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                        {kw}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search intent: consultas habituales sin acento */}
      <section className="bg-white py-24" aria-labelledby="sofa-search-intent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              Atención en casa
            </span>
            <h2 id="sofa-search-intent" className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Limpieza de sofas a domicilio: cómo trabajamos
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Una limpieza profesional conviene cuando el aspirado habitual ya no retira la suciedad,
              aparecen manchas o el tejido conserva olores. En hogares con niños, animales o un uso
              diario intenso, revisar la tapicería periódicamente ayuda a decidir el tratamiento más
              adecuado sin esperar a que la suciedad se acumule.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-bold text-gray-900">Limpieza sofas para manchas, olores y uso diario</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                Primero identificamos el tejido y el estado de las manchas. El trabajo puede combinar
                aspirado, tratamiento localizado e inyección-extracción para extraer suciedad y humedad.
                La respuesta depende del material, la antigüedad de la mancha y los tratamientos previos.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-bold text-gray-900">Limpieza de sofa y tapicerías en casa</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                La limpieza superficial sirve para el mantenimiento cotidiano, pero no sustituye una
                extracción adaptada al tejido cuando hay suciedad incrustada. Realizamos la{' '}
                <Link
                  to="/limpieza-de-sofas/limpieza-de-sofas-a-domicilio"
                  className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800"
                >
                  limpieza de sofas a domicilio
                </Link>{' '}
                para evitar el traslado del mueble y trabajar directamente en la vivienda.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-bold text-gray-900">Sillones, butacas y sillas tapizadas</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                El servicio no se limita al sofá principal. También valoramos asientos individuales,
                butacas y sillas según su tapizado, estructura y nivel de uso. Consulta nuestra{' '}
                <Link
                  to="/limpieza-de-sofas/limpieza-de-sillones"
                  className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800"
                >
                  limpieza de sillones
                </Link>{' '}
                para conocer este tratamiento específico.
              </p>
            </article>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-blue-900 to-cyan-900 p-8 text-white lg:p-10">
            <h3 className="text-2xl font-bold">Servicio a domicilio en Barcelona y alrededores</h3>
            <p className="mt-4 max-w-4xl leading-relaxed text-white/80">
              Atendemos solicitudes de limpieza sofa en Barcelona, Sabadell, Terrassa, Sant Cugat,
              Cerdanyola, Barberà del Vallès, Sant Quirze y otras poblaciones cercanas. Confírmanos tu
              ubicación y el tipo de mueble para comprobar disponibilidad y preparar un presupuesto.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24" aria-labelledby="sofa-faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="sofa-faq" className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Preguntas frecuentes sobre limpieza de sofas
          </h2>
          <div className="mt-10 space-y-5">
            {[
              {
                question: '¿Buscas limpieza de sofas a domicilio?',
                answer: 'Podemos desplazarnos a tu vivienda y realizar allí la valoración y el tratamiento, sin trasladar el mueble. Indícanos la localidad, las plazas del sofá, el tejido si lo conoces y las manchas que te preocupan para orientarte mejor.',
              },
              {
                question: '¿Cada cuánto conviene hacer una limpieza de sofas?',
                answer: 'No hay una frecuencia única. Depende del uso, el tipo de tejido y de si conviven niños, mascotas o personas sensibles al polvo. El aspirado regular ayuda al mantenimiento; cuando aparecen manchas, olor o suciedad visible conviene solicitar una valoración profesional.',
              },
              {
                question: '¿Se pueden quitar manchas y malos olores de un sofa?',
                answer: 'Muchas manchas y olores pueden tratarse, pero el resultado depende de su origen, antigüedad, tejido y productos aplicados anteriormente. Antes de empezar revisamos la tapicería y elegimos un procedimiento compatible, sin prometer resultados absolutos.',
              },
              {
                question: '¿La limpieza de sofas se realiza en el domicilio?',
                answer: 'Sí, el servicio se realiza habitualmente en el domicilio. Llevamos el equipo necesario, protegemos la zona de trabajo y aplicamos el proceso previsto después de revisar el sofá.',
              },
              {
                question: '¿También limpiáis sillones, butacas y sillas tapizadas?',
                answer: 'Sí. Podemos valorar sillones, butacas y sillas tapizadas, siempre según el material y el estado de cada pieza. Puedes enviar fotos y medidas para que preparemos una orientación inicial.',
              },
            ].map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CityServiceLinks
        title="Limpieza de Sofás por Ciudad"
        subtitle="Servicio a domicilio en Barcelona, Sabadell, Terrassa, Sant Cugat, Cerdanyola, Barberà y Sant Quirze. Selecciona tu ciudad para más información."
        serviceColor="from-blue-500 to-cyan-500"
        cities={[
          { name: 'Barcelona', href: '/servicios/limpieza-de-sofas-barcelona' },
          { name: 'Sabadell', href: '/servicios/limpieza-de-sofa-sabadell' },
          { name: 'Terrassa', href: '/servicios/limpieza-de-sofas-terrassa' },
          { name: 'Sant Cugat', href: '/servicios/limpieza-de-sofas-sant-cugat' },
          { name: 'Cerdanyola', href: '/servicios/limpieza-de-sofa-cerdanyola' },
          { name: 'Barberà', href: '/servicios/limpieza-de-sofas-barbera-del-valles' },
          { name: 'Sant Quirze', href: '/servicios/limpieza-de-sofas-en-sant-quirze' },
        ]}
      />
      <UpholsteryClusterLinks current="general" />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
