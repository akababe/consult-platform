export default function SliderRow({ label, value, min, max, step, onChange, formatValue }) {
  return (
    <div className="finlit-slider-row">
      <label className="finlit-slider-label">{label}</label>
      <input
        className="finlit-slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
      />
      <span className="finlit-slider-value">{formatValue ? formatValue(value) : value}</span>
    </div>
  )
}