import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CallButton, WhatsappButton } from "@/components/Buttons";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { ServiceFinder } from "@/components/ServiceFinder";
import { WeekMenu } from "@/components/WeekMenu";
import { ZoneChecker, type ZoneEntry } from "@/components/ZoneChecker";
import { faqs } from "@/data/faqs";
import { enabledLocalities, localities } from "@/data/localities";
import { site } from "@/data/site";
import { faqSchema, graph, localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

const homeFaqs = faqs.filter((faq) => faq.home);

const audiences = [
  {
    title: "Para casa",
    text: "Comida casera para ti o tu familia, con el menú de la semana resuelto.",
    image: "/images/platos/real-cocido.jpg",
    alt: "Cocido completo en su envase",
    href: "/servicios/comida-a-domicilio",
    service: "Comida a domicilio",
  },
  {
    title: "Personas mayores",
    text: "Menús adaptados en textura y dieta, para casa o para residencias y centros.",
    image: "/images/platos/real-merluza-salsa-verde-mesa.jpg",
    alt: "Merluza en salsa verde con almejas y guisantes en su envase",
    href: "/menus-especializados/mayores",
    service: "Comida a domicilio",
  },
  {
    title: "Colegios y guarderías",
    text: "Menús equilibrados para colectividades, con dietas adaptadas cuando hacen falta.",
    image: "/images/platos/real-arroz-verduras-mesa.jpg",
    alt: "Arroz con verduras en su envase",
    href: "/servicios/colectividades",
    service: "Reparto a colectividades",
  },
  {
    title: "Empresas",
    text: "Coffee break, tapas y comida para la oficina o una jornada de trabajo.",
    image: "/images/platos/real-ensalada.jpg",
    alt: "Ensalada de la huerta en su envase",
    href: "/servicios/catering-empresa-y-eventos",
    service: "Catering en tu empresa y eventos",
  },
  {
    title: "Celebraciones",
    text: "Un menú a medida para una comida familiar, un cumpleaños o un evento.",
    image: "/images/platos/real-medallon-mesa.jpg",
    alt: "Medallones de cerdo al ajillo con patatas en su envase",
    href: "/servicios/catering-personalizado",
    service: "Catering personalizado para eventos",
  },
  {
    title: "Monterías y caza",
    text: "Desayuno campero, almuerzo y comida en la finca para el día de caza.",
    image: "/images/platos/real-migas-mesa.jpg",
    alt: "Migas con chorizo y panceta en su envase",
    href: "/servicios/catering-monterias-eventos-caza",
    service: "Catering para monterías y caza",
  },
];

const zones: ZoneEntry[] = localities.map((locality) => ({
  slug: locality.slug,
  name: locality.name,
  enabled: locality.enabled,
  aliases: locality.aliases ?? [],
}));

const pillars = [
  { title: "Comida casera y de calidad", text: "Elaborada con sabor de casa, no como una línea industrial anónima.", icon: HouseIcon },
  { title: "Dietas equilibradas y adaptadas", text: "Menú basal y adaptaciones cuando el centro o la casa lo indican.", icon: LeafIcon },
  { title: "Con el respaldo de un nutricionista", text: "El menú basal se adapta a lo que necesitas, sin que lo organices tú.", icon: CrossIcon },
  { title: "Estrictos controles de Sanidad", text: "Trabajamos con control higiénico.", icon: ShieldIcon },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationSchema(),
          websiteSchema(),
          localBusinessSchema(),
          faqSchema(homeFaqs),
        )}
      />
      <section className="relative overflow-hidden bg-[#ede9dd]">
        <Image
          src="/images/hero/portada.jpg"
          alt="Sabores en tu Puerta"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="relative z-10 mx-auto max-w-xl px-4 pb-8 pt-[25.5rem] text-center sm:pt-[20rem] lg:pt-[32vw] lg:pb-10">
          <h1 className="mx-auto max-w-lg font-serif text-2xl leading-tight text-green-deep sm:text-3xl lg:text-4xl">
            Comida casera a domicilio, con menús adaptados a cada persona
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink sm:text-base">
            Cocinamos nosotros, con el respaldo de un nutricionista. Tú nos dices para quién es y te lo llevamos a la puerta.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#te-ayudamos"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-green-dark px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-green-deep sm:w-auto"
            >
              Pide presupuesto <span aria-hidden="true">&nbsp;→</span>
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-green-dark bg-cream/80 px-6 text-sm font-semibold uppercase tracking-[0.12em] text-green-deep hover:bg-green-deep hover:text-cream sm:w-auto"
            >
              Cómo funciona
            </Link>
          </div>
          <ul className="mx-auto mt-6 grid max-w-md grid-cols-2 justify-center gap-y-5 sm:mt-4 sm:flex sm:gap-0">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <li key={pillar.title} className="flex items-stretch justify-center text-green-dark">
                  {index > 0 ? <span className="mx-2 hidden w-px bg-green-dark/70 sm:block" aria-hidden="true" /> : null}
                  <div className="flex w-[5.6rem] flex-col items-center gap-1.5 px-1">
                    <Icon />
                    <p className="text-[0.72rem] leading-tight text-green-deep">{pillar.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-col items-center text-green-dark sm:mt-7">
            <div className="flex items-center gap-3">
              <SprigIcon />
              <span className="h-px w-8 bg-green-dark sm:w-14" aria-hidden="true" />
              <ScooterIcon />
              <span className="h-px w-8 bg-green-dark sm:w-14" aria-hidden="true" />
              <SprigIcon className="scale-x-[-1]" />
            </div>
            <p className="mt-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em]">Reparto a domicilio</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="para-quien-title">
        <h2 id="para-quien-title" className="font-serif text-4xl text-green-deep">¿Para quién cocinamos?</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          No eliges platos de una carta: nosotros preparamos el menú según para quién sea. Elige tu caso.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <li key={audience.title} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-paper transition hover:border-green hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={audience.image}
                  alt={audience.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-2xl text-green-deep">
                  <Link href={audience.href} className="hover:underline">{audience.title}</Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{audience.text}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                  <Link
                    href={`/contacto/?${new URLSearchParams({ servicio: audience.service }).toString()}`}
                    className="text-green-dark underline-offset-2 hover:underline"
                  >
                    Pedir presupuesto <span aria-hidden="true">→</span>
                  </Link>
                  <Link href={audience.href} className="text-ink-soft underline-offset-2 hover:underline">
                    Saber más
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="como-funciona" className="scroll-mt-24 bg-paper py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-serif text-4xl text-green-deep">Cómo funciona</h2>
          <ol className="relative mt-10 grid gap-8 md:mt-12 md:grid-cols-4 md:gap-6">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-7 right-[12.5%] left-[12.5%] hidden h-px -translate-y-1/2 bg-green-dark/40 md:block"
            />
            {[
              {
                title: "Nos cuentas el encargo",
                text: "Servicio y localidad. El resto, si quieres, en el mensaje.",
                icon: ChatIcon,
              },
              {
                title: "Preparamos la propuesta",
                text: "Menú y presupuesto por escrito.",
                icon: ProposalIcon,
              },
              {
                title: "Cocinamos en casa",
                text: "Comida casera, ingredientes de primeras marcas y conservación cuidada.",
                icon: PotIcon,
              },
              {
                title: "Repartimos en tu zona",
                text: "Ciudad Real y alrededores. Te lo llevamos a casa.",
                icon: CourierIcon,
              },
            ].map(({ title, text, icon: Icon }, index, steps) => (
              <li key={title} className="relative flex gap-4 md:block md:text-center">
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-7 bottom-[-2rem] left-7 w-px -translate-x-1/2 bg-green-dark/40 md:hidden"
                  />
                ) : null}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-green/30 bg-cream text-green-dark md:mx-auto">
                  <Icon />
                </div>
                <div>
                  <p className="font-serif text-3xl text-leaf">0{index + 1}</p>
                  <h3 className="mt-2 font-serif text-2xl text-green-deep">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link
              href="#te-ayudamos"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-dark px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white hover:bg-green-deep"
            >
              Empezar ahora <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="menu-title">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="menu-title" className="font-serif text-4xl text-green-deep">Un menú de ejemplo</h2>
          <Link href="/platos" className="text-sm font-semibold text-green-dark underline-offset-2 hover:underline">
            Ver más platos
          </Link>
        </div>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">
          Cada comida lleva primer plato, segundo, pan y postre. Así podría ser una semana: el menú real lo prepara nuestro equipo según la temporada y lo que necesita cada persona.
        </p>
        <WeekMenu />
      </section>

      <section className="bg-green-deep py-16 text-cream" aria-labelledby="porque-title">
        <div className="mx-auto max-w-6xl px-5">
          <h2 id="porque-title" className="font-serif text-4xl">Por qué elegirnos</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <li key={pillar.title}>
                <h3 className="font-serif text-2xl">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80">{pillar.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="te-ayudamos" className="scroll-mt-24 bg-paper py-16" aria-labelledby="ayuda-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 id="ayuda-title" className="font-serif text-4xl text-green-deep">Te ayudamos a elegir</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Cuatro preguntas y te llevamos al presupuesto con todo ya rellenado. Sin compromiso.
            </p>
          </div>
          <ServiceFinder localities={enabledLocalities.map((locality) => locality.name)} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="zonas-title">
        <h2 id="zonas-title" className="font-serif text-4xl text-green-deep">¿Llegamos a tu pueblo?</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">
          Repartimos en {site.areaSummary} Escribe tu localidad y te lo decimos.
        </p>
        <div className="mt-6 max-w-2xl">
          <ZoneChecker zones={zones} />
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {enabledLocalities.slice(0, 12).map((locality) => (
            <li key={locality.slug}>
              <Link
                href={`/zonas-de-reparto/${locality.slug}`}
                className="inline-flex rounded-full border border-line bg-paper px-3 py-1 text-sm hover:border-green"
              >
                {locality.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/zonas-de-reparto" className="mt-4 inline-block text-sm font-semibold text-green-dark underline">
          Ver todas las zonas
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8" aria-labelledby="faq-title">
        <h2 id="faq-title" className="font-serif text-4xl text-green-deep">Preguntas frecuentes</h2>
        <div className="mt-6">
          <FaqList items={homeFaqs} />
        </div>
        <Link href="/preguntas-frecuentes" className="mt-4 inline-block text-sm font-semibold text-green-dark underline">
          Ver todas las preguntas
        </Link>
      </section>

      <section id="presupuesto" className="scroll-mt-24 bg-paper py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-serif text-4xl text-green-deep">Pregunta sin compromiso</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Cuéntanos el servicio y la localidad. Te respondemos con una propuesta.
              <span className="mt-1 block">
                Si lo prefieres, llama al {site.phoneDisplay} o escribe por WhatsApp.
              </span>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <WhatsappButton />
            </div>
          </div>
          <Suspense fallback={<p>Cargando el formulario…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function HouseIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="text-green-dark">
      <path d="M7 16.5 18 8l11 8.5V29H7V16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 29v-7h6v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="text-green-dark">
      <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 22c5-.4 9-5 10.5-11-5.2.6-9.4 4.4-10.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14.5 20.5c2.2-1.6 4.4-4 6-7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="text-green-dark">
      <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 12.5v11M12.5 18h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="text-green-dark">
      <path d="M18 7 27.5 11v7.2c0 5.6-3.7 9.4-9.5 11-5.8-1.6-9.5-5.4-9.5-11V11L18 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m13.8 18 2.8 2.8 5.6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SprigIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true" className={`text-green-dark ${className}`}>
      <path d="M2 12c6-1 12-6 16-11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8 11c1-2.4 2.2-4 4.2-5.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 12.2c1.6-2 3.4-3.4 6-4.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M8 9.5h18a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H16.2L12 28.2V24H8a3 3 0 0 1-3-3v-8.5a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 15.5h12M12 19.5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ProposalIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M11 7h10.2L27 12.8V29H11V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M21 7v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 17.5h8M15 21.5h8M15 25.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PotIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M13.2 11c.8-1.5.3-2.4-.7-3.4M18 10.2c.8-1.5.3-2.4-.7-3.4M22.8 11c.8-1.5.3-2.4-.7-3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 16.5h19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11.5 16.5h13V25a3.2 3.2 0 0 1-3.2 3.2h-6.6A3.2 3.2 0 0 1 11.5 25v-8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 20H6.2M27.5 20H29.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CourierIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="13.5" cy="8.8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 12v7.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.8 16.2h4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.5 19.4 10 28.2M13.5 19.4l3.8 8.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.8 14.4h7.4v7.2h-7.4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20.8 14.4V12.6h3.4v1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6 15.4 18.8 17.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ScooterIcon() {
  return (
    <svg width="54" height="30" viewBox="0 0 54 30" fill="none" aria-hidden="true" className="text-green-dark">
      <path d="M2 16h5M2 20h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16" cy="22" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="40" cy="22" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 22h8l3.5-8H38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 14h8l3 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 10h6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M22 14h6v5h-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="36" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
