import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Layers, Search, Zap, Layout, Globe, Monitor, PenTool, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

export const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{
        minHeight: '100svh',
        background: 'linear-gradient(160deg, #0A0A0F 0%, #10080E 30%, #0D0C1A 60%, #050508 100%)',
      }}
    >
      {/* ── noise texture ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
        }}
      />

      {/* ── fine grid ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      {/* ── ambient color blobs ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-35"
          style={{ background: 'radial-gradient(circle, #FF5E00 0%, #FF2D00 30%, transparent 70%)' }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #6D28D9 0%, #4C1D95 35%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-12"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 55%)' }} />
        <div className="absolute top-10 left-10 w-[280px] h-[280px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 65%)' }} />
      </div>

      {/* ── ORB — large, centred, filling the visual core ────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="relative"
          style={{
            width: 'clamp(280px, 72vw, 600px)',
            height: 'clamp(280px, 72vw, 600px)',
            animation: 'orb-float 8s ease-in-out infinite',
          }}
        >
          <div className="absolute inset-0 sphere-glow scale-[1.55] opacity-75" />
          <div
            className="absolute inset-0 rounded-full scale-[1.25] opacity-60"
            style={{
              background: 'conic-gradient(from 90deg, rgba(59,130,246,0.8), rgba(251,191,36,0.7), rgba(239,68,68,0.7), rgba(109,40,217,0.6), rgba(59,130,246,0.8))',
              filter: 'blur(50px)',
              animation: 'orb-spin-rev 18s linear infinite',
            }}
          />
          <div
            className="absolute inset-0 rounded-full overflow-hidden border border-orange-400/40"
            style={{
              background: 'radial-gradient(circle at 36% 30%, rgba(255,180,80,0.50) 0%, rgba(255,100,30,0.32) 35%, rgba(120,60,200,0.22) 65%, rgba(10,10,20,0.05) 100%)',
              boxShadow: '0 0 120px rgba(251,146,60,0.55), 0 0 240px rgba(109,40,217,0.28), inset 0 0 80px rgba(255,255,255,0.07)',
            }}
          >
            <div className="absolute inset-0 sphere-particles opacity-20 mix-blend-screen" />
            <div className="absolute top-[20%] left-0 right-0 h-[1.5px] overflow-hidden" style={{ transform: 'rotate(-15deg)' }}>
              <div
                className="h-full w-[40%] bg-gradient-to-r from-transparent via-white/80 to-transparent"
                style={{ animation: 'shimmer-x 3.5s ease-in-out infinite' }}
              />
            </div>
            <div className="absolute top-[16%] left-[24%] w-4 h-4 rounded-full bg-orange-200/50 blur-sm" />
            <div className="absolute top-[26%] left-[38%] w-2 h-2 rounded-full bg-white/40 blur-[2px]" />
          </div>
          <div className="absolute inset-0 rounded-full border border-orange-500/35" style={{ animation: 'pulse-ring 4s ease-in-out infinite' }} />
          <div className="absolute inset-[-5%] rounded-full border border-violet-400/20" style={{ animation: 'pulse-ring 4s ease-in-out infinite 1.3s' }} />
          <div className="absolute inset-[-11%] rounded-full border border-blue-400/12" style={{ animation: 'pulse-ring 4s ease-in-out infinite 2.6s' }} />
          <div className="absolute inset-[-19%] rounded-full border border-orange-300/08" style={{ animation: 'pulse-ring 5s ease-in-out infinite 0.6s' }} />
        </div>
      </div>

      {/* ── CONTENT stack — fills the whole height intentionally ──── */}
      <div className="relative z-10 flex flex-col flex-1" style={{ minHeight: '100svh' }}>

        {/* TOP ZONE: tagline pill + headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col gap-5 px-5 sm:px-8 md:px-12 pt-24 sm:pt-28"
        >
          {/* pill label */}
          <div className="flex items-center gap-2 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Enterprise UX · Design Systems · Product Research
            </span>
          </div>

          {/* MOBILE headline — 3 stacked lines, large */}
          <h2
            className="sm:hidden font-black uppercase tracking-tight leading-[0.88] text-white"
            style={{ fontSize: 'clamp(2.4rem, 10.5vw, 7.5rem)' }}
          >
            <span className="block">Interfaces</span>
            <span className="block" style={{ color: '#FF5E00' }}>Built to</span>
            <span className="block text-white/90">Perform.</span>
          </h2>

          {/* DESKTOP headline — two compact lines, sized to not overpower */}
          <h2
            className="hidden sm:block font-black uppercase tracking-tight leading-[0.9] text-white"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 4.8rem)' }}
          >
            <span className="block">Interfaces</span>
            <span>
              <span style={{ color: '#FF5E00' }}>Built to </span>
              <span className="text-white/90">Perform.</span>
            </span>
          </h2>
        </motion.div>

        {/* BOTTOM ZONE: scroll hint + wordmark — pushed to very bottom */}
        <div className="flex-1 flex flex-col justify-end">

          {/* scroll nudge — centred to align with the orb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mb-4 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/25 font-medium">Scroll to explore</span>
            <div
              className="w-px h-10 sm:h-12"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
            />
          </motion.div>

          {/* wordmark — full-bleed on mobile, right-aligned + smaller on desktop */}
          <div className="relative pb-0 leading-none overflow-hidden">
            {/* MOBILE: full width, flush left */}
            <motion.h1
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="sm:hidden font-black uppercase tracking-tighter leading-[0.84] w-full whitespace-nowrap px-3"
              style={{ fontSize: 'clamp(3.4rem, 17vw, 19rem)' }}
            >
              <span className="text-white">Input</span>
              <span style={{ color: '#FF5E00' }}>Cube</span>
            </motion.h1>

            {/* DESKTOP: smaller, right-aligned */}
            <motion.h1
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="hidden sm:block font-black uppercase tracking-tighter leading-[0.84] whitespace-nowrap text-right px-5 md:px-8"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 8.5rem)' }}
            >
              <span className="text-white">Input</span>
              <span style={{ color: '#FF5E00' }}>Cube</span>
            </motion.h1>
          </div>
        </div>

      </div>
    </section>
  )
}

export const AboutSection = () => (
  <section className="py-16 sm:py-24 md:py-32 px-5 sm:px-8 bg-white text-black overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Mission text */}
      <div className="grid grid-cols-12 gap-6 sm:gap-8 mb-16 sm:mb-24 md:mb-32">
        <div className="col-span-12 md:col-span-1 text-[10px] font-medium uppercase tracking-widest text-black/40 mb-2 md:mb-0">[01] MISSION</div>
        <div className="col-span-12 md:col-span-5 md:col-start-7">
          <p className="text-base sm:text-lg leading-relaxed text-black/80">
            For years, traditional design studios treated digital interfaces as mere decoration — disconnected from business logic and technical execution. At Inputcube, we operate on a fundamentally different paradigm. We combine rigorous behavioral research with systems engineering to build interfaces that eliminate cognitive friction, scale effortlessly, and align with enterprise infrastructure.
          </p>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-12 gap-6 sm:gap-8 items-end">
        <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight">Structural Clarity.<br />Global Scale.</h2>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-4 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="aspect-square w-full hatched-pattern border border-black/5 rounded-sm relative group hidden sm:block">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-medium mb-1">50+</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-black/40">Enterprise Products Designed & Delivered.</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 sm:translate-y-12">
            <div className="aspect-[4/5] w-full hatched-pattern border border-black/5 rounded-sm relative group hidden sm:block">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-medium mb-1">3x</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-black/40">Average Productivity Lift for B2B SaaS Clients.</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="aspect-[5/6] w-full hatched-pattern border border-black/5 rounded-sm relative group hidden sm:block">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-medium mb-1">100%</p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-black/40">Design-to-Code Handoff Accuracy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const ServicesSection = () => {
  const services = [
    {
      title: "Cognitive & Product Research",
      description: "We map user journeys, diagnose workflow friction, and audit enterprise bottlenecks before a single wireframe is drawn.",
      icon: Search,
    },
    {
      title: "User Journey Diagnostics",
      description: "End-to-end journey mapping that surfaces friction points across every touchpoint in your enterprise product.",
      icon: Monitor,
    },
    {
      title: "Behavioral Usability Testing",
      description: "Real-user testing sessions that validate design decisions and expose cognitive load issues before they ship.",
      icon: PenTool,
    },
    {
      title: "Enterprise Bottleneck Audits",
      description: "Structural audits of existing SaaS interfaces to identify where users slow down, drop off, or make errors.",
      icon: Database,
    },
    {
      title: "B2B SaaS Dashboard Architecture",
      description: "We design high-density dashboards that reduce cognitive friction and accelerate decision-making at scale.",
      icon: Layout,
    },
    {
      title: "Data Visualization & Control Systems",
      description: "Complex data made legible — charts, tables, and control interfaces engineered for operational velocity.",
      icon: Zap,
    },
    {
      title: "Design Systems & Component Libraries",
      description: "Living component libraries with full UI tokenization — designed for seamless design-to-code integration.",
      icon: Layers,
    },
    {
      title: "Cross-Platform Interface Design",
      description: "Consistent, performant interfaces across web, mobile, and desktop — built on a single design system foundation.",
      icon: Globe,
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#EAE8E4] text-black">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-10 sm:mb-16 max-w-2xl leading-tight px-5 sm:px-8">
          End-to-End Design<br />Engineered to Scale
        </h2>

        {/* ── MOBILE: one-card-per-view horizontal snap slider ───── */}
        <div className="sm:hidden">
          {/* Slider track — each card is exactly viewport width minus outer padding */}
          <div
            className="flex overflow-x-auto snap-x snap-mandatory px-5 pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', gap: '12px' }}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                /* Exactly one card visible at a time — no peeking neighbour */
                className="flex-shrink-0 snap-center bg-[#E1DFDB] p-6 flex flex-col justify-between"
                style={{ width: 'calc(100vw - 40px)', minHeight: '240px' }}
              >
                {/* Top: icon + index */}
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 flex items-center justify-center border border-black/10 rounded-sm bg-white/60">
                    <service.icon className="w-5 h-5 text-black/50" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/20">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Bottom: title + description */}
                <div className="mt-8 space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight leading-snug">{service.title}</h3>
                  <p className="text-sm text-black/50 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <p className="text-[10px] uppercase tracking-widest text-black/30 text-center mt-3 px-5">
            Swipe to explore →
          </p>

          {/* CTA card — static, full width, directly below slider */}
          <div className="mx-5 mt-4 bg-[#D6D3CF] p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight leading-snug">
                Have a complex design challenge?
              </h3>
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center border border-black/10 rounded-sm bg-white/40">
                <Globe className="w-5 h-5 text-black/40" />
              </div>
            </div>
            <p className="text-sm text-black/50 leading-relaxed">
              Tell us about it — we'll architect the right solution.
            </p>
            <Link
              to="/contact"
              className="self-start bg-[#C8C5BF] hover:bg-black hover:text-white text-black px-6 py-3 rounded-full text-sm font-bold transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* ── TABLET + DESKTOP: original 2-col / 4-col grid ──────── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-1 px-5 sm:px-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 md:p-12 aspect-square flex flex-col justify-between transition-colors cursor-pointer group bg-[#E1DFDB] hover:bg-[#D6D3CF]"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-sm bg-white/50 group-hover:bg-white transition-colors">
                <service.icon className="w-6 h-6 text-black/40 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-base md:text-xl font-medium tracking-tight leading-tight">{service.title}</h3>
            </div>
          ))}
          {/* CTA — spans 2 cols */}
          <div className="col-span-2 bg-[#D6D3CF] p-8 md:p-12 flex flex-col justify-between min-h-[250px] md:min-h-[300px]">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-2xl font-medium tracking-tight">Have a complex design challenge?</h3>
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-black/10 rounded-sm">
                <Globe className="w-6 h-6 text-black/40" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mt-6">
              <p className="text-black/40 text-sm max-w-xs">Tell us about it — we'll architect the right solution.</p>
              <Link
                to="/contact"
                className="bg-[#CAC7C2] hover:bg-black hover:text-white text-black px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export const CommitmentsSection = () => (
  <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-8 bg-[#F5F5F5] text-black border-t border-black/5">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight mb-12 sm:mb-20 max-w-3xl">Five commitments<br />at the service of your product.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border-t border-black/10">
        {[
          { title: "Behavioral Precision", desc: "Every design decision is grounded in user research, workflow mapping, and cognitive load analysis." },
          { title: "Systems Thinking", desc: "We architect interfaces as living systems — scalable, tokenized, and built for engineering hand-off." },
          { title: "Enterprise Expertise", desc: "Our team brings deep experience designing high-density B2B dashboards and mission-critical control systems." },
          { title: "Radical Transparency", desc: "We share process, rationale, and progress openly. No black boxes — just collaborative, structured delivery." },
          { title: "Global Reach", desc: "Our interfaces are designed to perform across languages, markets, and enterprise environments worldwide." }
        ].map((item, idx) => (
          <div key={idx} className="p-6 sm:p-8 border-b border-black/10 sm:border-r sm:last:border-r-0 md:border-b-0">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 leading-tight">{item.title}</h3>
            <p className="text-sm text-black/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export const PricingSection = () => (
  <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-8 bg-white text-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 pt-0 md:pt-8 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight mb-8 sm:mb-12">Built for momentum,<br />not contracts.</h2>
          <p className="text-black/40 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-sm">Many partnerships start with a focused project and evolve into an embedded design function. We grow with your product.</p>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest group w-fit"
          >
            Get in touch
            <span className="w-6 h-6 bg-white/10 text-white flex items-center justify-center rounded-sm ml-2 group-hover:bg-brand-orange transition-colors">
              <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
            </span>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#F5F5F5] p-6 sm:p-8 rounded-xl flex flex-col h-full border border-black/5">
            <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-4 sm:mb-6">ON-GOING</span>
            <div className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 sm:mb-12 tracking-tighter">₹40,000</div>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 flex-grow">
              {['UI/UX design, every sprint', 'Weekly planning & design review', 'Async-first collaboration', 'Iterative feature delivery', 'Revisions & improvements', 'Pause or cancel anytime'].map((feature, i) => (
                <li key={i} className="text-sm font-medium border-b border-black/5 pb-2 last:border-0">{feature}</li>
              ))}
            </ul>
            <Link to="/contact" className="flex items-center justify-between bg-[#E0E0E0] hover:bg-black hover:text-white transition-all px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest group">
              Get in touch
              <span className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm group-hover:bg-brand-orange transition-colors">
                <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
              </span>
            </Link>
          </div>
          <div className="bg-[#1A0500] text-white p-6 sm:p-8 rounded-xl flex flex-col h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] -mr-32 -mt-32"></div>
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-4 sm:mb-6 relative z-10">EMBEDDED</span>
            <div className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 sm:mb-12 tracking-tighter relative z-10">₹60,000</div>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 flex-grow relative z-10">
              {['Full-scope design, full throttle', 'Priority queue — your work ships first', 'Design system governance included', 'Two parallel workstreams', '48h average turnaround', 'Pause or cancel anytime'].map((feature, i) => (
                <li key={i} className="text-sm font-medium border-b border-white/5 pb-2 last:border-0">{feature}</li>
              ))}
            </ul>
            <Link to="/contact" className="flex items-center justify-between bg-white text-black hover:bg-brand-orange hover:text-white transition-all px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest group relative z-10">
              Get in touch
              <span className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight className="w-3 h-3 rotate-[-45deg] group-hover:text-brand-orange" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const NewsroomSection = () => {
  return (
    <section className="py-24 px-8 bg-white text-black border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-black/10 pb-8 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Newsroom</h2>
          <Link to="/blog" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors mb-2">View Newsroom</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-black/5 p-1">
          {blogPosts.slice(0, 3).map((article, idx) => (
            <Link key={idx} to={`/blog/${article.id}`} className="group bg-white p-12 aspect-square flex flex-col justify-between hover:bg-black transition-all duration-500">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 group-hover:text-white/40">{article.category}</span>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-white transition-colors leading-tight">
                  {article.title}
                </h3>
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-black/5 group-hover:border-white/10 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-white/40">{article.date}</span>
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-white/10 group-hover:text-brand-orange transition-all">
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
