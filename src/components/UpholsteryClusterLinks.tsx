import { Link } from 'react-router-dom';
import { Armchair, Home, Sofa } from 'lucide-react';

const clusterLinks = [
  {
    key: 'general',
    href: '/limpieza-de-sofas',
    title: 'Limpieza profesional de sofás y tapicerías',
    description: 'Conoce el tratamiento, el proceso de limpieza y las ciudades donde prestamos servicio.',
    icon: Sofa,
  },
  {
    key: 'domicilio',
    href: '/limpieza-de-sofas/limpieza-de-sofas-a-domicilio',
    title: 'Limpieza de sofás y tapicerías a domicilio',
    description: 'Servicio realizado en tu hogar, sin necesidad de trasladar el sofá ni los muebles tapizados.',
    icon: Home,
  },
  {
    key: 'sillones',
    href: '/limpieza-de-sofas/limpieza-de-sillones',
    title: 'Limpieza de sillones, butacas y sillas tapizadas',
    description: 'Tratamiento para distintos tipos de asientos y muebles tapizados según su tejido y estado.',
    icon: Armchair,
  },
] as const;

export function UpholsteryClusterLinks({ current }: { current: typeof clusterLinks[number]['key'] }) {
  const links = clusterLinks.filter(link => link.key !== current);
  return (
    <section className="bg-slate-50 py-16" aria-labelledby={`upholstery-links-${current}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id={`upholstery-links-${current}`} className="text-3xl font-bold text-gray-900">Servicios relacionados de limpieza de tapicerías</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">Elige la página que mejor corresponde al mueble o a la forma de prestación que necesitas.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {links.map(({ href, title, description, icon: Icon }) => (
            <Link key={href} to={href} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
              <Icon className="h-7 w-7 text-blue-700" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
