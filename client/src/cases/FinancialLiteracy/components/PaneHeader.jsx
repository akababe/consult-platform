export default function PaneHeader({ badge, title, description, tone = 'module-a' }) {
  return (
    <div className="finlit-pane-header">
      <div className={`finlit-badge ${tone}`}>{badge}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}