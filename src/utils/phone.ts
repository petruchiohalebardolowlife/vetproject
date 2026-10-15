/** Оставляет только цифры, приводит ведущую 8 к 7 и режет до 11 цифр. */
export function normalizeDigits(value: string): string {
  let digits = value.replace(/\D/g, '')
  if (digits.startsWith('8')) digits = '7' + digits.slice(1)
  return digits.slice(0, 11)
}

/** Форматирует ввод в вид +7 (999) 123-45-67 по мере набора. */
export function formatPhone(value: string): string {
  let digits = normalizeDigits(value)
  if (!digits) return ''
  if (!digits.startsWith('7')) digits = '7' + digits.slice(0, 10)
  const d = digits.slice(1)
  let out = '+7'
  if (d.length > 0) out += ' (' + d.slice(0, 3)
  if (d.length >= 3) out += ')'
  if (d.length > 3) out += ' ' + d.slice(3, 6)
  if (d.length > 6) out += '-' + d.slice(6, 8)
  if (d.length > 8) out += '-' + d.slice(8, 10)
  return out
}

export function isValidPhone(value: string): boolean {
  const digits = normalizeDigits(value)
  return digits.length === 11 && digits.startsWith('7')
}
