import { SmoothScroll } from "@/components/fx/smooth-scroll";
import { Cursor } from "@/components/fx/cursor";
import { Preloader } from "@/components/fx/preloader";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Areas } from "@/components/areas";
import { Avaliacao } from "@/components/avaliacao";
import { Aba } from "@/components/aba";
import { Atendimento } from "@/components/atendimento";
import { Faq } from "@/components/faq";
import { Contact, WhatsAppFloat } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Areas />
        <Avaliacao />
        <Aba />
        <Atendimento />
        <Faq />
      </main>
      <Contact />
      <WhatsAppFloat />
    </>
  );
}
