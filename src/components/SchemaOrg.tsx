import { useSchemaOrg } from '@/hooks/useSchemaOrg';
import { businessConfig } from '@/config/business';

export function SchemaOrg() {
  const { getLocalBusinessSchema, getFAQSchema } = useSchemaOrg();

  const localBusinessSchema = getLocalBusinessSchema();

  const faqs = [
    {
      question: '¿Cuánto tiempo tarda el servicio?',
      answer: 'Un sofá de 3 plazas tarda aproximadamente 2-3 horas en limpiarse completamente. La impermeabilización requiere 4-6 horas adicionales para el secado.',
    },
    {
      question: '¿Los productos son seguros para niños y mascotas?',
      answer: 'Sí, utilizamos productos 100% ecológicos y biodegradables, seguros para toda la familia incluyendo bebés y mascotas.',
    },
    {
      question: '¿Cuánto dura la garantía de impermeabilización?',
      answer: 'Ofrecemos 2 años de garantía por escrito en nuestro servicio de impermeabilización.',
    },
    {
      question: '¿Trabajan fines de semana?',
      answer: 'Sí, ofrecemos servicio de lunes a sábado, incluyendo festivos para tu mayor comodidad.',
    },
    {
      question: '¿Necesito mover los muebles?',
      answer: 'No, nuestro equipo se encarga de todo. Trabajamos directamente en tu hogar sin que tengas que preocuparte por nada.',
    },
  ];

  const faqSchema = getFAQSchema(faqs);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: businessConfig.urls.base,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Servicios',
        item: `${businessConfig.urls.base}/servicios`,
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${businessConfig.name} - Limpieza Profesional de Sofás`,
    url: businessConfig.urls.base,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${businessConfig.urls.base}/buscar?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
