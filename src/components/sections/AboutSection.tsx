import { about } from '../../data/sections'
import Reveal from '../Reveal'
import SectionHead from './SectionHead'

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead id="about-title" eyebrow="01 — О враче" title={about.title} lead={about.lead} />

        <Reveal className="about__card">
          <blockquote className="about__quote">
            <span className="about__quote-mark" aria-hidden="true">
              “
            </span>
            {about.quote}
          </blockquote>
          <div className="about__body">
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
