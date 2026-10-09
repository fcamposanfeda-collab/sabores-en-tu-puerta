"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { services } from "@/data/services";

const links = [
  { href: "/", label: "Inicio", current: (path: string) => path === "/" },
  { href: "/platos", label: "Nuestros menús", current: (path: string) => path.startsWith("/platos") },
  { href: "/#como-funciona", label: "Cómo funciona", current: () => false },
  {
    href: "/servicios/colectividades",
    label: "Menús adaptados",
    current: (path: string) => path.startsWith("/servicios/colectividades"),
  },
  {
    href: "/sobre-nosotros",
    label: "Sobre nosotros",
    current: (path: string) => path.startsWith("/sobre-nosotros"),
  },
  { href: "/contacto", label: "Contacto", current: (path: string) => path.startsWith("/contacto") },
];

function PedirAhora({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contacto"
      className={`inline-flex min-h-11 items-center justify-center rounded-md border border-green-deep px-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-green-deep hover:bg-green-deep hover:text-cream ${className}`}
    >
      Pedir ahora <span aria-hidden="true"> →</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-cream">
      <div className="relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 xl:justify-center">
        {home ? null : <Logo height={58} className="xl:absolute xl:left-4" />}
        <nav aria-label="Principal" className="hidden items-center gap-x-5 xl:flex">
          {links.map((link) => {
            const active = link.current(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm text-ink hover:text-green-dark ${
                  active ? "text-green-dark after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:bg-green-dark" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <PedirAhora className="ml-2" />
        </nav>
        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>
      {open ? (
        <div id="menu-movil" className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-cream xl:hidden">
          <nav aria-label="Móvil" className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="border-b border-line py-3 text-lg">
                {link.label}
              </Link>
            ))}
            <PedirAhora className="mt-4" />
            <p className="pt-5 font-serif text-xl text-green-deep">Servicios</p>
            {services.map((service) => (
              <Link key={service.slug} href={`/servicios/${service.slug}`} className="py-2 text-ink-soft">
                {service.name}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
