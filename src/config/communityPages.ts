export type CommunityCitySlug = 'sabadell' | 'terrassa' | 'sant-quirze';

interface CommunitySection {
  title: string;
  paragraphs: string[];
}

interface CommunityFAQ {
  question: string;
  answer: string;
}

export interface CommunityCityConfig {
  name: string;
  shortName: string;
  seoKey: 'communityCleaningSabadell' | 'communityCleaningTerrassa' | 'communityCleaningSantQuirze';
  path: string;
  h1: string;
  introduction: string;
  eyebrow: string;
  whatsappMessage: string;
  sections: CommunitySection[];
  faqs: CommunityFAQ[];
  related: { label: string; path: string }[];
}

export const communityCityPages: Record<CommunityCitySlug, CommunityCityConfig> = {
  sabadell: {
    name: 'Sabadell',
    shortName: 'Sabadell',
    seoKey: 'communityCleaningSabadell',
    path: '/limpieza-de-comunidades/sabadell',
    h1: 'Limpieza de comunidades en Sabadell',
    eyebrow: 'Superclim tiene su base en Sabadell',
    introduction:
      'Superclim tiene su base en Sabadell y ofrece servicio de limpieza y mantenimiento para comunidades de vecinos de la ciudad. Preparamos cada propuesta según el tamaño del edificio, las zonas que deben mantenerse y la frecuencia necesaria.',
    whatsappMessage: 'Hola, quiero solicitar un presupuesto para una comunidad en Sabadell.',
    sections: [
      {
        title: 'Empresa de limpieza de comunidades en Sabadell',
        paragraphs: [
          'Nuestra base operativa está en Sabadell. Desde aquí organizamos servicios recurrentes y actuaciones puntuales para fincas residenciales de la ciudad, siempre a partir de un alcance acordado con la comunidad.',
          'La propuesta se adapta al edificio: no requiere lo mismo un portal pequeño que una finca con varios rellanos, ascensor, patio y garaje comunitario.',
        ],
      },
      {
        title: 'Limpieza de escaleras y portales en Sabadell',
        paragraphs: [
          'El portal es la zona de mayor visibilidad y una de las que concentra más tránsito. Podemos incluir accesos, vestíbulo, buzones, cristales accesibles y elementos de contacto dentro del plan contratado.',
          'En escaleras y rellanos organizamos el barrido y fregado atendiendo a descansillos, esquinas y zócalos, con una periodicidad coherente con el uso de la finca.',
        ],
      },
      {
        title: 'Mantenimiento de garajes y zonas comunes',
        paragraphs: [
          'Los garajes, patios y espacios compartidos pueden incorporarse al servicio con tareas y frecuencias diferenciadas. Así, las zonas de paso diario no tienen que seguir necesariamente el mismo calendario que un trabajo de garaje.',
          'Antes de preparar el presupuesto revisamos qué espacios deben incluirse y si existe alguna necesidad puntual de puesta a punto.',
        ],
      },
      {
        title: 'Servicio para comunidades y administradores de fincas',
        paragraphs: [
          'Trabajamos la propuesta con presidentes de comunidad y administradores de fincas para dejar definidos los espacios, las tareas y la periodicidad. Este planteamiento facilita valorar el servicio y trasladar un alcance claro a los vecinos.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuánto cuesta la limpieza de una comunidad en Sabadell?',
        answer: 'El presupuesto depende de las plantas, portales, ascensores, superficie, zonas incluidas, estado inicial y frecuencia. Valoramos cada finca antes de preparar una propuesta.',
      },
      {
        question: '¿Superclim está en Sabadell?',
        answer: 'Sí. Superclim tiene su base en Carrer de Alfons Sala 57, 08203 Sabadell.',
      },
      {
        question: '¿Realizáis mantenimiento semanal?',
        answer: 'Sí, el plan puede contemplar mantenimiento semanal o varias visitas por semana cuando las necesidades de la finca lo requieran.',
      },
      {
        question: '¿Podéis limpiar garajes comunitarios?',
        answer: 'Sí, el garaje puede incluirse en la valoración con tareas y periodicidad acordadas para ese espacio.',
      },
      {
        question: '¿Trabajáis con administradores de fincas de Sabadell?',
        answer: 'Sí. Podemos coordinar la valoración y la definición del servicio con el administrador o con la presidencia de la comunidad.',
      },
    ],
    related: [
      { label: 'Terrassa', path: '/limpieza-de-comunidades/terrassa' },
      { label: 'Sant Quirze del Vallès', path: '/limpieza-de-comunidades/sant-quirze' },
    ],
  },
  terrassa: {
    name: 'Terrassa',
    shortName: 'Terrassa',
    seoKey: 'communityCleaningTerrassa',
    path: '/limpieza-de-comunidades/terrassa',
    h1: 'Limpieza de comunidades en Terrassa',
    eyebrow: 'Cobertura regional desde Sabadell',
    introduction:
      'Superclim presta servicio en Terrassa desde su base en Sabadell, preparando planes de limpieza para comunidades que necesitan mantener portales, escaleras, ascensores, rellanos, garajes y otras zonas comunes.',
    whatsappMessage: 'Hola, quiero solicitar un presupuesto para una comunidad en Terrassa.',
    sections: [
      {
        title: 'Servicio de limpieza para comunidades de vecinos en Terrassa',
        paragraphs: [
          'Organizamos la cobertura en Terrassa dentro de nuestro servicio regional. Cada plan parte de las características reales de la finca y del volumen de circulación de residentes, visitas y proveedores.',
          'Una comunidad compacta puede requerir un planteamiento sencillo, mientras que un edificio con varios accesos o espacios compartidos necesita distribuir mejor las tareas.',
        ],
      },
      {
        title: 'Limpieza de portales, escaleras y ascensores',
        paragraphs: [
          'Coordinamos el mantenimiento del acceso y de los recorridos interiores para que portal, rellanos y escalera reciban la atención adecuada. Los ascensores pueden incluir cabina, espejos, puertas y botoneras según el alcance acordado.',
          'La frecuencia se define según el uso: las zonas con mayor tránsito pueden necesitar más visitas que otros espacios de la misma finca.',
        ],
      },
      {
        title: 'Garajes y zonas comunes en comunidades de Terrassa',
        paragraphs: [
          'El garaje puede planificarse con una periodicidad distinta a la escalera. También valoramos patios, cristales accesibles y otras áreas comunitarias para evitar incluir tareas ambiguas en la propuesta.',
          'Si el edificio necesita una intervención inicial, podemos plantear una puesta a punto antes de comenzar el mantenimiento recurrente.',
        ],
      },
      {
        title: 'Presupuesto adaptado a cada finca',
        paragraphs: [
          'El administrador o la presidencia puede indicarnos las prioridades de la comunidad. Con esa información definimos zonas, tareas, frecuencias y posibles trabajos extraordinarios en una propuesta adaptada.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Trabajáis con comunidades de vecinos en Terrassa?',
        answer: 'Sí. Prestamos servicio en Terrassa desde nuestra base en Sabadell y preparamos el plan según las características de cada finca.',
      },
      {
        question: '¿Es posible contratar diferentes frecuencias para escalera y garaje?',
        answer: 'Sí. Podemos definir una periodicidad para portal y escalera y otra específica para el garaje u otros espacios de menor uso diario.',
      },
      {
        question: '¿Podéis realizar una puesta a punto antes del mantenimiento periódico?',
        answer: 'Sí. Cuando el estado inicial lo requiere, se puede valorar una limpieza puntual previa y después establecer el plan periódico.',
      },
      {
        question: '¿Cómo solicitamos un presupuesto para una finca en Terrassa?',
        answer: 'Podéis contactar por teléfono o WhatsApp. Recogeremos los datos básicos de la finca y las zonas a incluir para preparar la valoración.',
      },
    ],
    related: [
      { label: 'Sabadell', path: '/limpieza-de-comunidades/sabadell' },
      { label: 'Sant Quirze del Vallès', path: '/limpieza-de-comunidades/sant-quirze' },
    ],
  },
  'sant-quirze': {
    name: 'Sant Quirze del Vallès',
    shortName: 'Sant Quirze',
    seoKey: 'communityCleaningSantQuirze',
    path: '/limpieza-de-comunidades/sant-quirze',
    h1: 'Limpieza de comunidades en Sant Quirze del Vallès',
    eyebrow: 'Servicio próximo desde Sabadell',
    introduction:
      'Superclim ofrece servicio de limpieza de comunidades en Sant Quirze del Vallès, muy próximo a nuestra base de Sabadell. Adaptamos el mantenimiento a portales, escaleras, ascensores, garajes, patios y otros espacios compartidos.',
    whatsappMessage: 'Hola, quiero solicitar un presupuesto para una comunidad en Sant Quirze del Vallès.',
    sections: [
      {
        title: 'Limpieza de comunidades de vecinos en Sant Quirze',
        paragraphs: [
          'La proximidad entre Sant Quirze y nuestra base de Sabadell permite integrar el municipio en nuestras rutas operativas regionales. Valoramos cada comunidad residencial según su distribución y sus necesidades de mantenimiento.',
          'El servicio puede concentrarse en los espacios interiores de uso habitual o incorporar otras zonas compartidas cuando estén incluidas en el acuerdo.',
        ],
      },
      {
        title: 'Mantenimiento de escaleras y zonas comunes',
        paragraphs: [
          'Portales, rellanos, escaleras y ascensores tienen usos distintos dentro de un mismo edificio. Definimos las tareas para cada zona y una frecuencia que responda al tránsito real de la comunidad.',
          'En accesos también se pueden contemplar buzones, puertas y cristales accesibles, evitando dar por incluidos trabajos que no se hayan valorado previamente.',
        ],
      },
      {
        title: 'Garajes, patios y accesos comunitarios',
        paragraphs: [
          'Podemos incluir garajes, patios y zonas exteriores comunitarias cuando formen parte del servicio contratado. Su mantenimiento se planifica de forma separada si requiere una frecuencia diferente.',
          'La valoración inicial permite concretar superficies, accesibilidad y estado antes de definir las tareas correspondientes.',
        ],
      },
      {
        title: 'Servicio periódico o puntual',
        paragraphs: [
          'Además del mantenimiento recurrente, atendemos limpiezas puntuales y puestas a punto acordadas. La propuesta indicará con claridad si se trata de una actuación única o de un calendario periódico.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Trabajáis en Sant Quirze del Vallès?',
        answer: 'Sí. Sant Quirze forma parte de nuestra cobertura regional desde la base de Superclim en Sabadell.',
      },
      {
        question: '¿Podéis incluir patios y zonas exteriores comunitarias?',
        answer: 'Sí, siempre que se valoren previamente y queden incluidas en la propuesta con sus tareas y frecuencia.',
      },
      {
        question: '¿Ofrecéis limpieza puntual además del mantenimiento?',
        answer: 'Sí. Podemos valorar una limpieza puntual, una puesta a punto inicial o un servicio periódico según la necesidad de la comunidad.',
      },
      {
        question: '¿Cómo se calcula el presupuesto?',
        answer: 'Consideramos plantas, accesos, ascensores, superficies, garaje, patios, cristales, frecuencia, estado inicial y posibles trabajos adicionales.',
      },
    ],
    related: [
      { label: 'Sabadell', path: '/limpieza-de-comunidades/sabadell' },
      { label: 'Terrassa', path: '/limpieza-de-comunidades/terrassa' },
    ],
  },
};
