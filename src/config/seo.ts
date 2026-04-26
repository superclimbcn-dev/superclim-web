export interface SEOPageConfig {
  title: string;
  description: string;
  canonical: string;
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
    description: 'Especialistas en limpieza e impermeabilización de sofás, alfombras y colchones en Barcelona y alrededores. Servicio a domicilio con productos ecológicos. Presupuesto gratuito.',
    canonical: `${baseUrl}/`,
    ogTitle: 'Superclim — Limpieza Profesional de Sofás en Barcelona',
    ogDescription: 'Más de 16 años de experiencia. Limpieza de sofás, alfombras y colchones a domicilio. Productos ecológicos y garantía de 2 años.',
    ogImage: defaultOgImage,
    ogType: 'website',
    keywords: 'limpieza de sofás, limpieza de alfombras, limpieza de colchones, impermeabilización de sofás, Barcelona, Sabadell, Terrassa',
  },
  sofaCleaning: {
    title: 'Limpieza de Sofás, limpieza de alfombras, limpieza de colchon - SuperClim Servicios',
    description: 'Déjanos la limpieza de tu sofá a nosotros. Superclim Servicios es una empresa especializada en servicios de limpieza de sofás, limpieza de sofás Barcelona, limpieza de alfombras, limpieza de colchon en todas zonas de Barcelona y ciudades cercanas.',
    canonical: `${baseUrl}/limpieza-de-sofas/`,
    ogTitle: 'Limpieza de Sofás Profesional | Superclim',
    ogDescription: 'Recupera el aspecto y la comodidad de tus sofás con nuestra limpieza profesional. Eliminamos manchas, suciedad y malos olores.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de sofás, limpieza sofas, limpieza de sofá, clean limpieza, limpieza de sofas Barcelona, lavado de sillones a domicilio',
  },
  carpetCleaning: {
    title: 'Lavado de Alfombras y Limpieza de Alfombras - SuperClim',
    description: 'Servicio profesional de lavado de alfombras con recogida y entrega en Sabadell, Terrassa, Castellar del Vallès, Sant Cugat, Sant Quirze, Barcelona y alrededores.',
    canonical: `${baseUrl}/limpieza-de-alfombras/`,
    ogTitle: 'Lavado de Alfombras Profesional | Superclim',
    ogDescription: 'Realizamos una limpieza profunda de alfombras, eliminando manchas, suciedad y olores. Servicio de recogida y entrega.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'lavado de alfombras, limpieza de alfombras, limpieza alfombras barcelona, restauración de alfombras, recogida y entrega',
  },
  mattressCleaning: {
    title: 'Limpieza de colchones barcelona, limpiar colchon, desinfeccion de colchon | Superclim',
    description: 'En Superclim también realizamos servicios de limpieza de colchones. Eliminamos ácaros, bacterias y manchas en tu domicilio sin necesidad de desplazamiento.',
    canonical: `${baseUrl}/mas-servicios/`,
    ogTitle: 'Limpieza de Colchones a Domicilio | Superclim',
    ogDescription: 'Limpieza y desinfección de colchones en Barcelona y alrededores. Elimina ácaros, bacterias y malos olores.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de colchones, limpiar colchon, desinfeccion de colchon, limpieza colchones barcelona, eliminar ácaros colchón',
  },
  impermeabilization: {
    title: 'Impermeabilización de Sofás en Barcelona y Alrededores, impermeabilizacion de sofas - Superclim Servicios',
    description: 'Superclim ofrece un servicio especializado de impermeabilización de sofás, diseñado para proteger tus muebles contra derrames accidentales, manchas y el desgaste general del uso diario. Con más de 16 años de experiencia.',
    canonical: `${baseUrl}/impermeabilizacion-de-sofas`,
    ogTitle: 'Impermeabilización de Sofás con 2 Años de Garantía | Superclim',
    ogDescription: 'Protege tus sofás contra manchas y líquidos con garantía de 2 años por escrito. Productos ecológicos y seguros.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'impermeabilización de sofás, blindaje de sofás, impermeabilizacion de sofas barcelona, protección sofás, garantía impermeabilización',
  },
  armchairCleaning: {
    title: 'Limpieza de Sillones a Domicilio en Barcelona | Superclim',
    description: 'Realizamos la limpieza completa de tus sillones, eliminando suciedad, manchas y olores para restaurar la apariencia y el confort de tus muebles.',
    canonical: `${baseUrl}/limpieza-de-sofas/limpieza-de-sillones`,
    ogTitle: 'Limpieza de Sillones Profesional | Superclim',
    ogDescription: 'Limpieza profunda de sillones en tu domicilio. Eliminamos manchas, olores y devolvemos el confort original.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de sillones, lavado de sillones, limpieza sillones barcelona, limpieza butacas',
  },
  homeService: {
    title: 'Limpieza de Sofás a Domicilio en Barcelona | Superclim',
    description: 'Ofrecemos un servicio conveniente de limpieza de sofás directamente en tu hogar, utilizando equipos y productos profesionales para garantizar un servicio eficaz y de alta calidad.',
    canonical: `${baseUrl}/limpieza-de-sofas/limpieza-de-sofas-a-domicilio`,
    ogTitle: 'Servicio de Limpieza de Sofás a Domicilio | Superclim',
    ogDescription: 'Limpieza de sofás sin mover tus muebles. Equipos profesionales portátiles y productos ecológicos certificados.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de sofás a domicilio, limpieza sofás casa, servicio a domicilio barcelona, limpieza tapicerías a domicilio',
  },
  about: {
    title: 'Quiénes Somos — Superclim Servicios | Limpieza Profesional Barcelona',
    description: 'Superclim es una empresa líder en limpieza de sofás, impermeabilizacion de sofas, limpieza de alfombras y limpieza de colchones con sede en Barcelona. Más de 16 años de experiencia.',
    canonical: `${baseUrl}/quienes-somos`,
    ogTitle: 'Quiénes Somos | Superclim Servicios',
    ogDescription: 'Conoce a Superclim: más de 16 años de experiencia en limpieza profesional de tapicerías en Barcelona y alrededores.',
    ogImage: defaultOgImage,
    ogType: 'website',
    keywords: 'quienes somos superclim, empresa limpieza sofás barcelona, historia superclim',
  },
  contact: {
    title: 'Contacto — SuperClim Servicios | Tel: +34 624 529 442',
    description: 'Contacta con SuperClim Servicios. Teléfono: +34 624 529 442. Email: superclimbcn@gmail.com. Estamos en Sabadell, Barcelona. Presupuesto gratuito.',
    canonical: `${baseUrl}/contacto`,
    ogTitle: 'Contacto | Superclim Servicios',
    ogDescription: 'Llámanos al +34 624 529 442 o escríbenos por WhatsApp. Servicio de limpieza en Sabadell y alrededores.',
    ogImage: defaultOgImage,
    ogType: 'website',
    keywords: 'contacto superclim, teléfono limpieza sofás, presupuesto limpieza sofás barcelona',
  },
  restoration: {
    title: 'Restauración de Alfombras Orientales y Artesanales | Superclim',
    description: 'Servicio especializado de restauración de alfombras orientales, persas, indianas y artesanales en Barcelona y alrededores. Recuperamos el esplendor de tus alfombras.',
    canonical: `${baseUrl}/restauracion-de-alfombras`,
    ogTitle: 'Restauración de Alfombras | Superclim',
    ogDescription: 'Restauración profesional de alfombras orientales y artesanales. Técnicas tradicionales y productos de calidad.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'restauración de alfombras, alfombras orientales, alfombras persas, reparación alfombras barcelona',
  },
  leatherCleaning: {
    title: 'Limpieza de Muebles en Cuero y Piel Natural | Superclim Barcelona',
    description: 'Limpieza especializada de sofás, sillones y muebles tapizados en cuero y piel natural. Productos específicos que preservan la textura y durabilidad del cuero.',
    canonical: `${baseUrl}/limpieza-de-muebles-en-cuero`,
    ogTitle: 'Limpieza de Muebles en Cuero | Superclim',
    ogDescription: 'Cuidado experto para tus muebles de cuero. Limpieza profunda sin dañar la piel natural.',
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: 'limpieza de muebles en cuero, limpieza sofás piel, cuidado cuero barcelona, limpieza leather',
  },
  services: {
    title: 'Servicios de Limpieza de Tapicerías | Superclim Barcelona',
    description: 'Descubre todos nuestros servicios: limpieza de sofás, alfombras, colchones, impermeabilización, restauración de alfombras y limpieza de cuero. Servicio a domicilio.',
    canonical: `${baseUrl}/servicios`,
    ogTitle: 'Todos los Servicios de Limpieza | Superclim',
    ogDescription: 'Limpieza profesional de sofás, alfombras, colchones y más. Servicio a domicilio en toda el área metropolitana de Barcelona.',
    ogImage: defaultOgImage,
    ogType: 'website',
    keywords: 'servicios limpieza tapicerías, limpieza profesional barcelona, servicios superclim',
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

  return {
    title: `${s.titlePrefix} en ${cityDisplay} — Superclim Servicios`,
    description: `${s.descPrefix} en ${cityDisplay} y alrededores. Servicio a domicilio con productos ecológicos. Presupuesto gratuito sin compromiso. Llámanos al +34 624 529 442.`,
    canonical: `${baseUrl}${exactPath}`,
    ogTitle: `${s.titlePrefix} en ${cityDisplay} | Superclim`,
    ogDescription: `${s.descPrefix} a domicilio en ${cityDisplay}. Productos ecológicos y resultados garantizados.`,
    ogImage: defaultOgImage,
    ogType: 'article',
    keywords: `${s.keywords} ${cityDisplay}, limpieza tapicerías ${cityDisplay}, servicio a domicilio ${cityDisplay}`,
  };
}
