import React from 'react'
import SEO from '../components/SEO'

const TermsPage = () => {
  return (
    <div className="pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-32 bg-white text-black min-h-screen font-sans">
      <SEO
        title="Terms of Service | Inputcube Design Studio"
        description="Read the terms of service for Inputcube Design Studio. Our engagement, service delivery, intellectual property, and liability policies."
        canonical="/terms"
        keywords="Inputcube terms of service, design studio terms, UI UX agency terms"
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-black/10 pb-6 sm:pb-8 mb-10 sm:mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-none">Terms</h1>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-3 sm:mt-0">
            [ LEGAL FRAMEWORK ]
          </div>
        </div>

        <div className="space-y-10 sm:space-y-16">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">1. Engagement</h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              By accessing InputCube services, you agree to a professional engagement governed by design excellence and mutual trust. We reserve the right to update these terms as our services evolve.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">2. Service Delivery</h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              Our design solutions are delivered with structural precision and transparency. Timeline commitments are agreed upon at the start of each engagement, and we prioritise clear, iterative communication throughout delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">3. Intellectual Property</h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              All design systems, component libraries, and deliverables produced during an engagement transfer to the client upon final payment unless otherwise agreed. InputCube retains the right to showcase work in its portfolio unless a confidentiality clause is in place.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">4. Liability</h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              InputCube provides design solutions crafted with care and research rigour. We are not liable for outcomes resulting from client-side implementation decisions made outside the agreed design specifications.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsPage
