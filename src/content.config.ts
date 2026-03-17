import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { glob } from "astro/loaders"

const feedCollection = defineCollection({
   loader: glob({pattern: "**/*.json", base: "./src/content/feedItems"}),
   schema: z.object({
      img: z.string(),
      counter: z.number(),
      title: z.string(),
      description: z.string(),
   })
})

const newItemsCollection = defineCollection({
   loader: glob({pattern: "**/*.yaml", base: "./src/content/newItems"}),
   schema: z.object({
      title: z.string(),
      description: z.string(),
   })
})

export const collections = {
   feedItems: feedCollection,
   newItems: newItemsCollection
}
