import React from 'react'
import SEO from '../components/SEO'
import { Hero, AboutSection, ServicesSection, CommitmentsSection, PricingSection, NewsroomSection } from '../components/Sections'

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Inputcube — Enterprise UI/UX Design Studio"
        description="Inputcube is India's leading enterprise UI/UX design studio. We build B2B SaaS dashboards, design systems, and product interfaces that scale globally. Research-led, systems-built."
        canonical="/"
        keywords="enterprise UI UX design agency India, B2B SaaS design studio, design systems agency, product design India, UI UX design company Jaipur, best UI UX agency India 2026"
      />
      <h1 className="sr-only">Inputcube — Enterprise UI/UX Design Studio India | B2B SaaS & Design Systems</h1>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CommitmentsSection />
      <PricingSection />
      <NewsroomSection />
    </div>
  )
}

export default Home
