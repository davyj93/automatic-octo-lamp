import { motion } from 'framer-motion'
import { Flame, Fuel, Bird, ShieldAlert } from 'lucide-react'

const services = [
  {
    id: 'sweep',
    title: 'Chimney Sweeping',
    description: 'Standard open fires and traditional chimneys. Full sweep and inspection to keep your flue clear and safe—year after year.',
    icon: Flame,
    bentoClass: 'md:col-span-2',
    price: 'Starting from €80',
  },
  {
    id: 'stove',
    title: 'Stove Cleaning & Maintenance',
    description: 'Solid fuel and multi-fuel stoves. We clean, service, and advise so your stove runs efficiently and safely.',
    icon: Fuel,
    bentoClass: 'md:col-span-2',
    price: 'Starting from €90',
  },
  {
    id: 'bird',
    title: 'Bird Nest Removal',
    description: 'Safe removal of nests and debris from chimneys and flues, with advice on preventing future blockages.',
    icon: Bird,
    bentoClass: 'md:col-span-1',
    price: 'Additional €90 fee',
  },
  {
    id: 'safety',
    title: 'Carbon Monoxide Safety Checks',
    description: 'Peace of mind with CO and flue-draught checks. We help you spot issues before they become dangers.',
    icon: ShieldAlert,
    bentoClass: 'md:col-span-1',
    price: 'Ask Aidan about this service when he is in your home for more information and pricing.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 * i },
  }),
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-cream sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            From open fires to stoves—we cover it all with professional care.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-4 sm:gap-5 md:grid-cols-4 md:grid-rows-2"
        >
          {services.map((s) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.id}
                variants={card}
                className={`rounded-2xl glass p-6 transition hover:border-cream/20 ${s.bentoClass}`}
              >
                <div className="mb-4 inline-flex rounded-xl bg-accent/15 p-3 text-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-cream">{s.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-cream/75">{s.description}</p>
                <p className="text-sm font-medium text-accent">{s.price}</p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-cream/70"
        >
          Prices vary based on condition and call-out distance. Contact Aidan for a quote. Bird nest removal is an additional €90 fee.
        </motion.p>
      </div>
    </section>
  )
}
