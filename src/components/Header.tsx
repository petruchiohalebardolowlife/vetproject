import { useCallback, useEffect, useRef, useState } from 'react'
import type { FocusEvent } from 'react'
import { Link, useLocation } from 'react-router'
import { doctor, navItems } from '../data/content'
import PawIcon from './PawIcon'
import { useActiveSection } from '../hooks/useActiveSection'

interface Props {
  onBook: () => void
}

function ArrowIcon() {
  return (
    <svg className="btn__arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Header({ onBook }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const listRef = useRef<HTMLUListElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const active = useActiveSection(navItems.map((item) => item.id), isHome)

  // Скользящая подсветка меню: двигается за курсором/фокусом и возвращается к активной странице.
  const moveTo = useCallback((el: HTMLElement | null) => {
    const indicator = indicatorRef.current
    if (!indicator) return
    if (!el) {
      indicator.style.setProperty('--o', '0')
      return
    }
    indicator.style.setProperty('--x', `${el.offsetLeft}px`)
    indicator.style.setProperty('--w', `${el.offsetWidth}px`)
    indicator.style.setProperty('--o', '1')
  }, [])

  const moveToActive = useCallback(() => {
    moveTo(listRef.current?.querySelector<HTMLElement>('[aria-current]') ?? null)
  }, [moveTo])

  useEffect(() => {
    moveToActive()
    window.addEventListener('resize', moveToActive)
    return () => window.removeEventListener('resize', moveToActive)
  }, [pathname, active, moveToActive])

  const handleBlur = (e: FocusEvent<HTMLUListElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) moveToActive()
  }

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

          <Link
            className="brand"
            to="/"
            aria-label={`${doctor.name} — на главную`}
            onClick={(e) => {
              // Уже на главной: плавно наверх и убираем #якорь из адреса.
              if (isHome) {
                e.preventDefault()
                window.history.replaceState(null, '', '/')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <span className="brand__mark">
              <PawIcon className="brand__paw" />
            </span>
            <span className="brand__name">{doctor.name}</span>
          </Link>

          <nav id="main-nav" className={`nav${menuOpen ? ' nav--open' : ''}`} aria-label="Основная навигация">
            <ul className="nav__list" ref={listRef} onMouseLeave={moveToActive} onBlur={handleBlur}>
              <span className="nav__indicator" ref={indicatorRef} aria-hidden="true" />
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className="nav__link"
                    href={`/#${item.id}`}
                    aria-current={active === item.id ? 'true' : undefined}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={(e) => moveTo(e.currentTarget)}
                    onFocus={(e) => moveTo(e.currentTarget)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button type="button" className="btn btn--dark header__cta" onClick={onBook}>
            Записаться на приём
            <ArrowIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
