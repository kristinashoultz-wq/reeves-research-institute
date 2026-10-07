import { Link } from '@tanstack/react-router'

import { Mark } from '@/components/site-header'

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-[1fr_auto] items-end">
        <div className="flex items-start gap-4">
          <Mark className="w-8 h-8 text-amber-soft shrink-0 mt-1" />
          <div>
            <p className="text-lg">Reeves Research Institute</p>
            <p className="text-muted text-[0.95rem] max-w-md leading-relaxed">
              An independent archive for consciousness studies, AI cognition,
              and theoretical frameworks. Works are versioned and revised in
              the open.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-3">
          <nav aria-label="Footer" className="flex gap-6 label">
            <Link to="/papers" className="hover:text-parchment">Papers</Link>
            <Link to="/theories" className="hover:text-parchment">Theories</Link>
            <Link to="/philosophy" className="hover:text-parchment">Philosophy</Link>
            <Link to="/about" className="hover:text-parchment">About</Link>
          </nav>
          <p className="label !text-faint">
            © {new Date().getFullYear()} Reeves Research Institute
          </p>
        </div>
      </div>
    </footer>
  )
}
