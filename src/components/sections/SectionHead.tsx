import type { ReactNode } from 'react'
import Reveal from '../Reveal'

interface Props {
  id: string
  eyebrow: string
  title: string
  lead?: string
  /** Элемент справа от заголовка (например, кнопка). */
  aside?: ReactNode
}

export default function SectionHead({ id, eyebrow, title, lead, aside }: Props) {
  return (
    <Reveal className="section-head">
      <div className="section-head__text">
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {aside}
    </Reveal>
  )
}
