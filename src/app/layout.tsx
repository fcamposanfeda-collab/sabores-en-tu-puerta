import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";
import { site } from "@/data/site";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Comida casera a domicilio en Ciudad Real",
    template: "%s",
  },
  description:
    "Comida casera a domicilio en Ciudad Real y Puertollano, hasta 60 km. Menús para casas, colegios y residencias. Pide presupuesto.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.ogLocale,
    siteName: site.name,
    title: "Comida casera a domicilio en Ciudad Real",
    description:
      "Comida casera a domicilio en Ciudad Real y Puertollano, hasta 60 km. Pide presupuesto sin precios en la web.",
  },
  twitter: { card: "summary_large_image" },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-ES"
      className={`${outfit.variable} ${cormorant.variable} ${script.variable} h-full`}
    >
      <body className="min-h-full bg-cream text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Saltar al contenido
        </a>
        <Suspense fallback={<div className="h-[4.5rem] border-b border-line bg-cream" />}>
          <Header />
        </Suspense>
        <main id="contenido" className="pt-[4.5rem] pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
