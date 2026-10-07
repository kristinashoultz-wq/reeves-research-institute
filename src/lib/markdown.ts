import { Marked } from 'marked'
import markedKatex from 'marked-katex-extension'

const md = new Marked(markedKatex({ throwOnError: false, nonStandard: true }))

export function renderMarkdown(source: string): string {
  return md.parse(source, { async: false }) as string
}

export function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z')
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  })
}
