import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zonca Global Investment Ltd - Premium Aluminium Solutions Nigeria',
  description = 'Leading provider of high-performance facades, custom aluminium extrusion, and architectural systems in West Africa. ISO 9001:2015 certified. 16+ years experience.',
  keywords = 'aluminium extrusion, facades Nigeria, curtain wall, windows doors Lagos, architectural systems, Zonca Global, aluminium profiles, building materials Nigeria',
  image = 'https://zoncaglobal.com/og-image.jpg',
  url = 'https://zoncaglobal.com',
  type = 'website'
}) => {
  const siteTitle = title.includes('Zonca') ? title : `${title} | Zonca Global Investment`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Additional SEO Tags */}
      <meta name="author" content="Zonca Global Investment Ltd" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
};
