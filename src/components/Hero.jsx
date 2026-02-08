import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#222224] px-4 pt-20"
    >
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
