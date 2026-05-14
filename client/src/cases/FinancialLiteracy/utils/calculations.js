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

export function calculateA3({ revenuePerUnit, cogsPerUnit, variableOpex, allocatedFixed }) {
  const revenue = revenuePerUnit
  const cogs = cogsPerUnit
  const grossProfit = revenue - cogs
  const contributionMargin = grossProfit - variableOpex
  const ebitda = contributionMargin - allocatedFixed

  const grossMarginPct = revenue ? (grossProfit / revenue) * 100 : 0
  const contributionPct = revenue ? (contributionMargin / revenue) * 100 : 0
  const ebitdaPct = revenue ? (ebitda / revenue) * 100 : 0

  const segments = [
    { label: 'COGS', value: cogs, color: '#B02020' },
    { label: 'Variable OpEx', value: variableOpex, color: '#D97B5D' },
    { label: 'Fixed', value: allocatedFixed, color: '#9B7E3A' },
    { label: 'Net profit', value: ebitda, color: 'var(--accent-3)' },
  ]

  let insight = "Adjust sliders to see how costs layer on top of revenue. Gross margin is what's left after COGS."

  if (contributionPct > 60) {
    insight = `Strong contribution margin (${contributionPct.toFixed(0)}%). Most revenue remains after variable costs.`
  } else if (contributionPct < 20) {
    insight = `Weak contribution margin (${contributionPct.toFixed(0)}%). High variable costs or low price. Contribution-based businesses live or die by this metric.`
  }

  return {
    grossMarginPct,
    contributionPct,
    ebitdaPct,
    segments,
    insight,
  }
}

export function calculateA4Days({ dso, dio, dpo }) {
  const ccc = dso + dio - dpo

  let cashTrapRating = 'Moderate'
  if (ccc < 0) {
    cashTrapRating = 'Negative (cash generative)'
  } else if (ccc <= 30) {
    cashTrapRating = 'Low'
  } else if (ccc <= 60) {
    cashTrapRating = 'Moderate'
  } else {
    cashTrapRating = 'High'
  }

  let insight = `Cash Conversion Cycle of ${Math.round(ccc)} days. Pay suppliers in ${dpo} days, wait ${dio} days for inventory to sell, and ${dso} days to collect from customers.`

  if (ccc < 0) {
    insight = `Negative CCC (${Math.round(ccc)} days). You collect from customers before paying suppliers. That's the holy grail — it generates cash as you grow.`
  } else if (ccc > 60) {
    insight = `High CCC (${Math.round(ccc)} days). Growth consumes cash rapidly. A business with a long cycle needs working capital financing.`
  }

  return {
    ccc,
    cashTrapRating,
    insight,
  }
}

export function calculateA4WC({ accountsReceivable, inventory, accountsPayable }) {
  const workingCapital = accountsReceivable + inventory - accountsPayable
  return {
    workingCapital,
  }
}

export function calculateA5({ cash, receivables, inventory, propertyEquipment, payables, shortTermDebt, longTermDebt }) {
  const totalAssets = cash + receivables + inventory + propertyEquipment
  const totalLiabilities = payables + shortTermDebt + longTermDebt
  const equity = totalAssets - totalLiabilities
  const debtToEquity = equity !== 0 ? totalLiabilities / equity : 0
  const currentRatio = (payables + shortTermDebt) !== 0 ? (cash + receivables + inventory) / (payables + shortTermDebt) : 0

  let insight = 'A balanced sheet has assets funded by a healthy mix of liabilities and equity.'

  if (equity < 0) {
    insight = 'Negative equity. Liabilities exceed assets. The company is technically insolvent.'
  } else if (currentRatio < 1) {
    insight = `Current ratio below 1. Short-term assets (${(currentRatio).toFixed(2)}x) don't cover short-term liabilities. Potential liquidity squeeze.`
  } else if (debtToEquity > 2) {
    insight = `High leverage (D/E = ${debtToEquity.toFixed(1)}). More than $2 of debt per $1 of equity. Risky in downturns.`
  }

  return {
    totalAssets,
    totalLiabilities,
    equity,
    debtToEquity,
    currentRatio,
    insight,
  }
}