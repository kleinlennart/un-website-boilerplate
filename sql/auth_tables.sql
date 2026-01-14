-- Database schema for UN Website template with auth
-- Replace 'myapp' with your app's schema name (must match DB_SCHEMA env var)
-- Run: psql $DATABASE_URL -f sql/auth_tables.sql

-- Create schema (change 'myapp' to your app name)
CREATE SCHEMA IF NOT EXISTS myapp;

CREATE TABLE IF NOT EXISTS myapp.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  entity TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS myapp.magic_tokens (
  token TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_magic_tokens_expires ON myapp.magic_tokens (expires_at);
