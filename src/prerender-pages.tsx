import { renderToString } from 'react-dom/server';
import type { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { StaticRouter } from 'react-router-dom';
import i18n from '@/i18n';
import { PrerenderContext } from '@/components/PrerenderContext';
import { HomePage } from '@/pages/HomePage';
import ServicesPage from '@/pages/services/ServicesPage';
import LimpiezaAlfombras from '@/pages/services/LimpiezaAlfombras';
import LimpiezaColchones from '@/pages/services/LimpiezaColchones';
import Impermeabilizacion from '@/pages/services/Impermeabilizacion';
import LimpiezaComunidades from '@/pages/services/LimpiezaComunidades';
import CommunityCityPage from '@/pages/services/communities/CommunityCityPage';
import LimpiezaTapiceriaCocheSabadell from '@/pages/services/LimpiezaTapiceriaCocheSabadell';
import RestauracionAlfombras from '@/pages/restoration/RestauracionAlfombras';
import LimpiezaCuero from '@/pages/leather/LimpiezaCuero';
import QuienesSomos from '@/pages/about/QuienesSomos';
import ContactPage from '@/pages/contact/ContactPage';
import LegalPage from '@/pages/legal/LegalPage';
import type { CommunityCitySlug } from '@/config/communityPages';

type StaticRoute =
  | '/'
  | '/servicios'
  | '/limpieza-de-alfombras'
  | '/mas-servicios'
  | '/impermeabilizacion-de-sofas'
  | '/limpieza-de-comunidades'
  | '/servicios/limpieza-tapiceria-coche-sabadell'
  | '/restauracion-de-alfombras'
  | '/limpieza-de-muebles-en-cuero'
  | '/quienes-somos'
  | '/contacto'
  | '/politica-de-privacidad'
  | '/politica-de-cookies'
  | '/terminos-y-condiciones';

const communityCitySlugs: CommunityCitySlug[] = ['sabadell', 'terrassa', 'sant-quirze', 'sant-cugat', 'castellar-del-valles', 'barbera-del-valles'];

const staticPages: Record<StaticRoute, () => ReactElement> = {
  '/': () => <HomePage />,
  '/servicios': () => <ServicesPage />,
  '/limpieza-de-alfombras': () => <LimpiezaAlfombras />,
  '/mas-servicios': () => <LimpiezaColchones />,
  '/impermeabilizacion-de-sofas': () => <Impermeabilizacion />,
  '/limpieza-de-comunidades': () => <LimpiezaComunidades />,
  '/servicios/limpieza-tapiceria-coche-sabadell': () => <LimpiezaTapiceriaCocheSabadell />,
  '/restauracion-de-alfombras': () => <RestauracionAlfombras />,
  '/limpieza-de-muebles-en-cuero': () => <LimpiezaCuero />,
  '/quienes-somos': () => <QuienesSomos />,
  '/contacto': () => <ContactPage />,
  '/politica-de-privacidad': () => <LegalPage type="privacy" />,
  '/politica-de-cookies': () => <LegalPage type="cookies" />,
  '/terminos-y-condiciones': () => <LegalPage type="terms" />,
};

function resolveStaticRoute(routePath: string): (() => ReactElement) | null {
  if (routePath in staticPages) {
    return staticPages[routePath as StaticRoute];
  }
  const prefix = '/limpieza-de-comunidades/';
  if (routePath.startsWith(prefix)) {
    const slug = routePath.slice(prefix.length) as CommunityCitySlug;
    if (communityCitySlugs.includes(slug)) {
      return () => <CommunityCityPage city={slug} />;
    }
  }
  return null;
}

export async function renderStaticPage(routePath: string): Promise<string | null> {
  const render = resolveStaticRoute(routePath);
  if (!render) return null;
  await i18n.changeLanguage('es');
  return renderToString(
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <StaticRouter location={routePath}>
          <PrerenderContext.Provider value={true}>{render()}</PrerenderContext.Provider>
        </StaticRouter>
      </I18nextProvider>
    </HelmetProvider>,
  );
}
