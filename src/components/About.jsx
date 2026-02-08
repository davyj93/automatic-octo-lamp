import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
  }),
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal-800 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="overflow-hidden rounded-2xl glass-dark p-8 shadow-xl sm:p-10 md:p-12"
        >
          <motion.h2 variants={item} className="mb-6 text-2xl font-bold text-cream sm:text-3xl">
            About Aidan
          </motion.h2>
          <motion.div variants={item} className="max-w-none">
            <p className="text-cream/95 leading-relaxed">
              Aidan runs <strong className="text-cream">AMC Sweep</strong> with one goal: keeping your home safe and warm.
              He takes pride in a{' '}
              <strong className="text-accent">"no mess, no fuss"</strong> approach—efficient, thorough work with minimal disruption to your day.
            </p>
            <p className="mt-4 text-cream/95 leading-relaxed">
              Whether it&apos;s an annual sweep, a blocked flue, or a safety check before the winter, you&apos;re in experienced hands. 
              Customers trust AMC Sweep for a reason: we show up on time, do the job right, and leave your home spotless.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
