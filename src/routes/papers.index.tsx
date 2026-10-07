import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'

import { allPapers } from 'content-collections'

import { PageHeader, PaperLinks, StatusBadge } from '@/components/archive'
import { formatDate } from '@/lib/markdown'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/papers/')({
  head: () => ({ meta: [{ title: 'Papers — Reeves Research Institute' }] }),
  component: Papers,
})

const filters = [
  { id: 'all', label: 'All' },
  { id: 'complete', label: 'Complete' },
  { id: 'in-progress', label: 'In progress' },
] as const

type Filter = (typeof filters)[number]['id']

function Papers() {
  const [filter, setFilter] = useState<Filter>('all')
  const papers = [...allPapers]
    .sort((a, b) => a.order - b.order || b.date.localeCompare(a.date))
    .filter((p) => filter === 'all' || p.status === filter)

  return (
    <>
      <PageHeader index="I" label="Papers" title="Research papers">
        Formal work from the Institute. Every paper carries a version number and
        a status — complete works are stable; works in progress are published
        early and revised in the open.
      </PageHeader>

      <section className="max-w-6xl mx-auto px-6">
        <div
          role="group"
          aria-label="Filter by status"
          className="flex flex-wrap gap-2 border-t border-rule pt-6 mb-4"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                'label px-3 py-1.5 border rounded-[2px] transition-colors',
                filter === f.id
                  ? 'border-amber/60 !text-amber'
                  : 'border-transparent hover:!text-parchment',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ol className="divide-y divide-rule border-b border-rule">
          {papers.map((paper, i) => (
            <li
              key={paper.slug}
              className="grid md:grid-cols-[4rem_1fr] gap-x-6 py-10 md:py-12"
            >
              <span className="font-mono text-sm text-faint pt-2 hidden md:block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4">
                  <StatusBadge status={paper.status} version={paper.version} />
                  {paper.flagship && (
                    <span className="label !text-amber">★ Flagship</span>
                  )}
                  <span className="label">
                    {formatDate(paper.updated ?? paper.date)}
                  </span>
                </div>
                <h2 className="text-3xl md:text-[2.4rem] font-light leading-tight tracking-[-0.01em]">
                  <Link
                    to="/papers/$slug"
                    params={{ slug: paper.slug }}
                    className="hover:text-amber-glow transition-colors"
                  >
                    {paper.title}
                  </Link>
                </h2>
                {paper.subtitle && (
                  <p className="italic text-muted mt-2 text-lg">
                    {paper.subtitle}
                  </p>
                )}
                <div className="mt-6 max-w-3xl">
                  <p className="label !text-faint mb-2">Abstract</p>
                  <p className="text-parchment/80 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>
                <PaperLinks paper={paper} />
              </div>
            </li>
          ))}
          {papers.length === 0 && (
            <li className="py-16 text-muted italic">
              No papers match this filter.
            </li>
          )}
        </ol>
      </section>
    </>
  )
}
