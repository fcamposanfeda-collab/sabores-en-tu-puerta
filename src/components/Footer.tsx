import Link from "next/link";
import { Logo } from "@/components/Logo";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { CookieSettings } from "@/components/CookieBanner";

export function Footer() {
  return (
    <footer className="border-t border-line bg-green-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo height={108} light />
          <p className="mt-4 text-sm leading-relaxed text-cream/80">
            Comida casera y reparto a domicilio en {site.areaSummary}
          </p>
        </div>
        <div>
          <p className="font-serif text-xl">Servicios</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="hover:underline" href={`/servicios/${service.slug}`}>
                  {service.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-serif text-xl">La casa</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:underline" href="/platos">Nuestros platos</Link></li>
            <li><Link className="hover:underline" href="/zonas-de-reparto">Zonas de reparto</Link></li>
            <li><Link className="hover:underline" href="/sobre-nosotros">Sobre nosotros</Link></li>
            <li><Link className="hover:underline" href="/blog">Blog</Link></li>
            <li><Link className="hover:underline" href="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
            <li><Link className="hover:underline" href="/datos-clave">Datos clave</Link></li>
            <li><Link className="hover:underline" href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-serif text-xl">Contacto</p>
          <address className="mt-3 space-y-2 text-sm not-italic leading-relaxed">
            <strong className="block font-sans">{site.name}</strong>
            <span className="block">{site.address.streetAddress}</span>
            <span className="block">
              {site.address.postalCode} {site.address.addressLocality}
            </span>
            <a className="block hover:underline" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a className="block hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="block hover:underline" href={site.instagram}>
              Instagram {site.instagramHandle}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-cream/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. Todos los derechos reservados.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/aviso-legal" className="hover:underline">Aviso legal</Link>
            <Link href="/politica-de-privacidad" className="hover:underline">Privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:underline">Cookies</Link>
            <CookieSettings />
          </nav>
        </div>
      </div>
    </footer>
  );
}
