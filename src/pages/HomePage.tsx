import { useOutletContext } from 'react-router'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import SocialLinks from '../components/SocialLinks'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import BlogSection from '../components/sections/BlogSection'
import CooperationSection from '../components/sections/CooperationSection'
import type { LayoutContext } from '../components/Layout'

export default function HomePage() {
  const { onBook } = useOutletContext<LayoutContext>()
  return (
    <>
      <Hero onBook={onBook} />
      <Marquee />
      <SocialLinks />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <CooperationSection />
    </>
  )
}
