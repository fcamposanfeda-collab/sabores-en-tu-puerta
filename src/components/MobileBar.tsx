import { phoneHref, whatsappUrl } from "@/data/site";
import { TrackedLink } from "@/components/TrackedLink";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 pb-[env(safe-area-inset-bottom)]">
        <TrackedLink
          href={phoneHref()}
          event="click_llamar"
          label="Llamar al 675 601 543"
          className="flex min-h-14 items-center justify-center border-r border-line text-sm font-semibold uppercase tracking-[0.12em] text-green-deep"
        >
          Llamar
        </TrackedLink>
        <TrackedLink
          href={whatsappUrl()}
          event="click_whatsapp"
          label="Escribir por WhatsApp"
          className="flex min-h-14 items-center justify-center bg-green-dark text-sm font-semibold uppercase tracking-[0.12em] text-white"
        >
          WhatsApp
        </TrackedLink>
      </div>
    </div>
  );
}
