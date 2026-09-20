import { businessConfig } from '@/config/business';
import { businessRegionalNavigation } from '@/config/regionalNavigation';
import type { BusinessRegionalService, RegionalCity } from '@/config/regionalNavigation';
import type { SEOPageConfig } from '@/config/seo';

export interface BusinessRegionalConfig {
  service: BusinessRegionalService;
  city: RegionalCity;
  cityName: string;
  h1: string;
  description: string;
  intro: string;
  scopeTitle: string;
  scope: string;
  areas: string[];
  planningTitle: string;
  planning: string;
  coverageTitle: string;
  coverage: string;
  process: string;
  faq: [string, string][];
}

export const businessRegionalPages: BusinessRegionalConfig[] = [
  {
    "service": "oficinas",
    "city": "sabadell",
    "cityName": "Sabadell",
    "h1": "Limpieza de oficinas en Sabadell",
    "description": "Limpieza recurrente de oficinas y despachos en Sabadell. Define tareas, frecuencia y horarios con Superclim y solicita una propuesta para tu instalación.",
    "intro": "Desde nuestra base en Sabadell, organizamos la limpieza recurrente de oficinas y despachos con un alcance definido para cada empresa. Revisamos los puestos de trabajo, la recepción y las zonas compartidas para acordar qué se limpia, con qué frecuencia y en qué horario, sin interferir innecesariamente con la jornada.",
    "scopeTitle": "Un contrato centrado en los espacios de trabajo",
    "scope": "Una recepción utilizada por visitas requiere una revisión distinta de un despacho de uso ocasional. En la propuesta separamos los puestos de trabajo, las salas de reunión, los aseos y las zonas comunes para que cada tarea tenga una frecuencia concreta. Las superficies de las mesas deben quedar accesibles; no se manipulan documentos ni equipos informáticos.",
    "areas": [
      "Puestos de trabajo y mobiliario accesible",
      "Recepción y salas de reunión",
      "Aseos y zonas comunes contratadas"
    ],
    "planningTitle": "Frecuencia y horarios desde el inicio",
    "planning": "Para tu oficina en Sabadell, indica los días de apertura, cuándo se utiliza cada espacio y qué zonas deben estar listas al comenzar la jornada. Con esa información valoramos un plan diario, de varios días por semana o semanal. El horario de entrada, las llaves o autorizaciones y la persona de contacto quedan acordados antes del inicio.",
    "coverageTitle": "Oficinas y despachos dentro de Sabadell",
    "coverage": "La base de Superclim está en Sabadell. Para valorar el servicio necesitamos la dirección de la oficina, las condiciones de acceso y las superficies aproximadas. La cercanía no implica disponibilidad inmediata: el inicio se concreta después de acordar el alcance y la organización.",
    "process": "Indica los despachos, puestos y zonas comunes que quieres incluir; revisamos el calendario de apertura y preparamos una propuesta recurrente por espacios.",
    "faq": [
      [
        "¿El contrato puede cubrir solo algunos despachos?",
        "Sí, la propuesta puede delimitar los despachos y las zonas compartidas contratadas. Los espacios que queden fuera no se incorporan automáticamente al mantenimiento."
      ],
      [
        "¿Cómo se acuerda la limpieza de mesas ocupadas?",
        "Definimos qué superficies deben quedar libres y cuándo estarán disponibles. No movemos documentación ni manipulamos equipos para acceder a zonas no preparadas."
      ],
      [
        "¿Tener la base en Sabadell permite comenzar de inmediato?",
        "La fecha de inicio depende del alcance, los horarios y la organización acordados. Se confirma en la propuesta, sin prometer disponibilidad inmediata."
      ]
    ]
  },
  {
    "service": "oficinas",
    "city": "sant-cugat",
    "cityName": "Sant Cugat",
    "h1": "Limpieza de oficinas en Sant Cugat",
    "description": "Limpieza de oficinas en Sant Cugat con frecuencias por zona, accesos acordados y coordinación con el responsable. Solicita un plan recurrente para tu oficina.",
    "intro": "En las oficinas y despachos de Sant Cugat, la ocupación puede variar entre salas de reunión, puestos y áreas comunes. Preparamos un servicio recurrente que distingue esas necesidades: acordamos prioridades con la persona responsable y organizamos la ejecución en los horarios en que cada zona esté disponible.",
    "scopeTitle": "Prioridades distintas para cada zona",
    "scope": "Una sala utilizada varias veces durante el día no necesita el mismo calendario que un despacho con poca ocupación. Revisamos aseos, salas de reunión y áreas comunes con la persona responsable para definir qué tareas se repiten en cada intervención y cuáles se programan con otra frecuencia. Solo se incluyen las áreas comunes que formen parte del contrato.",
    "areas": [
      "Salas de reunión según su ocupación",
      "Aseos y puntos de contacto de uso habitual",
      "Despachos y áreas comunes incluidas en la propuesta"
    ],
    "planningTitle": "Accesos y ocupación como punto de partida",
    "planning": "Antes de fijar los turnos, necesitamos conocer las autorizaciones de entrada, el horario de apertura y los momentos en que las salas quedan libres. Si cambia la utilización de la oficina, se revisan las prioridades con el responsable; un cambio de frecuencia o alcance se acuerda, no se presupone.",
    "coverageTitle": "Valorar la instalación en Sant Cugat",
    "coverage": "Indícanos la dirección de tu oficina en Sant Cugat y si comparte entradas o zonas comunes con otros ocupantes. Esta información permite distinguir las áreas privativas de los espacios cuya limpieza depende de otra entidad. No presupone un servicio para todo el edificio.",
    "process": "Comparte la ocupación prevista y quién autoriza los accesos; delimitamos las zonas privativas y comunes contratadas y distribuimos las tareas por frecuencia.",
    "faq": [
      [
        "¿Todas las zonas deben limpiarse con la misma frecuencia?",
        "No. Se pueden acordar frecuencias distintas para salas, aseos y áreas comunes según su ocupación y las prioridades del contrato."
      ],
      [
        "¿Cómo se coordina el acceso a una oficina compartida?",
        "Con la persona responsable se concretan autorizaciones, horarios y zonas disponibles. La propuesta identifica qué espacios forman parte del servicio de Superclim."
      ],
      [
        "¿Qué ocurre si cambia la ocupación de las salas?",
        "Revisamos el calendario y las prioridades con el responsable. Las modificaciones de tareas, frecuencia u horario se acuerdan dentro del seguimiento del servicio."
      ]
    ]
  },
  {
    "service": "oficinas",
    "city": "terrassa",
    "cityName": "Terrassa",
    "h1": "Limpieza de oficinas en Terrassa",
    "description": "Mantenimiento de limpieza para oficinas en Terrassa: puestos, recepción, espacios compartidos y aseos. Planifica frecuencia y horarios con Superclim.",
    "intro": "El mantenimiento de una oficina en Terrassa empieza por entender cómo se utiliza durante la semana. Organizamos la limpieza recurrente de puestos, recepción, espacios compartidos y aseos con un calendario que refleje esa actividad y con tareas verificables dentro del alcance acordado.",
    "scopeTitle": "Del uso semanal al plan de mantenimiento",
    "scope": "Diferenciamos los espacios de atención y paso de los puestos de trabajo y las salas compartidas. Así se pueden priorizar la recepción y los aseos en las intervenciones habituales y reservar otras tareas para momentos con menor ocupación. El plan identifica tanto lo que debe hacerse en cada visita como las actuaciones periódicas acordadas.",
    "areas": [
      "Recepción y espacios de paso de la oficina",
      "Puestos de trabajo con superficies disponibles",
      "Salas compartidas y aseos de uso del personal"
    ],
    "planningTitle": "Un calendario revisable según la utilización",
    "planning": "Para planificar una oficina en Terrassa, revisamos los días de mayor actividad, el cierre y las franjas disponibles. Si determinados espacios no quedan libres al mismo tiempo, ordenamos las tareas por zonas. El responsable puede comunicar incidencias para revisar la ejecución sin convertir cada petición en una ampliación automática del contrato.",
    "coverageTitle": "Información necesaria sobre tu oficina en Terrassa",
    "coverage": "Valoramos oficinas y despachos del municipio a partir de su dirección y distribución. Indica si la recepción o los aseos son compartidos y quién es responsable de esas áreas. Esto ayuda a evitar duplicidades con otros servicios del edificio y a concretar el mantenimiento de tu empresa.",
    "process": "Describe una semana habitual de uso y las zonas compartidas; acordamos prioridades, franjas de intervención y cómo se comunicarán las incidencias.",
    "faq": [
      [
        "¿Se puede organizar el mantenimiento por días de uso?",
        "Sí, el calendario se prepara según los días de actividad y las necesidades de cada zona. La frecuencia definitiva queda indicada en la propuesta."
      ],
      [
        "¿Se incluyen los espacios compartidos con otras empresas?",
        "Solo cuando estén identificados en el alcance y existan las autorizaciones necesarias. Conviene aclarar qué zonas gestiona el edificio y cuáles contrata tu empresa."
      ],
      [
        "¿Cómo se revisan tareas que no se han podido realizar?",
        "El responsable comunica la incidencia y se revisan el acceso y la disponibilidad de la zona. El seguimiento permite acordar cómo atender la tarea dentro de las condiciones del servicio."
      ]
    ]
  },
  {
    "service": "naves",
    "city": "sabadell",
    "cityName": "Sabadell",
    "h1": "Limpieza de naves industriales en Sabadell",
    "description": "Limpieza recurrente de naves industriales en Sabadell. Delimita superficies, accesos y horarios para mantener áreas accesibles, pasillos y espacios de apoyo.",
    "intro": "Desde Sabadell preparamos servicios recurrentes de limpieza para naves del municipio, delimitando las áreas productivas accesibles, los pasillos y los espacios de apoyo. El contrato se organiza a partir de las superficies que pueden mantenerse y de su disponibilidad durante la actividad de la instalación.",
    "scopeTitle": "Delimitar las superficies antes de programar",
    "scope": "Revisamos qué pavimentos y superficies accesibles forman parte del mantenimiento, dónde se concentra el paso y qué espacios sirven de apoyo a la actividad. La limpieza del entorno de trabajo no implica intervenir sobre la maquinaria ni desplazar materiales para dejar libre una zona. La instalación debe confirmar qué áreas estarán preparadas.",
    "areas": [
      "Áreas productivas accesibles y disponibles",
      "Pasillos y accesos interiores autorizados",
      "Aseos, vestuarios o espacios de apoyo incluidos"
    ],
    "planningTitle": "Frecuencia y horario compatibles con la nave",
    "planning": "En Sabadell, concretamos con el responsable qué zonas requieren mantenimiento habitual y en qué momentos se puede intervenir. La propuesta relaciona tareas y frecuencias con las superficies acordadas, los accesos y la actividad. Superclim organiza el equipo y la supervisión del servicio contratado.",
    "coverageTitle": "Una propuesta para la nave de Sabadell",
    "coverage": "Facilita la dirección, el uso de la nave y una aproximación de las superficies. Aunque nuestra base esté en Sabadell, necesitamos valorar las condiciones de acceso y circulación de cada instalación antes de confirmar la organización y el inicio.",
    "process": "Identifica superficies y espacios de apoyo; revisamos accesos, actividad y zonas disponibles para preparar el mantenimiento recurrente.",
    "faq": [
      [
        "¿El mantenimiento incluye la maquinaria de la nave?",
        "No incluye limpieza de maquinaria especializada fuera del alcance acordado. La propuesta diferencia las superficies accesibles del trabajo técnico sobre equipos."
      ],
      [
        "¿Hay que dejar libres las zonas que se van a limpiar?",
        "Se acuerda qué zonas deben estar disponibles y en qué horario. El servicio no presupone mover mercancías o materiales para liberar el espacio."
      ],
      [
        "¿Cómo se decide la frecuencia de los pasillos?",
        "Se valora su uso y circulación junto con las condiciones de acceso. El calendario y las tareas se concretan en la propuesta de mantenimiento."
      ]
    ]
  },
  {
    "service": "naves",
    "city": "terrassa",
    "cityName": "Terrassa",
    "h1": "Limpieza de naves industriales en Terrassa",
    "description": "Plan de limpieza de naves industriales en Terrassa, coordinado con la actividad y disponibilidad de las áreas. Solicita mantenimiento recurrente con alcance definido.",
    "intro": "En una nave de Terrassa, no todas las áreas están disponibles al mismo tiempo. Planificamos el mantenimiento recurrente por zonas para coordinar la limpieza de áreas productivas accesibles, pasillos y espacios de apoyo con la actividad de la instalación, sin dar por supuesto el acceso a toda la superficie.",
    "scopeTitle": "Organizar el mantenimiento por disponibilidad",
    "scope": "La planificación distingue las zonas que pueden mantenerse durante la actividad de aquellas que deben esperar a una franja acordada. Antes de intervenir se confirma la disponibilidad de los espacios: una zona ocupada o sin autorización no se considera accesible solo por figurar en el plano de la nave.",
    "areas": [
      "Pasillos cuyo acceso se haya coordinado",
      "Áreas productivas accesibles en la franja acordada",
      "Espacios de apoyo disponibles para mantenimiento"
    ],
    "planningTitle": "Frecuencias según uso, no un calendario uniforme",
    "planning": "Para la instalación de Terrassa se relacionan el uso de cada zona y su disponibilidad con las tareas previstas. Las áreas de mayor circulación pueden necesitar una frecuencia diferente de los espacios de apoyo. Si cambia la actividad, revisamos con el responsable la secuencia y los horarios antes de modificar el plan.",
    "coverageTitle": "Coordinar la nave de Terrassa con su responsable",
    "coverage": "Indica la dirección y cómo se distribuyen las áreas de la nave. Nos interesa conocer qué espacios se pueden liberar, quién autoriza la entrada y qué restricciones deben respetarse. No se presupone cobertura de una instalación o recinto concreto sin valorar esas condiciones.",
    "process": "Comparte la distribución y las franjas disponibles; acordamos una secuencia de trabajo por zonas y un calendario compatible con la actividad.",
    "faq": [
      [
        "¿Puede organizarse la limpieza por zonas y franjas distintas?",
        "Sí, siempre que los accesos y horarios se acuerden. La propuesta identifica las zonas disponibles para cada intervención y las tareas previstas."
      ],
      [
        "¿Qué sucede cuando una zona sigue ocupada?",
        "Se comunica la incidencia al responsable para revisar la disponibilidad. No se interviene en una zona no autorizada ni se promete completar tareas incompatibles con la actividad."
      ],
      [
        "¿Una nave necesita la misma frecuencia en toda su superficie?",
        "No necesariamente. Se diferencia el mantenimiento de pasillos, áreas accesibles y espacios de apoyo según su uso y las condiciones acordadas."
      ]
    ]
  },
  {
    "service": "naves",
    "city": "rubi",
    "cityName": "Rubí",
    "h1": "Limpieza de naves industriales en Rubí",
    "description": "Limpieza de naves industriales en Rubí con valoración del uso, superficies, accesos y prioridades. Diferenciamos mantenimiento habitual y necesidades adicionales.",
    "intro": "Para preparar la limpieza de una nave en Rubí, primero necesitamos conocer su uso, las superficies y la circulación interior. Esa valoración permite distinguir un mantenimiento recurrente viable de necesidades adicionales que deben estudiarse por separado, antes de fijar tareas, horarios y condiciones.",
    "scopeTitle": "Calificar la necesidad antes de cerrar el alcance",
    "scope": "Una petición de limpieza industrial puede incluir necesidades muy distintas. Revisamos el estado y el tipo de superficies, los accesos y las prioridades del responsable para concretar qué corresponde a la limpieza habitual. Una acumulación puntual o una intervención técnica no se incorpora automáticamente al contrato recurrente.",
    "areas": [
      "Superficies accesibles identificadas en la valoración",
      "Accesos y pasillos con circulación coordinada",
      "Espacios de apoyo incluidos expresamente en el plan"
    ],
    "planningTitle": "Separar mantenimiento y necesidades adicionales",
    "planning": "En la propuesta para la nave de Rubí indicamos las tareas habituales y su frecuencia. Las necesidades adicionales se identifican por separado para valorar si encajan en el servicio y bajo qué condiciones. Si hace falta conocer la instalación, acordamos una visita de valoración; no se promete una fecha inmediata.",
    "coverageTitle": "Datos para valorar tu nave en Rubí",
    "coverage": "Facilita la ubicación, el uso actual, las superficies aproximadas y las restricciones de circulación. Explica qué zonas tienen prioridad y si existen necesidades distintas del mantenimiento ordinario. La información inicial ayuda a determinar qué se puede presupuestar y qué requiere una valoración adicional.",
    "process": "Explica el uso y el estado de la nave; diferenciamos tareas habituales y necesidades adicionales y, si hace falta conocer la instalación, acordamos una visita de valoración.",
    "faq": [
      [
        "¿Qué información permite preparar una primera propuesta?",
        "La ubicación en Rubí, el uso de la nave, los tipos de superficies, los accesos, la circulación y las prioridades. También conviene identificar necesidades que no sean de mantenimiento habitual."
      ],
      [
        "¿Una limpieza puntual intensiva forma parte del contrato recurrente?",
        "No se da por incluida. Se revisa por separado para determinar el alcance y si la necesidad puede atenderse con el servicio propuesto."
      ],
      [
        "¿Es obligatoria una visita previa?",
        "No en todos los casos. Si hace falta conocer la instalación para valorar el alcance, acordamos una visita de valoración con el responsable."
      ]
    ]
  }
];

export function businessRegionalPath(page: BusinessRegionalConfig) {
  const path = businessRegionalNavigation[page.service].localUrls[page.city];
  if (!path) throw new Error(`Missing published business destination: ${page.service}/${page.city}`);
  return path;
}

export function businessRegionalSEO(page: BusinessRegionalConfig): SEOPageConfig {
  return { title: `${page.h1} | Superclim Servicios`, description: page.description, h1: page.h1,
    canonical: `${businessConfig.urls.base}${businessRegionalPath(page)}`,
    ogImage: `${businessConfig.urls.base}/images/logo-superclim.png` };
}
