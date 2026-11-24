import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "@fontsource-variable/inter-tight";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.fullName} | Psicologia, Avaliação Neuropsicológica, Psicopedagogia, TEA e TDAH`,
  description: `${site.name}: psicologia para crianças, adolescentes, adultos, idosos e casais, avaliação neuropsicológica, psicopedagogia e acompanhamento em TEA e TDAH. Atendimento online e presencial.`,
  keywords: ["clínica de psicologia", "avaliação neuropsicológica", "psicopedagogia", "TEA", "TDAH", "autismo", "terapia de casal", "psicologia infantil", "terapia online"],
  openGraph: {
    title: site.fullName,
    description: site.tagline,
    url: site.url,
    siteName: site.fullName,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-equilibre.jpg", width: 1200, height: 630, alt: site.fullName }],
  },
};

export const viewport: Viewport = { themeColor: "#f7f6f2" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.fullName,
  legalName: site.legalName,
  description: site.tagline,
  url: site.url,
  logo: `${site.url}/logo-equilibre.svg`,
  image: `${site.url}/og-equilibre.jpg`,
  telephone: "+55-11-91531-6550",
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
