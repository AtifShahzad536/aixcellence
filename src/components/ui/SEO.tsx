import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { DEFAULT_SEO, SEO_DATA } from '../../constants/seoData';

export interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
}) => {
    const { pathname } = useLocation();

    // Get page-specific data or fallback to defaults
    const pageData = SEO_DATA[pathname] || {};

    const seo = {
        title: title || pageData.title || DEFAULT_SEO.title,
        description: description || pageData.description || DEFAULT_SEO.description,
        canonical: canonical || `${DEFAULT_SEO.canonical}${pathname.substring(1)}`,
        ogTitle: ogTitle || title || pageData.title || DEFAULT_SEO.ogTitle,
        ogDescription: ogDescription || description || pageData.description || DEFAULT_SEO.ogDescription,
        ogImage: ogImage || DEFAULT_SEO.ogImage,
        twitterTitle: twitterTitle || title || pageData.title || DEFAULT_SEO.twitterTitle,
        twitterDescription: twitterDescription || description || pageData.description || DEFAULT_SEO.twitterDescription,
        twitterImage: twitterImage || DEFAULT_SEO.twitterImage,
    };

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <link rel="canonical" href={seo.canonical} />

            {/* Open Graph */}
            <meta property="og:title" content={seo.ogTitle} />
            <meta property="og:description" content={seo.ogDescription} />
            <meta property="og:image" content={seo.ogImage} />
            <meta property="og:url" content={seo.canonical} />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.twitterTitle} />
            <meta name="twitter:description" content={seo.twitterDescription} />
            <meta name="twitter:image" content={seo.twitterImage} />
        </Helmet>
    );
};
