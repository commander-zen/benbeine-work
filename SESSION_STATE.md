# SESSION STATE — benbeine.com

## Cold Start Prompt
> Deploy to Vercel (`npm i -g vercel` first if CLI not installed, then `vercel --prod`). Set custom domain `benbeine.com`. Swap placeholder `#` links in page.tsx.

---

## Completed This Session ✅

- ✅ Scaffolded Next.js 16.2.7 (App Router, TypeScript, Tailwind v4)
- ✅ `app/globals.css` — design tokens (#0A0A0A bg, #F0F0F0 fg, #00E5CC teal), `.work-card` hover border, `.building-link` + `.contact-link` CSS hover classes
- ✅ `app/layout.tsx` — Noto Sans via next/font/google (400/500/600/700), full OG/Twitter metadata for benbeine.com
- ✅ `app/components/SectionLabel.tsx` — 11px uppercase teal tracked-wide label
- ✅ `app/components/WorkCard.tsx` — project card with teal left border on hover (CSS, no JS)
- ✅ `app/components/Nav.tsx` — scroll-triggered sticky nav (appears after 120px scroll), client component
- ✅ `app/page.tsx` — all five sections: Identity, Work (3 cards), How I Work, Building (MTG DNA), About + Footer
- ✅ `public/robots.txt` — allow all, sitemap reference
- ✅ Production build passes clean (`next build`, TypeScript clean, 0 errors)
- ✅ HELIX design tokens — `globals.css` `:root`/`[data-theme="light"]` + `[data-theme="dark"]` CSS vars; body uses `var(--base)` + `var(--ink)`
- ✅ HELIX fonts — Zilla Slab (300–700), Noto Sans (300–700), Noto Sans Mono (400–500) via `next/font/google` as CSS variables
- ✅ `app/components/ThemeToggle.tsx` — `"use client"` toggle (◑), fixed top-right, reads localStorage → prefers-color-scheme → light fallback, sets `data-theme` on `<html>`
- ✅ Inline theme init script in `<head>` prevents flash of wrong theme on load
- ✅ HELIX PageHeader — eyebrow (Noto Sans 300, 11px, 0.18em), h1 "ben beine" (Zilla Slab 700, 2.2rem), full-width 2px gold rule
- ✅ HELIX Work section — SectionLabel (gold, 10px, 700), WorkCard deck card pattern (var(--paper), gold left border, Zilla Slab title, pull-quote with ink-faint border)
- ✅ HELIX Building section — MTG DNA wrapped in deck card, GitHub link as ghost button
- ✅ HELIX About section — body copy var(--ink), contact links (email, LinkedIn, GitHub) as ghost buttons
- ✅ HELIX footer — color-mix ink border at 12% opacity, Noto Sans 11px ink-muted text
- ✅ Content refresh — NORA card rewritten, 2 new work cards (Cloud Data Migration, SOC Compliance), How I Work and About sections fully updated

---

## Known Issues / Placeholders

- LinkedIn URL in ContactLinks → real URL now set (linkedin.com/in/ben-beine/)
- GitHub URL in ContactLinks → real URL now set (github.com/commander-zen)
- MTG DNA GitHub link in BuildingLinks → currently `#`, swap when live
- MTG DNA "Follow the build" link → currently `#`, swap when live (substack? Linear?)
- No `sitemap.xml` — add if SEO matters at launch

---

## File Map

```
benbeine-com/
├── app/
│   ├── components/
│   │   ├── Nav.tsx           ← "use client", scroll-triggered
│   │   ├── SectionLabel.tsx  ← server, no interactivity
│   │   ├── ThemeToggle.tsx   ← "use client", fixed top-right ◑ button
│   │   └── WorkCard.tsx      ← server, hover via CSS class
│   ├── globals.css           ← Tailwind v4 @theme tokens + HELIX CSS vars (light/dark) + CSS classes
│   ├── layout.tsx            ← Zilla Slab + Noto Sans + Noto Mono fonts, metadata, theme init script
│   └── page.tsx              ← all sections, server component
└── public/
    └── robots.txt
```

---

## Deploy Checklist

- [ ] `vercel --prod` or link via Vercel dashboard
- [ ] Set custom domain `benbeine.com` in Vercel
- [ ] Swap placeholder `#` links for real URLs
- [ ] Add favicon (brief has a concept: BB-134 in Linear)
