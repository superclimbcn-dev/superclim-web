import { ArrowRight, Building2, Check, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { businessConfig } from '@/config/business';

const benefits = [
  'Portales y accesos',
  'Escaleras y rellanos',
  'Ascensores',
  'Garajes y zonas comunes',
];

export function CommunityFeaturedBanner() {
  const whatsappMessage = 'Hola, quiero información sobre el servicio de limpieza de comunidades.';
  const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-gray-50 pb-24 lg:pb-32" aria-labelledby="community-featured-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 shadow-2xl shadow-emerald-950/20"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex min-h-64 items-center justify-center overflow-hidden p-10 sm:min-h-80 lg:min-h-full lg:p-12" aria-hidden="true">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full border-[2.5rem] border-emerald-300/10" />
              <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-2xl" />
              <div className="absolute inset-x-10 bottom-8 top-16 rounded-t-[3rem] border border-white/15 bg-white/5 sm:inset-x-20" />
              <div className="relative flex h-40 w-40 items-center justify-center rounded-[2.5rem] border border-emerald-300/30 bg-white/10 shadow-2xl backdrop-blur-sm sm:h-48 sm:w-48">
                <Building2 className="h-24 w-24 text-emerald-200 sm:h-28 sm:w-28" strokeWidth={1.35} />
              </div>
              <div className="absolute bottom-8 left-8 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-emerald-100 backdrop-blur-sm sm:left-12">
                Sabadell · Terrassa · Sant Quirze
              </div>
            </div>

            <div className="bg-white p-7 sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Nuevo servicio</p>
              <h2 id="community-featured-title" className="text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Limpieza de comunidades, escaleras y portales
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Servicio profesional para comunidades de vecinos, presidentes y administradores de fincas en Sabadell, Terrassa, Sant Quirze y Vallès Occidental.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm font-semibold text-gray-800 sm:text-base">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="h-auto rounded-full bg-emerald-700 px-6 py-4 text-base hover:bg-emerald-800">
                  <Link to={businessConfig.urls.services.communityCleaning}>
                    Ver limpieza de comunidades
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-auto rounded-full border-emerald-200 px-6 py-4 text-base text-emerald-800 hover:bg-emerald-50 hover:text-emerald-900">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Solicitar presupuesto
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
