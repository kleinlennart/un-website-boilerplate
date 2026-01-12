# UN Website Boilerplate (with Auth)

A Next.js template with UN branding and magic link authentication.

Based on: https://github.com/kleinlennart/un-website-boilerplate

## Features

- UN branding (logo, colors, Roboto font)
- Magic link authentication (@un.org emails only)
- PostgreSQL session/user storage
- Protected routes via middleware
- Entity selection on first login
- Document search autocomplete

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.template .env.local
```

Edit `.env.local`:
- `DATABASE_URL` - PostgreSQL connection string
- `AUTH_SECRET` - Generate with `openssl rand -hex 32`
- `SMTP_*` - Mail server for magic links
- `BASE_URL` - Your app URL (for magic link emails)

### 3. Create database tables

```bash
psql $DATABASE_URL -f sql/auth_tables.sql
```

### 4. Run

```bash
npm run dev
```

## Auth Flow

1. User enters @un.org email at `/login`
2. Magic link sent via email
3. User clicks link → `/verify?token=...`
4. First login: select entity; returning users: direct sign-in
5. Session cookie set (7 days)

## Customization

- **Site title/subtitle**: Edit `src/components/Header.tsx`
- **Email domain restriction**: Edit `isValidUnEmail()` in `src/lib/auth.ts`
- **Entity list**: Populate `entities` table in DB
- **Documents search**: Populate `documents` table in DB
- **Protected routes**: Edit `PUBLIC_PATHS` in `src/middleware.ts`

## File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/          # Auth API routes
│   │   ├── documents/     # Document search & bodies
│   │   └── entities/      # Entity list
│   ├── login/             # Login page
│   ├── verify/            # Token verification
│   └── page.tsx           # Protected home page
├── components/
│   ├── DocumentSearch.tsx # Autocomplete search
│   ├── Header.tsx         # Site header with user menu
│   └── UserMenu.tsx       # Logout button
├── lib/
│   ├── auth.ts            # Auth logic (tokens, sessions)
│   ├── db.ts              # PostgreSQL pool
│   └── mail.ts            # Magic link emails
└── middleware.ts          # Route protection
sql/
└── auth_tables.sql        # Database schema (auth + entities + documents)
```

## Maintenance

```bash
npm audit          # Security vulnerabilities
npm outdated       # Outdated packages
npm run lint       # ESLint errors
npx tsc --noEmit   # TypeScript errors
```
