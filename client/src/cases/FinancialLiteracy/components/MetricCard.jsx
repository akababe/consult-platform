export default function MetricCard({ label, value, tone = 'default' }) {
  return (
    <div className="finlit-metric">
      <div className="finlit-metric-label">{label}</div>
      <div className={`finlit-metric-value ${tone}`}>{value}</div>
    </div>
  )
}