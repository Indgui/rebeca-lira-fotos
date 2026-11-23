"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");
    const move = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const t = e.target as HTMLElement;
      const el = t.closest<HTMLElement>("[data-cursor]");
      setLabel(el?.dataset.cursor || null);
      setHover(!!t.closest("a,button,summary,[role=tab]"));
    };
    window.addEventListener("pointermove", move);
    return () => { window.removeEventListener("pointermove", move); document.documentElement.classList.remove("has-cursor"); };
  }, [x, y]);

  if (!enabled) return null;
  const size = label ? 96 : hover ? 56 : 14;
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100]"
    >
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full text-[11px] font-semibold uppercase tracking-wider ${
          label ? "bg-clay text-white" : hover ? "border border-ink/60 bg-transparent" : "bg-ink"
        }`}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
