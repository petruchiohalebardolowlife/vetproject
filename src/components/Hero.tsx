import { doctor } from '../data/content'
import PawIcon from './PawIcon'

interface Props {
  onBook: () => void
}

function ArrowIcon() {
  return (
    <svg className="btn__arrow" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Hero({ onBook }: Props) {
  const [firstName, ...rest] = doctor.name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section className="hero">
      <PawIcon className="hero__paw hero__paw--1" />
      <PawIcon className="hero__paw hero__paw--2" />
      <PawIcon className="hero__paw hero__paw--3" />

      <div className="container hero__grid">
        <div className="hero__visual">
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="hero__photo">
            {doctor.photo ? (
              <img src={doctor.photo} alt={doctor.photoAlt} />
            ) : (
              <div className="placeholder" role="img" aria-label="Здесь будет фотография врача">
                <span>Фото</span>
              </div>
            )}
          </div>
          <div className="hero__badge">
            <svg className="hero__badge-ring" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
              <defs>
                <path id="badge-circle" d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" />
              </defs>
              <circle cx="50" cy="50" r="49" className="hero__badge-bg" />
              <text className="hero__badge-text">
                <textPath href="#badge-circle" textLength="249" lengthAdjust="spacing">
                  ВЕТЕРИНАРНЫЙ ВРАЧ • ВЕТЕРИНАРНЫЙ ВРАЧ •
                </textPath>
              </text>
            </svg>
            <PawIcon className="hero__badge-paw" />
          </div>
        </div>

        <div className="hero__text">
          <h1 className="hero__title" aria-label={doctor.name}>
            <span className="hero__word" aria-hidden="true">
              <span>{firstName}</span>
            </span>
            <span className="hero__word hero__word--mark" aria-hidden="true">
              <span>{lastName}</span>
            </span>
          </h1>
          <p className="hero__description">{doctor.description}</p>
          <div className="hero__actions">
            {/* TODO: действие кнопки «Оставить заявку» пока не определено, кнопка ничего не делает */}
            <button type="button" className="btn btn--primary btn--lg">
              Оставить заявку
            </button>
            <button type="button" className="btn btn--outline btn--lg" onClick={onBook}>
              Записаться на приём
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
