import doctorPhoto from '../assets/doctor.webp'

export const doctor = {
  name: 'Кирилл Сачков',
  // TODO: заменить на реальное описание врача
  description: 'Здесь будет описание врача.',
  photo: doctorPhoto as string | undefined,
  photoAlt: 'Фотография Кирилла Сачкова',
}

export interface NavItem {
  /** id секции на главной странице (якорь #id). */
  id: string
  label: string
}

/** Пункты меню — разделы главной страницы, переход по якорю с плавной прокруткой. */
export const navItems: NavItem[] = [
  { id: 'about', label: 'О враче' },
  { id: 'services', label: 'Услуги' },
  { id: 'blog', label: 'Блог' },
  { id: 'cooperation', label: 'Сотрудничество' },
]

export const footerText = 'Все права защищены.'
