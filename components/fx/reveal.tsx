"use client";

import { motion, useInView, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/** Linhas que sobem de dentro de uma máscara. */
export function LineReveal({
  lines, className, delay = 0, as: Tag = "h2", lineClassName,
}: { lines: React.ReactNode[]; className?: string; delay?: number; as?: "h1" | "h2" | "h3" | "p"; lineClassName?: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const MotionTag = motion[Tag];
  return (
    <MotionTag ref={ref as never} className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={{ y: "110%", rotate: 3 }}
            animate={inView ? { y: "0%", rotate: 0 } : {}}
            transition={{ duration: 1.1, ease, delay: delay + i * 0.09 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Bloco que aparece subindo. */
export function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Texto que vai acendendo palavra por palavra conforme a rolagem. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} p={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}
function Word({ children, p, range }: { children: string; p: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(p, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block pr-[0.25em]">
      {children}
    </motion.span>
  );
}

/** Imagem que se revela com clip-path e leve zoom/parallax. */
export function ImageReveal({ src, alt, className, imgClassName }: { src: string; alt: string; className?: string; imgClassName?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
        transition={{ duration: 1.3, ease }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ y, scale: 1.18 }}
          className={`h-full w-full object-cover ${imgClassName ?? ""}`}
        />
      </motion.div>
    </div>
  );
}
