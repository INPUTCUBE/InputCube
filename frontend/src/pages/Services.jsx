import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "Cognitive & Product Research",
      subServices: [
        "Advanced User Journey Diagnostics",
        "Workflow Mapping",
        "Behavioral Usability Testing",
        "Information Architecture",
        "Enterprise Bottleneck Audits for SaaS",
      ],
      description: "We don't design in the dark. Every project begins with rigorous behavioral research — mapping user journeys, diagnosing workflow friction, and auditing enterprise bottlenecks. Our research phase produces a precise structural brief that drives every design decision downstream.",
      tools: ["Maze", "Hotjar", "Figma", "Miro", "UserTesting", "Dovetail"],
    },
    {
      title: "Enterprise UI/UX Design",
      subServices: [
        "Complex B2B SaaS Dashboard Architecture",
        "High-Density Data Visualization",
        "Control Systems & Admin Interfaces",
        "Cross-Platform Mobile & Web Design",
        "Accessibility & WCAG Compliance",
      ],
      description: "We architect interfaces for enterprise complexity — multi-layered B2B dashboards, high-density data visualization systems, and cross-platform control interfaces. We design for operational velocity, not visual trends. Every screen is engineered to reduce cognitive load and accelerate decision-making.",
      tools: ["Figma", "Principle", "Framer", "Protopie", "Lottie", "Storybook"],
    },
    {
      title: "Design Systems & Engineering Hand-off",
      subServices: [
        "Living Component Library Architecture",
        "UI Tokenization",
        "Design-to-Code Framework Integration",
        "Ongoing Design System Governance",
        "Developer Documentation",
      ],
      description: "A design system is the foundation of scalable product development. We architect living component libraries with full UI tokenization, ensuring seamless design-to-code integration. We don't hand off and disappear — we maintain, govern, and evolve your design system as your product scales.",
      tools: ["Figma", "Tokens Studio", "Storybook", "Zeroheight", "Supernova", "React"],
    },
  ]

  return (
    <div className="pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-24 bg-white text-black min-h-screen font-sans">
      <SEO 
        title="Enterprise UI/UX Design Services | InputCube"
        description="InputCube delivers end-to-end design solutions: Cognitive Research, Enterprise UI/UX, B2B SaaS Dashboard Architecture, and Design Systems engineered to scale globally."
        canonical="/services"
        keywords="enterprise UI UX design, B2B SaaS design, design systems, component library, information architecture, UX research"
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-baseline border-b border-black/10 pb-6 sm:pb-8 mb-10 sm:mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter leading-none">Services</h1>
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/30 mt-3 sm:mt-0">
            [ 2026 // EDITION ]
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className="mb-16 sm:mb-24 md:mb-32">
          <p className="text-lg sm:text-xl md:text-3xl font-medium leading-tight tracking-tight max-w-3xl md:ml-auto md:max-w-[50%]">
            [ We deliver end-to-end design solutions engineered to scale seamlessly 
            across global markets — combining rigorous behavioral research with 
            systems engineering for structural clarity and long-term impact. ]
          </p>
        </div>

        {/* Service Rows */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {serviceCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-12 gap-8 md:gap-12"
            >
              {/* Left Column: Title & Sub-services */}
              <div className="col-span-12 md:col-span-4 space-y-4 sm:space-y-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">{category.title}</h2>
                <ul className="flex flex-wrap md:flex-col gap-2 sm:gap-3">
                  {category.subServices.map((sub, i) => (
                    <li key={i} className="text-xs sm:text-sm font-medium text-black/40 hover:text-black transition-colors cursor-default bg-black/5 md:bg-transparent px-3 py-1 md:p-0 rounded-full md:rounded-none">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Description & Tools */}
              <div className="col-span-12 md:col-span-8 space-y-8 sm:space-y-12">
                <p className="text-base sm:text-lg leading-relaxed text-black/70">
                  {category.description}
                </p>
                
                {/* Tools Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 bg-[#F5F5F5] border border-black/5 p-1 rounded-sm">
                  {category.tools.map((tool, i) => (
                    <div key={i} className="bg-white p-4 sm:p-6 flex flex-col items-center justify-center aspect-square group hover:bg-black transition-all duration-500 relative gap-3">
                      <div className="text-[9px] sm:text-[10px] font-bold text-black/20 uppercase tracking-widest group-hover:text-white/40">Tool</div>
                      <div className="w-10 h-10 sm:w-14 sm:h-14 opacity-40 group-hover:opacity-100 group-hover:invert transition-all duration-500 transform group-hover:scale-110">
                        <img 
                          src={`https://cdn.simpleicons.org/${tool.toLowerCase().replace(/\s+/g, '').replace('.', '')}`} 
                          alt={tool}
                          className="w-full h-full object-contain"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      </div>
                      <div className="text-xs sm:text-sm font-bold tracking-tight group-hover:text-white transition-colors text-center">{tool}</div>
                    </div>
                  ))}
                  {/* Learn More → Contact */}
                  <Link 
                    to="/contact"
                    className="bg-[#EBEBEB] p-4 sm:p-6 flex flex-col items-center justify-center aspect-square group hover:bg-black transition-all duration-500 cursor-pointer gap-3"
                  >
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-black/30 group-hover:text-white transition-colors" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors text-center">Learn More</span>
                  </Link>
                </div>
              </div>
              
              {/* Bottom Border */}
              <div className="col-span-12 h-[1px] bg-black/5 mt-8 sm:mt-12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
