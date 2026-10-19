import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Send, Upload, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const ApplyJob = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-32 md:pt-48 pb-32 bg-white text-black min-h-screen font-sans flex items-center justify-center px-6">
        <SEO
          title="Application Submitted | Inputcube Careers"
          description="Your application has been submitted to Inputcube Design Studio."
          canonical="/apply"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#F5F5F5] p-12 rounded-sm border border-black/5 text-center space-y-8"
        >
          <div className="w-20 h-20 bg-black text-lime-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Application Sent</h2>
            <p className="text-black/60 leading-relaxed">
              Thank you for applying. Our talent team will review your profile and get back to you shortly.
            </p>
          </div>
          <Link
            to="/career"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-orange transition-colors"
          >
            Back to Careers
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-32 bg-white text-black min-h-screen font-sans">
      <SEO
        title="Apply — Join Inputcube Design Studio"
        description="Apply for a role at Inputcube Design Studio. We're hiring Product Designers, Design Systems Specialists, and UX Researchers. Remote-first, global impact."
        canonical="/apply"
        keywords="apply Inputcube, design job application, UI UX designer jobs India, remote design jobs"
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-black/10 pb-6 sm:pb-8 mb-10 sm:mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-none">Apply</h1>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-3 sm:mt-0">
            [ JOIN THE TEAM ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

          {/* Sticky Left Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-32 space-y-8 sm:space-y-12">
              <Link to="/career" className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Careers</span>
              </Link>

              <div className="space-y-4">
                <p className="text-black/60 leading-relaxed text-sm">
                  We're looking for opinionated designers, sharp researchers, and systems thinkers who want to build the future of enterprise product design.
                </p>
              </div>

              <div className="pt-8 sm:pt-12 space-y-6 sm:space-y-8 border-t border-black/5">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">Email</p>
                  <a href="mailto:careers@inputcube.com" className="text-sm font-medium hover:text-brand-orange transition-colors">
                    careers@inputcube.com
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">Location</p>
                  <p className="text-sm font-medium leading-relaxed">Jaipur, India · Remote Global</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="md:col-span-8 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#F5F5F5] p-6 sm:p-8 md:p-16 rounded-sm border border-black/5"
            >
              <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-16" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                  <div className="space-y-3">
                    <label htmlFor="apply-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apply-name"
                      required
                      name="fullName"
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/10 text-lg sm:text-xl font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="apply-email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="apply-email"
                      required
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/10 text-lg sm:text-xl font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="apply-portfolio" className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                      LinkedIn / Portfolio
                    </label>
                    <input
                      id="apply-portfolio"
                      name="portfolio"
                      type="url"
                      placeholder="URL"
                      className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/10 text-lg sm:text-xl font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="apply-ctc" className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                      Expected CTC
                    </label>
                    <input
                      id="apply-ctc"
                      name="expectedCTC"
                      type="text"
                      placeholder="In Lakhs (LPA)"
                      className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/10 text-lg sm:text-xl font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                    Resume / CV
                  </label>
                  <div className="relative group">
                    <input
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      aria-label="Upload your resume or CV"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="border border-dashed border-black/10 rounded-sm p-12 text-center group-hover:border-black/20 group-hover:bg-black/5 transition-all">
                      <Upload className="w-10 h-10 text-black/10 mx-auto mb-4 group-hover:text-black/40 transition-colors" />
                      <p className="text-sm font-medium text-black/40">Drag and drop or click to upload</p>
                      <p className="text-[10px] text-black/20 mt-2 uppercase tracking-widest">PDF, DOCX (Max 5MB)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="apply-why" className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                    Why Inputcube?
                  </label>
                  <textarea
                    id="apply-why"
                    name="whyInputcube"
                    rows="3"
                    placeholder="Tell us about your design philosophy..."
                    className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/10 text-xl font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-fit bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-orange transition-all group"
                >
                  Submit Application
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ApplyJob
