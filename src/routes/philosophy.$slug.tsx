import { createFileRoute, notFound } from '@tanstack/react-router'

import { allEssays } from 'content-collections'

import { ArticleShell, Prose } from '@/components/article'
import { formatDate } from '@/lib/markdown'

export const Route = createFileRoute('/philosophy/$slug')({
  loader: ({ params }) => {
    const essay = allEssays.find((e) => e.slug === params.slug)
    if (!essay) throw notFound()
    return essay
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Reeves Research Institute` },
          { name: 'description', content: loaderData.summary },
        ]
      : [],
  }),
  component: Essay,
})

function Essay() {
  const essay = Route.useLoaderData()

  return (
    <ArticleShell
      back={{ to: '/philosophy', label: 'All essays' }}
      kicker={
        <p className="label">
          <span className="text-amber">Essay</span>
          <span className="mx-3 text-faint">/</span>
          {formatDate(essay.date)}
          {essay.readingTime && (
            <>
              <span className="mx-3 text-faint">/</span>
              {essay.readingTime}
            </>
          )}
        </p>
      }
      title={essay.title}
      subtitle={essay.summary}
    >
      <div className="border-t border-rule pt-10">
        <Prose source={essay.content} className="dropcap" />
      </div>
    </ArticleShell>
  )
}
