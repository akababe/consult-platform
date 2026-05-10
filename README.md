# The Consulting Playbook

> How BCG, McKinsey and Bain solve real business problems — 10 Grade A+ case studies with frameworks, calculations, and practitioner insights.

## What This Is

A structured learning platform for consulting analytics thinking. Not a summary of frameworks — full engagements with real calculations, stakeholder dynamics, and the hard decisions no textbook covers.

**10 cases across:**
- FMCG / Consumer Goods — BCG Matrix + Profit Tree
- Retail Banking — CLV + Cost-to-Serve
- Energy & Resources — Scenario DCF + Portfolio Optimisation
- Tech / SaaS — CAC/LTV + Funnel Analytics
- Healthcare & Pharma — Patient Journey + Payer Economics
- Industrial / Manufacturing — Value Chain + Make-vs-Buy
- Retail (Omnichannel) — NPS + Category Management
- M&A / Private Equity — Due Diligence + Synergy Modelling
- Consumer / Expansion — Market Sizing + Porter's Five Forces
- Cross-Industry — McKinsey 7S + Change Readiness

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Plain CSS (no framework) |
| Backend | Node.js + Express |
| Build | Vite → Express serves `/dist` |

---

## Local Development

### Prerequisites
- Node.js 18+ (v22 recommended)
- npm 9+

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/consulting-platform.git
cd consulting-platform

# 2. Install all dependencies
npm run install:all

# 3. Start dev servers (client + server run concurrently)
npm run dev
```

- **Client** → http://localhost:5173 (Vite dev server with HMR)
- **Server** → http://localhost:3001 (Express API)
- **API**    → http://localhost:3001/api/cases

---

## Production Build

```bash
# Build the React client (outputs to server/dist/)
npm run build

# Start the production server (serves built client + API)
npm start
```

The server runs on `PORT` (default 3001) and serves everything — no separate web server needed.

---

## Adding a New Case

1. Create `client/src/cases/CaseXX_YourTitle.jsx` — use the same classNames:
   - `.case-study` `.case-header` `.case-number` `.case-meta`
   - `.content` `.highlight-box` `.calculation` `.data-table`

2. Register it in `client/src/cases/index.js`:
```js
import CaseXX from './CaseXX_YourTitle.jsx'

// Add to the cases array:
{
  id: 'case-xx',
  slug: 'your-title',
  number: 'XX',
  title: 'Your Case Title',
  subtitle: 'One line that makes someone want to read it',
  industry: 'Industry Name',
  firm: 'BCG',          // BCG | McKinsey | Bain
  framework: 'Primary Framework',
  decisionType: 'Decision Type',
  difficulty: 'Advanced',
  region: 'Region',
  readTime: 'XX min',
  accentColor: '#C4472A',
  component: CaseXX,
}
```

3. Add metadata to `server/src/data/cases-meta.json` (same fields, for the API).

That's it. The case appears in the grid automatically.

---

## Deployment

### Railway (Recommended — easiest)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```
Set environment variable: `PORT=3001`

### Render
1. Connect your GitHub repo
2. Build command: `npm run install:all && npm run build`
3. Start command: `npm start`
4. Root directory: `.`

### VPS (Ubuntu + PM2)
```bash
git clone YOUR_REPO /var/www/consulting-platform
cd /var/www/consulting-platform
npm run install:all
npm run build

# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start server/src/index.js --name consulting-platform
pm2 save
pm2 startup
```

---

## Project Structure

```
consulting-platform/
├── client/
│   ├── src/
│   │   ├── cases/           ← All case JSX files + registry
│   │   ├── components/
│   │   │   ├── layout/      ← Header, Footer, ReadingProgress
│   │   │   └── case/        ← CaseCard
│   │   ├── pages/           ← Home, CasePage, NotFound
│   │   └── styles/          ← global.css (all styles)
│   └── vite.config.js
├── server/
│   └── src/
│       ├── routes/          ← cases.js, health.js
│       ├── data/            ← cases-meta.json
│       └── index.js         ← Express app
├── .github/workflows/       ← CI/CD
└── README.md
```

---

## API Reference

### `GET /api/cases`
Returns all case metadata. Supports query filters:
- `?firm=BCG` — filter by firm (BCG, McKinsey, Bain)
- `?industry=Retail+Banking` — filter by industry
- `?status=published` — filter by status (published, coming-soon)

### `GET /api/cases/:slug`
Returns metadata for a single case.

### `GET /health`
Returns server health status.

---

## License

For learning and educational purposes. All company names, figures, and scenarios are illustrative.
