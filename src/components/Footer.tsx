import { doctor, footerText } from '../data/content'
import Reveal from './Reveal'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer__card">
          <p className="footer__copy">
            © {year} {doctor.name}. {footerText}
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
