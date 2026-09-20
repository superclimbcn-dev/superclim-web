// Explicit published destinations only. Coverage and candidates never produce links.
export const regionalCities = {
  'sabadell': 'Sabadell',
  'sant-cugat': 'Sant Cugat',
  'terrassa': 'Terrassa',
  'sant-quirze': 'Sant Quirze',
  'barcelona': 'Barcelona',
  'cerdanyola': 'Cerdanyola',
  'barbera-del-valles': 'Barberà del Vallès',
  'castellar-del-valles': 'Castellar del Vallès',
  'rubi': 'Rubí',
} as const;

export type RegionalCity = keyof typeof regionalCities;
export type RegionalService = 'sofas' | 'alfombras' | 'colchones' | 'comunidades';

interface RegionalNavigationEntry {
  label: string;
  generalUrl: string;
  localUrls: Partial<Record<RegionalCity, string>>;
  coverageWithoutUrl: RegionalCity[];
  futureCandidates: RegionalCity[];
}

export const regionalNavigation: Record<RegionalService, RegionalNavigationEntry> = {
  sofas: {
    label: 'Limpieza de sofás',
    generalUrl: '/limpieza-de-sofas',
    localUrls: {
      'sabadell': '/servicios/limpieza-de-sofa-sabadell',
      'sant-cugat': '/servicios/limpieza-de-sofas-sant-cugat',
      'terrassa': '/servicios/limpieza-de-sofas-terrassa',
      'sant-quirze': '/servicios/limpieza-de-sofas-en-sant-quirze',
      'barcelona': '/servicios/limpieza-de-sofas-barcelona',
      'cerdanyola': '/servicios/limpieza-de-sofa-cerdanyola',
      'barbera-del-valles': '/servicios/limpieza-de-sofas-barbera-del-valles',
    },
    coverageWithoutUrl: ["castellar-del-valles", "rubi"],
    futureCandidates: [],
  },
  alfombras: {
    label: 'Limpieza de alfombras',
    generalUrl: '/limpieza-de-alfombras',
    localUrls: {
      'sabadell': '/limpieza-de-alfombras/sabadell',
      'sant-cugat': '/limpieza-de-alfombras/sant-cugat',
      'terrassa': '/limpieza-de-alfombras/terrassa',
      'sant-quirze': '/limpieza-de-alfombras/sant-quirze',
      'barcelona': '/limpieza-de-alfombras/barcelona',
      'cerdanyola': '/limpieza-de-alfombras/cerdanyola',
      'barbera-del-valles': '/limpieza-de-alfombras/barbera-del-valles',
      'castellar-del-valles': '/limpieza-de-alfombras/castellar-del-valles',
    },
    coverageWithoutUrl: [],
    futureCandidates: [],
  },
  colchones: {
    label: 'Limpieza de colchones',
    generalUrl: '/mas-servicios',
    localUrls: {
      'sabadell': '/mas-servicios/limpieza-de-colchones-sabadell',
      'sant-cugat': '/mas-servicios/limpieza-de-colchones-sant-cugat-del-valles',
      'terrassa': '/mas-servicios/limpieza-de-colchones-terrassa',
      'sant-quirze': '/mas-servicios/limpieza-de-colchones-sant-quirze-del-valles',
      'barcelona': '/mas-servicios/limpieza-de-colchones-barcelona',
      'cerdanyola': '/mas-servicios/limpieza-de-colchones-cerdanyola',
      'castellar-del-valles': '/mas-servicios/limpieza-de-colchones-castellar-del-valles',
    },
    coverageWithoutUrl: [],
    futureCandidates: [],
  },
  comunidades: {
    label: 'Limpieza de comunidades',
    generalUrl: '/limpieza-de-comunidades',
    localUrls: {
      'sabadell': '/limpieza-de-comunidades/sabadell',
      'sant-cugat': '/limpieza-de-comunidades/sant-cugat',
      'terrassa': '/limpieza-de-comunidades/terrassa',
      'sant-quirze': '/limpieza-de-comunidades/sant-quirze',
      'barbera-del-valles': '/limpieza-de-comunidades/barbera-del-valles',
      'castellar-del-valles': '/limpieza-de-comunidades/castellar-del-valles',
    },
    coverageWithoutUrl: ["cerdanyola"],
    futureCandidates: [],
  },
};

// Editorial candidates, not published destinations. No local URL is inferred.
export const businessRegionalCandidates = {
  oficinas: { generalUrl: '/limpieza-para-empresas/oficinas', localUrls: {}, futureCandidates: ['sant-cugat', 'sabadell', 'terrassa'] },
  naves: { generalUrl: '/limpieza-para-empresas/naves-industriales', localUrls: {}, futureCandidates: ['rubi', 'terrassa', 'sabadell'] },
  logistica: { generalUrl: '/limpieza-para-empresas/centros-logisticos', localUrls: {}, futureCandidates: [] },
} as const;

const aliases: Record<string, RegionalCity> = {
  'sant-cugat-del-valles': 'sant-cugat',
  'sant-quirze-del-valles': 'sant-quirze',
  'lavado-de-alfombras-barcelona': 'barcelona',
  santCugat: 'sant-cugat',
  'Sant Cugat': 'sant-cugat',
  'Sant Quirze del Vallès': 'sant-quirze',
  'Cerdanyola del Vallès': 'cerdanyola',
};

export function resolveRegionalCity(value: string): RegionalCity | undefined {
  if (Object.hasOwn(regionalCities, value)) return value as RegionalCity;
  return aliases[value] ?? (Object.keys(regionalCities) as RegionalCity[]).find(key => regionalCities[key] === value);
}

export function cityServiceLinks(cityValue: string, exclude?: RegionalService) {
  const city = resolveRegionalCity(cityValue);
  if (!city) return [];
  return (Object.keys(regionalNavigation) as RegionalService[]).flatMap(service => {
    const href = regionalNavigation[service].localUrls[city];
    return href && service !== exclude ? [{ service, href, name: `${regionalNavigation[service].label} en ${regionalCities[city]}` }] : [];
  });
}

export function siblingCityLinks(service: RegionalService, cityValue: string) {
  const city = resolveRegionalCity(cityValue);
  return (Object.keys(regionalCities) as RegionalCity[])
    .filter(key => key !== city && regionalNavigation[service].localUrls[key])
    .slice(0, 6)
    .map(key => ({ name: `${regionalNavigation[service].label} en ${regionalCities[key]}`, href: regionalNavigation[service].localUrls[key]! }));
}
