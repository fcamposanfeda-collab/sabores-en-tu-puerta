"use client";

import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id) return;

    function load() {
      if (window.localStorage.getItem("sep-consent") !== "accepted") return;
      if (document.getElementById("ga4")) return;
      const script = document.createElement("script");
      script.id = "ga4";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(script);
      const inline = document.createElement("script");
      inline.id = "ga4-inline";
      inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${id}');`;
      document.head.appendChild(inline);
    }

    load();
    window.addEventListener("sep-consent", load);
    return () => window.removeEventListener("sep-consent", load);
  }, []);

  return null;
}
