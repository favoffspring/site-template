# Site Template

Next.js 16 (App Router) + TypeScript + Tailwind + optional Neon Postgres via Drizzle. Deployed on Vercel.

Used as the source template for new sites scaffolded by the `create-website` Claude skill.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database (optional)

This template ships with [Drizzle ORM](https://orm.drizzle.team) wired to [Neon Postgres](https://neon.tech), but the database is **only active if `DATABASE_URL` is set**. Without it, the app builds and runs fine — the DB layer is just dormant.

When a site is created with a database (via the `create-website` skill), Neon is provisioned via the Vercel Marketplace integration. The integration creates three branches automatically:

- `main` → Production deploys
- per-PR branches → Preview deploys
- `development` → your local machine

### Local dev workflow

```bash
vercel env pull .env.local   # one-time: pulls DATABASE_URL for the dev branch
npm run dev                  # hits the Neon dev branch
npm run db:push              # apply schema changes from src/db/schema.ts
npm run db:studio            # GUI to inspect/edit rows
```

`npm run dev` connects to a real (isolated) Neon Postgres branch — separate from production and from previews. No Docker, no local Postgres needed.

### Schema

Defined in `src/db/schema.ts`. The starter `items` table is just a placeholder — edit/replace it, then run `npm run db:push` to sync.

### Querying

```ts
import { db } from "@/db";
import { items } from "@/db/schema";

const rows = await db.select().from(items);
```

Use inside Server Components, Route Handlers, or Server Actions — never client components (would expose `DATABASE_URL`).

## Deploy

Pushed to Vercel automatically once the GitHub repo is connected. The `create-website` skill handles initial provisioning.
