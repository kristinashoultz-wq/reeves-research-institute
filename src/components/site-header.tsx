import { useState } from 'react'
import { Link } from '@tanstack/react-router'

const nav = [
  { to: '/papers', label: 'Papers' },
  { to: '/theories', label: 'Theories' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/about', label: 'About' },
] as const

export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <circle cx="16" cy="16" r="13.5" />
      <circle cx="16" cy="16" r="7" opacity="0.6" />
      <circle cx="16" cy="16" r="1.8" fill="currentColor" stroke="none" />
      <path d="M16 2.5v6M16 23.5v6" opacity="0.6" />
    </svg>
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-rule/80 bg-ink/85 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <Mark className="w-7 h-7 text-amber transition-transform duration-700 group-hover:rotate-90" />
          <span className="leading-none">
            <span className="block text-[1.05rem] tracking-[0.01em]">
              Reeves Research Institute
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="label !text-[0.72rem] hover:!text-parchment transition-colors"
                  activeProps={{ className: '!text-amber' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden label !text-parchment px-2 py-1"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="md:hidden border-t border-rule bg-ink"
        >
          <ul className="px-6 py-4">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl font-light border-b border-rule/60 last:border-0"
                  activeProps={{ className: 'text-amber' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
