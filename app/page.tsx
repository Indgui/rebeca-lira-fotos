import { SmoothScroll } from "@/components/fx/smooth-scroll";
import { Cursor } from "@/components/fx/cursor";
import { Preloader } from "@/components/fx/preloader";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Areas } from "@/components/areas";
import { Avaliacao } from "@/components/avaliacao";
import { Atendimento } from "@/components/atendimento";
import { ComoComecar } from "@/components/como-comecar";
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
        <Atendimento />
        <ComoComecar />
        <Faq />
      </main>
      <Contact />
      <WhatsAppFloat />
    </>
  );
}
