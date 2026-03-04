import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertVideoSchema = createInsertSchema(videos).omit({ id: true, createdAt: true });

export type Video = typeof videos.$inferSelect;
export type InsertVideo = z.infer<typeof insertVideoSchema>;
