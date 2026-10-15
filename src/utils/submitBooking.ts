export interface BookingData {
  name: string
  phone: string
  comment: string
  consent: boolean
}

// TODO: заменить на реальную отправку (API / Telegram-бот / email)
export async function submitBooking(data: BookingData): Promise<void> {
  console.log('Заявка на приём:', data)
}
