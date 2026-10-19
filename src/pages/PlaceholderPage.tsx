import { Link } from 'react-router'
import PawIcon from '../components/PawIcon'

interface Props {
  title: string
}

export default function PlaceholderPage({ title }: Props) {
  return (
    <section className="page">
      <div className="container">
        <div className="page__card">
          <PawIcon className="page__paw" />
          <Link className="btn btn--outline back-link" to="/">
            ← На главную
          </Link>
          <h1 className="page__title">{title}</h1>
          <p className="muted">Раздел в разработке.</p>
        </div>
      </div>
    </section>
  )
}
