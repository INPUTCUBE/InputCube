import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

const NotFound = () => (
  <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 text-center">
    <SEO
      title="404 — Page Not Found"
      description="The page you're looking for doesn't exist. Return to Inputcube."
      canonical="/404"
    />
    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-6">Error 404</p>
    <h1 className="text-[clamp(5rem,20vw,14rem)] font-black tracking-tighter leading-none text-black/5 select-none mb-4">
      404
    </h1>
    <h2 className="text-2xl sm:text-4xl font-bold tracking-tighter mb-4 -mt-8 relative z-10">
      Page not found
    </h2>
    <p className="text-black/40 mb-10 max-w-xs text-base">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Link
      to="/"
      className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors group"
    >
      Back to Home
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
)

export default NotFound
