import { destaques, photos } from "@/lib/site";
import { FadeUp, ImageReveal, LineReveal } from "./fx/reveal";

export function About() {
  return (
    <section id="sobre" className="px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Conheça a Equilibre )</span>
            <ImageReveal src={photos.sobre.src} alt={photos.sobre.alt} className="aspect-[4/5] w-full max-w-sm rounded-[2rem]" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <LineReveal
            lines={["Um espaço onde", <span key="b" className="serif italic text-clay">acolhimento e conhecimento</span>, "caminham juntos."]}
            className="text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]"
          />
          <div className="mt-10 max-w-2xl space-y-5 text-lg text-muted md:text-xl">
            <FadeUp><p>Acreditamos que cada pessoa possui uma história, necessidades e formas únicas de compreender o mundo.</p></FadeUp>
            <FadeUp delay={0.08}><p>A Clínica Equilibre nasceu com o propósito de oferecer um cuidado psicológico humanizado, respeitando a individualidade de cada paciente e valorizando sua trajetória.</p></FadeUp>
            <FadeUp delay={0.16}><p>Nosso trabalho integra conhecimento científico, escuta qualificada e atenção às particularidades de cada fase da vida.</p></FadeUp>
          </div>
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {destaques.map((d, i) => (
              <FadeUp key={d.t} delay={i * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-ink/10 bg-white/60 p-7">
                  <span className="serif text-4xl italic text-sage">0{i + 1}</span>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight">{d.t}</h3>
                  <p className="mt-2 text-muted">{d.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
