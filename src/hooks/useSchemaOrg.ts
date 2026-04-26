import type { SchemaOrgData } from '@/types';
import { businessConfig } from '@/config/business';

export function useSchemaOrg() {
  const getLocalBusinessSchema = (): SchemaOrgData => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${businessConfig.name} - Limpieza Profesional de Sofás`,
    description: businessConfig.description,
    url: businessConfig.urls.base,
    telephone: businessConfig.phoneDisplay,
    email: businessConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.region,
      postalCode: businessConfig.address.postalCode,
      addressCountry: businessConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessConfig.geo.latitude,
      longitude: businessConfig.geo.longitude,
    },
    openingHours: businessConfig.hours.schema,
    priceRange: businessConfig.priceRange,
    image: `${businessConfig.urls.base}/og-image.jpg`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessConfig.reviews.google.ratingValue,
      reviewCount: businessConfig.reviews.google.reviewCount,
    },
    sameAs: [
      'https://www.facebook.com/superclimbcn/',
      'https://www.instagram.com/superclimbcn/',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Barcelona',
      containsPlace: [
        { '@type': 'City', name: 'Sabadell' },
        { '@type': 'City', name: 'Terrassa' },
        { '@type': 'City', name: 'Sant Cugat del Vallès' },
        { '@type': 'City', name: 'Cerdanyola del Vallès' },
        { '@type': 'City', name: 'Rubí' },
        { '@type': 'City', name: 'Sant Quirze del Vallès' },
        { '@type': 'City', name: 'Barberà del Vallès' },
        { '@type': 'City', name: 'Castellar del Vallès' },
      ],
    },
  });

  const getServiceSchema = (
    serviceName: string,
    description: string,
    url: string,
    areaServed?: string
  ): SchemaOrgData => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    url: url,
    provider: {
      '@type': 'LocalBusiness',
      name: businessConfig.fullName,
      telephone: businessConfig.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessConfig.address.street,
        addressLocality: businessConfig.address.city,
        addressRegion: businessConfig.address.region,
        postalCode: businessConfig.address.postalCode,
        addressCountry: businessConfig.address.country,
      },
    },
    areaServed: areaServed
      ? { '@type': 'City', name: areaServed }
      : {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: businessConfig.geo.latitude,
            longitude: businessConfig.geo.longitude,
          },
          geoRadius: '30 km',
        },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: url,
    },
  });

  const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  });

  const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });

  const getReviewSchema = (
    reviews: { author: string; text: string; rating: number }[]
  ) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessConfig.fullName,
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessConfig.reviews.google.ratingValue,
      reviewCount: businessConfig.reviews.google.reviewCount,
    },
  });

  return {
    getLocalBusinessSchema,
    getServiceSchema,
    getFAQSchema,
    getBreadcrumbSchema,
    getReviewSchema,
  };
}
