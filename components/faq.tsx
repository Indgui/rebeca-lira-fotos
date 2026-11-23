"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/lib/site";
import { LineReveal } from "./fx/reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Dúvidas )</span>
          <LineReveal
            lines={["Perguntas", <span key="b" className="serif italic text-clay">frequentes</span>]}
            className="text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]"
          />
        </div>
        <div className="border-t border-ink/10 lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-ink/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left text-xl font-medium tracking-tight md:text-2xl"
                >
                  {f.q}
                  <span className={`grid size-10 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-500 ${isOpen ? "rotate-45 bg-forest text-cream" : ""}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 text-lg text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
