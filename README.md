# Reeves Research Institute

A research archive for consciousness studies, the philosophy of AI cognition, and theoretical frameworks — including a physics-based consciousness metric. The flagship paper is **The Fence Isn't Evidence**.

This is deliberately an archive, not a blog: no comments, no sidebars, no feeds. Every paper and framework carries a version number and a status (complete / in progress).

## Pages

| Route | Contents |
|---|---|
| `/` | Mission statement and featured works (flagship paper, primary framework, featured essay) |
| `/papers` | Research papers with title, abstract, status, version, and read/PDF/external links. Filterable by status |
| `/papers/:slug` | Full paper with abstract block and revision metadata |
| `/theories` | Theoretical frameworks; the primary framework is highlighted |
| `/theories/:slug` | Full framework with rendered equations (KaTeX) and SVG diagrams |
| `/philosophy` | Essays and longer reflections |
| `/philosophy/:slug` | Full essay |
| `/about` | Who runs the Institute and why |

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing) on Netlify
- [Content Collections](https://www.content-collections.dev/) — type-safe markdown with Zod-validated frontmatter
- [marked](https://marked.js.org/) + [KaTeX](https://katex.org/) for markdown and math rendering
- Tailwind CSS 4 — dark theme, Newsreader serif, amber accent

## Adding & editing content

All content is markdown in `content/`:

- `content/papers/*.md` — `title`, `subtitle?`, `abstract`, `status` (`complete` | `in-progress`), `version` (e.g. `"v0.1"`), `date`, `updated?`, `keywords`, `pdf?`, `link?`, `flagship?`, `featured?`, `order`
- `content/theories/*.md` — `title`, `shortName?`, `summary`, `status`, `version`, `date`, `primary?`, `order`
- `content/essays/*.md` — `title`, `summary`, `date`, `readingTime?`, `featured?`

The file name becomes the URL slug. Wrap quoted values in quotes (especially dates and versions).

**Equations:** use `$inline$` and `$$ display $$` (on their own lines) — rendered with KaTeX.
**Diagrams:** paste a raw `<figure><svg>…</svg><figcaption><b>Figure 1</b> …</figcaption></figure>` block. Keep it free of blank lines so markdown treats it as one HTML block. Raster images can go in `public/img/`.
**Definitions / propositions:** wrap in `<div class="definition">` with blank lines inside so the markdown inside is rendered.
**PDFs:** drop the file into `public/papers/` and set `pdf: "/papers/your-file.pdf"` in the paper's frontmatter. Papers without a PDF show "PDF forthcoming".

## Running locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```
