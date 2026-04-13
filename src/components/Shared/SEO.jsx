import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://njorogeryan.tech';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = '@techbuildske';

/**
 * SEO – Drop this into any page to set title, description, and social tags.
 *
 * Props:
 *  title       – Page title (appended with " | Ryan Njoroge")
 *  description – Meta description (≤160 chars recommended)
 *  canonical   – Canonical path, e.g. "/services/web-design-development"
 *  image       – Absolute URL for OG image (falls back to default)
 *  type        – OG type, defaults to "website"
 *  noIndex     – Set true to block search engines (e.g. 404 pages)
 */
export default function SEO({
  title,
  description,
  canonical = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
}) {
  const fullTitle = title
    ? `${title} | Ryan Njoroge`
    : 'Ryan Njoroge — Digital Product Builder in Nairobi, Kenya';

  const canonicalUrl = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      {/* === Primary === */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* === Open Graph === */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ryan Njoroge" />
      <meta property="og:locale" content="en_KE" />

      {/* === Twitter Card === */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* === Schema.org Person (sitewide) === */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ryan Njoroge",
          "url": "${SITE_URL}",
          "jobTitle": "Digital Product Builder",
          "worksFor": {
            "@type": "Organization",
            "name": "Ryan Builds"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "sameAs": [
            "https://github.com/Ryavnn",
            "https://x.com/techbuildske",
            "https://www.instagram.com/ryanbuilds.ke/"
          ]
        }
      `}</script>
    </Helmet>
  );
}
