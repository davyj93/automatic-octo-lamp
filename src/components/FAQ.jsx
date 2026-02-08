import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'How often should I have my chimney swept?',
    answer: 'We recommend once a year, at least. You might consider getting it swept more often if you use your fire frequently.',
  },
  {
    id: 2,
    question: 'Do you cover my area?',
    answer: "AMC Sweep serves the Greater Dublin Area and surrounding counties. Contact us to confirm your location.",
  },
  {
    id: 3,
    question: 'How long does a sweep take?',
    answer: 'A typical chimney sweep can take any amount of time, up to an hour depending on the condition of your fireplace or stove. We use modern equipment and cover the fireplace to keep your home clean. No mess, no fuss.',
  },
  {
    id: 4,
    question: 'Are you insured?',
    answer: "Yes. We are fully insured for your peace of mind. We take care of your home and your chimney with the same attention we'd give our own.",
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="faq" className="relative bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold text-cream sm:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-cream/10 bg-cream/5 backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-medium text-cream transition hover:bg-cream/5"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-accent"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-cream/10 px-6 py-4 text-cream/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
