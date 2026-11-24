"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav, site } from "@/lib/site";
import { Magnetic } from "./fx/magnetic";
import { WhatsApp, Instagram } from "./icons";

const ease = [0.76, 0, 0.24, 1] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(v > prev && v > 200 && !open);
    setSolid(v > 40);
  });
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop(): void; start(): void } }).__lenis;
    if (open) lenis?.stop(); else lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease }}
        className="fixed inset-x-0 top-0 z-[60] px-4 pt-4 md:px-8"
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 py-3 transition-colors duration-500 ${
            solid && !open ? "bg-cream/75 shadow-[0_8px_30px_rgba(0,0,0,.06)] backdrop-blur-xl" : ""
          }`}
        >
          <a href="#inicio" aria-label="Clínica Equilibre — início" className="block">
            <img
              src="/logo-equilibre.svg"
              alt="Clínica Equilibre Mente & Corpo"
              className={`h-9 w-auto transition duration-500 md:h-11 ${open ? "brightness-0 invert" : ""}`}
            />
          </a>
          <div className="flex items-center gap-2">
            <Magnetic>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-clay sm:inline-flex"
              >
                <WhatsApp className="size-4" /> Agendar pelo WhatsApp
              </a>
            </Magnetic>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className={`group flex h-11 items-center gap-3 rounded-full px-5 text-sm font-medium transition-colors ${
                open ? "bg-cream text-ink" : "bg-ink text-cream"
              }`}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-px w-5 bg-current transition-all duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-5 bg-current transition-all duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
              {open ? "Fechar" : "Menu"}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col justify-between brand-gradient px-6 pb-8 pt-28 text-cream md:px-12"
            initial={{ clipPath: "circle(0% at 95% 4%)" }}
            animate={{ clipPath: "circle(150% at 95% 4%)" }}
            exit={{ clipPath: "circle(0% at 95% 4%)" }}
            transition={{ duration: 0.9, ease }}
          >
            <nav className="mx-auto w-full max-w-[1400px]">
              <ul>
                {nav.map((l, i) => (
                  <li key={l.href} className="overflow-hidden border-b border-cream/10">
                    <motion.a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, ease, delay: 0.25 + i * 0.06 }}
                      className="group flex items-baseline justify-between py-2.5 md:py-3"
                    >
                      <span className="text-[clamp(1.7rem,4.6vw,3.6rem)] font-medium leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-4">
                        {l.label}
                      </span>
                      <span className="text-sm opacity-50">0{i + 1}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-4 text-sm"
            >
              <span className="opacity-60">{site.fullName}</span>
              <div className="flex gap-3">
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 font-medium text-ink">
                  <WhatsApp className="size-4" /> {site.whatsapp}
                </a>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-3">
                  <Instagram className="size-4" /> {site.instagramHandle}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
