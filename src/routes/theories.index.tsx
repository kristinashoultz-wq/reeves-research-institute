import { Link, createFileRoute } from '@tanstack/react-router'

import { allTheories } from 'content-collections'

import { PageHeader, StatusBadge } from '@/components/archive'

export const Route = createFileRoute('/theories/')({
  head: () => ({ meta: [{ title: 'Theories — Reeves Research Institute' }] }),
  component: Theories,
})

function Theories() {
  const theories = [...allTheories].sort(
    (a, b) => Number(b.primary) - Number(a.primary) || a.order - b.order,
  )
  const [primary, ...rest] = theories

  return (
    <>
      <PageHeader index="II" label="Theories" title="Theoretical frameworks">
        Formal frameworks developed at the Institute, with the equations,
        diagrams, and open problems needed to make them testable.
      </PageHeader>

      <section className="max-w-6xl mx-auto px-6">
        {primary && (
          <Link
            to="/theories/$slug"
            params={{ slug: primary.slug }}
            className="group grid md:grid-cols-[1.1fr_1fr] border border-rule hover:border-amber/50 transition-colors overflow-hidden"
          >
            <div className="p-7 md:p-12 order-2 md:order-1">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8">
                <span className="label !text-amber">Primary framework</span>
                <StatusBadge status={primary.status} version={primary.version} />
              </div>
              <h2 className="text-4xl md:text-5xl font-light tracking-[-0.02em] leading-tight group-hover:text-amber-glow transition-colors">
                {primary.title}
              </h2>
              {primary.shortName && (
                <p className="italic text-muted mt-3 text-lg">
                  {primary.shortName}
                </p>
              )}
              <p className="mt-6 text-parchment/80 leading-relaxed">
                {primary.summary}
              </p>
              <p className="mt-8 label !text-parchment group-hover:!text-amber transition-colors">
                Read the framework →
              </p>
            </div>
            <div className="order-1 md:order-2 bg-ink-2 border-b md:border-b-0 md:border-l border-rule flex items-center justify-center p-8 md:p-10">
              <KappaGlyph />
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <ul className="mt-6 grid md:grid-cols-2 gap-6">
            {rest.map((t) => (
              <li key={t.slug}>
                <Link
                  to="/theories/$slug"
                  params={{ slug: t.slug }}
                  className="group flex flex-col h-full border border-rule hover:border-amber/50 transition-colors p-7 md:p-9"
                >
                  <StatusBadge status={t.status} version={t.version} className="mb-6" />
                  <h2 className="text-3xl font-light leading-tight group-hover:text-amber-glow transition-colors">
                    {t.title}
                  </h2>
                  {t.shortName && (
                    <p className="italic text-muted mt-2">{t.shortName}</p>
                  )}
                  <p className="mt-5 text-parchment/75 leading-relaxed">
                    {t.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

function KappaGlyph() {
  return (
    <svg
      viewBox="0 0 320 240"
      className="w-full max-w-sm"
      role="img"
      aria-label="Schematic of the kappa metric: integration times coherence over dissipation"
    >
      <g fill="none" stroke="#d9a441">
        <circle cx="160" cy="110" r="88" opacity="0.18" />
        <circle cx="160" cy="110" r="62" opacity="0.32" />
        <circle cx="160" cy="110" r="36" opacity="0.55" />
      </g>
      <text
        x="160"
        y="128"
        textAnchor="middle"
        fontFamily="Newsreader, Georgia, serif"
        fontStyle="italic"
        fontSize="56"
        fill="#f0c46c"
      >
        κ
      </text>
      <g
        fontFamily="IBM Plex Mono, monospace"
        fontSize="10"
        letterSpacing="1.5"
        fill="#a39a89"
        textAnchor="middle"
      >
        <text x="160" y="16">INTEGRATION · I_min</text>
        <text x="40" y="214">COHERENCE · τ_c</text>
        <text x="280" y="214">DISSIPATION · Ṡ</text>
      </g>
      <g stroke="#6f675a" strokeDasharray="2 4">
        <line x1="160" y1="22" x2="160" y2="48" />
        <line x1="70" y1="200" x2="105" y2="160" />
        <line x1="250" y1="200" x2="215" y2="160" />
      </g>
    </svg>
  )
}
