"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { aba, photos, site } from "@/lib/site";
import { FadeUp, ImageReveal, LineReveal } from "./fx/reveal";
import { Magnetic } from "./fx/magnetic";
import { WhatsApp } from "./icons";

const ease = [0.16, 1, 0.3, 1] as const;

export function Aba() {
  const [tab, setTab] = useState(0);
  const m = aba.marcos[tab];
  return (
    <section id="aba" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( ABA para pais )</span>
            <LineReveal
              lines={["Um caminho acolhedor", "para apoiar o", <span key="c" className="serif italic text-clay">desenvolvimento do seu filho.</span>]}
              className="text-[clamp(2.4rem,5.4vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em]"
            />
          </div>
          <FadeUp className="self-end lg:col-span-5">
            <p className="text-lg text-muted">{aba.intro}</p>
          </FadeUp>
        </div>

        <ImageReveal src={photos.abaFamilia.src} alt={photos.abaFamilia.alt} className="mt-14 aspect-[16/10] w-full rounded-[2rem] md:aspect-[21/9]" />

        <FadeUp className="mt-6 grid gap-6 rounded-[2rem] bg-sand p-8 md:grid-cols-[auto_1fr] md:p-12">
          <span className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.04em]">VB-MAPP</span>
          <p className="max-w-2xl text-lg text-muted md:pl-8">{aba.vbmapp}</p>
        </FadeUp>

        <div className="mt-20">
          <h3 className="text-3xl font-medium tracking-tight md:text-4xl">Marcos do desenvolvimento</h3>
          <div role="tablist" aria-label="Marcos do desenvolvimento" className="mt-6 flex flex-wrap gap-2">
            {aba.marcos.map((mk, i) => (
              <button
                key={mk.key}
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className="relative rounded-full px-5 py-2.5 text-sm font-medium"
              >
                {tab === i && (
                  <motion.span layoutId="aba-pill" className="absolute inset-0 rounded-full bg-forest" transition={{ type: "spring", stiffness: 400, damping: 35 }} />
                )}
                <span className={`relative ${tab === i ? "text-cream" : "text-ink"}`}>{mk.key}</span>
              </button>
            ))}
          </div>
          <div className="relative mt-6 min-h-[280px] overflow-hidden rounded-[2rem] border border-ink/10 bg-white/60 p-8 md:min-h-[240px] md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={m.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
                className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end"
              >
                <div>
                  <span className="text-sm text-muted">0{tab + 1} / 0{aba.marcos.length}</span>
                  <h4 className="mt-2 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.04em]">
                    {m.key}
                    <span className="serif block text-[0.6em] italic text-clay">{m.t}</span>
                  </h4>
                </div>
                <p className="text-lg text-muted">{m.d}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-medium tracking-tight md:text-4xl">Como ajudar em casa</h3>
            <p className="mt-4 text-muted">Orientação parental e acompanhamento terapêutico para a família participar ativamente do processo.</p>
            <ImageReveal src={photos.abaCasa.src} alt={photos.abaCasa.alt} className="mt-8 aspect-[4/3] w-full max-w-md rounded-[2rem]" />
            <Magnetic className="mt-8">
              <a
                href={site.abaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-medium text-cream transition-colors hover:bg-clay"
              >
                <WhatsApp className="size-5" /> Falar sobre orientação parental
              </a>
            </Magnetic>
          </div>
          <ol className="lg:col-span-7">
            {aba.casa.map((c, i) => (
              <FadeUp key={c} delay={i * 0.05}>
                <li className="group flex items-baseline gap-6 border-b border-ink/10 py-5 text-xl md:text-2xl">
                  <span className="w-8 shrink-0 text-sm text-muted">0{i + 1}</span>
                  <span className="transition-transform duration-500 group-hover:translate-x-3">{c}</span>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
