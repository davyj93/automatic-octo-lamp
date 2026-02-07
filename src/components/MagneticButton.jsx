import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Primary button with a subtle "magnetic" pull toward the cursor on hover.
 */
export default function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { type: 'spring', stiffness: 300, damping: 20 }
  const xSpring = useSpring(x, spring)
  const ySpring = useSpring(y, spring)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distance = 60
    const deltaX = (e.clientX - centerX) / rect.width
    const deltaY = (e.clientY - centerY) / rect.height
    x.set(Math.max(-distance, Math.min(distance, deltaX * distance)))
    y.set(Math.max(-distance, Math.min(distance, deltaY * distance)))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="inline-block"
    >
      <motion.a
        href={props.href}
        className={className}
        whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(234, 92, 43, 0.4)' }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    </motion.div>
  )
}
