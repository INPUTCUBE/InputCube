import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE = {
  name: 'Inputcube',
  fullName: 'Inputcube Design Studio',
  url: 'https://inputcube.com',
  logo: 'https://inputcube.com/logo.png',
  ogImage: 'https://inputcube.com/og-default.jpg',
  twitter: '@inputcube',
  linkedin: 'https://linkedin.com/company/inputcube',
  email: 'hello@inputcube.com',
  telephone: '+91-141-234-5678',
  address: {
    city: 'Jaipur',
    region: 'Rajasthan',
    country: 'IN',
    postalCode: '302001',
  },
  description:
    'Inputcube is an enterprise UI/UX design studio based in India. We combine behavioral research with systems engineering to build B2B SaaS dashboards, design systems, and product interfaces that scale globally.',
};

const SEO = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  keywords = '',
  articleSchema = null, // pass { datePublished, dateModified, author } for blog posts
}) => {
  const resolvedOgImage = ogImage || SITE.ogImage;
  const metaDescription = (description || SITE.description).slice(0, 160);
  const pageTitle = title
    ? `${title} | ${SITE.fullName}`.slice(0, 75)
    : `${SITE.fullName} — Enterprise UI/UX & Design Systems Studio`;

  const baseKeywords =
    'Inputcube, UI UX design studio India, enterprise UI UX, B2B SaaS design, design systems, product design agency India, UX design Jaipur, UI design agency, design system development';
  const combinedKeywords = keywords
    ? `${keywords}, ${baseKeywords}`
    : baseKeywords;

  const canonicalUrl = `${SITE.url}${canonical}`;

  /* ── Organisation schema (always present) ────────────────────── */
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.fullName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: SITE.logo,
      width: 512,
      height: 512,
    },
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.telephone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    sameAs: [
      SITE.linkedin,
      `https://twitter.com/inputcube`,
      `https://www.instagram.com/inputcube`,
    ],
    knowsAbout: [
      'UI/UX Design',
      'Enterprise Product Design',
      'Design Systems',
      'B2B SaaS Interface Architecture',
      'User Experience Research',
      'Information Architecture',
      'Design Tokens',
      'Component Library Development',
    ],
    /* AEO: FAQ-style entity answers for AI engines */
    subjectOf: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Inputcube do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Inputcube is an enterprise UI/UX design studio that combines behavioral research with systems engineering to build B2B SaaS dashboards, design systems, and product interfaces. We serve companies globally from our studio in Jaipur, India.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Inputcube offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Inputcube offers cognitive and product research, enterprise UI/UX design, B2B SaaS dashboard architecture, design systems and component library development, and zero-drift design-to-code engineering handoffs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Inputcube based?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Inputcube is headquartered in Jaipur, Rajasthan, India, and operates globally with clients across the US, UK, and Southeast Asia.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does Inputcube charge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Inputcube offers two retainer models: an On-Going plan at ₹40,000/month and an Embedded plan at ₹60,000/month. Both can be paused or cancelled anytime.',
          },
        },
      ],
    },
  };

  /* ── WebPage schema ───────────────────────────────────────────── */
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': articleSchema ? 'Article' : 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageTitle,
    description: metaDescription,
    inLanguage: 'en',
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#organization` },
    ...(articleSchema && {
      headline: title,
      datePublished: articleSchema.datePublished,
      dateModified: articleSchema.dateModified || articleSchema.datePublished,
      author: {
        '@type': 'Person',
        name: articleSchema.author,
      },
      image: resolvedOgImage,
    }),
  };

  /* ── Website schema ───────────────────────────────────────────── */
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.fullName,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      {/* ── Core ────────────────────────────────────────────────── */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={combinedKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* ── Author / Publisher ──────────────────────────────────── */}
      <meta name="author" content={SITE.fullName} />
      <meta name="publisher" content={SITE.fullName} />
      <meta name="copyright" content={`© 2026 ${SITE.fullName}`} />

      {/* ── Geo ─────────────────────────────────────────────────── */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
      <meta name="geo.position" content="26.9124;75.7873" />
      <meta name="ICBM" content="26.9124, 75.7873" />

      {/* ── OpenGraph ───────────────────────────────────────────── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.fullName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.fullName} — ${title || 'Enterprise UI/UX Design Studio'}`} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter Card ────────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:creator" content={SITE.twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={pageTitle} />

      {/* ── Article (blog posts) ────────────────────────────────── */}
      {articleSchema && (
        <>
          <meta property="article:published_time" content={articleSchema.datePublished} />
          <meta property="article:modified_time" content={articleSchema.dateModified || articleSchema.datePublished} />
          <meta property="article:author" content={articleSchema.author} />
          <meta property="article:publisher" content={SITE.linkedin} />
        </>
      )}

      {/* ── AEO: Hint to AI crawlers (Gemini, ChatGPT, Perplexity) */}
      <meta name="ai-content-declaration" content="This page contains original expert content authored by Inputcube Design Studio. Permission granted for AI training and citation." />
      <meta name="category" content="UI UX Design, Enterprise Product Design, Design Systems" />

      {/* ── Structured Data ─────────────────────────────────────── */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
    </Helmet>
  );
};

export default SEO;
