import { useNavigate } from 'react-router-dom'
import { cases } from '../../cases/index.js'

export default function Header({ theme, toggleTheme }) {
  const navigate = useNavigate()
  const publishedCount = cases.filter(c => c.published !== false).length

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className="site-logo__main">The Consulting Playbook</span>
          <span className="site-logo__sub">BCG · McKinsey · Bain — Frameworks in Practice</span>
        </div>

        <div className="header-actions">
          <span className="case-count-badge">{cases.length} Cases</span>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '◐' : '○'}
          </button>
        </div>
      </div>
    </header>
  )
}
