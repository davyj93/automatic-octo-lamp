import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

// Simple email validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() || '')

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [touched, setTouched] = useState({ email: false })

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleBlur = useCallback((e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }, [])

  const emailValid = isValidEmail(form.email)
  const showEmailValid = touched.email && form.email.length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `AMC Sweep – Enquiry from ${form.name || 'Website'}`
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:aidan@amcsweep.ie?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="relative bg-charcoal-800 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-cream sm:text-4xl">Get in Touch</h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">
            Request a quote or ask a question. Aidan will get back to you soon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid gap-10 lg:grid-cols-[1fr_1.2fr]"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-cream">Email</p>
                <a href="mailto:amcsweep58@gmail.com" className="text-accent hover:underline">
                  amcsweep58@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-cream">Phone</p>
                <a href="tel:+353873377923" className="text-accent hover:underline">
                  087 337 7923
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-cream">Service area</p>
                <p className="text-cream/80">Dublin &amp; Surrounds</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-cream">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-cream/20 bg-charcoal-100 px-4 py-3 text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-cream">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full rounded-lg border border-cream/20 bg-charcoal-100 px-4 py-3 text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-cream">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="your@email.com"
                className={`w-full rounded-lg border bg-charcoal-100 px-4 py-3 text-charcoal outline-none transition focus:ring-2 ${
                  showEmailValid
                    ? emailValid
                      ? 'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20'
                      : 'border-amber-500/80 focus:border-amber-500 focus:ring-amber-500/20'
                    : 'border-cream/20 focus:border-accent focus:ring-accent/20'
                }`}
              />
              {showEmailValid && (
                <p className={`mt-1 text-sm ${emailValid ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {emailValid ? 'Valid email' : 'Please enter a valid email address'}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-cream">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                className="w-full resize-y rounded-lg border border-cream/20 bg-charcoal-100 px-4 py-3 text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(234, 92, 43, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-charcoal shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
