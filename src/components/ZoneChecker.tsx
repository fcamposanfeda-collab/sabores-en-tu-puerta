"use client";

import Link from "next/link";
import { useState } from "react";

export type ZoneEntry = {
  slug: string;
  name: string;
  enabled: boolean;
  aliases: string[];
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

function findZone(zones: ZoneEntry[], value: string) {
  const query = normalize(value);
  const names = (zone: ZoneEntry) => [zone.name, ...zone.aliases].map(normalize);
  return (
    zones.find((zone) => names(zone).includes(query)) ??
    (query.length >= 4 ? zones.find((zone) => names(zone).some((name) => name.startsWith(query))) : undefined) ??
    null
  );
}

export function ZoneChecker({ zones }: { zones: ZoneEntry[] }) {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState<string | null>(null);

  const result = checked === null ? undefined : findZone(zones, checked);

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
          {zones
            .filter((zone) => zone.enabled)
            .map((zone) => (
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
              <strong className="text-green-deep">{result.name} queda fuera de nuestra zona de reparto habitual.</strong> Para
              encargos grandes o eventos puede haber opción:{" "}
              <Link href="/contacto/" className="font-semibold text-green-dark underline">
                escríbenos
              </Link>{" "}
              y lo vemos.
            </p>
          )
        ) : result === null ? (
          <p className="rounded-2xl border border-line bg-paper p-4 text-ink">
            <strong className="text-green-deep">No tenemos «{checked}» en la lista.</strong> Repartimos en Ciudad Real,
            Puertollano y pueblos de alrededor. Si está cerca,{" "}
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
