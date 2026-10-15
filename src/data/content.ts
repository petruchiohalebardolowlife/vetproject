import doctorPhoto from '../assets/doctor.webp'

export const doctor = {
  name: 'Кирилл Сачков',
  // TODO: заменить на реальное описание врача
  description: 'Здесь будет описание врача.',
  photo: doctorPhoto as string | undefined,
  photoAlt: 'Фотография Кирилла Сачкова',
}

export interface NavItem {
  path: string
  label: string
}

/** Каждый пункт меню — отдельная страница (контента пока нет, показывается заглушка). */
export const navItems: NavItem[] = [
  { path: '/about', label: 'О враче' },
  { path: '/services', label: 'Услуги' },
  { path: '/blog', label: 'Блог' },
  { path: '/cooperation', label: 'Сотрудничество' },
]

export const footerText = 'Все права защищены.'
