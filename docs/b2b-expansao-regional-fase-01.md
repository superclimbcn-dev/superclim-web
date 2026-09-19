# Fase Regional B2B 01 — implementação para revisão

## Escopo

Base anterior: `6e3e150b628a6103aa517f2999d8125c9f6fe5b8`. Preparação e validação local em 19/09/2026. Nenhum commit, push ou deploy realizado nesta fase.

Somente três arquivos fazem parte da entrega:
- `src/config/businessPages.ts`
- `scripts/business.test.mjs`
- `docs/b2b-expansao-regional-fase-01.md`

## Localização e textos aprovados

- Hub: quarto cartão após “Almacenes y centros logísticos”, antes de “Tipos de instalaciones”.
- Oficinas: substituição somente de `officeCleaning.planning`, sob o mesmo título existente. Cartão Sant Cugat integralmente preservado.
- Naves: quarto cartão após “Espacios de apoyo a la actividad”, antes de “Otros servicios para tus instalaciones”.
- Logística: substituição somente de `logisticsCleaning.planning`, sob o mesmo título existente.

Os três cartões anteriores do hub e de naves permanecem intactos.

### Contratos recurrentes desde nuestra base en Sabadell

Desde nuestra base en Sabadell, valoramos la ubicación de tu instalación, los accesos y la frecuencia y los horarios más adecuados para el servicio. Según se trate de oficinas, naves o centros logísticos, concretamos las tareas y las condiciones del contrato recurrente. Tu empresa contrata el servicio; Superclim organiza la ejecución y su supervisión conforme al alcance acordado. Consulta la especialidad correspondiente para conocer qué podemos incluir en la propuesta.

### Un servicio recurrente adaptado a la jornada

La frecuencia puede ser diaria, varias veces por semana o semanal, según la ocupación y el uso de los espacios. Para las oficinas en Barcelona, concretamos con la persona responsable de la instalación qué áreas privativas y qué zonas comunes forman parte del servicio contratado. Acordamos los accesos, el cierre y los horarios de intervención según la disponibilidad de cada zona. El plan distingue las tareas habituales de otras actuaciones periódicas y permite revisar las prioridades con esa persona responsable.

### Planificación del servicio en Terrassa y Rubí

Para el mantenimiento recurrente de naves en Terrassa, definimos frecuencias según el uso de las áreas productivas accesibles, pasillos y espacios de apoyo, coordinando las intervenciones con la actividad de la instalación.

En Rubí, valoramos el uso de la nave, los tipos de superficies, los accesos, la circulación y las prioridades para diferenciar las tareas habituales de las necesidades adicionales.

En ambos municipios, la propuesta concreta las zonas disponibles, los horarios y el alcance del servicio. Si hace falta conocer la instalación, acordamos una visita de valoración.

No incluye limpieza de maquinaria especializada, retirada de residuos peligrosos, trabajos en altura ni limpieza técnica fuera del alcance acordado.

### Servicio recurrente compatible con los turnos

En los centros logísticos de Barcelona, acordamos con el responsable del centro ventanas de ejecución según los turnos y la circulación de personas y mercancías. La propuesta concreta cuándo estarán disponibles las zonas de picking, los pasillos, los muelles autorizados para la intervención y las oficinas internas, con frecuencias según su uso. El servicio se realiza sobre las áreas acordadas, sin mover mercancías. El mantenimiento habitual y las necesidades adicionales se distinguen en la propuesta. Superclim organiza el equipo y realiza el seguimiento del servicio; las incidencias y los cambios de prioridad se revisan con el responsable del centro dentro del alcance contratado.

## Diff de conteúdo — antes/depois

Nos cartões novos, antes não havia quarto cartão. Nos planejamentos, o diff abaixo contém os textos anteriores e novos completos.

```diff
diff --git a/src/config/businessPages.ts b/src/config/businessPages.ts
index c0b688d..b517114 100644
--- a/src/config/businessPages.ts
+++ b/src/config/businessPages.ts
@@ -10,6 +10,7 @@ export const businessPages = {
       ['Oficinas y despachos', 'Cuidamos los espacios de trabajo, las salas de reunión, los aseos y las zonas compartidas con una frecuencia adaptada a su uso.'],
       ['Naves industriales y talleres', 'Definimos las superficies y los recorridos que necesitan mantenimiento, coordinando la limpieza con la actividad de la instalación.'],
       ['Almacenes y centros logísticos', 'Organizamos las tareas por zonas y franjas horarias para atender los espacios de almacenamiento y las áreas de uso común.'],
+      ['Contratos recurrentes desde nuestra base en Sabadell', 'Desde nuestra base en Sabadell, valoramos la ubicación de tu instalación, los accesos y la frecuencia y los horarios más adecuados para el servicio. Según se trate de oficinas, naves o centros logísticos, concretamos las tareas y las condiciones del contrato recurrente. Tu empresa contrata el servicio; Superclim organiza la ejecución y su supervisión conforme al alcance acordado. Consulta la especialidad correspondiente para conocer qué podemos incluir en la propuesta.'],
     ],
     tasks: ['Suelos y pasillos', 'Aseos y vestuarios', 'Zonas comunes y de descanso', 'Oficinas y salas de reunión', 'Papeleras y superficies de uso cotidiano', 'Cristales interiores cuando proceda'],
     planningTitle: 'Contratos de limpieza con un alcance definido',
@@ -37,7 +38,7 @@ export const businessPages = {
     ],
     tasks: ['Escritorios y superficies accesibles', 'Salas de reunión y despachos', 'Recepción y zonas comunes', 'Office y cocina compartida', 'Aseos y papeleras', 'Suelos y cristales interiores acordados'],
     planningTitle: 'Un servicio recurrente adaptado a la jornada',
-    planning: 'La frecuencia puede ser diaria, varias veces por semana o semanal, según la ocupación y el uso de los espacios. Acordamos el acceso, el cierre y las zonas disponibles durante cada intervención. El plan distingue las tareas habituales de otras actuaciones periódicas y permite revisar las prioridades con la persona responsable de la oficina.',
+    planning: 'La frecuencia puede ser diaria, varias veces por semana o semanal, según la ocupación y el uso de los espacios. Para las oficinas en Barcelona, concretamos con la persona responsable de la instalación qué áreas privativas y qué zonas comunes forman parte del servicio contratado. Acordamos los accesos, el cierre y los horarios de intervención según la disponibilidad de cada zona. El plan distingue las tareas habituales de otras actuaciones periódicas y permite revisar las prioridades con esa persona responsable.',
     faq: [
       ['¿Se puede limpiar con la oficina en funcionamiento?', 'Valoramos las zonas ocupadas y los momentos de menor actividad. Si conviene, planteamos el servicio antes o después de la jornada, con acceso previamente acordado.'],
       ['¿Qué ocurre con los documentos de los escritorios?', 'Acordamos limpiar las superficies accesibles sin manipular documentación. Conviene dejar despejadas las mesas que deban incluirse en cada visita.'],
@@ -53,6 +54,7 @@ export const businessPages = {
       ['Pavimentos, pasillos y polvo', 'Valoramos el estado de los pavimentos y la acumulación de polvo industrial para definir el mantenimiento de suelos y pasillos. Es necesario identificar la naturaleza de los residuos antes de acordar su tratamiento.'],
       ['Zonas productivas y talleres', 'La intervención se coordina con los responsables del centro para delimitar áreas disponibles, circulación y horarios. El alcance se refiere a las superficies acordadas, sin presuponer limpieza de maquinaria o procesos técnicos.'],
       ['Espacios de apoyo a la actividad', 'Oficinas interiores, vestuarios, aseos y zonas comunes tienen necesidades diferentes a las áreas productivas. Las zonas de carga pueden incluirse cuando proceda, previa valoración del acceso y del uso.'],
+      ['Planificación del servicio en Terrassa y Rubí', 'Para el mantenimiento recurrente de naves en Terrassa, definimos frecuencias según el uso de las áreas productivas accesibles, pasillos y espacios de apoyo, coordinando las intervenciones con la actividad de la instalación.\n\nEn Rubí, valoramos el uso de la nave, los tipos de superficies, los accesos, la circulación y las prioridades para diferenciar las tareas habituales de las necesidades adicionales.\n\nEn ambos municipios, la propuesta concreta las zonas disponibles, los horarios y el alcance del servicio. Si hace falta conocer la instalación, acordamos una visita de valoración.\n\nNo incluye limpieza de maquinaria especializada, retirada de residuos peligrosos, trabajos en altura ni limpieza técnica fuera del alcance acordado.'],
     ],
     tasks: ['Pavimentos y suelos industriales', 'Pasillos y recorridos accesibles', 'Zonas productivas acordadas', 'Oficinas interiores', 'Vestuarios, aseos y zonas comunes', 'Zonas de carga cuando proceda'],
     planningTitle: 'Mantenimiento por sectores y frecuencias',
@@ -75,7 +77,7 @@ export const businessPages = {
     ],
     tasks: ['Superficies accesibles del almacén', 'Zonas de picking', 'Pasillos y áreas comunes', 'Muelles y zonas de carga acordados', 'Oficinas, aseos y vestuarios', 'Zonas de descanso'],
     planningTitle: 'Servicio recurrente compatible con los turnos',
-    planning: 'Definimos ventanas de trabajo por área y frecuencias según su uso. El mantenimiento habitual y las necesidades adicionales se distinguen en la propuesta. Superclim organiza el equipo y realiza el seguimiento del servicio; las incidencias y los cambios de prioridad se revisan con el responsable del centro dentro del alcance contratado.',
+    planning: 'En los centros logísticos de Barcelona, acordamos con el responsable del centro ventanas de ejecución según los turnos y la circulación de personas y mercancías. La propuesta concreta cuándo estarán disponibles las zonas de picking, los pasillos, los muelles autorizados para la intervención y las oficinas internas, con frecuencias según su uso. El servicio se realiza sobre las áreas acordadas, sin mover mercancías. El mantenimiento habitual y las necesidades adicionales se distinguen en la propuesta. Superclim organiza el equipo y realiza el seguimiento del servicio; las incidencias y los cambios de prioridad se revisan con el responsable del centro dentro del alcance contratado.',
     faq: [
       ['¿Podéis adaptar el servicio a nuestros turnos?', 'Sí, valoramos las franjas de actividad y los accesos para acordar horarios. La organización por turnos se concreta cuando las necesidades de la instalación lo requieren.'],
       ['¿Se incluyen los muelles de carga?', 'Pueden incluirse cuando corresponda, con zonas y horarios previamente acordados para coordinar la limpieza con las operaciones de carga y descarga.'],
```

## Verificações

- TypeScript (`npx tsc -b`): PASS.
- Build (`npm run build`): PASS, 50 rotas prerenderizadas. Aviso de chunks grandes permanece, sem refactor.
- Lint do TypeScript alterado: PASS.
- Lint do teste MJS com ESLint recommended e globals Node/browser em configuração temporária em memória: PASS. A configuração padrão do projeto limita suas regras a TS/TSX.
- Lint global: 11 erros preexistentes, zero novos. Os erros estão em WhatsAppButton, componentes UI badge/button-group/button/form/navigation-menu/sidebar/toggle e Footer, todos inalterados.
- `git diff --check`: PASS.
- `node --test scripts/tag-manager.test.mjs scripts/regional-links.test.mjs scripts/business.test.mjs`: 9/9 PASS, incluindo subtestes desktop/mobile do Lote 01.
- Teste B2B valida texto aprovado, posição dos cartões, exclusividade por página e preservação exata do cartão Sant Cugat, com/sem JavaScript em desktop e 375×812.
- Formulários: cenários das quatro páginas em desktop/mobile, com/sem JS, encoding, required, foco/teclado e ausência de submissão GET: PASS.
- Build local: 50/50 URLs HTTP 200 sem redirects. Title, description, robots e canonical únicos no HTML inicial e DOM; canonicals autorreferentes.
- Comparação de baseline e build alterado: metadata, H1, JSON-LD e BreadcrumbList idênticos nas 50 páginas.
- Conteúdo e links das 46 páginas fora do cluster B2B idênticos ao baseline.
- Sitemap e robots idênticos byte a byte ao baseline. Configuração de redirects inalterada; 89 regras verificadas localmente.
- SPA: 22 etapas por links existentes, comparadas ao carregamento direto para detectar resíduos de metadata/schema.
- 404: resposta local e caminho inexistente na produção atual preservados. A produção não recebeu estas alterações.
- Mobile 375×812: sem overflow nas quatro páginas, com e sem JavaScript.

Evidências e logs temporários: `/tmp/superclim-regional01/`. Não fazem parte do commit proposto.

## Preservação e limites

Nenhuma URL nova. Não foram alterados `BusinessPage.tsx`, SEOMeta, títulos SEO, descriptions, H1, canonicals, schemas, breadcrumbs, businessCoverage, businessLinks, formulário, WhatsApp, telefone, CTAs, sitemap, robots, redirects, slugs ou páginas B2C.

O texto de Naves preserva as quebras de parágrafo no dado (`\n\n`). O componente existente renderiza cada cartão em um único elemento p com whitespace normal: as quebras aparecem como espaços no navegador. Nenhuma mudança de apresentação foi feita, respeitando a proibição de editar BusinessPage.tsx.

Não há linguagem de cessão de pessoal nem novas promessas de escala, clientes, certificações ou garantias. Materiais continuam vinculados à proposta nos textos existentes. A visita permanece condicional; exclusões industriais e ausência de movimentação de mercadorias foram preservadas.

O servidor local de comparação aplica as regras de vercel.json, mas não equivale ao runtime Vercel. Uma publicação futura precisa de autorização e validação no domínio oficial.

## Estado

Aguardando aprovação final. Sem commit, push ou deploy.
