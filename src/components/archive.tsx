import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'

import { cn } from '@/lib/utils'

export type Status = 'complete' | 'in-progress'

export function StatusBadge({
  status,
  version,
  className,
}: {
  status: Status
  version: string
  className?: string
}) {
  const complete = status === 'complete'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] leading-none',
        className,
      )}
    >
      <span
        className={cn(
          'inline-flex items-center gap-1.5 px-2 py-1 border rounded-[2px]',
          complete
            ? 'border-amber/50 text-amber'
            : 'border-dashed border-muted/50 text-muted',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            complete ? 'bg-amber' : 'border border-muted',
          )}
        />
        {complete ? 'Complete' : 'In progress'}
      </span>
      <span className="text-parchment/80 px-1">{version}</span>
    </span>
  )
}

export function PageHeader({
  index,
  label,
  title,
  children,
}: {
  index: string
  label: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-20 pb-14 md:pt-28 md:pb-16 rise">
      <p className="label mb-6">
        <span className="text-amber">{index}</span>
        <span className="mx-3 text-faint">/</span>
        {label}
      </p>
      <h1 className="text-[2.6rem] md:text-[4rem] leading-[1.05] font-light tracking-[-0.02em] max-w-4xl">
        {title}
      </h1>
      {children && (
        <div className="mt-7 max-w-2xl text-muted text-lg md:text-xl leading-relaxed">
          {children}
        </div>
      )}
    </header>
  )
}

export function Rule({ className }: { className?: string }) {
  return (
    <div className={cn('max-w-6xl mx-auto px-6', className)}>
      <div className="border-t border-rule" />
    </div>
  )
}

export function PaperLinks({
  paper,
}: {
  paper: { slug: string; pdf?: string; link?: string }
}) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 label">
      <Link
        to="/papers/$slug"
        params={{ slug: paper.slug }}
        className="!text-parchment hover:!text-amber transition-colors"
      >
        Read online →
      </Link>
      {paper.pdf ? (
        <a
          href={paper.pdf}
          target="_blank"
          rel="noreferrer"
          className="!text-amber hover:!text-amber-glow"
        >
          PDF ↓
        </a>
      ) : (
        <span className="!text-faint">PDF forthcoming</span>
      )}
      {paper.link && (
        <a
          href={paper.link}
          target="_blank"
          rel="noreferrer"
          className="hover:!text-parchment"
        >
          External link ↗
        </a>
      )}
    </div>
  )
}
