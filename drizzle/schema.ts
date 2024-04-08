import { pgTable, text, foreignKey, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: text("id").primaryKey().notNull(),
});

export const sessions = pgTable("sessions", {
	id: text("id").primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => users.id),
	expiresAt: timestamp("expires_at", { withTimezone: true, mode: 'string' }).notNull(),
});