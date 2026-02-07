import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 py-12 text-center text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
        <a href="#" className="inline-block">
          <img src="/logo.png" alt="AMC Sweep" className="h-8 w-auto opacity-90" />
        </a>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-0 text-sm"
        >
          &copy; 2024 AMC Sweep. All rights reserved.
        </motion.p>
        <p className="text-sm">
          <a href="#" className="text-accent hover:underline" rel="noopener noreferrer">
            Facebook
          </a>
          <span className="mx-2" aria-hidden="true">·</span>
          <a href="#" className="text-accent hover:underline" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  )
}
