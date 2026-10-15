import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import BookingModal from './BookingModal'
import Toast from './Toast'

export interface LayoutContext {
  onBook: () => void
}

const TOAST_MS = 3000

export default function Layout() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<number | undefined>(undefined)
  const { pathname } = useLocation()

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const handleSubmitted = useCallback(() => {
    setModalOpen(false)
    setToast('Готово')
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), TOAST_MS)
  }, [])

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  // При переходе между страницами возвращаемся к началу страницы.
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <>
      <Header onBook={openModal} />
      <main>
        <Outlet context={{ onBook: openModal } satisfies LayoutContext} />
      </main>
      <Footer />
      <BookingModal open={modalOpen} onClose={closeModal} onSubmitted={handleSubmitted} />
      <Toast message={toast} />
    </>
  )
}
