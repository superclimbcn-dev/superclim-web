import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/sections/Footer';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Superclim</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 pt-20 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Error 404</p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Página no encontrada</h1>
          <p className="mt-4 text-gray-600">La dirección solicitada no existe o ya no está disponible.</p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
