export interface SEOPageConfig {
  title: string;
  description: string;
  canonical: string;
  h1?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
}

const baseUrl = 'https://superclim.es';
const defaultOgImage = `${baseUrl}/og-image.jpg`;

export const seoConfig: Record<string, SEOPageConfig> = {
  home: {
    title: 'Limpieza de Sofás a Domicilio en Barcelona, Sabadell, Terrassa, Sant Cugat y alrededores | Superclim',
    description: 'Limpieza profesional de sofás, colchones y alfombras a domicilio. Impermeabilización de sofás. Servicio en Sabadell, Terrassa, Sant Cugat Barcelona y alrededores. Presupuesto por WhatsApp.',
    canonical: `${baseUrl}/`,
    ogTitle: 'Superclim — Limpieza Profesional de Sofás en Barcelona',
    ogDescription: 'Más de 16 años de experiencia. Limpieza de sofás, alfombras y colchones a domicilio. Productos ecológicos y garantía de 2 años.',
    ogImage: defaultOgImage,
    ogType: 'website',
    keywords: 'limpieza de sofás, limpieza de alfombras, limpieza de colchones, impermeabilización de sofás, Barcelona, Sabadell, Terrassa',
  },
  sofaCleaning: {
    title: 'Limpieza de Sofás Profesional a Domicilio | Superclim',
    description: 'Limpieza profesional de sofás en Barcelona. Eliminamos manchas, suciedad y malos olores, restaurando tus muebles a su estado original.',
    canonical: `${baseUrl}/limpieza-de-sofas/`,
    ogTitle: 'Limpieza de Sofás Profesional | Superclim',
    ogDescription: 'Recupera el aspecto y la comodidad de tus sofás con nuestra limpieza profesional. Eliminamos manchas, suciedad y malos olores.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de sofás, limpieza sofas, limpieza de sofá, clean limpieza, limpieza de sofas Barcelona, lavado de sillones a domicilio',
  },
  carpetCleaning: {
    title: 'Lavado de Alfombras y Limpieza de Alfombras - SuperClim',
    description: 'Lavado profesional de alfombras en Barcelona, Sabadell y alrededores. Eliminamos manchas, suciedad y olores, con servicio de recogida y entrega y restauración de alfombras.',
    canonical: `${baseUrl}/limpieza-de-alfombras/`,
    ogTitle: 'Lavado de Alfombras Profesional | Superclim',
    ogDescription: 'Realizamos una limpieza profunda de alfombras, eliminando manchas, suciedad y olores. Servicio de recogida y entrega.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'lavado de alfombras, limpieza de alfombras, limpieza alfombras barcelona, restauración de alfombras, recogida y entrega',
  },
  mattressCleaning: {
    title: 'Limpieza de colchones barcelona, limpiar colchon, desinfeccion de colchon| Superclim',
    description: 'Descubre los servicios de limpieza de colchones y tapicerías de Superclim en Barcelona y alrededores. Ofrecemos limpieza profesional para eliminar ácaros, moho y manchas, garantizando un ambiente saludable y confortable.',
    canonical: `${baseUrl}/mas-servicios/`,
    ogTitle: 'Limpieza de Colchones a Domicilio | Superclim',
    ogDescription: 'Limpieza y desinfección de colchones en Barcelona y alrededores. Elimina ácaros, bacterias y malos olores.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de colchones, limpiar colchon, desinfeccion de colchon, limpieza colchones barcelona, eliminar ácaros colchón',
  },
  impermeabilization: {
    title: 'Impermeabilizar Sofá en Barcelona: Precio y Garantía — Superclim',
    description: 'Impermeabilización de sofás en Barcelona. Garantía de 2 años por escrito contra manchas y derrames. Productos ecológicos. Más de 16 años de experiencia. Solicita presupuesto.',
    canonical: `${baseUrl}/impermeabilizacion-de-sofas`,
    ogTitle: 'Impermeabilización de Sofás con 2 Años de Garantía | Superclim',
    ogDescription: 'Protege tus sofás contra manchas y líquidos con garantía de 2 años por escrito. Productos ecológicos y seguros.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'impermeabilización de sofás, blindaje de sofás, impermeabilizacion de sofas barcelona, protección sofás, garantía impermeabilización',
  },
  armchairCleaning: {
    title: 'Limpieza de Sillones en Sabadell, Barcelona y Alrededores - Superclim Servicios',
    description: 'Ofrecemos un servicio profesional de limpieza de sillones en Sabadell, Barcelona y alrededores utilizando técnicas avanzadas para garantizar la eliminación de manchas y suciedad, devolviendo la frescura a tus muebles.',
    canonical: `${baseUrl}/limpieza-de-sofas/limpieza-de-sillones`,
    ogTitle: 'Limpieza de Sillones Profesional | Superclim',
    ogDescription: 'Limpieza profunda de sillones en tu domicilio. Eliminamos manchas, olores y devolvemos el confort original.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de sillones, lavado de sillones, limpieza sillones barcelona, limpieza butacas',
  },
  homeService: {
    title: 'Limpieza de sofa a domicilio - Superclim Servicios',
    description: 'Disfruta de nuestro servicio especializado de limpieza de sofa a domicilio, limpieza de sofá a domicilio en Sabadell, Barcelona y alrededores. Eliminamos manchas y suciedad profundamente, restaurando la frescura de tus sofás sin que tengas que salir de casa.',
    canonical: `${baseUrl}/limpieza-de-sofas/limpieza-de-sofas-a-domicilio`,
    ogTitle: 'Servicio de Limpieza de Sofás a Domicilio | Superclim',
    ogDescription: 'Limpieza de sofás sin mover tus muebles. Equipos profesionales portátiles y productos ecológicos certificados.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de sofás a domicilio, limpieza sofás casa, servicio a domicilio barcelona, limpieza tapicerías a domicilio',
  },
  about: {
    title: 'Quiénes Somos — Superclim, Empresa de Limpieza en Barcelona',
    description: 'Superclim es líder en limpieza profesional de sofás, alfombras y colchones en Barcelona. Con más de 16 años de experiencia, ofrecemos servicios personalizados para garantizar un hogar más saludable y fresco. Descubre más sobre nuestra misión, equipo y beneficios de la limpieza profesional.',
    canonical: `${baseUrl}/quienes-somos`,
    ogTitle: 'Quiénes Somos | Superclim Servicios',
    ogDescription: 'Conoce a Superclim: más de 16 años de experiencia en limpieza profesional de tapicerías en Barcelona y alrededores.',
    ogImage: defaultOgImage,
    ogType: 'website',
    keywords: 'quienes somos superclim, empresa limpieza sofás barcelona, historia superclim',
  },
  contact: {
    title: 'Contacto - SuperClim Servicios',
    description: 'Contacta a SuperClim Servicios para todas tus necesidades de limpieza profesional. Llámanos al +34 624 529 442 o envíanos un correo a superclimbcn@gmail.com.',
    canonical: `${baseUrl}/contacto`,
    ogTitle: 'Contacto | Superclim Servicios',
    ogDescription: 'Llámanos al +34 624 529 442 o escríbenos por WhatsApp. Servicio de limpieza en Sabadell y alrededores.',
    ogImage: defaultOgImage,
    ogType: 'website',
    keywords: 'contacto superclim, teléfono limpieza sofás, presupuesto limpieza sofás barcelona',
  },
  restoration: {
    title: 'Restauracion de alfombras Barcelona y Alrededores - Superclim Servicios',
    description: 'Especialistas en la restauración de alfombras con técnicas manuales y sin productos químicos. Ofrecemos arreglos y reparaciones para alfombras orientales, manuales, y más. Contáctanos para revitalizar tu alfombra y devolverle su belleza original.',
    canonical: `${baseUrl}/restauracion-de-alfombras`,
    ogTitle: 'Restauración de Alfombras | Superclim',
    ogDescription: 'Restauración profesional de alfombras orientales y artesanales. Técnicas tradicionales y productos de calidad.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'restauración de alfombras, alfombras orientales, alfombras persas, reparación alfombras barcelona',
  },
  leatherCleaning: {
    title: 'Limpieza y impermeabilizacion de sofas de piel - Superclim Servicios',
    description: 'Servicio especializado de limpieza e hidratación de sofás de piel. Mantenemos tu sofá en perfectas condiciones con productos avanzados y técnicas expertas. ¡Contáctanos para una consulta gratuita y revitaliza tu sofá de piel hoy mismo!',
    canonical: `${baseUrl}/limpieza-de-muebles-en-cuero`,
    ogTitle: 'Limpieza de Muebles en Cuero | Superclim',
    ogDescription: 'Cuidado experto para tus muebles de cuero. Limpieza profunda sin dañar la piel natural.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de muebles en cuero, limpieza sofás piel, cuidado cuero barcelona, limpieza leather',
  },
  services: {
    title: 'Servicios de Limpieza Profesional en Barcelona | Superclim',
    description: 'Descubre nuestros servicios de limpieza profesional en Barcelona: limpieza de sofás, lavado de alfombras, impermeabilización de muebles, y más. Calidad garantizada para un hogar más limpio y saludable.',
    canonical: `${baseUrl}/servicios`,
    ogTitle: 'Todos los Servicios de Limpieza | Superclim',
    ogDescription: 'Limpieza profesional de sofás, alfombras, colchones y más. Servicio a domicilio en toda el área metropolitana de Barcelona.',
    ogImage: defaultOgImage,
    ogType: 'website',
    keywords: 'servicios limpieza tapicerías, limpieza profesional barcelona, servicios superclim',
  },
  carUpholsterySabadell: {
    title: 'Limpieza de Tapicería de Coche en Sabadell | Servicio en Local | Superclim Servicios',
    description: 'Limpieza profesional de tapicería de coche en Sabadell. Servicio en local para asientos, moquetas, maletero e interior del vehículo. Presupuesto rápido por WhatsApp.',
    canonical: `${baseUrl}/servicios/limpieza-tapiceria-coche-sabadell`,
    ogTitle: 'Limpieza de Tapicería de Coche en Sabadell | Superclim',
    ogDescription: 'Servicio en local para asientos, moquetas, alfombrillas, maletero e interior del vehículo.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza tapicería coche Sabadell, limpieza interior coche Sabadell, limpieza asientos coche, limpieza moquetas coche, Superclim',
  },
};

const regionalLegacySEO: Partial<Record<string, Pick<SEOPageConfig, 'title' | 'description' | 'h1'>>> = {
  '/servicios/limpieza-de-sofas-barcelona': {
    title: 'Limpieza de Sofás a Domicilio en Barcelona | Superclim',
    description: 'Limpieza de sofás a domicilio en Barcelona. Eliminamos manchas, ácaros y olores con productos ecológicos. Presupuesto gratuito sin compromiso. Resultados garantizados.',
    h1: 'Limpieza de Sofás a Domicilio en Barcelona y Alrededores',
  },
  '/servicios/limpieza-de-sofa-sabadell': {
    title: 'Limpieza de Sofa Sabadell, limpieza sofa sabadell, limpieza Sofa',
    description: 'Servicio profesional de limpieza de sofás en Sabadell. Eliminamos manchas y malos olores, utilizando técnicas avanzadas para dejar tu sofá como nuevo. SuperClim - Especialistas en limpieza de sofas en Sabadell y alrededores.',
    h1: 'Limpieza de Sofás en Sabadell y Alrededores',
  },
  '/servicios/limpieza-de-sofa-cerdanyola': {
    title: 'Limpieza de Sofa en Cerdanyola del Valles, limpieza sofas',
    description: 'Servicio profesional de limpieza de sofás en Cerdanyola. Elimina manchas y ácaros de tus muebles con resultados impecables. ¡Solicita tu presupuesto ahora!',
    h1: 'Limpieza de Sofás en Cerdanyola y Alrededores',
  },
  '/servicios/limpieza-de-sofas-terrassa': {
    title: 'Limpieza de sofas Terrassa, limpieza sofas',
    description: 'Descubre el servicio especializado de limpieza de sofás en Terrassa con SuperClim. Renueva tu sofá con nuestros métodos avanzados y productos ecológicos.',
    h1: 'Limpieza de Sofás en Terrassa y Alrededores',
  },
  '/servicios/limpieza-de-sofas-sant-cugat': {
    title: 'Limpieza de Sofas Sant Cugat del Valles, limpieza sofas',
    description: 'Servicio profesional de limpieza de sofás en Sant Cugat. Eliminamos manchas y suciedad para que tus muebles luzcan como nuevos. ¡Solicita una limpieza a domicilio!',
    h1: 'Limpieza de Sofás en Sant Cugat y Alrededores',
  },
  '/servicios/limpieza-de-sofas-barbera-del-valles': {
    title: 'Limpieza de sofa Barbera del Valles, limpieza sofas - Superclim Servicios',
    description: 'SuperClim Servicios ofrece limpieza profesional de sofás en Barberà del Vallès. Mejora la apariencia y salud de tus muebles con nuestros métodos avanzados y productos ecológicos. ¡Contáctanos para una consulta gratuita!',
    h1: 'Limpieza de Sofás en Barberà del Vallès y Alrededores',
  },
  '/servicios/limpieza-de-sofas-en-sant-quirze': {
    title: 'Limpieza de sofas Sant Quirze del Valles, limpieza sofas',
    description: 'Expertos en limpieza de sofás en Sant Quirze del Vallès. Deja tus muebles como nuevos eliminando manchas, polvo y ácaros. ¡Contáctanos para un servicio de calidad!',
    h1: 'Limpieza de Sofás en Sant Quirze del Vallès y Alrededores',
  },
  '/mas-servicios/limpieza-de-colchones-sabadell': {
    title: 'Limpieza de Colchones Sabadell, limpiar colchon - Superclim Servicios',
    description: 'Descubre el servicio de limpieza de colchones en Sabadell con SuperClim. Eliminamos manchas, ácaros y malos olores para un descanso saludable y cómodo.',
    h1: 'Limpieza de Colchones en Sabadell y Alrededores',
  },
  '/mas-servicios/limpieza-de-colchones-barcelona': {
    title: 'Limpieza de Colchones Barcelona, limpiar colchon - Superclim Servicios',
    description: 'Descubre nuestro servicio especializado de limpieza de colchones en Barcelona. Eliminamos manchas, ácaros y malos olores para que tu colchón luzca y se sienta como nuevo. ¡Contáctanos para una consulta gratuita!',
    h1: 'Limpieza de Colchones en Barcelona y Alrededores',
  },
  '/mas-servicios/limpieza-de-colchones-castellar-del-valles': {
    title: 'Limpieza de Colchones Castellar del Valles, limpiar colchon - Superclim Servicios',
    description: 'Confía en nuestros expertos para la limpieza de colchones en Castellar del Vallès. Eliminamos manchas, ácaros y malos olores, garantizando un descanso saludable. ¡Solicita tu consulta gratuita!',
    h1: 'Limpieza de Colchones en Castellar del Vallès y Alrededores',
  },
  '/mas-servicios/limpieza-de-colchones-cerdanyola': {
    title: 'Limpieza de Colchones Cerdanyola del Valles, limpiar colchon - Superclim Servicios',
    description: 'Servicio profesional de limpieza de colchones en Cerdanyola. Eliminamos manchas, ácaros y malos olores con métodos avanzados y productos ecológicos. ¡Contáctanos para una consulta gratuita y mejora la calidad de tu descanso!',
    h1: 'Limpieza de Colchones en Cerdanyola y Alrededores',
  },
  '/mas-servicios/limpieza-de-colchones-terrassa': {
    title: 'Limpieza de Colchones Terrassa, limpiar colchon - Superclim Servicios',
    description: 'Servicio profesional de limpieza de colchones en Terrassa. Eliminamos manchas, ácaros y malos olores con métodos avanzados y productos ecológicos. ¡Contáctanos para una consulta gratuita y mejora la calidad de tu descanso!',
    h1: 'Limpieza de Colchones en Terrassa y Alrededores',
  },
  '/mas-servicios/limpieza-de-colchones-sant-cugat-del-valles': {
    title: 'Limpieza de Colchones Sant Cugat del Valles, limpiar colchon - Superclim Servicios',
    description: 'Servicio profesional de limpieza de colchones en Sant Cugat. Eliminamos manchas, ácaros y malos olores con métodos avanzados y productos ecológicos. ¡Contáctanos para una consulta gratuita y mejora la calidad de tu descanso!',
    h1: 'Limpieza de Colchones en Sant Cugat y Alrededores',
  },
  '/mas-servicios/limpieza-de-colchones-sant-quirze-del-valles': {
    title: 'Limpieza de Colchones Sant Quirze del Valles, limpiar colchon - Superclim Servicios',
    description: 'Servicio profesional de limpieza de colchones en Sant Quirze. Eliminamos manchas, ácaros y malos olores con métodos avanzados y productos ecológicos. ¡Contáctanos para una consulta gratuita y mejora la calidad de tu descanso!',
    h1: 'Limpieza de Colchones en Sant Quirze y Alrededores',
  },
  '/limpieza-de-alfombras/sabadell': {
    title: 'Limpieza y Lavado de Alfombras en Sabadell | Recogida y Entrega | SuperClim Servicios',
    description: 'Servicio profesional de limpieza y lavado de alfombras en Sabadell. Recogida y entrega a domicilio, limpieza profunda, restauración y almacenamiento de alfombras por mensualidad.',
    h1: 'Limpieza y lavado de alfombras en Sabadell con recogida y entrega',
  },
  '/limpieza-de-alfombras/barcelona': {
    title: 'Limpieza de Alfombras en Barcelona | Recogida y Entrega | SuperClim Servicios',
    description: 'Servicio profesional de limpieza y lavado de alfombras en Barcelona. Recogida y entrega a domicilio, limpieza profunda, restauración y almacenamiento de alfombras por mensualidad.',
    h1: 'Lavado de Alfombras en Barcelona con Recogida y Entrega',
  },
  '/limpieza-de-alfombras/sant-cugat': {
    title: 'Limpieza de Alfombras en Sant Cugat del Vallès, limpieza alfombra | Superclim Servicios',
    description: 'Servicio de limpieza de alfombras en Sant Cugat del Vallès. Expertos en limpieza profesional de alfombras con métodos avanzados y productos ecológicos. ¡Haga su presupuesto sin compromiso!',
    h1: 'Limpieza de Alfombras en Sant Cugat del Vallès y Alrededores',
  },
  '/limpieza-de-alfombras/sant-quirze': {
    title: 'Limpieza de Alfombras en Sant Quirze del Vallès, limpieza alfombra | Superclim Servicios',
    description: 'Servicio de limpieza de alfombras en Sant Quirze del Vallès. Expertos en limpieza profesional de alfombras con métodos avanzados y productos ecológicos. ¡Haga su presupuesto sin compromiso!',
    h1: 'Limpieza de Alfombras en Sant Quirze del Vallès y Alrededores',
  },
  '/limpieza-de-alfombras/cerdanyola': {
    title: 'Limpieza de Alfombras en Cerdanyola, limpieza alfombra | Superclim Servicios',
    description: 'Servicio de limpieza de alfombras en Cerdanyola. Expertos en limpieza profesional de alfombras con métodos avanzados y productos ecológicos. ¡Haga su presupuesto sin compromiso!',
    h1: 'Limpieza de Alfombras en Cerdanyola y Alrededores',
  },
  '/limpieza-de-alfombras/terrassa': {
    title: 'Limpieza de Alfombras en Terrassa, limpieza alfombra | Superclim Servicios',
    description: 'Servicio de limpieza de alfombras en Terrassa. Expertos en limpieza profesional de alfombras con métodos avanzados y productos ecológicos. ¡Haga su presupuesto sin compromiso!',
    h1: 'Limpieza de Alfombras en Terrassa y Alrededores',
  },
  '/limpieza-de-alfombras/barbera-del-valles': {
    title: 'Limpieza de Alfombras en Barberà del Vallès, limpieza alfombra | Superclim Servicios',
    description: 'Servicio de limpieza de alfombras en Barberà del Vallès. Expertos en limpieza profesional de alfombras con métodos avanzados y productos ecológicos. ¡Haga su presupuesto sin compromiso!',
    h1: 'Limpieza de Alfombras en Barberà del Vallès y Alrededores',
  },
  '/limpieza-de-alfombras/castellar-del-valles': {
    title: 'Limpieza de Alfombras en Castellar del Vallès, limpieza alfombra | Superclim Servicios',
    description: 'Servicio de limpieza de alfombras en Castellar del Vallès. Expertos en limpieza profesional de alfombras con métodos avanzados y productos ecológicos. ¡Haga su presupuesto sin compromiso!',
    h1: 'Limpieza de Alfombras en Castellar del Vallès y Alrededores',
  },
  '/limpieza-de-alfombras/lavado-de-alfombras-barcelona': {
    title: 'Lavado de Alfombras en Barcelona | Recogida y Entrega | Superclim Servicios',
    description: 'Servicio de lavado de alfombras en Barcelona. Lavado profesional con recogida y entrega, restauración y almacenamiento de alfombras por mensualidad. Solicite su presupuesto sin compromiso.',
    h1: 'Lavado de Alfombras en Barcelona y Alrededores',
  },
};

// Helper para gerar config de páginas regionais
export function getRegionalSEO(
  service: 'sofas' | 'alfombras' | 'colchones',
  cityDisplay: string,
  exactPath: string
): SEOPageConfig {
  const serviceData = {
    sofas: {
      titlePrefix: 'Limpieza de Sofás',
      descPrefix: 'Servicio profesional de limpieza de sofás',
      keywords: 'limpieza de sofás',
    },
    alfombras: {
      titlePrefix: 'Lavado de Alfombras',
      descPrefix: 'Servicio profesional de lavado de alfombras',
      keywords: 'lavado de alfombras, limpieza de alfombras',
    },
    colchones: {
      titlePrefix: 'Limpieza de Colchones',
      descPrefix: 'Servicio profesional de limpieza y desinfección de colchones',
      keywords: 'limpieza de colchones, desinfección de colchones',
    },
  };

  const s = serviceData[service];

  const legacy = regionalLegacySEO[exactPath];

  return {
    title: `${s.titlePrefix} en ${cityDisplay} — Superclim Servicios`,
    description: `${s.descPrefix} en ${cityDisplay} y alrededores. Servicio a domicilio con productos ecológicos. Presupuesto gratuito sin compromiso. Llámanos al +34 624 529 442.`,
    canonical: `${baseUrl}${exactPath}`,
    ogTitle: `${s.titlePrefix} en ${cityDisplay} | Superclim`,
    ogDescription: `${s.descPrefix} a domicilio en ${cityDisplay}. Productos ecológicos y resultados garantizados.`,
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: `${s.keywords} ${cityDisplay}, limpieza tapicerías ${cityDisplay}, servicio a domicilio ${cityDisplay}`,
    ...legacy,
  };
}
