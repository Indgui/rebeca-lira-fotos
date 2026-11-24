// Dados e textos do site. Edite aqui.

/** Fotos ilustrativas (Unsplash, licença livre para uso comercial). */
const un = (id: string, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const px = (id: string, w = 1400) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
export const photos = {
  sobre: { src: px("5699473"), alt: "Psicóloga escutando com atenção durante uma sessão, à mesa do consultório" },
  infantil: { src: un("1771765767087-ce71e4a7916a"), alt: "Profissional conversando com um menino em uma sala colorida" },
  psicopedagogia: { src: px("36812773"), alt: "Adolescente estudando com o apoio de uma profissional" },
  adultos: { src: px("4101132"), alt: "Homem conversando com a psicóloga em um consultório claro e acolhedor" },
  tea: { src: un("1758598737955-7c8a9556706a"), alt: "Mulher e criança montando blocos coloridos juntas" },
  avaliacao: { src: un("1771765767087-ce71e4a7916a"), alt: "Profissional conversando com um menino em uma sala colorida" },
  avaliacaoPainel: { src: un("1758598737547-666bce663667"), alt: "Menino montando blocos com a profissional à mesa" },
  online: { src: un("1758521541816-49d0090fccc4"), alt: "Jovem acenando em uma videochamada pelo notebook" },
  presencial: { src: px("7176229"), alt: "Casal conversando com a psicóloga no sofá do consultório" },
};
const wa = (msg: string) => "https://wa.me/5511915316550?text=" + encodeURIComponent(msg);

export const site = {
  name: "Clínica Equilibre",
  fullName: "Clínica Equilibre | Mente & Corpo",
  legalName: "Equilibre Mente e Corpo Ltda.",
  tagline: "Psicologia, avaliação neuropsicológica, psicopedagogia e acompanhamento em TEA e TDAH para todas as fases da vida.",
  // Responsável técnica (exigência do CFP para serviços de psicologia)
  rt: "Responsável técnica: Rebeca Lira Araujo · Psicóloga · CRP 06/202525",
  url: "https://rebeca-lira.vercel.app", // troque pelo domínio final
  instagram: "https://www.instagram.com/equilibre_clinica/",
  instagramHandle: "@equilibre_clinica",
  whatsapp: "(11) 91531-6550",
  bairro: "São Miguel Paulista",
  cidade: "São Paulo – SP",
  bookingUrl: wa("Olá! Vim pelo site da Clínica Equilibre e gostaria de agendar um atendimento."),
  avaliacaoUrl: wa("Olá! Vim pelo site da Clínica Equilibre e gostaria de saber mais sobre a avaliação neuropsicológica."),
  descricao: "Um espaço dedicado à saúde mental, ao desenvolvimento humano e ao bem-estar, com acompanhamento psicológico, avaliação neuropsicológica e psicopedagogia.",
};

export const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "A Clínica" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#avaliacao", label: "Avaliação Neuropsicológica" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#duvidas", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const marquee = [
  "Psicoterapia",
  "Avaliação Neuropsicológica",
  "Psicopedagogia",
  "Saúde Emocional",
  "Neurodesenvolvimento",
  "TEA e TDAH",
];

export const destaques = [
  { t: "Atendimento individualizado", d: "Cada plano de cuidado parte da história e das necessidades de quem chega." },
  { t: "Cuidado humanizado", d: "Escuta acolhedora, respeito e ausência de julgamentos em todo o processo." },
  { t: "Conhecimento científico", d: "Práticas fundamentadas na ciência psicológica e no Código de Ética Profissional." },
  { t: "Diferentes fases da vida", d: "Crianças, adolescentes, adultos, idosos e casais, incluindo pessoas atípicas." },
];

export const areas = [
  {
    n: "01",
    title: "Psicoterapia",
    text: "Um espaço para compreender sentimentos, desenvolver autoconhecimento e trabalhar questões emocionais e comportamentais.",
    tags: ["Crianças e adolescentes", "Adultos e idosos", "Casais"],
    tone: "bg-peach text-ink",
    img: photos.adultos,
    href: wa("Olá! Vim pelo site da Clínica Equilibre e gostaria de saber mais sobre psicoterapia."),
  },
  {
    n: "02",
    title: "Avaliação Neuropsicológica",
    text: "Investigação das funções cognitivas, emocionais e comportamentais para compreender dificuldades e potencialidades.",
    tags: ["Crianças, adolescentes e adultos", "Laudo e devolutiva"],
    tone: "bg-forest text-cream",
    img: photos.avaliacao,
    href: "#avaliacao",
  },
  {
    n: "03",
    title: "Psicopedagogia",
    text: "Acompanhamento das dificuldades de aprendizagem e desenvolvimento de estratégias individualizadas.",
    tags: ["Dificuldades de aprendizagem", "Leitura, escrita e matemática", "Parceria com a escola"],
    tone: "bg-butter text-ink",
    img: photos.psicopedagogia,
    href: wa("Olá! Vim pelo site da Clínica Equilibre e gostaria de saber mais sobre psicopedagogia."),
  },
  {
    n: "04",
    title: "Neurodesenvolvimento — TEA e TDAH",
    text: "Acompanhamento que respeita as particularidades e potencialidades de cada indivíduo.",
    tags: ["Crianças e adultos atípicos", "Orientação às famílias", "Neurodiversidade"],
    tone: "bg-sage text-white",
    img: photos.tea,
    href: wa("Olá! Vim pelo site da Clínica Equilibre e gostaria de saber mais sobre o acompanhamento em TEA e TDAH."),
  },
];

export const avaliacao = {
  intro:
    "A avaliação neuropsicológica investiga diferentes funções cognitivas, emocionais e comportamentais por meio de entrevistas, observações clínicas e instrumentos específicos.",
  publico: "Crianças, adolescentes e adultos",
  investiga: ["Inteligência", "Memória", "Atenção", "Funções executivas", "Linguagem", "Aspectos emocionais e comportamentais"],
  indicacoes: [
    "Suspeita de TEA (Transtorno do Espectro Autista)",
    "Suspeita de TDAH",
    "Dificuldades de aprendizagem ou queda no desempenho escolar ou profissional",
    "Queixas de atenção, memória ou organização",
    "Quando a escola, o médico ou outro profissional solicita",
  ],
  etapas: [
    { t: "Entrevista inicial", d: "Conhecimento da história e das necessidades do paciente." },
    { t: "Aplicação dos instrumentos", d: "Realização de testes e procedimentos adequados à demanda." },
    { t: "Análise dos resultados", d: "Integração das informações coletadas durante a avaliação." },
    { t: "Laudo e devolutiva", d: "Apresentação dos resultados e orientações sobre os próximos passos." },
  ],
};

export const comoComecar = [
  { t: "Entre em contato", d: "Envie uma mensagem pelo WhatsApp." },
  { t: "Escolha seu atendimento", d: "Conheça as modalidades e os serviços disponíveis." },
  { t: "Inicie seu acompanhamento", d: "Converse com a profissional sobre suas necessidades e objetivos." },
];

export const faqs = [
  { q: "Quem pode ser atendido na Clínica Equilibre?", a: "Atendemos crianças, adolescentes, adultos, idosos e casais, incluindo pessoas com TEA, TDAH e outras condições do neurodesenvolvimento." },
  { q: "A terapia online é eficaz?", a: "Sim. O atendimento online é regulamentado pelo Conselho Federal de Psicologia e mantém o mesmo cuidado, sigilo e qualidade do presencial. A escolha depende do que for mais confortável para você." },
  { q: "Como funciona o atendimento infantil?", a: "Com crianças, o atendimento usa recursos lúdicos, como brincadeiras e desenhos, para facilitar a expressão. Os pais ou responsáveis participam de encontros de orientação ao longo do processo." },
  { q: "Tenho suspeita de TDAH ou autismo. Posso procurar atendimento?", a: "Pode, sim. Muitas pessoas chegam com essa dúvida. Investigamos com cuidado o seu funcionamento e, quando necessário, há orientação e encaminhamento para outros profissionais." },
  { q: "Quantas sessões são necessárias para a avaliação neuropsicológica?", a: "Em média, de 12 a 15 sessões, com duração aproximada de 40 a 50 minutos cada, incluindo entrevista, aplicação dos instrumentos, análise dos resultados e devolutiva com laudo." },
  { q: "Qual é a diferença entre psicoterapia e avaliação neuropsicológica?", a: "A avaliação é um processo com começo, meio e fim, voltado a investigar e compreender o funcionamento cognitivo, emocional e comportamental. A psicoterapia é um acompanhamento contínuo. Muitas vezes, a avaliação ajuda a direcionar o tratamento." },
  { q: "A avaliação neuropsicológica confirma o diagnóstico de TEA ou TDAH?", a: "Ela fornece informações importantes que contribuem para o diagnóstico, que é construído em conjunto com a equipe de saúde, como neurologistas ou psiquiatras, quando necessário." },
  { q: "A clínica atende por convênio?", a: "A clínica está em processo de credenciamento junto às operadoras de saúde. Entre em contato para saber a situação atual do seu plano." },
  { q: "Como faço para agendar?", a: "É só chamar no WhatsApp (11) 91531-6550 ou mandar uma mensagem no Instagram @equilibre_clinica. Respondemos com as opções de horário disponíveis." },
];
