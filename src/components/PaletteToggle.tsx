import { useState } from 'react'

// ВРЕМЕННЫЙ компонент: переключатель цветовых гамм на время согласования с заказчиком.
// Когда гамма будет выбрана — удалить компонент, блок html[data-theme='olive'] в global.css
// и inline-скрипт в index.html.

type Theme = 'blue' | 'olive'

const THEMES: { id: Theme; label: string; themeColor: string }[] = [
  { id: 'blue', label: 'Голубая гамма', themeColor: '#d8ebf2' },
  { id: 'olive', label: 'Оливково-розовая гамма', themeColor: '#e6e8de' },
]

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'olive') root.dataset.theme = 'olive'
  else delete root.dataset.theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEMES.find((t) => t.id === theme)!.themeColor)
  try {
    localStorage.setItem('palette', theme)
  } catch {
    // localStorage может быть недоступен (приватный режим) — гамма просто не запомнится
  }
}

export default function PaletteToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'olive' ? 'olive' : 'blue',
  )

  const choose = (next: Theme) => {
    setTheme(next)
    applyTheme(next)
  }

  return (
    <div className="palette" role="group" aria-label="Цветовая гамма (временный переключатель)">
      <span className="palette__label">Палитра</span>
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`palette__btn palette__btn--${t.id}`}
          aria-pressed={theme === t.id}
          aria-label={t.label}
          title={t.label}
          onClick={() => choose(t.id)}
        />
      ))}
    </div>
  )
}
