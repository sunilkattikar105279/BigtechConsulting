# BigtechConsulting — Production Website

Enterprise AI Transformation Consulting. Powered by **SIXXAB AI** (startupsinabox.com).

## Stack
- **Pure static HTML/CSS** — no framework, no build step, instant deploys
- **Vercel** — hosting, CDN, custom domain, SSL
- **Google Fonts** — Inter + Syne

## Structure
```
public/
├── index.html              ← Homepage
├── 404.html                ← Custom error page
├── robots.txt
├── sitemap.xml
├── assets/
│   └── css/
│       └── shared-styles.css   ← Global stylesheet
├── services/
│   ├── ai-change-management.html
│   ├── responsible-ai.html
│   ├── ai-data-strategy.html
│   ├── ai-roi.html
│   ├── ai-workforce.html
│   ├── ai-vendor-selection.html
│   └── ai-pmo.html
├── verticals/
│   ├── financial-services.html
│   ├── healthcare.html
│   └── manufacturing.html
├── blog/
│   ├── index.html
│   ├── why-ai-projects-fail.html
│   ├── ai-governance-enterprise.html
│   ├── responsible-ai-enterprise.html
│   ├── agentic-ai-explained.html
│   ├── ai-architecture-enterprise.html
│   ├── ai-maturity-model.html
│   ├── ai-cost-optimization.html
│   ├── ai-security-enterprise.html
│   ├── ai-financial-services.html
│   ├── sixxab-phase-validate.html
│   ├── sixxab-phase-launch.html
│   ├── state-of-ai-transformation.html
│   └── ai-vendor-guide.html
└── tools/
    └── ai-maturity-assessment.html
```

## Deploy to Vercel

### Option A — Vercel CLI (recommended)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import from GitHub
3. Set Output Directory to `public`
4. Deploy

### Option C — Vercel Dashboard drag-and-drop
1. Go to vercel.com/new
2. Drag the entire `public/` folder
3. Done — live in 30 seconds

## Custom Domain Setup
1. In Vercel dashboard → Settings → Domains
2. Add `bigtechconsulting.com` and `www.bigtechconsulting.com`
3. Update DNS at your registrar:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

## Environment Variables
This is a static site — no environment variables required.
For contact form functionality, add Formspree or similar:
- Sign up at formspree.io
- Add your form endpoint to the contact section in index.html

## Performance
- Lighthouse score target: 95+ on all metrics
- All assets cached at CDN edge (Cache-Control headers in vercel.json)
- Google Fonts loaded with `display=swap` for zero layout shift
