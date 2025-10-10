import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  structuredData,
  noIndex = false 
}) => {
  const baseUrl = 'https://www.agiluxsolution.com';
  const defaultTitle = 'Agilux Solution - Premier Digital Agency | Web Development, App Development & SEO Services India';
  const defaultDescription = 'Agilux Solution is India\'s leading digital agency specializing in web development, mobile app development, UI/UX design, SEO services, digital marketing, and branding solutions.';
  const defaultKeywords = 'Agilux Solution, digital agency India, web development company, mobile app development, UI UX design, SEO services, digital marketing agency, branding services, web design, app development, software development, digital transformation, business solutions, Ahmedabad digital agency, Gujarat web development';
  const defaultOgImage = `${baseUrl}/public/AgiluxFavicon.png`;

  const seoTitle = title ? `${title} | Agilux Solution` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const seoOgImage = ogImage || defaultOgImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Agilux Solution" />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonical} />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225, 72.5714" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Agilux Solution - Digital Agency" />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Agilux Solution" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />
      <meta name="twitter:image:alt" content="Agilux Solution Digital Agency" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
