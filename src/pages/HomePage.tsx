import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOMeta } from '@/components/SEOMeta';
import { SchemaOrg } from '@/components/SchemaOrg';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
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
import { CommunityFeaturedBanner } from '@/sections/CommunityFeaturedBanner';
import { BusinessFeaturedBanner } from '@/sections/BusinessFeaturedBanner';

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

export function HomePage() {
  useHashScroll();

  return (
    <>
      <SEOMeta config={seoConfig.home} />
      <SchemaOrg />
      <Header />
      <main>
        <Hero />
        <Services />
        <CommunityFeaturedBanner />
        <BusinessFeaturedBanner />
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
