# Sublote 04.2 — Rede regional existente

## Escopo e base

Implementação local sobre `c652970c3a41a784aca5599e172c0bae783e7c7c` (main). Nenhuma URL criada. Nenhuma alteração editorial estratégica, configuração SEO, schema, breadcrumb, sitemap, robots, redirect ou rota.

## Mapa final

| Município | Sofás | Alfombras | Colchones | Comunidades |
|---|---|---|---|---|
| Sabadell | Sim | Sim | Sim | Sim |
| Sant Cugat | Sim | Sim | Sim | Sim |
| Terrassa | Sim | Sim | Sim | Sim |
| Sant Quirze | Sim | Sim | Sim | Sim |
| Barcelona | Sim | Sim | Sim | — |
| Cerdanyola | Sim | Sim | Sim | — |
| Barberà | Sim | Sim | — | Sim |
| Castellar | — | Sim | Sim | Sim |
| Rubí | — | — | — | — |

São 28 destinos locais distintos: sete de sofás, oito de alfombras, sete de colchones e seis de comunidades. `—` significa ausência de destino local elegível, não indisponibilidade comercial do serviço.

O registro `src/config/regionalNavigation.ts` contém os caminhos completos publicados, URLs gerais, cobertura sem URL e candidatas editoriais sem destino. Não constrói URLs combinando serviço e cidade. Os aliases de Sant Cugat, Sant Quirze e da segunda página de alfombras Barcelona são resolvidos apenas para identificar o município.

Para alfombras Barcelona, novos links usam exclusivamente `/limpieza-de-alfombras/barcelona`. A outra URL permanece publicada, indexável e com seu SEO intacto; não recebe novos links desta rede. Seus links preexistentes em outros componentes não foram ampliados.

## Antes e depois

- **Páginas regionais B2C:** listas de cidades repetidas no template → registro central, exclusão da própria cidade por identidade e até seis destinos irmãos, com anchors descritivos.
- **Páginas municipais de comunidades:** um ou dois destinos irmãos → cinco municípios irmãos existentes, no bloco já existente, com anchors descritivos.
- **Outros serviços:** nenhum bloco municipal transversal → `RegionalRelatedServices`, de dois a três links para outros serviços do mesmo município, excluindo o serviço atual.
- **Home:** cartões com descrição e “Cómo llegar” → mesmos elementos mais três ou quatro links de serviços nas cinco cidades com URLs locais. Rubí permanece sem links municipais. O nome da cidade não virou link.
- **Servicio a domicilio:** chips de cobertura em texto → seis links locais de sofás; Castellar e Rubí continuam texto.

O bloco transversal aparece nas 23 páginas regionais B2C (incluindo a página alternativa existente de alfombras Barcelona) e nas seis páginas municipais de comunidades: 29 páginas renderizadas, sem criar destinos.

## Chips auditados

Viraram links em `/limpieza-de-sofas/limpieza-de-sofas-a-domicilio`:

- Sabadell → `/servicios/limpieza-de-sofa-sabadell`
- Barcelona → `/servicios/limpieza-de-sofas-barcelona`
- Terrassa → `/servicios/limpieza-de-sofas-terrassa`
- Cerdanyola del Vallès → `/servicios/limpieza-de-sofa-cerdanyola`
- Sant Cugat → `/servicios/limpieza-de-sofas-sant-cugat`
- Sant Quirze del Vallès → `/servicios/limpieza-de-sofas-en-sant-quirze`

Permanecem texto:

- Castellar del Vallès e Rubí no serviço a domicílio: sem página local de sofás.
- Cobertura B2B: não existem páginas B2B municipais publicadas.
- Bairros das páginas regionais: não existem destinos próprios elegíveis.
- Cerdanyola na cobertura de comunidades: sem página municipal de comunidades.

Links municipais já existentes nos hubs foram preservados. Não foram introduzidos links para serviços diferentes em chips de cobertura de um serviço específico.

## Arquivos

Criados:

- `src/config/regionalNavigation.ts`
- `src/components/RegionalRelatedServices.tsx`
- `docs/regional-network-04-2.md`

Alterados:

- `src/components/CityServiceLinks.tsx`: foco visível e quebra de texto sem truncamento.
- `src/pages/regional/RegionalServicePage.tsx`: rede transversal e cidades irmãs centralizadas; conteúdo envolvido em `<main>` para integrar os links à detecção de colisões já existente do WhatsApp.
- `src/pages/services/communities/CommunityCityPage.tsx`: rede transversal e municípios irmãos.
- `src/pages/services/ServicioDomicilio.tsx`: seis chips elegíveis e o mesmo contêiner semântico `<main>`, sem mudar textos ou layout.
- `src/sections/Locations.tsx`: links nos cartões existentes.
- `scripts/regional-links.test.mjs`: inventário, DOM, links, teclado, SPA e três viewports.

Arquivos adicionais necessários:

- `src/i18n/locales/es.json`, `ca.json`, `en.json`: somente cinco novas chaves para os rótulos adicionados à Home, seguindo a regra de internacionalização do projeto.
- `scripts/business.test.mjs`: a antiga proibição de qualquer edição no template de comunidades passa a proteger os dados editoriais e SEO. A edição de navegação desse template está autorizada neste lote; a comparação de HTML/DOM com HEAD valida schemas, H1 e breadcrumbs.
- `scripts/mobile-ux.test.mjs`: aguarda o retorno assíncrono de foco do Radix antes da asserção existente. Nenhum comportamento do menu foi modificado. A rolagem completa passou a incluir uma página regional e o serviço a domicílio.

## Validação

A comparação usa um build separado do HEAD anterior em `/tmp/superclim-042/baseline` e o build de trabalho. Evidências, screenshots e diff ficam em `/tmp/superclim-042`, fora dos arquivos publicáveis.

- TypeScript e build: PASS; 50 rotas prerenderizadas.
- Lint de TS/TSX alterados: PASS. Scripts MJS verificados com regras ESLint recomendadas e globals Node/browser, pois o config padrão não os cobre.
- `git diff --check`: PASS.
- Testes de consentimento, B2B, Lote 01 e rede regional: 10/10 PASS.
- Rede regional: 28 destinos × desktop 1440×1000, mobile 375×812 e 390×844; exclusão de serviço atual, destinos existentes, foco visível e navegação por Enter sem recarregar o documento.
- 50/50 URLs HTTP 200 no servidor estático de validação, sem fallback SPA para páginas inexistentes.
- 50 destinos internos únicos extraídos do DOM: HTTP 200.
- HTML inicial e DOM após JS: title, description, robots, canonical únicos e iguais ao HEAD; canonicals autorreferentes; H1, JSON-LD e breadcrumbs iguais ao HEAD.
- Menu/WhatsApp 04.1: **2/2 PASS**; teste de foco assíncrono estabilizado, menu em 50 rotas × duas larguras; rolagem, cookies, foco em campos, simulação de teclado e desktop.
- 15 etapas SPA entre hubs, B2B e páginas locais: metadata/schema iguais à entrada direta, sem resíduos.
- Sitemap e robots iguais byte a byte; `vercel.json` intacto; 89 redirects preservados na simulação local.
- 404 local preservado; consulta somente leitura ao domínio oficial também retornou HTTP 404. A simulação local não substitui futura validação de publicação na Vercel.

## Evidências de revisão

- Diff completo: `/tmp/superclim-042/review.diff`.
- Comparação das 50 páginas: `/tmp/superclim-042/validation.json`.
- Testes finais: `/tmp/superclim-042/tests-final.log` e `/tmp/superclim-042/mobile-final.log`.
- Screenshots: `/tmp/superclim-042/visual/` (Home, serviços relacionados e cidades irmãs em 1440, 375 e 390 px).
- Nenhuma regressão detectada nas verificações finais.

## Limites preservados

O prerender atual não inclui os novos blocos de navegação no HTML inicial. Eles são links reais `<a href>` no DOM renderizado pelo React, não handlers isolados. O mecanismo de prerender não foi alterado neste sublote.

As screenshots bloqueiam recursos externos para evitar chamadas de terceiros durante os testes; imagens remotas da Home podem aparecer vazias. O teste visual avalia a disposição dos links e os componentes locais. Mobile e teclado virtual são emulados em Chromium, não dispositivos físicos.

Sem implementação de candidatas B2B, sem alteração do menu/WhatsApp 04.1 e sem mudanças em contatos ou formulários. Nenhum commit, push ou deploy autorizado neste estágio.
