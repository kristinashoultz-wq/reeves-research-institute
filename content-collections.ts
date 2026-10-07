import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const toSlug = (path: string) => path.replace(/\.md$/, '').split('/').pop()!

// Research papers. `status` + `version` drive the badges on /papers.
// `pdf` is a path under /public (e.g. /papers/fence.pdf) or an external URL.
const papers = defineCollection({
  name: 'papers',
  directory: 'content/papers',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    abstract: z.string(),
    status: z.enum(['complete', 'in-progress']),
    version: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    pdf: z.string().optional(),
    link: z.string().optional(),
    featured: z.boolean().default(false),
    flagship: z.boolean().default(false),
    order: z.number().default(100),
    content: z.string(),
  }),
  transform: async (doc) => ({ ...doc, slug: toSlug(doc._meta.path) }),
})

// Theoretical frameworks. Markdown supports $inline$ and $$display$$ math,
// and raw <figure>/<svg> blocks for diagrams.
const theories = defineCollection({
  name: 'theories',
  directory: 'content/theories',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    shortName: z.string().optional(),
    summary: z.string(),
    status: z.enum(['complete', 'in-progress']),
    version: z.string(),
    date: z.string(),
    primary: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    content: z.string(),
  }),
  transform: async (doc) => ({ ...doc, slug: toSlug(doc._meta.path) }),
})

// Philosophy essays and longer reflections.
const essays = defineCollection({
  name: 'essays',
  directory: 'content/essays',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
    content: z.string(),
  }),
  transform: async (doc) => ({ ...doc, slug: toSlug(doc._meta.path) }),
})

export default defineConfig({
  collections: [papers, theories, essays],
})
