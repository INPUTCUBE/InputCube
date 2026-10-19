import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className="bg-black text-white pt-12 pb-8 px-8 md:px-12 font-sans">
    <div className="max-w-7xl mx-auto space-y-12">
      
      {/* Top Row: Logo, Address */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tighter uppercase">INPUTCUBE ™</span>
        </div>
        <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <p>inputcube.com</p>
          <p>Operating Globally</p>
        </div>
      </div>

      <div className="h-[1px] bg-white/10 w-full"></div>

      {/* Middle Row: Large CTA */}
      <div className="flex flex-col gap-4 py-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter">Work with us</h2>
        <a href="mailto:hello@inputcube.com" className="text-2xl sm:text-4xl md:text-6xl font-medium tracking-tighter hover:text-white/60 transition-colors break-all sm:break-normal">
          hello@inputcube.com
        </a>
      </div>

      <div className="h-[1px] bg-white/10 w-full"></div>

      {/* Bottom Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-8 relative overflow-hidden">
        <div className="space-y-6 relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Sitemap</p>
          <div className="flex flex-col gap-3 text-xs font-medium text-white/60">
            <Link to="/" className="hover:text-white transition-colors uppercase tracking-widest">Home</Link>
            <Link to="/services" className="hover:text-white transition-colors uppercase tracking-widest">Services</Link>
            <Link to="/career" className="hover:text-white transition-colors uppercase tracking-widest">Career</Link>
            <Link to="/blog" className="hover:text-white transition-colors uppercase tracking-widest">Blog</Link>
            <Link to="/contact" className="hover:text-white transition-colors uppercase tracking-widest">Contact</Link>
          </div>
        </div>

        {/* Massive Background Logo Text */}
        <div className="absolute -bottom-12 left-0 w-full select-none pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap">
          <span className="text-[20vw] font-black uppercase tracking-tighter">INPUTCUBE</span>
        </div>
      </div>

      {/* Very Bottom: Legal & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-24 text-[10px] font-bold uppercase tracking-widest text-white/40">
        <div className="flex gap-8">
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
        <p>© 2026 InputCube. All rights reserved</p>
      </div>

    </div>
  </footer>
)

export default Footer
