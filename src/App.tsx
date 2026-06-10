import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { businessConfig } from '@/config/business';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SchemaOrg } from '@/components/SchemaOrg';
import { SEOMeta } from '@/components/SEOMeta';
import { seoConfig } from '@/config/seo';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { BeforeAfter } from '@/sections/BeforeAfter';
import { Calculator } from '@/sections/Calculator';
import { WhyUs } from '@/sections/WhyUs';
import { Testimonials } from '@/sections/Testimonials';
import { Locations } from '@/sections/Locations';
import { FAQ } from '@/sections/FAQ';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { SpecializedServices } from '@/sections/SpecializedServices';

// Service Pages
import Impermeabilizacion from '@/pages/services/Impermeabilizacion';
import LimpiezaSofas from '@/pages/services/LimpiezaSofas';
import LimpiezaAlfombras from '@/pages/services/LimpiezaAlfombras';
import LimpiezaColchones from '@/pages/services/LimpiezaColchones';
import LimpiezaSillones from '@/pages/services/LimpiezaSillones';
import ServicioDomicilio from '@/pages/services/ServicioDomicilio';
import ServicesPage from '@/pages/services/ServicesPage';
import LimpiezaTapiceriaCocheSabadell from '@/pages/services/LimpiezaTapiceriaCocheSabadell';

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

function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
}

function HomePage() {
  useHashScroll();

  return (
    <>
      <SEOMeta config={seoConfig.home} />
      <SchemaOrg />
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Calculator />
        <WhyUs />
        <Testimonials />
        <Locations />
        <FAQ />
        <SpecializedServices />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicios/" element={<ServicesPage />} />
        <Route path="/servicios.html" element={<ServicesPage />} />
        <Route path={businessConfig.urls.services.sofaCleaning} element={<LimpiezaSofas />} />
        <Route path="/limpieza-de-sofas.html" element={<LimpiezaSofas />} />
        <Route path={businessConfig.urls.services.carpetCleaning} element={<LimpiezaAlfombras />} />
        <Route path="/limpieza-de-alfombras.html" element={<LimpiezaAlfombras />} />
        <Route path={businessConfig.urls.services.mattressCleaning} element={<LimpiezaColchones />} />
        <Route path="/mas-servicios.html" element={<LimpiezaColchones />} />
        <Route path={businessConfig.urls.services.impermeabilization} element={<Impermeabilizacion />} />
        <Route path="/impermeabilizacion-de-sofas.html" element={<Impermeabilizacion />} />
        <Route path={businessConfig.urls.services.armchairCleaning} element={<LimpiezaSillones />} />
        <Route path="/limpieza-de-sofas/limpieza-de-sillones.html" element={<LimpiezaSillones />} />
        <Route path={businessConfig.urls.services.homeService} element={<ServicioDomicilio />} />
        <Route path="/limpieza-de-sofas/limpieza-de-sofas-a-domicilio.html" element={<ServicioDomicilio />} />
        <Route path="/servicios/limpieza-tapiceria-coche-sabadell" element={<LimpiezaTapiceriaCocheSabadell />} />
        <Route path="/servicios/limpieza-tapiceria-coche-sabadell.html" element={<LimpiezaTapiceriaCocheSabadell />} />
        <Route path="/limpieza-de-sofa-barcelona.html" element={<RegionalServicePage serviceType="sofas" citySlug="barcelona" />} />
        <Route path="/limpieza-de-sofa-sabadell.html" element={<RegionalServicePage serviceType="sofas" citySlug="sabadell" />} />
        <Route path="/limpieza-de-sofa-cerdanyola.html" element={<RegionalServicePage serviceType="sofas" citySlug="cerdanyola" />} />
        <Route path="/limpieza-de-sofas-terrassa.html" element={<RegionalServicePage serviceType="sofas" citySlug="terrassa" />} />
        <Route path="/limpieza-de-sofas-sant-cugat.html" element={<RegionalServicePage serviceType="sofas" citySlug="sant-cugat" />} />
        <Route path="/limpieza-de-sofas-barbera-del-valles.html" element={<RegionalServicePage serviceType="sofas" citySlug="barbera-del-valles" />} />
        <Route path="/limpieza-de-sofa-sant-quirze.html" element={<RegionalServicePage serviceType="sofas" citySlug="sant-quirze" />} />
        <Route path="/limpieza-de-colchones-sabadell.html" element={<RegionalServicePage serviceType="colchones" citySlug="sabadell" />} />
        <Route path="/limpieza-de-colchones-barcelona.html" element={<RegionalServicePage serviceType="colchones" citySlug="barcelona" />} />
        <Route path="/limpieza-de-colchones-castellar-del-valles.html" element={<RegionalServicePage serviceType="colchones" citySlug="castellar-del-valles" />} />
        <Route path="/limpieza-de-colchones-cerdanyola.html" element={<RegionalServicePage serviceType="colchones" citySlug="cerdanyola" />} />
        <Route path="/limpieza-de-colchones-terrassa.html" element={<RegionalServicePage serviceType="colchones" citySlug="terrassa" />} />
        <Route path="/limpieza-de-colchones-sant-cugat-del-valles.html" element={<RegionalServicePage serviceType="colchones" citySlug="sant-cugat-del-valles" />} />
        <Route path="/limpieza-de-sofas-en-sant-quirze.html" element={<RegionalServicePage serviceType="colchones" citySlug="sant-quirze-del-valles" />} />
        
        {/* Additional service pages */}
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/quienes-somos.html" element={<QuienesSomos />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/contacto.html" element={<ContactPage />} />
        <Route path="/restauracion-de-alfombras" element={<RestauracionAlfombras />} />
        <Route path="/restauracion-de-alfombras.html" element={<RestauracionAlfombras />} />
        <Route path="/limpieza-de-muebles-en-cuero" element={<LimpiezaCuero />} />
        <Route path="/limpieza-de-muebles-en-cuero.html" element={<LimpiezaCuero />} />
        
        {/* Regional pages - Sofás (URLs EXATAS do site antigo) */}
        {Object.entries(regionalSofaUrls).map(([citySlug, urlPath]) => (
          <Route
            key={`sofas-${citySlug}`}
            path={`/servicios/${urlPath}`}
            element={<RegionalServicePage serviceType="sofas" citySlug={citySlug} />}
          />
        ))}
        {Object.entries(regionalSofaUrls).map(([citySlug, urlPath]) => (
          <Route
            key={`sofas-html-${citySlug}`}
            path={`/servicios/${urlPath}.html`}
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
        {Object.entries(regionalMattressUrls).map(([citySlug, urlPath]) => (
          <Route
            key={`colchones-html-${citySlug}`}
            path={`/mas-servicios/${urlPath}.html`}
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
        {Object.entries(regionalCarpetUrls).map(([citySlug, urlPath]) => (
          <Route
            key={`alfombras-html-${citySlug}`}
            path={`/limpieza-de-alfombras/${urlPath}.html`}
            element={<RegionalServicePage serviceType="alfombras" citySlug={citySlug} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
