export interface CityData {
  slug: string;
  name: string;
  displayName: string;
  neighborhoods: string[];
  localReference: string;
  localProblem: string;
  distanceFromSabadell: string;
  population: string;
}

export const cityAliases: Record<string, string> = {
  'sant-cugat-del-valles': 'sant-cugat',
  'sant-quirze-del-valles': 'sant-quirze',
  'lavado-de-alfombras-barcelona': 'barcelona',
};

export const cities: CityData[] = [
  {
    slug: 'sabadell',
    name: 'Sabadell',
    displayName: 'Sabadell',
    neighborhoods: ['Centre', 'Eixample', 'Gràcia', 'Campoamor', 'Concordia', 'Nord', 'Sud'],
    localReference: 'cerca de la Rambla y el Parc de Catalunya',
    localProblem: 'polvo industrial y contaminación del río Ripoll',
    distanceFromSabadell: '0 km',
    population: '215.000',
  },
  {
    slug: 'barcelona',
    name: 'Barcelona',
    displayName: 'Barcelona',
    neighborhoods: ['Eixample', 'Gràcia', 'Sarrià-Sant Gervasi', 'Sants-Montjuïc', 'Sant Martí', 'Ciutat Vella', 'Horta-Guinardó'],
    localReference: 'cerca de la Sagrada Família, el Parc de la Ciutadella y la Barceloneta',
    localProblem: 'alta contaminación por tráfico y polvo urbano',
    distanceFromSabadell: '25 km',
    population: '1.600.000',
  },
  {
    slug: 'terrassa',
    name: 'Terrassa',
    displayName: 'Terrassa',
    neighborhoods: ['Centre', 'Egara', 'San Pedro', 'Vallparadís', 'La Cogullada'],
    localReference: 'cerca del Parc de Vallparadís y la Seu d\'Ègara',
    localProblem: 'polvo industrial de la zona textil histórica',
    distanceFromSabadell: '18 km',
    population: '225.000',
  },
  {
    slug: 'cerdanyola',
    name: 'cerdanyola',
    displayName: 'Cerdanyola del Vallès',
    neighborhoods: ['Centre', 'Montflorit', 'Sant Martí de les Ermites', 'Bellaterra'],
    localReference: 'cerca de la UAB y el Parc de la Riera',
    localProblem: 'polen de la zona boscosa y alérgenos estacionales',
    distanceFromSabadell: '12 km',
    population: '58.000',
  },
  {
    slug: 'sant-cugat',
    name: 'sant-cugat',
    displayName: 'Sant Cugat del Vallès',
    neighborhoods: ['Centre', 'Valldoreix', 'Mira-sol', 'La Floresta', 'Les Planes'],
    localReference: 'cerca del Monestir de Sant Cugat y el Parc de la Collserola',
    localProblem: 'polen de Collserola y residuos de construcción',
    distanceFromSabadell: '15 km',
    population: '95.000',
  },
  {
    slug: 'rubi',
    name: 'rubi',
    displayName: 'Rubí',
    neighborhoods: ['Centre', 'Can Oriol', 'Les Torres', 'Ca n\'Alzamora'],
    localReference: 'cerca del Parc del Castell y el Mercat Municipal',
    localProblem: 'polvo de obras y contaminación de la C-1413',
    distanceFromSabadell: '8 km',
    population: '78.000',
  },
  {
    slug: 'sant-quirze',
    name: 'sant-quirze',
    displayName: 'Sant Quirze del Vallès',
    neighborhoods: ['Centre', 'Les Fonts', 'Park Avenue'],
    localReference: 'cerca de la Torre del Veguer y el Parc de les Morisques',
    localProblem: 'polvo de la zona industrial de Can Humet',
    distanceFromSabadell: '10 km',
    population: '20.000',
  },
  {
    slug: 'barbera-del-valles',
    name: 'barbera-del-valles',
    displayName: 'Barberà del Vallès',
    neighborhoods: ['Centre', 'El Poblenou', 'La Romànica', 'Can Llobet'],
    localReference: 'cerca del Parc Central y el Canal de la Infanta',
    localProblem: 'polvo de la zona industrial y tráfico de la C-58',
    distanceFromSabadell: '6 km',
    population: '33.000',
  },
  {
    slug: 'castellar-del-valles',
    name: 'castellar-del-valles',
    displayName: 'Castellar del Vallès',
    neighborhoods: ['Centre', 'El Puig', 'Sant Feliu del Racó', 'Santa Maria del Puig'],
    localReference: 'cerca del Parc de la Serra de l\'Obac y el riu Ripoll',
    localProblem: 'humedad del río Ripoll y polvo de la zona textil',
    distanceFromSabadell: '14 km',
    population: '24.000',
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  const resolvedSlug = cityAliases[slug] || slug;
  return cities.find((c) => c.slug === resolvedSlug);
}
