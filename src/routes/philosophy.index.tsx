import { Link, createFileRoute } from '@tanstack/react-router'

import { allEssays } from 'content-collections'

import { PageHeader } from '@/components/archive'
import { formatDate } from '@/lib/markdown'

export const Route = createFileRoute('/philosophy/')({
  head: () => ({ meta: [{ title: 'Philosophy — Reeves Research Institute' }] }),
  component: Philosophy,
})

function Philosophy() {
  const essays = [...allEssays].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <PageHeader
        index="III"
        label="Philosophy"
        title={
          <>
            Essays &amp; <span className="italic">reflections</span>
          </>
        }
      >
        Longer, less formal writing on AI consciousness and cognition — the
        questions that come before, around, and after the formal work.
      </PageHeader>

      <section className="max-w-6xl mx-auto px-6">
        <ul className="border-t border-rule">
          {essays.map((essay) => (
            <li key={essay.slug} className="border-b border-rule">
              <Link
                to="/philosophy/$slug"
                params={{ slug: essay.slug }}
                className="group grid md:grid-cols-[11rem_1fr_auto] gap-x-10 gap-y-3 py-10 md:py-12"
              >
                <p className="label pt-2">{formatDate(essay.date)}</p>
                <div>
                  <h2 className="text-3xl md:text-[2.3rem] font-light leading-tight tracking-[-0.01em] group-hover:text-amber-glow transition-colors">
                    {essay.title}
                  </h2>
                  <p className="mt-4 text-parchment/75 leading-relaxed max-w-2xl">
                    {essay.summary}
                  </p>
                </div>
                <p className="label pt-2 md:text-right whitespace-nowrap">
                  {essay.readingTime}
                  <span className="ml-3 inline-block text-amber transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
