import { useState, useSyncExternalStore } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '@/config/business';

const fields = [
  { name: 'nombre', label: 'Nombre', type: 'text', required: true, autoComplete: 'name' },
  { name: 'empresa', label: 'Empresa', type: 'text', autoComplete: 'organization' },
  { name: 'telefono', label: 'Teléfono', type: 'tel', autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'municipio', label: 'Municipio', type: 'text', required: true, autoComplete: 'address-level2' },
  { name: 'metros', label: 'Metros cuadrados aproximados', type: 'number' },
  { name: 'horario', label: 'Horas / días, si los conoces', type: 'text' },
];
const control = 'mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200';
// Keep the prerendered page usable without exposing a native form before React mounts.
const subscribeToClient = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function BusinessQuoteForm({ facility = '' }: { facility?: string }) {
  const isInteractive = useSyncExternalStore(subscribeToClient, getClientSnapshot, getServerSnapshot);
  const [preparedUrl, setPreparedUrl] = useState('');
  const fallbackWhatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent('Hola, quiero solicitar un presupuesto de limpieza para empresas.')}`;
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = ['Hola, quiero solicitar un presupuesto de limpieza para empresas.', ...Array.from(data.entries()).map(([key, value]) => `${key}: ${String(value).trim()}`).filter(line => !line.endsWith(': '))].join('\n');
    setPreparedUrl(`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`);
  }
  return <section id="presupuesto" className="scroll-mt-24 bg-emerald-50 py-20" aria-labelledby="quote-title"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
    <div><p className="text-sm font-bold uppercase tracking-widest text-emerald-700">Hablemos de tu instalación</p><h2 id="quote-title" className="mt-4 text-3xl font-bold text-gray-950 sm:text-4xl">Solicitar presupuesto</h2><p className="mt-5 text-lg text-gray-700">Presupuesto personalizado según instalaciones, frecuencia, horario y necesidades del servicio.</p><p className="mt-5 text-gray-600">Solo nombre y municipio son obligatorios. Prepararemos tu consulta para WhatsApp; podrás revisarla y enviarla allí.</p><a className="mt-6 inline-block font-semibold text-emerald-800 underline" href={`tel:${businessConfig.phone}`}>También puedes llamar al {businessConfig.phoneDisplay}</a></div>
    {isInteractive ? <form onSubmit={prepare} onChange={() => setPreparedUrl('')} className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">{fields.map(field => <label key={field.name} className="text-sm font-semibold text-gray-800" htmlFor={`b2b-${field.name}`}>{field.label}{field.required ? ' *' : ''}<input id={`b2b-${field.name}`} name={field.label} type={field.type} required={field.required} autoComplete={field.autoComplete} min={field.type === 'number' ? 1 : undefined} maxLength={field.type === 'number' ? undefined : 160} className={control} /></label>)}
        <label htmlFor="b2b-tipo" className="text-sm font-semibold text-gray-800">Tipo de instalación<select id="b2b-tipo" name="Tipo de instalación" defaultValue={facility} className={control}><option value="">Selecciona una opción</option>{['Oficina', 'Nave industrial', 'Almacén / centro logístico', 'Local comercial', 'Comunidad', 'Otro'].map(value => <option key={value}>{value}</option>)}</select></label>
        <label htmlFor="b2b-frecuencia" className="text-sm font-semibold text-gray-800">Frecuencia deseada<select id="b2b-frecuencia" name="Frecuencia deseada" className={control}><option value="">Por definir</option>{['Diaria', 'Varias veces por semana', 'Semanal', 'Otra frecuencia'].map(value => <option key={value}>{value}</option>)}</select></label>
        <label htmlFor="b2b-mensaje" className="text-sm font-semibold text-gray-800 sm:col-span-2">Mensaje<textarea id="b2b-mensaje" name="Mensaje" rows={4} maxLength={1500} className={control} /></label>
      </div>
      <p className="mt-5 text-sm text-gray-600">Al continuar a WhatsApp, compartirás los datos que decidas enviar para atender tu consulta. <Link to="/politica-de-privacidad" className="text-emerald-800 underline">Política de privacidad</Link>.</p>
      <button type="submit" className="mt-6 w-full rounded-full bg-emerald-700 px-5 py-4 font-semibold text-white hover:bg-emerald-800">Preparar solicitud para WhatsApp</button>
      {preparedUrl && <div role="status" className="mt-5 rounded-xl bg-emerald-50 p-5"><p className="text-gray-800">Tu solicitud está preparada. Aún no se ha enviado.</p><a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-emerald-800 underline">Abrir WhatsApp y revisar solicitud</a></div>}
    </form> : <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
      <p className="text-gray-700">Para utilizar el formulario, necesitas JavaScript. También puedes solicitar tu presupuesto directamente por WhatsApp o teléfono.</p>
      <a href={fallbackWhatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-4 font-semibold text-white hover:bg-emerald-800">Solicitar presupuesto por WhatsApp</a>
      <a href={`tel:${businessConfig.phone}`} className="mt-5 block font-semibold text-emerald-800 underline">Llamar al {businessConfig.phoneDisplay}</a>
    </div>}
  </div></section>;
}
