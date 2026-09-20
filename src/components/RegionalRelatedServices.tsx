import { Link } from 'react-router-dom';
import { cityServiceLinks, regionalCities, resolveRegionalCity } from '@/config/regionalNavigation';
import type { RegionalService, BusinessRegionalService } from '@/config/regionalNavigation';

export function RegionalRelatedServices({ city, service }: { city: string; service: RegionalService | BusinessRegionalService }) {
  const cityKey = resolveRegionalCity(city);
  const links = cityServiceLinks(city, service, service === 'oficinas' || service === 'naves');
  if (!cityKey || !links.length) return null;
  return (
    <section data-regional-related className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-5 text-xl font-bold text-gray-900">Otros servicios de Superclim en {regionalCities[cityKey]}</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(link => <li key={link.href}><Link to={link.href} className="flex min-h-12 items-center rounded-xl border border-emerald-200 px-4 py-3 font-medium text-emerald-800 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">{link.name}</Link></li>)}
        </ul>
      </div>
    </section>
  );
}
