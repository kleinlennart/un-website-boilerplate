import { Pool } from "pg";

const globalForDb = global as unknown as { pool: Pool | undefined };

// Validate required environment variables
const requiredEnvVars = [
  "AZURE_POSTGRES_HOST",
  "AZURE_POSTGRES_DB",
  "AZURE_POSTGRES_USER",
  "AZURE_POSTGRES_PASSWORD",
] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(
      `Missing required environment variable: ${envVar}. Please check your .env.local file.`,
    );
  }
}

export const pool =
  globalForDb.pool ||
  new Pool({
    host: process.env.AZURE_POSTGRES_HOST,
    port: parseInt(process.env.AZURE_POSTGRES_PORT || "5432"),
    database: process.env.AZURE_POSTGRES_DB,
    user: process.env.AZURE_POSTGRES_USER,
    password: process.env.AZURE_POSTGRES_PASSWORD,
    ssl: { rejectUnauthorized: false },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;

export async function query<T = unknown>(
  text: string,
  params?: unknown[],
): Promise<T[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}

export default pool;
