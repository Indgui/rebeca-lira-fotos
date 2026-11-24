"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from "motion/react";
import { marquee } from "@/lib/site";

function Row({ base, children }: { base: number; children: React.ReactNode }) {
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(vel, [0, 1000], [0, 4], { clamp: false });
  const skew = useTransform(vel, [-2000, 2000], [8, -8]);
  const dir = useRef(1);
  const pos = useTransform(x, (v) => `${wrap(-50, 0, v)}%`);
  useAnimationFrame((_, delta) => {
    let move = dir.current * base * (delta / 1000);
    if (factor.get() < 0) dir.current = -1; else if (factor.get() > 0) dir.current = 1;
    move += dir.current * move * Math.abs(factor.get());
    x.set(x.get() + move);
  });
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-[0.12em]">
      <motion.div style={{ x: pos, skewX: skew }} className="flex shrink-0">
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function Marquee() {
  const items = (
    <div className="flex shrink-0 items-center">
      {marquee.map((m, i) => (
        <span key={i} className="flex items-center">
          <span className={`px-6 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.25] tracking-tight ${i % 2 ? "serif italic text-clay" : "font-medium"}`}>{m}</span>
          <span className="text-3xl text-sage">✳</span>
        </span>
      ))}
    </div>
  );
  return (
    <section aria-label="Áreas de atuação" className="border-y border-ink/10 py-6">
      <Row base={-3}>{items}</Row>
    </section>
  );
}
