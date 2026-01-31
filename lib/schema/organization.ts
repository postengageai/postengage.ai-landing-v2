/**
 * Organization Schema for SEO
 * Helps with brand visibility in search results
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PostEngage.ai',
  url: 'https://postengage.ai',
  logo: 'https://postengage.ai/logo.jpeg',
  sameAs: [
    'https://x.com/postengageai',
    'https://www.instagram.com/postengage.ai/',
    'https://www.linkedin.com/company/postengageai',
    'https://www.producthunt.com/products/postengageai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@postengage.ai',
    contactType: 'customer support',
    availableLanguage: ['English'],
  },
};
