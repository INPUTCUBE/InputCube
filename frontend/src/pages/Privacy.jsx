import React from 'react'
import SEO from '../components/SEO'

const PrivacyPage = () => {
  return (
    <div className="pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-32 bg-white text-black min-h-screen font-sans">
      <SEO
        title="Privacy Policy | Inputcube Design Studio"
        description="Read the privacy policy for Inputcube Design Studio. We do not sell personal data. All client work is confidential. GDPR and India DPDP Act aligned."
        canonical="/privacy"
        keywords="Inputcube privacy policy, design studio privacy, GDPR, DPDP Act"
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-black/10 pb-6 sm:pb-8 mb-10 sm:mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-none">Privacy</h1>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-3 sm:mt-0">
            [ DATA POLICY ]
          </div>
        </div>

        <div className="space-y-10 sm:space-y-16">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">Data Custody</h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              InputCube does not collect or sell personal data to third parties. Any information shared through our contact form is used exclusively to respond to your inquiry and support your engagement with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">Client Confidentiality</h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              All design work, research findings, and strategic materials produced for clients are treated as strictly confidential. Client IP remains entirely with the client. We operate under NDA by default for all active engagements.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">Compliance</h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              Our privacy practices are aligned with applicable data protection regulations including GDPR and India's DPDP Act. We ensure your information is handled with the same structural precision we bring to our design systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">Transparency</h2>
            <p className="text-sm sm:text-base text-black/60 leading-relaxed">
              Any changes to our privacy policy are communicated clearly and promptly. We believe transparency is not just a legal obligation — it is a design principle.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage
