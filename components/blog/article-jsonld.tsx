'use client';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  category: string;
  ogImage?: string;
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  category,
  ogImage,
}: ArticleJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://postengage.ai/blog/${slug}`,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: 'PostEngage.ai',
      url: 'https://postengage.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PostEngage.ai',
      url: 'https://postengage.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://postengage.ai/logo.png',
      },
    },
    image: ogImage || `https://postengage.ai/blog/og/${slug}.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://postengage.ai/blog/${slug}`,
    },
    articleSection: category,
    inLanguage: 'en-US',
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
