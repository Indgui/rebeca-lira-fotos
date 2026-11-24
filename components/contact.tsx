"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { site, nav } from "@/lib/site";
import { Magnetic } from "./fx/magnetic";
import { WhatsApp, Instagram, Arrow } from "./icons";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
  const radius = useTransform(scrollYProgress, [0, 0.6], ["6rem", "2rem"]);

  return (
    <footer ref={ref} id="contato" className="px-2 pb-2 md:px-4 md:pb-4">
      <motion.div style={{ borderRadius: radius }} className="relative overflow-hidden brand-gradient px-6 pb-8 pt-24 text-cream md:px-12 md:pt-32">
        <motion.div style={{ y }}>
          <div className="mx-auto max-w-[1400px]">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-cream/60">( Entre em contato )</span>
            <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <h2 className="text-[clamp(2.6rem,6.4vw,6.6rem)] font-medium leading-[0.88] tracking-[-0.05em]">
                Sua jornada de cuidado<br /><span className="serif italic text-butter">pode começar com uma conversa.</span>
              </h2>
              <Magnetic strength={0.45}>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="WhatsApp"
                  className="grid size-44 place-items-center rounded-full bg-butter text-center font-medium text-ink transition-transform duration-500 hover:scale-105 md:size-56"
                >
                  <span className="flex flex-col items-center gap-2">
                    <WhatsApp className="size-7" />
                    Agende pelo<br />WhatsApp
                  </span>
                </a>
              </Magnetic>
            </div>
            <p className="mt-8 max-w-xl text-lg text-cream/75">
              Se você procura acompanhamento psicológico, avaliação neuropsicológica ou orientação especializada, estamos aqui para ouvir e ajudar a encontrar o caminho mais adequado.
            </p>

            <div className="mt-20 grid gap-10 border-t border-cream/15 pt-10 text-sm md:grid-cols-4">
              <div>
                <img src="/logo-equilibre.svg" alt="Clínica Equilibre Mente & Corpo" className="h-11 w-auto brightness-0 invert" />
                <p className="mt-4 max-w-xs text-cream/70">{site.descricao}</p>
              </div>
              <div>
                <p className="text-cream/50">Contato</p>
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 text-lg hover:text-butter"><WhatsApp className="size-4" /> {site.whatsapp}</a>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-2 text-lg hover:text-butter"><Instagram className="size-4" /> {site.instagramHandle}</a>
              </div>
              <div>
                <p className="text-cream/50">Navegação</p>
                <ul className="mt-2 grid grid-cols-2 gap-1">
                  {nav.map((n) => (
                    <li key={n.href}><a href={n.href} className="group inline-flex items-center gap-1 hover:text-butter">{n.label}<Arrow className="size-3 opacity-0 transition-opacity group-hover:opacity-100" /></a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-cream/50">Modalidades</p>
                <p className="mt-2 text-lg">Online e presencial</p>
                <p className="mt-1 text-cream/70">Presencial em {site.bairro}, {site.cidade}</p>
                <p className="mt-4 text-xs text-cream/50">Em caso de emergência emocional, ligue para o CVV (188) ou procure o serviço de saúde mais próximo.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 overflow-hidden">
            <p className="serif whitespace-nowrap text-center text-[22vw] italic leading-[0.8] text-cream/15">Equilibre</p>
          </div>
          <div className="mx-auto mt-4 flex max-w-[1400px] flex-wrap justify-between gap-2 text-xs text-cream/50">
            <span>© {new Date().getFullYear()} {site.legalName} · Todos os direitos reservados</span>
            <span>{site.rt}</span>
            <span>Fotos ilustrativas: Unsplash e Pexels</span>
            <a href="#inicio" className="md:mr-16">Voltar ao topo ↑</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,.4)] transition-transform hover:scale-110"
    >
      <WhatsApp className="size-7" />
    </a>
  );
}
