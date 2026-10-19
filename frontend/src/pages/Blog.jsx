import React, { useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import SEO from '../components/SEO'

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 3);
  const remainingPosts = filteredPosts;

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white text-black min-h-screen">
      <SEO 
        title="Newsroom & Insights | InputCube Design Studio"
        description="Insights on enterprise UI/UX design, design systems, B2B SaaS architecture, and product research from the InputCube team."
        canonical="/blog"
        keywords="UX design blog, design systems insights, enterprise product design, B2B SaaS UX, information architecture"
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <h1 className="sr-only">InputCube Newsroom — Design Insights</h1>
        {/* Featured Section */}
        <div className="grid grid-cols-12 gap-4 mb-16 sm:mb-20">
          {/* Main Featured */}
          <Link 
            to={`/blog/${featuredPost.id}`}
            className="col-span-12 lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden group"
          >
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-12 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-8 max-w-3xl leading-tight">
                {featuredPost.title}
              </h2>
              <div className="flex flex-wrap items-center gap-y-4 sm:gap-y-6 gap-x-6 sm:gap-x-12 text-white/60 text-xs sm:text-sm font-medium">
                <div>
                  <p className="uppercase tracking-widest opacity-50 mb-1">Written by</p>
                  <p className="text-white">{featuredPost.author}</p>
                </div>
                <div>
                  <p className="uppercase tracking-widest opacity-50 mb-1">Published on</p>
                  <p className="text-white">{featuredPost.date}</p>
                </div>
                <div className="flex gap-2 pt-2 md:pt-0">
                  <span className="px-3 sm:px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 uppercase tracking-widest text-[10px]">
                    {featuredPost.category}
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 uppercase tracking-widest text-[10px]">
                    Insights
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Side Featured */}
          <div className="col-span-12 lg:col-span-4 flex flex-row lg:flex-col gap-4">
            {sidePosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="relative flex-1 min-h-[200px] sm:min-h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden group"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 uppercase tracking-widest text-[9px] text-white mb-3 sm:mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white leading-tight transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Header & Filter */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">Blog</h2>
          <p className="text-base sm:text-lg text-black/50 max-w-2xl mb-8 sm:mb-12">
            Perspectives on enterprise UI/UX design, design systems, information architecture, 
            and the craft of building products that scale.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-4 no-scrollbar">
            <div className="p-3 bg-white border border-black/10 rounded-full flex-shrink-0" aria-hidden="true">
              <Search className="w-4 h-4 text-black/40" />
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-black/10 hover:border-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {remainingPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`} 
              className="group flex flex-col"
            >
              <div className="aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden mb-4 sm:mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest border border-black/5">
                  {post.category}
                </div>
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-3 sm:mb-4 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-black/5">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">{post.date}</span>
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage
