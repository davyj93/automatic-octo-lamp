import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import StickyCallButton from '../components/StickyCallButton'
import BackToTop from '../components/BackToTop'
import Reviews from '../components/Reviews'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <StickyCallButton />
      <BackToTop />
    </>
  )
}
