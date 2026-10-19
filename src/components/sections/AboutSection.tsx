import { about } from '../../data/sections'
import Reveal from '../Reveal'
import SectionHead from './SectionHead'

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead id="about-title" eyebrow="01 — О враче" title={about.title} lead={about.lead} />

        <div className="about">
          <Reveal className="about__card">
            <blockquote className="about__quote">
              <span className="about__quote-mark" aria-hidden="true">
                “
              </span>
              {about.quote}
            </blockquote>
            {about.paragraphs.map((text) => (
              <p key={text} className="about__text">
                {text}
              </p>
            ))}
            <ul className="chips">
              {about.chips.map((chip) => (
                <li key={chip} className="chip">
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>

          <ul className="about__stats">
            {about.stats.map((stat, i) => (
              <Reveal as="li" key={stat.label} delay={i * 120} variant="scale" className={`stat stat--${i + 1}`}>
                <span className="stat__value">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="stat__label">{stat.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
