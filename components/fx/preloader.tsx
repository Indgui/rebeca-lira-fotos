"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Preloader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || sessionStorage.getItem("rl-loaded")) {
      setDone(true);
      (window as unknown as { __rlReady: boolean }).__rlReady = true;
      window.dispatchEvent(new Event("rl:ready"));
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let id = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) id = requestAnimationFrame(tick);
      else setTimeout(() => { setDone(true); (window as unknown as { __rlReady: boolean }).__rlReady = true; window.dispatchEvent(new Event("rl:ready")); document.documentElement.style.overflow = ""; try { sessionStorage.setItem("rl-loaded", "1"); } catch {} }, 250);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="pre"
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-forest p-6 text-cream md:p-10"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className="text-sm uppercase tracking-[0.3em] opacity-70">Psicóloga · CRP 06/202525</span>
          <div className="flex items-end justify-between gap-6">
            <span className="serif text-5xl italic md:text-8xl">Rebeca Lira</span>
            <span className="text-6xl font-light tabular-nums md:text-9xl">{n}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect as useE, useState as useS } from "react";
export function useReady() {
  const [ready, setReady] = useS(false);
  useE(() => {
    if ((window as unknown as { __rlReady?: boolean }).__rlReady) { setReady(true); return; }
    const on = () => setReady(true);
    window.addEventListener("rl:ready", on);
    return () => window.removeEventListener("rl:ready", on);
  }, []);
  return ready;
}
