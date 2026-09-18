# SEO regional — lote 01: arquitetura interna

Data: 18/09/2026. Base: `main`, commit `5ed42c347d83de9c733f46beb8bfb2f78c92a693`.

## Estado anterior e problema

- O catálogo de `/servicios` tinha oito cartões, sem entrada B2B. O hub `/limpieza-para-empresas` estava acessível nessa página pelo rodapé.
- `/quienes-somos` e `/contacto` não recebiam links das outras páginas no inventário de 50 URLs. Os links institucionais do rodapé apontavam para seções da Home.
- O site já tinha 50 URLs canônicas no sitemap. Este lote não cria páginas.

## Mudança realizada

Um nono cartão, com a mesma apresentação dos serviços existentes:

- Título do cartão: **Limpieza para Empresas**.
- Descrição: “Servicios profesionales de limpieza para empresas, oficinas, naves industriales y centros logísticos.”
- Link: **Ver servicios para empresas** → `/limpieza-para-empresas`, usando `businessConfig.urls.services.businessCleaning`.

Na introdução do catálogo, **Conoce nuestra empresa** → `/quienes-somos`, seguido de “y cómo trabajamos.”

No parágrafo do CTA existente, **Contáctanos** → `/contacto`. O texto restante, os botões de telefone e WhatsApp e seus destinos foram mantidos.

O título/H1 da página, metadata e schemas não foram modificados. Os cartões anteriores mantêm o texto “Saber Más”; apenas o novo cartão recebe um texto de link específico.

## Antes/depois dos links

| Destino | Antes em /servicios | Depois em /servicios |
| --- | --- | --- |
| /limpieza-para-empresas | Rodapé | Rodapé + cartão no catálogo |
| /quienes-somos | Ausente | Link contextual na introdução |
| /contacto | Ausente | Link contextual no CTA |

As duas páginas institucionais ganham a origem `/servicios`. O hub B2B ganha uma ligação no conteúdo, além do rodapé. Não foram adicionados links diretos para todas as filhas B2B.

## Arquivos do lote

1. `src/pages/services/ServicesPage.tsx` — única página de produção alterada.
2. `scripts/regional-links.test.mjs` — novo teste do aplicativo compilado.
3. `docs/regional-seo-lote-01.md` — este relatório.

Nenhuma alteração em package.json, dependências, Home, páginas locais, páginas B2B, SEOMeta.tsx, configuração SEO, rotas, canonicals, schemas, sitemap, robots.txt ou redirects.

## Testes executados

| Validação | Resultado |
| --- | --- |
| `npx tsc -b --pretty false` | PASS |
| `npm run build` | PASS; metadata gerada para 50 rotas |
| `node --test scripts/regional-links.test.mjs scripts/business.test.mjs scripts/tag-manager.test.mjs` | PASS: 9 registros de teste, zero falhas |
| Seis testes preexistentes (B2B + GTM) | 6/6 PASS |
| Novo teste do catálogo | PASS, com subtestes 1440×1000 e 375×812 |
| ESLint dos dois arquivos de código do lote | Zero erros e zero warnings |
| Lint global | 11 erros preexistentes; nenhum nos arquivos do lote |
| `git diff --check` e verificação dos novos arquivos | PASS |
| Smoke do build anterior e atual | 50/50 HTTP 200 em cada build |
| Metadata no HTML inicial e DOM das 50 páginas | Um title, description, robots e canonical; valores preservados |
| Canonical das 50 páginas | Autorreferente em `https://superclim.es` |
| H1 e JSON-LD no DOM das 50 páginas | Iguais ao build anterior; um H1 por página |
| SPA | 22 etapas sem resíduos/diferenças de metadata, H1 ou schemas |
| Sitemap e robots nos builds anterior/atual | Idênticos byte a byte |
| Arquivos SEO/rotas/redirects protegidos | Conteúdo igual ao HEAD, considerando os finais de linha do checkout |
| Redirects no servidor de teste local | 89/89 regras levam a destinos HTTP 200 |
| 404 | Resposta 404 no servidor estático de teste e confirmada em leitura na produção atual |

O total 9 do Node inclui os seis testes existentes, o teste pai do catálogo e seus dois subtestes de viewport.

### O que o novo teste verifica

- Links reais no DOM, fora de header/footer, com texto acessível e href correto.
- Cartão B2B na mesma seção dos serviços existentes.
- Resposta HTTP 200 direta dos três destinos, sem seguir redirects.
- Visibilidade, ausência de overflow horizontal e ativação por teclado com Enter.
- Navegação SPA, canonical do destino, H1 único e ausência de erros JavaScript.
- Requisições externas bloqueadas; nenhum envio de formulário ou mensagem.

Execução isolada: `npm run build` e depois `node --test scripts/regional-links.test.mjs`. Chrome pode ser indicado com `CHROME_PATH`; o teste também usa `/usr/bin/google-chrome` quando disponível, ou o Chromium do Playwright.

O ESLint atual não aplica o conjunto recomendado de regras aos arquivos `.mjs`. Além do comando habitual, o novo script foi validado programaticamente com `@eslint/js` recomendado e globals Node/browser, sem alterar a configuração do projeto.

### Comparação de regressão

Foi gerado um build limpo antes da edição e preservado fora do repositório. O build modificado foi comparado a ele nas 50 páginas, no HTML inicial e no DOM após JavaScript. Os testes de SPA percorrem o catálogo, B2B, comunidades, sofás e páginas regionais, incluindo a sequência Home → B2B → Oficinas → Naves → Logística → Comunidades → Sofás → Home. Cada etapa compara o snapshot com o carregamento direto e confirma a continuidade do documento.

O teste dos três links usa Vite preview. A comparação das 50 URLs usa um servidor estático temporário que resolve os arquivos HTML sem extensão e aplica as regras de `vercel.json`. Esse servidor é uma simulação local, **não uma execução da plataforma Vercel**. O Vite preview isolado não foi usado como prova de status 404 ou redirects da hospedagem. A preservação de produção é sustentada pela configuração inalterada e pela consulta real, somente em leitura, a `https://superclim.es/lote01-missing-404`, que retornou 404. Não houve deploy do lote.

## Riscos e limites

- As 46 páginas anteriores à vertical B2B continuam dependendo de JavaScript para o corpo/H1 e schemas; este lote não amplia prerender.
- O menu da Home continua apontando para `/#services`, não diretamente para `/servicios`. A auditoria identificou um acesso ao catálogo pela página de tapicería de coche. Não foi alterada a Home para adicionar outro caminho neste lote.
- O build mantém o aviso existente de bundle maior que 500 kB. O lint global mantém seus 11 erros anteriores.
- Adicionar links melhora a navegação e descoberta, mas não comprova ganho de posição, cliques ou indexação. Não foram inferidos resultados do Search Console.
- Nenhuma intervenção nos demais achados: alfombras Barcelona, colchones, conteúdo local, certificados, garantias ou schemas.

## Evidências e resultado

Evidências de execução fora do Git: `/tmp/superclim-lote01/`.

- `build-before.log`, `build-after.log`, `tests.log`, `lint-global.log`.
- `50-urls.json`: snapshots antes/depois e HTML inicial das 50 rotas.
- `spa.json`: 22 etapas aprovadas.
- `redirects-local.json`, `404.json`, `protected-files.json`.
- `test-artifacts/`: artefatos gerados pelos testes B2B existentes, retirados do repositório para manter o lote limitado aos três arquivos.

**Resultado: lote implementado e validado localmente, pronto para revisão. Sem commit, push ou deploy. Aguardando aprovação.**
