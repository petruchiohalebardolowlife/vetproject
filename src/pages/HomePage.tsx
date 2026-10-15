import { useOutletContext } from 'react-router'
import Hero from '../components/Hero'
import SocialLinks from '../components/SocialLinks'
import type { LayoutContext } from '../components/Layout'

export default function HomePage() {
  const { onBook } = useOutletContext<LayoutContext>()
  return (
    <>
      <Hero onBook={onBook} />
      <SocialLinks />
    </>
  )
}
