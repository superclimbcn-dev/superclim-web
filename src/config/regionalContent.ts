// Contenido SEO específico extraído del sitio antiguo (superclim.es)
// Cada ciudad tiene barrios, textos y keywords únicos indexados en Google

export interface RegionalContent {
  neighborhoods: string[];
  introText: string;
  secondaryText?: string;
  uniqueKeywords: string[];
  hasExtendedContent: boolean;
  serviceAreas?: string[];
}

// ─── SOFÁS ───────────────────────────────────────────────

export const sofaRegionalContent: Record<string, RegionalContent> = {
  barcelona: {
    neighborhoods: ['Eixample', 'Gràcia', 'Sarrià-Sant Gervasi', 'Sants-Montjuïc', 'Sant Martí', 'Ciutat Vella', 'Horta-Guinardó'],
    introText:
      'En Superclim ofrecemos uno de los mejores servicios de limpieza de sofás en Barcelona. Con más de 16 años de experiencia, nuestros técnicos certificados se desplazan por toda la ciudad para ofrecer un servicio profesional a domicilio. Trabajamos con todo tipo de tapicerías y tejidos, utilizando productos ecológicos que son seguros para toda la familia.',
    secondaryText:
      'Barcelona es una ciudad con alta contaminación por tráfico y polvo urbano, lo que hace que los sofás se ensucien con mayor frecuencia. Nuestro servicio especializado elimina ácaros, bacterias y alérgenos acumulados, mejorando la calidad del aire interior de su hogar.',
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
    neighborhoods: ['Centre', 'Eixample', 'Gràcia', 'Campoamor', 'Concordia', 'Nord', 'Sud'],
    introText:
      'Superclim es la empresa líder en limpieza de sofás en Sabadell. Con más de 16 años de experiencia, ofrecemos servicios profesionales de limpieza de tapicerías a domicilio en todos los barrios de la ciudad. Utilizamos productos ecológicos y técnicas avanzadas para devolver la frescura a sus sofás.',
    uniqueKeywords: [
      'limpieza de sofás Sabadell',
      'limpieza de sofás Centre Sabadell',
      'limpieza de tapicerías Eixample Sabadell',
      'limpieza de sofás Campoamor',
      'limpieza ecológica sofás Sabadell',
    ],
    hasExtendedContent: false,
  },
  cerdanyola: {
    neighborhoods: ['Centre', 'Montflorit', 'Sant Martí de les Ermites', 'Bellaterra', 'Les Fontetes', 'La Granja', 'Can Cerdà'],
    introText:
      'En Cerdanyola del Vallès, Superclim ofrece servicios profesionales de limpieza de sofás a domicilio. Nuestros técnicos certificados se desplazan por todos los barrios de Cerdanyola para ofrecer un servicio de calidad con productos ecológicos y resultados garantizados.',
    uniqueKeywords: [
      'limpieza de sofás Cerdanyola',
      'limpieza de sofás Montflorit',
      'limpieza de tapicerías Bellaterra',
      'limpieza sofás Cerdanyola del Vallès',
      'limpieza ecológica sofás Cerdanyola',
    ],
    hasExtendedContent: false,
  },
  terrassa: {
    neighborhoods: ['Centre', 'Egara', 'San Pedro', 'Vallparadís', 'La Cogullada', 'La Maurina', 'Can Roca'],
    introText:
      'Superclim ofrece servicios profesionales de limpieza de sofás en Terrassa. Nuestros técnicos se desplazan por todos los barrios de la ciudad para ofrecer un servicio de limpieza de tapicerías a domicilio con productos ecológicos y técnicas avanzadas.',
    uniqueKeywords: [
      'limpieza de sofás Terrassa',
      'limpieza de sofás Egara',
      'limpieza de tapicerías Vallparadís',
      'limpieza sofás Terrassa centro',
      'limpieza ecológica sofás Terrassa',
    ],
    hasExtendedContent: false,
  },
  'sant-cugat': {
    neighborhoods: ['Centre', 'Valldoreix', 'Mira-sol', 'La Floresta', 'Les Planes', 'Can Mates', 'Coll Favà'],
    introText:
      'En Sant Cugat del Vallès, Superclim ofrece servicios especializados de limpieza de sofás a domicilio. Nuestros técnicos certificados se desplazan por todos los barrios de Sant Cugat para ofrecer un servicio profesional con productos ecológicos y resultados garantizados.',
    uniqueKeywords: [
      'limpieza de sofás Sant Cugat',
      'limpieza de sofás Valldoreix',
      'limpieza de tapicerías Mira-sol',
      'limpieza sofás Sant Cugat del Vallès',
      'limpieza ecológica sofás Sant Cugat',
    ],
    hasExtendedContent: false,
  },
  'barbera-del-valles': {
    neighborhoods: ['Centre', 'El Poblenou', 'La Romànica', 'Can Llobet'],
    introText:
      'En Barberà del Vallès, Superclim ofrece servicios profesionales de limpieza de sofás con más de 16 años de experiencia. Nuestros técnicos certificados se desplazan por todos los barrios para ofrecer un servicio de limpieza de tapicerías a domicilio con productos ecológicos.',
    secondaryText:
      'La proximidad de Barberà a zonas industriales y el tráfico de la C-58 pueden acelerar la acumulación de polvo y contaminantes en los sofás. Nuestro servicio especializado elimina estas partículas, mejorando la calidad del aire de su hogar.',
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
    neighborhoods: ['Centre', 'Les Fonts', 'Park Avenue', 'Can Palet', 'Riera de Sant Quirze', 'La Serra', 'Can Vera'],
    introText:
      'Superclim ofrece servicios profesionales de limpieza de sofás en Sant Quirze del Vallès. Con más de 16 años de experiencia, nuestros técnicos certificados se desplazan por todos los barrios para ofrecer un servicio de limpieza de tapicerías a domicilio con productos ecológicos.',
    uniqueKeywords: [
      'limpieza de sofás Sant Quirze',
      'limpieza de sofás Les Fonts',
      'limpieza de tapicerías Sant Quirze del Vallès',
      'limpieza sofás Can Palet',
      'limpieza ecológica sofás Sant Quirze',
    ],
    hasExtendedContent: false,
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
      'En Barcelona, Superclim ofrece uno de los mejores servicios de limpieza de colchones. Nuestros técnicos certificados utilizan productos ecológicos seguros para toda la familia, eliminando ácaros, manchas y olores de forma efectiva. Prolonga la vida útil de su colchón, elimina manchas y olores, reduce alergias y mejora la calidad del sueño.',
    uniqueKeywords: [
      'limpieza de colchones Barcelona',
      'limpieza colchones Eixample',
      'eliminar ácaros colchón Gràcia',
      'limpieza colchones Sarrià',
      'desinfección colchones Barcelona',
    ],
    hasExtendedContent: false,
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
      'En Sabadell, Superclim ofrece servicios completos de lavado de alfombras, incluyendo recogida y entrega a domicilio, almacenamiento por mensualidad y restauración de alfombras orientales. Trabajamos con limpieza a vapor para fibras sintéticas y limpieza en seco para fibras naturales y delicadas.',
    secondaryText:
      'Solicite su presupuesto sin compromiso. Envíe una foto de su alfombra, el tamaño aproximado y su ciudad. Ofrecemos servicio de recogida y entrega, restauración profesional y almacenamiento seguro por mensualidad.',
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
