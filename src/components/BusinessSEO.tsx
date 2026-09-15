import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import type { SEOPageConfig } from '@/config/seo';

/** Remove static metadata inherited from another entry URL during SPA navigation. */
export function BusinessSEO({ config }: { config: SEOPageConfig }) {
  useEffect(() => {
    document.head.querySelectorAll(
      'title:not([data-seo-managed]), link[rel="canonical"]:not([data-seo-managed]), ' +
      'meta[name="description"]:not([data-seo-managed]), meta[name="robots"]:not([data-seo-managed]), ' +
      'meta[name="keywords"]:not([data-seo-managed]), meta[property^="og:"]:not([data-seo-managed]), ' +
      'meta[name^="twitter:"]:not([data-seo-managed])',
    ).forEach(tag => tag.remove());
  }, [config.canonical]);
  return <Helmet>
    <title data-seo-managed="true">{config.title}</title>
    <link data-seo-managed="true" rel="canonical" href={config.canonical} />
    <meta data-seo-managed="true" name="description" content={config.description} />
    <meta data-seo-managed="true" name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta data-seo-managed="true" property="og:title" content={config.title} />
    <meta data-seo-managed="true" property="og:description" content={config.description} />
    <meta data-seo-managed="true" property="og:url" content={config.canonical} />
    <meta data-seo-managed="true" property="og:type" content="website" />
    <meta data-seo-managed="true" property="og:locale" content="es_ES" />
    <meta data-seo-managed="true" property="og:image" content={config.ogImage} />
    <meta data-seo-managed="true" name="twitter:card" content="summary_large_image" />
    <meta data-seo-managed="true" name="twitter:title" content={config.title} />
    <meta data-seo-managed="true" name="twitter:description" content={config.description} />
    <meta data-seo-managed="true" name="twitter:image" content={config.ogImage} />
  </Helmet>;
}
