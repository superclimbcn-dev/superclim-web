import { Helmet } from 'react-helmet-async';
import type { SEOPageConfig } from '@/config/seo';

interface SEOMetaProps {
  config: SEOPageConfig;
  alternateLangs?: { lang: string; url: string }[];
}

export function SEOMeta({ config, alternateLangs }: SEOMetaProps) {
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      {config.keywords && <meta name="keywords" content={config.keywords} />}
      
      {/* Canonical */}
      <link rel="canonical" href={config.canonical} />
      
      {/* Robots */}
      {config.noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={config.ogTitle || config.title} />
      <meta property="og:description" content={config.ogDescription || config.description} />
      <meta property="og:url" content={config.canonical} />
      <meta property="og:type" content={config.ogType || 'website'} />
      <meta property="og:locale" content="es_ES" />
      {config.ogImage && <meta property="og:image" content={config.ogImage} />}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.ogTitle || config.title} />
      <meta name="twitter:description" content={config.ogDescription || config.description} />
      {config.ogImage && <meta name="twitter:image" content={config.ogImage} />}
      
      {/* Alternate Languages */}
      {alternateLangs?.map((alt) => (
        <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.url} />
      ))}
      
      {/* Additional SEO tags */}
      <meta name="author" content="Superclim Servicios" />
      <meta name="geo.region" content="ES-CT" />
      <meta name="geo.placename" content="Sabadell, Barcelona" />
    </Helmet>
  );
}
