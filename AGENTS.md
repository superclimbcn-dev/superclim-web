# AGENTS.md — Superclim Webapp

This file contains essential context for AI coding agents working on this project. Read it before making any changes.

---

## Project Overview

This is the marketing website for **Superclim**, a professional upholstery and carpet cleaning business based in Sabadell, Barcelona, Spain. The site is a React single-page application (SPA) with a multi-page service section, built to generate leads via contact forms, WhatsApp, and phone calls.

- **Primary language of content**: Spanish (es)
- **Supported locales**: Spanish (`es`), Catalan (`ca`), English (`en`)
- **Target region**: Barcelona metropolitan area (Sabadell, Terrassa, Barcelona, Cerdanyola, Sant Cugat, Rubí)

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19.2 + TypeScript 5.9 |
| Build Tool | Vite 7.2 |
| Styling | Tailwind CSS 3.4 |
| Component Library | shadcn/ui (New York style, ~50 components) |
| Animation | Framer Motion |
| Routing | react-router-dom (BrowserRouter) |
| i18n | i18next + react-i18next + i18next-browser-languagedetector |
| Icons | Lucide React |
| Forms | React Hook Form + Zod (via `@hookform/resolvers`) |
| Charts | Recharts |
| Carousel | Embla Carousel |
| Toasts | Sonner |

---

## Build, Dev, and Lint Commands

All commands run from the project root:

```bash
# Development server
npm run dev

# Production build (type-checks first, then Vite builds)
npm run build

# Preview production build locally
npm run preview

# Lint with ESLint
npm run lint
```

The build output goes to `dist/`. The Vite base path is set to `'./'` (relative), so the app can be deployed to any static host without path assumptions.

---

## Project Structure

```
src/
  components/        Reusable components
    ui/              shadcn/ui primitives (Button, Card, Dialog, etc.)
    Header.tsx       Fixed nav header with scroll-aware styling
    LanguageSwitcher.tsx
    SchemaOrg.tsx    Injects JSON-LD structured data for SEO
    WhatsAppButton.tsx Floating CTA with tooltip
  sections/          Landing-page sections rendered on HomePage
    Hero.tsx
    Services.tsx
    BeforeAfter.tsx
    Calculator.tsx
    WhyUs.tsx
    Testimonials.tsx
    Locations.tsx
    FAQ.tsx
    Contact.tsx
    Footer.tsx
  pages/services/    Individual service detail pages (routed)
    Impermeabilizacion.tsx
    LimpiezaSofas.tsx
    LimpiezaAlfombras.tsx
    LimpiezaColchones.tsx
    LimpiezaSillones.tsx
    ServicioDomicilio.tsx
  hooks/             Custom React hooks
    use-mobile.ts
    usePriceCalculator.ts
    useSchemaOrg.ts
    useScrollAnimation.ts
  config/            Business constants
    business.ts      Phone, address, hours, URLs, reviews, etc.
  types/             Shared TypeScript interfaces
    index.ts
  lib/               Utility functions
    utils.ts         `cn()` helper (clsx + tailwind-merge)
  i18n/              Internationalization setup
    index.ts         i18next init with language detector
    locales/
      es.json
      ca.json
      en.json
  App.tsx            Root component with routing
  main.tsx           Entry point (StrictMode)
  index.css          Global styles + Tailwind directives + CSS variables
```

---

## Code Style & Conventions

### Imports & Aliases
- Always use the `@/` path alias for project imports (e.g., `@/components/ui/button`, `@/config/business`).
- Do NOT use relative paths like `../../components` when `@/` is available.

### Component Exports
- **Landing-page sections** (`src/sections/*`): Use **named exports** (e.g., `export function Hero()`).
- **Service pages** (`src/pages/services/*`): Use **default exports** (e.g., `export default function LimpiezaSofas()`).
- **UI primitives** (`src/components/ui/*`): Use named exports matching the component name.

### Styling
- Tailwind CSS only. No CSS modules or styled-components.
- Use the `cn()` utility from `@/lib/utils` whenever conditional or merged classes are needed.
- The project uses CSS variables for theming (`--background`, `--primary`, etc.) defined in `src/index.css`.
- Dark mode class is configured (`darkMode: ["class"]`) but the site is primarily light-mode branded in emerald/teal gradients.

### Animation Patterns
- Most sections use `framer-motion` for entrance animations.
- The custom hook `useScrollAnimation` wraps `IntersectionObserver`. Typical usage:
  ```tsx
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  <motion.div ref={ref} animate={isVisible ? { opacity: 1, y: 0 } : {}} ... />
  ```
- On the home page, `Hero` uses `initial`/`animate` directly (auto-plays on mount).
- Service pages often use `whileInView` with `viewport={{ once: true }}`.

### i18n Patterns
- All user-facing strings on the **landing page** must go through `react-i18next`:
  ```tsx
  const { t } = useTranslation();
  <h1>{t('hero.title')}</h1>
  ```
- Keys are nested JSON objects in `src/i18n/locales/*.json`.
- Fallback language is `es`. Detection order: `localStorage` → `navigator` → `htmlTag`.
- **Service pages** (`pages/services/*`) currently contain hardcoded Spanish copy. If editing them, keep Spanish as the default; do not break existing SEO content.

### Business Config
- All business-specific constants (phone, WhatsApp number, address, hours, URLs, review counts) live in `src/config/business.ts`.
- **Never hardcode** phone numbers, addresses, or URLs in components—always import from `businessConfig`.

---

## TypeScript Configuration

- `tsconfig.json` uses project references (`tsconfig.app.json` + `tsconfig.node.json`).
- Key compiler flags:
  - `strict: true`
  - `verbatimModuleSyntax: true` — use `import type { ... }` for type-only imports
  - `noUnusedParameters: true`
  - `noUnusedLocals: false`
  - `allowImportingTsExtensions: true`
  - `noEmit: true`

---

## ESLint & Linting

- Flat config (`eslint.config.js`) using:
  - `@eslint/js`
  - `typescript-eslint` (recommended)
  - `eslint-plugin-react-hooks` (recommended)
  - `eslint-plugin-react-refresh` (Vite preset)
- `dist/` is ignored.
- No prettier config is present; rely on ESLint and consistent manual formatting.

---

## Routing

Routes are defined in `src/App.tsx` inside `BrowserRouter`:

- `/` → HomePage (all sections stacked)
- `/impermeabilizacion-de-sofas` → Impermeabilizacion
- `/limpieza-de-sofas/` → LimpiezaSofas
- `/limpieza-de-alfombras/` → LimpiezaAlfombras
- `/mas-servicios/` → LimpiezaColchones
- `/limpieza-de-sofas/limpieza-de-sillones` → LimpiezaSillones
- `/limpieza-de-sofas/limpieza-de-sofas-a-domicilio` → ServicioDomicilio

Paths are referenced via `businessConfig.urls.services` to avoid hardcoding.

---

## SEO & Structured Data

- `SchemaOrg.tsx` injects JSON-LD scripts for:
  - `LocalBusiness` (name, address, geo, opening hours, aggregate rating)
  - `FAQPage`
  - `BreadcrumbList`
  - `WebSite`
- It only renders on the home page (`HomePage`).
- The `useSchemaOrg` hook can generate additional `Service` schemas if needed on other pages.

---

## Testing

**There is currently no test framework configured** (no Vitest, Jest, or Playwright). If you add tests, install the runner as a dev dependency and update `package.json` scripts accordingly.

---

## Deployment

- Static build (`dist/`). No server-side runtime required.
- Because `base: './'` is set in `vite.config.ts`, assets use relative paths.
- Favicon and `site.webmanifest` are in `public/`.

---

## Security Considerations

- The contact form in `Contact.tsx` is **frontend-only** (no API endpoint). `handleSubmit` just toggles a local success state. If you wire it to a real backend, sanitize inputs and protect against spam.
- `dangerouslySetInnerHTML` is used only in `SchemaOrg.tsx` for static JSON-LD data (safe because the payload is fully controlled by the app).
- WhatsApp links use `encodeURIComponent` for message text.

---

## Adding New shadcn/ui Components

This project was initialized with shadcn/ui. To add a new component:

```bash
npx shadcn@latest add <component-name>
```

Components install into `src/components/ui/` and use the existing Tailwind theme + `cn()` utility.

---

## Quick Reference: Key Files to Edit for Common Tasks

| Task | File(s) |
|------|---------|
| Change business phone / address / hours | `src/config/business.ts` |
| Add a new landing section | Create in `src/sections/`, import in `src/App.tsx` |
| Add a new service page | Create in `src/pages/services/`, add route in `src/App.tsx` |
| Change user-facing text (ES/CA/EN) | `src/i18n/locales/*.json` |
| Update SEO schema | `src/hooks/useSchemaOrg.ts` + `src/components/SchemaOrg.tsx` |
| Update color theme / CSS vars | `src/index.css` + `tailwind.config.js` |
| Update navigation links | `src/components/Header.tsx` |
