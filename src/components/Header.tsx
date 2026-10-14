"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { services } from "@/data/services";
import { specializedHub, specializedMenus } from "@/data/specialized-menus";

const links = [
  { href: "/", label: "Inicio", current: (path: string) => path === "/" },
  { href: "/platos", label: "Nuestros platos", current: (path: string) => path.startsWith("/platos") },
  {
    href: specializedHub.path,
    label: specializedHub.nav,
    current: (path: string) => path.startsWith(specializedHub.path),
    children: specializedMenus.map((menu) => ({
      href: `${specializedHub.path}/${menu.slug}`,
      label: menu.nav,
    })),
  },
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
];

function PedirAhora({ className = "", current = false }: { className?: string; current?: boolean }) {
  return (
    <Link
      href="/contacto"
      aria-current={current ? "page" : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border border-green-deep px-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-green-deep [&:hover]:border-green-deep [&:hover]:bg-green-deep [&:hover]:text-cream ${className}`}
    >
      Pedir información ahora <span aria-hidden="true"> →</span>
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
        <nav aria-label="Principal" className="hidden items-center gap-x-4 xl:flex">
          {links.map((link) => {
            const active = link.current(pathname);
            const itemClass = `relative py-1 text-sm text-ink hover:text-green-dark ${
              active ? "text-green-dark after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:bg-green-dark" : ""
            }`;
            if (!link.children) {
              return (
                <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={itemClass}>
                  {link.label}
                </Link>
              );
            }
            return (
              <div key={link.href} className="group relative">
                <Link href={link.href} aria-current={active ? "page" : undefined} className={`inline-flex items-center gap-1 ${itemClass}`}>
                  {link.label}
                  <span aria-hidden="true" className="text-[0.6rem]">▾</span>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-52 rounded-2xl border border-line bg-paper p-2 shadow-sm">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-cream hover:text-green-dark"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <PedirAhora className="ml-2" current={pathname.startsWith("/contacto")} />
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
            {links.map((link) =>
              link.children ? (
                <details key={link.href} className="border-b border-line" open={link.current(pathname)}>
                  <summary className="cursor-pointer py-3 text-lg">{link.label}</summary>
                  <div className="flex flex-col pb-3 pl-3">
                    <Link href={link.href} className="py-2 text-ink-soft">
                      Ver todos
                    </Link>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className="py-2 text-ink-soft">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link key={link.href} href={link.href} className="border-b border-line py-3 text-lg">
                  {link.label}
                </Link>
              ),
            )}
            <PedirAhora className="mt-4" current={pathname.startsWith("/contacto")} />
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
