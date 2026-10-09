"use client";

import { track } from "@/lib/track";

type EventName = "click_llamar" | "click_whatsapp" | "generate_lead";

export function TrackedLink({
  event,
  className,
  children,
  href,
  label,
}: {
  event: EventName;
  className?: string;
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      onClick={() => track(event)}
    >
      {children}
    </a>
  );
}
