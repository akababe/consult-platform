import { useMemo, useState } from 'react'
import PaneHeader from './components/PaneHeader.jsx'
import SliderRow from './components/SliderRow.jsx'
import MetricCard from './components/MetricCard.jsx'
import InsightBox from './components/InsightBox.jsx'
import { calculateA1, calculateA2, formatPercent, formatRupiah, formatSignedRupiah } from './utils/calculations.js'

function A1Pane() {
  const [form, setForm] = useState({
    revenue: 50,
    costs: 30,
    collectedNow: 0,
    costsPaidNow: 100,
  })

  const results = useMemo(() => calculateA1(form), [form])

  return (
    <div className="finlit-pane active">
      <PaneHeader
        badge="A1"
        title="Revenue vs. profit vs. cash"
        description="Three numbers that are never the same. Confusing them is how smart people make bad decisions."
      />

      <div className="finlit-card">
        <span className="finlit-section-label">Catering business scenario</span>
        <SliderRow label="Invoice amount (Rp M)" min={10} max={200} step={5} value={form.revenue} onChange={value => setForm(current => ({ ...current, revenue: value }))} formatValue={value => formatRupiah(value)} />
        <SliderRow label="Costs incurred (Rp M)" min={5} max={150} step={5} value={form.costs} onChange={value => setForm(current => ({ ...current, costs: value }))} formatValue={value => formatRupiah(value)} />
        <SliderRow label="% invoice collected now" min={0} max={100} step={5} value={form.collectedNow} onChange={value => setForm(current => ({ ...current, collectedNow: value }))} formatValue={value => formatPercent(value, 0)} />
        <SliderRow label="% costs paid now" min={0} max={100} step={5} value={form.costsPaidNow} onChange={value => setForm(current => ({ ...current, costsPaidNow: value }))} formatValue={value => formatPercent(value, 0)} />

        <div className="finlit-metrics">
          <MetricCard label="Revenue" value={formatRupiah(form.revenue)} />
          <MetricCard label="Profit" value={formatSignedRupiah(results.profit)} tone={results.profit >= 0 ? 'positive' : 'negative'} />
          <MetricCard label="Net cash movement" value={formatSignedRupiah(results.cashMovement)} tone={results.cashMovement >= 0 ? 'positive' : 'negative'} />
        </div>

        <InsightBox>{results.insight}</InsightBox>
      </div>

      <div className="finlit-three">
        <div className="finlit-note">
          <h4>Timing gaps</h4>
          <p>Deliver now, collect later. Revenue is recognized before cash arrives.</p>
        </div>
        <div className="finlit-note">
          <h4>Non-cash costs</h4>
          <p>Depreciation hits profit but the cash left when you bought the asset.</p>
        </div>
        <div className="finlit-note">
          <h4>Financing</h4>
          <p>A loan raises cash but does not touch profit. Repaying destroys cash, not profit.</p>
        </div>
      </div>
    </div>
  )
}

function A2Pane() {
  const [form, setForm] = useState({
    revenue: 500,
    cogsPercent: 40,
    operatingExpenses: 120,
    depreciation: 20,
    taxRate: 22,
  })

  const results = useMemo(() => calculateA2(form), [form])
  const positiveRows = Math.max(1, form.revenue)

  return (
    <div className="finlit-pane active">
      <PaneHeader
        badge="A2"
        title="The income statement"
        description="The waterfall from revenue to net profit. Every line tells where value is created or destroyed."
      />

      <div className="finlit-card">
        <span className="finlit-section-label">Interactive P&L waterfall</span>
        <SliderRow label="Revenue (Rp M)" min={100} max={1000} step={25} value={form.revenue} onChange={value => setForm(current => ({ ...current, revenue: value }))} formatValue={value => formatRupiah(value)} />
        <SliderRow label="COGS % of revenue" min={10} max={80} step={1} value={form.cogsPercent} onChange={value => setForm(current => ({ ...current, cogsPercent: value }))} formatValue={value => formatPercent(value, 0)} />
        <SliderRow label="Operating expenses (Rp M)" min={10} max={300} step={10} value={form.operatingExpenses} onChange={value => setForm(current => ({ ...current, operatingExpenses: value }))} formatValue={value => formatRupiah(value)} />
        <SliderRow label="Depreciation (Rp M)" min={0} max={100} step={5} value={form.depreciation} onChange={value => setForm(current => ({ ...current, depreciation: value }))} formatValue={value => formatRupiah(value)} />
        <SliderRow label="Tax rate %" min={0} max={40} step={1} value={form.taxRate} onChange={value => setForm(current => ({ ...current, taxRate: value }))} formatValue={value => formatPercent(value, 0)} />

        <div className="finlit-waterfall" aria-label="Income statement waterfall">
          {results.rows.map(row => {
            const width = Math.max(10, Math.min(100, (Math.abs(row.value) / positiveRows) * 100))
            const tone = row.value >= 0 ? row.color : '#B02020'

            return (
              <div className="finlit-waterfall-row" key={row.label}>
                <div className={`finlit-waterfall-label ${row.highlight ? 'bold' : ''}`}>{row.label}</div>
                <div className="finlit-waterfall-wrapper">
                  <div className="finlit-waterfall-bar" style={{ width: `${width}%`, background: tone, opacity: row.highlight ? 1 : 0.85 }}>
                    {width > 16 ? `${Math.round((row.value / positiveRows) * 100)}%` : ''}
                  </div>
                </div>
                <div className={`finlit-waterfall-amount ${row.value >= 0 ? 'positive' : 'negative'}`}>
                  {formatSignedRupiah(Math.round(row.value))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="finlit-metrics">
          <MetricCard label="Gross margin" value={formatPercent(results.grossMargin)} />
          <MetricCard label="EBITDA margin" value={formatPercent(results.ebitdaMargin)} tone={results.ebitda >= 0 ? 'positive' : 'negative'} />
          <MetricCard label="Net margin" value={formatPercent(results.netMargin)} tone={results.netProfit >= 0 ? 'positive' : 'negative'} />
        </div>

        <InsightBox>At this setting, revenue turns into gross profit first, then EBITDA, then net profit. The bar chart above mirrors that sequence.</InsightBox>
      </div>
    </div>
  )
}

export default function ModuleA() {
  const [activePane, setActivePane] = useState('a1')

  return (
    <div className="finlit-container">
      <div className="finlit-nav">
        <button className={`finlit-nav-btn module-a ${activePane === 'a1' ? 'active' : ''}`} onClick={() => setActivePane('a1')} type="button">
          A1 Revenue vs profit vs cash
        </button>
        <button className={`finlit-nav-btn module-a ${activePane === 'a2' ? 'active' : ''}`} onClick={() => setActivePane('a2')} type="button">
          A2 Income statement
        </button>
      </div>

      <div className="finlit-content">
        {activePane === 'a1' ? <A1Pane /> : <A2Pane />}
        <div className="finlit-POC-note">
          Module A is being rolled out in POC order. A3-A5 will follow after A1/A2 validation.
        </div>
      </div>
    </div>
  )
}