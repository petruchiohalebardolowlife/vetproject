import { useRef } from 'react'
import type { PointerEvent } from 'react'
import { socials } from '../data/socials'
import type { Social } from '../data/socials'
import Reveal from './Reveal'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

function SocialCard({ social }: { social: Social }) {
  const ref = useRef<HTMLAnchorElement>(null)

  // Лёгкий 3D-наклон карточки за курсором (только для мыши).
  const handleMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.setProperty('--ry', `${(x * 12).toFixed(2)}deg`)
    ref.current.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`)
  }
  const handleLeave = () => {
    ref.current?.style.setProperty('--ry', '0deg')
    ref.current?.style.setProperty('--rx', '0deg')
  }

  return (
    <a
      ref={ref}
      className="social-card"
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${social.name} (откроется в новой вкладке)`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {social.image ? (
        <img className="social-card__image" src={social.image} alt="" loading="lazy" />
      ) : (
        <span className="social-card__image placeholder" aria-hidden="true" />
      )}
      <span className="social-card__name">{social.name}</span>
      <span className="social-card__arrow" aria-hidden="true">
        <ArrowIcon />
      </span>
    </a>
  )
}

export default function SocialLinks() {
  return (
    <section className="socials" aria-label="Социальные сети">
      <div className="container">
        <ul className="socials__list">
          {socials.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 90} variant="scale" className="socials__item">
              <SocialCard social={s} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
