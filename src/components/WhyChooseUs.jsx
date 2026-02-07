import { motion } from 'framer-motion'
import { Shield, MapPin, Wrench } from 'lucide-react'

const points = [
  { icon: Shield, title: 'Fully Insured', text: "You're covered for peace of mind." },
  { icon: MapPin, title: 'Dublin Based', text: 'Local, reliable, and quick to respond.' },
  { icon: Wrench, title: 'Modern Equipment', text: 'Professional tools for a thorough, clean job.' },
  { icon: Shield, title: 'Fully Certified', text: 'Trained and certified to the highest standards.' },
]

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
  }),
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function WhyChooseUs() {
  return (
    <section className="relative bg-charcoal-800 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-2xl font-bold text-cream sm:text-3xl"
        >
          Why Choose Us
        </motion.h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          {points.map((p) => {
            const Icon = p.icon
            return (
              <motion.li
                key={p.title}
                variants={item}
                className="flex items-start gap-4 rounded-xl border border-cream/10 bg-cream/5 px-6 py-4 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <strong className="text-cream">{p.title}</strong>
                  <span className="text-cream/80"> — {p.text}</span>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
