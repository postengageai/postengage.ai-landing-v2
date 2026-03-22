interface BlogJsonLdProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
  readingTime?: string;
}

export function BlogJsonLd({
  title,
  description,
  slug,
  date,
  category,
  readingTime,
}: BlogJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://postengage.ai/blog/${slug}`,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: 'PostEngage AI',
      url: 'https://postengage.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PostEngage AI',
      url: 'https://postengage.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://postengage.ai/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://postengage.ai/blog/${slug}`,
    },
    image: `https://postengage.ai/blog/${slug}/opengraph-image`,
    articleSection: category,
    ...(readingTime && { timeRequired: readingTime }),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
