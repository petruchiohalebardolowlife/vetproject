import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent, MouseEvent } from 'react'
import { formatPhone, isValidPhone } from '../utils/phone'
import { submitBooking } from '../utils/submitBooking'

interface Props {
  open: boolean
  onClose: () => void
  onSubmitted: () => void
}

interface Errors {
  name?: string
  phone?: string
  consent?: string
}

export default function BookingModal({ open, onClose, onSubmitted }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)

  // Синхронизация нативного <dialog> с пропсом open (фокус-трап и Esc даёт браузер).
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.body.classList.add('scroll-locked')
    } else if (!open && dialog.open) {
      dialog.close()
    }
    if (!open) document.body.classList.remove('scroll-locked')
    return () => document.body.classList.remove('scroll-locked')
  }, [open])

  const reset = () => {
    setName('')
    setPhone('')
    setComment('')
    setConsent(false)
    setErrors({})
  }

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(formatPhone(e.target.value))

  const validate = (): Errors => {
    const next: Errors = {}
    if (!name.trim()) next.name = 'Укажите имя'
    if (!phone.trim()) next.phone = 'Укажите телефон'
    else if (!isValidPhone(phone)) next.phone = 'Введите корректный номер: +7 (999) 123-45-67'
    if (!consent) next.consent = 'Необходимо согласие на обработку персональных данных'
    return next
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setSubmitting(true)
    try {
      await submitBooking({ name: name.trim(), phone, comment: comment.trim(), consent })
      reset()
      onSubmitted()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="booking-title"
      onClose={() => {
        reset()
        onClose()
      }}
      onClick={handleBackdropClick}
    >
      <form className="modal__form" onSubmit={handleSubmit} noValidate>
        <div className="modal__head">
          <h2 id="booking-title" className="modal__title">
            Запись на приём
          </h2>
          <button type="button" className="modal__close" aria-label="Закрыть" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="field">
          <label htmlFor="booking-name">Имя</label>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'booking-name-error' : undefined}
          />
          {errors.name && (
            <p id="booking-name-error" className="field__error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="booking-phone">Телефон</label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+7 (999) 123-45-67"
            value={phone}
            onChange={handlePhone}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
          />
          {errors.phone && (
            <p id="booking-phone-error" className="field__error">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="booking-comment">Комментарий</label>
          <textarea
            id="booking-comment"
            name="comment"
            rows={3}
            placeholder="Вид животного, что беспокоит (необязательно)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div className="field field--check">
          <label className="check">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'booking-consent-error' : undefined}
            />
            <span>
              Я ознакомлен(а) с <a href="#privacy" onClick={(e) => e.preventDefault()}>политикой обработки персональных данных</a> и согласен(на) на
              обработку моих данных
            </span>
          </label>
          {errors.consent && (
            <p id="booking-consent-error" className="field__error">
              {errors.consent}
            </p>
          )}
        </div>

        <button type="submit" className="btn btn--primary btn--lg modal__submit" disabled={submitting}>
          Отправить
        </button>
      </form>
    </dialog>
  )
}
