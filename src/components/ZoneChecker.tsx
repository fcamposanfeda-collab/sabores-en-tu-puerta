"use client";

import Link from "next/link";
import { useState } from "react";

export type ZoneEntry = {
  slug: string;
  name: string;
  enabled: boolean;
  km: number;
  hub: string;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

export function ZoneChecker({ zones, radiusKm }: { zones: ZoneEntry[]; radiusKm: number }) {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState<string | null>(null);

  const result = checked === null ? undefined : zones.find((zone) => normalize(zone.name) === normalize(checked)) ?? null;

  return (
    <div>
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          if (query.trim()) setChecked(query);
        }}
      >
        <label htmlFor="zona" className="sr-only">
          Tu localidad
        </label>
        <input
          id="zona"
          list="zonas-lista"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Escribe tu pueblo o ciudad"
          autoComplete="address-level2"
          className="min-h-12 flex-1 rounded-full border border-line bg-paper px-5 text-sm"
        />
        <datalist id="zonas-lista">
          {zones.map((zone) => (
            <option key={zone.slug} value={zone.name} />
          ))}
        </datalist>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-green-dark px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white"
        >
          Comprobar
        </button>
      </form>

      <div aria-live="polite" className="mt-4 text-sm leading-relaxed">
        {result ? (
          result.enabled ? (
            <p className="rounded-2xl border border-green/30 bg-paper p-4 text-ink">
              <strong className="text-green-deep">Sí, llegamos a {result.name}.</strong>{" "}
              {result.km > 0 ? `Está a unos ${result.km} km de ${result.hub}. ` : ""}
              <Link href={`/zonas-de-reparto/${result.slug}`} className="font-semibold text-green-dark underline">
                Ver el servicio en {result.name}
              </Link>{" "}
              o{" "}
              <Link
                href={`/contacto/?${new URLSearchParams({ localidad: result.name }).toString()}`}
                className="font-semibold text-green-dark underline"
              >
                pedir presupuesto
              </Link>
              .
            </p>
          ) : (
            <p className="rounded-2xl border border-line bg-paper p-4 text-ink">
              <strong className="text-green-deep">{result.name} queda fuera de nuestro radio habitual.</strong> Para
              encargos grandes o eventos puede haber opción:{" "}
              <Link href="/contacto/" className="font-semibold text-green-dark underline">
                escríbenos
              </Link>{" "}
              y lo vemos.
            </p>
          )
        ) : result === null ? (
          <p className="rounded-2xl border border-line bg-paper p-4 text-ink">
            <strong className="text-green-deep">No tenemos «{checked}» en la lista.</strong> Repartimos hasta {radiusKm} km
            de Ciudad Real y de Puertollano. Si está en esa zona,{" "}
            <Link href="/contacto/" className="font-semibold text-green-dark underline">
              pregúntanos
            </Link>{" "}
            y te lo confirmamos.
          </p>
        ) : null}
      </div>
    </div>
  );
}
