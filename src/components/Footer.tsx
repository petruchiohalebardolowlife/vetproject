import { doctor, footerText } from '../data/content'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__card">
          © {year} {doctor.name}. {footerText}
        </p>
      </div>
    </footer>
  )
}
