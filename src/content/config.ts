import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    organizer: z.string(),
    description: z.string(),
    link: z.string().optional(),
    image: z.string().optional(),
    genres: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'events': eventsCollection,
};
