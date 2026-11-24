import type { Metadata, Viewport } from "next";
import { faqs, site } from "@/lib/site";
import "@fontsource-variable/inter-tight";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Clínica Equilibre | Psicologia e Neuropsicologia em São Miguel Paulista",
  description: `${site.name}: psicologia para crianças, adolescentes, adultos, idosos e casais, avaliação neuropsicológica, psicopedagogia e acompanhamento em TEA e TDAH. Atendimento online e presencial em São Miguel Paulista, São Paulo – SP.`,
  keywords: ["clínica de psicologia", "avaliação neuropsicológica", "psicopedagogia", "TEA", "TDAH", "autismo", "terapia de casal", "psicologia infantil", "terapia online", "psicólogo São Miguel Paulista", "clínica de psicologia zona leste"],
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

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
  address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR", streetAddress: "São Miguel Paulista" },
  areaServed: "BR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="grain">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </body>
    </html>
  );
}
