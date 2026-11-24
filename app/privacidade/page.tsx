import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade | Clínica Equilibre",
  description: "Como a Clínica Equilibre trata os dados pessoais de quem visita o site e entra em contato, de acordo com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

const atualizado = "23 de novembro de 2026";

const secoes: { t: string; p: React.ReactNode[] }[] = [
  {
    t: "1. Quem somos",
    p: [
      <>Esta política se aplica ao site da {site.fullName}, mantido por {site.legalName}, responsável pelo tratamento dos dados pessoais descritos aqui (controladora, nos termos da Lei Geral de Proteção de Dados, Lei nº 13.709/2018).</>,
      <>{site.rt}.</>,
    ],
  },
  {
    t: "2. Quais dados o site coleta",
    p: [
      "O site é apenas informativo. Ele não possui formulários, cadastro, área de login nem ferramentas de publicidade, e não coleta dados pessoais diretamente.",
      "Como qualquer site, o servidor de hospedagem registra automaticamente informações técnicas de acesso, como endereço IP, data e hora, navegador e página visitada, para fins de segurança e funcionamento.",
    ],
  },
  {
    t: "3. Contato pelo WhatsApp e pelo Instagram",
    p: [
      "Ao clicar nos botões de agendamento, você é direcionado ao WhatsApp ou ao Instagram, serviços de terceiros com políticas de privacidade próprias.",
      "As informações que você nos enviar por esses canais, como nome, telefone e o motivo do contato, são usadas somente para responder, agendar e organizar o atendimento. Evite enviar detalhes de saúde pela mensagem inicial; eles podem ser tratados com mais segurança durante o atendimento.",
    ],
  },
  {
    t: "4. Dados de saúde e sigilo profissional",
    p: [
      "Informações sobre saúde são dados pessoais sensíveis. Os dados obtidos durante o atendimento psicológico, a avaliação neuropsicológica ou a psicopedagogia são tratados para a prestação do serviço e para o cumprimento de obrigações legais e regulatórias, como a guarda de registros documentais exigida pelo Conselho Federal de Psicologia.",
      "Todo atendimento segue o sigilo previsto no Código de Ética Profissional do Psicólogo. Essas informações não são compartilhadas com terceiros, exceto nas situações previstas em lei ou com o seu consentimento.",
    ],
  },
  {
    t: "5. Cookies e serviços de terceiros",
    p: [
      "O site não utiliza cookies de publicidade nem de rastreamento. As fotografias ilustrativas são carregadas dos bancos de imagens Unsplash e Pexels, e a hospedagem é feita pela Vercel. Esses serviços podem receber dados técnicos de acesso, como o endereço IP, para entregar o conteúdo.",
    ],
  },
  {
    t: "6. Por quanto tempo guardamos os dados",
    p: [
      "As mensagens de contato são mantidas pelo tempo necessário para o atendimento. Os registros de atendimento são guardados pelo prazo exigido pelas normas do Conselho Federal de Psicologia e pela legislação aplicável.",
    ],
  },
  {
    t: "7. Seus direitos",
    p: [
      "Você pode, a qualquer momento, pedir a confirmação do tratamento, o acesso, a correção, a anonimização, a portabilidade ou a eliminação dos seus dados, além de informações sobre compartilhamento e a revogação do consentimento, nos limites da LGPD e das obrigações profissionais de guarda de documentos.",
      <>Para exercer esses direitos, fale conosco pelo WhatsApp {site.whatsapp} ou pelo Instagram {site.instagramHandle}. Você também pode recorrer à Autoridade Nacional de Proteção de Dados (ANPD).</>,
    ],
  },
  {
    t: "8. Alterações desta política",
    p: [
      "Esta política pode ser atualizada, por exemplo, se o site passar a ter formulários ou ferramentas de medição de audiência. A versão em vigor estará sempre nesta página, com a data da última atualização.",
    ],
  },
];

export default function Privacidade() {
  return (
    <main className="px-4 pb-24 pt-8 md:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <a href="/" aria-label="Clínica Equilibre — voltar ao início">
            <img src="/logo-equilibre.svg" alt="Clínica Equilibre Mente & Corpo" className="h-10 w-auto md:h-11" />
          </a>
          <a href="/" className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-cream">
            Voltar ao site
          </a>
        </div>
        <span className="mt-20 block text-xs font-medium uppercase tracking-[0.25em] text-muted">( Privacidade )</span>
        <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-forest">
          Política de <span className="serif italic text-clay">Privacidade</span>
        </h1>
        <p className="mt-4 text-sm text-muted">Última atualização: {atualizado}</p>
        <div className="mt-14 space-y-12">
          {secoes.map((s) => (
            <section key={s.t}>
              <h2 className="text-2xl font-medium tracking-tight">{s.t}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
                {s.p.map((x, i) => <p key={i}>{x}</p>)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
