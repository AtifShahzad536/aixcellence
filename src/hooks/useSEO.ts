import { useEffect } from 'react'

interface SEOData {
	title?: string
	description?: string
	keywords?: string
	image?: string
	url?: string
	type?: string
	author?: string
	publishedTime?: string
	modifiedTime?: string
	canonical?: string
}

const defaultSEO: SEOData = {
	title: 'AIXcellence',
	description: 'Transform your business with AIXcellence intelligent automation platform. ARA Agent handles 24/7 customer support and bookings. AXE Agent creates professional video content with AI cloning. Enterprise-grade AI automation solutions.',
	keywords: 'AI automation, intelligent automation, AI agents, customer support AI, AI video generation, voice cloning, video cloning, business automation, AIXcellence, ARA Agent, AXE Agent, AIX One Platform',
	image: '/images/logos/FullLogo_Transparent_NoBuffer.png',
	url: 'https://aixcellence.co',
	type: 'website',
	canonical: 'https://aixcellence.co'
}

export function useSEO(data: SEOData = {}) {
	useEffect(() => {
		const seo = { ...defaultSEO, ...data }
		
		// Update title
		if (seo.title) {
			document.title = seo.title
		}
		
		// Helper function to update or create meta tag
		const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
			let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
			if (!element) {
				element = document.createElement('meta')
				element.setAttribute(attribute, name)
				document.head.appendChild(element)
			}
			element.content = content
		}
		
		// Basic meta tags
		if (seo.description) {
			updateMetaTag('description', seo.description)
		}
		
		if (seo.keywords) {
			updateMetaTag('keywords', seo.keywords)
		}
		
		if (seo.author) {
			updateMetaTag('author', seo.author)
		}
		
		// Open Graph tags
		updateMetaTag('og:title', seo.title || defaultSEO.title!, 'property')
		updateMetaTag('og:description', seo.description || defaultSEO.description!, 'property')
		updateMetaTag('og:image', seo.image || defaultSEO.image!, 'property')
		updateMetaTag('og:url', seo.url || defaultSEO.url!, 'property')
		updateMetaTag('og:type', seo.type || defaultSEO.type!, 'property')
		updateMetaTag('og:site_name', 'AIXcellence', 'property')
		
		if (seo.publishedTime) {
			updateMetaTag('og:published_time', seo.publishedTime, 'property')
		}
		
		if (seo.modifiedTime) {
			updateMetaTag('og:modified_time', seo.modifiedTime, 'property')
		}
		
		// Twitter Card tags
		updateMetaTag('twitter:card', 'summary_large_image')
		updateMetaTag('twitter:title', seo.title || defaultSEO.title!)
		updateMetaTag('twitter:description', seo.description || defaultSEO.description!)
		updateMetaTag('twitter:image', seo.image || defaultSEO.image!)
		
		// Canonical URL
		let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
		if (!canonical) {
			canonical = document.createElement('link')
			canonical.rel = 'canonical'
			document.head.appendChild(canonical)
		}
		canonical.href = seo.canonical || seo.url || defaultSEO.canonical!
		
		// Robots meta
		updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
		
		// Additional SEO meta tags
		updateMetaTag('theme-color', '#0C2D78')
		updateMetaTag('apple-mobile-web-app-title', 'AIXcellence')
		updateMetaTag('application-name', 'AIXcellence')
		
	}, [data.title, data.description, data.keywords, data.image, data.url, data.type, data.author, data.publishedTime, data.modifiedTime, data.canonical])
}



