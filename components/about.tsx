"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { numbers, photos } from "@/lib/site";
import { FadeUp, ImageReveal, ScrollText } from "./fx/reveal";

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{prefix}{v}{suffix}</span>;
}

export function About() {
  return (
    <section id="sobre" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( A clínica )</span>
            <ImageReveal src={photos.sobre.src} alt={photos.sobre.alt} className="aspect-[4/5] w-full max-w-sm rounded-[2rem]" />
            <p className="mt-5 text-sm text-muted">Equilíbrio entre mente e corpo, com escuta, acolhimento e ciência.</p>
          </div>
        </div>
        <div className="lg:col-span-8">
          <ScrollText
            className="text-[clamp(1.8rem,3.6vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em]"
            text="A Clínica Equilibre nasceu para ajudar você a entender o que sente, por que age de determinada forma e como o seu jeito de funcionar influencia o dia a dia. Atendemos crianças, adolescentes, adultos, idosos e casais, com atenção especial ao neurodesenvolvimento, ao TEA e ao TDAH. Um cuidado próximo, respeitoso e sem julgamentos, em que a família também faz parte do processo."
          />
          <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-ink/10 pt-12 md:grid-cols-4">
            {numbers.map((n, i) => (
              <FadeUp key={n.label} delay={i * 0.08}>
                <div className="text-[clamp(3rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.04em]">
                  <Counter to={n.value} prefix={n.prefix} suffix={n.suffix} />
                </div>
                <p className="mt-3 max-w-[14rem] text-sm text-muted">{n.label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
