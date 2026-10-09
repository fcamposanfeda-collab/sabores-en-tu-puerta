import { CtaPair } from "@/components/Buttons";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  ...pageMeta({
    title: "Solicitud enviada",
    description: "Hemos recibido tu solicitud de presupuesto de Sabores en tu Puerta.",
    path: "/contacto/gracias",
  }),
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf">Contacto</p>
      <h1 className="mt-3 font-serif text-5xl text-green-deep">Ya tenemos tu solicitud</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        Gracias por escribir. Revisaremos el servicio, la localidad y los comensales, y te responderemos por teléfono o por email. Si es urgente, llama o escribe por WhatsApp.
      </p>
      <div className="mt-8">
        <CtaPair />
      </div>
    </div>
  );
}
