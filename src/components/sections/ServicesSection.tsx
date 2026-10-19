import { services } from '../../data/sections'
import Reveal from '../Reveal'
import SectionHead from './SectionHead'
import ServiceIcon from './ServiceIcon'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHead id="services-title" eyebrow="02 — Услуги" title={services.title} lead={services.lead} />

        <ul className="services">
          {services.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 3) * 100}
              className={`service service--${i + 1}${'variant' in item ? ` service--${item.variant}` : ''}`}
            >
              <div className="service__top">
                <span className="service__icon">
                  <ServiceIcon name={item.icon} />
                </span>
                <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="service__title">{item.title}</h3>
              <p className="service__text">{item.text}</p>
              <span className="service__arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
