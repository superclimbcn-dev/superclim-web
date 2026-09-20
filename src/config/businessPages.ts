import { businessConfig } from '@/config/business';

export type BusinessPageKey = 'businessCleaning' | 'officeCleaning' | 'industrialCleaning' | 'logisticsCleaning';
export const businessPages = {
  businessCleaning: {
    label: 'Servicios de limpieza para empresas', facility: '', eyebrow: 'Limpieza empresarial · Sabadell y Barcelona',
    intro: 'Superclim presta servicios de limpieza para empresas en Sabadell, el Vallès Occidental y Barcelona. Definimos un plan de mantenimiento recurrente según las instalaciones, las tareas y los horarios acordados. Tu empresa contrata el servicio; Superclim organiza el equipo, los turnos y la supervisión de su ejecución.',
    heading: 'Un plan para cada centro de trabajo',
    sections: [
      ['Oficinas y despachos', 'Cuidamos los espacios de trabajo, las salas de reunión, los aseos y las zonas compartidas con una frecuencia adaptada a su uso.'],
      ['Naves industriales y talleres', 'Definimos las superficies y los recorridos que necesitan mantenimiento, coordinando la limpieza con la actividad de la instalación.'],
      ['Almacenes y centros logísticos', 'Organizamos las tareas por zonas y franjas horarias para atender los espacios de almacenamiento y las áreas de uso común.'],
      ['Contratos recurrentes desde nuestra base en Sabadell', 'Desde nuestra base en Sabadell, valoramos la ubicación de tu instalación, los accesos y la frecuencia y los horarios más adecuados para el servicio. Según se trate de oficinas, naves o centros logísticos, concretamos las tareas y las condiciones del contrato recurrente. Tu empresa contrata el servicio; Superclim organiza la ejecución y su supervisión conforme al alcance acordado. Consulta la especialidad correspondiente para conocer qué podemos incluir en la propuesta.'],
    ],
    tasks: ['Suelos y pasillos', 'Aseos y vestuarios', 'Zonas comunes y de descanso', 'Oficinas y salas de reunión', 'Papeleras y superficies de uso cotidiano', 'Cristales interiores cuando proceda'],
    planningTitle: 'Contratos de limpieza con un alcance definido',
    planning: 'La propuesta concreta qué zonas se limpian, qué tareas se realizan y con qué frecuencia. También recoge los horarios, las condiciones de acceso y los materiales previstos en la propuesta. Podemos plantear limpieza diaria, varias veces por semana o semanal, según las necesidades del centro. Las necesidades adicionales se revisan para acordar su alcance antes de incorporarlas al servicio.',
    faq: [
      ['¿Ofrecéis limpieza diaria para empresas?', 'Sí, podemos plantear un servicio diario, semanal o varias veces por semana según el uso del centro y el alcance acordado.'],
      ['¿Podéis trabajar varias horas al día?', 'El plan puede incluir varias horas al día o varios días por semana. Valoramos las instalaciones y las tareas antes de concretar la dedicación y el horario.'],
      ['¿Trabajáis fuera del horario de oficina?', 'Podemos valorar horarios antes o después de la jornada, según las necesidades de acceso y la disponibilidad acordada para el servicio.'],
      ['¿La empresa tiene que contratar al personal de limpieza?', 'La empresa contrata un servicio profesional de limpieza. Superclim organiza su propio equipo, planifica las tareas y realiza el seguimiento.'],
      ['¿Qué ocurre si un profesional no puede asistir?', 'Superclim gestiona la incidencia y organiza las sustituciones cuando corresponda, de acuerdo con las condiciones del servicio.'],
      ['¿Trabajáis con oficinas y naves industriales?', 'Sí. Preparamos propuestas para oficinas, naves industriales, almacenes y centros logísticos, con tareas específicas para cada instalación.'],
      ['¿En qué zonas prestáis el servicio?', 'Trabajamos desde Sabadell en el Vallès Occidental y Barcelona. Indícanos el municipio y la ubicación de las instalaciones para concretar la propuesta.'],
      ['¿Cómo se calcula el presupuesto?', 'El presupuesto es personalizado según instalaciones, frecuencia, horario y necesidades del servicio. No aplicamos una tarifa fija sin valorar el alcance.'],
    ],
  },
  officeCleaning: {
    label: 'Limpieza de oficinas', facility: 'Oficina', eyebrow: 'Oficinas · Despachos · Espacios de trabajo',
    intro: 'Organizamos la limpieza recurrente de oficinas y despachos en Sabadell y Barcelona para gerencia, responsables de oficina y facilities managers. Definimos las tareas de puestos de trabajo, salas de reunión, aseos y espacios compartidos, con una frecuencia y unos horarios acordados según el uso de cada zona.',
    heading: 'De la recepción al último puesto de trabajo',
    sections: [
      ['Puestos de trabajo y reuniones', 'Limpieza de escritorios y superficies accesibles, salas de reunión y despachos. Acordamos cómo intervenir sin desplazar documentación ni manipular equipos o efectos personales.'],
      ['Recepción y espacios compartidos', 'Atendemos recepción, zonas comunes, papeleras y suelos según el tránsito. Los cristales interiores pueden incluirse cuando proceda y se hayan definido en el alcance.'],
      ['Office, cocina y aseos', 'Estas áreas requieren una planificación acorde al uso diario. Concretamos las superficies, los puntos de atención y la frecuencia para mantener los espacios compartidos.'],
      ['Servicio recurrente de oficinas en Sant Cugat', 'Atendemos oficinas y despachos en Sant Cugat con un servicio de limpieza recurrente adaptado a cada instalación. Revisamos con la persona responsable los accesos, la ocupación y las prioridades: salas de reunión, aseos y áreas comunes pueden necesitar frecuencias distintas. Acordamos los horarios y el alcance del contrato; Superclim organiza el equipo, los turnos y la supervisión. Si hace falta conocer la instalación, acordamos una visita de valoración.'],
      ['Limpieza periódica y mantenimiento', 'Organizamos tareas recurrentes según la frecuencia acordada para mantener las zonas de trabajo, las superficies accesibles y los espacios comunes en buenas condiciones durante la semana.'],
      ['Horarios y acceso a la oficina', 'Planificamos la intervención según los horarios disponibles, el acceso al centro y la actividad de la oficina, procurando trabajar sin interferir con el funcionamiento habitual de la instalación.'],
    ],
    tasks: ['Escritorios y superficies accesibles', 'Salas de reunión y despachos', 'Recepción y zonas comunes', 'Office y cocina compartida', 'Aseos y papeleras', 'Suelos y cristales interiores acordados'],
    planningTitle: 'Un servicio recurrente adaptado a la jornada',
    planning: 'La frecuencia puede ser diaria, varias veces por semana o semanal, según la ocupación y el uso de los espacios. Para las oficinas en Barcelona, concretamos con la persona responsable de la instalación qué áreas privativas y qué zonas comunes forman parte del servicio contratado. Acordamos los accesos, el cierre y los horarios de intervención según la disponibilidad de cada zona. El plan distingue las tareas habituales de otras actuaciones periódicas y permite revisar las prioridades con esa persona responsable.',
    faq: [
      ['¿Se puede limpiar con la oficina en funcionamiento?', 'Valoramos las zonas ocupadas y los momentos de menor actividad. Si conviene, planteamos el servicio antes o después de la jornada, con acceso previamente acordado.'],
      ['¿Qué ocurre con los documentos de los escritorios?', 'Acordamos limpiar las superficies accesibles sin manipular documentación. Conviene dejar despejadas las mesas que deban incluirse en cada visita.'],
      ['¿Qué frecuencia necesita mi oficina?', 'Depende del número de espacios, su uso y el tránsito. Podemos organizar limpieza diaria, semanal o varias veces por semana y revisar las prioridades del plan.'],
      ['¿Cómo solicito una propuesta para mi despacho?', 'Indica el municipio, la superficie aproximada, las zonas que necesitas limpiar y el horario preferido. Superclim define las tareas y organiza su equipo para el servicio acordado.'],
    ],
  },
  industrialCleaning: {
    label: 'Limpieza de naves industriales', facility: 'Nave industrial', eyebrow: 'Naves industriales · Talleres · Instalaciones productivas',
    intro: 'Planificamos la limpieza industrial de pavimentos, pasillos y zonas comunes en naves y talleres de Sabadell y Barcelona. Para el mantenimiento recurrente de grandes superficies, valoramos los sectores de trabajo, los accesos y la actividad del centro antes de definir tareas, frecuencias y horarios.',
    heading: 'Mantenimiento según el uso de la nave',
    sections: [
      ['Pavimentos, pasillos y polvo', 'Valoramos el estado de los pavimentos y la acumulación de polvo industrial para definir el mantenimiento de suelos y pasillos. Es necesario identificar la naturaleza de los residuos antes de acordar su tratamiento.'],
      ['Zonas productivas y talleres', 'La intervención se coordina con los responsables del centro para delimitar áreas disponibles, circulación y horarios. El alcance se refiere a las superficies acordadas, sin presuponer limpieza de maquinaria o procesos técnicos.'],
      ['Espacios de apoyo a la actividad', 'Oficinas interiores, vestuarios, aseos y zonas comunes tienen necesidades diferentes a las áreas productivas. Las zonas de carga pueden incluirse cuando proceda, previa valoración del acceso y del uso.'],
      ['Planificación del servicio en Terrassa y Rubí', 'Para el mantenimiento recurrente de naves en Terrassa, definimos frecuencias según el uso de las áreas productivas accesibles, pasillos y espacios de apoyo, coordinando las intervenciones con la actividad de la instalación.\n\nEn Rubí, valoramos el uso de la nave, los tipos de superficies, los accesos, la circulación y las prioridades para diferenciar las tareas habituales de las necesidades adicionales.\n\nEn ambos municipios, la propuesta concreta las zonas disponibles, los horarios y el alcance del servicio. Si hace falta conocer la instalación, acordamos una visita de valoración.\n\nNo incluye limpieza de maquinaria especializada, retirada de residuos peligrosos, trabajos en altura ni limpieza técnica fuera del alcance acordado.'],
    ],
    tasks: ['Pavimentos y suelos industriales', 'Pasillos y recorridos accesibles', 'Zonas productivas acordadas', 'Oficinas interiores', 'Vestuarios, aseos y zonas comunes', 'Zonas de carga cuando proceda'],
    planningTitle: 'Mantenimiento por sectores y frecuencias',
    planning: 'En una nave, no todas las superficies requieren la misma frecuencia. La propuesta diferencia pavimentos y recorridos, áreas productivas accesibles y espacios de apoyo, como oficinas, aseos y vestuarios. Acordamos con el responsable del centro qué zonas estarán disponibles durante cada intervención. Los trabajos peligrosos, en altura o de limpieza técnica especializada no forman parte de esta oferta.',
    faq: [
      ['¿Limpiáis naves con actividad productiva?', 'Valoramos las áreas disponibles y coordinamos las tareas con el responsable de la instalación. El plan debe delimitar las zonas y los horarios de intervención.'],
      ['¿Incluye limpieza de maquinaria industrial?', 'No se presupone ese servicio. Esta propuesta se centra en pavimentos, espacios accesibles y áreas comunes; cualquier necesidad técnica requiere una valoración independiente de su viabilidad.'],
      ['¿Cómo se trata el polvo industrial?', 'Primero necesitamos conocer su naturaleza y dónde se acumula. No asumimos la retirada de residuos peligrosos ni tratamientos especializados dentro del mantenimiento ordinario.'],
      ['¿Se pueden incluir vestuarios y oficinas de la nave?', 'Sí, pueden formar parte del alcance junto con aseos y zonas comunes, con frecuencias diferenciadas según el uso de cada área.'],
    ],
  },
  logisticsCleaning: {
    label: 'Limpieza de almacenes y centros logísticos', facility: 'Almacén / centro logístico', eyebrow: 'Almacenes · Distribución · Plataformas logísticas',
    intro: 'Organizamos la limpieza recurrente de almacenes y centros logísticos en Barcelona y el Vallès Occidental. El plan diferencia zonas de picking, pasillos, muelles acordados y oficinas internas, con horarios coordinados con la circulación de mercancías y los turnos del centro.',
    heading: 'Cada zona tiene su momento de limpieza',
    sections: [
      ['Almacenamiento, picking y pasillos', 'Acordamos la limpieza de superficies accesibles en almacenes y zonas de picking, respetando los recorridos de circulación. La planificación identifica los espacios disponibles sin manipular mercancía.'],
      ['Muelles y zonas de carga', 'Cuando corresponda, incluimos estas áreas en franjas acordadas con el responsable del centro. Es necesario coordinar los accesos y evitar interferencias con las operaciones de carga y descarga.'],
      ['Oficinas y espacios del equipo', 'Las oficinas, los aseos, los vestuarios y las zonas de descanso se organizan con frecuencias propias. Así se atiende tanto la actividad logística como el uso diario de las áreas comunes.'],
    ],
    tasks: ['Superficies accesibles del almacén', 'Zonas de picking', 'Pasillos y áreas comunes', 'Muelles y zonas de carga acordados', 'Oficinas, aseos y vestuarios', 'Zonas de descanso'],
    planningTitle: 'Servicio recurrente compatible con los turnos',
    planning: 'En los centros logísticos de Barcelona, acordamos con el responsable del centro ventanas de ejecución según los turnos y la circulación de personas y mercancías. La propuesta concreta cuándo estarán disponibles las zonas de picking, los pasillos, los muelles autorizados para la intervención y las oficinas internas, con frecuencias según su uso. El servicio se realiza sobre las áreas acordadas, sin mover mercancías. El mantenimiento habitual y las necesidades adicionales se distinguen en la propuesta. Superclim organiza el equipo y realiza el seguimiento del servicio; las incidencias y los cambios de prioridad se revisan con el responsable del centro dentro del alcance contratado.',
    faq: [
      ['¿Podéis adaptar el servicio a nuestros turnos?', 'Sí, valoramos las franjas de actividad y los accesos para acordar horarios. La organización por turnos se concreta cuando las necesidades de la instalación lo requieren.'],
      ['¿Se incluyen los muelles de carga?', 'Pueden incluirse cuando corresponda, con zonas y horarios previamente acordados para coordinar la limpieza con las operaciones de carga y descarga.'],
      ['¿Movéis mercancías para limpiar?', 'El servicio se planifica sobre espacios accesibles. Acordamos con el responsable del almacén qué zonas deben quedar despejadas antes de intervenir.'],
      ['¿Cómo se mantiene la continuidad?', 'Superclim planifica el servicio recurrente, realiza seguimiento y gestiona las incidencias y sustituciones cuando corresponda según lo acordado.'],
    ],
  },
};
export const businessCoverage = ['Sabadell', 'Vallès Occidental', 'Terrassa', 'Sant Quirze del Vallès', 'Barberà del Vallès', 'Cerdanyola del Vallès', 'Sant Cugat del Vallès', 'Rubí', 'Barcelona'];
export const businessLinks = [
  ...(['officeCleaning', 'industrialCleaning', 'logisticsCleaning'] as const).map(key => ({ label: businessPages[key].label, href: businessConfig.urls.services[key] })),
  { label: 'Limpieza de comunidades', href: businessConfig.urls.services.communityCleaning },
];
