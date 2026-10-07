# AGENTS.md

## Project

Reeves Research Institute — a static-content research archive (papers, theoretical frameworks, philosophy essays, about). Built with TanStack Start + Content Collections, deployed on Netlify. No database, no auth, no forms, no comments: this is an archive, not a blog. Do not add blog features (tags, feeds, comments, sidebars) unless explicitly asked.

## Structure

```
content/
  papers/     # Research papers (status + version required)
  theories/   # Theoretical frameworks (markdown with KaTeX math + inline SVG figures)
  essays/     # Philosophy essays (rendered at /philosophy)
content-collections.ts   # Zod schemas for the three collections; slug = file name
public/
  favicon.svg
  papers/     # Put PDFs here; reference as /papers/<file>.pdf
src/
  components/
    site-header.tsx  # Sticky header, minimal nav, mobile menu, <Mark/> logo
    site-footer.tsx
    archive.tsx      # StatusBadge, PageHeader, PaperLinks
    article.tsx      # ArticleShell (detail page layout), Prose (markdown), MetaRow
  lib/
    markdown.ts      # marked + marked-katex-extension renderer; formatDate
    utils.ts         # cn()
  routes/
    __root.tsx       # Shell, fonts (Google Fonts: Newsreader + IBM Plex Mono), KaTeX CSS, 404
    index.tsx        # Home: mission + featured works (flagship paper, primary theory, featured essay)
    papers.index.tsx / papers.$slug.tsx
    theories.index.tsx / theories.$slug.tsx
    philosophy.index.tsx / philosophy.$slug.tsx   # reads the `essays` collection
    about.tsx
  styles.css         # Tailwind theme tokens + `.article` long-form typography, figure/equation styles
```

## Conventions & decisions

- **Theme tokens** live in `@theme` in `styles.css`: `ink`, `ink-2`, `ink-3`, `rule`, `parchment`, `muted`, `faint`, `amber`, `amber-soft`, `amber-glow`. Use these, not raw hex, in components (SVG figures inside markdown use hex because they can't see CSS vars reliably).
- `.label` is the small mono uppercase metadata style; `.article` styles rendered markdown.
- Featured works on Home are chosen by frontmatter flags: `flagship: true` (paper), `primary: true` (theory), `featured: true` (essay).
- KaTeX is pinned to 0.16.x because `marked-katex-extension` peers on `katex <0.19`.
- Don't export helpers from route files (TanStack code-splitting); shared UI goes in `src/components/`.
- Detail routes throw `notFound()` for unknown slugs; the root `notFoundComponent` renders the 404.
- Content is drafted starter text; the owner is expected to replace it with their own writing.
