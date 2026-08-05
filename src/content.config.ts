import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      coverImage: image().optional(),
      coverAlt: z.string().optional(),
      category: z.enum([
        'Backend & Cloud',
        'Microservicios',
        'Arte Generativo',
        'Música & Sonido',
        'Desarrollo Web',
        'Investigación',
      ]),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      links: z
        .object({
          github: z.string().url().optional(),
          live: z.string().url().optional(),
          demo: z.string().url().optional(),
        })
        .default({}),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      coverImage: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

const photography = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photography' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      photo: image().optional(),
      location: z.string().optional(),
      camera: z.string().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { projects, notes, photography };
