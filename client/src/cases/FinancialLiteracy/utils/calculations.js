export function formatRupiah(value, unit = 'M') {
  return `${Number(value).toLocaleString('en-US')}${unit}`
}

export function formatSignedRupiah(value, unit = 'M') {
  const sign = value >= 0 ? '+' : '−'
  return `${sign}${Math.abs(Number(value)).toLocaleString('en-US')}${unit}`
}

export function formatPercent(value, digits = 1) {
  return `${Number(value).toFixed(digits)}%`
}

export function calculateA1({ revenue, costs, collectedNow, costsPaidNow }) {
  const profit = revenue - costs
  const cashMovement = Math.round(revenue * (collectedNow / 100) - costs * (costsPaidNow / 100))

  let insight = 'Adjust the sliders and watch revenue, profit, and cash move differently on the same transaction.'

  if (cashMovement < 0 && profit > 0) {
    insight = `Profitable but cash-negative. Earned Rp ${profit}M on paper — Rp ${Math.abs(cashMovement)}M left the bank.`
  } else if (profit < 0 && cashMovement >= 0) {
    insight = 'Cash-positive but loss-making. The accounting divergence works the other way.'
  }

  return {
    profit,
    cashMovement,
    insight,
  }
}

export function calculateA2({ revenue, cogsPercent, operatingExpenses, depreciation, taxRate }) {
  const cogs = revenue * (cogsPercent / 100)
  const grossProfit = revenue - cogs
  const ebitda = grossProfit - operatingExpenses
  const ebit = ebitda - depreciation
  const tax = Math.max(0, ebit * (taxRate / 100))
  const netProfit = ebit - tax

  const rows = [
    { label: 'Revenue', value: revenue, color: 'var(--accent-2)' },
    { label: '− COGS', value: -cogs, color: '#B02020' },
    { label: '= Gross profit', value: grossProfit, color: 'var(--accent-3)', highlight: true },
    { label: '− Operating expenses', value: -operatingExpenses, color: '#B02020' },
    { label: '= EBITDA', value: ebitda, color: 'var(--accent)', highlight: true },
    { label: '− Depreciation', value: -depreciation, color: '#9B7E3A' },
    { label: '= EBIT', value: ebit, color: 'var(--ink-2)', highlight: true },
    { label: `− Tax (${taxRate}%)`, value: -tax, color: '#B02020' },
    { label: '= Net profit', value: netProfit, color: 'var(--accent-3)', highlight: true },
  ]

  return {
    rows,
    grossProfit,
    ebitda,
    ebit,
    netProfit,
    grossMargin: revenue ? (grossProfit / revenue) * 100 : 0,
    ebitdaMargin: revenue ? (ebitda / revenue) * 100 : 0,
    netMargin: revenue ? (netProfit / revenue) * 100 : 0,
  }
}