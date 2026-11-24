"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { site } from "@/lib/site";
import { useReady } from "./fx/preloader";
import { Magnetic } from "./fx/magnetic";
import { WhatsApp, Arrow } from "./icons";
import { Infinity } from "./infinity";

const ease = [0.16, 1, 0.3, 1] as const;

function Line({ children, i, ready, className = "" }: { children: React.ReactNode; i: number; ready: boolean; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "115%" }}
        animate={ready ? { y: "0%" } : {}}
        transition={{ duration: 1.2, ease, delay: 0.1 + i * 0.1 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ready = useReady();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const artRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section id="inicio" ref={ref} className="relative min-h-[100svh] overflow-hidden px-4 pb-10 pt-28 md:px-8 md:pt-32">
      <div className="pointer-events-none absolute -right-40 -top-32 size-[640px] rounded-full bg-peach/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[420px] rounded-full bg-butter/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-12">
        <motion.div style={{ y: textY }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-sage" />
            </span>
            Agenda aberta · Online &amp; presencial
          </motion.div>

          <h1 className="text-[clamp(2.9rem,7vw,7.8rem)] font-medium leading-[0.92] tracking-[-0.045em] text-forest">
            <Line i={0} ready={ready}>Cuidar da mente</Line>
            <Line i={1} ready={ready}>
              <span className="inline-flex items-center gap-[0.2em] whitespace-nowrap">
                é cuidar
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={ready ? { width: "1.5em", opacity: 1 } : {}}
                  transition={{ duration: 1.1, ease, delay: 0.7 }}
                  className="inline-flex items-center overflow-hidden"
                >
                  <Infinity className="h-[0.62em] w-[1.5em] shrink-0" />
                </motion.span>
              </span>
            </Line>
            <Line i={2} ready={ready} className="serif italic text-clay tracking-[-0.02em]">de quem você é.</Line>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.6, ease, delay: 0.3 }}
          className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none"
        >
          <motion.div style={{ y: artY, rotate: artRotate }} className="relative aspect-square">
            <div className="absolute inset-[6%] rounded-full bg-white/70 shadow-[0_40px_120px_-40px_rgba(11,79,120,.45)] backdrop-blur" />
            <motion.img
              src="/simbolo-equilibre.svg"
              alt="Símbolo da Clínica Equilibre: a letra psi ao lado de um perfil com o cérebro em destaque"
              className="absolute inset-[16%] h-[68%] w-[68%] object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
          <div className="absolute -left-2 bottom-[10%] rounded-2xl bg-white/85 px-4 py-3 text-sm shadow-[0_14px_40px_rgba(0,0,0,.10)] backdrop-blur-md md:-left-6">
            <b className="serif block text-xl italic leading-none text-forest">Equilibre</b>
            <span className="text-muted">Mente &amp; Corpo</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease, delay: 0.8 }}
        className="relative mx-auto mt-10 flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <p className="max-w-md text-lg text-muted">
          {site.tagline} Crianças, adolescentes, adultos, idosos e casais, incluindo pessoas atípicas.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Agendar"
              className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-medium text-cream transition-colors hover:bg-sage"
            >
              <WhatsApp className="size-5" /> Agendar pelo WhatsApp
            </a>
          </Magnetic>
          <a href="#sobre" className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-4 font-medium">
            Conhecer a clínica <Arrow className="size-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
