import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Floating "Back to Top" button that appears after scrolling down.
 * Uses chimney arrow image and smooth scrolls to top.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show button after scrolling down 400px
      setVisible(window.scrollY > 400)
    }

    onScroll() // Check on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow md:bottom-8"
          aria-label="Back to top"
        >
          <img 
            src="/chimneyarrow.png" 
            alt="Back to top" 
            className="w-full h-full object-contain"
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
