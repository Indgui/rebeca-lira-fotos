import { photos, site } from "@/lib/site";
import { FadeUp, ImageReveal, LineReveal } from "./fx/reveal";

const modes = [
  { t: "Online", d: "Por videochamada, de onde você estiver, com praticidade e privacidade." },
  { t: "Presencial", d: "Em consultório, em um ambiente tranquilo e acolhedor." },
  { t: "Sigilo", d: "Todo atendimento segue o Código de Ética Profissional do Psicólogo." },
];
const steps = [
  { t: "Entre em contato", d: "Mande uma mensagem contando o que você busca e se prefere online ou presencial." },
  { t: "Agende a primeira sessão", d: "Combinamos o melhor dia e horário e esclareço suas dúvidas." },
  { t: "Comece o seu processo", d: "No primeiro encontro nos conhecemos e entendemos juntos os próximos passos." },
];

export function Atendimento() {
  return (
    <section id="atendimento" className="bg-sand/60 px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Atendimento )</span>
          <LineReveal
            lines={["Do jeito que", <span key="b" className="serif italic text-clay">faz sentido</span>, "para você."]}
            className="text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em]"
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
          <div>
            <h3 className="text-2xl font-medium tracking-tight">Como começar</h3>
            <ol className="mt-6 grid gap-4 md:grid-cols-3">
              {steps.map((s, i) => (
                <FadeUp key={s.t} delay={i * 0.1}>
                  <li className="h-full rounded-3xl bg-cream p-6">
                    <span className="serif text-5xl italic text-clay">0{i + 1}</span>
                    <h4 className="mt-3 font-semibold">{s.t}</h4>
                    <p className="mt-1 text-sm text-muted">{s.d}</p>
                  </li>
                </FadeUp>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">WhatsApp {site.whatsapp} · Instagram {site.instagramHandle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
