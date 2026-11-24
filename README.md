# Site · Rebeca Lira, Psicóloga

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · Motion · Lenis (rolagem suave) · TypeScript.
Animações: preloader, títulos revelados por linha, faixa infinita que reage à rolagem, texto que acende ao rolar, contadores, cards empilhados, rolagem horizontal na avaliação, abas animadas, menu em tela cheia, cursor personalizado e botões magnéticos. Tudo respeita a opção de "reduzir movimento" do sistema.
Página estática, rápida e com SEO (metadata, Open Graph, sitemap, robots, schema.org).

## Rodar localmente
```bash
npm install
npm run dev      # http://localhost:3000
```

## Publicar na Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório.
3. Clique em **Deploy** (a Vercel detecta Next.js sozinha, sem configuração).
4. Opcional: em **Settings → Domains**, conecte um domínio próprio
   e atualize `url` em `lib/site.ts`.

Alternativa sem GitHub: `npx vercel` dentro da pasta.

## Onde editar
- **Todos os textos, contatos, CRP e links:** `lib/site.ts`
- **Layout e animações de cada seção:** `components/*.tsx` e `components/fx/`
- **Cores e fontes:** `app/globals.css` (bloco `@theme`)
- **Fotos:** `public/` (rebeca-recorte, rebeca, rebeca-tapete, rebeca-consultorio)
