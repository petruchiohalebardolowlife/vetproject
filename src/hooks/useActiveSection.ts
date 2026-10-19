import { useEffect, useState } from 'react'

/**
 * Возвращает id секции, которая сейчас находится у центра экрана (или null,
 * если ни одна из перечисленных секций не на экране). Нужна для подсветки меню.
 */
export function useActiveSection(ids: string[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join('|')

  useEffect(() => {
    if (!enabled) return
    const list = key.split('|')
    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.4
      let current: string | null = null
      for (const id of list) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= line && rect.bottom > line) current = id
      }
      setActive((prev) => (prev === current ? prev : current))
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    frame = window.requestAnimationFrame(update)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [key, enabled])

  return enabled ? active : null
}
