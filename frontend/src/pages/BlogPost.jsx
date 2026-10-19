import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import { blogPosts } from '../data/blogData'
import SEO from '../components/SEO'

const BlogPostPage = () => {
  const { id } = useParams()
  // Support both numeric ids and potential string ids; fall back to first post
  const postId = parseInt(id, 10)
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0]

  return (
    <div className="pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-24 bg-white text-black min-h-screen font-sans">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
        ogType="article"
        ogImage={post.image}
        keywords={`${post.category}, UI UX design insights, Inputcube blog, enterprise design, ${post.author}`}
        articleSchema={{
          datePublished: post.date,
          dateModified: post.date,
          author: post.author,
        }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Back Button */}
        <div className="mb-8 sm:mb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Newsroom</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-10 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="px-3 sm:px-4 py-1.5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1] mb-8 sm:mb-12 max-w-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-between gap-6 py-6 sm:py-8 border-y border-black/10">
            <div className="flex items-center gap-6 sm:gap-12 flex-wrap">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-1">Author</p>
                <p className="text-sm font-bold">{post.author}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-1">Read Time</p>
                <p className="text-sm font-bold">{post.readTime}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 sm:gap-3 text-black hover:text-brand-orange transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">Share</span>
              <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden mb-12 sm:mb-24 border border-black/5">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Section — centered column */}
        <div className="max-w-3xl mx-auto">
          <div className="text-base sm:text-lg md:text-xl leading-relaxed text-black/70 whitespace-pre-line font-medium mb-16 sm:mb-24">
            {post.content.includes('[Enterprise Data Pipeline]') ? (
              <>
                {post.content.split('[Enterprise Data Pipeline]')[0]}
                {/* Scrollable diagram */}
                <div className="my-10 sm:my-16 -mx-5 sm:mx-0 overflow-x-auto">
                  <div className="bg-[#F5F5F5] border border-black/5 rounded-sm p-6 sm:p-8 min-w-[520px] mx-5 sm:mx-0">
                    <div className="flex items-center gap-3 sm:gap-4 justify-center py-4">
                      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border border-black/10 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest text-center shadow-sm">
                        Enterprise Data<br/>Pipeline
                      </div>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black/20 flex-shrink-0" />
                      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-black text-white rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest text-center shadow-lg">
                        Zero-Knowledge<br/>Encryption Layer
                      </div>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black/20 flex-shrink-0" />
                      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border border-black/10 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest text-center shadow-sm">
                        Sovereign<br/>Infrastructure
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 text-center mt-4 sm:mt-6">
                      (Decryption keys held ONLY by client)
                    </p>
                  </div>
                </div>
                {post.content.split('(Decryption keys held ONLY by client)')[1]}
              </>
            ) : post.content}
          </div>

          {/* Technical Specifications — scrollable table on mobile */}
          <div className="pt-12 sm:pt-24 border-t border-black/10">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter mb-8 sm:mb-12">Technical Specifications & Performance</h3>
            <div className="-mx-5 sm:mx-0 overflow-x-auto">
              <div className="min-w-[500px] mx-5 sm:mx-0 overflow-hidden border border-black/10 rounded-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="px-5 sm:px-8 py-4 sm:py-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Metric</th>
                      <th className="px-5 sm:px-8 py-4 sm:py-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Inputcube v2.0</th>
                      <th className="px-5 sm:px-8 py-4 sm:py-6 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Industry Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10 bg-[#F5F5F5]">
                    <tr>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 font-bold text-sm whitespace-nowrap">Threat Detection Latency</td>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 text-sm text-brand-orange font-bold">0.42 ms</td>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 text-sm text-black/40">15.00 ms</td>
                    </tr>
                    <tr>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 font-bold text-sm whitespace-nowrap">Encryption Protocol</td>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 text-sm">Post-Quantum AES-512</td>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 text-sm text-black/40">AES-256</td>
                    </tr>
                    <tr>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 font-bold text-sm whitespace-nowrap">Uptime Guarantee</td>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 text-sm font-bold">99.999%</td>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 text-sm text-black/40">99.9%</td>
                    </tr>
                    <tr>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 font-bold text-sm whitespace-nowrap">Data Sovereign Nodes</td>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 text-sm">12 (Across India)</td>
                      <td className="px-5 sm:px-8 py-4 sm:py-6 text-sm text-black/40">Centralized Cloud</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Reading */}
        <div className="mt-16 sm:mt-32 pt-12 sm:pt-24 border-t border-black/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 sm:mb-16">
            <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Continue Reading</h4>
            <Link to="/blog" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">
              View Newsroom
            </Link>
          </div>
           
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((nextPost, i) => (
              <Link key={i} to={`/blog/${nextPost.id}`} className="group space-y-4 sm:space-y-6">
                <div className="aspect-video rounded-sm overflow-hidden border border-black/5">
                  <img src={nextPost.image} alt={nextPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="space-y-2 sm:space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">{nextPost.category}</span>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight group-hover:text-brand-orange transition-colors leading-tight">{nextPost.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostPage
