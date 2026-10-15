import { Link } from 'react-router'

interface Props {
  title: string
}

export default function PlaceholderPage({ title }: Props) {
  return (
    <section className="page">
      <div className="container">
        <Link className="back-link" to="/">
          ← На главную
        </Link>
        <h1 className="section-title">{title}</h1>
        <p className="muted">Раздел в разработке.</p>
      </div>
    </section>
  )
}
