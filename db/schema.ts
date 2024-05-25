import { InferModelFromColumns } from "drizzle-orm";
import { serial, text, timestamp, pgTable, boolean } from "drizzle-orm/pg-core";
export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  completed: boolean("completed").default(false).notNull(),


});

export type Todo = typeof todo.$inferInsert