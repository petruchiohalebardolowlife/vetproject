import { socials } from '../data/socials'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export default function SocialLinks() {
  return (
    <section className="socials" aria-label="Социальные сети">
      <div className="container">
        <ul className="socials__list">
          {socials.map((s) => (
            <li key={s.id}>
              <a
                className="social-card"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.name} (откроется в новой вкладке)`}
              >
                {s.image ? (
                  <img className="social-card__image" src={s.image} alt="" />
                ) : (
                  <span className="social-card__image placeholder" aria-hidden="true" />
                )}
                <span className="social-card__name">{s.name}</span>
                <span className="social-card__arrow" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
