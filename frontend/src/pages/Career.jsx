import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Plus, Minus, Zap, Heart, Target, Cpu, Layout, Layers, Smartphone, PenTool } from 'lucide-react'
import SEO from '../components/SEO'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-black/10 py-5 sm:py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start gap-4 text-left group"
      >
        <span className="text-base sm:text-lg font-medium group-hover:text-black/60 transition-colors leading-snug">{question}</span>
        <span className="flex-shrink-0 mt-0.5">
          {isOpen ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm sm:text-base text-black/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const CareerPage = () => {
  const benefits = [
    {
      title: "Radical Transparency",
      description: "A culture where design decisions, project rationale, and company direction are shared openly across the team.",
      icon: <Heart className="w-6 h-6" />,
      bg: "bg-[#F5F5F5]",
      text: "text-black"
    },
    {
      title: "Exponential Growth",
      description: "Work on complex enterprise systems that push your craft — systems thinking, research, and execution at scale.",
      icon: <Target className="w-6 h-6" />,
      bg: "bg-[#EAE8E4]",
      text: "text-black"
    },
    {
      title: "Sovereign Impact",
      description: "Your design decisions ship into products used by thousands of enterprise users globally. Real impact, measurable outcomes.",
      icon: <Zap className="w-6 h-6" />,
      bg: "bg-[#FFF4BC]",
      text: "text-black"
    },
    {
      title: "Elite Tooling",
      description: "Best-in-class design tooling — Figma, Framer, Storybook, and the full modern design-to-code stack.",
      icon: <Cpu className="w-6 h-6" />,
      bg: "bg-[#1A1A1A]",
      text: "text-white"
    }
  ]

  const jobs = [
    {
      title: "Senior Product Designer",
      description: "Lead the design of intuitive, scalable interfaces for enterprise SaaS platforms. Own end-to-end UX from research to engineering hand-off.",
      salary: "₹25L/yr",
      type: "Full Time",
      location: "Remote / Global",
      icon: <PenTool className="w-6 h-6 text-black/40" />
    },
    {
      title: "UI/UX Designer — Design Systems",
      description: "Architect and maintain living component libraries and design tokens. Bridge the gap between design and code with precision.",
      salary: "₹20L/yr",
      type: "Full Time",
      location: "Remote / Global",
      icon: <Layout className="w-6 h-6 text-black/40" />
    },
    {
      title: "UX Researcher",
      description: "Drive behavioral research, usability testing, and information architecture for complex enterprise workflows and B2B products.",
      salary: "₹22L/yr",
      type: "Full Time",
      location: "Remote / Global",
      icon: <Layers className="w-6 h-6 text-black/40" />
    },
    {
      title: "Sales Executive",
      description: "Own the full sales cycle — prospect enterprise clients, articulate our design value proposition, and close partnerships that matter.",
      salary: "₹12L/yr + incentives",
      type: "Full Time",
      location: "Remote / India",
      icon: <Zap className="w-6 h-6 text-black/40" />
    },
    {
      title: "Frontend Developer",
      description: "Build pixel-perfect, performant web interfaces from our design system. Deep expertise in React, TypeScript, and animation a must.",
      salary: "₹18L/yr",
      type: "Full Time",
      location: "Remote / Global",
      icon: <Cpu className="w-6 h-6 text-black/40" />
    },
    {
      title: "Spring Boot Developer",
      description: "Architect and develop scalable backend services and REST APIs using Spring Boot. Collaborate closely with the product and design teams.",
      salary: "₹20L/yr",
      type: "Full Time",
      location: "Remote / India",
      icon: <Target className="w-6 h-6 text-black/40" />
    },
  ]

  const faqs = [
    {
      question: "Is the onboarding process immediate?",
      answer: "Yes — once you join, you'll have access to all our internal tools, design systems, and project context from day one."
    },
    {
      question: "What is your stance on remote work?",
      answer: "We are a remote-first studio. We prioritize deep-focus work and asynchronous collaboration across time zones."
    },
    {
      question: "Are there growth opportunities for mid-level designers?",
      answer: "Absolutely. We invest in mentorship, structured feedback, and give designers increasing ownership of client projects as they grow."
    },
    {
      question: "What is the interview philosophy?",
      answer: "We focus on craft, process, and how you think — not just portfolios. We want to understand how you approach a complex design problem from research to final delivery."
    }
  ]

  return (
    <div className="bg-white text-black min-h-screen pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-24 font-sans overflow-x-hidden">
      <SEO 
        title="Careers at InputCube | Join Our Design Studio"
        description="Join InputCube. Explore open roles for Product Designers, Design Systems Specialists, and UX Researchers. Build enterprise interfaces that scale globally."
        canonical="/career"
        keywords="careers, UI UX design jobs, product designer remote, design systems job, UX researcher"
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-black/10 pb-6 sm:pb-8 mb-10 sm:mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter leading-none">Careers</h1>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-3 sm:mt-0">
            [ 2026 // EDITION ]
          </div>
        </div>

        {/* Intro Section */}
        <div className="mb-16 sm:mb-24 md:mb-32">
          <p className="text-lg sm:text-xl md:text-3xl font-medium leading-tight tracking-tight max-w-3xl md:ml-auto md:max-w-[50%]">
            [ We are looking for opinionated designers, sharp researchers, and 
            systems thinkers who want to build the future of enterprise product 
            design. Join us in shaping interfaces that scale globally. ]
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-[#F5F5F5] border border-black/5 rounded-sm overflow-hidden mb-16 sm:mb-32">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
            alt="InputCube design team working" 
            className="w-full h-full object-cover grayscale-[0.2]"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Working with us</h2>
            <p className="text-black/40 text-base leading-relaxed max-w-md">
              Discover a design studio where your craft is valued, your voice shapes direction, and your work ships into real enterprise products used at scale.
            </p>
          </div>

          {/* Mobile: horizontal slider. sm+: 2-col grid. lg+: 4-col grid */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-1 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 snap-x snap-mandatory sm:snap-none -mx-5 sm:mx-0 px-5 sm:px-0">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${benefit.bg} ${benefit.text} p-8 flex-shrink-0 w-[75vw] sm:w-auto aspect-square flex flex-col justify-between group hover:brightness-95 transition-all snap-center`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-black/10 rounded-sm ${benefit.bg === 'bg-[#1A1A1A]' ? 'bg-white/10' : 'bg-white'}`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 tracking-tight">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm opacity-60 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Scroll hint on mobile */}
          <p className="sm:hidden text-[10px] uppercase tracking-widest text-black/30 text-center mt-3">Swipe to explore →</p>
        </div>

        {/* Innovation Section */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-12 mb-16 sm:mb-32 items-center">
          <div className="md:col-span-5 mb-8 md:mb-0 text-center md:text-left overflow-hidden">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
              Driven by research,<br />
              built for scale.
            </h2>
            <p className="text-black/60 mb-8 text-sm sm:text-base leading-relaxed mx-auto md:mx-0 max-w-sm">
              We create interfaces that empower enterprise teams, reduce cognitive friction, and unlock measurable business outcomes — for the next generation of global products.
            </p>
            <button 
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-500 transition-all"
            >
              View Open Positions
            </button>
          </div>
          <div className="md:col-span-7 w-full aspect-[4/3] bg-[#F5F5F5] border border-black/5 rounded-sm overflow-hidden mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" 
              alt="Inputcube team brainstorming" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Open Positions */}
        <div id="open-positions" className="mb-16 sm:mb-32">
          <div className="flex justify-between items-end border-b border-black/10 pb-6 sm:pb-8 mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Open Positions</h2>
            <p className="text-black/30 text-sm font-bold uppercase tracking-widest mb-1 sm:mb-2">[ {jobs.length} VACANCIES ]</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-black/5 p-1">
            {jobs.map((job, i) => (
              <Link 
                key={i}
                to="/apply"
                className="block"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 sm:p-10 md:p-12 min-h-[280px] sm:aspect-square flex flex-col justify-between group hover:bg-black transition-all duration-500"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F5F5F5] rounded-sm flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    {job.icon}
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-0">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-white transition-colors">{job.title}</h3>
                    <p className="text-sm text-black/40 group-hover:text-white/40 line-clamp-2 leading-relaxed transition-colors">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-6 sm:pt-8 border-t border-black/5 group-hover:border-white/10 transition-colors mt-6 sm:mt-0">
                    <div className="flex gap-3 sm:gap-4 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-white/40">{job.type}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-white/40">{job.location}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:text-brand-orange transition-all flex-shrink-0" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16 sm:mb-32">
          <div className="col-span-12 lg:col-span-5 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 sm:mb-8">FAQ's</h2>
            <p className="text-black/40 mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg max-w-sm">
              Common questions about our recruitment process, design culture, and what it's like to craft at InputCube.
            </p>
            <Link to="/contact" className="text-black font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:text-brand-orange transition-colors">
              Still have questions? <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-7">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#1A1A1A] text-white p-8 sm:p-12 md:p-24 rounded-sm flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#bef264 0.5px, transparent 0.5px)', backgroundSize: '12px 12px' }}></div>
          
          <div className="max-w-xl relative z-10 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 sm:mb-12">
              Embark on a <br />
              <span className="text-lime-400 italic">design journey</span>
            </h2>
            <p className="text-white/40 mb-8 sm:mb-12 leading-relaxed text-base sm:text-lg max-w-md">
              Join a studio that values craft, systems thinking, and measurable product impact at enterprise scale.
            </p>
            <Link to="/contact" className="bg-white text-black px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-lime-400 transition-all inline-block">
              Apply Now
            </Link>
          </div>
          
          <div className="hidden md:grid grid-cols-3 gap-2 opacity-20 relative z-10">
             {[...Array(9)].map((_, i) => (
               <div key={i} className="w-20 h-20 bg-white/10 rounded-sm overflow-hidden border border-white/10 flex items-center justify-center">
                 <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerPage
