import { useMemo, useState } from 'react'
import PaneHeader from './components/PaneHeader.jsx'
import SliderRow from './components/SliderRow.jsx'
import MetricCard from './components/MetricCard.jsx'
import InsightBox from './components/InsightBox.jsx'
import { calculateA1, calculateA2, calculateA3, calculateA4Days, calculateA4WC, calculateA5, formatPercent, formatRupiah, formatSignedRupiah } from './utils/calculations.js'

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

function A3Pane() {
  const [form, setForm] = useState({
    revenuePerUnit: 100,
    cogsPerUnit: 40,
    variableOpex: 20,
    allocatedFixed: 15,
  })

  const results = useMemo(() => calculateA3(form), [form])
  const totalCost = form.cogsPerUnit + form.variableOpex + form.allocatedFixed
  const total = Math.max(1, form.revenuePerUnit)

  return (
    <div className="finlit-pane active">
      <PaneHeader
        badge="A3"
        title="Margin types"
        description="Every cost layer has its own purpose. Gross margin buys overhead. Contribution margin funds growth."
      />

      <div className="finlit-card">
        <span className="finlit-section-label">Cost structure per unit</span>
        <SliderRow label="Revenue per unit (Rp K)" min={10} max={500} step={10} value={form.revenuePerUnit} onChange={value => setForm(current => ({ ...current, revenuePerUnit: value }))} formatValue={value => formatRupiah(value, 'K')} />
        <SliderRow label="COGS per unit (Rp K)" min={0} max={400} step={10} value={form.cogsPerUnit} onChange={value => setForm(current => ({ ...current, cogsPerUnit: value }))} formatValue={value => formatRupiah(value, 'K')} />
        <SliderRow label="Variable opex per unit (Rp K)" min={0} max={200} step={5} value={form.variableOpex} onChange={value => setForm(current => ({ ...current, variableOpex: value }))} formatValue={value => formatRupiah(value, 'K')} />
        <SliderRow label="Allocated fixed per unit (Rp K)" min={0} max={100} step={5} value={form.allocatedFixed} onChange={value => setForm(current => ({ ...current, allocatedFixed: value }))} formatValue={value => formatRupiah(value, 'K')} />

        <div className="finlit-seg-legend">
          {results.segments.map(seg => (
            <div key={seg.label}>
              <span className="finlit-seg-legend-dot" style={{ background: seg.color }} />
              {seg.label}
            </div>
          ))}
        </div>

        <div className="finlit-seg-bar">
          {results.segments.map(seg => {
            const width = (seg.value / total) * 100
            return (
              <div
                key={seg.label}
                className="finlit-seg"
                style={{
                  width: `${Math.max(0, width)}%`,
                  background: seg.color,
                }}
              >
                {width > 8 ? `${Math.round(width)}%` : ''}
              </div>
            )
          })}
        </div>

        <div className="finlit-metrics">
          <MetricCard label="Gross margin %" value={formatPercent(results.grossMarginPct)} />
          <MetricCard label="Contribution margin %" value={formatPercent(results.contributionPct)} />
          <MetricCard label="EBITDA %" value={formatPercent(results.ebitdaPct)} tone={results.ebitdaPct >= 0 ? 'positive' : 'negative'} />
        </div>

        <InsightBox>{results.insight}</InsightBox>
      </div>
    </div>
  )
}

function A4Pane() {
  const [dayForm, setDayForm] = useState({
    dso: 30,
    dio: 45,
    dpo: 20,
  })

  const [wcForm, setWcForm] = useState({
    accountsReceivable: 150,
    inventory: 200,
    accountsPayable: 120,
  })

  const dayResults = useMemo(() => calculateA4Days(dayForm), [dayForm])
  const wcResults = useMemo(() => calculateA4WC(wcForm), [wcForm])

  const daysTotal = Math.max(1, dayForm.dso + dayForm.dio + Math.abs(dayForm.dpo))
  const dsoPercent = (dayForm.dso / daysTotal) * 100
  const dioPercent = (dayForm.dio / daysTotal) * 100
  const dpoPercent = (Math.abs(dayForm.dpo) / daysTotal) * 100

  return (
    <div className="finlit-pane active">
      <PaneHeader
        badge="A4"
        title="Working capital"
        description="How much cash is trapped between paying suppliers and collecting from customers."
      />

      <div className="finlit-card">
        <span className="finlit-section-label">Days metrics</span>
        <SliderRow label="Days Sales Outstanding (DSO)" min={0} max={120} step={5} value={dayForm.dso} onChange={value => setDayForm(current => ({ ...current, dso: value }))} formatValue={value => `${Math.round(value)}d`} />
        <SliderRow label="Days Inventory Outstanding (DIO)" min={0} max={120} step={5} value={dayForm.dio} onChange={value => setDayForm(current => ({ ...current, dio: value }))} formatValue={value => `${Math.round(value)}d`} />
        <SliderRow label="Days Payable Outstanding (DPO)" min={0} max={120} step={5} value={dayForm.dpo} onChange={value => setDayForm(current => ({ ...current, dpo: value }))} formatValue={value => `${Math.round(value)}d`} />

        <div className="finlit-ccc-timeline">
          <div
            className="finlit-ccc-seg"
            style={{
              flex: Math.max(1, dayForm.dpo),
              background: '#9B7E3A',
            }}
          >
            Supplier buffer ({Math.round(dayForm.dpo)}d)
          </div>
          <div
            className="finlit-ccc-seg"
            style={{
              flex: Math.max(1, dayForm.dio),
              background: '#D97B5D',
            }}
          >
            Inventory hold ({Math.round(dayForm.dio)}d)
          </div>
          <div
            className="finlit-ccc-seg"
            style={{
              flex: Math.max(1, dayForm.dso),
              background: '#B02020',
            }}
          >
            Receivables wait ({Math.round(dayForm.dso)}d)
          </div>
        </div>

        <div className="finlit-metrics">
          <MetricCard label="Cash Conversion Cycle (days)" value={`${Math.round(dayResults.ccc)}d`} tone={dayResults.ccc < 0 ? 'positive' : dayResults.ccc > 60 ? 'negative' : 'neutral'} />
          <MetricCard label="Cash trap rating" value={dayResults.cashTrapRating} />
        </div>

        <InsightBox>{dayResults.insight}</InsightBox>
      </div>

      <div className="finlit-card">
        <span className="finlit-section-label">Rupiah amounts</span>
        <SliderRow label="Accounts receivable (Rp M)" min={10} max={500} step={25} value={wcForm.accountsReceivable} onChange={value => setWcForm(current => ({ ...current, accountsReceivable: value }))} formatValue={value => formatRupiah(value)} />
        <SliderRow label="Inventory (Rp M)" min={10} max={500} step={25} value={wcForm.inventory} onChange={value => setWcForm(current => ({ ...current, inventory: value }))} formatValue={value => formatRupiah(value)} />
        <SliderRow label="Accounts payable (Rp M)" min={10} max={500} step={25} value={wcForm.accountsPayable} onChange={value => setWcForm(current => ({ ...current, accountsPayable: value }))} formatValue={value => formatRupiah(value)} />

        <div className="finlit-wc-formula">
          Working Capital = {formatRupiah(wcForm.accountsReceivable)} + {formatRupiah(wcForm.inventory)} − {formatRupiah(wcForm.accountsPayable)} = <strong>{formatRupiah(wcResults.workingCapital)}</strong>
        </div>

        <InsightBox>The sum of AR and inventory minus what you owe suppliers. This capital must come from equity or debt.</InsightBox>
      </div>
    </div>
  )
}

function A5Pane() {
  const [form, setForm] = useState({
    cash: 100,
    receivables: 150,
    inventory: 200,
    propertyEquipment: 300,
    payables: 120,
    shortTermDebt: 80,
    longTermDebt: 200,
  })

  const results = useMemo(() => calculateA5(form), [form])

  const assets = [
    { label: 'Cash', value: form.cash, color: '#3AA655' },
    { label: 'Receivables', value: form.receivables, color: '#7AB55C' },
    { label: 'Inventory', value: form.inventory, color: '#A8CF45' },
    { label: 'PP&E', value: form.propertyEquipment, color: '#C4A35A' },
  ]

  const liabilities = [
    { label: 'Payables', value: form.payables, color: '#D97B5D' },
    { label: 'ST debt', value: form.shortTermDebt, color: '#C4553D' },
    { label: 'LT debt', value: form.longTermDebt, color: '#B02020' },
  ]

  const assetTotal = results.totalAssets || 1
  const liabilityTotal = results.totalLiabilities || 1
  const equityValue = Math.max(0, results.equity)
  const equityWithLiab = equityValue + liabilityTotal || 1

  return (
    <div className="finlit-pane active">
      <PaneHeader
        badge="A5"
        title="The balance sheet"
        description="What you own (assets) minus what you owe (liabilities) equals what owners have (equity)."
      />

      <div className="finlit-card">
        <span className="finlit-section-label">Assets side</span>
        <div className="finlit-bs-cols">
          <div>
            <div className="finlit-bs-col-label">Assets</div>
            <SliderRow label="Cash (Rp M)" min={10} max={500} step={25} value={form.cash} onChange={value => setForm(current => ({ ...current, cash: value }))} formatValue={value => formatRupiah(value)} />
            <SliderRow label="Receivables (Rp M)" min={10} max={500} step={25} value={form.receivables} onChange={value => setForm(current => ({ ...current, receivables: value }))} formatValue={value => formatRupiah(value)} />
            <SliderRow label="Inventory (Rp M)" min={10} max={500} step={25} value={form.inventory} onChange={value => setForm(current => ({ ...current, inventory: value }))} formatValue={value => formatRupiah(value)} />
            <SliderRow label="PP&E (Rp M)" min={10} max={500} step={25} value={form.propertyEquipment} onChange={value => setForm(current => ({ ...current, propertyEquipment: value }))} formatValue={value => formatRupiah(value)} />
          </div>

          <div>
            <div className="finlit-bs-col-label">Liabilities & Equity</div>
            <SliderRow label="Payables (Rp M)" min={10} max={500} step={25} value={form.payables} onChange={value => setForm(current => ({ ...current, payables: value }))} formatValue={value => formatRupiah(value)} />
            <SliderRow label="Short-term debt (Rp M)" min={0} max={500} step={25} value={form.shortTermDebt} onChange={value => setForm(current => ({ ...current, shortTermDebt: value }))} formatValue={value => formatRupiah(value)} />
            <SliderRow label="Long-term debt (Rp M)" min={0} max={500} step={25} value={form.longTermDebt} onChange={value => setForm(current => ({ ...current, longTermDebt: value }))} formatValue={value => formatRupiah(value)} />
          </div>
        </div>

        <div className="finlit-bs-bars">
          <div className="finlit-bs-bar">
            {assets.map(asset => {
              const height = (asset.value / assetTotal) * 100
              return (
                <div
                  key={asset.label}
                  className="finlit-bs-segment"
                  style={{
                    flex: Math.max(1, asset.value),
                    background: asset.color,
                  }}
                >
                  {height > 10 ? `${asset.label} ${Math.round(height)}%` : ''}
                </div>
              )
            })}
          </div>

          <div className="finlit-bs-bar">
            {liabilities.map(liability => {
              const height = (liability.value / equityWithLiab) * 100
              return (
                <div
                  key={liability.label}
                  className="finlit-bs-segment"
                  style={{
                    flex: Math.max(1, liability.value),
                    background: liability.color,
                  }}
                >
                  {height > 10 ? `${liability.label} ${Math.round(height)}%` : ''}
                </div>
              )
            })}
            {results.equity !== 0 && (
              <div
                className={`finlit-bs-segment ${results.equity < 0 ? 'finlit-bs-equity-neg' : ''}`}
                style={{
                  flex: Math.max(1, Math.abs(results.equity)),
                  background: results.equity >= 0 ? '#3AA655' : '#B02020',
                }}
              >
                {Math.abs(results.equity) > 10 ? `Equity ${Math.round((Math.abs(results.equity) / equityWithLiab) * 100)}%` : ''}
              </div>
            )}
          </div>
        </div>

        <div className="finlit-metrics">
          <MetricCard label="Total assets" value={formatRupiah(Math.round(results.totalAssets))} />
          <MetricCard label="Total liabilities" value={formatRupiah(Math.round(results.totalLiabilities))} />
          <MetricCard label="Equity" value={formatSignedRupiah(Math.round(results.equity))} tone={results.equity >= 0 ? 'positive' : 'negative'} />
          <MetricCard label="Debt/Equity ratio" value={results.debtToEquity.toFixed(2)} tone={results.debtToEquity > 2 ? 'negative' : 'neutral'} />
          <MetricCard label="Current ratio" value={results.currentRatio.toFixed(2)} tone={results.currentRatio >= 1 ? 'positive' : 'negative'} />
        </div>

        <InsightBox>{results.insight}</InsightBox>
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
        <button className={`finlit-nav-btn module-a ${activePane === 'a3' ? 'active' : ''}`} onClick={() => setActivePane('a3')} type="button">
          A3 Margin types
        </button>
        <button className={`finlit-nav-btn module-a ${activePane === 'a4' ? 'active' : ''}`} onClick={() => setActivePane('a4')} type="button">
          A4 Working capital
        </button>
        <button className={`finlit-nav-btn module-a ${activePane === 'a5' ? 'active' : ''}`} onClick={() => setActivePane('a5')} type="button">
          A5 The balance sheet
        </button>
      </div>

      <div className="finlit-content">
        {activePane === 'a1' ? (
          <A1Pane />
        ) : activePane === 'a2' ? (
          <A2Pane />
        ) : activePane === 'a3' ? (
          <A3Pane />
        ) : activePane === 'a4' ? (
          <A4Pane />
        ) : (
          <A5Pane />
        )}
      </div>
    </div>
  )
}