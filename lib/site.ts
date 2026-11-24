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
  abaFamilia: { src: un("1758687126227-48c2fa04b653", 2000), alt: "Família brincando com blocos coloridos no chão de casa" },
  abaCasa: { src: un("1587323655395-b1c77a12c89a"), alt: "Adulto e criança desenhando juntos à mesa" },
  online: { src: un("1758521541816-49d0090fccc4"), alt: "Jovem acenando em uma videochamada pelo notebook" },
  presencial: { src: px("7176229"), alt: "Casal conversando com a psicóloga no sofá do consultório" },
};
const wa = (msg: string) => "https://wa.me/5511976095404?text=" + encodeURIComponent(msg);

export const site = {
  name: "Clínica Equilibre",
  fullName: "Clínica Equilibre | Mente & Corpo",
  legalName: "Equilibre Mente e Corpo Ltda.",
  tagline: "Psicologia, avaliação neuropsicológica, psicopedagogia e ABA para todas as fases da vida.",
  // Responsável técnica (exigência do CFP para serviços de psicologia)
  rt: "Responsável técnica: Rebeca Lira Araujo · Psicóloga · CRP 06/202525",
  url: "https://rebeca-lira.vercel.app", // troque pelo domínio final
  instagram: "https://www.instagram.com/equilibre_clinica/",
  instagramHandle: "@equilibre_clinica",
  whatsapp: "(11) 97609-5404",
  bookingUrl: wa("Olá! Vim pelo site da Clínica Equilibre e gostaria de agendar um atendimento."),
  avaliacaoUrl: wa("Olá! Vim pelo site da Clínica Equilibre e gostaria de saber sobre a avaliação neuropsicológica."),
  abaUrl: wa("Olá! Vim pelo site da Clínica Equilibre e gostaria de saber sobre ABA e orientação parental."),
};

export const nav = [
  { href: "#sobre", label: "A clínica" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#avaliacao", label: "Avaliação" },
  { href: "#aba", label: "ABA para pais" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#duvidas", label: "Dúvidas" },
];

export const marquee = [
  "Psicologia",
  "Avaliação Neuropsicológica",
  "Psicopedagogia",
  "ABA",
  "Crianças & Adolescentes",
  "Adultos & Idosos",
  "Casais",
  "TEA & TDAH",
  "Online & Presencial",
];

export const numbers = [
  { value: 10, suffix: "", label: "sessões na avaliação neuropsicológica" },
  { value: 50, prefix: "40–", suffix: "", label: "minutos de duração aproximada por sessão" },
  { value: 2, suffix: "", label: "formatos: online e presencial" },
  { value: 5, suffix: "", label: "públicos: crianças, adolescentes, adultos, idosos e casais" },
];

export const areas = [
  {
    n: "01",
    title: "Psicoterapia",
    text: "Atendimento para crianças, adolescentes, adultos, idosos e casais. Um espaço seguro para compreender emoções, relações e comportamentos.",
    tags: ["Crianças e adolescentes", "Adultos e idosos", "Casais"],
    tone: "bg-peach text-ink",
    img: photos.adultos,
  },
  {
    n: "02",
    title: "Avaliação Neuropsicológica",
    text: "Investigação das funções cognitivas, emocionais e comportamentais para compreender dificuldades e orientar o cuidado.",
    tags: ["Atenção e memória", "Funções executivas", "Investigação de TEA e TDAH"],
    tone: "bg-forest text-cream",
    img: photos.avaliacao,
  },
  {
    n: "03",
    title: "Psicopedagogia",
    text: "Acompanhamento das dificuldades de aprendizagem, com estratégias para o desenvolvimento escolar e parceria com a família e a escola.",
    tags: ["Dificuldades de aprendizagem", "Leitura, escrita e matemática", "Parceria com a escola"],
    tone: "bg-butter text-ink",
    img: photos.psicopedagogia,
  },
  {
    n: "04",
    title: "ABA, TEA & TDAH",
    text: "Cuidado para crianças e adultos atípicos, com análise do comportamento, intervenção precoce e orientação para as famílias.",
    tags: ["Intervenção ABA", "Orientação parental", "Neurodiversidade"],
    tone: "bg-sage text-white",
    img: photos.tea,
  },
];

export const avaliacao = {
  intro:
    "A avaliação neuropsicológica investiga as funções cognitivas, como inteligência, memória, atenção, linguagem e funções executivas, além de aspectos emocionais, comportamentais e de personalidade. Ela ajuda a compreender dificuldades, identificar potencialidades e orientar os próximos passos do cuidado, para crianças, adolescentes e adultos.",
  formato:
    "É realizada ao longo de 10 sessões, com duração aproximada de 40 a 50 minutos cada. São utilizados instrumentos e testes psicológicos escolhidos conforme a demanda e os objetivos da avaliação.",
  indicacoes: [
    "Suspeita de TEA (Transtorno do Espectro Autista)",
    "Suspeita de TDAH",
    "Dificuldades de aprendizagem ou queda no desempenho escolar ou profissional",
    "Queixas de atenção, memória ou organização",
    "Quando a escola, o médico ou outro profissional solicita",
  ],
  etapas: [
    { t: "Entrevista inicial", d: "Conversa sobre a história, as queixas e a rotina. Com crianças, é feita com os pais ou responsáveis." },
    { t: "Testagem", d: "Aplicação de instrumentos e testes psicológicos que investigam inteligência, memória, atenção, funções executivas, personalidade, entre outros." },
    { t: "Análise integrada", d: "Os resultados dos testes, as observações e as informações da família, escola ou outros profissionais são analisados em conjunto." },
    { t: "Laudo e devolutiva", d: "Elaboração do laudo neuropsicológico e encontro de devolutiva para explicar os resultados com clareza, com orientações e encaminhamentos." },
  ],
};

export const aba = {
  intro:
    "Um caminho acolhedor para entender e apoiar o desenvolvimento do seu filho. Ajudamos pais e mães a compreender os marcos do desenvolvimento dentro da terapia ABA e a participar ativamente desse processo.",
  vbmapp:
    "O VB-MAPP (Verbal Behavior Milestones Assessment and Placement Program) é uma ferramenta de avaliação que mapeia habilidades de linguagem e aprendizado em crianças. Ele ajuda a identificar em que ponto do desenvolvimento a criança está e quais são os próximos passos terapêuticos.",
  marcos: [
    { key: "Mando", t: "O pedido", d: "É a habilidade de fazer pedidos funcionais a partir da motivação da criança, como pedir água quando está com sede. É o foco inicial da terapia, pois reduz a frustração e os comportamentos difíceis." },
    { key: "Tato", t: "A nomeação", d: "É a capacidade de identificar e nomear coisas do mundo ao redor, como objetos, ações e cores, percebidas pelos sentidos, apenas para compartilhar a informação." },
    { key: "Ecoico", t: "A imitação vocal", d: "É a repetição imediata de um som ou palavra falada por outra pessoa. Funciona como uma ajuda na terapia para ensinar a falar palavras novas." },
    { key: "Intraverbal", t: "A conversação", d: "É a base do diálogo: a criança responde a uma pergunta ou completa uma frase sem apenas repetir o que ouviu. Ex.: “Quantos anos você tem?” — “Quatro!”." },
    { key: "Outras", t: "Outras habilidades", d: "O desenvolvimento também envolve habilidades de ouvinte (entender instruções), visuais (pareamento, quebra-cabeças) e sociais (aprender a brincar com outras crianças)." },
  ],
  casa: [
    "Crie momentos de brincadeira com intencionalidade",
    "Use o interesse da criança como motivador",
    "Espere a iniciativa antes de oferecer",
    "Comemore cada tentativa de comunicação",
    "Mantenha instruções curtas e claras",
    "Seja consistente com a equipe terapêutica",
  ],
};

export const faqs = [
  { q: "Quem a clínica atende?", a: "Atendemos crianças, adolescentes, adultos, idosos e casais, incluindo crianças e adultos atípicos, como pessoas com TEA e TDAH." },
  { q: "A terapia online funciona tão bem quanto a presencial?", a: "Sim. O atendimento online é regulamentado pelo Conselho Federal de Psicologia e mantém o mesmo cuidado, sigilo e qualidade. A escolha depende do que for mais confortável para você." },
  { q: "Como funciona o atendimento infantil?", a: "Com crianças, a terapia usa recursos lúdicos, como brincadeiras e desenhos, para facilitar a expressão. Os pais ou responsáveis participam de encontros de orientação ao longo do processo." },
  { q: "Desconfio que tenho TDAH ou TEA. Posso procurar atendimento?", a: "Pode, sim. Muitas pessoas chegam com essa dúvida. Investigamos com cuidado o seu funcionamento e, quando necessário, há orientação e encaminhamento para outros profissionais." },
  { q: "Quantas sessões tem a avaliação neuropsicológica?", a: "A avaliação é realizada ao longo de 10 sessões, com duração aproximada de 40 a 50 minutos cada, incluindo entrevista, testagem, análise e devolutiva com laudo." },
  { q: "Qual a diferença entre avaliação neuropsicológica e terapia?", a: "A avaliação é um processo com começo, meio e fim, voltado a investigar e compreender o funcionamento cognitivo e emocional. A terapia é um acompanhamento contínuo. Muitas vezes, a avaliação ajuda a direcionar o tratamento." },
  { q: "A avaliação neuropsicológica dá diagnóstico?", a: "Ela fornece informações importantes que contribuem para o diagnóstico de condições como TEA e TDAH, construído em conjunto com a equipe de saúde, como neurologistas ou psiquiatras, quando necessário." },
  { q: "Vocês atendem por convênio?", a: "A clínica está em processo de credenciamento junto às operadoras de saúde. Entre em contato para saber a situação atual do seu plano." },
  { q: "Como faço para agendar?", a: "É só chamar no WhatsApp (11) 97609-5404 ou mandar uma mensagem no Instagram @equilibre_clinica. Respondemos com as opções de horário disponíveis." },
];
