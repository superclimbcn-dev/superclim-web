# Sublote 04.1 — UX mobile global

## Diagnóstico

O Header já era compartilhado pelas rotas, mas renderizava quatro atalhos na Home e somente Inicio no menu das páginas internas. O painel anterior não implementava foco modal nem bloqueio do scroll de fundo. O botão B2B era textual e fixo; o componente geral já ocultava o texto no mobile, mas usava ícone genérico, animação e tooltip.

## Implementação

- `Header` passa a usar `MobileNavigation` em todas as rotas. Desktop mantém o ramo anterior.
- Menu modal com Radix Dialog já instalado: captura/restauração de foco, Escape, overlay e bloqueio de scroll; links React Router com href real, fechamento ao navegar com foco no H1 e retorno ao topo, fechamento em popstate e ao mudar para desktop.
- Grupos nativos details/summary, acionáveis por teclado: Servicios, Comunidades, Empresas e Empresa.
- Inicio e Todos los servicios são links diretos. Idioma, telefone e WhatsApp disponíveis no painel.
- Traduções es/ca/en adicionadas exclusivamente para os rótulos do menu.
- WhatsApp B2B e geral: círculo 48×48 px no mobile, SVG identificável, aria-label WhatsApp, ícone decorativo, foco visível e safe-area. Destinos/mensagens continuam definidos pelos chamadores originais.
- Sem faixa lateral permanente. `useFloatingWhatsAppSafety` oculta o controle mobile quando seu retângulo intercepta conteúdo/controles, quando há diálogo aberto ou durante edição/teclado. Oculta imediatamente durante movimentos de layout e reavalia em scroll, resize, foco e animações; reaparece em espaços seguros. A entrada de foco no próprio botão preserva o foco quando não há colisão. CTAs no conteúdo continuam disponíveis.
- Tooltip e transformações do botão geral permanecem no desktop; no mobile não ocupam espaço extra.
- Contenção horizontal mobile impede animações de entrada fora da tela de ampliarem o viewport e deslocarem o acionador do menu.

## Estrutura final

- Inicio → `/`
- Todos los servicios → `/servicios`
- Servicios: Sofás, Alfombras, Colchones, Impermeabilización
- Comunidades: Limpieza de Comunidades
- Empresas: Limpieza para Empresas, Oficinas, Naves Industriales, Centros Logísticos
- Empresa: Quiénes Somos, Contacto

Não foram adicionados links de cidade nem implementado o sublote 04.2.

## Arquivos

- `src/components/Header.tsx`
- `src/components/MobileNavigation.tsx` (novo)
- `src/components/WhatsAppButton.tsx`
- `src/components/BusinessWhatsAppButton.tsx` (novo)
- `src/components/WhatsAppIcon.tsx` (novo)
- `src/hooks/useFloatingWhatsAppSafety.ts` (novo)
- `src/pages/business/BusinessPage.tsx`
- `src/index.css`
- `src/i18n/locales/es.json`, `ca.json`, `en.json`
- `scripts/mobile-ux.test.mjs` (novo)
- `docs/mobile-ux-04-1.md` (novo)

## Validação

- TypeScript e build: PASS; 50 rotas prerenderizadas.
- Testes existentes (business, regional-links, tag-manager): 9/9 PASS.
- Testes mobile: 2/2 PASS (execução completa e teste isolado do último ajuste de foco). 50 rotas × 2 viewports (375×812 e 390×844), abertura/fechamento, teclado, foco, submenus, destinos e navegação. Rolagem completa em Home, Sofás e quatro páginas B2B, seguida de cookies e teclado simulado.
- Comparação global: 50/50 HTTP 200; title, description, robots e canonical únicos/autorreferentes no HTML inicial e DOM. H1, JSON-LD e BreadcrumbList iguais ao baseline.
- Sitemap/robots byte a byte preservados, vercel.json inalterado, 89 regras de redirects locais verificadas; 404 local e produção atual preservados.
- SPA: 22 etapas com metadata/schema iguais ao carregamento direto.
- Desktop: header e WhatsApp comparados ao baseline na Home e Naves, com igualdade de textos, hrefs e retângulos.
- Traduções existentes es/ca/en comparadas ao HEAD: intactas; somente namespace mobileNav acrescentado.
- Lint global: os mesmos 11 erros preexistentes. Dois pertencem ao uso anterior de any em WhatsAppButton.tsx; nenhum erro novo. Novos componentes/hook/teste e demais arquivos TS alterados sem erros.
- Diff sem erros de whitespace.

Evidências fora do repositório em `/tmp/superclim-041`: build.log, regression-tests.log, mobile-tests.log, focus-test.log, global.log, desktop.log, lint.log, mobile/results.json e screenshots. O diff completo da entrega está em review.diff.

Capturas principais: mobile/menu-375.png, menu-390.png, whatsapp-375.png, whatsapp-390.png, naves-375.png e naves-390.png. Há capturas adicionais de cookies e simulação de teclado.

A revisão visual confirmou hierarquia legível, foco visível, botão circular e texto de Naves livre da sobreposição anterior. O botão é intencionalmente ocultado em trechos sem espaço seguro; os CTAs inline são preservados.

O teste de teclado virtual usa foco num campo e redução de viewport em Chromium emulado; não representa execução em iPhone/Android físico. A proteção também observa visualViewport em navegadores que expõem a redução provocada pelo teclado.

A validação de URLs e redirects locais usa um servidor estático que reproduz as regras de vercel.json, sem equivaler ao runtime Vercel. A consulta de 404 na produção atual é somente leitura; este sublote não foi publicado.

## Preservação

Sem alteração de titles, descriptions, H1, canonicals, schemas, breadcrumbs, sitemap, robots, redirects, slugs ou SEOMeta. Sem alteração do formulário, conteúdo comercial ou dados de contato. Nenhuma dependência nova.

Sem commit, push ou deploy. Aguardando revisão.
