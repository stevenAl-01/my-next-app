# Handoff: GitHub + Vercel (CoE Cyber ID)

## Links
- GitHub repo: `https://github.com/stevenAl-01/my-next-app`
- Production (Vercel): `https://coecyberid.vercel.app`

## Prerequisites
- Node.js 20+ (recommended 22/24)
- npm 10+

## Clone & Run (Local)
```bash
git clone https://github.com/stevenAl-01/my-next-app.git
cd my-next-app
npm install
npm run dev
```

## Quality Checks
```bash
npm run lint
```

## Build Notes (Static Export)
Project ini menggunakan Next.js App Router + static export. Build command:
```bash
npm run build
```

Jika environment lokal mengalami issue Turbopack, gunakan Vercel build (lebih stabil) lewat CLI terbaru:
```bash
npx vercel@latest pull --yes --environment=production
npx vercel@latest build --prod
```

## Deploy Ulang ke Vercel (CLI)
1. Login:
```bash
npx vercel@latest login
```

2. Link project (sekali saja):
```bash
npx vercel@latest link
```

3. Deploy production:
```bash
npx vercel@latest deploy --prod
```

## Deploy Dengan Prebuilt Output (Jika Cloud Build Bermasalah)
1. Build prebuilt untuk production:
```bash
npx vercel@latest pull --yes --environment=production
npx vercel@latest build --prod
```

2. Upload prebuilt ke production:
```bash
npx vercel@latest deploy --prebuilt --prod
```

## Domain / URL
Alias Vercel yang dipakai:
- `coecyberid.vercel.app`

Set alias ke deployment production terbaru:
```bash
npx vercel@latest alias set <deployment-url> coecyberid.vercel.app
```

## Make Public (Tanpa Login)
Jika URL `vercel.app` meminta login (401), matikan SSO protection:
```bash
npx vercel@latest project protection disable my-next-app --sso
```
