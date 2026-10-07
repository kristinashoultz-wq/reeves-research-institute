import { createFileRoute, notFound } from '@tanstack/react-router'

import { allTheories } from 'content-collections'

import { StatusBadge } from '@/components/archive'
import { ArticleShell, MetaRow, Prose } from '@/components/article'
import { formatDate } from '@/lib/markdown'

export const Route = createFileRoute('/theories/$slug')({
  loader: ({ params }) => {
    const theory = allTheories.find((t) => t.slug === params.slug)
    if (!theory) throw notFound()
    return theory
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Reeves Research Institute` },
          { name: 'description', content: loaderData.summary },
        ]
      : [],
  }),
  component: Theory,
})

function Theory() {
  const theory = Route.useLoaderData()

  return (
    <ArticleShell
      back={{ to: '/theories', label: 'All frameworks' }}
      kicker={
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <StatusBadge status={theory.status} version={theory.version} />
          {theory.primary && (
            <span className="label !text-amber">Primary framework</span>
          )}
        </div>
      }
      title={theory.title}
      subtitle={theory.shortName}
      meta={
        <>
          <p className="text-xl text-parchment/85 leading-relaxed mb-10">
            {theory.summary}
          </p>
          <MetaRow
            items={[
              { label: 'Version', value: theory.version },
              {
                label: 'Status',
                value: theory.status === 'complete' ? 'Complete' : 'In progress',
              },
              { label: 'Introduced', value: formatDate(theory.date) },
              { label: 'Type', value: 'Framework' },
            ]}
          />
        </>
      }
    >
      <Prose source={theory.content} />
    </ArticleShell>
  )
}
