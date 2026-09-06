import { businessConfig } from '@/config/business';

export type CommunityCitySlug = 'sabadell' | 'terrassa' | 'sant-quirze' | 'sant-cugat' | 'castellar-del-valles' | 'barbera-del-valles';

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
  seoKey: 'communityCleaningSabadell' | 'communityCleaningTerrassa' | 'communityCleaningSantQuirze' | 'communityCleaningSantCugat' | 'communityCleaningCastellar' | 'communityCleaningBarbera';
  path: string;
  image: string;
  imageAlt: string;
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
    image: '/images/comunidades/portal-sabadell.webp',
    imageAlt: 'Portal residencial con suelo de terrazo, buzones y acceso a la escalera',
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
    image: '/images/comunidades/portal-terrassa.webp',
    imageAlt: 'Escalera comunitaria de terrazo con barandilla metálica y luz natural',
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
    image: '/images/comunidades/portal-sant-quirze.webp',
    imageAlt: 'Acceso cubierto a una comunidad con pavimento cerámico y patio compartido',
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
  'sant-cugat': {
    name: 'Sant Cugat del Vallès',
    shortName: 'Sant Cugat',
    seoKey: 'communityCleaningSantCugat',
    path: businessConfig.urls.services.communityCleaningSantCugat,
    image: '/images/comunidades/portal-sant-cugat.webp',
    imageAlt: 'Vestíbulo comunitario con ascensor y acceso acristalado a un patio compartido',
    h1: 'Limpieza de comunidades en Sant Cugat del Vallès',
    eyebrow: 'Sant Cugat · Vallès Occidental',
    introduction:
      'En Sant Cugat del Vallès, organizamos la limpieza de comunidades de propietarios por accesos y espacios compartidos: del portal a los rellanos, ascensores y zonas comunes. Superclim se desplaza desde Sabadell para acordar con presidentes y administradores de fincas un mantenimiento periódico adaptado al edificio.',
    whatsappMessage: 'Hola, quiero solicitar un presupuesto de limpieza para una comunidad en Sant Cugat del Vallès.',
    sections: [
      {
        title: 'Una propuesta para la distribución de tu comunidad',
        paragraphs: [
          'Para valorar una finca en el Centre, Volpelleres o Mira-sol, empezamos por localizar sus entradas y conocer qué espacios comparten los vecinos. El barrio ayuda a situar el servicio; son la distribución y el uso del edificio los que determinan las tareas.',
          'Si hay varios portales unidos por un patio o un garaje, conviene indicar cuáles forman parte de la misma comunidad. Así podemos definir el mantenimiento de cada escalera y de los recorridos que conectan los accesos.',
        ],
      },
      {
        title: 'Del portal al ascensor y los rellanos',
        paragraphs: [
          'El plan puede contemplar la limpieza de la puerta de entrada, cristales accesibles, buzones y suelo del vestíbulo. En el ascensor se concretan cabina, espejo, puertas y botoneras, junto con el barrido y fregado de escaleras y rellanos.',
          'Cuando existe una entrada desde el exterior y otra desde el aparcamiento, revisamos ambos recorridos. La periodicidad puede variar entre el acceso de uso diario y una zona compartida con menos tránsito.',
        ],
      },
      {
        title: 'Zonas comunes con tareas bien delimitadas',
        paragraphs: [
          'En las comunidades que disponen de patios, pasillos abiertos o espacios de acceso compartido, detallamos qué superficies se limpian y con qué frecuencia. El mantenimiento de zonas comunes debe recoger estos espacios de forma expresa.',
          'La limpieza de los pavimentos de paso no implica incluir jardinería ni mantenimiento de instalaciones. Si la finca necesita un trabajo adicional, lo identificamos antes de preparar la propuesta.',
        ],
      },
      {
        title: 'Coordinación con la presidencia y el administrador',
        paragraphs: [
          'Para solicitar una valoración en Sant Cugat, indícanos el número de accesos, plantas y ascensores, las zonas comunes y la frecuencia que busca la comunidad. Desde nuestra base en Sabadell coordinamos la valoración y dejamos definidos los espacios incluidos para que la presidencia o el administrador pueda revisar el alcance.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Atendéis comunidades en el Centre, Volpelleres y Mira-sol?',
        answer: 'Sí. Atendemos comunidades de Sant Cugat del Vallès desde Sabadell. Al contactar, indícanos la ubicación y la distribución de la finca para organizar la valoración.',
      },
      {
        question: '¿Podemos contratar la limpieza de varios portales y una zona compartida?',
        answer: 'Sí. La propuesta puede distinguir las tareas de cada portal y las de los espacios que comparten, como un patio o un acceso al garaje, con sus respectivas frecuencias.',
      },
      {
        question: '¿Se incluyen los pasillos exteriores de la comunidad?',
        answer: 'Pueden incluirse tras revisar la superficie, el material y la accesibilidad. Deben quedar definidos en el plan, igual que los espacios interiores.',
      },
      {
        question: '¿Tenéis una oficina en Sant Cugat?',
        answer: 'Nuestra base está en Sabadell. Desde allí prestamos el servicio en Sant Cugat y coordinamos el mantenimiento con la comunidad o su administrador.',
      },
    ],
    related: [
      { label: 'Sabadell', path: businessConfig.urls.services.communityCleaningSabadell },
    ],
  },
  'castellar-del-valles': {
    name: 'Castellar del Vallès',
    shortName: 'Castellar del Vallès',
    seoKey: 'communityCleaningCastellar',
    path: businessConfig.urls.services.communityCleaningCastellar,
    image: '/images/comunidades/portal-castellar-del-valles.webp',
    imageAlt: 'Rellano de terrazo con escalera comunitaria, barandilla y puerta de vivienda',
    h1: 'Limpieza de comunidades en Castellar del Vallès',
    eyebrow: 'Castellar del Vallès · Servicio desde Sabadell',
    introduction:
      'Superclim atiende comunidades de propietarios en Castellar del Vallès desde su base en Sabadell. Preparamos el mantenimiento periódico de portales, escaleras, rellanos, ascensores y zonas comunes, con especial atención al recorrido entre la entrada y cada planta de la finca.',
    whatsappMessage: 'Hola, quiero valorar la limpieza periódica de una comunidad en Castellar del Vallès.',
    sections: [
      {
        title: 'Mantenimiento de fincas en el núcleo urbano de Castellar',
        paragraphs: [
          'El núcleo antiguo y el Eixample forman parte del entorno urbano de Castellar del Vallès, en el Vallès Occidental. Para una comunidad de estas zonas, la valoración parte del portal concreto, los tramos de escalera y las superficies que necesitan atención.',
          'En una finca compacta, puede bastar con organizar la entrada y los rellanos. Si dispone de ascensor, patio o acceso al garaje, añadimos esos espacios al inventario antes de establecer el calendario.',
        ],
      },
      {
        title: 'Escaleras, descansillos y materiales del edificio',
        paragraphs: [
          'La limpieza de escaleras contempla el barrido y fregado de peldaños y descansillos, además de las esquinas y zócalos que se acuerden. Revisamos el tipo de pavimento para adaptar las tareas a las superficies de la comunidad.',
          'En el portal se pueden incluir la puerta, los buzones y los cristales accesibles. Si la escalera es el único recorrido hasta las viviendas, acordamos cómo organizar el trabajo teniendo en cuenta el paso de los vecinos.',
        ],
      },
      {
        title: 'Puesta a punto y continuidad del servicio',
        paragraphs: [
          'Cuando una comunidad de Castellar retoma el mantenimiento después de una interrupción, conviene distinguir la suciedad acumulada de las tareas habituales. Podemos valorar una limpieza inicial y después definir las visitas periódicas.',
          'Los ascensores y otras zonas comunes se incorporan según las necesidades de la finca. El patio o el garaje pueden tener un calendario diferente al del portal y los rellanos.',
        ],
      },
      {
        title: 'Una valoración que la comunidad pueda revisar',
        paragraphs: [
          'El presidente o el administrador de fincas puede trasladarnos las prioridades de los vecinos, las plantas del edificio y el estado actual de las zonas comunes. Organizamos la atención desde Sabadell y concretamos las tareas recurrentes y los trabajos puntuales para facilitar la revisión de la propuesta.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Limpiáis comunidades pequeñas sin ascensor en Castellar?',
        answer: 'Sí. Valoramos también fincas donde el servicio se concentra en el portal, la escalera y los rellanos. La propuesta recoge los espacios que realmente tiene el edificio.',
      },
      {
        question: '¿Podéis hacer una limpieza inicial antes de empezar las visitas periódicas?',
        answer: 'Sí. Revisamos el estado de la comunidad y, si necesita una puesta a punto, la diferenciamos del mantenimiento habitual en la propuesta.',
      },
      {
        question: '¿El patio debe limpiarse con la misma frecuencia que la escalera?',
        answer: 'No necesariamente. Podemos acordar un calendario propio para el patio o el garaje y otro para los recorridos interiores que se usan cada día.',
      },
      {
        question: '¿Desde dónde atendéis las fincas de Castellar del Vallès?',
        answer: 'Desde nuestra base en Sabadell. Para preparar la valoración, el presidente o el administrador puede contactar por teléfono o WhatsApp e indicar la ubicación de la comunidad.',
      },
    ],
    related: [
      { label: 'Sabadell', path: businessConfig.urls.services.communityCleaningSabadell },
    ],
  },
  'barbera-del-valles': {
    name: 'Barberà del Vallès',
    shortName: 'Barberà del Vallès',
    seoKey: 'communityCleaningBarbera',
    path: businessConfig.urls.services.communityCleaningBarbera,
    image: '/images/comunidades/portal-barbera-del-valles.webp',
    imageAlt: 'Entrada de edificio residencial con puerta acristalada, buzones y escalera lateral',
    h1: 'Limpieza de comunidades en Barberà del Vallès',
    eyebrow: 'Barberà del Vallès · Vallès Occidental',
    introduction:
      'Para las comunidades de propietarios de Barberà del Vallès, Superclim organiza desde Sabadell la limpieza de los recorridos comunes del edificio. Acordamos con presidentes y administradores de fincas las tareas de portal, escaleras, rellanos y ascensores, y su continuidad mediante un mantenimiento periódico.',
    whatsappMessage: 'Hola, necesito un presupuesto de limpieza de comunidades en Barberà del Vallès.',
    sections: [
      {
        title: 'Atención a comunidades de Barberà desde Sabadell',
        paragraphs: [
          'Para solicitar servicio en zonas como Can Llobet, Can Serra o Parc Central, indícanos la dirección de la comunidad y qué accesos deben mantenerse. Barberà del Vallès forma parte de nuestra cobertura en el Vallès Occidental, con la organización del servicio desde Sabadell.',
          'Antes de presupuestar, distinguimos los espacios de uso exclusivo de la finca de los accesos compartidos con otras comunidades. Esta información resulta útil cuando el edificio tiene más de una escalera o una conexión con el aparcamiento.',
        ],
      },
      {
        title: 'Limpieza del recorrido entre la calle y las viviendas',
        paragraphs: [
          'El vestíbulo, la puerta de entrada y los buzones pueden recibir atención junto con los suelos del portal. En las plantas superiores, definimos el barrido y fregado de escaleras y rellanos para mantener la continuidad del recorrido.',
          'Cuando hay ascensor, el plan puede incluir el suelo de cabina, espejos, puertas y botoneras. Las huellas en superficies de contacto y la suciedad que entra desde la calle ayudan a valorar qué tareas necesitan más regularidad.',
        ],
      },
      {
        title: 'Frecuencias según el uso de las zonas comunes',
        paragraphs: [
          'El mantenimiento periódico se organiza según las viviendas, el tránsito y los espacios incluidos. No es necesario asignar la misma frecuencia a los cristales accesibles, al garaje y a un portal que se utiliza durante todo el día.',
          'Si la comunidad comparte pasos hacia un patio o un aparcamiento, concretamos hasta dónde llega la limpieza contratada. Los trabajos extraordinarios se valoran aparte del calendario habitual.',
        ],
      },
      {
        title: 'Un alcance claro para presidentes y administradores',
        paragraphs: [
          'Para una finca de Barberà, el administrador o la presidencia puede enviarnos el número de plantas, ascensores y entradas, junto con la frecuencia deseada y las incidencias de limpieza que observa. Con estos datos preparamos una valoración que permita revisar qué se hará en cada espacio antes de iniciar el servicio.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿El servicio de Barberà se organiza desde Sabadell?',
        answer: 'Sí. Superclim tiene su base en Sabadell y desde allí coordina la atención a las comunidades de Barberà del Vallès.',
      },
      {
        question: '¿Podemos incluir el acceso que comunica con el aparcamiento?',
        answer: 'Sí. Revisamos ese recorrido y dejamos definido qué tramo y qué superficies se incluyen, especialmente si el aparcamiento se comparte con otra comunidad.',
      },
      {
        question: '¿La limpieza de ascensores incluye espejos y botoneras?',
        answer: 'Puede incluirlos junto con cabina y puertas. La propuesta detalla los elementos incluidos y la frecuencia de atención.',
      },
      {
        question: '¿Qué información necesita Superclim para valorar nuestra finca?',
        answer: 'La ubicación en Barberà, el número de entradas y plantas, los ascensores, las zonas comunes y la periodicidad deseada. También conviene indicar si hace falta una puesta a punto inicial.',
      },
    ],
    related: [
      { label: 'Sabadell', path: businessConfig.urls.services.communityCleaningSabadell },
    ],
  },
};
