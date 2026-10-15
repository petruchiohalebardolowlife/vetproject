import { doctor } from '../data/content'

interface Props {
  onBook: () => void
}

export default function Hero({ onBook }: Props) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__photo">
          {doctor.photo ? (
            <img src={doctor.photo} alt={doctor.photoAlt} />
          ) : (
            <div className="placeholder" role="img" aria-label="Здесь будет фотография врача">
              <span>Фото</span>
            </div>
          )}
        </div>
        <div className="hero__text">
          <h1 className="hero__title">{doctor.name}</h1>
          <p className="hero__description">{doctor.description}</p>
          <div className="hero__actions">
            {/* TODO: действие кнопки «Оставить заявку» пока не определено, кнопка ничего не делает */}
            <button type="button" className="btn btn--primary btn--lg">
              Оставить заявку
            </button>
            <button type="button" className="btn btn--outline btn--lg" onClick={onBook}>
              Записаться на приём
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
