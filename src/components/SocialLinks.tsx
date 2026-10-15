import { socials } from '../data/socials'

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
                <span className="social-card__name">{s.name}</span>
                {s.image ? (
                  <img className="social-card__image" src={s.image} alt="" />
                ) : (
                  <span className="social-card__image placeholder" aria-hidden="true" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
