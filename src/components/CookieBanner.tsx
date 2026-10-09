"use client";

import { useEffect, useState } from "react";

const key = "sep-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(key)) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener("sep-open-cookies", open);
    return () => window.removeEventListener("sep-open-cookies", open);
  }, []);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(key, value);
    setVisible(false);
    window.dispatchEvent(new Event("sep-consent"));
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-20 z-50 rounded-3xl border border-line bg-paper p-5 shadow-lg md:bottom-4 md:left-auto md:right-4 md:max-w-md">
      <p className="font-serif text-2xl text-green-deep">Cookies</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Guardamos tu elección en este navegador. Si aceptas, cargamos Google Analytics, que usa cookies de medición. Si rechazas, la web sigue igual y no se activa esa medición.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="min-h-11 rounded-full bg-green-dark px-4 text-sm font-semibold text-white"
          onClick={() => choose("accepted")}
        >
          Aceptar
        </button>
        <button
          type="button"
          className="min-h-11 rounded-full border border-green-dark px-4 text-sm font-semibold text-green-deep"
          onClick={() => choose("rejected")}
        >
          Rechazar
        </button>
        <a href="/politica-de-cookies" className="inline-flex min-h-11 items-center px-2 text-sm underline">
          Ver política
        </a>
      </div>
    </div>
  );
}

export function CookieSettings() {
  return (
    <button
      type="button"
      className="hover:underline"
      onClick={() => window.dispatchEvent(new Event("sep-open-cookies"))}
    >
      Configurar cookies
    </button>
  );
}
