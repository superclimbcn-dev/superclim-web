import { createContext, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import type { SEOPageConfig } from '@/config/seo';

interface SEOMetaProps {
  config: SEOPageConfig;
  alternateLangs?: { lang: string; url: string }[];
}

/** When true (server prerender), SEOMeta renders nothing: the prerender
 * script already injects the static head tags. Prevents duplicate metadata
 * from being emitted inline in the SSR body. */
export const PrerenderContext = createContext(false);

export function SEOMeta({ config, alternateLangs }: SEOMetaProps) {
  const prerender = useContext(PrerenderContext);

  useEffect(() => {
    // Keep React-owned tags; discard their static HTML counterparts after mount.
    document.head.querySelectorAll(
      'title:not([data-seo-managed]), meta[name="description"]:not([data-seo-managed]), ' +
      'meta[name="robots"]:not([data-seo-managed]), link[rel="canonical"]:not([data-seo-managed]), ' +
      'meta[property^="og:"]:not([data-seo-managed]), meta[name^="twitter:"]:not([data-seo-managed])',
    ).forEach((tag) => tag.remove());

    // Preserve the existing cleanup of community prerender metadata.
    document.head.querySelectorAll('[data-prerender-community]').forEach((tag) => tag.remove());
  }, [config.canonical]);

  if (prerender) return null;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title data-seo-managed="true">{config.title}</title>
      <meta data-seo-managed="true" name="description" content={config.description} />
      {config.keywords && <meta data-seo-managed="true" name="keywords" content={config.keywords} />}
      
      {/* Canonical */}
      <link data-seo-managed="true" rel="canonical" href={config.canonical} />
      
      {/* Robots */}
      {config.noindex ? (
        <meta data-seo-managed="true" name="robots" content="noindex, nofollow" />
      ) : (
        <meta data-seo-managed="true" name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta data-seo-managed="true" property="og:title" content={config.ogTitle || config.title} />
      <meta data-seo-managed="true" property="og:description" content={config.ogDescription || config.description} />
      <meta data-seo-managed="true" property="og:url" content={config.canonical} />
      <meta data-seo-managed="true" property="og:type" content={config.ogType || 'website'} />
      <meta data-seo-managed="true" property="og:locale" content="es_ES" />
      {config.ogImage && <meta data-seo-managed="true" property="og:image" content={config.ogImage} />}
      
      {/* Twitter Cards */}
      <meta data-seo-managed="true" name="twitter:card" content="summary_large_image" />
      <meta data-seo-managed="true" name="twitter:title" content={config.ogTitle || config.title} />
      <meta data-seo-managed="true" name="twitter:description" content={config.ogDescription || config.description} />
      {config.ogImage && <meta data-seo-managed="true" name="twitter:image" content={config.ogImage} />}
      
      {/* Alternate Languages */}
      {alternateLangs?.map((alt) => (
        <link key={alt.lang} data-seo-managed="true" rel="alternate" hrefLang={alt.lang} href={alt.url} />
      ))}
      
      {/* Additional SEO tags */}
      <meta data-seo-managed="true" name="author" content="Superclim Servicios" />
      <meta data-seo-managed="true" name="geo.region" content="ES-CT" />
      <meta data-seo-managed="true" name="geo.placename" content="Sabadell, Barcelona" />
    </Helmet>
  );
}
