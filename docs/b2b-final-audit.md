# Auditoria final P0/P1 — Vertical B2B Superclim

## Resultado executivo

**APROVADO PARA PRODUÇÃO — aguardando autorização.** **P0 = 0; P1 = 0.** O P1 do formulário foi corrigido e revalidado. Os **6 P2 permanecem inalterados**, por instrução expressa. Não foi realizado merge ou deploy. A aprovação se refere ao working tree B2B validado, não a uma publicação já executada.

| Item | Resultado |
|---|---|
| P0 | **0** |
| P1 | **0** — submissão GET sem JavaScript impedida |
| P2 | **6** — descritos abaixo, com origem separada |
| Build | **PASS** |
| Testes existentes | **PASS — 2 B2B + 4 GTM** |
| Lint novo | **PASS — 0 erros introduzidos** |
| Lint global | 11 erros, idênticos aos de HEAD |
| URLs | **50/50 HTTP 200** no preview e 50/50 com um H1 renderizado |
| SPA metadata | **PASS na troca entre páginas**; problemas antigos de entrada direta separados |
| Schemas B2B | **PASS na validação local de sintaxe, estrutura e conteúdo** |
| Conversão | **PASS com JS e sem JS**, inclusive com script bloqueado |
| Mobile | Layout 375×812 aprovado; melhorias de acessibilidade P2 |
| Regressão | Nenhuma regressão identificada na amostra comparada com HEAD |

## 1. Escopo e método da auditoria original

- Branch confirmada: `feat/vertical-b2b`.
- HEAD de referência: `f8a005a842c7560ca4d89cc58d1d6ad73c19fb43`. As alterações B2B estavam no working tree, ainda sem commit.
- Build atual auditado contra uma cópia temporária de HEAD, compilada separadamente em `/tmp/superclim-p0p1-baseline`.
- Chrome headless; desktop 1440×1000 e mobile **375×812**.
- Testes com e sem JavaScript, entrada direta e cliques reais em links React Router. A prova de submissão sem JavaScript usou a tecla Enter.
- Requisições externas do navegador bloqueadas. Nenhuma mensagem enviada ao WhatsApp, nenhum dado real usado e nenhum acesso administrativo a produção.
- `src/`, `scripts/`, `public/`, `package.json` e lockfile foram comparados por hash antes/depois: **nenhuma alteração de código durante esta auditoria**.
- Na auditoria original foram gravados apenas relatório e evidências, além das saídas normais de build/testes. A correção posteriormente autorizada e seu escopo de commit estão descritos na seção 12. Sem merge ou deploy.

HTTP, renderização e métricas referem-se ao ambiente local. Não constituem medição de indexação do Google, de tráfego real ou do comportamento do CDN/hosting de produção.

## 2. Achado P1 — RESOLVIDO após autorização

### P1-01 — Submissão GET sem JavaScript: ocorrência original e resolução

**Status atual: RESOLVIDO.** A descrição abaixo registra a ocorrência anterior à correção. Atualmente o HTML inicial contém um fallback de contato, sem formulário, inputs ou submit. Os campos aparecem somente quando o JavaScript está ativo. Validação posterior: seção 12.

**Origem:** nova vertical B2B; componente compartilhado pelas quatro páginas.

**Local na versão anterior:** `BusinessQuoteForm.tsx`, formulário na antiga linha 26 e botão submit na antiga linha 33. A prevenção de envio nativo existia somente no handler JavaScript. O HTML gerado anteriormente não impedia o submit quando JavaScript estava indisponível. A condição de renderização segura está agora no [componente corrigido](../src/components/BusinessQuoteForm.tsx).

**Reprodução confirmada antes da correção:**

1. Abrir `/limpieza-para-empresas` com JavaScript desativado.
2. Preencher nome `PRUEBA NO ENVIAR`, município `Sabadell` e email fictício `auditoria@example.com`.
3. Pressionar Enter no campo de email.
4. O navegador realiza `GET /limpieza-para-empresas?Nombre=PRUEBA+NO+ENVIAR&...&Email=auditoria%40example.com&Municipio=Sabadell&...`.
5. Nenhum link de solicitação preparada aparece (`prepared: 0`).

**Impacto:** falha de conversão e inclusão de dados de contato na URL; em produção, essa URL pode ficar no histórico e em logs de acesso. O aviso `<noscript>` recomenda alternativas, mas não impede a submissão. A ocorrência foi comprovada com dados fictícios exclusivamente em localhost; não houve exposição de dados reais.

O comportamento corresponde ao método GET padrão de formulários HTML quando `method` é omitido. [HTML Standard — form submission method](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-method).

**Evidência:** [nojs-submit.json](../audit/b2b-final/nojs-submit.json).

**Critério de resolução — atendido:** sem JavaScript não há campos nem submit nativo capazes de incluir dados na URL. O fallback contém links diretos para WhatsApp e telefone configurados no projeto e funciona por teclado. Com JavaScript, o formulário e a revisão da mensagem foram preservados. A verificação automatizada adicional cobriu as quatro rotas, também com o bundle bloqueado; resultados na seção 12.

## 3. Achados P2 — melhorias posteriores

### P2-01 — Campos obrigatórios aceitam somente espaços

**Novo.** Nome e município com três espaços passam pela validação nativa. O código aplica `trim()` ao montar a mensagem e descarta esses campos, resultando apenas em `Hola, quiero solicitar un presupuesto de limpieza para empresas.`. O usuário ainda precisa confirmar o envio, mas a promessa de dois campos obrigatórios não é cumprida. Validar conteúdo após remover espaços. Evidência: `whitespaceOnly` em [edge-cases.json](../audit/b2b-final/edge-cases.json); [BusinessQuoteForm.tsx:21](../src/components/BusinessQuoteForm.tsx#L21).

### P2-02 — Recorrência pode ficar mais explícita no primeiro contato de oficinas

**Novo, editorial.** O hero de oficinas esclarece serviço, público, localização e orçamento; a frequência diária/semanal aparece mais abaixo. No teste de leitura rápida, recorrência fica explícita no hub e em logística e implícita em “mantenimiento” nas naves. Uma frase curta sobre serviço periódico no hero de oficinas melhoraria a qualificação B2B. Há também repetição legítima, mas extensa, de processo, vantagens, pessoal, cobertura e orçamento entre as páginas. Reduzir texto compartilhado é uma melhoria editorial, não evidência de doorway ou penalização.

### P2-03 — Menu móvel sem nome acessível; alvos secundários pequenos

**Misto:** o botão de menu sem `aria-label` já existe em [Header.tsx:125](../src/components/Header.tsx#L125). Em 375×812, mediu aproximadamente **35×35 px**. O novo WhatsApp flutuante mede cerca de **107×42 px**; os CTAs principais do hero medem **51 px de altura** e funcionam bem. O menu abriu/fechou, mas convém nomear o controle e ampliar os alvos secundários. A referência de 44 px aqui é uma recomendação de conforto de toque, não uma declaração de falha contra um padrão formal auditado.

### P2-04 — Metadados sociais duplicados nas entradas diretas de páginas antigas

**Preexistente, reproduzido em HEAD.** Home e sofás têm duas ocorrências de cada tag OG/Twitter testada após o React montar. As páginas antigas da amostra também repetem `geo.region` e `geo.placename`. `SEOMeta.tsx` remove as versões estáticas de title, description, robots e canonical, mas não limpa genericamente todas as tags sociais das entradas antigas. As quatro B2B não apresentam esse problema, e a passagem pelo `BusinessSEO` remove as tags sociais estáticas antes de continuar a sequência SPA. Não é metadado de Service B2B vazando para a página seguinte.

### P2-05 — Prerender antigo ainda é somente de metadados

**Preexistente, sem regressão.** Home, sofás e as três páginas de comunidades da amostra têm zero H1 e nenhum conteúdo principal no HTML sem JavaScript. Esse comportamento vem do fluxo anterior de `prerender-seo.mjs`; as quatro novas B2B têm conteúdo real no HTML. A evolução do prerender das páginas antigas deve ser tratada separadamente, preservando seu SEO.

### P2-06 — Bundle principal permanece grande

**Preexistente, com incremento B2B.** HEAD: aproximadamente **1.054,04 kB / 281,55 kB gzip**. Atual: **1.094,96 kB / 291,58 kB gzip**, incremento de cerca de **10,03 kB gzip**. Vite mantém o aviso de chunk acima de 500 kB; Browserslist também avisa sobre base antiga. Avaliar carregamento por rota e desempenho em rede móvel real. Não houve CLS inicial observado nas quatro páginas no ensaio local, mas isso não substitui medição em campo.

Os 11 erros de lint conhecidos estão documentados na seção 10; não foram contados como novos achados B2B nem promovidos a P1.

## 4. SEO técnico das quatro URLs

Para cada página, a entrada direta foi inspecionada **com e sem JavaScript**. Os metadados e JSON-LD de ambas as versões coincidem.

| URL | HTTP | Title / description / robots / canonical / H1 | HTML sem JS após correção | Sitemap |
|---|---:|---|---:|---|
| `/limpieza-para-empresas` | 200 | **1 / 1 / 1 / 1 / 1** | Conteúdo do serviço + fallback seguro | PASS |
| `/limpieza-para-empresas/oficinas` | 200 | **1 / 1 / 1 / 1 / 1** | Conteúdo do serviço + fallback seguro | PASS |
| `/limpieza-para-empresas/naves-industriales` | 200 | **1 / 1 / 1 / 1 / 1** | Conteúdo do serviço + fallback seguro | PASS |
| `/limpieza-para-empresas/centros-logisticos` | 200 | **1 / 1 / 1 / 1 / 1** | Conteúdo do serviço + fallback seguro | PASS |

As respostas dos FAQ recolhidos continuam presentes no HTML e podem ser abertas sem JavaScript. A correção altera apenas a apresentação do formulário/fallback, preservando conteúdo do serviço e SEO.

**PASS nas quatro páginas:**

- Canonical autorreferente `https://superclim.es` + caminho, sem barra final.
- Robots `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`.
- Titles e descriptions distintos; apenas um H1.
- Uma ocorrência de `og:title`, `og:description`, `og:url`, `og:type`, `og:locale`, `og:image` e das quatro tags Twitter verificadas.
- `og:url` corresponde ao canonical; tipo `website`, locale `es_ES`, imagem social do logo existente.
- Nenhuma duplicação de outras tags `meta[name]`/`meta[property]` na entrada direta B2B.
- Hero, tarefas, links, FAQ, CTA e fallback de contato presentes no prerender; não há dependência exclusiva de JS para ler o serviço. O formulário com campos só é apresentado com JavaScript ativo.
- Breadcrumb do hub: Inicio → Limpieza para empresas. Nas filhas: Inicio → Limpieza para empresas → serviço específico.
- 29 destinos internos distintos extraídos da amostra responderam 200; todas as relações hub/filhas/comunidades existem.
- Sitemap mantém 46 rotas anteriores e adiciona somente as quatro previstas. Robots permite rastreamento dessas rotas.

### Metadata final observada

**`/limpieza-para-empresas`**

- Title: Empresa de Limpieza para Empresas en Sabadell y Barcelona | Superclim
- Description: Servicio profesional de limpieza para empresas, oficinas, naves industriales y centros logísticos en Sabadell, Vallès Occidental y Barcelona. Solicita presupuesto.
- H1: Empresa de limpieza para empresas en Sabadell y Barcelona
- Canonical: `https://superclim.es/limpieza-para-empresas`

**`/limpieza-para-empresas/oficinas`**

- Title: Limpieza de Oficinas en Sabadell y Barcelona | Superclim
- Description: Limpieza de oficinas, despachos y espacios de trabajo en Sabadell y Barcelona. Planes diarios o semanales y horarios adaptados. Solicita presupuesto.
- H1: Limpieza profesional de oficinas en Sabadell y Barcelona
- Canonical: `https://superclim.es/limpieza-para-empresas/oficinas`

**`/limpieza-para-empresas/naves-industriales`**

- Title: Limpieza de Naves Industriales en Sabadell y Barcelona | Superclim
- Description: Limpieza de naves industriales en Sabadell y Barcelona: pavimentos, pasillos, vestuarios y zonas comunes. Planificación según la actividad de tu instalación.
- H1: Limpieza de naves industriales en Sabadell y Barcelona
- Canonical: `https://superclim.es/limpieza-para-empresas/naves-industriales`

**`/limpieza-para-empresas/centros-logisticos`**

- Title: Limpieza de Almacenes y Centros Logísticos en Barcelona | Superclim
- Description: Limpieza recurrente de almacenes y centros logísticos en Barcelona y Vallès Occidental. Picking, pasillos y áreas comunes con horarios adaptados a la operativa.
- H1: Limpieza de almacenes y centros logísticos
- Canonical: `https://superclim.es/limpieza-para-empresas/centros-logisticos`

## 5. Sequência SPA completa

Realizada por links internos, mantendo o mesmo documento: **uma única requisição de navegação de documento durante toda a sequência**. Após cada clique, aguardou-se a mudança da URL e a renderização final. A comparação de schemas com a entrada direta foi idêntica em todas as etapas.

| Etapa | Destino | Title / description / robots / canonical / H1 | JSON-LD no DOM final | Resíduo da página anterior |
|---:|---|---|---|---|
| 0 | `/` | 1 / 1 / 1 / 1 / 1 | LocalBusiness, WebSite | Não |
| 1 | `/limpieza-para-empresas` | 1 / 1 / 1 / 1 / 1 | Service, Organization, BreadcrumbList | Não |
| 2 | `/limpieza-para-empresas/oficinas` | 1 / 1 / 1 / 1 / 1 | Service, BreadcrumbList | Não |
| 3 | `/limpieza-para-empresas/naves-industriales` | 1 / 1 / 1 / 1 / 1 | Service, BreadcrumbList | Não |
| 4 | `/limpieza-para-empresas/centros-logisticos` | 1 / 1 / 1 / 1 / 1 | Service, BreadcrumbList | Não |
| 5 | `/limpieza-de-comunidades` | 1 / 1 / 1 / 1 / 1 | Service, BreadcrumbList | Não |
| 6 | `/limpieza-de-sofas` | 1 / 1 / 1 / 1 / 1 | Service, BreadcrumbList | Não |
| 7 | `/` | 1 / 1 / 1 / 1 / 1 | LocalBusiness, WebSite | Não |

- O hub perde seu `Organization` e `OfferCatalog` ao entrar nas filhas; fica somente o Service específico e o breadcrumb.
- Comunidades recebe seu próprio Service e breadcrumb; não permanecem os de logística.
- Sofás recebe seu Service; a home final volta a `LocalBusiness` + `WebSite`, sem Service nem breadcrumb B2B.
- Robots idêntico entre páginas é o valor correto compartilhado, não evidência de uma tag antiga: permaneceu uma só ocorrência.
- `SEOMeta.tsx` e `data-seo-managed` continuam preservando as tags React e removendo as contrapartes estáticas de title/description/robots/canonical. `BusinessSEO.tsx` amplia essa limpeza na entrada B2B.
- Também foi testada entrada direta em Oficinas → Comunidades → Sofás → Home, com o mesmo resultado para as tags críticas.
- A ressalva de P2-04 diz respeito às duplicações antigas na entrada direta da home/sofás e às tags geo; não houve transporte indevido de title, description, canonical, Service ou breadcrumbs entre rotas.

Evidências por etapa: `audit/b2b-final/spa-0-home.json` até `spa-7-home.json`; sequência alternativa em `spaB2BEntry` de [evidence.json](../audit/b2b-final/evidence.json).

## 6. Structured data

**PASS na validação local**, com as seguintes distinções:

- Todo JSON-LD das quatro páginas foi parseado sem erro e comparado entre HTML inicial e DOM final.
- Hub: um Service principal, um Organization e um BreadcrumbList. O Service contém um OfferCatalog com cinco ofertas: oficinas, naves, almacenes/centros logísticos, comunidades e almacenes.
- Há cinco objetos Service **aninhados nas ofertas**, além do Service principal. Isso é estrutura de catálogo, não duplicação acidental do Service da página. Almacenes e a categoria combinada de logística apontam para a mesma página de logística, conforme a arquitetura de uma única URL para ambos.
- Filhas: um Service principal específico por página e um BreadcrumbList, sem catálogo herdado nem LocalBusiness adicional.
- Todos usam o provider `@id = https://superclim.es/limpieza-para-empresas#organization`. Esse identificador é definido no hub como **Superclim Servicios**, com dados de contato existentes. Nas filhas é uma referência entre documentos, não uma nova entidade empresarial nem um `provider.name` local. Para consumidores que só leem uma página isolada, o nome não está materializado ali; isso não torna a referência JSON-LD inválida.
- `areaServed`: Sabadell, Vallès Occidental, Terrassa, Sant Quirze, Barberà, Cerdanyola, Sant Cugat, Rubí e Barcelona; coerente com o briefing e a cobertura já configurada.
- URLs dos Services correspondem aos canonicals. Não foram encontrados preços, AggregateRating, Review, certificações ou dados de clientes novos.
- A entidade LocalBusiness anterior da home e os schemas de comunidades/sofás são idênticos aos de HEAD. Os ratings existentes não foram criados pela vertical; sua veracidade externa não foi reatestada nesta auditoria.

As propriedades utilizadas correspondem aos tipos previstos para [Service](https://schema.org/Service) e [provider](https://schema.org/provider). A ausência de `item` no último breadcrumb é permitida pelo Google; os elementos intermediários têm URL e posições corretas. [Google Search Central — Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb).

Não foi usado o Rich Results Test hospedado nem uma inspeção de URL no Search Console, pois esta auditoria é do build local não publicado. O resultado acima é validação de sintaxe, conteúdo, relações e compatibilidade das propriedades, não promessa de rich results.

## 7. Canibalização e conteúdo

| Página | Foco observado | Avaliação |
|---|---|---|
| Home | Title começa com Superclim Servicios; H1 “Bienvenido a Superclim Barcelona”; serviços domésticos principais e comunidades mantidos | PASS |
| Sofás | Title e H1 “Limpieza de Sofás Profesional a Domicilio” | PASS |
| Comunidades | Comunidades no H1/title; escaleras, portales e zonas comuns no conteúdo | PASS |
| Hub B2B | Empresa de limpieza para empresas, organização e manutenção de centros de trabalho | PASS |
| Oficinas | Despachos, escritorios, salas, recepción, office e horários da jornada | PASS |
| Naves | Pavimentos, zonas produtivas, poeira, talleres e limites da intervenção | PASS |
| Logística | Picking, mercancía, circulación, muelles, turnos e áreas de apoio | PASS |

Existe sobreposição natural do termo amplo “empresa de limpieza” entre home e hub, mas o title da home é de marca e o hub especifica empresas. Não há title ou H1 idêntico entre as sete páginas; não há evidência on-page de competição desnecessária que justifique mudar o SEO atual. Não é possível confirmar canibalização efetiva de consultas/rankings sem dados de busca.

**Leitura editorial:** conteúdo das filhas é específico, não apenas troca de palavra-chave. Não foi identificado keyword stuffing evidente. Termos geográficos aparecem em pontos naturais e na lista de cobertura. As seções compartilhadas têm repetição e linguagem cautelosa (“acordamos”, “valoramos”, “planificación”), conforme P2-02; isso é uma observação de estilo, sem inferência sobre autoria.

**Afirmações:** não encontrei clientes fictícios, certificações, garantias absolutas, contratos ou estatísticas inventadas no conteúdo novo. “Personal propio”, organização, supervisão e substituições condicionais constam do briefing fornecido; não foram tratados como fatos confirmados por uma fonte externa adicional. O slogan “Líderes…” do footer é anterior à vertical, foi preservado e também não teve comprovação externa nesta auditoria.

**Linguagem de cessão:** zero ocorrências de `prestamista`, `alquiler de trabajadores`, `cesión de trabajadores`, `personal cedido` e `mano de obra alquilada` no conteúdo B2B auditado. A oferta é de serviço de limpeza organizado pela Superclim.

## 8. Conversão e mobile

### Leitura rápida de compras/facilities

- O serviço e a localização ficam claros no H1/hero das quatro páginas.
- Público empresarial é explícito no hub e em oficinas; naves e logística especificam diretamente as instalações atendidas.
- Recorrência é explícita no hero do hub/logística, indicada como manutenção nas naves e precisa ficar mais direta em oficinas (P2-02).
- “Solicitar presupuesto” e WhatsApp ficam no primeiro viewport em todas as quatro páginas, tanto em 1440×1000 quanto em 375×812.

### Formulário com JavaScript — PASS nas quatro páginas

Todos os 10 campos solicitados foram preenchidos. A mensagem manteve nome, empresa, telefone, email, município, área, horário, tipo, frequência e mensagem, incluindo acentos, `&`, `+`, `< >` e quebra de linha. Destinatário `/34624529442` corresponde ao `businessConfig`; host `wa.me`.

- Tipo preselecionado corretamente em cada filha.
- Formulário vazio e email inválido rejeitados.
- Link para revisar WhatsApp criado, sem envio automático.
- Mensagem explícita de que a solicitação ainda não foi enviada.
- Alterar um campo invalida o link anterior.
- P2-01 (espaços nos campos obrigatórios) permanece sem alteração. P1-01 foi resolvido: sem JavaScript há apenas fallback seguro, não um formulário nativo.

### Mobile 375×812 — PASS de layout, com P2 de acessibilidade

Hero, cards, headings, campos, CTA e footer foram inspecionados em screenshots. Não houve overflow horizontal ou elemento do conteúdo ultrapassando lateralmente a viewport. Não foram observados textos truncados por largura. O menu abriu e fechou nas quatro páginas. O banner de cookies de visitante novo foi testado e dispensado por “Rechazar”.

Os CTAs principais têm 51 px de altura no mobile; WhatsApp flutuante permaneceu visível e clicável. A âncora de orçamento termina cerca de 84 px abaixo do topo, respeitando o header, após concluir o scroll suave. As capturas imediatas durante scroll não foram usadas para diagnosticar posicionamento final.

O observador de layout-shift registrou **CLS inicial 0** nas quatro páginas no ensaio local, sem rede móvel simulada e com requisições externas bloqueadas. Isso não equivale a Core Web Vitals de usuários reais.

| Página | Hero 375×812 | Página completa | Desktop |
|---|---|---|
| limpieza-para-empresas | [Hero](../audit/b2b-final/limpieza-para-empresas-375-hero.png) | [Completa](../audit/b2b-final/limpieza-para-empresas-375-full.png) | [Desktop](../audit/b2b-final/limpieza-para-empresas-1440-hero.png) |
| oficinas | [Hero](../audit/b2b-final/limpieza-para-empresas--oficinas-375-hero.png) | [Completa](../audit/b2b-final/limpieza-para-empresas--oficinas-375-full.png) | [Desktop](../audit/b2b-final/limpieza-para-empresas--oficinas-1440-hero.png) |
| naves-industriales | [Hero](../audit/b2b-final/limpieza-para-empresas--naves-industriales-375-hero.png) | [Completa](../audit/b2b-final/limpieza-para-empresas--naves-industriales-375-full.png) | [Desktop](../audit/b2b-final/limpieza-para-empresas--naves-industriales-1440-hero.png) |
| centros-logisticos | [Hero](../audit/b2b-final/limpieza-para-empresas--centros-logisticos-375-hero.png) | [Completa](../audit/b2b-final/limpieza-para-empresas--centros-logisticos-375-full.png) | [Desktop](../audit/b2b-final/limpieza-para-empresas--centros-logisticos-1440-hero.png) |

[Formulário preparado no mobile](../audit/b2b-final/limpieza-para-empresas--centros-logisticos-375-prepared.png) · [Destino da âncora após scroll](../audit/b2b-final/375-quote-settled.png) · [Visitante sem consentimento prévio](../audit/b2b-final/fresh-cookie-375.png).

## 9. Regressão

**50/50 HTTP 200** e **50/50 com exatamente um H1 após renderização**. Nenhum erro JavaScript foi registrado na varredura. O teste não se limitou a aceitar o status 200 de um fallback SPA.

Comparação profunda com HEAD:

| Rota | Metadata | H1 | JSON-LD | Conteúdo |
|---|---|---|---|---|
| `/` | Idêntica | Idêntico | Idêntico | Somente adição esperada do bloco B2B; texto anterior sem remoção |
| `/limpieza-de-sofas` | Idêntica | Idêntico | Idêntico | Arquivo de serviço sem alteração; página renderiza normalmente |
| `/limpieza-de-comunidades` | Idêntica | Idêntico | Idêntico | Texto de main idêntico |
| `/limpieza-de-comunidades/sabadell` | Idêntica | Idêntico | Idêntico | Texto de main idêntico |
| `/limpieza-de-comunidades/terrassa` | Idêntica | Idêntico | Idêntico | Texto de main idêntico |

A página antiga de sofás não usa o landmark `<main>`; por isso o coletor registra `mainText` vazio nessa rota mesmo com JS. Isso não foi confundido com página vazia: H1, metadados e Service foram inspecionados, e o arquivo de implementação permanece igual a HEAD.

As limitações preexistentes de prerender/metadata foram mantidas, não escondidas como PASS absoluto. O vínculo novo no footer é a alteração de navegação esperada nas páginas antigas.

## 10. Build, testes e lint

- **`npm run build`: exit 0.** TypeScript, Vite e prerender de 50 rotas concluídos.
- **`npm run test:b2b`: 2/2 PASS.**
- **`npm run test:gtm`: 4/4 PASS.**
- A suíte existente continua com seis testes. A validação automatizada adicional específica do P1, descrita na seção 12, confirmou a ausência de formulário nativo sem JavaScript e preservação do fluxo interativo.

### A) Lint preexistente — 11 erros

Executado `npm run lint` tanto na branch atual quanto na cópia limpa de HEAD. Depois de normalizar caminhos absolutos e espaços de alinhamento, os relatórios são **idênticos**:

- `WhatsAppButton.tsx`: dois `no-explicit-any`.
- `ui/badge.tsx`, `button-group.tsx`, `button.tsx`, `form.tsx`, `navigation-menu.tsx`, `sidebar.tsx`, `toggle.tsx`: sete `react-refresh/only-export-components`.
- `ui/sidebar.tsx`: um `react-hooks/purity` (`Math.random` durante render).
- `Footer.tsx`: um `no-unused-vars` (`scrollToSection`).

### B) Lint introduzido pela vertical — **ZERO**

Nenhum diagnóstico adicional. Não foram alteradas regras de lint nem aplicadas correções para esconder os erros antigos.

Logs: [build](../audit/b2b-final/b2b-final-build.log), [testes](../audit/b2b-final/b2b-final-tests.log), [lint atual](../audit/b2b-final/b2b-final-lint.log), [lint HEAD](../audit/b2b-final/b2b-baseline-lint.log), [build HEAD](../audit/b2b-final/b2b-baseline-build.log).

## 11. Inventário HTTP/renderização

| URL do sitemap | HTTP | H1 renderizado |
|---|---:|---:|
| `/` | 200 | 1 |
| `/servicios` | 200 | 1 |
| `/limpieza-de-sofas` | 200 | 1 |
| `/limpieza-de-sofas/limpieza-de-sofas-a-domicilio` | 200 | 1 |
| `/limpieza-de-sofas/limpieza-de-sillones` | 200 | 1 |
| `/limpieza-de-alfombras` | 200 | 1 |
| `/mas-servicios` | 200 | 1 |
| `/impermeabilizacion-de-sofas` | 200 | 1 |
| `/quienes-somos` | 200 | 1 |
| `/contacto` | 200 | 1 |
| `/restauracion-de-alfombras` | 200 | 1 |
| `/limpieza-de-muebles-en-cuero` | 200 | 1 |
| `/servicios/limpieza-tapiceria-coche-sabadell` | 200 | 1 |
| `/limpieza-de-comunidades` | 200 | 1 |
| `/limpieza-de-comunidades/sabadell` | 200 | 1 |
| `/limpieza-de-comunidades/terrassa` | 200 | 1 |
| `/limpieza-de-comunidades/sant-quirze` | 200 | 1 |
| `/limpieza-de-comunidades/sant-cugat` | 200 | 1 |
| `/limpieza-de-comunidades/castellar-del-valles` | 200 | 1 |
| `/limpieza-de-comunidades/barbera-del-valles` | 200 | 1 |
| `/servicios/limpieza-de-sofas-barcelona` | 200 | 1 |
| `/servicios/limpieza-de-sofa-sabadell` | 200 | 1 |
| `/servicios/limpieza-de-sofa-cerdanyola` | 200 | 1 |
| `/servicios/limpieza-de-sofas-terrassa` | 200 | 1 |
| `/servicios/limpieza-de-sofas-sant-cugat` | 200 | 1 |
| `/servicios/limpieza-de-sofas-barbera-del-valles` | 200 | 1 |
| `/servicios/limpieza-de-sofas-en-sant-quirze` | 200 | 1 |
| `/mas-servicios/limpieza-de-colchones-sabadell` | 200 | 1 |
| `/mas-servicios/limpieza-de-colchones-barcelona` | 200 | 1 |
| `/mas-servicios/limpieza-de-colchones-castellar-del-valles` | 200 | 1 |
| `/mas-servicios/limpieza-de-colchones-cerdanyola` | 200 | 1 |
| `/mas-servicios/limpieza-de-colchones-terrassa` | 200 | 1 |
| `/mas-servicios/limpieza-de-colchones-sant-cugat-del-valles` | 200 | 1 |
| `/mas-servicios/limpieza-de-colchones-sant-quirze-del-valles` | 200 | 1 |
| `/limpieza-de-alfombras/sabadell` | 200 | 1 |
| `/limpieza-de-alfombras/barcelona` | 200 | 1 |
| `/limpieza-de-alfombras/sant-cugat` | 200 | 1 |
| `/limpieza-de-alfombras/sant-quirze` | 200 | 1 |
| `/limpieza-de-alfombras/cerdanyola` | 200 | 1 |
| `/limpieza-de-alfombras/terrassa` | 200 | 1 |
| `/limpieza-de-alfombras/barbera-del-valles` | 200 | 1 |
| `/limpieza-de-alfombras/castellar-del-valles` | 200 | 1 |
| `/limpieza-de-alfombras/lavado-de-alfombras-barcelona` | 200 | 1 |
| `/politica-de-privacidad` | 200 | 1 |
| `/politica-de-cookies` | 200 | 1 |
| `/terminos-y-condiciones` | 200 | 1 |
| `/limpieza-para-empresas` | 200 | 1 |
| `/limpieza-para-empresas/oficinas` | 200 | 1 |
| `/limpieza-para-empresas/naves-industriales` | 200 | 1 |
| `/limpieza-para-empresas/centros-logisticos` | 200 | 1 |

## 12. Correção P1 e revalidação autorizada

### Mudança aplicada

A única mudança de código nesta etapa foi em `src/components/BusinessQuoteForm.tsx`:

- `useSyncExternalStore` distingue a renderização do servidor da execução interativa no cliente.
- O HTML inicial contém orientação clara e CTA direto de WhatsApp/telefone, usando exclusivamente `businessConfig.whatsappNumber` e `businessConfig.phone`.
- Sem JavaScript — ou se o bundle não carregar — **não existem formulário, campos editáveis ou botão submit** nesse bloco. Portanto não há submissão nativa dos dados à URL da página.
- Com JavaScript, os dez campos, labels, required, handler de submit, mensagem e encoding anteriores permanecem. O envio ainda exige confirmação pelo usuário no WhatsApp.
- Não foi criado backend nem alterado o conteúdo SEO, metadata, schemas, URLs, páginas de serviços ou qualquer P2.

### Resultado da nova validação

**Build PASS · seis testes existentes PASS · zero novos erros de lint · 16 cenários adicionais PASS · 50/50 HTTP 200.**

| Rota | Sem JS 375×812 | Bundle bloqueado 375×812 | JS desktop | JS mobile 375×812 |
|---|---|---|---|---|
| `/limpieza-para-empresas` | PASS | PASS | PASS | PASS |
| `/limpieza-para-empresas/oficinas` | PASS | PASS | PASS | PASS |
| `/limpieza-para-empresas/naves-industriales` | PASS | PASS | PASS | PASS |
| `/limpieza-para-empresas/centros-logisticos` | PASS | PASS | PASS | PASS |

Em cada cenário foram comparados title, description, canonical, robots, H1 e JSON-LD com a evidência anterior: **idênticos**, com a contagem esperada. Nenhum erro JavaScript e nenhum overflow horizontal registrado.

Com JS foram testados os dez campos preenchidos, os dois campos required, labels associados, rejeição de formulário vazio, submit pela tecla Enter, acentos, `&`, `+`, `< >`, quebras de linha e invalidação do link após edição. O destino preparado continua sendo o WhatsApp configurado; o link de revisão foi ativado pelo teclado e sua tentativa de navegação foi interceptada localmente, antes de qualquer tráfego externo.

Sem JS e com script bloqueado foram confirmados zero formulários/campos/submit, orientação compreensível, WhatsApp e telefone configurados, ativação do CTA por Enter e permanência da URL da página sem query string. O fallback também foi inspecionado visualmente em 375×812.

Executados novamente `npm run build`, `npm run test:b2b` (2/2), `npm run test:gtm` (4/4) e `npm run lint`. O relatório do lint é idêntico ao da auditoria anterior: os mesmos 11 erros preexistentes, nenhum novo. O smoke test após a correção confirmou **50/50 HTTP 200** no build local.

### Evidências da correção

- [Validação dos 16 cenários e 50 URLs](../audit/b2b-p1/validation.json).
- [Fallback sem JavaScript em 375×812](../audit/b2b-p1/limpieza-para-empresas-no-js-375.png).
- [Script bloqueado em 375×812](../audit/b2b-p1/limpieza-para-empresas-blocked-script-375.png).
- [Formulário JS preparado no mobile](../audit/b2b-p1/limpieza-para-empresas-js-mobile-prepared.png).
- [Build](../audit/b2b-p1/build.log), [seis testes](../audit/b2b-p1/tests.log), [lint](../audit/b2b-p1/lint.log), [log da validação adicional](../audit/b2b-p1/validation.log).
- [Verificador usado na auditoria local](../audit/b2b-p1/verify.mjs).

### Escopo do commit

O commit autorizado fica restrito a **`src/components/BusinessQuoteForm.tsx` e `docs/b2b-final-audit.md`**. Ambos ainda eram arquivos não versionados; consequentemente aparecem como adições integrais no Git, embora nesta etapa a mudança de código tenha sido exclusivamente a proteção P1. Os demais arquivos da implementação B2B permanecem no working tree, fora desse commit. A aprovação técnica é do working tree completo testado; esse commit isolado não inclui toda a vertical.

As evidências locais não são incluídas no commit restrito. Não houve merge ou deploy.

## Conclusão

**P0: 0 · P1: 0 · P2: 6 (inalterados).**

**APROVADO PARA PRODUÇÃO — aguardando autorização.**

O formulário mantém o comportamento com JavaScript e oferece contato seguro quando JavaScript está indisponível. Build, seis testes existentes, verificação adicional do P1, metadata/schemas das quatro B2B e smoke test das 50 URLs passaram. Zero novos erros de lint. Nenhum P2 foi implementado.

As evidências e a reprodução do problema anterior permanecem nas seções históricas deste relatório para rastreabilidade; não representam uma falha ainda aberta.
