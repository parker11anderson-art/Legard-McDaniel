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

The repo's default branch is `claude/dreamy-galileo-ar0emy`; Cloudflare treats it as production.

1. Cloudflare dashboard → **Compute (Workers)** → **Workers & Pages** → **Create** → **Import a repository**.
2. Authorize the Cloudflare GitHub app for `parker11anderson-art/Legard-McDaniel` only, then select the repo.
3. Settings:

   | Field | Value |
   |---|---|
   | Project name | `legard-mcdaniel` (must match `wrangler.jsonc`) |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | Environment variable | `NODE_VERSION` = `22.22.0` |

4. **Create and deploy.** The site goes live at `https://legard-mcdaniel.<account>.workers.dev`. Every push redeploys.
5. Custom domain: project → Settings → Domains & Routes → add `legardmcdaniel.com`.

From a machine with Cloudflare access you can also run `npx wrangler login` then `npm run deploy`.

## Design

Design context and principles are in `.impeccable.md`. Illustrations are hand-authored inline SVG in
`src/components/`. Swap in real job-site photos (in `public/images/`) when the owner provides them.
