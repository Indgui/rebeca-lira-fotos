"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { areas } from "@/lib/site";
import { LineReveal } from "./fx/reveal";

function Card({ a, i, total, progress }: { a: (typeof areas)[number]; i: number; total: number; progress: MotionValue<number> }) {
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - i) * 0.04]);
  return (
    <div className="sticky top-0 flex h-[100svh] items-center justify-center" style={{ paddingTop: `${4 + i * 1.6}rem` }}>
      <motion.article
        style={{ scale }}
        className={`relative grid w-full max-w-[1400px] origin-top overflow-hidden rounded-[2rem] md:h-[72vh] md:grid-cols-2 ${a.tone}`}
      >
        <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
          <div className="flex items-center justify-between text-sm opacity-70">
            <span>( {a.n} )</span>
            <span>{a.n} / 0{total}</span>
          </div>
          <div>
            <h3 className="text-[clamp(2.2rem,4.5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.03em]">{a.title}</h3>
            <p className="mt-5 max-w-md text-lg opacity-80">{a.text}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <li key={t} className="rounded-full border border-current/25 px-4 py-1.5 text-sm">{t}</li>
              ))}
            </ul>
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
    <section id="atuacao" className="px-4 md:px-8">
      <div className="mx-auto max-w-[1400px] pt-10">
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Áreas de atuação )</span>
        <LineReveal
          lines={["Cuidado para cada fase", <span key="b" className="serif italic text-clay">e cada forma de ser.</span>]}
          className="text-[clamp(2.6rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em]"
        />
      </div>
      <div ref={ref} className="relative">
        {areas.map((a, i) => (
          <Card key={a.title} a={a} i={i} total={areas.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
