import "dotenv/config";
import type { Config } from "drizzle-kit";

const config: Config = {
    schema: "./db/schema.ts",
    dialect: "postgresql",
    out: "./drizzle/migrations",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    }
}; // Added closing brace
export default config;
