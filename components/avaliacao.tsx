"use client";

import { useEffect, useRef, useState } from "react";
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
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-cream/60">( Avaliação especializada )</span>
        <h2 className="text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
          Compreender o funcionamento da mente é <span className="serif italic text-butter">ampliar possibilidades de cuidado.</span>
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
          <p className="mt-2 text-cream/70">sessões, em média</p>
        </div>
        <div className="rounded-3xl bg-butter p-6 text-ink">
          <div className="text-4xl font-medium leading-none tracking-tighter sm:text-5xl md:text-6xl">40–50</div>
          <p className="mt-2 text-ink/70">minutos por sessão</p>
        </div>
      </div>
      <p className="text-cream/80"><span className="text-cream/55">Público:</span> {avaliacao.publico}</p>
      <div>
      <h3 className="mb-3 text-xl font-medium">O que é investigado?</h3>
      <ul className="flex flex-wrap gap-2 text-sm">
        {avaliacao.investiga.map((t) => (
          <li key={t} className="rounded-full border border-cream/25 px-4 py-1.5">{t}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

function Objetivos() {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div>
        <h3 className="text-3xl font-medium tracking-tight md:text-4xl">Para que serve</h3>
        <ul className="mt-6 space-y-3">
          {avaliacao.objetivos.map((it) => (
            <li key={it} className="flex gap-3 border-b border-cream/10 pb-3 text-cream/85">
              <span className="text-butter">✳</span>
              {it}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-medium">O que você recebe ao final</h3>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {avaliacao.aoFinal.map((t) => (
            <li key={t} className="rounded-full bg-butter px-4 py-1.5 text-ink">{t}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-cream/60">{avaliacao.aviso}</p>
      </div>
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
        <h3 className="text-3xl font-medium tracking-tight md:text-4xl">Quando é indicada</h3>
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
          <WhatsApp className="size-5" /> Quero saber mais sobre a avaliação
        </a>
      </Magnetic>
    </div>
  );
}

const panels = [
  { el: <Intro />, w: "md:w-[44vw]" },
  { el: <Formato />, w: "md:w-[36vw]" },
  { el: <Objetivos />, w: "md:w-[38vw]" },
  ...avaliacao.etapas.map((_, i) => ({ el: <Etapa i={i} />, w: "md:w-[28vw]" })),
  { el: <Indicacoes />, w: "md:w-[38vw]" },
];

export function Avaliacao() {
  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [desk, setDesk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setDesk(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (p) => {
    const el = track.current;
    if (!el) return 0;
    const max = el.scrollWidth - window.innerWidth;
    return -max * p;
  });
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Um único bloco: rolagem horizontal fixada no desktop, lista vertical no celular.
  return (
    <section id="avaliacao" className="bg-forest text-cream">
      <div ref={ref} className="relative md:h-[480vh]">
        <div className="px-4 py-24 md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:overflow-hidden md:p-0">
          <motion.div ref={track} style={desk ? { x } : undefined} className="flex flex-col gap-6 md:flex-row md:px-8 md:will-change-transform">
            {panels.map((p, i) => (
              <FadeUp
                key={i}
                className={`${p.w} md:h-[72vh] md:shrink-0 ${i === 0 ? "md:pr-10" : "rounded-[2rem] border border-cream/10 bg-cream/[.04] p-7 md:p-10"}`}
              >
                {p.el}
              </FadeUp>
            ))}
            <div className="relative hidden h-[72vh] w-[30vw] shrink-0 overflow-hidden rounded-[2rem] md:block">
              <Image src={photos.avaliacaoPainel.src} alt={photos.avaliacaoPainel.alt} fill sizes="30vw" className="object-cover" />
            </div>
          </motion.div>
          <div className="mx-8 mt-8 hidden h-px bg-cream/15 md:block">
            <motion.div style={{ width: bar }} className="h-px bg-butter" />
          </div>
        </div>
      </div>
    </section>
  );
}
