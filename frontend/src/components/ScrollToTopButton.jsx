import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Floating "back to top" button.
 * Appears after the user scrolls 400 px down.
 * Positioned bottom-right, above mobile navigation / footer.
 */
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[200] w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-orange transition-colors duration-300 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton
