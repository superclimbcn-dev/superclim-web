import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import type { SEOPageConfig } from '@/config/seo';

interface SEOMetaProps {
  config: SEOPageConfig;
  alternateLangs?: { lang: string; url: string }[];
}

export function SEOMeta({ config, alternateLangs }: SEOMetaProps) {
  useEffect(() => {
    // Keep React-owned tags; discard their static HTML counterparts after mount.
    document.head.querySelectorAll(
      'title:not([data-seo-managed]), meta[name="description"]:not([data-seo-managed]), ' +
      'meta[name="robots"]:not([data-seo-managed]), link[rel="canonical"]:not([data-seo-managed])',
    ).forEach((tag) => tag.remove());

    // Preserve the existing cleanup of community prerender metadata.
    document.head.querySelectorAll('[data-prerender-community]').forEach((tag) => tag.remove());
  }, [config.canonical]);

  return (
    <Helmet>
      {/* Basic Meta */}
      <title data-seo-managed="true">{config.title}</title>
      <meta data-seo-managed="true" name="description" content={config.description} />
      {config.keywords && <meta name="keywords" content={config.keywords} />}
      
      {/* Canonical */}
      <link data-seo-managed="true" rel="canonical" href={config.canonical} />
      
      {/* Robots */}
      {config.noindex ? (
        <meta data-seo-managed="true" name="robots" content="noindex, nofollow" />
      ) : (
        <meta data-seo-managed="true" name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
