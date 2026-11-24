"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";
import { LineReveal } from "./fx/reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="duvidas" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Perguntas frequentes )</span>
          <LineReveal
            lines={["Informação e", <span key="b" className="serif italic text-clay">tranquilidade</span>, "para dar o próximo passo."]}
            className="text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.04em]"
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
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left text-xl font-medium tracking-tight md:text-2xl"
                >
                  {f.q}
                  <span className={`grid size-10 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-500 ${isOpen ? "rotate-45 bg-forest text-cream" : ""}`}>+</span>
                </button>
                <div
                  id={`faq-${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-8 text-lg text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
