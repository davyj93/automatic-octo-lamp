import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 py-12 text-center text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="inline-block">
          <img src="/logo.png" alt="AMC Sweep" className="h-8 w-auto opacity-90" />
        </Link>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-0 text-sm"
        >
          &copy; 2024 AMC Sweep. All rights reserved.
        </motion.p>
        <p className="text-sm">
          <Link to="/privacy-policy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/amcsweep58/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 transition hover:text-accent"
            aria-label="AMC Sweep on Facebook"
          >
            <Facebook className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.instagram.com/amcsweep58/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 transition hover:text-accent"
            aria-label="AMC Sweep on Instagram"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  )
}
