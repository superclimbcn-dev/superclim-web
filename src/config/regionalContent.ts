// Contenido SEO específico extraído del sitio antiguo (superclim.es)
// Cada ciudad tiene barrios, textos y keywords únicos indexados en Google

export interface RegionalContent {
  neighborhoods: string[];
  introText: string;
  secondaryText?: string;
  whyChooseText?: string;
  benefits?: string[];
  benefitsIntro?: string;
  serviceAreasIntro?: string;
  additionalServicesText?: string;
  ctaText?: string;
  uniqueKeywords: string[];
  hasExtendedContent: boolean;
  serviceAreas?: string[];
}

// ─── SOFÁS ───────────────────────────────────────────────

export const sofaRegionalContent: Record<string, RegionalContent> = {
  barcelona: {
    neighborhoods: ['Eixample', 'Gràcia', 'Sarrià-Sant Gervasi', 'Sants-Montjuïc', 'Sant Martí', 'Ciutat Vella', 'Horta-Guinardó'],
    introText:
      'SuperClim Servicios ofrece un servicio completo de limpieza de sofás, colchones, sillas, sillones, sofás de cuero y tapicerías en Barcelona. Estar entre los mejores servicios de limpieza de sofás en Barcelona durante más de 16 años no es suerte. Trabajamos arduamente para brindar resultados de la más alta calidad a un excelente precio para todos nuestros clientes.',
    secondaryText:
      'Hay muchas personas que están muy seguras de limpiar sus baños cada dos días para asegurarse de mantener alejadas las bacterias y otros problemas, pero muchas de las mismas personas se olvidan de limpiar el sofá. Incluso las personas más limpias pueden olvidar que la limpieza de tapicería es una parte importante para mantener su casa limpia y un lugar saludable para vivir.',
    whyChooseText:
      'En SuperClim, nos preocupamos por la salud y el bienestar de nuestros clientes. Los muebles tapizados, como sofás, sillas y cojines, son elementos esenciales en cualquier hogar o negocio. No solo proporcionan comodidad y estilo, sino que también pueden acumular polvo, alérgenos, manchas y malos olores con el tiempo. La limpieza regular de tapicerías no es solo una cuestión de estética, sino también de salud y bienestar.',
    benefitsIntro: 'Ventajas de Mantener sus Sofás y Tapicerías Limpias',
    benefits: [
      'Mejora la Calidad del Aire Interior: La limpieza profunda elimina los alérgenos y el polvo atrapados, mejorando la calidad del aire en su hogar o espacio de trabajo.',
      'Prolonga la Vida Útil de los Muebles: Eliminar la suciedad y los residuos previene el desgaste de las fibras, asegurando que sus muebles se mantengan en excelente estado por más tiempo.',
      'Previene Problemas de Salud: Al eliminar bacterias y alérgenos, reduce el riesgo de alergias y problemas respiratorios.',
      'Rejuvenece la Apariencia de los Muebles: La limpieza profesional devuelve a sus muebles su apariencia fresca y limpia, mejorando la estética general de su espacio.',
    ],
    serviceAreasIntro:
      'Barcelona, con su vibrante estilo de vida y ritmo acelerado, requiere soluciones de limpieza que se adapten a las necesidades específicas de sus residentes y negocios. En Superclim Servicios, nos especializamos en la limpieza de una amplia gama de tapicerías, incluyendo sofás y sillones de tela y cuero, sillas y cojines, colchones, y tapicerías de vehículos.',
    additionalServicesText:
      'En Superclim Servicios, nuestra misión es proporcionar un servicio de limpieza de tapicerías que supere sus expectativas. Nos enorgullecemos de nuestra dedicación al detalle y al servicio al cliente. Entendemos que cada mueble y cada hogar es único, por lo que adaptamos nuestros servicios para satisfacer sus necesidades específicas.',
    ctaText:
      'Si está buscando los mejores servicios de limpieza de sofás y tapicerías en Barcelona, no busque más. Superclim Servicios está aquí para transformar sus muebles y su hogar. Contáctenos hoy para una consulta gratuita y descubra cómo podemos ayudarle a mantener sus espacios limpios y saludables.',
    uniqueKeywords: [
      'limpieza de sofás Barcelona',
      'limpieza de tapicerías Eixample',
      'limpieza de sofás a domicilio Gràcia',
      'empresa de limpieza de sofás Sarrià',
      'limpieza ecológica de sofás Barcelona',
    ],
    hasExtendedContent: true,
  },
  sabadell: {
    neighborhoods: ['Centre de Sabadell', 'La Creu de Barberà', 'Gràcia', 'Can Llong', 'Castellarnau', 'La Concòrdia', 'Torre-romeu'],
    introText:
      'SuperClim Servicios ofrece un servicio completo de limpieza de sofás en Sabadell, utilizando técnicas avanzadas para garantizar una limpieza profunda y efectiva. Nuestros profesionales están capacitados para tratar todo tipo de tejidos, eliminando manchas, ácaros y malos olores, asegurando que tu sofá luzca y se sienta como nuevo.',
    secondaryText:
      'Estar entre los mejores servicios de limpieza de tapicería en Sabadell durante más de 16 años no es suerte. Trabajamos arduamente para brindar resultados de la más alta calidad a un excelente precio para todos nuestros clientes. Nuestros técnicos de tapicería están capacitados y certificados con los más altos estándares.',
    whyChooseText:
      'En SuperClim, nos preocupamos por la salud y el bienestar de nuestros clientes. Por eso, utilizamos productos de limpieza ecológicos y seguros, que no solo limpian profundamente, sino que también cuidan tu sofá y el medio ambiente. Nuestro equipo está altamente entrenado para manejar cualquier tipo de mancha o tejido, ofreciendo un servicio personalizado y eficiente.',
    benefitsIntro: 'Beneficios de la Limpieza Regular de Sofás',
    benefits: [
      'Prolongar la Vida Útil de sus Muebles: Eliminar la suciedad y los residuos evita el desgaste prematuro de los materiales, manteniendo su sofá como nuevo por más tiempo.',
      'Eliminar Manchas Difíciles: Nuestros técnicos están capacitados para tratar y eliminar todo tipo de manchas, devolviendo a su sofá su aspecto original.',
      'Prevenir el Mal Olor: Los olores pueden quedar atrapados en las fibras de su sofá. Una limpieza profunda asegura que su sofá huela fresco y limpio.',
      'Mejorar la Apariencia General de su Hogar: Un sofá limpio y bien cuidado mejora instantáneamente la estética de su sala de estar, haciéndola más acogedora y atractiva.',
    ],
    serviceAreasIntro:
      'Ofrecemos nuestros servicios de limpieza de sofás en las siguientes zonas de Sabadell y alrededores.',
    additionalServicesText:
      'Además de la limpieza de sofás, ofrecemos servicios completos de limpieza de tapicería en Sabadell y alrededores. Ya sea que necesite limpiar sus alfombras, sillas, colchones o cualquier otro mueble tapizado, nuestro equipo está listo para ayudar. Nos enorgullecemos de brindar un servicio al cliente excepcional y resultados de limpieza superiores.',
    ctaText:
      'Contacte con nosotros hoy mismo para una consulta gratuita y descubra cómo podemos transformar sus muebles y su hogar con nuestros servicios de limpieza de sofás en Sabadell.',
    uniqueKeywords: [
      'limpieza de sofás Sabadell',
      'limpieza de sofás Centre Sabadell',
      'limpieza de tapicerías Eixample Sabadell',
      'limpieza de sofás Campoamor',
      'limpieza ecológica sofás Sabadell',
    ],
    hasExtendedContent: true,
  },

  'barbera-del-valles': {
    neighborhoods: ['Centre', 'El Poblenou', 'La Romànica', 'Can Llobet'],
    introText:
      'SuperClim Servicios ofrece un servicio completo de limpieza de sofás, colchones, sillas, sillones, sofás de cuero y tapicerías en Barberà del Vallès. No es casualidad que estemos entre los mejores servicios de limpieza de sofás en Barberà del Vallès durante más de 16 años.',
    secondaryText:
      'Hay muchas personas que son meticulosas con la limpieza de sus baños cada pocos días para mantener alejadas las bacterias y otros problemas, pero muchas de estas personas se olvidan de limpiar el sofá. Incluso las personas más limpias pueden olvidar que la limpieza de tapicería es una parte importante para mantener su casa limpia y un lugar saludable para vivir.',
    whyChooseText:
      'Los muebles tapizados, como sofás, sillas y cojines, son elementos esenciales en cualquier hogar o negocio. No solo proporcionan comodidad y estilo, sino que también pueden acumular polvo, alérgenos, manchas y malos olores con el tiempo. La limpieza regular de tapicerías no es solo una cuestión de estética, sino también de salud y bienestar.',
    benefitsIntro: 'Ventajas de Mantener sus Sofás y Tapicerías Limpias',
    benefits: [
      'Mejora la Calidad del Aire Interior: La limpieza profunda elimina los alérgenos y el polvo atrapados, mejorando la calidad del aire en su hogar o espacio de trabajo.',
      'Prolonga la Vida Útil de los Muebles: Eliminar la suciedad y los residuos previene el desgaste de las fibras, asegurando que sus muebles se mantengan en excelente estado por más tiempo.',
      'Previene Problemas de Salud: Al eliminar bacterias y alérgenos, reduce el riesgo de alergias y problemas respiratorios.',
      'Rejuvenece la Apariencia de los Muebles: La limpieza profesional devuelve a sus muebles su apariencia fresca y limpia, mejorando la estética general de su espacio.',
    ],
    serviceAreasIntro:
      'Barberà del Vallès, con su ambiente acogedor y su comunidad activa, requiere soluciones de limpieza que se adapten a las necesidades específicas de sus residentes y negocios. En Superclim Servicios, nos especializamos en la limpieza de una amplia gama de tapicerías, incluyendo sofás y sillones de tela y cuero, sillas y cojines, colchones, y tapicerías de vehículos.',
    additionalServicesText:
      'En Superclim Servicios, nuestra misión es proporcionar un servicio de limpieza de tapicerías que supere sus expectativas. Nos enorgullecemos de nuestra dedicación al detalle y al servicio al cliente. Entendemos que cada mueble y cada hogar es único, por lo que adaptamos nuestros servicios para satisfacer sus necesidades específicas.',
    ctaText:
      'Si está buscando los mejores servicios de limpieza de sofás y tapicerías en Barberà del Vallès, no busque más. Superclim Servicios está aquí para transformar sus muebles y su hogar. Contáctenos hoy para una consulta gratuita y descubra cómo podemos ayudarle a mantener sus espacios limpios y saludables.',
    uniqueKeywords: [
      'limpieza de sofás Barberà',
      'limpieza de sofás Barberà del Vallès',
      'limpieza de tapicerías El Poblenou',
      'limpieza sofás Can Llobet',
      'limpieza ecológica sofás Barberà',
    ],
    hasExtendedContent: true,
  },
  'sant-quirze': {
    neighborhoods: ['Les Fonts', 'Can Pallars', 'Vall Suau', 'Can Llobet', 'Mas Duran'],
    introText:
      'SuperClim Servicios ofrece un servicio completo de limpieza de sofás en Sant Quirze del Vallès, utilizando técnicas avanzadas para garantizar una limpieza profunda y efectiva. Nuestros profesionales están capacitados para tratar todo tipo de tejidos, eliminando manchas, ácaros y malos olores, asegurando que tu sofá luzca y se sienta como nuevo.',
    secondaryText:
      'Con más de 16 años de experiencia, somos líderes en servicios de limpieza de tapicería en Sant Quirze del Vallès. Nos dedicamos a proporcionar resultados de alta calidad a precios competitivos, asegurando la satisfacción de nuestros clientes. Nuestros técnicos de tapicería están altamente cualificados y certificados, lo que garantiza que sus muebles estén en manos seguras y profesionales.',
    whyChooseText:
      'En SuperClim, priorizamos la salud y el bienestar de nuestros clientes. Usamos productos de limpieza ecológicos que son seguros tanto para tu sofá como para el medio ambiente. Nuestro equipo está entrenado para manejar cualquier tipo de mancha o tejido, proporcionando un servicio eficiente y personalizado.',
    benefitsIntro: 'Beneficios de la Limpieza Regular de Sofás',
    benefits: [
      'Prolongar la Vida Útil de sus Muebles: La eliminación de la suciedad y los residuos previene el desgaste prematuro, manteniendo sus muebles en buen estado por más tiempo.',
      'Eliminar Manchas Difíciles: Nuestros expertos están equipados para tratar y remover todo tipo de manchas, devolviendo la apariencia original de su sofá.',
      'Prevenir el Mal Olor: Las fibras de los sofás pueden atrapar olores. Una limpieza profunda elimina estos olores, dejando un ambiente fresco y limpio.',
      'Mejorar la Apariencia General de su Hogar: Un sofá limpio realza la estética de su espacio, haciendo su hogar más acogedor.',
    ],
    serviceAreasIntro:
      'Proporcionamos nuestros servicios de limpieza de sofás en las siguientes áreas de Sant Quirze del Vallès y sus alrededores.',
    additionalServicesText:
      'Además de la limpieza de sofás, ofrecemos una gama completa de servicios de limpieza de tapicería en Sant Quirze del Vallès. Ya sea que necesite limpiar alfombras, sillas, colchones u otros muebles tapizados, nuestro equipo está preparado para asistirle. Nos enorgullece proporcionar un servicio al cliente excepcional y resultados de limpieza de alta calidad.',
    ctaText:
      'Póngase en contacto con nosotros para una consulta gratuita y descubra cómo podemos renovar sus muebles y mejorar su hogar con nuestros servicios de limpieza de sofás en Sant Quirze del Vallès.',
    uniqueKeywords: [
      'limpieza de sofás Sant Quirze',
      'limpieza de sofás Les Fonts',
      'limpieza de tapicerías Sant Quirze del Vallès',
      'limpieza sofás Can Palet',
      'limpieza ecológica sofás Sant Quirze',
    ],
    hasExtendedContent: true,
  },
  'sant-cugat': {
    neighborhoods: ['Centre', 'Valldoreix', 'Mira-sol', 'La Floresta', 'Les Planes'],
    introText:
      'SuperClim Servicios ofrece un servicio completo de limpieza de sofás en Sant Cugat del Vallès, utilizando técnicas avanzadas para garantizar una limpieza profunda y efectiva. Nuestros profesionales están capacitados para tratar todo tipo de tejidos, eliminando manchas, ácaros y malos olores, asegurando que tu sofá luzca y se sienta como nuevo.',
    secondaryText:
      'En Sant Cugat del Vallès, Superclim ofrece servicios especializados de limpieza de sofás a domicilio. Nuestros técnicos certificados se desplazan por todos los barrios de Sant Cugat para ofrecer un servicio profesional con productos ecológicos y resultados garantizados.',
    whyChooseText:
      'En SuperClim, nos preocupamos por la salud y el bienestar de nuestros clientes. Por eso, utilizamos productos de limpieza ecológicos y seguros, que no solo limpian profundamente, sino que también cuidan tu sofá y el medio ambiente. Nuestro equipo está altamente entrenado para manejar cualquier tipo de mancha o tejido, ofreciendo un servicio personalizado y eficiente.',
    benefitsIntro: 'Beneficios de la Limpieza Regular de Sofás',
    benefits: [
      'Prolongar la Vida Útil de sus Muebles: La eliminación de la suciedad y los residuos previene el desgaste prematuro, manteniendo sus muebles en buen estado por más tiempo.',
      'Eliminar Manchas Difíciles: Nuestros expertos están equipados para tratar y remover todo tipo de manchas, devolviendo la apariencia original de su sofá.',
      'Prevenir el Mal Olor: Las fibras de los sofás pueden atrapar olores. Una limpieza profunda elimina estos olores, dejando un ambiente fresco y limpio.',
      'Mejorar la Apariencia General de su Hogar: Un sofá limpio realza la estética de su espacio, haciendo su hogar más acogedor.',
    ],
    serviceAreasIntro:
      'Ofrecemos nuestros servicios de limpieza de sofás en las siguientes zonas de Sant Cugat del Vallès y alrededores.',
    additionalServicesText:
      'Además de la limpieza de sofás, ofrecemos una gama completa de servicios de limpieza de tapicería en Sant Cugat del Vallès. Ya sea que necesite limpiar alfombras, sillas, colchones u otros muebles tapizados, nuestro equipo está preparado para asistirle.',
    ctaText:
      'Póngase en contacto con nosotros para una consulta gratuita y descubra cómo podemos renovar sus muebles y mejorar su hogar con nuestros servicios de limpieza de sofás en Sant Cugat del Vallès.',
    uniqueKeywords: [
      'limpieza de sofás Sant Cugat',
      'limpieza de sofás Valldoreix',
      'limpieza de tapicerías Mira-sol',
      'limpieza sofás Sant Cugat del Vallès',
      'limpieza ecológica sofás Sant Cugat',
    ],
    hasExtendedContent: true,
  },
  'cerdanyola': {
    neighborhoods: ['Centro de Cerdanyola', 'Serraparera', 'Fontetes', 'Montflorit', 'Banús', 'Canaletes', 'Roser'],
    introText:
      'SuperClim Servicios ofrece un servicio completo de limpieza de sofás en Cerdanyola, utilizando técnicas avanzadas para garantizar una limpieza profunda y efectiva. Nuestros profesionales están capacitados para tratar todo tipo de tejidos, eliminando manchas, ácaros y malos olores, asegurando que tu sofá luzca y se sienta como nuevo.',
    secondaryText:
      'En Cerdanyola del Vallès, Superclim ofrece servicios profesionales de limpieza de sofás a domicilio. Nuestros técnicos certificados se desplazan por todos los barrios de Cerdanyola para ofrecer un servicio de calidad con productos ecológicos y resultados garantizados.',
    whyChooseText:
      'En SuperClim, nos preocupamos por la salud y el bienestar de nuestros clientes. Por eso, utilizamos productos de limpieza ecológicos y seguros, que no solo limpian profundamente, sino que también cuidan tu sofá y el medio ambiente. Nuestro equipo está altamente entrenado para manejar cualquier tipo de mancha o tejido, ofreciendo un servicio personalizado y eficiente.',
    benefitsIntro: 'Beneficios de la Limpieza Regular de Sofás',
    benefits: [
      'Prolongar la Vida Útil de sus Muebles: La eliminación de la suciedad y los residuos previene el desgaste prematuro, manteniendo sus muebles en buen estado por más tiempo.',
      'Eliminar Manchas Difíciles: Nuestros expertos están equipados para tratar y remover todo tipo de manchas, devolviendo la apariencia original de su sofá.',
      'Prevenir el Mal Olor: Las fibras de los sofás pueden atrapar olores. Una limpieza profunda elimina estos olores, dejando un ambiente fresco y limpio.',
      'Mejorar la Apariencia General de su Hogar: Un sofá limpio realza la estética de su espacio, haciendo su hogar más acogedor.',
    ],
    serviceAreasIntro:
      'Ofrecemos nuestros servicios de limpieza de sofás en las siguientes zonas de Cerdanyola y alrededores.',
    additionalServicesText:
      'Además de la limpieza de sofás, ofrecemos una gama completa de servicios de limpieza de tapicería en Cerdanyola. Ya sea que necesite limpiar alfombras, sillas, colchones u otros muebles tapizados, nuestro equipo está preparado para asistirle.',
    ctaText:
      'Póngase en contacto con nosotros para una consulta gratuita y descubra cómo podemos renovar sus muebles y mejorar su hogar con nuestros servicios de limpieza de sofás en Cerdanyola.',
    uniqueKeywords: [
      'limpieza de sofás Cerdanyola',
      'limpieza de sofás Montflorit',
      'limpieza de tapicerías Bellaterra',
      'limpieza sofás Cerdanyola del Vallès',
      'limpieza ecológica sofás Cerdanyola',
    ],
    hasExtendedContent: true,
  },
  'terrassa': {
    neighborhoods: ['Centre de Terrassa', 'Ca n\'Aurell', 'Poble Nou', 'Can Palet', 'Les Fonts', 'Roc Blanc', 'Egara'],
    introText:
      'SuperClim Servicios ofrece un servicio completo de limpieza de sofás en Terrassa, utilizando técnicas avanzadas para garantizar una limpieza profunda y efectiva. Nuestros profesionales están capacitados para tratar todo tipo de tejidos, eliminando manchas, ácaros y malos olores, asegurando que tu sofá luzca y se sienta como nuevo.',
    secondaryText:
      'En Terrassa, Superclim ofrece servicios profesionales de limpieza de sofás a domicilio. Nuestros técnicos certificados se desplazan por todos los barrios de Terrassa para ofrecer un servicio de calidad con productos ecológicos y resultados garantizados.',
    whyChooseText:
      'En SuperClim, nos preocupamos por la salud y el bienestar de nuestros clientes. Por eso, utilizamos productos de limpieza ecológicos y seguros, que no solo limpian profundamente, sino que también cuidan tu sofá y el medio ambiente. Nuestro equipo está altamente entrenado para manejar cualquier tipo de mancha o tejido, ofreciendo un servicio personalizado y eficiente.',
    benefitsIntro: 'Beneficios de la Limpieza Regular de Sofás',
    benefits: [
      'Prolongar la Vida Útil de sus Muebles: La eliminación de la suciedad y los residuos previene el desgaste prematuro, manteniendo sus muebles en buen estado por más tiempo.',
      'Eliminar Manchas Difíciles: Nuestros expertos están equipados para tratar y remover todo tipo de manchas, devolviendo la apariencia original de su sofá.',
      'Prevenir el Mal Olor: Las fibras de los sofás pueden atrapar olores. Una limpieza profunda elimina estos olores, dejando un ambiente fresco y limpio.',
      'Mejorar la Apariencia General de su Hogar: Un sofá limpio realza la estética de su espacio, haciendo su hogar más acogedor.',
    ],
    serviceAreasIntro:
      'Ofrecemos nuestros servicios de limpieza de sofás en las siguientes zonas de Terrassa y alrededores.',
    additionalServicesText:
      'Además de la limpieza de sofás, ofrecemos una gama completa de servicios de limpieza de tapicería en Terrassa. Ya sea que necesite limpiar alfombras, sillas, colchones u otros muebles tapizados, nuestro equipo está preparado para asistirle.',
    ctaText:
      'Póngase en contacto con nosotros para una consulta gratuita y descubra cómo podemos renovar sus muebles y mejorar su hogar con nuestros servicios de limpieza de sofás en Terrassa.',
    uniqueKeywords: [
      'limpieza de sofás Terrassa',
      'limpieza de sofás Egara',
      'limpieza de tapicerías Vallparadís',
      'limpieza sofás Terrassa centro',
      'limpieza ecológica sofás Terrassa',
    ],
    hasExtendedContent: true,
  },

};

// ─── COLCHONES ───────────────────────────────────────────

export const mattressRegionalContent: Record<string, RegionalContent> = {
  sabadell: {
    neighborhoods: ['Centre', 'La Creu de Barberà', 'Gràcia', 'Can Llong', 'Castellarnau', 'La Concòrdia', 'Torre-romeu'],
    introText:
      'Superclim ofrece servicios profesionales de limpieza de colchones en Sabadell. Utilizamos productos ecológicos y técnicas avanzadas para eliminar ácaros, manchas y olores de todo tipo de tejidos. Nuestro proceso incluye aspirado de alta potencia y productos específicos para cada tipo de tejido, con un tiempo de secado de entre 4 y 6 horas.',
    uniqueKeywords: [
      'limpieza de colchones Sabadell',
      'limpieza colchones Centre Sabadell',
      'eliminar ácaros colchón Can Llong',
      'limpieza colchones Castellarnau',
      'desinfección colchones Sabadell',
    ],
    hasExtendedContent: false,
  },
  barcelona: {
    neighborhoods: ['Eixample', 'Gràcia', 'Sarrià-Sant Gervasi', 'Sants-Montjuïc', 'Sant Martí', 'Ciutat Vella', 'Horta-Guinardó'],
    introText:
      'SuperClim Servicios ofrece un servicio completo de limpieza de colchones en Barcelona, utilizando técnicas avanzadas para garantizar una limpieza profunda y efectiva. Nuestros profesionales están capacitados para tratar todo tipo de materiales, eliminando manchas, ácaros y malos olores, asegurando que tu colchón luzca y se sienta como nuevo.',
    secondaryText:
      'Con más de 16 años de experiencia en el sector, SuperClim se ha consolidado como uno de los mejores servicios de limpieza de colchones en Barcelona. Nuestro equipo está altamente capacitado y certificado, asegurando que cada limpieza se realice con los más altos estándares de calidad. Puedes confiar en nosotros para mantener tu colchón limpio y seguro para toda la familia.',
    whyChooseText:
      'En SuperClim, priorizamos la salud y el bienestar de nuestros clientes. Utilizamos productos de limpieza ecológicos y seguros, que no solo limpian profundamente, sino que también cuidan tu colchón y el medio ambiente. Nuestro equipo está capacitado para manejar cualquier tipo de mancha o material, ofreciendo un servicio personalizado y eficiente.',
    benefitsIntro: 'Beneficios de la Limpieza Regular de Colchones',
    benefits: [
      'Prolonga la Vida Útil del Colchón: Eliminar la suciedad y los residuos evita el desgaste prematuro de los materiales, manteniendo tu colchón en excelente estado por más tiempo.',
      'Elimina Manchas y Olores: Nuestros expertos están capacitados para tratar y eliminar manchas difíciles, así como para eliminar olores desagradables, asegurando un ambiente de descanso fresco y limpio.',
      'Reduce Alergias y Problemas Respiratorios: Una limpieza profunda elimina ácaros del polvo, bacterias y otros alérgenos, mejorando la calidad del aire y ayudando a reducir las alergias y problemas respiratorios.',
      'Mejora la Calidad del Sueño: Un colchón limpio proporciona un entorno de descanso más saludable, contribuyendo a un sueño más reparador y confortable.',
    ],
    serviceAreasIntro:
      'Ofrecemos nuestros servicios de limpieza de colchones en las siguientes zonas de Barcelona y alrededores.',
    additionalServicesText:
      'Además de la limpieza de colchones, ofrecemos servicios completos de limpieza de tapicería en Barcelona y alrededores. Ya sea que necesites limpiar tus sofás, alfombras, sillas o cualquier otro mueble tapizado, nuestro equipo está listo para ayudar. Nos enorgullecemos de brindar un servicio al cliente excepcional y resultados de limpieza superiores.',
    ctaText:
      'Contacte con nosotros hoy mismo para una consulta gratuita y descubre cómo podemos transformar tus colchones y tu hogar con nuestros servicios de limpieza en Barcelona.',
    uniqueKeywords: [
      'limpieza de colchones Barcelona',
      'limpieza colchones Eixample',
      'eliminar ácaros colchón Gràcia',
      'limpieza colchones Sarrià',
      'desinfección colchones Barcelona',
    ],
    hasExtendedContent: true,
  },
  'castellar-del-valles': {
    neighborhoods: ['Centre', 'El Balcó de Sant Llorenç', 'Can Font', 'El Racó', 'Les Arenes', 'El Pla de la Bruguera', 'El Mirador'],
    introText:
      'Superclim ofrece servicios de limpieza de colchones en Castellar del Vallès con precios competitivos. Utilizamos aspiradoras de alta potencia y productos de limpieza adaptados a cada tipo de material. Mejoramos la calidad del sueño, eliminamos manchas y olores, prolongamos la vida útil y creamos un ambiente saludable.',
    uniqueKeywords: [
      'limpieza de colchones Castellar del Vallès',
      'limpieza colchones El Balcó de Sant Llorenç',
      'eliminar ácaros colchón Can Font',
      'limpieza colchones El Mirador',
      'desinfección colchones Castellar',
    ],
    hasExtendedContent: false,
  },
  cerdanyola: {
    neighborhoods: ['Centre', 'Les Fontetes', 'La Granja', 'Can Cerdà', 'Riera de Cerdanyola', 'Montflorit'],
    introText:
      'SuperClim Servicios ofrece limpieza de colchones en Cerdanyola con precios competitivos. Nuestro servicio confiable y eficiente elimina ácaros, manchas y previene malos olores, prolongando la vida de su colchón. Utilizamos equipos especializados y técnicas avanzadas para eliminar patógenos.',
    uniqueKeywords: [
      'limpieza de colchones Cerdanyola',
      'limpieza colchones Les Fontetes',
      'eliminar ácaros colchón Montflorit',
      'limpieza colchones Can Cerdà',
      'desinfección colchones Cerdanyola',
    ],
    hasExtendedContent: false,
  },
  terrassa: {
    neighborhoods: ['Centre', 'La Maurina', 'Can Roca', 'Terrassa Norte', "Ca n'Anglada", 'San Pedro'],
    introText:
      'Superclim ofrece servicios profesionales de limpieza de colchones en Terrassa con precios competitivos. Nuestros profesionales certificados utilizan productos ecológicos para eliminar ácaros, manchas y olores, garantizando un ambiente saludable para su descanso.',
    uniqueKeywords: [
      'limpieza de colchones Terrassa',
      'limpieza colchones La Maurina',
      'eliminar ácaros colchón Terrassa Norte',
      'limpieza colchones Ca n\'Anglada',
      'desinfección colchones Terrassa',
    ],
    hasExtendedContent: false,
  },
  'sant-cugat-del-valles': {
    neighborhoods: ['Centre', 'Valldoreix', 'La Floresta', 'Can Mates', 'Coll Favà', 'Les Planes'],
    introText:
      'En Sant Cugat del Vallès, Superclim ofrece servicios profesionales de limpieza de colchones. Nuestros técnicos certificados se desplazan por todos los barrios para ofrecer un servicio de calidad con productos ecológicos y resultados garantizados.',
    uniqueKeywords: [
      'limpieza de colchones Sant Cugat',
      'limpieza colchones Valldoreix',
      'eliminar ácaros colchón La Floresta',
      'limpieza colchones Coll Favà',
      'desinfección colchones Sant Cugat del Vallès',
    ],
    hasExtendedContent: false,
  },
  'sant-quirze-del-valles': {
    neighborhoods: ['Centre', 'Can Palet', 'Les Fonts', 'Riera de Sant Quirze', 'La Serra', 'Can Vera'],
    introText:
      'Superclim ofrece servicios de limpieza de colchones en Sant Quirze del Vallès. Nuestros técnicos certificados se desplazan por todos los barrios para ofrecer un servicio profesional con productos ecológicos, eliminando ácaros, manchas y olores de su colchón.',
    uniqueKeywords: [
      'limpieza de colchones Sant Quirze',
      'limpieza colchones Can Palet',
      'eliminar ácaros colchón Les Fonts',
      'limpieza colchones Sant Quirze del Vallès',
      'desinfección colchones Sant Quirze',
    ],
    hasExtendedContent: false,
  },
};

// ─── ALFOMBRAS ───────────────────────────────────────────

export const carpetRegionalContent: Record<string, RegionalContent> = {
  sabadell: {
    neighborhoods: ['Centre', 'Eixample', 'Gràcia', 'Campoamor', 'Concordia', 'Nord', 'Sud'],
    introText:
      'En SuperClim Servicios ofrecemos limpieza y lavado de alfombras en Sabadell, con atención también en Terrassa, Castellar del Vallès, Sant Quirze, Sant Cugat, Barcelona y alrededores. Trabajamos con métodos adecuados según el tipo de fibra, el estado de la alfombra y el nivel de suciedad.',
    secondaryText:
      'Una hermosa alfombra puede ser un gran adorno para su hogar y también proteger el suelo debajo, por lo que su mantenimiento es fundamental. Una alfombra grande no se puede lavar como una prenda común, por eso es importante contar con un servicio profesional que garantice una limpieza segura y eficaz.',
    whyChooseText:
      'En SuperClim Servicios ofrecemos limpieza y lavado de alfombras en Sabadell con recogida y entrega, además de restauración y almacenamiento por mensualidad. Envíanos una foto de la alfombra, el tamaño aproximado y tu ciudad, y te responderemos con un presupuesto sin compromiso.',
    benefitsIntro: 'Métodos de Limpieza de Alfombras',
    benefits: [
      'Limpieza a Vapor: El vapor ayuda a aflojar la suciedad incrustada y mejora la higiene general. Ideal para muchas alfombras de fibra sintética.',
      'Limpieza en Seco: Utiliza solo productos químicos para eliminar la suciedad. Más rápido y casi no necesita tiempo de secado. Recomendado para fibras naturales.',
      'Lavado a Mano: Método menos común, utilizado principalmente para alfombras antiguas, delicadas o lujosas.',
    ],
    serviceAreasIntro:
      'Ofrecemos recogida y entrega de alfombras en Sabadell para que no tengas que preocuparte por transportar piezas pesadas o voluminosas. También ofrecemos servicio de almacenamiento de alfombras por mensualidad.',
    additionalServicesText:
      'Además del lavado, ofrecemos restauración de alfombras para piezas que necesitan recuperar mejor aspecto, limpieza más profunda y una presencia más cuidada. Dependiendo del estado de la alfombra, evaluamos la mejor forma de mejorar su conservación y apariencia.',
    ctaText:
      'En SuperClim Servicios ofrecemos limpieza y lavado de alfombras en Sabadell con recogida y entrega, además de restauración y almacenamiento por mensualidad. Envíanos una foto de la alfombra, el tamaño aproximado y tu ciudad, y te responderemos con un presupuesto sin compromiso.',
    uniqueKeywords: [
      'lavado de alfombras Sabadell',
      'limpieza alfombras Sabadell',
      'recogida entrega alfombras Sabadell',
      'restauración alfombras orientales Sabadell',
      'almacenamiento alfombras Sabadell',
      'limpieza vapor alfombras Sabadell',
    ],
    hasExtendedContent: true,
    serviceAreas: ['Sabadell Centro', 'Barrios de Sabadell', 'Zonas industriales'],
  },
  barcelona: {
    neighborhoods: ['Eixample', 'Gràcia', 'Sarrià-Sant Gervasi', 'Sants-Montjuïc', 'Sant Martí', 'Ciutat Vella', 'Horta-Guinardó'],
    introText:
      'En Barcelona, Superclim ofrece servicios completos de lavado de alfombras con recogida y entrega a domicilio. Trabajamos con limpieza a vapor para fibras sintéticas y limpieza en seco para fibras naturales. También ofrecemos almacenamiento por mensualidad y restauración de alfombras orientales.',
    secondaryText:
      'Solicite su presupuesto sin compromiso. Envíe una foto, el tamaño aproximado y su ciudad. Servicio de recogida y entrega en toda Barcelona.',
    uniqueKeywords: [
      'lavado de alfombras Barcelona',
      'limpieza alfombras Barcelona',
      'recogida entrega alfombras Barcelona',
      'restauración alfombras Barcelona',
      'almacenamiento alfombras Barcelona',
    ],
    hasExtendedContent: true,
  },
  'lavado-de-alfombras-barcelona': {
    neighborhoods: ['Eixample', 'Gràcia', 'Sarrià-Sant Gervasi', 'Sants-Montjuïc', 'Sant Martí', 'Ciutat Vella', 'Horta-Guinardó'],
    introText:
      'Servicio especializado de lavado de alfombras en Barcelona. Superclim ofrece recogida y entrega a domicilio, limpieza a vapor y en seco, restauración de alfombras orientales y almacenamiento por mensualidad. Presupuesto sin compromiso.',
    secondaryText:
      'Envíe una foto de su alfombra con el tamaño aproximado y reciba su presupuesto gratuito. Servicio de recogida y entrega en toda Barcelona y alrededores.',
    uniqueKeywords: [
      'lavado alfombras Barcelona',
      'limpieza alfombras Barcelona centro',
      'recogida entrega alfombras Barcelona',
      'restauración alfombras orientales Barcelona',
      'almacenamiento alfombras mensualidad Barcelona',
    ],
    hasExtendedContent: true,
  },
  'sant-cugat': {
    neighborhoods: ['Centre', 'Valldoreix', 'Mira-sol', 'La Floresta', 'Les Planes'],
    introText:
      'En Sant Cugat del Vallès, Superclim ofrece servicios de limpieza de alfombras a domicilio. Trabajamos con limpieza a vapor para fibras sintéticas y limpieza en seco para fibras naturales y delicadas.',
    uniqueKeywords: [
      'limpieza de alfombras Sant Cugat',
      'lavado alfombras Valldoreix',
      'limpieza alfombras Mira-sol',
      'limpieza alfombras La Floresta',
    ],
    hasExtendedContent: false,
  },
  'sant-quirze': {
    neighborhoods: ['Centre', 'Les Fonts', 'Park Avenue', 'Can Palet'],
    introText:
      'En Sant Quirze del Vallès, Superclim ofrece servicios profesionales de limpieza de alfombras. Utilizamos limpieza a vapor para fibras sintéticas y limpieza en seco para fibras naturales, garantizando resultados óptimos.',
    uniqueKeywords: [
      'limpieza de alfombras Sant Quirze',
      'lavado alfombras Les Fonts',
      'limpieza alfombras Sant Quirze del Vallès',
    ],
    hasExtendedContent: false,
  },
  cerdanyola: {
    neighborhoods: ['Centre', 'Montflorit', 'Sant Martí de les Ermites', 'Bellaterra'],
    introText:
      'En Cerdanyola del Vallès, Superclim ofrece servicios de limpieza de alfombras con técnicas de limpieza a vapor y en seco. Nos adaptamos a las necesidades de cada tipo de fibra para garantizar los mejores resultados.',
    uniqueKeywords: [
      'limpieza de alfombras Cerdanyola',
      'lavado alfombras Montflorit',
      'limpieza alfombras Bellaterra',
      'limpieza alfombras Cerdanyola del Vallès',
    ],
    hasExtendedContent: false,
  },
  terrassa: {
    neighborhoods: ['Centre', 'Egara', 'San Pedro', 'Vallparadís', 'La Cogullada'],
    introText:
      'En Terrassa, Superclim ofrece servicios profesionales de limpieza de alfombras. Trabajamos con limpieza a vapor para fibras sintéticas y limpieza en seco para fibras naturales, asegurando la conservación de sus alfombras.',
    uniqueKeywords: [
      'limpieza de alfombras Terrassa',
      'lavado alfombras Egara',
      'limpieza alfombras Vallparadís',
      'limpieza alfombras Terrassa centro',
    ],
    hasExtendedContent: false,
  },
  'barbera-del-valles': {
    neighborhoods: ['Centre', 'El Poblenou', 'La Romànica', 'Can Llobet'],
    introText:
      'En Barberà del Vallès, Superclim ofrece servicios de limpieza de alfombras con técnicas especializadas. Utilizamos limpieza a vapor para fibras sintéticas y limpieza en seco para fibras naturales y delicadas.',
    uniqueKeywords: [
      'limpieza de alfombras Barberà',
      'lavado alfombras Barberà del Vallès',
      'limpieza alfombras El Poblenou',
      'limpieza alfombras Can Llobet',
    ],
    hasExtendedContent: false,
  },
  'castellar-del-valles': {
    neighborhoods: ['Centre', 'El Puig', 'Sant Feliu del Racó', 'Santa Maria del Puig'],
    introText:
      'En Castellar del Vallès, Superclim ofrece servicios profesionales de limpieza de alfombras. Trabajamos con limpieza a vapor para fibras sintéticas y limpieza en seco para fibras naturales, garantizando la mejor conservación de sus piezas.',
    uniqueKeywords: [
      'limpieza de alfombras Castellar del Vallès',
      'lavado alfombras Castellar',
      'limpieza alfombras El Puig',
      'limpieza alfombras Sant Feliu del Racó',
    ],
    hasExtendedContent: false,
  },
};

// Helper para obtener contenido según tipo de servicio
export function getRegionalContent(
  serviceType: 'sofas' | 'colchones' | 'alfombras',
  citySlug: string
): RegionalContent | undefined {
  const map = {
    sofas: sofaRegionalContent,
    colchones: mattressRegionalContent,
    alfombras: carpetRegionalContent,
  };
  return map[serviceType][citySlug];
}
