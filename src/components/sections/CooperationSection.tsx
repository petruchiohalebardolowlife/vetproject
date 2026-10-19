import { cooperation } from '../../data/sections'
import { socials } from '../../data/socials'
import Reveal from '../Reveal'
import PawIcon from '../PawIcon'

const telegram = socials.find((s) => s.id === 'telegram')

export default function CooperationSection() {
  return (
    <section id="cooperation" className="section" aria-labelledby="cooperation-title">
      <div className="container">
        <Reveal className="coop">
          <PawIcon className="coop__paw" />
          <div className="coop__main">
            <span className="eyebrow eyebrow--dark">04 — Сотрудничество</span>
            <h2 id="cooperation-title" className="section-title">
              {cooperation.title}
            </h2>
            <p className="section-lead">{cooperation.lead}</p>
            {telegram && (
              <a className="btn btn--dark btn--lg" href={telegram.url} target="_blank" rel="noopener noreferrer">
                {cooperation.cta}
              </a>
            )}
          </div>

          <ol className="steps">
            {cooperation.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={200 + i * 140} className="step">
                <span className="step__num">{i + 1}</span>
                <div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__text">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
