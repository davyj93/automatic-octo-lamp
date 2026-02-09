import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import SmokeOverlay from './SmokeOverlay'

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#222224] px-4 pt-20"
    >
      <SmokeOverlay />
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex flex-col items-start px-4"
          style={{ fontFamily: "'Archivo', sans-serif" }}
        >
          <div className="italic font-black text-6xl tracking-tighter leading-none">
            <span className="text-accent">// AMC</span>{' '}
            <span className="text-cream">SWEEP</span>
          </div>
          <div className="text-2xl italic font-bold text-accent self-start ml-8 mt-1">
            Chimney sweep
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mb-10 max-w-xl text-lg text-cream/90"
        >
          Professional, clean, and reliable—we keep your home safe and warm. No mess, no fuss.
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
