import { useSchemaOrg } from '@/hooks/useSchemaOrg';
import { businessConfig } from '@/config/business';

export function SchemaOrg() {
  const { getLocalBusinessSchema } = useSchemaOrg();

  const localBusinessSchema = getLocalBusinessSchema();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${businessConfig.name} - Limpieza Profesional de Sofás`,
    url: businessConfig.urls.base,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
