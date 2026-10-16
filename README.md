# Legard-McDaniel Electric — website

Static Astro site for Legard-McDaniel Electric, Inc. (Mesa, AZ). Deploys free to Cloudflare Workers.

## Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Requires Node 22.22+ (see `.nvmrc`).

## Edit business facts

All facts (phone, address, hours, license, founding year, service area) live in `src/data/business.ts`.
Items marked `VERIFY` came from third-party directories. Confirm them with the owner before launch.

## Deploy (Cloudflare Workers, free tier)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Connect to Git** → pick this repo.
2. Build settings:

   | Field | Value |
   |---|---|
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Environment variable | `NODE_VERSION` = `22.22.0` |

3. Save and Deploy. Every push to the production branch redeploys.
4. Custom domain: project → Settings → Domains & Routes → add `legardmcdaniel.com`.

## Design

Design context and principles are in `.impeccable.md`. Illustrations are hand-authored inline SVG in
`src/components/`. Swap in real job-site photos (in `public/images/`) when the owner provides them.
