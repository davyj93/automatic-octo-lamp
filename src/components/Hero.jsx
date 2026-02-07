import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import ChimneyHeroSVG from './ChimneyHeroSVG'

export default function Hero() {
  const sectionRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const center = window.innerHeight / 2
      const dist = rect.top + rect.height / 2 - center
      setOffset(dist * 0.08)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-4 pt-20"
    >
      {/* Background image – cover, centered, 70% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {/* Smoke overlay – smoke drifting across the hero in a loop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="hero-smoke-layer-1 absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,rgba(255,255,255,0.12)_0%,transparent_50%)]"
          style={{ backgroundSize: '120% 100%' }}
        />
        <div
          className="hero-smoke-layer-2 absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_60%,rgba(255,255,255,0.1)_0%,transparent_45%)]"
          style={{ backgroundSize: '140% 120%' }}
        />
        <div
          className="hero-smoke-layer-3 absolute inset-0 bg-[radial-gradient(ellipse_90%_40%_at_30%_70%,rgba(255,255,255,0.08)_0%,transparent_55%)]"
          style={{ backgroundSize: '130% 110%' }}
        />
      </div>

      {/* Parallax chimney illustration */}
      <motion.div
        style={{ y: offset }}
        className="absolute bottom-0 right-[5%] hidden w-64 opacity-30 lg:block xl:right-[10%] xl:w-80"
      >
        <ChimneyHeroSVG />
      </motion.div>
      <motion.div
        style={{ y: -offset * 0.5 }}
        className="absolute left-[5%] top-1/4 hidden w-48 opacity-20 lg:block xl:left-[8%] xl:w-56"
      >
        <ChimneyHeroSVG />
      </motion.div>

      {/* Content – large centered logo + tagline */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.img
          src="/logo.png"
          alt="AMC Sweep – Chimney sweep"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 h-auto w-full max-w-md px-4 sm:max-w-lg md:max-w-xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
        >
          Dublin &amp; Surrounds
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mb-10 max-w-xl text-lg text-cream/90"
        >
          Professional, clean, and reliable—from Rathmines to Howth, we keep Dublin homes safe and warm. No mess, no fuss.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MagneticButton
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-charcoal shadow-lg"
          >
            Get a Quote
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
