import { socials } from '../data/socials'
import PawIcon from './PawIcon'

/** Декоративная бегущая строка с названиями соцсетей между hero и карточками. */
export default function Marquee() {
  const group = (key: string) => (
    <div className="marquee__group" key={key}>
      {[0, 1].flatMap((round) =>
        socials.map((s) => (
          <span className="marquee__item" key={`${round}-${s.id}`}>
            {s.name}
            <PawIcon className="marquee__paw" />
          </span>
        )),
      )}
    </div>
  )

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        <div className="marquee__track">
          {group('a')}
          {group('b')}
        </div>
      </div>
    </div>
  )
}
