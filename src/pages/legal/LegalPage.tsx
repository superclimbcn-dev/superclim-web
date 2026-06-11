import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOMeta } from '@/components/SEOMeta';
import { businessConfig } from '@/config/business';
import type { SEOPageConfig } from '@/config/seo';

type LegalPageProps = {
  type: 'privacy' | 'cookies' | 'terms';
};

const legalContent = {
  privacy: {
    title: 'Política de Privacidad',
    description: 'Información sobre el tratamiento de datos personales en Superclim Servicios.',
    sections: [
      {
        heading: 'Responsable del tratamiento',
        body: `${businessConfig.fullName}, con contacto en ${businessConfig.email}, trata los datos facilitados a través del sitio web para responder solicitudes de información, presupuestos y comunicaciones relacionadas con nuestros servicios.`,
      },
      {
        heading: 'Datos que podemos tratar',
        body: 'Podemos tratar nombre, teléfono, correo electrónico, ciudad, servicio solicitado y cualquier información que el usuario incluya voluntariamente en formularios, llamadas, WhatsApp o correo electrónico.',
      },
      {
        heading: 'Finalidad',
        body: 'Usamos los datos para gestionar consultas, preparar presupuestos, prestar servicios contratados, atender incidencias y mantener comunicaciones comerciales relacionadas con Superclim cuando exista base legal para ello.',
      },
      {
        heading: 'Conservación y derechos',
        body: `Los datos se conservan durante el tiempo necesario para atender la solicitud y cumplir obligaciones legales. Puedes solicitar acceso, rectificación, supresión, oposición o limitación escribiendo a ${businessConfig.email}.`,
      },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    description: 'Información sobre el uso de cookies y servicios externos en el sitio web de Superclim.',
    sections: [
      {
        heading: 'Uso de cookies',
        body: 'Este sitio puede utilizar cookies técnicas necesarias para el funcionamiento de la navegación, preferencias de interfaz y servicios integrados.',
      },
      {
        heading: 'Servicios de terceros',
        body: 'El sitio puede integrar servicios externos como Google Maps, Google Reviews, WhatsApp y recursos multimedia. Estos servicios pueden aplicar sus propias cookies o tecnologías similares cuando el usuario interactúa con ellos.',
      },
      {
        heading: 'Gestión de cookies',
        body: 'Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Al hacerlo, algunas funcionalidades del sitio o servicios externos podrían no funcionar correctamente.',
      },
      {
        heading: 'Actualizaciones',
        body: 'Esta política puede actualizarse si incorporamos nuevas herramientas, analítica o servicios externos.',
      },
    ],
  },
  terms: {
    title: 'Términos y Condiciones',
    description: 'Condiciones generales de uso del sitio web y solicitud de servicios de Superclim.',
    sections: [
      {
        heading: 'Uso del sitio web',
        body: 'El contenido de este sitio tiene finalidad informativa y comercial. El usuario se compromete a utilizarlo de forma lícita y a no realizar acciones que puedan dañar el servicio o su disponibilidad.',
      },
      {
        heading: 'Presupuestos y servicios',
        body: 'Los precios, calculadoras o estimaciones mostradas en la web son orientativos. El presupuesto final puede depender del estado del tejido, tamaño, desplazamiento, dificultad del servicio y valoración profesional.',
      },
      {
        heading: 'Garantías',
        body: 'Las garantías aplicables se informan según el servicio contratado. La impermeabilización puede contar con garantía por escrito conforme a las condiciones acordadas con el cliente.',
      },
      {
        heading: 'Contacto',
        body: `Para cualquier consulta sobre estos términos puedes escribir a ${businessConfig.email} o llamar al ${businessConfig.phoneDisplay}.`,
      },
    ],
  },
};

export default function LegalPage({ type }: LegalPageProps) {
  const content = legalContent[type];
  const canonicalPath = type === 'privacy' ? '/politica-de-privacidad' : type === 'cookies' ? '/politica-de-cookies' : '/terminos-y-condiciones';
  const seo: SEOPageConfig = {
    title: `${content.title} | Superclim Servicios`,
    description: content.description,
    canonical: `${businessConfig.urls.base}${canonicalPath}`,
    ogType: 'website',
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta config={seo} />
      <Header />
      <main className="pt-28 pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">{content.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{content.description}</p>
          </div>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <section key={section.heading} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-gray-600">{section.body}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
