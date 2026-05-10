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