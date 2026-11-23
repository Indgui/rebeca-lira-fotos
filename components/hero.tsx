"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { rebecaFoto, site } from "@/lib/site";
import { useReady } from "./fx/preloader";
import { Magnetic } from "./fx/magnetic";
import { WhatsApp, Arrow } from "./icons";

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
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section id="inicio" ref={ref} className="relative min-h-[100svh] overflow-hidden px-4 pb-10 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12">
        <motion.div style={{ y: textY }} className="lg:col-span-8">
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
            Agenda aberta · {site.role} · {site.crp}
          </motion.div>

          <h1 className="text-[clamp(2.9rem,7.4vw,8.4rem)] font-medium leading-[0.92] tracking-[-0.045em]">
            <Line i={0} ready={ready}>Compreender</Line>
            <Line i={1} ready={ready}>
              <span className="inline-flex items-center gap-[0.18em] whitespace-nowrap">
                emoções
                <motion.span
                  initial={{ width: 0 }}
                  animate={ready ? { width: "1.7em" } : {}}
                  transition={{ duration: 1.1, ease, delay: 0.7 }}
                  className="relative inline-block h-[0.8em] overflow-hidden rounded-full bg-sage align-middle"
                >
                  <Image src={rebecaFoto} alt="" fill sizes="200px" unoptimized className="scale-[1.6] object-cover object-[50%_8%]" priority />
                </motion.span>
                é o
              </span>
            </Line>
            <Line i={2} ready={ready} className="serif italic text-clay tracking-[-0.02em]">primeiro passo</Line>
            <Line i={3} ready={ready}>para cuidar delas.</Line>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease, delay: 0.35 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[380px] self-end lg:col-span-4 lg:max-w-none"
        >
          <motion.div style={{ scale: imgScale }} className="absolute inset-x-0 bottom-0 h-[82%] overflow-hidden rounded-t-full bg-sage">
            <div className="absolute -bottom-20 -left-16 size-64 rounded-full bg-forest/30 blur-2xl" />
          </motion.div>
          <motion.div style={{ y: imgY }} className="absolute inset-0">
            <Image
              src={rebecaFoto}
              alt="Rebeca Lira, psicóloga"
              fill
              priority
              sizes="440px" unoptimized
              className="object-contain object-bottom"
            />
          </motion.div>
          <div className="absolute -left-4 bottom-[18%] rounded-2xl bg-cream/80 px-4 py-3 text-sm shadow-[0_14px_40px_rgba(0,0,0,.12)] backdrop-blur-md">
            <b className="serif block text-xl italic leading-none">{site.fullName}</b>
            <span className="text-muted">{site.crp}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease, delay: 0.8 }}
        className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <p className="max-w-md text-lg text-muted">
          {site.tagline} Infantil, adultos, TEA &amp; TDAH, avaliação neuropsicológica e orientação para pais. Online e presencial.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Agendar"
              className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-medium text-cream transition-colors hover:bg-clay"
            >
              <WhatsApp className="size-5" /> Agendar pelo WhatsApp
            </a>
          </Magnetic>
          <a href="#sobre" className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-4 font-medium">
            Conhecer o trabalho <Arrow className="size-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
