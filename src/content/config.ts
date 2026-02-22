import { defineCollection, z } from 'astro:content';

const socialSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const sponsors = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    key: z.string(),
    category: z.enum(['platinum', 'gold', 'silver', 'bronze', 'chillout', 'partners', 'bugbounty']),
    website: z.string().url(),
    logo: z.string().optional(),
    order: z.number().optional(),
    socials: z.array(socialSchema).optional().default([]),
    jobs: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const ctf = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    date: z.string().optional(),
    platform: z.string().optional(),
    flagFormat: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const villages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    sponsor: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { sponsors, ctf, villages };
