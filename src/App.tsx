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
        <Route path={businessConfig.urls.services.sofaCleaning} element={<LimpiezaSofas />} />
        <Route path={businessConfig.urls.services.carpetCleaning} element={<LimpiezaAlfombras />} />
        <Route path={businessConfig.urls.services.mattressCleaning} element={<LimpiezaColchones />} />
        <Route path={businessConfig.urls.services.impermeabilization} element={<Impermeabilizacion />} />
        <Route path={businessConfig.urls.services.armchairCleaning} element={<LimpiezaSillones />} />
        <Route path={businessConfig.urls.services.homeService} element={<ServicioDomicilio />} />
        
        {/* Additional service pages */}
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/restauracion-de-alfombras" element={<RestauracionAlfombras />} />
        <Route path="/limpieza-de-muebles-en-cuero" element={<LimpiezaCuero />} />
        
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
