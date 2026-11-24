import { psicologas } from "@/lib/site";
import { FadeUp, ImageReveal, LineReveal } from "./fx/reveal";

export function Psicologas() {
  return (
    <section id="psicologas" className="bg-sand/60 px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Nossas psicólogas )</span>
        <LineReveal
          lines={["Conheça quem está", <span key="b" className="serif italic text-clay">por trás da Equilibre.</span>]}
          className="text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]"
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {psicologas.map((p, i) => (
            <article key={p.nome} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="relative mx-auto max-w-md lg:sticky lg:top-28">
                  <ImageReveal src={p.foto.src} alt={p.foto.alt} className="aspect-[4/5] w-full rounded-[2rem]" imgClassName="object-[50%_25%]" />
                  <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-forest shadow-[0_10px_30px_rgba(0,0,0,.10)] backdrop-blur-md">
                    {p.crp}
                  </span>
                </div>
              </div>
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
                <FadeUp>
                  <span className="serif text-5xl italic text-sage">0{i + 1}</span>
                  <h3 className="mt-3 text-[clamp(2.4rem,4.4vw,4.4rem)] font-medium leading-none tracking-[-0.04em] text-forest">{p.nome}</h3>
                  <p className="mt-3 text-lg text-muted">{p.funcao} · {p.crp}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.destaques.map((d) => (
                      <li key={d} className="rounded-full border border-ink/15 bg-white/60 px-4 py-1.5 text-sm">{d}</li>
                    ))}
                  </ul>
                </FadeUp>
                <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
                  {p.bio.map((b, k) => (
                    <FadeUp key={k} delay={k * 0.05}><p>{b}</p></FadeUp>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
