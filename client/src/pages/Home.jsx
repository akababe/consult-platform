import { useState, useMemo } from 'react'
import { cases } from '../cases/index.js'
import CaseCard from '../components/case/CaseCard.jsx'

const FILTERS = ['All', 'BCG', 'McKinsey', 'Bain']

const INDUSTRY_FILTERS = [
  'All Industries',
  'FMCG / Consumer Goods',
  'Retail Banking',
  'Energy & Resources',
  'Tech / SaaS',
  'Healthcare & Pharma',
  'Industrial / Manufacturing',
  'Retail (Omnichannel)',
  'M&A / Private Equity',
]

export default function Home() {
  const [activeFirm, setActiveFirm]         = useState('All')
  const [activeIndustry, setActiveIndustry] = useState('All Industries')

  const filtered = useMemo(() => {
    return cases.filter(c => {
      const firmOk = activeFirm === 'All' || c.firm === activeFirm
      const indOk  = activeIndustry === 'All Industries' || c.industry === activeIndustry
      return firmOk && indOk
    })
  }, [activeFirm, activeIndustry])

  return (
    <>
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="page-container">
          <div className="home-hero__eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Consulting Analytics Platform</span>
          </div>

          <h1 className="home-hero__title">
            How the world's best consultants<br />
            <em>actually solve</em> business problems
          </h1>

          <p className="home-hero__desc">
            Ten Grade A+ case studies across FMCG, banking, energy, tech, pharma,
            manufacturing, and more — with real frameworks, real calculations, and
            the political dynamics no textbook covers.
          </p>

          <div className="home-hero__meta">
            <span className="meta-pill">
              <span className="meta-pill__dot" />
              10 deep engagements
            </span>
            <span className="meta-pill">
              <span className="meta-pill__dot" style={{ background: 'var(--accent-2)' }} />
              BCG · McKinsey · Bain
            </span>
            <span className="meta-pill">
              <span className="meta-pill__dot" style={{ background: 'var(--gold)' }} />
              C-level decision-making
            </span>
            <span className="meta-pill">
              <span className="meta-pill__dot" style={{ background: 'var(--accent)' }} />
              Advanced difficulty
            </span>
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="page-container">
        <div className="filters-bar">
          <span className="filter-label">Firm</span>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-chip ${activeFirm === f ? 'active' : ''}`}
              onClick={() => setActiveFirm(f)}
            >
              {f}
            </button>
          ))}

          <span className="filter-label" style={{ marginLeft: '16px' }}>Industry</span>
          {INDUSTRY_FILTERS.map(ind => (
            <button
              key={ind}
              className={`filter-chip ${activeIndustry === ind ? 'active' : ''}`}
              onClick={() => setActiveIndustry(ind)}
            >
              {ind === 'All Industries' ? 'All' : ind}
            </button>
          ))}
        </div>

        {/* ── CASE GRID ── */}
        {filtered.length > 0 ? (
          <div className="cases-grid">
            {filtered.map(c => (
              <CaseCard key={c.id} caseData={c} />
            ))}
          </div>
        ) : (
          <div style={{ padding: '64px 0', textAlign: 'center', color: 'var(--ink-4)' }}>
            <p style={{ fontSize: '15px' }}>No cases match those filters.</p>
            <button
              style={{ marginTop: '12px', color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}
              onClick={() => { setActiveFirm('All'); setActiveIndustry('All Industries') }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  )
}
