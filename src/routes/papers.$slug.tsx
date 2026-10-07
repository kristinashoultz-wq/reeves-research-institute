import { createFileRoute, notFound } from '@tanstack/react-router'

import { allPapers } from 'content-collections'

import { PaperLinks, StatusBadge } from '@/components/archive'
import { ArticleShell, MetaRow, Prose } from '@/components/article'
import { formatDate } from '@/lib/markdown'

export const Route = createFileRoute('/papers/$slug')({
  loader: ({ params }) => {
    const paper = allPapers.find((p) => p.slug === params.slug)
    if (!paper) throw notFound()
    return paper
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Reeves Research Institute` },
          { name: 'description', content: loaderData.abstract },
        ]
      : [],
  }),
  component: Paper,
})

function Paper() {
  const paper = Route.useLoaderData()

  return (
    <ArticleShell
      back={{ to: '/papers', label: 'All papers' }}
      kicker={
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <StatusBadge status={paper.status} version={paper.version} />
          {paper.flagship && <span className="label !text-amber">★ Flagship paper</span>}
        </div>
      }
      title={paper.title}
      subtitle={paper.subtitle}
      meta={
        <>
          <MetaRow
            items={[
              { label: 'Version', value: paper.version },
              {
                label: 'Status',
                value: paper.status === 'complete' ? 'Complete' : 'In progress',
              },
              { label: 'First published', value: formatDate(paper.date) },
              {
                label: 'Last revised',
                value: formatDate(paper.updated ?? paper.date),
              },
            ]}
          />
          <section aria-label="Abstract" className="mt-10 bg-ink-2 border border-rule p-6 md:p-8">
            <p className="label !text-amber mb-3">Abstract</p>
            <p className="text-parchment/90 leading-relaxed text-[1.08rem]">
              {paper.abstract}
            </p>
            {paper.keywords.length > 0 && (
              <p className="mt-5 label !normal-case !tracking-normal !text-[0.78rem]">
                <span className="uppercase tracking-[0.14em] !text-[0.7rem] mr-2">
                  Keywords
                </span>
                {paper.keywords.join(' · ')}
              </p>
            )}
            <PaperLinks paper={paper} />
          </section>
        </>
      }
    >
      <Prose source={paper.content} />
    </ArticleShell>
  )
}
