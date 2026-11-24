import { comoComecar, site } from "@/lib/site";
import { FadeUp, LineReveal } from "./fx/reveal";
import { Magnetic } from "./fx/magnetic";
import { WhatsApp } from "./icons";

export function ComoComecar() {
  return (
    <section id="como-comecar" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Como começar )</span>
            <LineReveal
              lines={["Começar pode ser", "mais simples", <span key="b" className="serif italic text-clay">do que você imagina.</span>]}
              className="text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]"
            />
          </div>
          <p className="text-lg text-muted lg:col-span-5">
            Estamos disponíveis para ouvir você, esclarecer dúvidas e orientar sobre os serviços oferecidos.
          </p>
        </div>
        <ol className="mt-16 grid gap-4 md:grid-cols-3">
          {comoComecar.map((s, i) => (
            <FadeUp key={s.t} delay={i * 0.1}>
              <li className="flex h-full flex-col justify-between gap-12 rounded-[2rem] bg-sand p-8 md:min-h-[300px]">
                <span className="serif text-7xl italic leading-none text-sage">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{s.t}</h3>
                  <p className="mt-2 text-muted">{s.d}</p>
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>
        <div className="mt-10">
          <Magnetic>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WhatsApp"
              className="inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 font-medium text-cream transition-colors hover:bg-sage"
            >
              <WhatsApp className="size-5" /> Fale conosco pelo WhatsApp
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
