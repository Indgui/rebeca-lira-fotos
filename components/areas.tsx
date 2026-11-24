"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { areas } from "@/lib/site";
import { LineReveal } from "./fx/reveal";
import { Arrow } from "./icons";

function Card({ a, i, total, progress }: { a: (typeof areas)[number]; i: number; total: number; progress: MotionValue<number> }) {
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - i) * 0.04]);
  return (
    <div className="sticky top-0 flex h-[100svh] items-center justify-center" style={{ paddingTop: `${4 + i * 1.6}rem` }}>
      <motion.article
        style={{ scale }}
        className={`relative grid w-full max-w-[1400px] origin-top overflow-hidden rounded-[2rem] md:h-[72vh] md:grid-cols-2 ${a.tone}`}
      >
        <div className="relative z-10 flex min-w-0 flex-col justify-between gap-10 p-8 md:p-12">
          <div className="flex items-center justify-between text-sm opacity-70">
            <span>( {a.n} )</span>
            <span>{a.n} / 0{total}</span>
          </div>
          <div>
            <h3 className="text-[clamp(1.9rem,3.5vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.03em] [overflow-wrap:anywhere]">{a.title}</h3>
            <p className="mt-5 max-w-md text-lg opacity-80">{a.text}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <li key={t} className="rounded-full border border-current/25 px-4 py-1.5 text-sm">{t}</li>
              ))}
            </ul>
            <a
              href={a.href}
              {...(a.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-current/10 px-5 py-3 font-medium"
            >
              <span>Saiba mais</span>
              <Arrow className="size-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>
        <div className="relative h-48 md:h-auto">
          <Image src={a.img.src} alt={a.img.alt} fill sizes="50vw" className="object-cover" />
        </div>
      </motion.article>
    </div>
  );
}

export function Areas() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section id="especialidades" className="px-4 md:px-8">
      <div className="mx-auto max-w-[1400px] pt-10">
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Nossas especialidades )</span>
        <LineReveal
          lines={["Cuidado individualizado", <span key="b" className="serif italic text-clay">para diferentes necessidades</span>, "e momentos da vida."]}
          className="text-[clamp(2.4rem,5.4vw,5.4rem)] font-medium leading-[0.95] tracking-[-0.04em]"
        />
        <p className="mt-6 max-w-xl text-lg text-muted">Conheça nossos serviços e encontre o acompanhamento mais adequado às suas necessidades.</p>
      </div>
      <div ref={ref} className="relative">
        {areas.map((a, i) => (
          <Card key={a.title} a={a} i={i} total={areas.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
