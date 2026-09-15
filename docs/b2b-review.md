# Vertical B2B — informe para revisión

Branch: `feat/vertical-b2b`. Implementación local, sin deploy, merge ni publicación.

## 1. Archivos

Nuevos:

- `src/config/businessPages.ts`: contenido específico, FAQ, cobertura y enlaces de los cuatro servicios.
- `src/pages/business/BusinessPage.tsx`: estructura visual, navegación, schemas y CTA.
- `src/pages/business/prerender.tsx`: renderizado del contenido completo en HTML durante el build.
- `src/components/BusinessQuoteForm.tsx`: formulario B2B con preparación explícita para WhatsApp.
- `src/components/BusinessSEO.tsx`: metadatos de la vertical y limpieza de etiquetas estáticas heredadas al navegar desde otras páginas.
- `src/sections/BusinessFeaturedBanner.tsx`: bloque empresarial de la home.
- `scripts/business.test.mjs`: pruebas de regresión SEO, prerender, navegador y conversión.
- `audit/b2b/`: resultados y capturas de la validación local.
- `docs/b2b-review.md`: este informe.

Modificados:

- `src/App.tsx`: cuatro rutas y bloque adicional en la home.
- `src/config/business.ts`: URLs centralizadas.
- `src/config/seo.ts`: cuatro configuraciones nuevas; las anteriores conservadas íntegramente.
- `src/i18n/locales/{es,ca,en}.json`: textos nuevos para el bloque de la home y el enlace del footer.
- `src/sections/Footer.tsx`: enlace hacia la vertical B2B, también disponible desde comunidades.
- `public/sitemap.xml`: cuatro entradas nuevas; robots sin cambios.
- `scripts/prerender-seo.mjs`: HTML completo de la vertical, conservando la generación anterior para el resto del sitio.
- `package.json`: comando `test:b2b`, utilizando Node y Playwright ya presentes; sin dependencias nuevas.

No se modificaron las páginas, el contenido ni los schemas de limpieza de comunidades. La carpeta `output/` ya existía sin seguimiento y no se modificó.

## 2. URLs y metadata final

Todas las URLs nuevas usan canonical autorreferente, sin barra final, `index, follow`, OpenGraph y Twitter. El título y la descripción sociales coinciden con los metadatos principales. Imagen social: el logo existente de Superclim.

### `/limpieza-para-empresas`

- Canonical: `https://superclim.es/limpieza-para-empresas`
- Title: Empresa de Limpieza para Empresas en Sabadell y Barcelona | Superclim
- Description: Servicio profesional de limpieza para empresas, oficinas, naves industriales y centros logísticos en Sabadell, Vallès Occidental y Barcelona. Solicita presupuesto.

### `/limpieza-para-empresas/oficinas`

- Canonical: `https://superclim.es/limpieza-para-empresas/oficinas`
- Title: Limpieza de Oficinas en Sabadell y Barcelona | Superclim
- Description: Limpieza de oficinas, despachos y espacios de trabajo en Sabadell y Barcelona. Planes diarios o semanales y horarios adaptados. Solicita presupuesto.

### `/limpieza-para-empresas/naves-industriales`

- Canonical: `https://superclim.es/limpieza-para-empresas/naves-industriales`
- Title: Limpieza de Naves Industriales en Sabadell y Barcelona | Superclim
- Description: Limpieza de naves industriales en Sabadell y Barcelona: pavimentos, pasillos, vestuarios y zonas comunes. Planificación según la actividad de tu instalación.

### `/limpieza-para-empresas/centros-logisticos`

- Canonical: `https://superclim.es/limpieza-para-empresas/centros-logisticos`
- Title: Limpieza de Almacenes y Centros Logísticos en Barcelona | Superclim
- Description: Limpieza recurrente de almacenes y centros logísticos en Barcelona y Vallès Occidental. Picking, pasillos y áreas comunes con horarios adaptados a la operativa.

Los H1 son, respectivamente:

1. Empresa de limpieza para empresas en Sabadell y Barcelona
2. Limpieza profesional de oficinas en Sabadell y Barcelona
3. Limpieza de naves industriales en Sabadell y Barcelona
4. Limpieza de almacenes y centros logísticos

## 3. Datos estructurados

- Hub: un `Service`, un `Organization` con información empresarial existente y un `BreadcrumbList`.
- El `Service` del hub incorpora un `OfferCatalog` con oficinas, naves, almacenes/centros logísticos y comunidades, sin precios.
- Hijas: un `Service` específico y un `BreadcrumbList`. El proveedor se referencia por el mismo `@id` de la organización del hub; no se repite `LocalBusiness` en cada hija.
- Sin `AggregateRating`, `Review`, precios ni certificaciones nuevos.
- FAQ visibles mediante desplegables nativos. No se añade `FAQPage` ni se promete visibilidad enriquecida.

## 4. Enlaces internos

- Home → hub, oficinas, naves, logística, comunidades y formulario del hub.
- Hub → las tres hijas y comunidades.
- Cada hija → hub, sus dos hermanas y comunidades.
- Footer compartido → hub; ofrece también la conexión de comunidades con la nueva vertical sin tocar su contenido.
- Breadcrumbs → inicio y hub donde corresponde.

## 5. Conversión y diseño

El formulario incluye nombre, empresa, teléfono, email, municipio, tipo de instalación, metros cuadrados, frecuencia, horas/días y mensaje. Solo nombre y municipio son obligatorios. Cada hija preselecciona su tipo de instalación.

El usuario prepara la consulta y abre WhatsApp para revisarla y enviarla. La interfaz dice expresamente que aún no se ha enviado; no simula una recepción ni guarda datos en un backend. Las modificaciones invalidan la solicitud preparada para evitar enviar datos desactualizados. Existe alternativa por teléfono, política de privacidad y explicación para navegadores sin JavaScript.

La vertical conserva la identidad esmeralda, la navegación y el footer del sitio, con iconografía de instalaciones y organización del servicio. No se incorporan fotografías atribuidas a clientes o instalaciones, ni testimonios inventados. El contenido de servicio está en español; el bloque de home y el enlace nuevo del footer tienen ES/CA/EN.

## 6. Validación

- `npm run build`: aprobado; TypeScript, Vite y prerender de 50 rutas. Las cuatro B2B contienen el texto completo, H1, enlaces, FAQ, formulario y JSON-LD en el HTML de entrada.
- `npm run test:b2b`: **2 pruebas aprobadas**, con comprobaciones automatizadas de metadatos existentes preservados y flujo completo de la vertical. Incluye las cuatro páginas con JavaScript habilitado y deshabilitado, canonical, robots, títulos/descripciones únicos, OG/Twitter sin duplicados, schemas, sitemap, enlaces, formulario, navegación SPA y capturas.
- Todas las 50 URLs del sitemap respondieron HTTP 200 en el preview local. Esto verifica el build local, no una publicación en producción.
- Desktop 1440 × 1000 y móvil 390 × 844; sin desbordamiento horizontal detectado. Sin errores JavaScript en las nuevas páginas durante las pruebas.
- `npm run test:gtm`: **4 pruebas aprobadas** de consentimiento y Tag Manager.
- ESLint de los archivos nuevos y de configuración/rutas B2B: aprobado.
- `npm run lint`: **no aprobado**, por 11 errores preexistentes: dos usos de `any` en `WhatsAppButton.tsx`; siete exportaciones incompatibles con Fast Refresh en componentes `ui`; `Math.random()` durante render en `ui/sidebar.tsx`; y `scrollToSection` sin uso en `Footer.tsx`. La función del footer ya estaba en HEAD. No se ocultaron reglas ni se amplió esta tarea a una refactorización de componentes ajenos.
- `git diff --check`: sin errores de whitespace.

Los tests bloquean conexiones externas del navegador. No se enviaron solicitudes a WhatsApp, mensajes ni datos de prueba a la empresa.

Resultados detallados: [validation.json](../audit/b2b/validation.json).

## 7. Límites y puntos de revisión

- Resolver los 11 errores de lint existentes antes de autorizar publicación.
- El build mantiene avisos por tamaño del bundle y antigüedad de Browserslist. No impiden compilar, pero el rendimiento debe revisarse en la infraestructura de destino.
- La generación sigue el formato de alojamiento existente (`ruta.html` y `ruta/index.html` como archivos internos); enlaces, sitemap y canonicals públicos no llevan `.html`. Verificar en el hosting que las rutas limpias sirven estos archivos antes de publicar. No se cambió la configuración del proveedor ni se hizo deploy.
- La captación actual requiere que el usuario confirme el envío en WhatsApp. No hay integración nueva con email, CRM ni almacenamiento de leads.
- Indexación y resultados de búsqueda solo podrán verificarse tras una publicación autorizada. No se crearon páginas locales clonadas.

## 8. Capturas

| Página | Desktop | Móvil |
|---|---|---|
| Hub | [Desktop](../audit/b2b/limpieza-para-empresas-desktop.png) | [Móvil](../audit/b2b/limpieza-para-empresas-mobile.png) |
| Oficinas | [Desktop](../audit/b2b/oficinas-desktop.png) | [Móvil](../audit/b2b/oficinas-mobile.png) |
| Naves | [Desktop](../audit/b2b/naves-industriales-desktop.png) | [Móvil](../audit/b2b/naves-industriales-mobile.png) |
| Logística | [Desktop](../audit/b2b/centros-logisticos-desktop.png) | [Móvil](../audit/b2b/centros-logisticos-mobile.png) |

[Bloque B2B de la home](../audit/b2b/home-business-desktop.png).
