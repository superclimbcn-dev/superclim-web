# Sublote 03.1 — Oficinas / Sant Cugat

## Escopo e estado anterior

A página `/limpieza-para-empresas/oficinas` permanece responsável pela intenção regional de limpeza de oficinas e despachos. Antes, `officeCleaning.sections` tinha três cartões: “Puestos de trabajo y reuniones”, “Recepción y espacios compartidos” e “Office, cocina y aseos”. Sant Cugat já constava da cobertura B2B, mas não havia este cartão específico.

## Alteração aprovada

Acrescentado exclusivamente o quarto cartão, após “Office, cocina y aseos” e antes de “Otros servicios para tus instalaciones”. Os três cartões anteriores foram preservados integralmente. A renderização existente comporta o cartão; `BusinessPage.tsx` não foi alterado.

### Antes

Não existia quarto cartão.

### Depois — texto exato

**Servicio recurrente de oficinas en Sant Cugat**

Atendemos oficinas y despachos en Sant Cugat con un servicio de limpieza recurrente adaptado a cada instalación. Revisamos con la persona responsable los accesos, la ocupación y las prioridades: salas de reunión, aseos y áreas comunes pueden necesitar frecuencias distintas. Acordamos los horarios y el alcance del contrato; Superclim organiza el equipo, los turnos y la supervisión. Si hace falta conocer la instalación, acordamos una visita de valoración.

## Arquivos alterados

- `src/config/businessPages.ts`: um cartão em `officeCleaning.sections`.
- `scripts/business.test.mjs`: valida texto exato, ordem dos quatro cartões, posição antes dos serviços relacionados, visibilidade e ausência nas outras páginas B2B. Executa em desktop/mobile, com/sem JavaScript.
- `docs/b2b-regional-sublote-01.md`: este registro.

## Validação local — 19/09/2026

Baseline: build do HEAD anterior à edição, armazenado em `/tmp/superclim-031/dist-before`. Comparado ao build posterior à inclusão do cartão.

| Verificação | Resultado |
|---|---|
| `npx tsc -b` | PASS |
| `npm run build` | PASS; 50 rotas prerenderizadas |
| ESLint de `src/config/businessPages.ts` | PASS |
| ESLint de `scripts/business.test.mjs` | PASS; configuração temporária em memória com regras recomendadas JS e globals Node/browser, pois a configuração do projeto só aplica regras a TS/TSX |
| `git diff --check` | PASS |
| `node --test scripts/tag-manager.test.mjs scripts/regional-links.test.mjs scripts/business.test.mjs` | 9/9 PASS, incluindo 2 subtestes de viewport do Lote 01 |
| URLs do sitemap | 50/50 HTTP 200 sem seguir redirects no servidor local de validação |
| Metadata nas 50 páginas | Exatamente 1 title, description, robots e canonical no HTML inicial e DOM; canonical autorreferente |
| Comparação antes/depois nas 50 páginas | Title, description, robots, canonical, H1 e JSON-LD idênticos; inclui BreadcrumbList |
| Outras 49 páginas | Texto e links do DOM idênticos ao baseline |
| Formulário B2B | PASS em 4 páginas, desktop/mobile, com/sem JS; 10 campos, validação, encoding, nenhum GET de dados pessoais |
| Fallback sem JS | Links de contato funcionais; ausência de formulário nativo que possa submeter GET |
| CTAs, WhatsApp e telefone | Preservados; configuração, componente e destinos não alterados |
| Sitemap e robots | Bytes do build idênticos ao baseline; arquivos-fonte inalterados |
| Redirects | Configuração inalterada; 89 regras verificadas no servidor local de validação |
| 404 | 404 local e 404 no domínio de produção para caminho inexistente |
| SPA | 22 etapas por links existentes; metadata/schema iguais ao carregamento direto, sem resíduos |
| Mobile 375×812 | PASS: sem overflow, cartão visível, formulário e navegação por teclado/foco verificados pelos testes |

Evidências temporárias: `/tmp/superclim-031/tests.log`, `build.log`, `verification.log`, `50-urls.json`, `spa.json`, `redirects-local.json` e `404.json`. Não fazem parte da entrega. Artefatos e screenshots gerados pelos testes foram movidos para `/tmp/superclim-031/test-artifacts/b2b`, fora do repositório.

## Limites e riscos

A validação HTTP/redirects do build usa um servidor estático que aplica as regras de `vercel.json`; não substitui a validação de um futuro deploy na Vercel. O teste de 404 em produção apenas confirma que a produção atual preserva esse comportamento; este sublote não foi publicado.

O build mantém o aviso de tamanho de chunks; nenhuma otimização adicional foi feita. O quarto cartão ocupa outra linha no grid desktop existente. Em mobile mantém a sequência vertical, sem overflow.

Não houve nova URL, alteração de SEO técnico, schema, breadcrumbs, formulário, `businessCoverage`, `businessLinks`, páginas B2C ou demais páginas B2B. Nenhuma promessa de escala, equipe local permanente, certificação, garantia, visita gratuita/imediata ou cessão de pessoal foi acrescentada. A visita permanece condicional e o cliente contrata o serviço organizado pela Superclim.

## Estado de entrega

Implementação e validação local concluídas. Nenhum commit, push ou deploy realizado. Aguardando aprovação.
