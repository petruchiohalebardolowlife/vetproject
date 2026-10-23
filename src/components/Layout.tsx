import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import BookingModal from './BookingModal'
import Toast from './Toast'
import Decor from './Decor'
import PaletteToggle from './PaletteToggle'
import { useScrollEffects } from '../hooks/useScrollEffects'

export interface LayoutContext {
  onBook: () => void
}

const TOAST_MS = 3000

export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<number | undefined>(undefined)
  const { pathname } = useLocation()
  useScrollEffects()

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const handleSubmitted = useCallback(() => {
    setModalOpen(false)
    setToast('Готово')
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), TOAST_MS)
  }, [])

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  // При переходе между страницами — к началу; если в адресе есть #якорь — к нужному разделу.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    const target = id ? document.getElementById(id) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Decor />
      <Header onBook={openModal} />
      <main key={pathname} className="page-enter">
        <Outlet context={{ onBook: openModal } satisfies LayoutContext} />
      </main>
      <Footer />
      <BookingModal open={modalOpen} onClose={closeModal} onSubmitted={handleSubmitted} />
      <Toast message={toast} />
      <PaletteToggle />
    </>
  )
}
