import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { businessConfig } from '@/config/business';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import { HomePage } from '@/pages/HomePage';
import NotFound from '@/pages/NotFound';
import BusinessRegionalPage from '@/pages/business/BusinessRegionalPage';
import { businessRegionalPages, businessRegionalPath } from '@/config/businessRegionalPages';
import BusinessCityPage from '@/pages/business/BusinessCityPage';
import { businessCityPages, businessCityPath } from '@/config/businessCityPages';
import BusinessPage from '@/pages/business/BusinessPage';

// Service Pages
import Impermeabilizacion from '@/pages/services/Impermeabilizacion';
import LimpiezaSofas from '@/pages/services/LimpiezaSofas';
import LimpiezaAlfombras from '@/pages/services/LimpiezaAlfombras';
import LimpiezaColchones from '@/pages/services/LimpiezaColchones';
import LimpiezaSillones from '@/pages/services/LimpiezaSillones';
import ServicioDomicilio from '@/pages/services/ServicioDomicilio';
import ServicesPage from '@/pages/services/ServicesPage';
import LimpiezaTapiceriaCocheSabadell from '@/pages/services/LimpiezaTapiceriaCocheSabadell';
import LimpiezaComunidades from '@/pages/services/LimpiezaComunidades';
import CommunityCityPage from '@/pages/services/communities/CommunityCityPage';

// Legal Pages
import LegalPage from '@/pages/legal/LegalPage';

// Additional Pages
import QuienesSomos from '@/pages/about/QuienesSomos';
import ContactPage from '@/pages/contact/ContactPage';
import RestauracionAlfombras from '@/pages/restoration/RestauracionAlfombras';
import LimpiezaCuero from '@/pages/leather/LimpiezaCuero';

// Regional Pages
import RegionalServicePage from '@/pages/regional/RegionalServicePage';
import { regionalSofaUrls, regionalMattressUrls, regionalCarpetUrls } from '@/config/regionalUrls';

import './i18n';
import './App.css';


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {businessRegionalPages.map(page => <Route key={businessRegionalPath(page)} path={businessRegionalPath(page)} element={<BusinessRegionalPage key={businessRegionalPath(page)} page={page} />} />)}
        {businessCityPages.map(page => <Route key={businessCityPath(page)} path={businessCityPath(page)} element={<BusinessCityPage key={businessCityPath(page)} page={page} />} />)}
        <Route path={businessConfig.urls.services.businessCleaning} element={<BusinessPage key="businessCleaning" pageKey="businessCleaning" />} />
        <Route path={businessConfig.urls.services.officeCleaning} element={<BusinessPage key="officeCleaning" pageKey="officeCleaning" />} />
        <Route path={businessConfig.urls.services.industrialCleaning} element={<BusinessPage key="industrialCleaning" pageKey="industrialCleaning" />} />
        <Route path={businessConfig.urls.services.logisticsCleaning} element={<BusinessPage key="logisticsCleaning" pageKey="logisticsCleaning" />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path={businessConfig.urls.services.sofaCleaning} element={<LimpiezaSofas />} />
        <Route path={businessConfig.urls.services.carpetCleaning} element={<LimpiezaAlfombras />} />
        <Route path={businessConfig.urls.services.mattressCleaning} element={<LimpiezaColchones />} />
        <Route path={businessConfig.urls.services.impermeabilization} element={<Impermeabilizacion />} />
        <Route path={businessConfig.urls.services.armchairCleaning} element={<LimpiezaSillones />} />
        <Route path={businessConfig.urls.services.homeService} element={<ServicioDomicilio />} />
        <Route path="/servicios/limpieza-tapiceria-coche-sabadell" element={<LimpiezaTapiceriaCocheSabadell />} />
        <Route path={businessConfig.urls.services.communityCleaning} element={<LimpiezaComunidades />} />
        <Route path={businessConfig.urls.services.communityCleaningSabadell} element={<CommunityCityPage city="sabadell" />} />
        <Route path={businessConfig.urls.services.communityCleaningTerrassa} element={<CommunityCityPage city="terrassa" />} />
        <Route path={businessConfig.urls.services.communityCleaningSantQuirze} element={<CommunityCityPage city="sant-quirze" />} />
        <Route path={businessConfig.urls.services.communityCleaningSantCugat} element={<CommunityCityPage city="sant-cugat" />} />
        <Route path={businessConfig.urls.services.communityCleaningCastellar} element={<CommunityCityPage city="castellar-del-valles" />} />
        <Route path={businessConfig.urls.services.communityCleaningBarbera} element={<CommunityCityPage city="barbera-del-valles" />} />
        
        {/* Additional service pages */}
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/restauracion-de-alfombras" element={<RestauracionAlfombras />} />
        <Route path="/limpieza-de-muebles-en-cuero" element={<LimpiezaCuero />} />

        {/* Legal pages */}
        <Route path="/politica-de-privacidad" element={<LegalPage type="privacy" />} />
        <Route path="/politica-de-cookies" element={<LegalPage type="cookies" />} />
        <Route path="/terminos-y-condiciones" element={<LegalPage type="terms" />} />

        {/* Regional pages - Sofás (URLs EXATAS do site antigo) */}
        {Object.entries(regionalSofaUrls).map(([citySlug, urlPath]) => (
          <Route
            key={`sofas-${citySlug}`}
            path={`/servicios/${urlPath}`}
            element={<RegionalServicePage serviceType="sofas" citySlug={citySlug} />}
          />
        ))}
        
        {/* Regional pages - Colchones (URLs EXATAS do site antigo) */}
        {Object.entries(regionalMattressUrls).map(([citySlug, urlPath]) => (
          <Route
            key={`colchones-${citySlug}`}
            path={`/mas-servicios/${urlPath}`}
            element={<RegionalServicePage serviceType="colchones" citySlug={citySlug} />}
          />
        ))}
        
        {/* Regional pages - Alfombras (URLs EXATAS do site antigo) */}
        {Object.entries(regionalCarpetUrls).map(([citySlug, urlPath]) => (
          <Route
            key={`alfombras-${citySlug}`}
            path={`/limpieza-de-alfombras/${urlPath}`}
            element={<RegionalServicePage serviceType="alfombras" citySlug={citySlug} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsentBanner />
    </BrowserRouter>
  );
}

export default App;
