export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  image?: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  slug: string;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface PriceCalculatorState {
  serviceType: 'cleaning' | 'impermeabilization' | 'both';
  sofaType: 'small' | 'medium' | 'large' | 'corner';
  fabricType: 'fabric' | 'delicate' | 'leather';
  quantity: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface BeforeAfterImage {
  id: string;
  before: string;
  after: string;
  title: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SchemaOrgData {
  '@context'?: string;
  '@type': string;
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  sameAs?: string[];
  address?: {
    '@type': string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string;
  aggregateRating?: {
    '@type': string;
    ratingValue: number;
    reviewCount: number;
  };
  provider?: SchemaOrgData;
  areaServed?: SchemaOrgData | {
    '@type': string;
    geoMidpoint?: {
      '@type': string;
      latitude: number;
      longitude: number;
    };
    geoRadius?: string;
  };
  offers?: {
    '@type': string;
    price: string;
    priceCurrency: string;
    priceValidUntil?: string;
    availability?: string;
    url?: string;
  };
  review?: unknown[];
  containsPlace?: SchemaOrgData[];
  mainEntity?: unknown[];
  itemListElement?: unknown[];
}
