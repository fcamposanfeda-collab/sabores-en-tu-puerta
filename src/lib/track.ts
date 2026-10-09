"use client";

type EventName = "click_llamar" | "click_whatsapp" | "generate_lead";

export function track(name: EventName, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem("sep-consent") !== "accepted") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", name, params);
}
