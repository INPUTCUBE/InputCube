import React, { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isHomePage = location.pathname === '/'
  const isDarkPage = isHomePage

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const textColorClass = isDarkPage && !isScrolled ? 'text-white' : 'text-black'
  const pillBgClass = isDarkPage && !isScrolled ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'
  const activeLinkClass = isDarkPage && !isScrolled ? 'bg-white text-black' : 'bg-black text-white'
  const inactiveLinkClass = isDarkPage && !isScrolled ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] px-6 md:px-8 py-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent'}`}>
        <Link to="/" className="flex items-center gap-2 group pointer-events-auto">
          <span className={`font-bold text-xl tracking-tighter uppercase transition-colors ${textColorClass}`}>INPUTCUBE</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-1 backdrop-blur-md border p-1 rounded-full pointer-events-auto transition-colors ${pillBgClass}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? activeLinkClass
                  : inactiveLinkClass
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className={`md:hidden p-2 rounded-full transition-colors ${pillBgClass} ${textColorClass} pointer-events-auto`}
        >
          {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>

        {/* Desktop CTA */}
        <Link 
          to="/contact"
          className={`hidden md:flex backdrop-blur-md border px-6 py-2.5 rounded-full text-sm font-medium transition-all items-center gap-2 pointer-events-auto group ${isDarkPage && !isScrolled ? 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-black' : 'bg-black/5 border-black/10 text-black hover:bg-black hover:text-white'}`}
        >
          Get Started 
          <ArrowRight className="w-4 h-4 rotate-[-45deg] group-hover:rotate-0 transition-transform" />
        </Link>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-white pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-4xl font-bold tracking-tighter ${
                      location.pathname === link.path ? 'text-black' : 'text-black/40'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-12"
              >
                <Link 
                  to="/contact"
                  className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-between group"
                >
                  Get in touch
                  <ArrowRight className="w-6 h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
