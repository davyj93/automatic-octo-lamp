import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

/**
 * Sticky call button for mobile – stays at bottom of viewport on small screens.
 * Hides at top of page and when near the footer.
 */
export default function StickyCallButton() {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkVisibility = () => {
      const mobile = window.matchMedia('(max-width: 767px)').matches
      setIsMobile(mobile)
      
      if (!mobile) {
        setVisible(false)
        return
      }

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const distanceFromBottom = documentHeight - (scrollY + windowHeight)

      // Show button if: scrolled down > 300px AND not within 100px of bottom
      const shouldShow = scrollY > 300 && distanceFromBottom > 100
      setVisible(shouldShow)
    }

    const onScroll = () => {
      if (!window.matchMedia('(max-width: 767px)').matches) return
      
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const distanceFromBottom = documentHeight - (scrollY + windowHeight)

      // Show button if: scrolled down > 300px AND not within 100px of bottom
      const shouldShow = scrollY > 300 && distanceFromBottom > 100
      setVisible(shouldShow)
    }

    checkVisibility()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', checkVisibility)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [])

  if (!isMobile) return null

  return (
    <motion.a
      href="tel:+353873377923"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-6 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-full bg-accent py-4 text-lg font-semibold text-charcoal shadow-lg md:hidden"
      aria-label="Call AMC Sweep"
    >
      <Phone className="h-5 w-5" />
      Call Now
    </motion.a>
  )
}
