import youtube from '../assets/socials/youtube.webp'
import instagram from '../assets/socials/instagram.webp'
import telegram from '../assets/socials/telegram.webp'
import tiktok from '../assets/socials/tiktok.webp'
import vk from '../assets/socials/vk.webp'

export interface Social {
  id: string
  name: string
  url: string
  /** Картинка из src/assets/socials/ (480×640, 3:4). Если не задана — показывается заглушка. */
  image?: string
}

export const socials: Social[] = [
  { id: 'youtube', name: 'YouTube', url: 'https://www.youtube.com/@Vetrinar./shorts', image: youtube },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/veterinar.ot.boga/', image: instagram },
  { id: 'telegram', name: 'Telegram', url: 'https://t.me/talkVeterinarOtBoga', image: telegram },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@veterinar.ot.boga?_r=1&_t=ZS-9AZiQK4y6BI',
    image: tiktok,
  },
  { id: 'vk', name: 'VK', url: 'https://vk.ru/vetexpertkirillsachkov', image: vk },
]
