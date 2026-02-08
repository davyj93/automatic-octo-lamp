import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Fabulous job on both my stoves and no dust whatsoever.",
    author: 'Jo Roth',
  },
  {
    quote: "Highly recommend Aidan... Very professional job.",
    author: 'Laura Mc Grath',
  },
  {
    quote: "Absolutely fantastic service... punctual, professional, and thorough.",
    author: 'Emma Crowley',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 * i },
  }),
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Testimonials() {
  return (
    <section className="relative bg-charcoal-800 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-cream sm:text-4xl">What Our Customers Say</h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">
            Trusted by Dublin homeowners from the coast to the suburbs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.author}
              variants={card}
              className="relative rounded-2xl border border-cream/10 bg-charcoal-700/80 p-8 shadow-lg backdrop-blur-sm"
            >
              <img
                src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                alt="Google"
                className="absolute right-5 top-5 h-6 w-6 object-contain opacity-90"
                width={24}
                height={24}
              />
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" strokeWidth={0} />
                ))}
              </div>
              <p className="mb-6 text-cream/95 leading-relaxed">{t.quote}</p>
              <footer className="flex items-center gap-2 text-sm font-medium text-cream/80">
                <span>— {t.author}</span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
