import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

// Layout Components (keep these eager loaded as they're always needed)
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import ScrollToTop from './components/utils/ScrollToTop'
import { ScrollToSection } from './components/utils/ScrollToSection'
import { LoadingSpinner } from './components/ui/LoadingSpinner'

// Modals (keep eager loaded as they're small)
import { PrivacyPolicy } from './components/modals/PrivacyPolicy'
import { TermsOfService } from './components/modals/TermsOfService'
import { Security } from './components/modals/Security'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })))
const AIDevelopmentPage = lazy(() => import('./pages/AIDevelopmentPage').then(m => ({ default: m.AIDevelopmentPage })))
const AIModelsIntegrationsPage = lazy(() => import('./pages/AIModelsIntegrationsPage').then(m => ({ default: m.AIModelsIntegrationsPage })))
const SoftwareDevelopmentPage = lazy(() => import('./pages/SoftwareDevelopmentPage').then(m => ({ default: m.SoftwareDevelopmentPage })))
const MobileAppsDevelopmentPage = lazy(() => import('./pages/MobileAppsDevelopmentPage').then(m => ({ default: m.MobileAppsDevelopmentPage })))
const CustomServicesPage = lazy(() => import('./pages/CustomServicesPage').then(m => ({ default: m.CustomServicesPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })))
const LoginPage = lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })))
const NewsroomPage = lazy(() => import('./pages/NewsroomPage').then(m => ({ default: m.NewsroomPage })))
const NewsroomPostPage = lazy(() => import('./pages/NewsroomPostPage').then(m => ({ default: m.NewsroomPostPage })))
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(m => ({ default: m.CaseStudyPage })))

function AppContent() {
	const location = useLocation()
	const [isImagesLoading, setIsImagesLoading] = useState(false)

	// Handle manual scroll restoration
	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
	}, []);

	// Handle image loading for pages with external images
	useEffect(() => {
		const path = location.pathname
		const pagesWithExternalImages = ['/blog', '/news', '/portfolio']
		const isDynamicPage = path.startsWith('/blog/') || path.startsWith('/news/') || path.startsWith('/portfolio/')

		if (!pagesWithExternalImages.includes(path) && !isDynamicPage) {
			setIsImagesLoading(false)
			return
		}

		setIsImagesLoading(true)

		const checkImages = () => {
			requestAnimationFrame(() => {
				setTimeout(() => {
					const images = document.querySelectorAll('img[src^="https://images.unsplash.com"]')
					const totalImages = images.length

					if (totalImages === 0) {
						setTimeout(() => {
							const retryImages = document.querySelectorAll('img[src^="https://images.unsplash.com"]')
							if (retryImages.length === 0) {
								setIsImagesLoading(false)
							} else {
								processImages(Array.from(retryImages) as HTMLImageElement[])
							}
						}, 500)
						return
					}

					processImages(Array.from(images) as HTMLImageElement[])
				}, 150)
			})
		}

		const processImages = (imageElements: HTMLImageElement[]) => {
			const totalImages = imageElements.length
			if (totalImages === 0) {
				setIsImagesLoading(false)
				return
			}

			let loadedCount = 0
			let errorCount = 0
			const processedImages = new Set<HTMLImageElement>()

			const handleFinished = () => {
				if (loadedCount + errorCount === totalImages) {
					setTimeout(() => setIsImagesLoading(false), 300)
				}
			}

			const handleImageLoad = (image: HTMLImageElement) => {
				if (processedImages.has(image)) return
				processedImages.add(image)
				loadedCount++
				handleFinished()
			}

			const handleImageError = (image: HTMLImageElement) => {
				if (processedImages.has(image)) return
				processedImages.add(image)
				errorCount++
				handleFinished()
			}

			imageElements.forEach((image) => {
				if (image.complete && image.naturalHeight !== 0) {
					loadedCount++
					processedImages.add(image)
				} else {
					image.addEventListener('load', () => handleImageLoad(image), { once: true })
					image.addEventListener('error', () => handleImageError(image), { once: true })
				}
			})

			if (loadedCount === totalImages) {
				setTimeout(() => setIsImagesLoading(false), 300)
			}
		}

		checkImages()

		const timeout = setTimeout(() => {
			setIsImagesLoading(false)
		}, 5000)

		return () => {
			clearTimeout(timeout)
		}
	}, [location])

	return (
		<>
			<ScrollToTop />
			<ScrollToSection />
			<Header />
			{isImagesLoading && (
				<AnimatePresence>
					<motion.div
						className="image-loading-overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="image-loading-spinner">
							<motion.img
								src="/images/icons/onlyicon.svg"
								alt="Loading"
								className="loading-icon-spin"
								animate={{ rotate: 360 }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "linear"
								}}
							/>
							<p className="loading-text">Loading images...</p>
						</div>
					</motion.div>
				</AnimatePresence>
			)}

			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/platform" element={<HomePage />} />
					<Route path="/features" element={<HomePage />} />
					<Route path="/solutions" element={<HomePage />} />
					<Route path="/services" element={<HomePage />} />
					<Route path="/about" element={<HomePage />} />
					<Route path="/guide" element={<HomePage />} />
					<Route path="/faq" element={<HomePage />} />
					<Route path="/cases" element={<HomePage />} />
					<Route path="/privacy" element={<HomePage />} />
					<Route path="/terms" element={<HomePage />} />
					<Route path="/security" element={<HomePage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/services/custom" element={<CustomServicesPage />} />
					<Route path="/services/ai-development" element={<AIDevelopmentPage />} />
					<Route path="/services/ai-models-integrations" element={<AIModelsIntegrationsPage />} />
					<Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
					<Route path="/services/mobile-apps-development" element={<MobileAppsDevelopmentPage />} />
					<Route path="/news" element={<NewsroomPage />} />
					<Route path="/news/:id" element={<NewsroomPostPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/blog/:id" element={<BlogPostPage />} />
					<Route path="/portfolio" element={<CaseStudiesPage />} />
					<Route path="/portfolio/:id" element={<CaseStudyPage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Suspense>

			<Footer />
			<PrivacyPolicy />
			<TermsOfService />
			<Security />
			<SpeedInsights />
			<Analytics />
		</>
	)
}

export default function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	)
}
