import { businessConfig } from '@/config/business';
import type { SEOPageConfig } from '@/config/seo';

export type BusinessCityTier = 'A' | 'B' | 'C';

export interface BusinessCityPageConfig {
  slug: string;
  city: string;
  tier: BusinessCityTier;
  region: 'Barcelona y área metropolitana' | 'Vallès Occidental' | 'Vallès Oriental y alrededores';
  profile: string;
  priorities: [string, string, string];
  planning: string;
  recurring: string;
  nearby: string[];
  faq: [string, string][];
}

export const businessCityPages: BusinessCityPageConfig[] = [
  {
    slug: 'barcelona', city: 'Barcelona', tier: 'A', region: 'Barcelona y área metropolitana',
    profile: 'Barcelona reúne oficinas, comunidades, comercios, almacenes y centros de trabajo con ritmos muy distintos entre barrios y zonas de actividad. Superclim presta servicios profesionales de limpieza en la ciudad y estudia cada instalación según su uso, superficie, accesos y calendario, sin presuponer un plan uniforme.',
    priorities: ['Oficinas, despachos y sedes corporativas', 'Comunidades y espacios profesionales compartidos', 'Almacenes, naves y centros logísticos'],
    planning: 'En una ciudad con edificios de acceso controlado, actividad comercial y centros con turnos, la coordinación previa es esencial. Acordamos con la persona responsable qué zonas estarán disponibles, cómo se gestiona la entrada y qué franjas permiten trabajar sin interferir innecesariamente con la actividad.',
    recurring: 'Podemos plantear mantenimiento diario, varios días por semana o semanal. La propuesta separa las tareas habituales de actuaciones periódicas y concreta zonas, frecuencias, horarios y seguimiento para que compras, gerencia o facilities puedan revisar el servicio sobre un alcance definido.',
    nearby: ['hospitalet-de-llobregat', 'badalona', 'santa-coloma-de-gramenet', 'cornella-de-llobregat', 'el-prat-de-llobregat', 'esplugues-de-llobregat', 'sant-feliu-de-llobregat'],
    faq: [
      ['¿Qué servicios ofrece una empresa de limpieza en Barcelona?', 'Superclim prepara servicios para oficinas, comunidades, naves, almacenes, centros logísticos y otros espacios profesionales. El contenido concreto depende de las superficies, el uso y las tareas acordadas.'],
      ['¿Se puede organizar la limpieza fuera del horario de oficina?', 'Valoramos las franjas disponibles, las autorizaciones de acceso y la actividad del centro. El horario definitivo se incorpora a la propuesta.'],
      ['¿Cómo se prepara un presupuesto para varias zonas de una instalación?', 'Necesitamos conocer la distribución, la superficie aproximada, el uso de cada zona y la frecuencia deseada. Así diferenciamos tareas habituales y necesidades adicionales.'],
    ],
  },
  {
    slug: 'hospitalet-de-llobregat', city: "L’Hospitalet de Llobregat", tier: 'A', region: 'Barcelona y área metropolitana',
    profile: 'La continuidad urbana con Barcelona y la combinación de oficinas, comercios, comunidades y áreas de actividad hacen que cada centro de L’Hospitalet necesite una organización concreta. Valoramos la instalación y sus accesos antes de definir el mantenimiento.',
    priorities: ['Oficinas y locales de actividad profesional', 'Comunidades y zonas comunes', 'Almacenes y espacios de apoyo'],
    planning: 'Revisamos horarios de apertura, entradas compartidas, zonas de mayor paso y disponibilidad de ascensores o accesos de servicio. El plan diferencia áreas privativas y comunes para evitar duplicidades.',
    recurring: 'La recurrencia se adapta a la ocupación real: puede concentrarse en determinados días o distribuirse durante la semana según el uso de aseos, recepciones, puestos y zonas comunes.',
    nearby: ['barcelona', 'cornella-de-llobregat', 'el-prat-de-llobregat', 'esplugues-de-llobregat', 'sant-boi-de-llobregat'],
    faq: [['¿Atendéis empresas en L’Hospitalet de Llobregat?', 'Sí, valoramos servicios para instalaciones profesionales del municipio según ubicación, accesos, tareas y frecuencia.'], ['¿Se pueden separar zonas privadas y compartidas?', 'Sí. La propuesta identifica qué espacios forman parte del servicio y cuáles dependen de la gestión del edificio o de otra entidad.']],
  },
  {
    slug: 'badalona', city: 'Badalona', tier: 'A', region: 'Barcelona y área metropolitana',
    profile: 'En Badalona conviven oficinas, comunidades, comercio y espacios industriales. Organizamos la limpieza según el tipo de inmueble y la intensidad de uso, prestando atención a los recorridos, las entradas y las áreas compartidas.',
    priorities: ['Centros de trabajo y despachos', 'Comunidades, portales y escaleras', 'Naves, talleres y almacenes'],
    planning: 'La valoración distingue las zonas de atención al público, los espacios internos y las superficies de actividad. Acordamos accesos y secuencia de tareas con el responsable de la instalación.',
    recurring: 'Un calendario recurrente permite asignar frecuencias diferentes a recepción, aseos, puestos de trabajo, pasillos o espacios de apoyo, evitando aplicar el mismo ritmo a toda la instalación.',
    nearby: ['barcelona', 'santa-coloma-de-gramenet', 'montcada-i-reixac', 'mollet-del-valles'],
    faq: [['¿Qué instalaciones podéis limpiar en Badalona?', 'Valoramos oficinas, comunidades, naves, talleres, almacenes y otros espacios profesionales, siempre con un alcance previamente definido.'], ['¿Toda la instalación necesita la misma frecuencia?', 'No. El calendario puede diferenciar áreas por tránsito, disponibilidad y prioridad.']],
  },
  {
    slug: 'sabadell', city: 'Sabadell', tier: 'A', region: 'Vallès Occidental',
    profile: 'Desde nuestra base en Sabadell organizamos servicios para oficinas, comunidades, naves, talleres y almacenes del municipio. La cercanía facilita la valoración, pero el inicio, el horario y el alcance siempre se acuerdan para cada instalación.',
    priorities: ['Oficinas y despachos', 'Naves industriales y talleres', 'Comunidades y centros de trabajo'],
    planning: 'Analizamos la distribución, los accesos y los momentos en que las zonas quedan disponibles. En instalaciones con actividad productiva se delimitan recorridos y superficies accesibles; en oficinas se priorizan puestos, salas, recepción y aseos.',
    recurring: 'El contrato puede ser diario, de varios días por semana o semanal. Superclim organiza el equipo y el seguimiento de las tareas incluidas sin prometer disponibilidad inmediata ni incorporar trabajos no valorados.',
    nearby: ['terrassa', 'sant-cugat-del-valles', 'cerdanyola-del-valles', 'barbera-del-valles', 'sant-quirze-del-valles', 'castellar-del-valles', 'rubi'],
    faq: [['¿Tener la base en Sabadell permite empezar de inmediato?', 'No se presupone un inicio inmediato. Primero concretamos tareas, frecuencia, horarios, accesos y organización.'], ['¿Hay páginas específicas para oficinas y naves en Sabadell?', 'Sí. Desde esta página puedes acceder a las landings específicas de limpieza de oficinas y de naves industriales en Sabadell.']],
  },
  {
    slug: 'terrassa', city: 'Terrassa', tier: 'A', region: 'Vallès Occidental',
    profile: 'Terrassa combina actividad empresarial, polígonos, oficinas y comunidades con necesidades de mantenimiento diferentes. Preparamos servicios para superficies accesibles y zonas de uso profesional a partir de su actividad semanal.',
    priorities: ['Oficinas y espacios administrativos', 'Naves y áreas productivas accesibles', 'Comunidades y zonas de paso'],
    planning: 'Coordinamos la intervención con la ocupación de despachos o con la actividad de la nave. La propuesta identifica zonas, secuencia, restricciones de circulación y persona responsable.',
    recurring: 'Las áreas de mayor uso pueden tener una frecuencia distinta de salas ocasionales o espacios de apoyo. El seguimiento permite revisar incidencias sin ampliar automáticamente el alcance.',
    nearby: ['sabadell', 'rubi', 'sant-quirze-del-valles', 'castellar-del-valles', 'sant-cugat-del-valles', 'barbera-del-valles'],
    faq: [['¿Ofrecéis limpieza recurrente para empresas en Terrassa?', 'Sí, estudiamos planes diarios, semanales o de varios días según el uso y el alcance de la instalación.'], ['¿Podéis coordinar la limpieza con una nave en funcionamiento?', 'Valoramos zonas y franjas disponibles; no intervenimos en áreas ocupadas o no autorizadas.']],
  },
  {
    slug: 'sant-cugat-del-valles', city: 'Sant Cugat del Vallès', tier: 'A', region: 'Vallès Occidental',
    profile: 'Las oficinas, complejos empresariales, comunidades y espacios profesionales de Sant Cugat suelen requerir coordinación de accesos y frecuencias por zona. Organizamos el servicio con la persona responsable de cada instalación.',
    priorities: ['Oficinas y salas de reunión', 'Comunidades y espacios compartidos', 'Centros de trabajo con acceso coordinado'],
    planning: 'Antes de fijar turnos, revisamos autorizaciones, horarios de apertura, espacios privativos y áreas comunes. Si la ocupación cambia, las prioridades se revisan con el responsable.',
    recurring: 'Recepción, aseos y salas de uso intensivo pueden necesitar un ritmo distinto de los despachos menos ocupados. Esa diferencia queda recogida en el plan recurrente.',
    nearby: ['rubi', 'cerdanyola-del-valles', 'sabadell', 'terrassa', 'sant-quirze-del-valles', 'barcelona'],
    faq: [['¿Cómo se coordina el acceso a una oficina en Sant Cugat?', 'Se acuerdan autorizaciones, franjas, llaves o protocolos de entrada con la persona responsable antes del inicio.'], ['¿Puede contratarse solo una parte del edificio?', 'Sí, siempre que las zonas estén claramente delimitadas en la propuesta.']],
  },
  {
    slug: 'rubi', city: 'Rubí', tier: 'A', region: 'Vallès Occidental',
    profile: 'Rubí cuenta con oficinas, naves, talleres y espacios logísticos donde es importante diferenciar el mantenimiento habitual de una intervención técnica o extraordinaria. Valoramos superficies, circulación y prioridades antes de presupuestar.',
    priorities: ['Naves industriales y talleres', 'Oficinas vinculadas a la actividad', 'Almacenes y zonas de circulación'],
    planning: 'La propuesta delimita áreas productivas accesibles, pasillos y espacios de apoyo. No presupone manipular maquinaria, mercancías o residuos especiales ni liberar zonas ocupadas.',
    recurring: 'Definimos qué tareas se repiten en cada visita y cuáles se programan con otra periodicidad. Las necesidades adicionales se estudian separadamente.',
    nearby: ['sant-cugat-del-valles', 'terrassa', 'sant-quirze-del-valles', 'castellbisbal', 'cerdanyola-del-valles'],
    faq: [['¿La limpieza industrial incluye maquinaria en Rubí?', 'No se da por incluida la limpieza técnica de maquinaria. El alcance se limita a las superficies y tareas aceptadas.'], ['¿Cómo se diferencia el mantenimiento de una limpieza extraordinaria?', 'La valoración identifica el estado, los residuos, las superficies y el objetivo; cualquier necesidad adicional se presupuesta aparte.']],
  },
  {
    slug: 'cerdanyola-del-valles', city: 'Cerdanyola del Vallès', tier: 'B', region: 'Vallès Occidental',
    profile: 'Para oficinas, comunidades y centros de trabajo de Cerdanyola, organizamos el mantenimiento según la ocupación, las zonas compartidas y las condiciones de acceso de cada inmueble.',
    priorities: ['Oficinas y despachos', 'Comunidades y áreas comunes', 'Instalaciones profesionales y de apoyo'],
    planning: 'Separamos puestos, salas, recepción y aseos de otras zonas con menor uso, y confirmamos qué espacios compartidos están incluidos en el contrato.',
    recurring: 'La frecuencia se define por uso real y puede revisarse si cambian la ocupación o los horarios del centro.',
    nearby: ['sant-cugat-del-valles', 'ripollet', 'montcada-i-reixac', 'barbera-del-valles', 'sabadell'],
    faq: [['¿Prestáis servicio a empresas en Cerdanyola?', 'Sí, valoramos instalaciones del municipio según ubicación, alcance y calendario.'], ['¿Se incluyen zonas comunes del edificio?', 'Solo las identificadas expresamente y para las que existan acceso y autorización.']],
  },
  {
    slug: 'santa-coloma-de-gramenet', city: 'Santa Coloma de Gramenet', tier: 'B', region: 'Barcelona y área metropolitana',
    profile: 'En Santa Coloma atendemos solicitudes de oficinas, comunidades y espacios profesionales donde los accesos compartidos y las zonas de paso condicionan la organización del servicio.',
    priorities: ['Comunidades y portales', 'Oficinas y locales profesionales', 'Aseos y zonas de uso común'],
    planning: 'Acordamos horarios, puntos de entrada y prioridades para trabajar sobre espacios disponibles, especialmente cuando el inmueble comparte escaleras, ascensores o recepción.',
    recurring: 'El mantenimiento recurrente distribuye las tareas por zonas y evita dar por incluidas áreas que correspondan a otra gestión.',
    nearby: ['barcelona', 'badalona', 'montcada-i-reixac'],
    faq: [['¿Podéis limpiar oficinas y comunidades en Santa Coloma?', 'Sí, preparamos propuestas según el tipo de inmueble y las zonas contratadas.'], ['¿Cómo se tratan los accesos compartidos?', 'Se confirma con el responsable quién autoriza la entrada y qué espacios forman parte del servicio.']],
  },
  {
    slug: 'cornella-de-llobregat', city: 'Cornellà de Llobregat', tier: 'B', region: 'Barcelona y área metropolitana',
    profile: 'Cornellà reúne oficinas, actividad comercial, comunidades y áreas empresariales. El servicio se diseña según los recorridos, el tránsito y la disponibilidad de cada centro.',
    priorities: ['Oficinas y centros corporativos', 'Comunidades y zonas comunes', 'Almacenes y espacios profesionales'],
    planning: 'Identificamos zonas de atención, trabajo interno y apoyo para asignar tareas y horarios sin interferir con entradas, reuniones o movimientos habituales.',
    recurring: 'El calendario puede combinar intervenciones habituales con tareas periódicas claramente separadas en la propuesta.',
    nearby: ['hospitalet-de-llobregat', 'esplugues-de-llobregat', 'sant-boi-de-llobregat', 'el-prat-de-llobregat', 'sant-feliu-de-llobregat'],
    faq: [['¿Qué datos necesitáis para una empresa en Cornellà?', 'Ubicación, superficie aproximada, actividad, zonas, frecuencia y horarios disponibles.'], ['¿Se pueden programar tareas con frecuencias distintas?', 'Sí, según el uso y la prioridad de cada espacio.']],
  },
  {
    slug: 'sant-boi-de-llobregat', city: 'Sant Boi de Llobregat', tier: 'B', region: 'Barcelona y área metropolitana',
    profile: 'Organizamos servicios para oficinas, comunidades, almacenes y centros de trabajo de Sant Boi, atendiendo a la combinación de zonas administrativas, espacios de paso y áreas operativas.',
    priorities: ['Oficinas y dependencias administrativas', 'Almacenes y centros de trabajo', 'Comunidades y espacios compartidos'],
    planning: 'La circulación interior, los accesos y las franjas disponibles determinan la secuencia. Cada área se incorpora solo cuando está identificada y accesible.',
    recurring: 'La propuesta establece un ritmo sostenible de mantenimiento y un canal para comunicar incidencias o cambios de prioridad.',
    nearby: ['cornella-de-llobregat', 'el-prat-de-llobregat', 'viladecans', 'gava', 'hospitalet-de-llobregat'],
    faq: [['¿Atendéis almacenes y oficinas en Sant Boi?', 'Sí, siempre tras valorar las áreas y el tipo de tareas requeridas.'], ['¿El servicio puede adaptarse a turnos?', 'Se pueden valorar franjas compatibles con la actividad y los accesos del centro.']],
  },
  {
    slug: 'el-prat-de-llobregat', city: 'El Prat de Llobregat', tier: 'B', region: 'Barcelona y área metropolitana',
    profile: 'En El Prat, la presencia de oficinas, almacenes y actividad logística exige concretar recorridos, turnos y áreas disponibles. Superclim prepara propuestas sin asumir acceso a zonas restringidas.',
    priorities: ['Almacenes y centros logísticos', 'Oficinas internas y vestuarios', 'Pasillos y espacios de apoyo'],
    planning: 'Coordinamos ventanas de intervención con la circulación de personas y mercancías. Muelles, zonas técnicas o áreas restringidas solo se incluyen cuando se valoran y autorizan.',
    recurring: 'El mantenimiento habitual se separa de limpiezas extraordinarias y queda distribuido por frecuencia y sector.',
    nearby: ['hospitalet-de-llobregat', 'cornella-de-llobregat', 'sant-boi-de-llobregat', 'viladecans', 'gava'],
    faq: [['¿Trabajáis con centros logísticos en El Prat?', 'Valoramos almacenes y centros logísticos según sus zonas, accesos, turnos y necesidades.'], ['¿Movéis mercancías para poder limpiar?', 'No se presupone la manipulación o el traslado de mercancías; las zonas deben quedar disponibles según lo acordado.']],
  },
  {
    slug: 'castelldefels', city: 'Castelldefels', tier: 'B', region: 'Barcelona y área metropolitana',
    profile: 'Castelldefels combina oficinas, comunidades, comercios y espacios de servicios. Planteamos la limpieza según la estacionalidad de uso, los horarios y la distribución de cada inmueble.',
    priorities: ['Oficinas y locales profesionales', 'Comunidades y zonas compartidas', 'Centros de servicios y espacios de atención'],
    planning: 'Revisamos momentos de apertura, entradas y zonas de mayor tránsito para concentrar las tareas donde aportan continuidad sin interrumpir la actividad.',
    recurring: 'La frecuencia puede adaptarse a variaciones de ocupación, siempre mediante una revisión acordada del plan.',
    nearby: ['gava', 'viladecans', 'sant-boi-de-llobregat', 'el-prat-de-llobregat'],
    faq: [['¿Prestáis limpieza periódica en Castelldefels?', 'Sí, valoramos planes recurrentes para instalaciones profesionales y comunidades.'], ['¿Puede revisarse la frecuencia en épocas de más actividad?', 'Sí, cualquier ajuste se acuerda con el responsable y se refleja en el alcance.']],
  },
  {
    slug: 'gava', city: 'Gavà', tier: 'B', region: 'Barcelona y área metropolitana',
    profile: 'Para empresas y comunidades de Gavà, diferenciamos las necesidades de oficinas, áreas compartidas y espacios vinculados a actividad industrial o de almacenamiento.',
    priorities: ['Oficinas y despachos', 'Naves y almacenes', 'Comunidades y zonas de circulación'],
    planning: 'La valoración recoge distribución, superficies, restricciones de acceso y horarios. En espacios operativos, las zonas deben estar disponibles y autorizadas.',
    recurring: 'El plan asigna tareas habituales a cada visita y reserva otras actuaciones para la periodicidad acordada.',
    nearby: ['castelldefels', 'viladecans', 'sant-boi-de-llobregat', 'el-prat-de-llobregat'],
    faq: [['¿Preparáis propuestas para naves en Gavà?', 'Sí, si se pueden delimitar superficies, accesos y tareas compatibles con el servicio.'], ['¿Incluís trabajos técnicos industriales?', 'No se dan por incluidos; cualquier necesidad especializada requiere valoración expresa.']],
  },
  {
    slug: 'viladecans', city: 'Viladecans', tier: 'B', region: 'Barcelona y área metropolitana',
    profile: 'En Viladecans organizamos limpieza para oficinas, comunidades, naves y almacenes con atención a la circulación, los accesos y los distintos niveles de uso de cada zona.',
    priorities: ['Oficinas y salas de trabajo', 'Almacenes y espacios operativos', 'Comunidades y áreas comunes'],
    planning: 'Se acuerda una secuencia que distinga espacios administrativos, recorridos y áreas operativas, sin asumir que toda la superficie queda libre al mismo tiempo.',
    recurring: 'Las frecuencias se asignan por sector y quedan documentadas para facilitar el seguimiento.',
    nearby: ['gava', 'castelldefels', 'sant-boi-de-llobregat', 'el-prat-de-llobregat'],
    faq: [['¿Podéis combinar oficinas y almacén en un mismo servicio?', 'Sí, pero cada área tendrá tareas, condiciones y frecuencias propias.'], ['¿Cómo se controla lo incluido?', 'La propuesta delimita zonas, tareas, calendario y condiciones de acceso.']],
  },
  {
    slug: 'esplugues-de-llobregat', city: 'Esplugues de Llobregat', tier: 'C', region: 'Barcelona y área metropolitana',
    profile: 'Esplugues cuenta con oficinas, centros profesionales y comunidades próximas a Barcelona. Organizamos su mantenimiento distinguiendo espacios privados, recepción y zonas compartidas.',
    priorities: ['Oficinas y centros profesionales', 'Comunidades y recepciones', 'Aseos y zonas compartidas'],
    planning: 'Confirmamos accesos, gestión del edificio y disponibilidad de salas o puestos antes de distribuir tareas.',
    recurring: 'La recurrencia se ajusta al tránsito y a la ocupación, con tareas verificables por zona.',
    nearby: ['barcelona', 'hospitalet-de-llobregat', 'cornella-de-llobregat', 'sant-feliu-de-llobregat'],
    faq: [['¿Atendéis centros profesionales en Esplugues?', 'Sí, valoramos oficinas, comunidades y otros espacios de trabajo.'], ['¿Puede excluirse una zona del contrato?', 'Sí, el alcance debe indicar con claridad las áreas incluidas y excluidas.']],
  },
  {
    slug: 'sant-feliu-de-llobregat', city: 'Sant Feliu de Llobregat', tier: 'C', region: 'Barcelona y área metropolitana',
    profile: 'En Sant Feliu planteamos servicios para oficinas, comunidades y espacios profesionales según el tamaño del centro, sus accesos y el uso de las zonas comunes.',
    priorities: ['Oficinas y despachos', 'Comunidades y escaleras', 'Espacios de trabajo compartidos'],
    planning: 'La persona responsable identifica prioridades y franjas; a partir de ahí se distribuyen superficies y tareas.',
    recurring: 'El calendario recurrente puede combinar mantenimiento semanal y tareas con otra periodicidad.',
    nearby: ['esplugues-de-llobregat', 'cornella-de-llobregat', 'sant-boi-de-llobregat', 'hospitalet-de-llobregat'],
    faq: [['¿Qué frecuencia ofrecéis en Sant Feliu?', 'Se valora frecuencia diaria, de varios días o semanal según el uso.'], ['¿Hace falta una visita?', 'Solo cuando conocer la instalación sea necesario para concretar el alcance.']],
  },
  {
    slug: 'montcada-i-reixac', city: 'Montcada i Reixac', tier: 'C', region: 'Vallès Occidental',
    profile: 'Montcada i Reixac combina zonas residenciales, actividad empresarial y espacios industriales. Diferenciamos oficinas, áreas operativas y zonas de apoyo en cada propuesta.',
    priorities: ['Naves y talleres', 'Oficinas y vestuarios', 'Comunidades y zonas de paso'],
    planning: 'Se revisan circulación, superficies accesibles y horarios para no interferir con la actividad ni incluir trabajos técnicos por defecto.',
    recurring: 'El mantenimiento se organiza por sectores y frecuencia, con seguimiento de incidencias.',
    nearby: ['cerdanyola-del-valles', 'ripollet', 'santa-coloma-de-gramenet', 'badalona', 'barbera-del-valles'],
    faq: [['¿Atendéis naves en Montcada i Reixac?', 'Sí, previa valoración de superficies, accesos y naturaleza de las tareas.'], ['¿Se limpian zonas ocupadas?', 'Solo se interviene en zonas disponibles y autorizadas según el plan.']],
  },
  {
    slug: 'ripollet', city: 'Ripollet', tier: 'C', region: 'Vallès Occidental',
    profile: 'Para centros de trabajo, comunidades y pequeños espacios industriales de Ripollet, preparamos un alcance ajustado a la distribución y la actividad del inmueble.',
    priorities: ['Oficinas y locales profesionales', 'Comunidades y espacios comunes', 'Talleres y almacenes accesibles'],
    planning: 'Acordamos qué zonas estarán libres, la persona de contacto y las tareas prioritarias de cada intervención.',
    recurring: 'El plan evita sobredimensionar zonas de poco uso y concentra la frecuencia donde existe más tránsito.',
    nearby: ['cerdanyola-del-valles', 'montcada-i-reixac', 'barbera-del-valles', 'sabadell'],
    faq: [['¿Trabajáis con instalaciones pequeñas en Ripollet?', 'Sí, el presupuesto se adapta al alcance real, no a un tamaño estándar.'], ['¿Puede cambiarse el día de intervención?', 'Los cambios se coordinan según las condiciones y disponibilidad acordadas.']],
  },
  {
    slug: 'mollet-del-valles', city: 'Mollet del Vallès', tier: 'C', region: 'Vallès Oriental y alrededores',
    profile: 'En Mollet valoramos oficinas, comunidades, naves y almacenes con necesidades diferentes entre áreas administrativas y operativas.',
    priorities: ['Oficinas y recepciones', 'Naves, almacenes y pasillos', 'Comunidades y zonas comunes'],
    planning: 'La secuencia se coordina con entradas, turnos y disponibilidad de superficies, especialmente en centros con movimiento interno.',
    recurring: 'Cada sector recibe la frecuencia adecuada a su uso y queda identificado en la propuesta.',
    nearby: ['granollers', 'montcada-i-reixac', 'badalona', 'barbera-del-valles'],
    faq: [['¿Ofrecéis limpieza empresarial en Mollet?', 'Sí, estudiamos el servicio según ubicación, instalación y calendario.'], ['¿La propuesta puede incluir vestuarios?', 'Pueden incluirse cuando estén identificados y accesibles dentro del alcance.']],
  },
  {
    slug: 'granollers', city: 'Granollers', tier: 'C', region: 'Vallès Oriental y alrededores',
    profile: 'Granollers concentra oficinas, comercio, comunidades y actividad industrial. Organizamos planes que distinguen la imagen de las zonas de atención de las necesidades de áreas internas y operativas.',
    priorities: ['Oficinas y espacios de atención', 'Naves y almacenes', 'Comunidades y centros profesionales'],
    planning: 'Definimos prioridades, recorridos y franjas con el responsable, separando el mantenimiento de necesidades extraordinarias.',
    recurring: 'La limpieza periódica se reparte según tránsito y disponibilidad, con una referencia clara para el seguimiento.',
    nearby: ['mollet-del-valles', 'montcada-i-reixac', 'castellar-del-valles', 'sabadell'],
    faq: [['¿Valoráis naves y oficinas en Granollers?', 'Sí, cada tipo de espacio se estudia con tareas y condiciones propias.'], ['¿Cómo se solicitan tareas adicionales?', 'Se comunican al responsable del servicio y se valoran antes de incorporarlas.']],
  },
  {
    slug: 'barbera-del-valles', city: 'Barberà del Vallès', tier: 'C', region: 'Vallès Occidental',
    profile: 'La proximidad entre áreas empresariales, oficinas y comunidades de Barberà hace útil una planificación por tipo de espacio, no una lista genérica de tareas.',
    priorities: ['Naves y áreas empresariales', 'Oficinas y espacios de apoyo', 'Comunidades y zonas compartidas'],
    planning: 'Delimitamos áreas productivas accesibles, despachos, vestuarios y recorridos sin presuponer intervención sobre equipos o materiales.',
    recurring: 'El calendario diferencia mantenimiento frecuente y tareas periódicas para cada zona.',
    nearby: ['sabadell', 'cerdanyola-del-valles', 'ripollet', 'sant-quirze-del-valles', 'montcada-i-reixac'],
    faq: [['¿Atendéis polígonos de Barberà del Vallès?', 'Valoramos instalaciones del municipio según dirección, acceso y necesidades concretas.'], ['¿Incluís oficinas dentro de una nave?', 'Pueden incluirse con tareas y frecuencias diferenciadas.']],
  },
  {
    slug: 'sant-quirze-del-valles', city: 'Sant Quirze del Vallès', tier: 'C', region: 'Vallès Occidental',
    profile: 'Sant Quirze reúne oficinas, comunidades y actividad empresarial donde las zonas de acceso y apoyo requieren una frecuencia distinta de las áreas menos ocupadas.',
    priorities: ['Oficinas y despachos', 'Naves y espacios empresariales', 'Comunidades y zonas comunes'],
    planning: 'Acordamos entrada, disponibilidad y prioridades con la persona responsable, y distinguimos superficies administrativas y operativas.',
    recurring: 'El servicio recurrente se revisa sobre tareas y frecuencias concretas, sin sumar zonas de forma automática.',
    nearby: ['sabadell', 'terrassa', 'sant-cugat-del-valles', 'rubi', 'barbera-del-valles', 'castellar-del-valles'],
    faq: [['¿Prestáis servicio en Sant Quirze del Vallès?', 'Sí, estudiamos oficinas, comunidades y otras instalaciones profesionales.'], ['¿Se puede combinar limpieza semanal y periódica?', 'Sí, la propuesta puede asignar calendarios distintos a grupos de tareas.']],
  },
  {
    slug: 'castellar-del-valles', city: 'Castellar del Vallès', tier: 'C', region: 'Vallès Occidental',
    profile: 'En Castellar valoramos oficinas, comunidades, talleres y naves atendiendo a distancias internas, superficies y condiciones de acceso.',
    priorities: ['Talleres y naves accesibles', 'Oficinas y zonas de apoyo', 'Comunidades y espacios compartidos'],
    planning: 'El responsable identifica actividad, restricciones y zonas disponibles; con esa información se concreta la secuencia del servicio.',
    recurring: 'El plan recurrente mantiene separadas las tareas ordinarias y cualquier actuación puntual que requiera otra valoración.',
    nearby: ['sabadell', 'terrassa', 'sant-quirze-del-valles', 'barbera-del-valles', 'granollers'],
    faq: [['¿Llegáis a instalaciones de Castellar del Vallès?', 'Sí, valoramos la ubicación y las condiciones del centro dentro de la propuesta.'], ['¿Una limpieza puntual queda incluida en el contrato?', 'No necesariamente; las actuaciones extraordinarias se identifican y valoran aparte.']],
  },
];

export const businessCityPageBySlug = Object.fromEntries(businessCityPages.map(page => [page.slug, page])) as Record<string, BusinessCityPageConfig>;

export function businessCityPath(page: BusinessCityPageConfig) {
  return `${businessConfig.urls.services.businessCleaning}/${page.slug}`;
}

export function businessCitySEO(page: BusinessCityPageConfig): SEOPageConfig {
  const title = `Empresa de Limpieza en ${page.city} | Servicios para Empresas | Superclim`;
  const description = `Servicios de limpieza para empresas en ${page.city}: oficinas, comunidades, naves, almacenes y espacios profesionales. Plan recurrente y presupuesto personalizado.`;
  return {
    title,
    description,
    h1: `Empresa de limpieza en ${page.city}`,
    canonical: `${businessConfig.urls.base}${businessCityPath(page)}`,
    ogTitle: title,
    ogDescription: description,
    ogImage: `${businessConfig.urls.base}/images/logo-superclim.png`,
  };
}

export const businessCityGroups = (['Barcelona y área metropolitana', 'Vallès Occidental', 'Vallès Oriental y alrededores'] as const).map(region => ({
  region,
  pages: businessCityPages.filter(page => page.region === region),
}));
