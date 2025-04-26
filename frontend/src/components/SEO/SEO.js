import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = "/og-image.jpg",
  ogType = "website",
}) => {
  // Base title that will be appended to all page titles
  const baseTitle = "Singapore Construction & Repair Services";

  // Format the title with the base title
  const formattedTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  // Create a comma-separated string of keywords
  const keywordsString = [
    ...keywords,
    "Singapore construction",
    "Singapore repairs",
    "home services Singapore",
    "building services SG",
  ].join(", ");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="title" content={formattedTitle} />
      {description && <meta name="description" content={description} />}
      <meta name="keywords" content={keywordsString} />

      {/* Geo Tags for Singapore */}
      <meta name="geo.region" content="SG" />
      <meta name="geo.placename" content="Singapore" />

      {/* Canonical Link */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Localization Tags */}
      <meta property="og:locale" content="en_SG" />
      <meta httpEquiv="content-language" content="en-SG" />
    </Helmet>
  );
};

export default SEO;
