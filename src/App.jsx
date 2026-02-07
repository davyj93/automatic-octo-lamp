import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCallButton from './components/StickyCallButton'
import SmokeOverlay from './components/SmokeOverlay'

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <StickyCallButton />
      <SmokeOverlay />
    </div>
  )
}
