# Lote 02 — contratos recorrentes B2B

Base: `23ec45368622e05eb3a3dfd784905afd865fa7e4` (main). Estado: implementação local para revisão; sem commit, push ou deploy.

## Escopo

Somente quatro páginas existentes: `/limpieza-para-empresas`, `/limpieza-para-empresas/oficinas`, `/limpieza-para-empresas/naves-industriales` e `/limpieza-para-empresas/centros-logisticos`.

Arquivos do lote:

- `src/config/businessPages.ts`: introduções e planejamento aprovados.
- `src/pages/business/BusinessPage.tsx`: processo comercial, dois blocos operacionais e link contextual de contato.
- `scripts/business.test.mjs`: ampliação dos testes existentes.
- `docs/b2b-lote-02.md`: este relatório e antes/depois integral dos textos.

## Estado anterior e mudança

As páginas já apresentavam recorrência, equipe própria, supervisão e substituições. O conteúdo foi fortalecido para explicar o serviço contratado, seu alcance e acompanhamento, diferenciando oficinas, naves e logística. Os dois blocos comuns foram revisados, sem criar páginas ou multiplicar seções. Foi adicionado um link “Contacta con Superclim” para `/contacto` depois das três etapas comerciais.

| Área | Antes | Depois |
| --- | --- | --- |
| Hub | Plano e frequência de limpeza | Contrato com zonas, tarefas, horários e alcance definidos |
| Oficinas | Organização compatível com a jornada | Recorrência explícita e revisão de prioridades por uso |
| Naves | Manutenção e restrições industriais | Planejamento por setores e frequências, preservando restrições |
| Logística | Turnos e janelas de trabalho | Manutenção habitual, necessidades adicionais e acompanhamento |
| Blocos comuns | Vantagens e continuidade | Proposta definida e organização/controle do serviço |
| Processo comercial | Necessidade → proposta → organização | Necessidade → avaliação condicional → organização do serviço |
| Contato | Formulário, telefone e WhatsApp | Caminhos preservados + link contextual para /contacto |

## Limites comerciais preservados

- O cliente contrata o serviço. Superclim organiza equipe, turnos, supervisão e acompanhamento.
- Materiais são os **previstos na proposta**; nenhuma promessa de inclusão ilimitada ou automática.
- Visita somente condicional: “Si hace falta conocer la instalación, acordamos una visita de valoración.”
- Incidências e substituições são tratadas quando correspondam, conforme as condições acordadas.
- Não foram adicionadas promessas de escala, número de trabalhadores, capacidade em m², certificações, garantias, clientes, prazos de resposta ou novas condições comerciais.
- Sem linguagem de cessão/aluguel de trabalhadores ou apresentação como ETT.
- As restrições sobre documentos, mercadorias, maquinaria, resíduos perigosos, altura e limpeza técnica especializada permanecem.

## Preservação técnica e de escopo

Titles, descriptions, H1, canonicals, JSON-LD, breadcrumbs, slugs, sitemap, robots e redirects não foram alterados. `SEOMeta.tsx`, `BusinessSEO.tsx`, `BusinessQuoteForm.tsx`, `Breadcrumb.tsx`, configurações SEO e rotas permaneceram intactos.

Na configuração B2B, somente `intro`, `planningTitle` e `planning` tiveram mudanças. `label`, `facility`, `businessLinks`, `businessCoverage`, tarefas, seções específicas e FAQs foram preservados. A geração de schemas e os destinos/mensagens dos CTAs existentes permanecem iguais.

O formulário mantém seus dez campos, dois obrigatórios, preparação de WhatsApp e fallback sem JS. Nenhuma página B2C/local foi editada.

## Validação

Resultados finais registrados abaixo após a execução. Evidências temporárias ficam em `/tmp/superclim-lote02/`, fora do Git.

A comparação usa um build limpo anterior à edição e um build posterior. Nas 50 URLs, compara metadata e JSON-LD no HTML inicial e no DOM, além de H1. Nas 46 páginas fora do cluster B2B, compara também texto visível e hrefs. O teste SPA compara cada etapa com o carregamento direto e confirma que o documento não foi recarregado.

O servidor temporário de regressão resolve os arquivos HTML e aplica as regras de `vercel.json`. É uma simulação local, não a plataforma Vercel. O 404 real da produção atual também foi consultado em leitura. Nenhum deploy foi realizado, portanto os novos textos ainda não estão publicados.

O teste B2B ampliado cobre quatro páginas × dois tamanhos (1440×1000 e 375×812) × JS habilitado/desabilitado: 16 cenários. Verifica o link contextual de contato por teclado, foco, overflow, conteúdo prerenderizado, dados estruturados, destinos HTTP 200 e o fluxo do formulário. Sem JS, confirma ausência de formulário/campos/submissão nativa e presença do fallback. Com JS, verifica que preparar WhatsApp não provoca navegação GET nem query string com dados pessoais. Requisições externas são bloqueadas; nenhuma mensagem é enviada.

## Antes/depois integral

Os trechos abaixo registram todas as substituições textuais. A redação dos materiais foi ajustada ao requisito final de vinculação explícita à proposta.

### Alteração 1 — `src/config/businessPages.ts`

**Antes:**

> intro: 'Tu centro de trabajo necesita un servicio de limpieza que encaje con su actividad. En Superclim planificamos la limpieza recurrente o periódica, con nuestro propio personal, organización y seguimiento del servicio.'

**Depois:**

> intro: 'Superclim presta servicios de limpieza para empresas en Sabadell, el Vallès Occidental y Barcelona. Definimos un plan de mantenimiento recurrente según las instalaciones, las tareas y los horarios acordados. Tu empresa contrata el servicio; Superclim organiza el equipo, los turnos y la supervisión de su ejecución.'

### Alteração 2 — `src/config/businessPages.ts`

**Antes:**

> planningTitle: 'Frecuencia y alcance a medida'

**Depois:**

> planningTitle: 'Contratos de limpieza con un alcance definido'

### Alteração 3 — `src/config/businessPages.ts`

**Antes:**

> planning: 'Desde pequeñas empresas hasta grandes instalaciones, adaptamos la frecuencia y el número de profesionales al tamaño y uso de cada espacio. El plan puede contemplar varias horas al día o varios días por semana, con horarios acordados y tareas definidas por zona.'

**Depois:**

> planning: 'La propuesta concreta qué zonas se limpian, qué tareas se realizan y con qué frecuencia. También recoge los horarios, las condiciones de acceso y los materiales previstos en la propuesta. Podemos plantear limpieza diaria, varias veces por semana o semanal, según las necesidades del centro. Las necesidades adicionales se revisan para acordar su alcance antes de incorporarlas al servicio.'

### Alteração 4 — `src/config/businessPages.ts`

**Antes:**

> intro: 'Un entorno cuidado empieza por las zonas que tu equipo utiliza cada día. Organizamos la limpieza de oficinas en Sabadell y Barcelona para gerencia, responsables de oficina y facilities managers, con tareas claras y horarios compatibles con la jornada.'

**Depois:**

> intro: 'Organizamos la limpieza recurrente de oficinas y despachos en Sabadell y Barcelona para gerencia, responsables de oficina y facilities managers. Definimos las tareas de puestos de trabajo, salas de reunión, aseos y espacios compartidos, con una frecuencia y unos horarios acordados según el uso de cada zona.'

### Alteração 5 — `src/config/businessPages.ts`

**Antes:**

> planningTitle: 'Limpieza antes o después de la jornada'

**Depois:**

> planningTitle: 'Un servicio recurrente adaptado a la jornada'

### Alteração 6 — `src/config/businessPages.ts`

**Antes:**

> planning: 'La limpieza diaria de oficinas puede ser adecuada para centros con mucho tránsito; otros despachos necesitan un servicio semanal o varias veces por semana. Acordamos el acceso, el cierre y los horarios antes o después de la jornada, así como las zonas que deben quedar disponibles durante el trabajo.'

**Depois:**

> planning: 'La frecuencia puede ser diaria, varias veces por semana o semanal, según la ocupación y el uso de los espacios. Acordamos el acceso, el cierre y las zonas disponibles durante cada intervención. El plan distingue las tareas habituales de otras actuaciones periódicas y permite revisar las prioridades con la persona responsable de la oficina.'

### Alteração 7 — `src/config/businessPages.ts`

**Antes:**

> intro: 'La limpieza de una nave debe tener en cuenta sus recorridos, superficies y actividad. Preparamos un servicio de mantenimiento para naves industriales y talleres de Sabadell y Barcelona, definiendo las zonas accesibles y las tareas antes de comenzar.'

**Depois:**

> intro: 'Planificamos la limpieza industrial de pavimentos, pasillos y zonas comunes en naves y talleres de Sabadell y Barcelona. Para el mantenimiento recurrente de grandes superficies, valoramos los sectores de trabajo, los accesos y la actividad del centro antes de definir tareas, frecuencias y horarios.'

### Alteração 8 — `src/config/businessPages.ts`

**Antes:**

> planningTitle: 'Coordinación con la actividad industrial'

**Depois:**

> planningTitle: 'Mantenimiento por sectores y frecuencias'

### Alteração 9 — `src/config/businessPages.ts`

**Antes:**

> planning: 'Antes de presupuestar revisamos el tipo de instalación, las superficies, el polvo presente y las restricciones de acceso. La propuesta concreta las tareas de mantenimiento y su frecuencia. Los trabajos peligrosos, en altura o de limpieza técnica especializada no forman parte de esta oferta.'

**Depois:**

> planning: 'En una nave, no todas las superficies requieren la misma frecuencia. La propuesta diferencia pavimentos y recorridos, áreas productivas accesibles y espacios de apoyo, como oficinas, aseos y vestuarios. Acordamos con el responsable del centro qué zonas estarán disponibles durante cada intervención. Los trabajos peligrosos, en altura o de limpieza técnica especializada no forman parte de esta oferta.'

### Alteração 10 — `src/config/businessPages.ts`

**Antes:**

> intro: 'El movimiento de mercancías marca el ritmo de un almacén. Organizamos la limpieza recurrente de almacenes y centros logísticos en Barcelona y el Vallès Occidental con tareas por zonas y horarios adaptados a la operativa.'

**Depois:**

> intro: 'Organizamos la limpieza recurrente de almacenes y centros logísticos en Barcelona y el Vallès Occidental. El plan diferencia zonas de picking, pasillos, muelles acordados y oficinas internas, con horarios coordinados con la circulación de mercancías y los turnos del centro.'

### Alteração 11 — `src/config/businessPages.ts`

**Antes:**

> planning: 'En centros de distribución y plataformas logísticas, definimos ventanas de trabajo por área. Si procede, organizamos el servicio por turnos y priorizamos los momentos de menor circulación. El seguimiento permite comunicar incidencias y ajustar las tareas al uso real del almacén dentro del alcance contratado.'

**Depois:**

> planning: 'Definimos ventanas de trabajo por área y frecuencias según su uso. El mantenimiento habitual y las necesidades adicionales se distinguen en la propuesta. Superclim organiza el equipo y realiza el seguimiento del servicio; las incidencias y los cambios de prioridad se revisan con el responsable del centro dentro del alcance contratado.'

### Alteração 12 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Ventajas para tu empresa

**Depois:**

> Qué queda definido en la propuesta

### Alteração 13 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Nos ocupamos de la organización del servicio para que tu empresa no tenga que gestionar directamente el personal de limpieza. Las tareas y frecuencias acordadas facilitan el seguimiento y permiten comunicar prioridades con claridad.

**Depois:**

> Zonas, tareas, frecuencia, horarios y condiciones de acceso. También quedan definidos los materiales previstos en la propuesta y las responsabilidades de cada parte, para que el servicio pueda revisarse sobre un alcance claro.

### Alteração 14 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Personal y continuidad del servicio

**Depois:**

> Organización y control del servicio

### Alteração 15 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Superclim presta el servicio con su propio personal y se encarga de la planificación y supervisión. Diseñamos equipos y horarios según las necesidades de cada instalación y gestionamos incidencias y sustituciones cuando corresponda, según las condiciones acordadas.

**Depois:**

> Superclim organiza su equipo, los turnos, la supervisión y los materiales previstos en la propuesta para ejecutar el servicio contratado. Gestionamos las incidencias y las sustituciones cuando corresponda, según las condiciones acordadas, y realizamos el seguimiento del cumplimiento de las tareas y frecuencias del contrato.

### Alteração 16 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Indica la ubicación, el tipo de instalación, su superficie y los horarios preferidos.

**Depois:**

> Indica el municipio, el tipo de instalación, la superficie aproximada y la frecuencia que necesitas.

### Alteração 17 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Definimos la propuesta

**Depois:**

> Valoramos el alcance

### Alteração 18 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Valoramos zonas, tareas y frecuencias para preparar un presupuesto personalizado.

**Depois:**

> Revisamos zonas, accesos y horarios para preparar la propuesta. Si hace falta conocer la instalación, acordamos una visita de valoración.

### Alteração 19 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Organizamos y seguimos el servicio

**Depois:**

> Organizamos el servicio

### Alteração 20 — `src/pages/business/BusinessPage.tsx`

**Antes:**

> Acordamos el inicio, organizamos nuestro equipo y mantenemos el seguimiento de las tareas.

**Depois:**

> Una vez acordadas las condiciones, planificamos el inicio, el equipo y el seguimiento de las tareas contratadas.

### Link contextual — novo

Após as três etapas:

> ¿Necesitas revisar el alcance antes de pedir presupuesto? **Contacta con Superclim** para explicar las necesidades de tu instalación y valorar si conviene una visita.

Destino: `/contacto`.

## Resultados finais

| Verificação | Resultado |
| --- | --- |
| TypeScript (`npx tsc -b --pretty false`) | PASS |
| Build (`npm run build`) | PASS; 50 rotas prerenderizadas |
| `scripts/business.test.mjs` | 2/2 PASS na execução final; 16 cenários B2B |
| `scripts/tag-manager.test.mjs` | 4/4 PASS |
| `scripts/regional-links.test.mjs` — lote 01 | PASS; teste pai e subtestes desktop/mobile |
| ESLint dos três arquivos de código alterados | Zero erros e zero warnings |
| Lint global | 11 erros preexistentes, nenhum novo |
| Diff-check | PASS |
| URLs locais, antes e depois | 50/50 HTTP 200 em cada build |
| Title, description, robots e canonical | Exatamente um de cada nas 50 URLs, HTML inicial e DOM |
| Canonicals | Autorreferentes e preservados |
| H1 / JSON-LD | Iguais ao baseline nas 50 URLs |
| Breadcrumbs B2B | Marcação geradora intacta; BreadcrumbList igual ao baseline |
| Páginas fora B2B | 46/46 com texto e hrefs iguais ao baseline |
| Sitemap / robots | Idênticos entre os builds e preservados no código |
| Redirects | Configuração intacta; 89/89 regras verificadas na simulação local |
| 404 | 404 local e 404 real da produção atual confirmados |
| SPA | 22 etapas sem resíduos de metadata/schema |
| Formulário | JS desktop/mobile aprovado, sem submissão GET; fallback sem JS aprovado |
| Novo contato | Teclado, foco e navegação aprovados nos 16 cenários |
| Links hub/filhas | Destinos HTTP 200, estrutura preservada e navegação SPA validada |
| Overflow | Ausente nos cenários desktop e 375×812 |

Uma primeira execução do teste ampliado falhou na ação de rolagem até o contato. A ação foi ajustada no teste para rolagem instantânea, seguida de foco e Enter; a execução final B2B passou integralmente. Os testes de GTM e lote 01 já haviam passado e seus arquivos não foram alterados. Não houve correção adicional no site para resolver a falha do teste.

O aviso de bundle maior que 500 kB permanece, assim como os 11 erros globais preexistentes. O ESLint do script `.mjs` foi executado com as regras recomendadas de `@eslint/js` e globals Node/browser, porque a configuração global atual concentra as regras em TypeScript. Nenhuma alteração de configuração foi necessária.

Evidências: `build-before.log`, `build-after.log`, `typescript.log`, `tests.log`, `business-rerun.log`, `lint-changed.json`, `lint-global.log`, `50-urls.json`, `spa.json`, `redirects-local.json`, `404.json` e `preservation.json` em `/tmp/superclim-lote02/`. Screenshots e resultados B2B estão em `test-artifacts/b2b/`, fora do repositório.

**Resultado: implementação validada localmente e limitada aos quatro arquivos autorizados. Sem commit, push ou deploy. Aguardando aprovação.**
