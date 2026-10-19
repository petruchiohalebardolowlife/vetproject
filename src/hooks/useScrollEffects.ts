import { useEffect } from 'react'

/**
 * Пишет положение прокрутки в CSS-переменные на <html>:
 * --scroll-y (px, число) и --scroll-progress (0..1), а также класс .is-scrolled.
 * CSS использует их для параллакса, индикатора прогресса и сжатия шапки.
 */
export function useScrollEffects() {
  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = Math.max(root.scrollHeight - window.innerHeight, 1)
      root.style.setProperty('--scroll-y', String(Math.round(y)))
      root.style.setProperty('--scroll-progress', String(Math.min(y / max, 1)))
      root.classList.toggle('is-scrolled', y > 16)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])
}
