import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'

const fields = [
  { id: 'contact-name',    name: 'name',    label: 'Name',    placeholder: 'Your name',    type: 'text'  },
  { id: 'contact-subject', name: 'subject', label: 'Subject', placeholder: 'Choose subject', type: 'text' },
  { id: 'contact-company', name: 'company', label: 'Company', placeholder: 'Your company', type: 'text'  },
  { id: 'contact-email',   name: 'email',   label: 'Email',   placeholder: 'Email address', type: 'email' },
]

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to your backend / email service (Formspree, Resend, etc.)
    setSubmitted(true)
  }

  return (
    <div className="pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-32 bg-white text-black min-h-screen font-sans overflow-x-hidden">
      <SEO
        title="Contact Inputcube | Start a Design Conversation"
        description="Connect with Inputcube for enterprise UI/UX design, design systems, and B2B SaaS interface architecture. Let's build something that scales."
        canonical="/contact"
        keywords="contact Inputcube, hire UI UX designer India, design studio inquiry, enterprise design consultation"
      />

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-black/10 pb-6 sm:pb-8 mb-10 sm:mb-14">
          <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-bold tracking-tighter leading-none">Contact</h1>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-3 sm:mt-0 self-end pb-2">
            [ START A DIALOGUE ]
          </div>
        </div>
      </div>

      {/* ── Body: info left + form right ────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-10 sm:gap-12 md:gap-16">

          {/* Left — info panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0"
          >
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
                Let's<br />collaborate.
              </h2>
              <p className="text-black/45 text-sm sm:text-base leading-relaxed">
                We're ready to architect your next product experience. Reach out to discuss your design challenges, a new engagement, or just to say hello.
              </p>
              <a
                href="mailto:hello@inputcube.com"
                className="inline-block text-black hover:text-brand-orange transition-colors text-sm sm:text-base font-semibold tracking-tight border-b border-black/15 hover:border-brand-orange pb-0.5 break-all"
              >
                hello@inputcube.com
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-black/10 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/70">inputcube.com</p>
              <p className="text-xs text-black/40">Operating Globally</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 min-w-0 bg-[#F5F5F5] p-6 sm:p-8 md:p-12 rounded-sm border border-black/5"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
                <div className="w-16 h-16 bg-black text-lime-400 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Message received</h3>
                <p className="text-black/50 max-w-xs">
                  Thanks for reaching out. We'll be in touch within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-7 sm:mb-10">Say hello</h3>

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                    {fields.map(({ id, name, label, placeholder, type }) => (
                      <div key={name} className="space-y-2 min-w-0">
                        <label htmlFor={id} className="block text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                          {label}
                          {(name === 'name' || name === 'email') && (
                            <span className="text-red-500 ml-1">*</span>
                          )}
                        </label>
                        <input
                          id={id}
                          name={name}
                          type={type}
                          placeholder={placeholder}
                          required={name === 'name' || name === 'email'}
                          className="w-full min-w-0 bg-transparent border-b border-black/10 py-2.5 focus:outline-none focus:border-black transition-colors placeholder:text-black/20 text-sm sm:text-base font-medium"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 min-w-0">
                    <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell us about your project..."
                      className="w-full min-w-0 bg-transparent border-b border-black/10 py-2.5 focus:outline-none focus:border-black transition-colors placeholder:text-black/20 text-sm sm:text-base font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-orange transition-all group"
                  >
                    Submit Inquiry
                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                    </div>
                  </button>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default ContactPage
