import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">Error 404</p>
      <h1 className="mt-3 font-serif text-5xl text-green-deep">Esta página no está en la carta</h1>
      <p className="mt-4 text-lg text-ink-soft">
        El enlace no corresponde a ninguna página. Puedes volver al inicio, ver los servicios o pedir presupuesto.
      </p>
      <ul className="mt-6 space-y-2 text-green-dark underline">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li><Link href="/zonas-de-reparto">Zonas de reparto</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </div>
  );
}
