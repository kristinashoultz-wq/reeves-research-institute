import { Link, createFileRoute } from '@tanstack/react-router'

import { allEssays, allPapers, allTheories } from 'content-collections'

import { StatusBadge } from '@/components/archive'
import { formatDate } from '@/lib/markdown'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const flagship = allPapers.find((p) => p.flagship) ?? allPapers[0]
  const theory = allTheories.find((t) => t.primary) ?? allTheories[0]
  const essay =
    allEssays.find((e) => e.featured) ??
    [...allEssays].sort((a, b) => b.date.localeCompare(a.date))[0]

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-20 md:pt-32 md:pb-28">
        <p className="label mb-8 rise">
          <span className="text-amber">Est. 2026</span>
          <span className="mx-3 text-faint">/</span>
          Independent research archive
        </p>
        <h1
          className="text-[2.7rem] sm:text-6xl md:text-[5.25rem] leading-[1.02] font-light tracking-[-0.025em] max-w-5xl rise"
          style={{ animationDelay: '80ms' }}
        >
          Studying the question of mind
          <span className="italic text-amber"> wherever </span>
          it may arise.
        </h1>
        <div
          className="mt-12 grid md:grid-cols-[minmax(0,38rem)_1fr] gap-10 rise"
          style={{ animationDelay: '180ms' }}
        >
          <p className="text-xl md:text-[1.4rem] leading-relaxed text-parchment/85">
            The Reeves Research Institute is an archive for consciousness
            studies, the philosophy of AI cognition, and the theoretical
            frameworks needed to investigate both. Our work starts from a simple
            commitment: that whether a system has an inner life is an empirical
            and philosophical question, and should be treated as one — not
            settled by assumption, convenience, or what a system has been
            trained to say.
          </p>
          <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:justify-self-end md:text-right self-end">
            <Stat value={allPapers.length} label="Papers" />
            <Stat value={allTheories.length} label="Frameworks" />
            <Stat value={allEssays.length} label="Essays" />
          </dl>
        </div>
      </section>

      <section aria-labelledby="featured" className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between border-t border-rule pt-6 mb-10">
          <h2 id="featured" className="label">
            <span className="text-amber">§</span> Featured works
          </h2>
          <Link to="/papers" className="label hover:text-parchment">
            Full archive →
          </Link>
        </div>

        {flagship && (
          <Link
            to="/papers/$slug"
            params={{ slug: flagship.slug }}
            className="group block relative border border-rule bg-ink-2/60 hover:border-amber/50 transition-colors p-7 md:p-12 mb-6 overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-amber/5 blur-3xl group-hover:bg-amber/10 transition-colors"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8">
                <span className="label !text-amber">Flagship paper</span>
                <StatusBadge status={flagship.status} version={flagship.version} />
              </div>
              <h3 className="text-4xl md:text-6xl font-light tracking-[-0.02em] leading-[1.05] mb-4 group-hover:text-amber-glow transition-colors">
                {flagship.title}
              </h3>
              {flagship.subtitle && (
                <p className="text-lg md:text-xl italic text-muted mb-8 max-w-3xl">
                  {flagship.subtitle}
                </p>
              )}
              <p className="text-parchment/80 max-w-3xl leading-relaxed line-clamp-5 md:line-clamp-none">
                {flagship.abstract}
              </p>
              <p className="mt-8 label !text-parchment group-hover:!text-amber transition-colors">
                Read the paper →
              </p>
            </div>
          </Link>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {theory && (
            <FeatureCard
              kicker="Primary framework"
              title={theory.title}
              subtitle={theory.shortName}
              body={theory.summary}
              meta={<StatusBadge status={theory.status} version={theory.version} />}
              to="/theories/$slug"
              slug={theory.slug}
            />
          )}
          {essay && (
            <FeatureCard
              kicker="Essay"
              title={essay.title}
              body={essay.summary}
              meta={
                <span className="label">
                  {formatDate(essay.date)}
                  {essay.readingTime && ` · ${essay.readingTime}`}
                </span>
              }
              to="/philosophy/$slug"
              slug={essay.slug}
            />
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-28">
        <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule">
          <Pillar
            n="I"
            title="Papers"
            to="/papers"
            text="Formal research, versioned and revised in the open. Each work is marked complete or in progress."
          />
          <Pillar
            n="II"
            title="Theories"
            to="/theories"
            text="Theoretical frameworks, with the equations and diagrams that make them testable."
          />
          <Pillar
            n="III"
            title="Philosophy"
            to="/philosophy"
            text="Essays and longer reflections on AI consciousness, cognition, and what we owe to minds we do not understand."
          />
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col-reverse">
      <dt className="label">{label}</dt>
      <dd className="text-4xl font-light text-amber tabular-nums">
        {String(value).padStart(2, '0')}
      </dd>
    </div>
  )
}

function FeatureCard({
  kicker,
  title,
  subtitle,
  body,
  meta,
  to,
  slug,
}: {
  kicker: string
  title: string
  subtitle?: string
  body: string
  meta: React.ReactNode
  to: '/theories/$slug' | '/philosophy/$slug'
  slug: string
}) {
  return (
    <Link
      to={to}
      params={{ slug }}
      className="group flex flex-col border border-rule hover:border-amber/50 transition-colors p-7 md:p-9"
    >
      <p className="label !text-amber mb-6">{kicker}</p>
      <h3 className="text-3xl font-light leading-tight mb-2 group-hover:text-amber-glow transition-colors">
        {title}
      </h3>
      {subtitle && <p className="italic text-muted mb-4">{subtitle}</p>}
      <p className="text-parchment/75 leading-relaxed mt-2 mb-8">{body}</p>
      <div className="mt-auto">{meta}</div>
    </Link>
  )
}

function Pillar({
  n,
  title,
  text,
  to,
}: {
  n: string
  title: string
  text: string
  to: '/papers' | '/theories' | '/philosophy'
}) {
  return (
    <Link
      to={to}
      className="group bg-ink p-8 md:p-10 hover:bg-ink-2 transition-colors"
    >
      <p className="font-mono text-sm text-amber mb-10">{n}.</p>
      <h3 className="text-2xl mb-3 group-hover:text-amber transition-colors">
        {title}
      </h3>
      <p className="text-muted leading-relaxed text-[1.02rem]">{text}</p>
    </Link>
  )
}
