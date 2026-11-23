import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "@fontsource-variable/inter-tight";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Psicóloga | Infantil, Adultos, TEA & TDAH, Avaliação Neuropsicológica`,
  description: `${site.fullName}, psicóloga clínica (${site.crp}). Atendimento infantil e adulto, TEA e TDAH, avaliação neuropsicológica e orientação parental em ABA. Online e presencial.`,
  keywords: ["psicóloga", "avaliação neuropsicológica", "TEA", "TDAH", "autismo", "ABA", "VB-MAPP", "psicologia infantil", "terapia online"],
  openGraph: {
    title: `${site.name} · Psicóloga`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/rebeca-og.jpg", width: 600, height: 750, alt: site.name }],
  },
};

export const viewport: Viewport = { themeColor: "#f6f1e9" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: site.fullName,
  description: site.tagline,
  url: site.url,
  telephone: "+55-11-97609-5404",
  image: `${site.url}/rebeca-og.jpg`,
  sameAs: [site.instagram],
  areaServed: "BR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="grain">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
