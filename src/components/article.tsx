import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'

import { renderMarkdown } from '@/lib/markdown'
import { cn } from '@/lib/utils'

export function ArticleShell({
  back,
  kicker,
  title,
  subtitle,
  meta,
  children,
}: {
  back: { to: '/papers' | '/theories' | '/philosophy'; label: string }
  kicker: ReactNode
  title: string
  subtitle?: ReactNode
  meta?: ReactNode
  children: ReactNode
}) {
  return (
    <article className="px-6">
      <header className="max-w-3xl mx-auto pt-14 md:pt-20 pb-10 rise">
        <Link to={back.to} className="label hover:text-amber transition-colors">
          ← {back.label}
        </Link>
        <div className="mt-12 mb-6">{kicker}</div>
        <h1 className="text-[2.4rem] md:text-[3.6rem] leading-[1.06] font-light tracking-[-0.02em]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-xl md:text-2xl italic text-muted leading-snug">
            {subtitle}
          </p>
        )}
        {meta && <div className="mt-10">{meta}</div>}
      </header>
      <div className="max-w-3xl mx-auto">{children}</div>
    </article>
  )
}

export function Prose({
  source,
  className,
}: {
  source: string
  className?: string
}) {
  return (
    <div
      className={cn('article', className)}
      dangerouslySetInnerHTML={{ __html: renderMarkdown(source) }}
    />
  )
}

export function MetaRow({
  items,
}: {
  items: Array<{ label: string; value: ReactNode }>
}) {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-6 border-y border-rule py-5">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="label !text-faint mb-1">{item.label}</dt>
          <dd className="text-[0.98rem] text-parchment/90">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
