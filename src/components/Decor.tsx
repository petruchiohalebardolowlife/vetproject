/** Фоновые размытые «пятна» цвета акцента: медленно дрейфуют и слегка двигаются при прокрутке. */
export default function Decor() {
  return (
    <div className="decor" aria-hidden="true">
      <span className="decor__blob decor__blob--1" />
      <span className="decor__blob decor__blob--2" />
      <span className="decor__blob decor__blob--3" />
    </div>
  )
}
