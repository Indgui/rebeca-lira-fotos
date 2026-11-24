import { photos } from "@/lib/site";
import { FadeUp, ImageReveal, LineReveal } from "./fx/reveal";

const modes = [
  { t: "Online", d: "Acompanhamento por videochamada, com praticidade e flexibilidade." },
  { t: "Presencial", d: "Ambiente acolhedor, preparado para oferecer privacidade e tranquilidade." },
];

export function Atendimento() {
  return (
    <section id="atendimento" className="bg-sand/60 px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Atendimento )</span>
          <LineReveal
            lines={["O cuidado que", "respeita sua rotina", <span key="b" className="serif italic text-clay">e suas necessidades.</span>]}
            className="text-[clamp(2.2rem,3.9vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.04em]"
          />
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="relative">
              <ImageReveal src={photos.online.src} alt={photos.online.alt} className="aspect-[3/4] w-full rounded-[2rem]" imgClassName="object-[85%_50%]" />
              <span className="absolute bottom-4 left-4 rounded-full bg-cream/85 px-3 py-1.5 text-xs font-medium backdrop-blur-md md:text-sm">Online</span>
            </div>
            <div className="relative mt-12">
              <ImageReveal src={photos.presencial.src} alt={photos.presencial.alt} className="aspect-[3/4] w-full rounded-[2rem]" />
              <span className="absolute bottom-4 left-4 rounded-full bg-cream/85 px-3 py-1.5 text-xs font-medium backdrop-blur-md md:text-sm">Presencial</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-16 lg:col-span-7">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {modes.map((m, i) => (
              <FadeUp key={m.t} delay={i * 0.08}>
                <div className="grid gap-2 py-8 md:grid-cols-[1fr_1.4fr] md:items-baseline">
                  <h3 className="text-4xl font-medium tracking-tight md:text-5xl">{m.t}</h3>
                  <p className="text-lg text-muted">{m.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <p className="max-w-xl text-xl text-ink/80 md:text-2xl">
            Independentemente da modalidade, nosso compromisso é oferecer um atendimento ético, individualizado e respeitoso.
          </p>
        </div>
      </div>
    </section>
  );
}
