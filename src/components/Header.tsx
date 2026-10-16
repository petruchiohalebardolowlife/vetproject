import { useState } from 'react'
import { NavLink } from 'react-router'
import { navItems } from '../data/content'

interface Props {
  onBook: () => void
}

export default function Header({ onBook }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header__bar">
          <button
            type="button"
            className="burger"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
          </button>

          <nav id="main-nav" className={`nav${menuOpen ? ' nav--open' : ''}`} aria-label="Основная навигация">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink className="nav__link" to={item.path} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button type="button" className="btn btn--outline" onClick={onBook}>
            Записаться на приём
          </button>
        </div>
      </div>
    </header>
  )
}
