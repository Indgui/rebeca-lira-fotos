"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { avaliacao, photos, site } from "@/lib/site";
import { FadeUp } from "./fx/reveal";
import { Magnetic } from "./fx/magnetic";
import { WhatsApp } from "./icons";

function Intro() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-cream/60">( Avaliação Neuropsicológica )</span>
        <h2 className="text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
          Entender como o cérebro funciona para <span className="serif italic text-butter">cuidar melhor.</span>
        </h2>
      </div>
      <p className="max-w-lg text-lg text-cream/75">{avaliacao.intro}</p>
    </div>
  );
}

function Formato() {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-3xl bg-cream/10 p-6">
          <div className="text-4xl font-medium leading-none tracking-tighter sm:text-5xl md:text-6xl">12–15</div>
          <p className="mt-2 text-cream/70">sessões</p>
        </div>
        <div className="rounded-3xl bg-butter p-6 text-ink">
          <div className="text-4xl font-medium leading-none tracking-tighter sm:text-5xl md:text-6xl">40–50</div>
          <p className="mt-2 text-ink/70">minutos cada</p>
        </div>
      </div>
      <p className="text-lg text-cream/80">{avaliacao.formato}</p>
      <ul className="flex flex-wrap gap-2 text-sm">
        {["Inteligência", "Memória", "Atenção", "Funções executivas", "Personalidade", "Linguagem"].map((t) => (
          <li key={t} className="rounded-full border border-cream/25 px-4 py-1.5">{t}</li>
        ))}
      </ul>
    </div>
  );
}

function Etapa({ i }: { i: number }) {
  const e = avaliacao.etapas[i];
  return (
    <div className="flex h-full flex-col justify-between">
      <span className="serif text-[8rem] italic leading-none text-butter/90 md:text-[11rem]">0{i + 1}</span>
      <div>
        <h3 className="text-3xl font-medium tracking-tight md:text-4xl">{e.t}</h3>
        <p className="mt-3 text-lg text-cream/75">{e.d}</p>
      </div>
    </div>
  );
}

function Indicacoes() {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div>
        <h3 className="text-3xl font-medium tracking-tight md:text-4xl">Para quem é indicada</h3>
        <ul className="mt-6 space-y-3">
          {avaliacao.indicacoes.map((it) => (
            <li key={it} className="flex gap-3 border-b border-cream/10 pb-3 text-cream/85">
              <span className="text-butter">✳</span>
              {it}
            </li>
          ))}
        </ul>
      </div>
      <Magnetic>
        <a
          href={site.avaliacaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-butter px-7 py-4 font-medium text-ink transition-colors hover:bg-cream"
        >
          <WhatsApp className="size-5" /> Quero saber sobre a avaliação
        </a>
      </Magnetic>
    </div>
  );
}

const panels = [
  { el: <Intro />, w: "w-[85vw] md:w-[44vw]" },
  { el: <Formato />, w: "w-[85vw] md:w-[36vw]" },
  ...avaliacao.etapas.map((_, i) => ({ el: <Etapa i={i} />, w: "w-[80vw] md:w-[28vw]" })),
  { el: <Indicacoes />, w: "w-[85vw] md:w-[38vw]" },
];

export function Avaliacao() {
  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (p) => {
    const el = track.current;
    if (!el) return 0;
    const max = el.scrollWidth - window.innerWidth;
    return -max * p;
  });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="avaliacao" className="bg-forest text-cream">
      {/* desktop: rolagem horizontal fixada */}
      <div ref={ref} className="relative hidden h-[420vh] md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div ref={track} style={{ x }} className="flex gap-6 px-8 will-change-transform">
            {panels.map((p, i) => (
              <div
                key={i}
                className={`${p.w} h-[72vh] shrink-0 rounded-[2rem] border border-cream/10 p-10 ${i === 0 ? "border-none p-0 pr-10" : "bg-cream/[.04]"}`}
              >
                {p.el}
              </div>
            ))}
            <div className="relative h-[72vh] w-[30vw] shrink-0 overflow-hidden rounded-[2rem]">
              <Image src={photos.avaliacaoPainel.src} alt={photos.avaliacaoPainel.alt} fill sizes="30vw" className="object-cover" />
            </div>
          </motion.div>
          <div className="mx-8 mt-8 h-px bg-cream/15">
            <motion.div style={{ width: bar }} className="h-px bg-butter" />
          </div>
        </div>
      </div>

      {/* celular: lista vertical */}
      <div className="space-y-6 px-4 py-24 md:hidden">
        <FadeUp><Intro /></FadeUp>
        {panels.slice(1).map((p, i) => (
          <FadeUp key={i}>
            <div className="rounded-[2rem] border border-cream/10 bg-cream/[.04] p-7">{p.el}</div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

