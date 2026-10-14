import { phoneHref, whatsappUrl } from "@/data/site";
import { TrackedLink } from "@/components/TrackedLink";

const line =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-green-dark px-5 text-center text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-green-deep hover:bg-green-deep hover:text-cream";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <TrackedLink
      href={phoneHref()}
      event="click_llamar"
      label="Llamar al 675 601 543"
      className={`${line} ${className}`}
    >
      Llamar
    </TrackedLink>
  );
}

export function WhatsappButton({
  className = "",
  message,
  children = "WhatsApp",
}: {
  className?: string;
  message?: string;
  children?: React.ReactNode;
}) {
  return (
    <TrackedLink
      href={whatsappUrl(message)}
      event="click_whatsapp"
      label="Escribir por WhatsApp"
      className={`${line} ${className}`}
    >
      {children}
    </TrackedLink>
  );
}

export function CtaPair() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <CallButton />
      <WhatsappButton />
    </div>
  );
}
