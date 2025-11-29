import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Cpu, Zap, Shield, BarChart3, Calendar, Users, TrendingUp, MessageSquare, DollarSign, CheckCircle2, Clock, Target, Rocket, Phone, Mail, MapPin, Sparkles, Globe, ArrowRight, X, FileText, Lock, Layers, Bot, Settings, Building2, Newspaper, BookOpen, FileText as CaseStudy, Video, Film, Mic, PlayCircle, Languages, Send, Linkedin, Twitter, ExternalLink, Search, User, TrendingDown, Award, Briefcase, ArrowLeft, Share2, Instagram, Facebook, Youtube, Menu } from 'lucide-react'
import { useSEO } from './hooks/useSEO'
import { SpeedInsights } from '@vercel/speed-insights/react'

function ProductDropdown() {
	return (
		<div className="product-dropdown">
			<div className="product-dropdown-columns">
				<div className="product-column">
					<div className="product-column-title-wrapper">
						<h4 className="product-column-title">Platform</h4>
						<span className="soon-badge">Soon</span>
					</div>
					<a href="#aix-one" className="product-item">
						<span className="product-icon">
							<Layers size={18} />
						</span>
						<div>
							<div className="product-name">AIX One Platform</div>
						</div>
					</a>
				</div>
				<div className="product-column">
					<h4 className="product-column-title">Products</h4>
					<a href="#ara-agent" className="product-item">
						<span className="product-icon">
							<Bot size={18} />
						</span>
						<div>
							<div className="product-name">ARA Agent</div>
						</div>
					</a>
					<a href="#axe-agent" className="product-item">
						<span className="product-icon">
							<Target size={18} />
						</span>
						<div>
							<div className="product-name">AXE Agent</div>
						</div>
					</a>
				</div>
				<div className="product-column">
					<div className="product-column-title-wrapper">
						<h4 className="product-column-title">Features</h4>
						<span className="soon-badge">Soon</span>
					</div>
				</div>
			</div>
		</div>
	)
}

function ResourcesDropdown() {
	return (
		<div className="product-dropdown">
			<div className="product-dropdown-columns">
				<div className="product-column">
					<h4 className="product-column-title">Company</h4>
					<a href="#about" className="product-item">
						<span className="product-icon">
							<Building2 size={18} />
						</span>
						<div>
							<div className="product-name-wrapper">
								<div className="product-name">About Us</div>
								<span className="soon-badge">Soon</span>
							</div>
							<div className="product-desc">Learn about our mission and team</div>
						</div>
					</a>
					<a href="#news" className="product-item">
						<span className="product-icon">
							<Newspaper size={18} />
						</span>
						<div>
							<div className="product-name">Newsroom</div>
							<div className="product-desc">Latest updates and announcements</div>
						</div>
					</a>
				</div>
				<div className="product-column">
					<h4 className="product-column-title">Discover</h4>
					<a href="#blog" className="product-item">
						<span className="product-icon">
							<BookOpen size={18} />
						</span>
						<div>
							<div className="product-name">Blog</div>
							<div className="product-desc">Insights and industry trends</div>
						</div>
					</a>
					<a href="#cases" className="product-item">
						<span className="product-icon">
							<CaseStudy size={18} />
						</span>
						<div>
							<div className="product-name">Case Studies</div>
							<div className="product-desc">Success stories from customers</div>
						</div>
					</a>
					<a href="#guide" className="product-item">
						<span className="product-icon">
							<BookOpen size={18} />
						</span>
						<div>
							<div className="product-name-wrapper">
								<div className="product-name">Guide</div>
								<span className="soon-badge">Soon</span>
							</div>
							<div className="product-desc">Comprehensive guides and tutorials</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

function Header() {
	const links = [
		{ label: 'Product', isProduct: true },
		{ label: 'Solutions', children: [ { label: 'Custom Services', href: '#custom-services' }, { label: 'Enterprise', href: '#enterprise', soon: true } ] },
		{ label: 'Resources', isResources: true },
		{ label: 'Pricing', href: '#pricing' },
	]
	const [open, setOpen] = useState<number | null>(null)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(null)
	const { scrollY } = useScroll()
	const headerOpacity = useTransform(scrollY, [0, 100], [0.92, 0.98])
	const mobileMenuRef = useRef<HTMLDivElement>(null)

	// Close mobile menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
				// Only close if clicking outside the menu, but allow clicks on the menu button
				const target = event.target as HTMLElement
				if (!target.closest('.mobile-menu-button') && !target.closest('.mobile-menu-overlay')) {
					setMobileMenuOpen(false)
					setMobileSubmenuOpen(null)
				}
			}
		}

		if (mobileMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside)
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.body.style.overflow = ''
		}
	}, [mobileMenuOpen])

	// Close mobile menu when clicking a link
	const handleMobileLinkClick = () => {
		setMobileMenuOpen(false)
		setMobileSubmenuOpen(null)
	}

	return (
		<motion.header 
			className="header"
			style={{ opacity: headerOpacity }}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			<div className="header-gradient-line"></div>
			<div className="container nav">
				<div className="nav-container-left">
					<motion.div className="nav-left" whileHover={{ scale: 1.02 }}>
						<img className="logo" src="/images/logos/fulllogo_nobuffer.jpg" alt="AIXcellence logo" />
					</motion.div>
					<nav className="nav-center" onMouseLeave={() => setOpen(null)}>
						{links.map((item, idx) => (
							<div key={idx} style={{ position: 'relative' }}>
								<a 
									className={`nav-link ${open === idx ? 'active' : ''}`}
									href={(item as any).href || '#'} 
									onMouseEnter={() => ((item as any).children || (item as any).isProduct || (item as any).isResources) ? setOpen(idx) : setOpen(null)}
									onClick={(e) => {
										if ((item as any).children || (item as any).isProduct || (item as any).isResources) {
											e.preventDefault()
											setOpen(open === idx ? null : idx)
										}
									}}
								>
									{item.label}
									{((item as any).children || (item as any).isProduct || (item as any).isResources) && (
										<svg className="chevron-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
											<path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									)}
								</a>
								{(item as any).isProduct && open === idx && (
									<motion.div 
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className="dropdown-menu product-dropdown-menu"
									>
										<ProductDropdown />
									</motion.div>
								)}
								{(item as any).isResources && open === idx && (
									<motion.div 
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className="dropdown-menu product-dropdown-menu"
									>
										<ResourcesDropdown />
									</motion.div>
								)}
								{(item as any).children && !(item as any).isProduct && !(item as any).isResources && open === idx && (
									<motion.div 
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className="dropdown-menu"
									>
										<div className="dropdown-card">
											{(item as any).children.map((c: any, cidx: number) => (
												<a key={cidx} className="dropdown-link" href={c.href}>
													<span>{c.label}</span>
													{c.soon && (
														<span className="soon-badge">Soon</span>
													)}
												</a>
											))}
										</div>
									</motion.div>
								)}
							</div>
						))}
					</nav>
				</div>
				<div className="nav-container-right">
					<motion.a 
						className="btn btn-login" 
						href="#login" 
						whileHover={{ scale: 1.05 }} 
						whileTap={{ scale: 0.95 }}
					>
						Login
					</motion.a>
					<motion.a 
						className="btn btn-sales" 
						href="#contact" 
						whileHover={{ scale: 1.05 }} 
						whileTap={{ scale: 0.95 }}
					>
						<span>Talk to Sales</span>
						<span className="arrow-button">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</span>
					</motion.a>
					<motion.button
						className="mobile-menu-button"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						whileTap={{ scale: 0.95 }}
						aria-label="Toggle mobile menu"
					>
						<AnimatePresence mode="wait">
							{mobileMenuOpen ? (
								<motion.div
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X size={24} />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<Menu size={24} />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<>
						<motion.div
							className="mobile-menu-backdrop"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={() => {
								setMobileMenuOpen(false)
								setMobileSubmenuOpen(null)
							}}
						/>
						<motion.div
							ref={mobileMenuRef}
							className="mobile-menu-overlay"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 25, stiffness: 200 }}
						>
							<div className="mobile-menu-content">
								<div className="mobile-menu-header">
									<img className="mobile-menu-logo" src="/images/logos/fulllogo_nobuffer.jpg" alt="AIXcellence logo" />
									<button
										className="mobile-menu-close"
										onClick={() => {
											setMobileMenuOpen(false)
											setMobileSubmenuOpen(null)
										}}
										aria-label="Close menu"
									>
										<X size={24} />
									</button>
								</div>
								<nav className="mobile-menu-nav">
									{links.map((item, idx) => (
										<div key={idx} className="mobile-menu-item">
											{(item as any).isProduct || (item as any).isResources || (item as any).children ? (
												<>
													<button
														className="mobile-menu-link mobile-menu-link-button"
														onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === idx ? null : idx)}
													>
														<span>{item.label}</span>
														<motion.svg
															className="mobile-menu-chevron"
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
															animate={{ rotate: mobileSubmenuOpen === idx ? 180 : 0 }}
															transition={{ duration: 0.2 }}
														>
															<path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
														</motion.svg>
													</button>
													<AnimatePresence>
														{mobileSubmenuOpen === idx && (
															<motion.div
																className="mobile-submenu"
																initial={{ height: 0, opacity: 0 }}
																animate={{ height: 'auto', opacity: 1 }}
																exit={{ height: 0, opacity: 0 }}
																transition={{ duration: 0.3, ease: 'easeInOut' }}
															>
																{(item as any).isProduct && (
																	<div className="mobile-submenu-content">
																		<div className="mobile-submenu-section">
																			<h4 className="mobile-submenu-title">Platform</h4>
																			<a href="#aix-one" className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																				<Layers size={18} />
																				<span>AIX One Platform</span>
																				<span className="soon-badge">Soon</span>
																			</a>
																		</div>
																		<div className="mobile-submenu-section">
																			<h4 className="mobile-submenu-title">Products</h4>
																			<a href="#ara-agent" className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																				<Bot size={18} />
																				<span>ARA Agent</span>
																			</a>
																			<a href="#axe-agent" className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																				<Target size={18} />
																				<span>AXE Agent</span>
																			</a>
																		</div>
																		<div className="mobile-submenu-section">
																			<h4 className="mobile-submenu-title">Features</h4>
																			<span className="soon-badge">Soon</span>
																		</div>
																	</div>
																)}
																{(item as any).isResources && (
																	<div className="mobile-submenu-content">
																		<div className="mobile-submenu-section">
																			<h4 className="mobile-submenu-title">Company</h4>
																			<a href="#about" className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																				<Building2 size={18} />
																				<span>About Us</span>
																				<span className="soon-badge">Soon</span>
																			</a>
																			<a href="#news" className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																				<Newspaper size={18} />
																				<span>Newsroom</span>
																			</a>
																		</div>
																		<div className="mobile-submenu-section">
																			<h4 className="mobile-submenu-title">Discover</h4>
																			<a href="#blog" className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																				<BookOpen size={18} />
																				<span>Blog</span>
																			</a>
																			<a href="#cases" className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																				<CaseStudy size={18} />
																				<span>Case Studies</span>
																			</a>
																		</div>
																	</div>
																)}
																{(item as any).children && !(item as any).isProduct && !(item as any).isResources && (
																	<div className="mobile-submenu-content">
																		{(item as any).children.map((c: any, cidx: number) => (
																			<a key={cidx} href={c.href} className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																				<span>{c.label}</span>
																				{c.soon && <span className="soon-badge">Soon</span>}
																			</a>
																		))}
																	</div>
																)}
															</motion.div>
														)}
													</AnimatePresence>
												</>
											) : (
												<a
													href={(item as any).href || '#'}
													className="mobile-menu-link"
													onClick={handleMobileLinkClick}
												>
													{item.label}
												</a>
											)}
										</div>
									))}
								</nav>
								<div className="mobile-menu-actions">
									<motion.a
										href="#login"
										className="btn btn-login btn-mobile"
										onClick={handleMobileLinkClick}
										whileTap={{ scale: 0.95 }}
									>
										Login
									</motion.a>
									<motion.a
										href="#contact"
										className="btn btn-sales btn-mobile"
										onClick={handleMobileLinkClick}
										whileTap={{ scale: 0.95 }}
									>
										<span>Talk to Sales</span>
										<span className="arrow-button">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</span>
									</motion.a>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.header>
	)
}

function Hero() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	useSEO({
		title: 'AIXcellence',
		description: 'Transform your business with AIXcellence intelligent automation platform. ARA Agent handles 24/7 customer support and bookings. AXE Agent creates professional video content with AI cloning. Enterprise-grade AI automation solutions.',
		url: 'https://aixcellence.co/',
		canonical: 'https://aixcellence.co/'
	})
	
	return (
		<motion.section 
			className="hero hero-new" 
			id="product"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.8 }}
		>
			{/* Gradient Orbs */}
			<div className="hero-gradient-orb hero-gradient-orb-1"></div>
			<div className="hero-gradient-orb hero-gradient-orb-2"></div>
			
			<div className="container hero-container-new">
				<div className="hero-content-new">
					{/* Badge */}
					<motion.div 
						className="hero-badge-new"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.2 }}
					>
						<Sparkles size={16} />
						<span>Where AI meets excellence</span>
					</motion.div>
					
					{/* Main Headline */}
					<motion.h1 
						className="hero-headline-new"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3, duration: 0.6 }}
					>
						Transform Your Business with{" "}
						<span className="hero-gradient-text-new">Intelligent Automation</span>
					</motion.h1>
					
					{/* Subheadline */}
					<motion.p 
						className="hero-subheadline-new"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.4 }}
					>
						Equip your team with human-like AI tools and our AI Ara and Axe, who automates your business workflow with human-like personalization and predictive AI automation.
					</motion.p>
					
					{/* CTA Buttons */}
					<motion.div 
						className="hero-buttons-new"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.5 }}
					>
						<motion.a 
							href="#contact"
							className="btn btn-hero-primary-new"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Get Started
							<ArrowRight size={20} style={{ marginLeft: '8px' }} />
						</motion.a>
						<motion.a 
							href="#contact"
							className="btn btn-hero-secondary-new"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Watch Demo
						</motion.a>
					</motion.div>
					
					{/* Trust Indicators */}
					<motion.div 
						className="hero-trust-indicators-new"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ delay: 0.6 }}
					>
						<div className="hero-trust-item-new">
							<div className="hero-trust-dot hero-trust-dot-gold"></div>
							<span>Enterprise-grade security</span>
						</div>
						<div className="hero-trust-item-new">
							<div className="hero-trust-dot hero-trust-dot-navy"></div>
							<span>AI-powered insights</span>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}

function Capability({ title, points, index }: { title: string; points: string[]; index: number }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-50px' })
	
	return (
		<motion.div 
			className="card"
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ delay: index * 0.1, duration: 0.5 }}
			whileHover={{ y: -8 }}
		>
			<span className="badge">{title}</span>
			<div style={{ height: 10 }} />
			<ul style={{ margin: 0, paddingLeft: 18 }}>
				{points.map((p, i) => (
					<motion.li 
						key={i} 
						style={{ marginBottom: 8 }}
						initial={{ opacity: 0, x: -10 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
					>
						<p>{p}</p>
					</motion.li>
				))}
			</ul>
		</motion.div>
	)
}

function AgentCarousel({ images }: { images: string[] }) {
	const [currentIndex, setCurrentIndex] = useState(0)
	
	useEffect(() => {
		if (images.length <= 1) return
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length)
		}, 4000) // Auto-scroll every 4 seconds
		return () => clearInterval(interval)
	}, [images.length])
	
	return (
		<div className="agent-carousel">
			<div className="agent-carousel-container">
				{images.map((img, idx) => (
					<motion.div
						key={idx}
						className="agent-carousel-slide"
						initial={{ opacity: 0 }}
						animate={{
							opacity: idx === currentIndex ? 1 : 0,
							scale: idx === currentIndex ? 1 : 0.98,
						}}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							display: idx === currentIndex ? 'block' : 'none',
						}}
					>
						<img
							src={img}
							alt={`Agent mockup ${idx + 1}`}
							className="agent-carousel-image"
						/>
					</motion.div>
				))}
			</div>
			{images.length > 1 && (
				<div className="agent-carousel-dots">
					{images.map((_, idx) => (
						<button
							key={idx}
							className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
							onClick={() => setCurrentIndex(idx)}
							aria-label={`Go to slide ${idx + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	)
}

function AIX1Section() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	return (
		<motion.section 
			className="section" 
			id="aix-one"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
			style={{ background: 'var(--off-white)', padding: '80px 0' }}
		>
			<div className="container">
				<div className="section-header">
					<motion.div 
						className="eyebrow"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<Sparkles size={16} />
						<span>Our Platform</span>
					</motion.div>
					<motion.h2 
						className="section-title"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						Meet <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AIX1</span> Your Complete Business Automation Platform
					</motion.h2>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.4 }}
					>
						The all-in-one AI Automation & CRM platform that captures leads, books appointments, sends reminders, 
						manages pipelines, replies to customers, and runs your operations 24/7 without increasing team size.
					</motion.p>
				</div>
				
				<div style={{ 
					display: 'flex', 
					flexWrap: 'wrap', 
					gap: '16px 32px', 
					marginTop: '48px',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					{[
						{ icon: Zap, title: 'Lead Capture & Management' },
						{ icon: Calendar, title: 'Smart Appointment Booking' },
						{ icon: MessageSquare, title: 'AI Customer Communication' },
						{ icon: TrendingUp, title: 'Pipeline Management' },
						{ icon: Users, title: 'Team Collaboration' },
						{ icon: Shield, title: 'Enterprise Security' }
					].map((feature, idx) => {
						const IconComponent = feature.icon
						return (
							<motion.a
								key={idx}
								href="https://aix1.aixcellence.co"
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.5 + idx * 0.06, duration: 0.4 }}
								whileHover={{ scale: 1.05 }}
								style={{ 
									display: 'inline-flex',
									alignItems: 'center',
									gap: '10px',
									padding: '12px 20px',
									borderRadius: '50px',
									background: 'var(--white)',
									border: '1px solid var(--medium-gray)',
									textDecoration: 'none',
									transition: 'all 0.3s ease',
									cursor: 'pointer'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.background = 'var(--gradient-subtle)'
									e.currentTarget.style.borderColor = 'var(--aix-cyan)'
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.background = 'var(--white)'
									e.currentTarget.style.borderColor = 'var(--medium-gray)'
								}}
							>
								<IconComponent size={18} style={{ color: 'var(--aix-cyan)', flexShrink: 0 }} />
								<span style={{ 
									fontSize: 'var(--text-base)', 
									fontWeight: 'var(--font-medium)', 
									color: 'var(--text-dark)',
									whiteSpace: 'nowrap'
								}}>
									{feature.title}
								</span>
							</motion.a>
						)
					})}
				</div>
				
				<motion.div 
					style={{ 
						textAlign: 'center', 
						marginTop: '64px',
						display: 'flex',
						gap: '16px',
						justifyContent: 'center',
						flexWrap: 'wrap'
					}}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 1.1 }}
				>
					<motion.a 
						href="https://aix1.aixcellence.co"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-hero-primary-new"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						Explore AIX1 Platform
						<ArrowRight size={20} style={{ marginLeft: '8px' }} />
					</motion.a>
					<motion.a 
						href="https://aix1.aixcellence.co#contact"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-hero-secondary-new"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						Get a Demo
					</motion.a>
				</motion.div>
			</div>
		</motion.section>
	)
}

function FutureColleagues() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	const agents = [
		{
			name: 'ARA',
			title: 'Your Customer Intelligence Agent',
			tagline: 'Connect, Converse & Care — Automatically',
			description: 'AIXcellence\'s ARA handles every customer touchpoint with human-like empathy and precision. From support queries to bookings, ARA keeps your customers engaged by chat and calls, satisfied, and loyal — 24/7.',
			image: '/images/products/ChatGPT Image Nov 12, 2025, 11_25_49 AM.png',
			mockups: ['/images/products/ChatGPT Image Nov 12, 2025, 11_25_49 AM.png']
		},
		{
			name: 'AXE',
			title: 'Your AI Video Intelligence Agent',
			tagline: 'Create, Convert & Show — Effortlessly',
			description: 'Your business now has a perfect spokesperson. Fully cloned voice and video, human expression, and multi-language support — in minutes.',
			image: '/images/products/ChatGPT Image Nov 14, 2025, 03_08_07 PM.png',
			mockups: ['/images/products/ChatGPT Image Nov 14, 2025, 03_08_07 PM.png']
		}
	]
	
	return (
		<motion.section 
			className="section future-colleagues-section" 
			id="colleagues"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<div className="section-header">
					<motion.h3 
						className="section-title"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						Meet Your Future Colleagues, Aixcellence
					</motion.h3>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						AIXcellence unlocks your team's full potential by automating the repetitive, menial tasks that are slowing them down.
					</motion.p>
				</div>
				<div className="agents-grid-professional">
					{agents.map((agent, idx) => (
						<motion.div
							key={idx}
							className="agent-card-professional"
							initial={{ opacity: 0, y: 40 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.4 + idx * 0.2, duration: 0.6 }}
							whileHover={{ y: -8 }}
						>
							<div className="agent-image-section-professional">
								<div className="agent-image-wrapper-professional">
									<img 
										src={agent.image} 
										alt={agent.name}
										className="agent-image-professional"
										loading="lazy"
									/>
								</div>
								<div className="agent-name-badge-professional">
									<span className="agent-name-text-professional">{agent.name}</span>
								</div>
							</div>
							<div className="agent-content-section-professional">
								<div className="agent-header-professional">
									<h3 className="agent-name-title-professional">{agent.name}</h3>
									<p className="agent-role-professional">{agent.title}</p>
								</div>
								<p className="agent-tagline-professional">{agent.tagline}</p>
								<p className="agent-description-professional">{agent.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	)
}

function AgentFeaturesCard() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	const features = [
		{
			icon: Sparkles,
			iconColor: 'var(--aix-cyan)',
			iconBg: 'rgba(24, 203, 190, 0.1)',
			title: 'Always On Brand',
			description: 'Consistent tone and messaging'
		},
		{
			icon: Clock,
			iconColor: 'var(--aix-cyan)',
			iconBg: 'rgba(24, 203, 190, 0.1)',
			title: 'Always Ready',
			description: 'Deploy instantly, no delays'
		},
		{
			icon: Globe,
			iconColor: '#eab308',
			iconBg: 'rgba(234, 179, 8, 0.1)',
			title: 'Zero Training',
			description: 'Ready to deploy instantly'
		}
	]
	
	return (
		<motion.section 
			className="section agent-features-section" 
			id="agent-features"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<motion.div
					className="card agent-features-card-new"
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2, duration: 0.6 }}
					whileHover={{ y: -8 }}
				>
					<div className="agent-features-header-new">
						<motion.h3 
							className="agent-features-title-new"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.3 }}
						>
							No Technical Knowledge Required
						</motion.h3>
						<motion.p 
							className="agent-features-subtitle-new"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.4 }}
						>
							Configure once. Scale forever.
						</motion.p>
						<motion.p 
							className="agent-features-description-new"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.5 }}
						>
							Your AI team speaks in your tone, stays on schedule, and needs zero technical setup.
						</motion.p>
					</div>
					
					<div className="agent-features-grid-new">
						{features.map((feature, idx) => {
							const IconComponent = feature.icon
							return (
								<motion.div
									key={idx}
									className="agent-feature-item-new"
									initial={{ opacity: 0, y: 20 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.6 + idx * 0.1 }}
								>
									<div 
										className="agent-feature-icon-wrapper-new"
										style={{ background: feature.iconBg }}
									>
										<IconComponent size={20} style={{ color: feature.iconColor }} />
									</div>
									<div className="agent-feature-content-new">
										<h4 className="agent-feature-title-new">{feature.title}</h4>
										<p className="agent-feature-description-new">{feature.description}</p>
									</div>
								</motion.div>
							)
						})}
					</div>
				</motion.div>
			</div>
		</motion.section>
	)
}

function Agents() {
	const agents = [
		{ name: 'Agent Alpha', desc: 'Outbound growth and campaign optimization with emotional NLP targeting.', icon: '🚀' },
		{ name: 'Agent Nova', desc: 'Booking, scheduling, and customer follow-ups with voice/text reminders.', icon: '⭐' },
		{ name: 'Agent Pulse', desc: 'Live communications, sentiment scoring, and real-time objection handling.', icon: '💬' },
	]
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	return (
		<motion.section 
			className="section" 
			id="agents"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<div className="section-header">
					<motion.h3 
						className="section-title"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						Products — AI Agents
					</motion.h3>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						Purpose-built agents that plug into AIX One.
					</motion.p>
				</div>
				<div className="grid platform-grid">
					{agents.map((a, i) => (
						<motion.div 
							key={i} 
							className="card agent-card"
							initial={{ opacity: 0, y: 40, scale: 0.95 }}
							animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
							transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
							whileHover={{ y: -8, scale: 1.02 }}
						>
							<div style={{ fontSize: '32px', marginBottom: '12px' }}>{a.icon}</div>
							<h4>{a.name}</h4>
							<p>{a.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	)
}

function SectionStub({ id, title, desc }: { id: string; title: string; desc: string }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-50px' })
	
	return (
		<motion.section 
			className="section" 
			id={id}
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<div className="section-header">
					<motion.h3 
						className="section-title"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						{title}
					</motion.h3>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						{desc}
					</motion.p>
				</div>
				<motion.div 
					className="card"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ delay: 0.4 }}
				>
					<p style={{ textAlign: 'center', color: 'var(--muted)' }}>Content coming soon.</p>
				</motion.div>
			</div>
		</motion.section>
	)
}

function OurMission() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	return (
		<motion.section 
			className="section mission-section" 
			id="mission"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<div className="section-header">
					<motion.h2 
						className="section-title"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						Our Mission
					</motion.h2>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						Empowering businesses to achieve excellence through intelligent automation
					</motion.p>
				</div>
				
				<motion.div 
					className="mission-content"
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.4 }}
				>
					<div className="mission-card">
						<div className="mission-icon-wrapper">
							<Target size={32} strokeWidth={1.5} />
						</div>
						<h3 className="mission-title">Democratize AI Excellence</h3>
						<p className="mission-text">
							We believe every business, regardless of size, should have access to enterprise-grade AI capabilities. 
							Our mission is to make advanced AI agents accessible, affordable, and easy to deploy, no technical expertise required.
						</p>
					</div>
					
					<div className="mission-card">
						<div className="mission-icon-wrapper">
							<Rocket size={32} strokeWidth={1.5} />
						</div>
						<h3 className="mission-title">Accelerate Growth</h3>
						<p className="mission-text">
							By automating repetitive tasks and enabling intelligent decision-making, we help businesses scale faster, 
							reduce operational costs, and focus on what truly matters, innovation and customer relationships.
						</p>
					</div>
					
					<div className="mission-card">
						<div className="mission-icon-wrapper">
							<Users size={32} strokeWidth={1.5} />
						</div>
						<h3 className="mission-title">Human-AI Collaboration</h3>
						<p className="mission-text">
							Our AI agents boost your team's performance with 80% less human effort, helping you compete at the top, capture attention, and drive sales, no extra hiring, just fresh ideas powered by reimagined reverse engineering.
						</p>
					</div>
				</motion.div>
			</div>
		</motion.section>
	)
}

function Testimonials() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	const testimonials = [
		{
			name: 'Sarah Chen',
			role: 'CEO',
			company: 'TechFlow Solutions',
			companyType: 'SaaS Platform',
			image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=18CBBE&color=fff&size=120&bold=true',
			quote: 'AIXcellence transformed how we handle customer interactions. Our response time dropped by 75%, and customer satisfaction scores increased significantly. The AI agents handle everything from initial inquiries to complex support tickets seamlessly.',
			results: '75% faster response time'
		},
		{
			name: 'Michael Rodriguez',
			role: 'Operations Director',
			company: 'Digital Dynamics',
			companyType: 'Marketing Agency',
			image: 'https://ui-avatars.com/api/?name=Michael+Rodriguez&background=0E4B8E&color=fff&size=120&bold=true',
			quote: 'The automation capabilities are incredible. We\'ve automated our entire booking system, marketing campaigns, and customer follow-ups. What used to take our team hours now happens automatically. Revenue increased by 40% in just three months.',
			results: '40% revenue increase'
		},
		{
			name: 'Emily Watson',
			role: 'Founder',
			company: 'CloudBridge Inc',
			companyType: 'Consulting Firm',
			image: 'https://ui-avatars.com/api/?name=Emily+Watson&background=D4AF3F&color=fff&size=120&bold=true',
			quote: 'As a small business, we couldn\'t afford a full-time customer service team. AIXcellence gave us enterprise-level capabilities at a fraction of the cost. Our AI agents work 24/7, and clients can\'t tell the difference from human support.',
			results: '24/7 automated support'
		},
		{
			name: 'David Park',
			role: 'VP of Sales',
			company: 'InnovateHub',
			companyType: 'E-commerce Platform',
			image: 'https://ui-avatars.com/api/?name=David+Park&background=0A1A2F&color=fff&size=120&bold=true',
			quote: 'The predictive analytics and insights from AIXcellence have been game-changing. We can now forecast trends, optimize our campaigns in real-time, and make data-driven decisions faster than ever. Our conversion rates improved by 28%.',
			results: '28% conversion improvement'
		}
	]
	
	return (
		<motion.section 
			className="section testimonials-section" 
			id="testimonials"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<div className="section-header">
					<motion.h2 
						className="section-title"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						Trusted by Growing Businesses
					</motion.h2>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						See how businesses like yours are transforming operations with AIXcellence
					</motion.p>
				</div>
				
				<div className="testimonials-grid">
					{testimonials.map((testimonial, idx) => (
						<motion.div
							key={idx}
							className="testimonial-card"
							initial={{ opacity: 0, y: 40 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
							whileHover={{ y: -8 }}
						>
							<div className="testimonial-quote-mark">"</div>
							<p className="testimonial-quote-text">{testimonial.quote}</p>
							<div className="testimonial-results">
								<CheckCircle2 size={16} style={{ color: 'var(--aix-cyan)' }} />
								<span>{testimonial.results}</span>
							</div>
							<div className="testimonial-author-info">
								<img 
									src={testimonial.image} 
									alt={testimonial.name}
									className="testimonial-avatar"
									loading="lazy"
								/>
								<div className="testimonial-author-details">
									<h4 className="testimonial-author-name">{testimonial.name}</h4>
									<p className="testimonial-author-role">{testimonial.role}</p>
									<p className="testimonial-company">{testimonial.company}</p>
									<p className="testimonial-company-type">{testimonial.companyType}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	)
}

function FAQ() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const [openIndex, setOpenIndex] = useState<number | null>(0)
	
	const faqs = [
		{
			question: 'What is AIXcellence and how does it work?',
			answer: 'AIXcellence is an AI-powered platform that provides intelligent agents to automate your business operations. Our agents handle customer communications, bookings, marketing campaigns, and analytics — all while learning and improving over time. Simply configure your preferences, and the AI agents start working immediately.'
		},
		{
			question: 'Do I need technical knowledge to use AIXcellence?',
			answer: 'Not at all! AIXcellence is designed for business owners and teams without technical backgrounds. Our platform features an intuitive interface, and setup takes just minutes. Our AI agents are pre-trained and ready to work — no coding, no complex configurations required.'
		},
		{
			question: 'How secure is my business data?',
			answer: 'Security is our top priority. We use bank-level encryption, comply with industry standards (SOC 2, GDPR-ready), and implement robust data protection measures. Your data is encrypted in transit and at rest, and we never share your information with third parties. Enterprise-grade security is built into every aspect of our platform.'
		},
		{
			question: 'Can AIXcellence integrate with my existing tools?',
			answer: 'Yes! AIXcellence integrates seamlessly with popular business tools including CRM systems, email platforms, calendar apps, social media channels, and payment processors. Our agents can work across multiple platforms simultaneously, creating a unified workflow for your business.'
		},
		{
			question: 'How quickly will I see results?',
			answer: 'Most businesses see immediate improvements in response times and efficiency. Within the first week, you\'ll notice faster customer responses and reduced manual workload. Significant growth metrics — like increased bookings and engagement — typically appear within 2-4 weeks as the AI agents optimize their performance.'
		},
		{
			question: 'What kind of support do you provide?',
			answer: 'We offer comprehensive support including onboarding assistance, 24/7 technical support, regular platform updates, and dedicated account management for enterprise clients. Our team is committed to ensuring your success with AIXcellence, and we provide resources, tutorials, and direct support whenever you need it.'
		}
	]
	
	return (
		<motion.section 
			className="section faq-section" 
			id="faq"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<div className="section-header">
					<motion.h2 
						className="section-title"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						Frequently Asked Questions
					</motion.h2>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						Everything you need to know about AIXcellence
					</motion.p>
				</div>
				
				<div className="faq-container">
					{faqs.map((faq, idx) => (
						<motion.div
							key={idx}
							className={`faq-item ${openIndex === idx ? 'open' : ''}`}
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.4 + idx * 0.1 }}
						>
							<button
								className="faq-question"
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
							>
								<span>{faq.question}</span>
								<svg 
									className="faq-icon"
									width="20" 
									height="20" 
									viewBox="0 0 20 20" 
									fill="none"
								>
									<path 
										d="M5 7.5L10 12.5L15 7.5" 
										stroke="currentColor" 
										strokeWidth="2" 
										strokeLinecap="round" 
										strokeLinejoin="round"
									/>
								</svg>
							</button>
							<div className="faq-answer">
								<p>{faq.answer}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	)
}

function CTASection() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	return (
		<motion.section 
			className="section cta-section-new" 
			id="cta"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<motion.div 
					className="cta-card-new"
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					<div className="cta-card-content">
						<motion.div
							className="cta-badge-new"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 0.4 }}
						>
							<Sparkles size={16} />
							<span>Get Started Today</span>
						</motion.div>
						
						<motion.h2 
							className="cta-title-new"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.5 }}
						>
							Ready to Transform Your Business?
						</motion.h2>
						
						<motion.p 
							className="cta-subtitle-new"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.6 }}
						>
							We're building something revolutionary — and we want you to be part of it. 
							Join our early access program and help shape the future of AI-powered business automation. 
							Whether you need our ready-to-use AI agents or custom solutions tailored to your business, we're here to help.
							Get priority access, exclusive features, and direct input on what we build next.
						</motion.p>
						
						<motion.div 
							className="cta-buttons-new"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.7 }}
						>
							<motion.a 
								href="#contact" 
								className="btn btn-cta-primary-new"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								Get Early Access
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</motion.a>
							<motion.a 
								href="#contact" 
								className="btn btn-cta-secondary-new"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								Schedule a Call
							</motion.a>
						</motion.div>
						
						<motion.div 
							className="cta-features-new"
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							transition={{ delay: 0.8 }}
						>
							<div className="cta-feature-item-new">
								<CheckCircle2 size={16} />
								<span>Be among the first to experience it</span>
							</div>
							<div className="cta-feature-item-new">
								<CheckCircle2 size={16} />
								<span>Influence product development</span>
							</div>
							<div className="cta-feature-item-new">
								<CheckCircle2 size={16} />
								<span>Exclusive early-bird pricing</span>
							</div>
						</motion.div>
					</div>
					
					<div className="cta-visual-new">
						<div className="cta-gradient-orb"></div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	)
}

function Footer() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const socialLinks = [
		{ icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1C7UCG71Vh/?mibextid=wwXIfr' },
		{ icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aixcellenceteam?igsh=MXRremRmZnB3bmluMg%3D%3D&utm_source=qr' },
		{ icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/aixcellenceteam/' },
		{ icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@aixcellenceteam?si=zUSp7FUGa-bXW6pV' },
	]
	
	return (
		<motion.footer 
			className="footer"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container footer-grid">
				<motion.div
					className="footer-brand"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2 }}
				>
					<img 
						src="/images/logos/FullLogo_Transparent_NoBuffer.png" 
						alt="AIXcellence" 
						className="footer-logo-image"
					/>
					<div className="footer-brand-tagline">
						<p className="footer-brand-title">AIXCellence</p>
						<p className="footer-brand-subtitle">Where AI meets excellence.</p>
					</div>
					
					<div className="footer-contact">
						<div className="footer-contact-item">
							<Phone size={16} />
							<a href="tel:+17206047231">+1 (720) 604-7231</a>
						</div>
						<div className="footer-contact-item">
							<Mail size={16} />
							<a href="mailto:hi@aixcellence.co">hi@aixcellence.co</a>
						</div>
						<div className="footer-contact-item">
							<MapPin size={16} />
							<span>1500 Grant St #4242, Denver, CO 80203, United States</span>
						</div>
					</div>
				</motion.div>
				
				<motion.div
					className="footer-column"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.3 }}
				>
					<strong>Platform</strong>
					<ul>
						<li>
							<a href="#aix-one">AIX Platform</a>
							<span className="soon-badge">Soon</span>
						</li>
					</ul>
				</motion.div>
				
				<motion.div
					className="footer-column"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.4 }}
				>
					<strong>Products</strong>
					<ul>
						<li><a href="#axe-agent">AXE Agent</a></li>
						<li><a href="#ara-agent">ARA Agent</a></li>
					</ul>
				</motion.div>
				
				<motion.div
					className="footer-column"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.45 }}
				>
					<strong>Solutions</strong>
					<ul>
						<li><a href="#custom-services">Custom Services</a></li>
						<li>
							<a href="#enterprise">Enterprise</a>
							<span className="soon-badge">Soon</span>
						</li>
					</ul>
				</motion.div>
				
				<motion.div
					className="footer-column"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.5 }}
				>
					<strong>Company</strong>
					<ul>
						<li><a href="#about">About Us</a></li>
						<li><a href="#news">Newsroom</a></li>
					</ul>
				</motion.div>
				
				<motion.div
					className="footer-column"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.6 }}
				>
					<strong>Discover</strong>
					<ul>
						<li><a href="#blog">Blogs</a></li>
						<li><a href="#cases">Case Studies</a></li>
						<li>
							<a href="#guide">Guide</a>
							<span className="soon-badge">Soon</span>
						</li>
					</ul>
				</motion.div>

				<motion.div
					className="footer-social-panel"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.7 }}
				>
					<div className="footer-social-heading">
						<span>Connect with us</span>
					</div>
					<div className="footer-social-links">
						{socialLinks.map((social) => {
							const IconComponent = social.icon
							return (
								<motion.a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="footer-social-link"
									whileHover={{ y: -3, scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									aria-label={social.label}
								>
									<IconComponent size={18} />
								</motion.a>
							)
						})}
					</div>
				</motion.div>
			</div>
			<div className="container footer-bottom">
				<motion.div
					className="footer-copyright"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.6 }}
				>
					<p>© 2025 AIXCellence, LLC. All rights reserved.</p>
				</motion.div>
				<motion.div
					className="footer-legal"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.6 }}
				>
					<a href="#privacy">Privacy Policy</a>
					<a href="#terms">Terms of Service</a>
					<a href="#security">Security</a>
				</motion.div>
			</div>
		</motion.footer>
	)
}

function AdvancedTechnology() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	const features = [
		{
			icon: Cpu,
			iconColor: 'var(--aix-cyan)',
			iconBg: 'rgba(24, 203, 190, 0.1)',
			title: 'AI-Powered Intelligence',
			description: 'Advanced machine learning models that understand context, predict outcomes, and optimize decisions in real-time.'
		},
		{
			icon: Zap,
			iconColor: 'var(--aix-blue)',
			iconBg: 'rgba(14, 75, 142, 0.1)',
			title: 'Automated Workflows',
			description: 'Seamless automation across marketing, sales, customer service, and financial operations with minimal human intervention.'
		},
		{
			icon: Shield,
			iconColor: 'var(--aix-navy)',
			iconBg: 'rgba(10, 26, 47, 0.1)',
			title: 'Enterprise Security',
			description: 'Bank-level encryption, compliance-ready architecture, and robust data protection to keep your business secure.'
		}
	]
	
	return (
		<motion.section 
			className="section advanced-tech-section" 
			id="technology"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<div className="section-header">
					<motion.div 
						className="tech-badge"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.1 }}
					>
						⚡ Advanced Technology
					</motion.div>
					<motion.h2 
						className="section-title"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						Powered by cutting-edge AI
					</motion.h2>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						Our AI agents leverage the latest advancements in artificial intelligence to deliver exceptional results for your business.
					</motion.p>
				</div>

				<div className="tech-features-grid-new">
					{features.map((feature, idx) => {
						const IconComponent = feature.icon
						return (
							<motion.div
								key={idx}
								className="card tech-feature-card-new"
								initial={{ opacity: 0, y: 40 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
								whileHover={{ y: -4 }}
							>
								<div 
									className="tech-icon-wrapper-new"
									style={{ background: feature.iconBg }}
								>
									<IconComponent size={24} style={{ color: feature.iconColor }} />
								</div>
								<h3 className="tech-feature-title-new">{feature.title}</h3>
								<p className="tech-feature-description-new">{feature.description}</p>
							</motion.div>
						)
					})}
				</div>
			</div>
		</motion.section>
	)
}

function ProvenResults() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const [activeTab, setActiveTab] = useState('marketing')
	
	const demoData = {
		marketing: {
			campaigns: 24,
			reach: '128.5K',
			engagement: '+47%',
			conversion: '12.8%',
			insight: 'ARA Agent analyzed customer behavior patterns and identified peak engagement times. Optimizing email campaigns to 10 AM EST and 2 PM PST is predicted to increase open rates by 18% and click-through rates by 23%.',
			recommendation: 'Apply AI Recommendation'
		},
		bookings: {
			scheduled: 47,
			pending: 3,
			completed: 312,
			rate: '97%',
			insight: 'ARA Agent detected optimal scheduling patterns across time zones. Auto-optimization has reduced no-shows by 42% and increased booking efficiency by 68%. Smart reminders sent 24 hours and 2 hours before appointments.',
			recommendation: 'View Calendar Dashboard'
		},
		analytics: {
			revenue: '$342.8K',
			growth: '+58%',
			customers: 487,
			churn: '1.3%',
			insight: 'AIX One Platform predicts Q2 revenue will reach $1.2M based on current growth trends, seasonal patterns, and customer acquisition velocity. Confidence level: 92%. Key drivers: increased customer retention (+15%) and higher average order value (+22%).',
			recommendation: 'View Full Forecast'
		}
	}
	
	return (
		<motion.section 
			className="section proven-results-section" 
			id="results"
			ref={ref}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.6 }}
		>
			<div className="container">
				<div className="section-header">
					<motion.h2 
						className="section-title"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						See <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>The AIX One</span> in Action
					</motion.h2>
					<motion.p 
						className="section-sub"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						Watch how AIX One Platform orchestrates ARA and AXE agents to automate marketing, manage bookings, and deliver predictive insights—all working together seamlessly
					</motion.p>
				</div>

				<div className="interactive-demo-container">
					<div className="demo-tabs">
						<button 
							className={`demo-tab ${activeTab === 'marketing' ? 'active' : ''}`}
							onClick={() => setActiveTab('marketing')}
						>
							<Target size={16} />
							Marketing
						</button>
						<button 
							className={`demo-tab ${activeTab === 'bookings' ? 'active' : ''}`}
							onClick={() => setActiveTab('bookings')}
						>
							<Calendar size={16} />
							Bookings
						</button>
						<button 
							className={`demo-tab ${activeTab === 'analytics' ? 'active' : ''}`}
							onClick={() => setActiveTab('analytics')}
						>
							<BarChart3 size={16} />
							Analytics
						</button>
					</div>

					<AnimatePresence mode="wait">
						{activeTab === 'marketing' && (
							<motion.div
								key="marketing"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
								className="demo-content-grid"
							>
								<motion.div className="card demo-card" whileHover={{ y: -4 }}>
									<div className="demo-card-header">
										<div>
											<p className="demo-card-label">Active Campaigns</p>
											<h3 className="demo-card-value">{demoData.marketing.campaigns}</h3>
										</div>
										<div className="demo-icon-wrapper" style={{ background: 'rgba(24, 203, 190, 0.1)' }}>
											<Target size={24} style={{ color: 'var(--aix-cyan)' }} />
										</div>
									</div>
									<div className="demo-card-footer">
										<TrendingUp size={16} style={{ color: '#10b981' }} />
										<span style={{ color: '#10b981', fontWeight: 'var(--font-medium)' }}>{demoData.marketing.engagement}</span>
										<span style={{ color: 'var(--text-muted)' }}>vs last month</span>
									</div>
								</motion.div>

								<motion.div className="card demo-card" whileHover={{ y: -4 }}>
									<div className="demo-card-header">
										<div>
											<p className="demo-card-label">Total Reach</p>
											<h3 className="demo-card-value">{demoData.marketing.reach}</h3>
										</div>
										<div className="demo-icon-wrapper" style={{ background: 'rgba(14, 75, 142, 0.1)' }}>
											<Users size={24} style={{ color: 'var(--aix-navy)' }} />
										</div>
									</div>
									<div className="demo-card-footer">
										<CheckCircle2 size={16} style={{ color: '#10b981' }} />
										<span style={{ color: 'var(--text-muted)' }}>Conversion rate: {demoData.marketing.conversion}</span>
									</div>
								</motion.div>

								<motion.div className="card demo-card demo-card-featured" style={{ background: 'var(--gradient-primary)', color: 'var(--white)', gridColumn: '1 / -1' }} whileHover={{ y: -4 }}>
									<div className="demo-featured-header">
										<MessageSquare size={24} />
										<h4 className="demo-featured-title">ARA Agent: Intelligent Marketing Optimization</h4>
									</div>
									<p className="demo-featured-text">
										{demoData.marketing.insight}
									</p>
									<motion.a href="#contact" className="btn btn-secondary" style={{ background: 'var(--white)', color: 'var(--aix-navy)' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
										{demoData.marketing.recommendation}
									</motion.a>
								</motion.div>
							</motion.div>
						)}

						{activeTab === 'bookings' && (
							<motion.div
								key="bookings"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
								className="demo-content-grid"
							>
								<motion.div className="card demo-card" whileHover={{ y: -4 }}>
									<div className="demo-card-header">
										<div>
											<p className="demo-card-label">Scheduled Today</p>
											<h3 className="demo-card-value">{demoData.bookings.scheduled}</h3>
										</div>
										<div className="demo-icon-wrapper" style={{ background: 'rgba(24, 203, 190, 0.1)' }}>
											<Calendar size={24} style={{ color: 'var(--aix-cyan)' }} />
										</div>
									</div>
									<div className="demo-card-footer">
										<Clock size={16} style={{ color: 'var(--text-muted)' }} />
										<span style={{ color: 'var(--text-muted)' }}>{demoData.bookings.pending} pending confirmation</span>
									</div>
								</motion.div>

								<motion.div className="card demo-card" whileHover={{ y: -4 }}>
									<div className="demo-card-header">
										<div>
											<p className="demo-card-label">Success Rate</p>
											<h3 className="demo-card-value">{demoData.bookings.rate}</h3>
										</div>
										<div className="demo-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
											<CheckCircle2 size={24} style={{ color: '#10b981' }} />
										</div>
									</div>
									<div className="demo-card-footer">
										<TrendingUp size={16} style={{ color: '#10b981' }} />
										<span style={{ color: 'var(--text-muted)' }}>{demoData.bookings.completed} completed this month</span>
									</div>
								</motion.div>

								<motion.div className="card demo-card demo-card-featured" style={{ background: 'var(--gradient-primary)', color: 'var(--white)', gridColumn: '1 / -1' }} whileHover={{ y: -4 }}>
									<div className="demo-featured-header">
										<Calendar size={24} />
										<h4 className="demo-featured-title">ARA Agent: Automated Booking Intelligence</h4>
									</div>
									<p className="demo-featured-text">
										{demoData.bookings.insight}
									</p>
									<motion.a href="#contact" className="btn btn-secondary" style={{ background: 'var(--white)', color: 'var(--aix-navy)' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
										{demoData.bookings.recommendation}
									</motion.a>
								</motion.div>
							</motion.div>
						)}

						{activeTab === 'analytics' && (
							<motion.div
								key="analytics"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
								className="demo-content-grid"
							>
								<motion.div className="card demo-card" whileHover={{ y: -4 }}>
									<div className="demo-card-header">
										<div>
											<p className="demo-card-label">Monthly Revenue</p>
											<h3 className="demo-card-value">{demoData.analytics.revenue}</h3>
										</div>
										<div className="demo-icon-wrapper" style={{ background: 'rgba(234, 179, 8, 0.1)' }}>
											<DollarSign size={24} style={{ color: '#eab308' }} />
										</div>
									</div>
									<div className="demo-card-footer">
										<TrendingUp size={16} style={{ color: '#10b981' }} />
										<span style={{ color: '#10b981', fontWeight: 'var(--font-medium)' }}>{demoData.analytics.growth}</span>
										<span style={{ color: 'var(--text-muted)' }}>growth this quarter</span>
									</div>
								</motion.div>

								<motion.div className="card demo-card" whileHover={{ y: -4 }}>
									<div className="demo-card-header">
										<div>
											<p className="demo-card-label">Active Customers</p>
											<h3 className="demo-card-value">{demoData.analytics.customers}</h3>
										</div>
										<div className="demo-icon-wrapper" style={{ background: 'rgba(14, 75, 142, 0.1)' }}>
											<Users size={24} style={{ color: 'var(--aix-navy)' }} />
										</div>
									</div>
									<div className="demo-card-footer">
										<CheckCircle2 size={16} style={{ color: '#10b981' }} />
										<span style={{ color: 'var(--text-muted)' }}>Churn rate: {demoData.analytics.churn}</span>
									</div>
								</motion.div>

								<motion.div className="card demo-card demo-card-featured" style={{ background: 'var(--gradient-primary)', color: 'var(--white)', gridColumn: '1 / -1' }} whileHover={{ y: -4 }}>
									<div className="demo-featured-header">
										<BarChart3 size={24} />
										<h4 className="demo-featured-title">AIX One Platform: Predictive Business Intelligence</h4>
									</div>
									<p className="demo-featured-text">
										{demoData.analytics.insight}
									</p>
									<motion.a href="#contact" className="btn btn-secondary" style={{ background: 'var(--white)', color: 'var(--aix-navy)' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
										{demoData.analytics.recommendation}
									</motion.a>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.6, duration: 0.6 }}
						className="demo-cta"
					>
						<motion.a 
							href="#contact" 
							className="btn btn-primary" 
							style={{ background: 'var(--gradient-primary)', color: 'var(--white)' }}
							whileHover={{ scale: 1.05 }} 
							whileTap={{ scale: 0.95 }}
						>
							Start Your Free Trial
							<ArrowRight size={20} style={{ marginLeft: '8px' }} />
						</motion.a>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}

function PrivacyPolicy() {
	const [isOpen, setIsOpen] = useState(false)
	
	useEffect(() => {
		const handleHashChange = () => {
			setIsOpen(window.location.hash === '#privacy')
		}
		handleHashChange()
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])
	
	if (!isOpen) return null
	
	return (
		<AnimatePresence>
			<motion.div
				className="legal-modal-overlay"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={() => {
					window.location.hash = ''
					setIsOpen(false)
				}}
			>
				<motion.div
					className="legal-modal"
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 20 }}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="legal-modal-header">
						<div className="legal-modal-title-wrapper">
							<FileText size={24} style={{ color: 'var(--aix-cyan)' }} />
							<h2>Privacy Policy</h2>
						</div>
						<button
							className="legal-modal-close"
							onClick={() => {
								window.location.hash = ''
								setIsOpen(false)
							}}
						>
							<X size={24} />
						</button>
					</div>
					<div className="legal-modal-content">
						<p><strong>Last Updated: January 2025</strong></p>
						
						<h3>1. Information We Collect</h3>
						<p>AIXCellence, LLC ("we," "our," or "us") collects information that you provide directly to us, including:</p>
						<ul>
							<li>Account information (name, email address, company name)</li>
							<li>Business data you input into our platform</li>
							<li>Usage data and analytics about how you interact with our services</li>
							<li>Payment information processed through secure third-party providers</li>
						</ul>
						
						<h3>2. How We Use Your Information</h3>
						<p>We use the information we collect to:</p>
						<ul>
							<li>Provide, maintain, and improve our AI automation services</li>
							<li>Process transactions and send related information</li>
							<li>Send technical notices, updates, and support messages</li>
							<li>Respond to your comments and questions</li>
							<li>Monitor and analyze trends and usage</li>
						</ul>
						
						<h3>3. Data Security</h3>
						<p>We implement industry-standard security measures including:</p>
						<ul>
							<li>End-to-end encryption for data in transit and at rest</li>
							<li>Regular security audits and vulnerability assessments</li>
							<li>Access controls and authentication protocols</li>
							<li>Compliance with SOC 2 and GDPR standards</li>
						</ul>
						
						<h3>4. Data Sharing</h3>
						<p>We do not sell your personal information. We may share data only:</p>
						<ul>
							<li>With your explicit consent</li>
							<li>To comply with legal obligations</li>
							<li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
						</ul>
						
						<h3>5. Your Rights</h3>
						<p>You have the right to:</p>
						<ul>
							<li>Access, update, or delete your personal information</li>
							<li>Opt-out of marketing communications</li>
							<li>Request data portability</li>
							<li>File a complaint with relevant data protection authorities</li>
						</ul>
						
						<h3>6. Contact Us</h3>
						<p>For privacy-related questions, contact us at:</p>
						<p>Email: <a href="mailto:privacy@aixcellence.co">privacy@aixcellence.co</a><br />
						Address: 1500 Grant St #4242, Denver, CO 80203, United States</p>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

function TermsOfService() {
	const [isOpen, setIsOpen] = useState(false)
	
	useEffect(() => {
		const handleHashChange = () => {
			setIsOpen(window.location.hash === '#terms')
		}
		handleHashChange()
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])
	
	if (!isOpen) return null
	
	return (
		<AnimatePresence>
			<motion.div
				className="legal-modal-overlay"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={() => {
					window.location.hash = ''
					setIsOpen(false)
				}}
			>
				<motion.div
					className="legal-modal"
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 20 }}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="legal-modal-header">
						<div className="legal-modal-title-wrapper">
							<FileText size={24} style={{ color: 'var(--aix-cyan)' }} />
							<h2>Terms of Service</h2>
						</div>
						<button
							className="legal-modal-close"
							onClick={() => {
								window.location.hash = ''
								setIsOpen(false)
							}}
						>
							<X size={24} />
						</button>
					</div>
					<div className="legal-modal-content">
						<p><strong>Last Updated: January 2025</strong></p>
						
						<h3>1. Acceptance of Terms</h3>
						<p>By accessing or using AIXCellence services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
						
						<h3>2. Description of Service</h3>
						<p>AIXCellence provides AI-powered automation platforms and intelligent agents that help businesses automate operations, including customer service, marketing, bookings, and analytics.</p>
						
						<h3>3. User Accounts</h3>
						<p>You are responsible for:</p>
						<ul>
							<li>Maintaining the confidentiality of your account credentials</li>
							<li>All activities that occur under your account</li>
							<li>Providing accurate and complete information</li>
							<li>Notifying us immediately of any unauthorized use</li>
						</ul>
						
						<h3>4. Acceptable Use</h3>
						<p>You agree not to:</p>
						<ul>
							<li>Use the service for any illegal purpose</li>
							<li>Violate any applicable laws or regulations</li>
							<li>Interfere with or disrupt the service</li>
							<li>Attempt to gain unauthorized access to our systems</li>
							<li>Use the service to transmit harmful code or malware</li>
						</ul>
						
						<h3>5. Intellectual Property</h3>
						<p>All content, features, and functionality of the service are owned by AIXCellence, LLC and are protected by international copyright, trademark, and other intellectual property laws.</p>
						
						<h3>6. Payment and Billing</h3>
						<p>Subscription fees are billed in advance on a monthly or annual basis. You may cancel your subscription at any time, with access continuing until the end of the current billing period.</p>
						
						<h3>7. Limitation of Liability</h3>
						<p>To the maximum extent permitted by law, AIXCellence shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.</p>
						
						<h3>8. Contact Information</h3>
						<p>For questions about these Terms, contact us at:</p>
						<p>Email: <a href="mailto:legal@aixcellence.co">legal@aixcellence.co</a><br />
						Address: 1500 Grant St #4242, Denver, CO 80203, United States</p>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

function Security() {
	const [isOpen, setIsOpen] = useState(false)
	
	useEffect(() => {
		const handleHashChange = () => {
			setIsOpen(window.location.hash === '#security')
		}
		handleHashChange()
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])
	
	if (!isOpen) return null
	
	return (
		<AnimatePresence>
			<motion.div
				className="legal-modal-overlay"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={() => {
					window.location.hash = ''
					setIsOpen(false)
				}}
			>
				<motion.div
					className="legal-modal"
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 20 }}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="legal-modal-header">
						<div className="legal-modal-title-wrapper">
							<Lock size={24} style={{ color: 'var(--aix-cyan)' }} />
							<h2>Security</h2>
						</div>
						<button
							className="legal-modal-close"
							onClick={() => {
								window.location.hash = ''
								setIsOpen(false)
							}}
						>
							<X size={24} />
						</button>
					</div>
					<div className="legal-modal-content">
						<p><strong>Last Updated: January 2025</strong></p>
						
						<h3>Our Security Commitment</h3>
						<p>At AIXCellence, security is fundamental to everything we do. We protect your data with enterprise-grade security measures and industry best practices.</p>
						
						<h3>1. Data Encryption</h3>
						<ul>
							<li><strong>In Transit:</strong> All data transmitted between your devices and our servers is encrypted using TLS 1.3</li>
							<li><strong>At Rest:</strong> All stored data is encrypted using AES-256 encryption</li>
							<li><strong>Database:</strong> All databases are encrypted with multiple layers of protection</li>
						</ul>
						
						<h3>2. Access Controls</h3>
						<ul>
							<li>Multi-factor authentication (MFA) for all accounts</li>
							<li>Role-based access control (RBAC) to limit data access</li>
							<li>Regular access reviews and audits</li>
							<li>Principle of least privilege for all system access</li>
						</ul>
						
						<h3>3. Infrastructure Security</h3>
						<ul>
							<li>Hosted on secure, compliant cloud infrastructure</li>
							<li>Regular security patches and updates</li>
							<li>Intrusion detection and prevention systems</li>
							<li>DDoS protection and mitigation</li>
							<li>24/7 security monitoring and incident response</li>
						</ul>
						
						<h3>4. Compliance & Certifications</h3>
						<ul>
							<li><strong>SOC 2 Type II:</strong> Certified for security, availability, and confidentiality</li>
							<li><strong>GDPR Ready:</strong> Compliant with European data protection regulations</li>
							<li><strong>CCPA:</strong> Compliant with California Consumer Privacy Act</li>
							<li>Regular third-party security audits</li>
						</ul>
						
						<h3>5. Data Protection</h3>
						<ul>
							<li>Automated backups with point-in-time recovery</li>
							<li>Data redundancy across multiple geographic regions</li>
							<li>Secure data deletion and retention policies</li>
							<li>No data sharing with third parties without explicit consent</li>
						</ul>
						
						<h3>6. Incident Response</h3>
						<p>We maintain a comprehensive incident response plan and will notify affected users within 72 hours of discovering any security breach that may impact their data.</p>
						
						<h3>7. Security Best Practices for Users</h3>
						<ul>
							<li>Use strong, unique passwords</li>
							<li>Enable multi-factor authentication</li>
							<li>Regularly review account activity</li>
							<li>Keep your devices and browsers updated</li>
							<li>Report any suspicious activity immediately</li>
						</ul>
						
						<h3>8. Security Contact</h3>
						<p>To report security vulnerabilities or concerns:</p>
						<p>Email: <a href="mailto:security@aixcellence.co">security@aixcellence.co</a><br />
						Address: 1500 Grant St #4242, Denver, CO 80203, United States</p>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

// Shared case studies data
const caseStudiesData = [
		{
			id: 1,
			industry: 'technology',
			company: 'TechCorp Solutions',
			title: '65% Cost Reduction in Customer Support with ARA Agent',
			excerpt: 'TechCorp implemented ARA Agent to handle customer inquiries, resulting in massive cost savings while improving response times and customer satisfaction.',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
			results: [
				{ label: 'Cost Reduction', value: '65%', icon: TrendingDown },
				{ label: 'Response Time', value: '2 min', icon: Clock },
				{ label: 'Satisfaction', value: '94%', icon: Award }
			],
			challenge: 'TechCorp was struggling with high customer support costs and slow response times, handling over 10,000 inquiries monthly.',
			solution: 'Implemented ARA Agent to handle 80% of routine inquiries, with intelligent routing for complex issues to human agents.',
			featured: true
		},
		{
			id: 2,
			industry: 'healthcare',
			company: 'MediCare Plus',
			title: 'Automated Appointment Scheduling Saves 20 Hours Weekly',
			excerpt: 'MediCare Plus deployed ARA Agent for appointment management, eliminating scheduling conflicts and reducing no-shows by 40%.',
			image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
			results: [
				{ label: 'Time Saved', value: '20 hrs/week', icon: Clock },
				{ label: 'No-Shows', value: '-40%', icon: TrendingDown },
				{ label: 'Efficiency', value: '+85%', icon: TrendingUp }
			],
			challenge: 'Manual appointment scheduling was consuming staff time and leading to frequent scheduling conflicts and patient no-shows.',
			solution: 'ARA Agent now handles all appointment scheduling, sends automated reminders, and manages calendar conflicts automatically.',
			featured: false
		},
		{
			id: 3,
			industry: 'retail',
			company: 'Fashion Forward',
			title: 'Video Marketing Production Increased 10x with AXE Agent',
			excerpt: 'Fashion Forward uses AXE Agent to create promotional videos, reducing production time from weeks to hours and cutting costs by 70%.',
			image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
			results: [
				{ label: 'Production', value: '10x faster', icon: TrendingUp },
				{ label: 'Cost Savings', value: '70%', icon: DollarSign },
				{ label: 'Languages', value: '12', icon: Languages }
			],
			challenge: 'Creating marketing videos for multiple regions and languages was expensive and time-consuming, limiting campaign frequency.',
			solution: 'AXE Agent generates professional video content in multiple languages, enabling rapid campaign deployment across global markets.',
			featured: false
		},
		{
			id: 4,
			industry: 'finance',
			company: 'SecureBank Financial',
			title: '24/7 Customer Service with 99.8% Uptime',
			excerpt: 'SecureBank implemented ARA Agent to provide round-the-clock customer support, handling account inquiries and transaction support.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
			results: [
				{ label: 'Uptime', value: '99.8%', icon: Award },
				{ label: 'Resolution', value: '92%', icon: CheckCircle2 },
				{ label: 'Response', value: '<30 sec', icon: Clock }
			],
			challenge: 'Providing 24/7 customer support was costly, and after-hours inquiries were going unanswered, affecting customer satisfaction.',
			solution: 'ARA Agent handles all customer inquiries 24/7, with secure integration to banking systems for account information and transaction support.',
			featured: false
		},
		{
			id: 5,
			industry: 'education',
			company: 'EduLearn Academy',
			title: 'Multilingual Course Content Creation at Scale',
			excerpt: 'EduLearn uses AXE Agent to create educational video content in 15 languages, expanding their reach to international students.',
			image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
			results: [
				{ label: 'Languages', value: '15', icon: Languages },
				{ label: 'Content', value: '5x more', icon: TrendingUp },
				{ label: 'Students', value: '+200%', icon: Users }
			],
			challenge: 'Creating educational content in multiple languages required hiring translators and video production teams, limiting course offerings.',
			solution: 'AXE Agent generates course videos with cloned instructors in multiple languages, maintaining consistent quality and teaching style.',
			featured: false
		},
		{
			id: 6,
			industry: 'technology',
			company: 'CloudScale Inc.',
			title: 'Sales Pipeline Automation Increases Conversions by 45%',
			excerpt: 'CloudScale automated their sales follow-up process with ARA Agent, ensuring no lead goes cold and improving conversion rates significantly.',
			image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
			results: [
				{ label: 'Conversions', value: '+45%', icon: TrendingUp },
				{ label: 'Follow-ups', value: '100%', icon: CheckCircle2 },
				{ label: 'Response', value: '<5 min', icon: Clock }
			],
			challenge: 'Sales team struggled to follow up with all leads promptly, resulting in lost opportunities and low conversion rates.',
			solution: 'ARA Agent automatically follows up with leads, qualifies prospects, schedules demos, and routes high-value opportunities to sales team.',
			featured: false
		},
		{
			id: 7,
			industry: 'healthcare',
			company: 'MedTech Innovations',
			title: 'Custom AI Agent for Medical Device Support',
			excerpt: 'MedTech needed a specialized AI agent to handle technical support for complex medical devices, requiring custom development with industry-specific knowledge.',
			image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
			results: [
				{ label: 'Resolution', value: '88%', icon: CheckCircle2 },
				{ label: 'Compliance', value: '100%', icon: Shield },
				{ label: 'Support Cost', value: '-55%', icon: TrendingDown }
			],
			challenge: 'MedTech required an AI agent with deep knowledge of medical device regulations, technical specifications, and compliance requirements that standard products couldn\'t provide.',
			solution: 'Custom AI agent developed with medical device expertise, HIPAA compliance, and integration with their proprietary device management system.',
			featured: false
		},
		{
			id: 8,
			industry: 'retail',
			company: 'Global Retail Chain',
			title: 'Omnichannel Customer Experience Transformation',
			excerpt: 'A major retail chain deployed both ARA and AXE agents to create a seamless omnichannel experience, handling customer service and creating personalized video content.',
			image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
			results: [
				{ label: 'Satisfaction', value: '+52%', icon: TrendingUp },
				{ label: 'Engagement', value: '+180%', icon: Users },
				{ label: 'Revenue', value: '+28%', icon: DollarSign }
			],
			challenge: 'Managing customer interactions across multiple channels while creating personalized marketing content at scale was overwhelming their team.',
			solution: 'Deployed ARA Agent for unified customer support across all channels and AXE Agent for personalized video marketing campaigns.',
			featured: false
		}
	]

function CaseStudyPage() {
	const [studyId, setStudyId] = useState<number | null>(() => {
		const hash = window.location.hash
		const match = hash.match(/^#case-(\d+)$/)
		return match ? parseInt(match[1], 10) : null
	})
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash
			const match = hash.match(/^#case-(\d+)$/)
			if (match) {
				setStudyId(parseInt(match[1], 10))
			} else {
				setStudyId(null)
			}
		}
		
		// Check immediately
		handleHashChange()
		
		// Listen for hash changes
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])
	
	const study = caseStudiesData.find(s => s.id === studyId)
	
	if (!studyId || !study) {
		return (
			<div style={{ padding: '100px 20px', textAlign: 'center' }}>
				<p>Case study not found. <a href="#cases">Return to Case Studies</a></p>
			</div>
		)
	}
	
	// SEO for case study
	useSEO({
		title: `${study.title} | AIXcellence Case Study`,
		description: study.excerpt,
		keywords: `case study, ${study.industry}, ${study.company}, AI automation success, ARA Agent, AXE Agent, ${study.title}`,
		url: `https://aixcellence.co/#case-${studyId}`,
		canonical: `https://aixcellence.co/#case-${studyId}`,
		image: study.image,
		type: 'article'
	})
	
	const fullContent: Record<number, { challenge: string[], solution: string[], results: string[], testimonial?: string }> = {
		1: {
			challenge: [
				'TechCorp Solutions, a leading technology company with over 500 employees, was facing a critical challenge: their customer support costs were spiraling out of control while response times were increasing. With over 10,000 customer inquiries monthly across multiple channels, they needed a solution that could scale without breaking the bank.',
				'The problem was multifaceted. Their support team was overwhelmed, leading to longer response times and decreased customer satisfaction. Hiring more support staff wasn\'t a viable solution—it would have increased costs by 40% and still wouldn\'t guarantee 24/7 coverage. They needed a smarter approach.',
				'Customer inquiries were coming in through multiple channels: email, phone, live chat, and social media. Managing these channels required significant resources, and the lack of integration meant that customer information was fragmented across different systems. This fragmentation led to inconsistent service quality and frustrated customers who had to repeat their issues multiple times.'
			],
			solution: [
				'After extensive research and evaluation, TechCorp decided to implement AIXcellence ARA Agent. The implementation process was carefully planned and executed over three months, with a phased rollout that allowed them to test and refine the system before full deployment.',
				'ARA Agent was integrated with TechCorp\'s existing CRM, ticketing system, and knowledge base, creating a unified support experience. The AI was trained on TechCorp\'s product documentation, previous support tickets, and company policies to ensure accurate, brand-consistent responses.',
				'The implementation included intelligent routing capabilities, allowing ARA to handle routine inquiries independently while seamlessly escalating complex technical issues to human agents. This hybrid approach ensured that customers always received the appropriate level of support.',
				'Custom workflows were configured to match TechCorp\'s business processes, including automated ticket creation, customer follow-ups, and escalation protocols. The AI was also programmed to maintain TechCorp\'s brand voice and communication style.'
			],
			results: [
				'Within the first month, ARA Agent was handling 65% of all customer inquiries independently, with a 98% resolution rate. Response times dropped from an average of 4 hours to under 2 minutes. Customer satisfaction scores increased from 72% to 94%.',
				'Cost savings were substantial. By handling routine inquiries automatically, TechCorp reduced their support costs by 65% while actually improving service quality. The human support team could now focus on complex technical issues and relationship-building, rather than answering the same questions repeatedly.',
				'One of the most significant benefits was 24/7 availability. Before implementing ARA Agent, TechCorp could only provide support during business hours. Now, customers receive instant responses at any time of day or night, regardless of time zones. This has been particularly valuable for their international customer base.',
				'The AI agent also improved consistency. Previously, different support agents might provide slightly different answers to the same question, leading to confusion. ARA Agent ensures that every customer receives accurate, consistent information every time, building trust and reducing follow-up inquiries.',
				'Perhaps most importantly, the implementation improved employee satisfaction. Support team members were relieved of repetitive, mundane tasks and could focus on more engaging, complex problem-solving. This led to higher job satisfaction and lower turnover rates.'
			],
			testimonial: '"ARA Agent has transformed our customer support operations. We\'ve reduced costs by 65% while dramatically improving response times and customer satisfaction. Our team can now focus on what they do best—solving complex problems and building relationships." - Sarah Johnson, VP of Customer Success, TechCorp Solutions'
		},
		2: {
			challenge: [
				'MediCare Plus, a growing healthcare network with 15 locations, was struggling with appointment scheduling inefficiencies. Manual scheduling was consuming significant staff time, leading to frequent scheduling conflicts and patient no-shows that impacted both revenue and patient satisfaction.',
				'The scheduling process was fragmented across multiple locations, with each location managing its own calendar. This lack of centralization made it difficult to optimize appointment slots, leading to underutilized time slots and frustrated patients who couldn\'t find convenient appointment times.',
				'No-show rates were particularly problematic, averaging 25% across all locations. This not only resulted in lost revenue but also prevented other patients from accessing care. Reminder systems were inconsistent, and many patients simply forgot about their appointments.'
			],
			solution: [
				'MediCare Plus implemented ARA Agent to handle all appointment scheduling and management. The AI was integrated with their existing practice management system, allowing it to access real-time availability across all locations.',
				'ARA Agent was configured to send automated appointment reminders via SMS and email, with customizable timing based on appointment type. The AI also proactively identifies scheduling conflicts and suggests alternative times to patients.',
				'Intelligent scheduling algorithms were implemented to optimize appointment distribution, ensuring that popular time slots are utilized efficiently while maintaining flexibility for urgent appointments. The system also automatically manages waitlists and can fill cancellations instantly.',
				'For patients, ARA Agent provides a seamless scheduling experience. They can book, reschedule, or cancel appointments through natural conversation, and the AI handles all the coordination automatically.'
			],
			results: [
				'MediCare Plus now saves 20 hours per week across all locations on scheduling-related tasks. Staff can focus on patient care rather than administrative work, leading to improved patient experiences and staff satisfaction.',
				'No-show rates dropped from 25% to 15%, a 40% reduction. This improvement is directly attributed to ARA Agent\'s proactive reminder system and easy rescheduling capabilities. Patients appreciate the convenience and are more likely to keep their appointments.',
				'Scheduling efficiency increased by 85%, with better utilization of appointment slots and reduced gaps in the schedule. The AI\'s ability to optimize scheduling across all locations has maximized revenue potential while improving patient access to care.',
				'Patient satisfaction scores for the scheduling process increased significantly, with patients appreciating the 24/7 availability and instant confirmation of appointments. The ability to reschedule easily has reduced frustration and improved overall patient experience.'
			],
			testimonial: '"ARA Agent has revolutionized our appointment management. We\'ve eliminated scheduling conflicts, reduced no-shows by 40%, and our staff can focus on what matters most—patient care." - Dr. Michael Chen, Chief Medical Officer, MediCare Plus'
		},
		3: {
			challenge: [
				'Fashion Forward, an international fashion retailer, was struggling to keep up with video marketing demands. Creating promotional videos for multiple regions and languages was expensive and time-consuming, limiting campaign frequency and global reach.',
				'Traditional video production required hiring actors, booking studios, coordinating schedules, and managing post-production for each market. A single 60-second video could cost tens of thousands of dollars and take weeks to produce. For a company operating in 12 countries, this was unsustainable.',
				'The need for localized content was critical. Each market required videos in the local language with culturally appropriate messaging. This meant either hiring multilingual actors or using dubbing, both of which compromised authenticity and increased costs significantly.'
			],
			solution: [
				'Fashion Forward implemented AXE Agent to create their video marketing content. With just a few minutes of source footage featuring their brand spokesperson, they could now generate unlimited video variations instantly.',
				'AXE Agent\'s multi-language capabilities allowed Fashion Forward to create authentic, localized content for all 12 markets without additional production costs. The AI maintains the spokesperson\'s authentic look and voice while delivering messages in each market\'s language.',
				'The real-time generation capabilities meant that Fashion Forward could respond quickly to market trends, seasonal changes, and promotional opportunities. They could create, test, and deploy new video content within hours rather than weeks.',
				'Personalization became possible at scale. Fashion Forward could now create personalized video messages for VIP customers, seasonal campaigns, and product launches, all while maintaining brand consistency and quality.'
			],
			results: [
				'Video production increased 10x while costs decreased by 70%. Fashion Forward now produces more video content than ever before, enabling them to run more frequent campaigns and reach more audiences.',
				'The ability to create content in 12 languages simultaneously has enabled Fashion Forward to launch coordinated global campaigns, ensuring consistent messaging across all markets while respecting local cultural nuances.',
				'Time-to-market for video content dropped from weeks to hours. This agility has allowed Fashion Forward to capitalize on trending topics, respond to competitor moves, and launch time-sensitive promotions that would have been impossible with traditional production.',
				'Brand consistency improved significantly. Every video maintains the same high quality and brand voice, regardless of language or market. This consistency has strengthened Fashion Forward\'s global brand identity while enabling localized relevance.'
			],
			testimonial: '"AXE Agent has transformed our video marketing. We\'re producing 10x more content at 70% less cost, and our global campaigns are more effective than ever. The ability to create authentic, localized content instantly is a game-changer." - Emma Rodriguez, Global Marketing Director, Fashion Forward'
		},
		4: {
			challenge: [
				'SecureBank Financial, a regional bank with 50+ branches, needed to provide 24/7 customer support but couldn\'t justify the cost of round-the-clock staffing. After-hours inquiries were going unanswered, affecting customer satisfaction and potentially losing business to competitors.',
				'The banking industry requires high levels of security and compliance, making it challenging to implement automated solutions. SecureBank needed a solution that could handle customer inquiries securely while maintaining strict compliance with financial regulations.',
				'Customer inquiries ranged from simple account balance questions to complex transaction disputes. The bank needed a system that could handle routine inquiries efficiently while ensuring that sensitive or complex issues were properly escalated to human agents.'
			],
			solution: [
				'SecureBank implemented ARA Agent with enterprise-grade security and compliance features. The AI was integrated with their secure banking systems, allowing it to access account information while maintaining strict security protocols.',
				'ARA Agent was configured with comprehensive compliance rules, ensuring that all interactions comply with banking regulations. The AI can handle routine inquiries like balance checks, transaction history, and account information while automatically escalating sensitive operations to human agents.',
				'Multi-channel support was implemented, allowing customers to interact with ARA Agent through secure chat, phone, and email. The AI maintains context across channels, providing a seamless experience regardless of how customers choose to interact.',
				'Advanced security features include fraud detection, suspicious activity monitoring, and automatic flagging of unusual patterns. The AI can identify potential security issues and escalate them immediately to the security team.'
			],
			results: [
				'SecureBank achieved 99.8% uptime, ensuring that customers always have access to support. This reliability has significantly improved customer satisfaction and trust in the bank\'s digital services.',
				'92% of customer inquiries are now resolved without human intervention, allowing the bank to provide 24/7 support without proportional increases in staffing costs. Response times average under 30 seconds, compared to hours for after-hours inquiries previously.',
				'Customer satisfaction scores increased significantly, with customers appreciating the instant responses and 24/7 availability. The ability to get quick answers to routine questions has reduced frustration and improved the overall banking experience.',
				'Security has actually improved with ARA Agent\'s fraud detection capabilities. The AI can identify suspicious patterns faster than human agents, leading to quicker response times for potential security issues.'
			],
			testimonial: '"ARA Agent has enabled us to provide 24/7 customer support while maintaining the highest security standards. Our customers appreciate the instant responses, and we\'ve improved both service quality and security." - Robert Martinez, Chief Technology Officer, SecureBank Financial'
		},
		5: {
			challenge: [
				'EduLearn Academy, an online education platform, wanted to expand globally but was limited by the cost and complexity of creating educational content in multiple languages. Creating course videos with instructors speaking different languages required hiring multilingual instructors or using translation services, both of which were expensive and time-consuming.',
				'The platform had a successful English-language course catalog but struggled to serve international students who preferred content in their native languages. This limitation prevented EduLearn from accessing large international markets and growing their student base.',
				'Maintaining consistent teaching quality across languages was challenging. Translated content often lost nuance, and hiring native-speaking instructors for each language was cost-prohibitive. The platform needed a solution that could scale globally without compromising quality.'
			],
			solution: [
				'EduLearn Academy implemented AXE Agent to create multilingual course content. Using their top instructors as source material, AXE Agent generates course videos in 15 languages, maintaining the instructor\'s teaching style, expressions, and expertise while delivering content in each student\'s preferred language.',
				'The AI maintains pedagogical consistency across languages, ensuring that learning outcomes are the same regardless of language. Cultural nuances are preserved, making the content feel authentic and relevant to each market.',
				'AXE Agent enables rapid content creation, allowing EduLearn to launch new courses in multiple languages simultaneously. This capability has transformed their go-to-market strategy, enabling global launches rather than sequential market entry.',
				'Personalization became possible at scale. EduLearn can now create personalized course introductions and progress updates for students in their native languages, creating a more engaging and supportive learning experience.'
			],
			results: [
				'EduLearn now offers courses in 15 languages, expanding their addressable market significantly. Student enrollment from international markets has increased by 200%, driving substantial revenue growth.',
				'Content production increased 5x while maintaining the same quality standards. The platform can now create more courses, update existing content more frequently, and respond to market demands faster than ever before.',
				'Student satisfaction scores improved across all markets, with students appreciating content in their native languages. The authentic delivery and cultural relevance have made the learning experience more engaging and effective.',
				'Cost per course production decreased by 75%, enabling EduLearn to invest more in course development and student support. The savings have been reinvested in improving course quality and expanding the curriculum.'
			],
			testimonial: '"AXE Agent has enabled us to go global without the traditional barriers. We\'re now serving students in 15 languages, and our international enrollment has grown by 200%. The quality and authenticity of the content is remarkable." - Dr. Patricia Williams, Chief Academic Officer, EduLearn Academy'
		},
		6: {
			challenge: [
				'CloudScale Inc., a B2B SaaS company, was struggling with lead management and conversion. Their sales team couldn\'t follow up with all leads promptly, resulting in lost opportunities and low conversion rates. Many qualified leads were going cold before the sales team could engage them.',
				'The sales process was manual and inconsistent. Different sales reps had different follow-up strategies, leading to inconsistent customer experiences. There was no systematic approach to lead qualification, and high-value opportunities were sometimes overlooked.',
				'Response times were a critical issue. Studies show that responding to leads within 5 minutes increases conversion rates by 900%, but CloudScale\'s average response time was over 24 hours. This delay was costing them significant revenue.'
			],
			solution: [
				'CloudScale implemented ARA Agent to automate their sales pipeline and lead management. The AI was integrated with their CRM system, allowing it to qualify leads, schedule demos, and provide initial product information automatically.',
				'ARA Agent handles initial lead qualification through intelligent conversations, asking relevant questions to determine fit, budget, and timeline. Qualified leads are automatically routed to the appropriate sales rep with a comprehensive summary, while unqualified leads receive appropriate follow-up.',
				'Automated follow-up sequences ensure that no lead goes cold. ARA Agent maintains engagement with leads through personalized messages, answers questions, and nurtures relationships until the sales team can take over.',
				'The AI also manages demo scheduling, sending calendar invitations, reminders, and preparation materials automatically. This ensures that demos are well-attended and that sales reps are prepared with relevant information.'
			],
			results: [
				'Conversion rates increased by 45%, directly attributed to faster response times and consistent follow-up. Leads now receive responses within 5 minutes, dramatically improving engagement and conversion potential.',
				'100% of leads now receive follow-up, eliminating the problem of leads going cold. The systematic approach ensures that every lead is properly qualified and routed, maximizing the sales team\'s efficiency.',
				'Response times dropped from 24+ hours to under 5 minutes, meeting industry best practices and significantly improving lead engagement. This speed has been a key factor in the conversion rate improvement.',
				'Sales team productivity increased significantly. By handling routine qualification and scheduling, ARA Agent frees sales reps to focus on high-value activities like demos, negotiations, and relationship-building. This has improved both conversion rates and sales rep satisfaction.'
			],
			testimonial: '"ARA Agent has transformed our sales process. We\'re converting 45% more leads, and our sales team can focus on closing deals rather than managing leads. The ROI has been exceptional." - Mark Thompson, VP of Sales, CloudScale Inc.'
		},
		7: {
			challenge: [
				'MedTech Innovations, a leading manufacturer of advanced medical devices, needed an AI agent to handle technical support for their complex medical equipment. Standard AI solutions couldn\'t provide the specialized knowledge required for medical device support, including regulatory compliance, technical specifications, and safety protocols.',
				'The company\'s support team was overwhelmed with technical inquiries about device operation, troubleshooting, maintenance, and compliance requirements. Each inquiry required deep knowledge of medical device regulations, technical documentation, and safety protocols that standard AI agents couldn\'t provide.',
				'Compliance was critical. Any support interaction involving medical devices must comply with FDA regulations, HIPAA requirements, and industry safety standards. Standard AI products couldn\'t guarantee this level of compliance and specialized knowledge.'
			],
			solution: [
				'MedTech Innovations engaged AIXcellence\'s Custom Software Solutions Division to develop a specialized AI agent tailored to their medical device support needs. The custom agent was built on our proven ARA Agent foundation but enhanced with medical device expertise and compliance capabilities.',
				'The custom agent was trained on MedTech\'s extensive technical documentation, regulatory requirements, safety protocols, and device specifications. It was integrated with their proprietary device management system, allowing it to access real-time device status and maintenance records.',
				'HIPAA compliance was built into every aspect of the agent, ensuring that all patient data and device information is handled according to strict healthcare regulations. The agent can identify when inquiries involve sensitive information and automatically escalate to human agents when necessary.',
				'The custom agent understands medical device terminology, can interpret technical specifications, and provides accurate troubleshooting guidance while maintaining strict compliance with all regulatory requirements.'
			],
			results: [
				'88% of technical support inquiries are now resolved without human intervention, while maintaining 100% compliance with all regulatory requirements. The custom agent provides accurate, compliant support that meets the specialized needs of medical device users.',
				'Support costs decreased by 55% while improving response times and accuracy. The specialized knowledge built into the custom agent ensures that support staff only need to handle the most complex cases, maximizing their efficiency.',
				'Customer satisfaction improved significantly, with medical professionals appreciating the instant access to accurate technical information. The ability to get immediate answers to device questions has improved user experience and device utilization.',
				'The custom agent has become an essential part of MedTech\'s support infrastructure, handling thousands of inquiries monthly while maintaining the highest standards of accuracy and compliance. The investment in custom development has paid for itself multiple times over.'
			],
			testimonial: '"The custom AI agent from AIXcellence has transformed our technical support. It understands our devices, complies with all regulations, and provides accurate support instantly. This is exactly what we needed—a solution tailored to our specialized requirements." - Dr. Jennifer Park, Director of Customer Support, MedTech Innovations'
		},
		8: {
			challenge: [
				'A major global retail chain with operations in 30+ countries was struggling to provide consistent customer experiences across all channels while creating personalized marketing content at scale. Their customer service team was overwhelmed, and their marketing team couldn\'t produce enough video content to support their global campaigns.',
				'Customer inquiries were coming through multiple channels—in-store, online chat, social media, email, and phone—but there was no unified system to manage these interactions. This fragmentation led to inconsistent service quality and frustrated customers who had to repeat their issues across different channels.',
				'Marketing content creation was a bottleneck. The company needed to create promotional videos for each market, but traditional production was too slow and expensive. They were missing opportunities to engage customers with timely, personalized content.'
			],
			solution: [
				'The retail chain implemented a comprehensive solution using both ARA and AXE agents. ARA Agent was deployed to handle all customer interactions across all channels, creating a unified customer experience regardless of how customers choose to engage.',
				'AXE Agent was implemented to create personalized video marketing content at scale. The AI generates promotional videos, product demonstrations, and personalized customer messages in multiple languages, enabling rapid campaign deployment across all markets.',
				'The agents were integrated with the company\'s CRM, inventory system, and loyalty program, allowing them to provide personalized service based on customer history, preferences, and purchase patterns. This integration creates a seamless experience from marketing to purchase to support.',
				'Custom workflows were developed to match the retail chain\'s specific business processes, including order management, returns processing, loyalty program management, and cross-selling recommendations.'
			],
			results: [
				'Customer satisfaction increased by 52%, with customers appreciating the consistent, personalized experience across all channels. The unified approach means customers receive the same high-quality service whether they\'re shopping online, in-store, or through social media.',
				'Customer engagement increased by 180%, driven by personalized video marketing content that resonates with customers in each market. The ability to create authentic, localized content quickly has enabled more frequent and effective marketing campaigns.',
				'Revenue increased by 28%, attributed to improved customer experience, better cross-selling through AI recommendations, and more effective marketing campaigns. The AI agents help customers find what they need while suggesting relevant products.',
				'Operational efficiency improved significantly. The retail chain can now handle more customer interactions with the same team size, while marketing can produce more content with fewer resources. This efficiency has enabled the company to scale operations without proportional cost increases.'
			],
			testimonial: '"The combination of ARA and AXE agents has transformed our customer experience and marketing capabilities. We\'re providing better service, creating more engaging content, and driving significant revenue growth. This is the future of retail." - Maria Santos, Chief Customer Officer, Global Retail Chain'
		}
	}
	
	const content = fullContent[studyId]
	if (!content) return null
	
	const relatedStudies = caseStudiesData.filter(s => s.id !== studyId && s.industry === study.industry).slice(0, 3)
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Navigation */}
			<motion.section 
				className="casestudy-nav-section"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				<div className="container">
					<motion.a 
						href="#cases" 
						className="casestudy-back-link"
						whileHover={{ x: -4 }}
					>
						<ArrowLeft size={20} />
						Back to Case Studies
					</motion.a>
				</div>
			</motion.section>
			
			{/* Hero Section */}
			<motion.section 
				className="casestudy-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="casestudy-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="casestudy-company-badge">
							<Briefcase size={20} />
							<span>{study.company}</span>
							<span className="casestudy-industry">{study.industry}</span>
						</div>
						<h1 className="casestudy-title">{study.title}</h1>
						<p className="casestudy-excerpt">{study.excerpt}</p>
					</motion.div>
					<motion.div 
						className="casestudy-hero-image"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.4 }}
					>
						<img src={study.image} alt={study.title} />
					</motion.div>
				</div>
			</motion.section>
			
			{/* Results Overview */}
			<motion.section 
				className="casestudy-results-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="casestudy-results-grid">
						{study.results.map((result, idx) => {
							const IconComponent = result.icon
							return (
								<motion.div
									key={idx}
									className="casestudy-result-card"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
								>
									<div className="casestudy-result-icon">
										<IconComponent size={32} />
									</div>
									<div className="casestudy-result-value">{result.value}</div>
									<div className="casestudy-result-label">{result.label}</div>
								</motion.div>
							)
						})}
					</div>
				</div>
			</motion.section>
			
			{/* Content Section */}
			<motion.section 
				className="casestudy-content-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="casestudy-content-wrapper">
						<article className="casestudy-article">
							{/* Challenge Section */}
							<motion.div
								className="casestudy-section"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2 }}
							>
								<h2 className="casestudy-section-title">The Challenge</h2>
								{content.challenge.map((paragraph, idx) => (
									<p key={idx} className="casestudy-paragraph">{paragraph}</p>
								))}
							</motion.div>
							
							{/* Solution Section */}
							<motion.div
								className="casestudy-section"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 }}
							>
								<h2 className="casestudy-section-title">The Solution</h2>
								{content.solution.map((paragraph, idx) => (
									<p key={idx} className="casestudy-paragraph">{paragraph}</p>
								))}
							</motion.div>
							
							{/* Results Section */}
							<motion.div
								className="casestudy-section"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.4 }}
							>
								<h2 className="casestudy-section-title">The Results</h2>
								{content.results.map((paragraph, idx) => (
									<p key={idx} className="casestudy-paragraph">{paragraph}</p>
								))}
							</motion.div>
							
							{/* Testimonial */}
							{content.testimonial && (
								<motion.div
									className="casestudy-testimonial"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.5 }}
								>
									<div className="casestudy-testimonial-icon">
										<MessageSquare size={32} />
									</div>
									<blockquote className="casestudy-testimonial-text">
										{content.testimonial}
									</blockquote>
								</motion.div>
							)}
						</article>
						
						{/* Sidebar */}
						<aside className="casestudy-sidebar">
							<div className="casestudy-share-card">
								<h4 className="casestudy-share-title">Share This Case Study</h4>
								<div className="casestudy-share-links">
									<motion.a
										href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(study.title)}&url=${encodeURIComponent(window.location.href)}`}
										className="casestudy-share-link"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Twitter size={20} />
									</motion.a>
									<motion.a
										href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
										className="casestudy-share-link"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Linkedin size={20} />
									</motion.a>
									<motion.button
										className="casestudy-share-link"
										onClick={() => {
											navigator.clipboard.writeText(window.location.href)
											alert('Link copied to clipboard!')
										}}
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Share2 size={20} />
									</motion.button>
								</div>
							</div>
							
							{relatedStudies.length > 0 && (
								<div className="casestudy-related-card">
									<h4 className="casestudy-related-title">Related Case Studies</h4>
									<div className="casestudy-related-list">
										{relatedStudies.map((relatedStudy) => (
											<motion.a
												key={relatedStudy.id}
												href={`#case-${relatedStudy.id}`}
												className="casestudy-related-item"
												whileHover={{ x: 4 }}
											>
												<img src={relatedStudy.image} alt={relatedStudy.title} />
												<div className="casestudy-related-content">
													<h5 className="casestudy-related-item-title">{relatedStudy.title}</h5>
													<span className="casestudy-related-company">{relatedStudy.company}</span>
												</div>
											</motion.a>
										))}
									</div>
								</div>
							)}
						</aside>
					</div>
				</div>
			</motion.section>
			
			{/* CTA Section */}
			<motion.section 
				className="casestudy-cta-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="casestudy-cta-content">
						<h2 className="casestudy-cta-title">Ready to Achieve Similar Results?</h2>
						<p className="casestudy-cta-subtitle">
							See how AIXcellence can transform your business operations and deliver measurable results.
						</p>
						<div className="casestudy-cta-buttons">
							<motion.a 
								href="#contact" 
								className="btn btn-primary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get Started
								<ArrowRight size={20} />
							</motion.a>
							<motion.a 
								href="#contact" 
								className="btn btn-secondary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Schedule a Demo
							</motion.a>
						</div>
					</div>
				</div>
			</motion.section>
		</motion.div>
	)
}

function CaseStudiesPage() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const [selectedIndustry, setSelectedIndustry] = useState('all')
	
	useSEO({
		title: 'Case Studies — AI Automation Success Stories | AIXcellence',
		description: 'Discover how businesses across industries are transforming operations with AIXcellence AI agents. Real success stories showing cost reduction, efficiency gains, and customer satisfaction improvements.',
		keywords: 'AI automation case studies, AI agent success stories, business automation examples, customer support AI results, video AI case studies',
		url: 'https://aixcellence.co/#cases',
		canonical: 'https://aixcellence.co/#cases'
	})
	
	const caseStudies = caseStudiesData
	
	const industries = [
		{ id: 'all', label: 'All Industries' },
		{ id: 'technology', label: 'Technology' },
		{ id: 'healthcare', label: 'Healthcare' },
		{ id: 'retail', label: 'Retail' },
		{ id: 'finance', label: 'Finance' },
		{ id: 'education', label: 'Education' }
	]
	
	const filteredStudies = selectedIndustry === 'all' 
		? caseStudies 
		: caseStudies.filter(study => study.industry === selectedIndustry)
	
	const featuredStudy = caseStudies.find(study => study.featured)
	const regularStudies = filteredStudies.filter(study => !study.featured)
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Hero Section */}
			<motion.section 
				className="casestudies-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="casestudies-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="casestudies-hero-badge">
							<Briefcase size={20} />
							<span>Case Studies</span>
						</div>
						<h1 className="casestudies-hero-title">
							Real Results from Real Businesses
						</h1>
						<p className="casestudies-hero-subtitle">
							Discover how companies across industries are transforming their operations, reducing costs, and improving customer experiences with AIXcellence agents.
						</p>
					</motion.div>
				</div>
			</motion.section>
			
			{/* Industry Filter Section */}
			<motion.section 
				className="casestudies-filter-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="casestudies-filter-tabs">
						{industries.map((industry) => (
							<button
								key={industry.id}
								className={`casestudies-filter-tab ${selectedIndustry === industry.id ? 'active' : ''}`}
								onClick={() => setSelectedIndustry(industry.id)}
							>
								{industry.label}
							</button>
						))}
					</div>
				</div>
			</motion.section>
			
			{/* Featured Case Study */}
			{featuredStudy && selectedIndustry === 'all' && (
				<motion.section 
					className="casestudies-featured-section"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="container">
						<motion.div
							className="casestudies-featured-card"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							whileHover={{ y: -4 }}
						>
							<div className="casestudies-featured-image">
								<img src={featuredStudy.image} alt={featuredStudy.title} />
								<div className="casestudies-featured-badge">Featured Case Study</div>
							</div>
							<div className="casestudies-featured-content">
								<div className="casestudies-company-badge">
									<Briefcase size={16} />
									<span>{featuredStudy.company}</span>
									<span className="casestudies-industry">{featuredStudy.industry}</span>
								</div>
								<h2 className="casestudies-featured-title">{featuredStudy.title}</h2>
								<p className="casestudies-featured-excerpt">{featuredStudy.excerpt}</p>
								
								<div className="casestudies-results-grid">
									{featuredStudy.results.map((result, idx) => {
										const IconComponent = result.icon
										return (
											<div key={idx} className="casestudies-result-item">
												<div className="casestudies-result-icon">
													<IconComponent size={20} />
												</div>
												<div className="casestudies-result-content">
													<div className="casestudies-result-value">{result.value}</div>
													<div className="casestudies-result-label">{result.label}</div>
												</div>
											</div>
										)
									})}
								</div>
								
								<motion.a 
									href={`#case-${featuredStudy.id}`}
									className="casestudies-read-more"
									whileHover={{ x: 4 }}
								>
									Read Full Case Study
									<ArrowRight size={16} />
								</motion.a>
							</div>
						</motion.div>
					</div>
				</motion.section>
			)}
			
			{/* Case Studies Grid */}
			<motion.section 
				className="casestudies-grid-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedIndustry}
							className="casestudies-grid"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							{regularStudies.map((study, idx) => (
								<motion.article
									key={study.id}
									className="casestudies-article-card"
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									whileHover={{ y: -8 }}
								>
									<div className="casestudies-article-image">
										<img src={study.image} alt={study.title} />
									</div>
									<div className="casestudies-article-content">
										<div className="casestudies-company-badge">
											<Briefcase size={14} />
											<span>{study.company}</span>
											<span className="casestudies-industry">{study.industry}</span>
										</div>
										<h3 className="casestudies-article-title">{study.title}</h3>
										<p className="casestudies-article-excerpt">{study.excerpt}</p>
										
										<div className="casestudies-results-preview">
											{study.results.slice(0, 3).map((result, resultIdx) => {
												const IconComponent = result.icon
												return (
													<div key={resultIdx} className="casestudies-result-preview">
														<IconComponent size={16} />
														<span>{result.value}</span>
													</div>
												)
											})}
										</div>
										
										<motion.a 
											href={`#case-${study.id}`}
											className="casestudies-read-more"
											whileHover={{ x: 4 }}
										>
											Read Case Study
											<ArrowRight size={16} />
										</motion.a>
									</div>
								</motion.article>
							))}
						</motion.div>
					</AnimatePresence>
					
					{regularStudies.length === 0 && (
						<div className="casestudies-empty-state">
							<Briefcase size={48} />
							<p>No case studies found in this industry.</p>
						</div>
					)}
				</div>
			</motion.section>
		</motion.div>
	)
}

// Shared blog posts data
const blogPostsData = [
		{
			id: 1,
			category: 'ai-automation',
			date: 'January 20, 2025',
			title: 'The Future of Business: How AI Agents Are Transforming Customer Service',
			excerpt: 'Discover how AI-powered agents are revolutionizing customer service, reducing response times by 80% while maintaining human-like empathy and understanding.',
			image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
			readTime: '8 min read',
			author: 'Sarah Chen',
			authorRole: 'Head of Product',
			featured: true
		},
		{
			id: 2,
			category: 'product-updates',
			date: 'January 18, 2025',
			title: '5 Ways ARA Agent Can Boost Your Customer Satisfaction Scores',
			excerpt: 'Learn practical strategies for leveraging AI customer agents to improve satisfaction, reduce churn, and create memorable customer experiences.',
			image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
			readTime: '6 min read',
			author: 'Michael Rodriguez',
			authorRole: 'Customer Success Lead',
			featured: false
		},
		{
			id: 3,
			category: 'ai-automation',
			date: 'January 15, 2025',
			title: 'Video Marketing Revolution: Creating Content at Scale with AXE Agent',
			excerpt: 'Explore how businesses are using AI video cloning to produce professional marketing content 10x faster and at a fraction of traditional costs.',
			image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
			readTime: '7 min read',
			author: 'Emily Watson',
			authorRole: 'Marketing Director',
			featured: false
		},
		{
			id: 4,
			category: 'best-practices',
			date: 'January 12, 2025',
			title: 'Building Trust: How to Implement AI Agents Without Losing the Human Touch',
			excerpt: 'A comprehensive guide to deploying AI agents that enhance rather than replace human interactions, maintaining authenticity and trust.',
			image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
			readTime: '9 min read',
			author: 'David Kim',
			authorRole: 'AI Ethics Specialist',
			featured: false
		},
		{
			id: 5,
			category: 'case-studies',
			date: 'January 10, 2025',
			title: 'Case Study: How TechCorp Reduced Support Costs by 65% with AI Automation',
			excerpt: 'An in-depth look at how a leading tech company implemented AIXcellence agents to streamline operations and dramatically cut costs.',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
			readTime: '10 min read',
			author: 'Lisa Anderson',
			authorRole: 'Solutions Architect',
			featured: false
		},
		{
			id: 6,
			category: 'product-updates',
			date: 'January 8, 2025',
			title: 'New Feature Alert: Multi-Language Support Now Available Across All Agents',
			excerpt: 'We\'re excited to announce that all AIXcellence agents now support 50+ languages, enabling global businesses to serve customers worldwide.',
			image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
			readTime: '5 min read',
			author: 'James Park',
			authorRole: 'Engineering Manager',
			featured: false
		},
		{
			id: 7,
			category: 'ai-automation',
			date: 'January 5, 2025',
			title: 'The ROI of AI Automation: Measuring Success Beyond Cost Savings',
			excerpt: 'Learn how to calculate the true return on investment of AI automation, including improved customer satisfaction, employee productivity, and business growth.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
			readTime: '8 min read',
			author: 'Rachel Thompson',
			authorRole: 'Business Analyst',
			featured: false
		},
		{
			id: 8,
			category: 'best-practices',
			date: 'January 3, 2025',
			title: 'Getting Started with AI Agents: A Step-by-Step Implementation Guide',
			excerpt: 'Everything you need to know to successfully implement AI agents in your business, from planning to deployment and optimization.',
			image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
			readTime: '12 min read',
			author: 'Alex Morgan',
			authorRole: 'Implementation Specialist',
			featured: false
		},
		{
			id: 9,
			category: 'ai-automation',
			date: 'December 28, 2024',
			title: 'When to Choose Custom AI Solutions Over Standard Products',
			excerpt: 'Understanding when your business needs require custom AI development versus ready-made solutions. Learn to identify the right approach for your unique requirements.',
			image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
			readTime: '7 min read',
			author: 'Sarah Chen',
			authorRole: 'Head of Product',
			featured: false
		},
		{
			id: 10,
			category: 'best-practices',
			date: 'December 22, 2024',
			title: 'Integrating AI Agents with Your Existing Business Tools: A Complete Guide',
			excerpt: 'Step-by-step strategies for seamlessly connecting AI agents with CRM systems, email platforms, calendars, and other essential business tools.',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
			readTime: '9 min read',
			author: 'James Park',
			authorRole: 'Engineering Manager',
			featured: false
		},
		{
			id: 11,
			category: 'ai-automation',
			date: 'December 18, 2024',
			title: 'AI Security Best Practices: Protecting Your Business Data in the Age of Automation',
			excerpt: 'Essential security measures for implementing AI agents in your business. Learn about encryption, compliance, access controls, and data protection strategies.',
			image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
			readTime: '8 min read',
			author: 'David Kim',
			authorRole: 'AI Ethics Specialist',
			featured: false
		},
		{
			id: 12,
			category: 'product-updates',
			date: 'December 15, 2024',
			title: 'The Future of Work: How AI Agents Are Reshaping Business Operations',
			excerpt: 'Explore emerging trends in AI automation and how forward-thinking businesses are leveraging intelligent agents to gain competitive advantages.',
			image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
			readTime: '6 min read',
			author: 'Emily Watson',
			authorRole: 'Marketing Director',
			featured: false
		}
	]

function BlogPostPage() {
	const [postId, setPostId] = useState<number | null>(() => {
		const hash = window.location.hash
		const match = hash.match(/^#blog-(\d+)$/)
		return match ? parseInt(match[1], 10) : null
	})
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash
			const match = hash.match(/^#blog-(\d+)$/)
			if (match) {
				setPostId(parseInt(match[1], 10))
			} else {
				setPostId(null)
			}
		}
		
		// Check immediately
		handleHashChange()
		
		// Listen for hash changes
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])
	
	const post = blogPostsData.find(p => p.id === postId)
	
	if (!postId || !post) {
		return (
			<div style={{ padding: '100px 20px', textAlign: 'center' }}>
				<p>Post not found. <a href="#blog">Return to Blog</a></p>
			</div>
		)
	}
	
	// SEO for blog post
	useSEO({
		title: `${post.title} | AIXcellence Blog`,
		description: post.excerpt,
		keywords: `AI automation, ${post.category}, ${post.title}, AIXcellence, ARA Agent, AXE Agent`,
		url: `https://aixcellence.co/#blog-${postId}`,
		canonical: `https://aixcellence.co/#blog-${postId}`,
		image: post.image,
		type: 'article',
		author: post.author,
		publishedTime: new Date(post.date).toISOString()
	})
	
	const fullContent: Record<number, string[]> = {
		1: [
			'Customer service has always been the backbone of successful businesses. But in today\'s fast-paced digital world, customers expect instant responses, 24/7 availability, and personalized interactions. Traditional customer service models simply can\'t keep up with these demands.',
			'Enter AI-powered agents. These intelligent systems are revolutionizing how businesses interact with customers, offering unprecedented speed, consistency, and scalability while maintaining the empathy and understanding that customers value.',
			'The transformation is happening across industries. From e-commerce to healthcare, businesses are discovering that AI agents can handle routine inquiries with remarkable efficiency, freeing human agents to focus on complex, emotionally nuanced situations that require genuine human connection.',
			'One of the most significant advantages of AI agents is their ability to provide consistent service quality. Unlike human agents who may have off days or varying levels of expertise, AI agents deliver the same high-quality experience every single time. This consistency builds trust and reliability in customer relationships.',
			'But it\'s not just about consistency—it\'s about scale. AI agents can handle thousands of conversations simultaneously without breaking a sweat. This means businesses can serve more customers, respond faster, and never miss an inquiry, even during peak times or after hours.',
			'The technology behind modern AI agents is truly remarkable. Advanced natural language processing enables them to understand context, detect sentiment, and respond appropriately. They can learn from each interaction, continuously improving their responses and adapting to your business\'s unique voice and requirements.',
			'Perhaps most importantly, AI agents are becoming increasingly sophisticated at understanding human emotions. They can detect frustration, excitement, or confusion in customer messages and adjust their tone and approach accordingly. This emotional intelligence is what sets modern AI agents apart from simple chatbots.',
			'Looking ahead, the future of customer service is a hybrid model where AI agents handle routine inquiries efficiently while seamlessly escalating complex issues to human agents. This creates a best-of-both-worlds scenario: the speed and availability of AI with the empathy and problem-solving skills of humans.',
			'Businesses that embrace this transformation early will have a significant competitive advantage. They\'ll be able to provide superior customer experiences at lower costs, scale their operations without proportional increases in headcount, and build stronger customer relationships through consistent, high-quality interactions.',
			'The question isn\'t whether AI agents will become standard in customer service—it\'s how quickly your business can adapt and leverage this technology to create exceptional customer experiences that drive loyalty and growth.'
		],
		2: [
			'Customer satisfaction is the lifeblood of any successful business. In an era where customers have more choices than ever, delivering exceptional service isn\'t just nice to have—it\'s essential for survival. A single poor experience can send customers to competitors, while exceptional service can create loyal advocates who drive organic growth.',
			'ARA Agent, our AI-powered customer intelligence platform, has been helping businesses dramatically improve their customer satisfaction scores. Through extensive research and analysis of thousands of customer interactions, we\'ve identified five proven strategies that consistently boost satisfaction rates.',
			'Strategy 1: Instant Response Times. The first few seconds of a customer interaction set the tone for the entire experience. ARA Agent responds to inquiries in under 2 seconds, eliminating the frustrating wait times that often lead to customer dissatisfaction. This immediate acknowledgment makes customers feel valued and heard.',
			'Strategy 2: Personalized Interactions. Every customer is unique, and ARA Agent recognizes this. By analyzing previous interactions, purchase history, and preferences, ARA can personalize each conversation. Whether it\'s using the customer\'s name, referencing past orders, or adapting the communication style, personalization makes customers feel understood.',
			'Strategy 3: Proactive Problem Resolution. Instead of waiting for customers to report issues, ARA Agent proactively identifies potential problems. For example, if a delivery is delayed, ARA can reach out to the customer before they even notice, explaining the situation and offering solutions. This proactive approach prevents frustration and demonstrates care.',
			'Strategy 4: Seamless Escalation. When complex issues arise that require human intervention, ARA Agent doesn\'t just hand off the conversation—it provides a comprehensive context summary to the human agent. This ensures continuity and prevents customers from having to repeat their story, creating a smooth transition that maintains satisfaction.',
			'Strategy 5: Continuous Learning and Improvement. ARA Agent learns from every interaction, identifying patterns in customer needs and preferences. This continuous improvement means that over time, ARA becomes better at serving your specific customer base, leading to steadily increasing satisfaction scores.',
			'These strategies work together to create a comprehensive customer experience that drives satisfaction. Businesses using ARA Agent report average satisfaction score increases of 35-50% within the first three months of implementation.',
			'The key to success is not just implementing these strategies, but doing so in a way that feels natural and authentic. ARA Agent is designed to maintain your brand voice while delivering these benefits, ensuring that customers feel they\'re interacting with your business, not a generic AI system.',
			'By focusing on these five strategies, businesses can transform their customer service from a cost center into a competitive advantage, driving satisfaction, loyalty, and ultimately, growth.'
		],
		3: [
			'Video marketing has become the dominant force in digital advertising. Studies show that video content generates 1200% more shares than text and images combined. But creating professional video content at scale has always been a challenge—requiring expensive production teams, time-consuming shoots, and limited scalability.',
			'AXE Agent changes everything. With AI video cloning technology, businesses can now produce professional marketing videos in minutes, not weeks. This revolutionary approach is transforming how companies create and distribute video content, making high-quality video marketing accessible to businesses of all sizes.',
			'The traditional video production process is expensive and time-consuming. You need to hire actors, book studios, coordinate schedules, shoot multiple takes, edit footage, and manage post-production. A single 60-second video can cost tens of thousands of dollars and take weeks to produce. For businesses that need multiple videos for different markets, languages, or campaigns, this becomes prohibitively expensive.',
			'AXE Agent eliminates all of these barriers. With just a few minutes of source footage, you can create unlimited video variations. Need a product demonstration in Spanish? Done in minutes. Want to create personalized video messages for 1,000 customers? No problem. The AI handles everything—voice, expressions, gestures, and even language translation—while maintaining the authentic look and feel of your spokesperson.',
			'The technology behind AXE Agent is groundbreaking. Advanced AI models analyze facial expressions, voice patterns, and body language to create a digital clone that looks and sounds exactly like your spokesperson. The AI can generate new content based on text scripts, maintaining natural expressions and gestures that match the spoken words.',
			'One of the most powerful features is multi-language support. Your spokesperson can deliver the same message in 50+ languages, each with authentic pronunciation and cultural nuances. This means you can create localized marketing content for global markets without hiring multilingual actors or production teams.',
			'Real-time generation is another game-changer. Unlike traditional video production where you wait days or weeks for the final product, AXE Agent generates videos instantly. You can create a video, preview it, make adjustments, and deploy it—all within minutes. This speed enables rapid iteration and A/B testing, allowing you to optimize your video content based on performance data.',
			'Businesses are using AXE Agent for a wide range of applications: product demonstrations, training videos, personalized customer messages, social media content, email marketing campaigns, and more. The versatility of the platform means you can use it across your entire marketing funnel, from awareness to conversion.',
			'The cost savings are substantial. Businesses report reducing video production costs by 70-90% while increasing output by 10x or more. This means you can create more video content, test more variations, and reach more audiences—all while spending less than you would on traditional production.',
			'As video continues to dominate digital marketing, businesses that can produce high-quality video content quickly and cost-effectively will have a significant competitive advantage. AXE Agent makes this possible, democratizing professional video production and enabling businesses of all sizes to compete in the video-first digital landscape.'
		],
		4: [
			'As AI agents become more prevalent in customer-facing roles, a critical question emerges: How do we maintain the human touch that customers value while leveraging the efficiency of AI? This is one of the most important challenges businesses face when implementing AI automation.',
			'The answer lies in thoughtful implementation. AI agents should enhance human interactions, not replace them entirely. When deployed correctly, AI agents can actually strengthen customer relationships by handling routine tasks while freeing human agents to focus on complex, emotionally nuanced situations.',
			'The key is transparency. Customers appreciate honesty about when they\'re interacting with an AI agent versus a human. This transparency builds trust and sets appropriate expectations. Many businesses find that customers actually prefer AI agents for simple inquiries because they get instant, accurate responses without having to wait for a human agent.',
			'Another crucial element is maintaining your brand voice. AI agents should sound like your business, not like generic chatbots. This means training the AI on your brand guidelines, previous customer interactions, and company culture. The goal is for customers to feel like they\'re interacting with your business, regardless of whether it\'s an AI or human agent.',
			'Empathy is essential, even in AI interactions. Modern AI agents can detect emotional cues in customer messages and respond with appropriate empathy and understanding. They can recognize frustration, excitement, confusion, or satisfaction and adjust their tone and approach accordingly. This emotional intelligence is what makes AI agents feel genuinely helpful rather than robotic.',
			'Seamless handoffs are critical for maintaining the human touch. When an AI agent identifies that a situation requires human intervention, the transition should be smooth and contextual. The human agent should receive a complete summary of the conversation, so the customer doesn\'t have to repeat their story. This continuity makes customers feel heard and valued.',
			'Training and monitoring are essential for maintaining quality. AI agents should be continuously monitored and refined based on customer feedback and interaction outcomes. This ensures that the AI maintains high standards and continues to improve over time. Regular audits help identify areas where the AI might be missing the mark and need adjustment.',
			'It\'s also important to recognize when human interaction is necessary. Some situations inherently require human judgment, empathy, or creativity. AI agents should be programmed to recognize these situations and escalate appropriately. This might include complex problem-solving, emotional support, or situations where company policy needs interpretation.',
			'The most successful implementations create a hybrid model where AI and human agents work together seamlessly. AI handles routine inquiries efficiently, while humans focus on building relationships, solving complex problems, and providing the personal touch that creates loyal customers.',
			'Ultimately, maintaining the human touch with AI agents is about using technology to enhance human capabilities, not replace them. When done right, AI agents can actually make businesses more human by ensuring every customer interaction is handled with care, consistency, and attention to detail—regardless of whether it\'s an AI or human providing the service.'
		],
		5: [
			'TechCorp Solutions, a leading technology company with over 500 employees, was facing a critical challenge: their customer support costs were spiraling out of control while response times were increasing. With over 10,000 customer inquiries monthly across multiple channels, they needed a solution that could scale without breaking the bank.',
			'The problem was multifaceted. Their support team was overwhelmed, leading to longer response times and decreased customer satisfaction. Hiring more support staff wasn\'t a viable solution—it would have increased costs by 40% and still wouldn\'t guarantee 24/7 coverage. They needed a smarter approach.',
			'After extensive research and evaluation, TechCorp decided to implement AIXcellence ARA Agent. The implementation process was carefully planned and executed over three months, with a phased rollout that allowed them to test and refine the system before full deployment.',
			'The results exceeded expectations. Within the first month, ARA Agent was handling 65% of all customer inquiries independently, with a 98% resolution rate. Response times dropped from an average of 4 hours to under 2 minutes. Customer satisfaction scores increased from 72% to 94%.',
			'Cost savings were substantial. By handling routine inquiries automatically, TechCorp reduced their support costs by 65% while actually improving service quality. The human support team could now focus on complex technical issues and relationship-building, rather than answering the same questions repeatedly.',
			'One of the most significant benefits was 24/7 availability. Before implementing ARA Agent, TechCorp could only provide support during business hours. Now, customers receive instant responses at any time of day or night, regardless of time zones. This has been particularly valuable for their international customer base.',
			'The AI agent also improved consistency. Previously, different support agents might provide slightly different answers to the same question, leading to confusion. ARA Agent ensures that every customer receives accurate, consistent information every time, building trust and reducing follow-up inquiries.',
			'Integration was seamless. ARA Agent connected with TechCorp\'s existing CRM, ticketing system, and knowledge base, creating a unified support experience. The AI can access customer history, previous tickets, and product information to provide contextual, personalized support.',
			'Perhaps most importantly, the implementation improved employee satisfaction. Support team members were relieved of repetitive, mundane tasks and could focus on more engaging, complex problem-solving. This led to higher job satisfaction and lower turnover rates.',
			'TechCorp\'s success story demonstrates the transformative power of AI automation in customer service. By implementing ARA Agent strategically and thoughtfully, they achieved dramatic improvements in efficiency, cost reduction, and customer satisfaction—all while improving the work experience for their support team. The investment paid for itself within three months, and continues to deliver value every day.'
		],
		6: [
			'We\'re thrilled to announce a major milestone: All AIXcellence agents now support 50+ languages, enabling businesses to serve customers worldwide with authentic, natural-sounding interactions. This update represents a significant step forward in our mission to make AI-powered automation accessible to businesses of all sizes, regardless of their geographic location or customer base.',
			'The technical innovation behind this update is remarkable. Our AI models have been trained on millions of multilingual conversations, learning not just translation, but cultural nuances, regional dialects, and context-specific language patterns. This means that when ARA Agent responds in Spanish, it doesn\'t just translate from English—it thinks and responds in Spanish, with appropriate cultural context.',
			'Language detection happens automatically and instantly. When a customer sends a message in any supported language, the AI immediately recognizes the language and responds accordingly. There\'s no configuration needed, no language selection menus—just seamless, natural communication in the customer\'s preferred language.',
			'The supported languages include all major world languages: English, Spanish, Mandarin, French, German, Italian, Portuguese, Japanese, Korean, Arabic, Hindi, Russian, and 40+ more. Each language is supported with regional variations—for example, Spanish includes support for European Spanish, Mexican Spanish, Argentine Spanish, and other regional dialects.',
			'This update is particularly valuable for businesses with international customers. Previously, serving customers in multiple languages required hiring multilingual support staff or using translation services that often produced awkward, unnatural responses. Now, businesses can provide native-quality support in 50+ languages without additional hiring.',
			'The benefits extend beyond customer support. AXE Agent can now create video content in any supported language, enabling businesses to produce localized marketing content for global markets. This opens up new opportunities for international expansion and market penetration.',
			'For businesses already using AIXcellence agents, this update is available immediately at no additional cost. The multi-language capabilities are built into every agent, ready to use whenever needed. There\'s no per-language pricing or additional configuration required.',
			'We\'re committed to expanding language support continuously. Based on customer feedback and market demand, we\'re actively working on adding more languages and improving the quality of existing language support. Our goal is to make AIXcellence truly global, enabling businesses to serve customers anywhere in the world.',
			'This update also includes improvements to language switching. If a customer starts a conversation in one language and switches to another mid-conversation, the AI seamlessly adapts, maintaining context and understanding across languages. This flexibility makes interactions feel natural and fluid.',
			'The future of business is global, and language should never be a barrier to excellent customer service. With 50+ language support, AIXcellence agents enable businesses to break down communication barriers and serve customers worldwide with the same high-quality, personalized experience, regardless of language or location.'
		],
		7: [
			'When evaluating AI automation investments, many businesses focus solely on cost savings. While reducing operational expenses is important, the true value of AI automation extends far beyond the bottom line. Understanding the full spectrum of ROI is crucial for making informed decisions and setting realistic expectations.',
			'Direct cost savings are the most obvious benefit. Businesses typically see 50-70% reduction in customer support costs, 60-80% reduction in content production costs, and significant savings in operational overhead. These savings alone often justify the investment, but they\'re just the beginning.',
			'Customer satisfaction improvements deliver measurable business value. Studies show that a 5% increase in customer satisfaction can lead to a 25-95% increase in profitability. AI agents consistently improve satisfaction scores by 30-50%, which translates directly to increased customer lifetime value, reduced churn, and organic growth through positive word-of-mouth.',
			'Employee productivity gains are substantial. By handling routine tasks, AI agents free human employees to focus on high-value activities like relationship-building, strategic thinking, and creative problem-solving. This not only improves business outcomes but also increases employee satisfaction and reduces turnover.',
			'Revenue growth is another critical ROI component. AI agents can handle more customer interactions, qualify more leads, and convert more prospects. They work 24/7, never take breaks, and maintain consistent performance. This increased capacity directly translates to revenue opportunities that would otherwise be missed.',
			'Business agility is an often-overlooked benefit. AI agents can be deployed quickly, scaled instantly, and adapted rapidly to changing business needs. This agility enables businesses to respond to market changes, seasonal fluctuations, and growth opportunities faster than competitors relying on traditional hiring and training processes.',
			'Data insights represent significant value. AI agents generate rich data about customer needs, preferences, pain points, and behaviors. This data can inform product development, marketing strategies, and business decisions. The insights gained from AI interactions often lead to innovations and improvements that drive long-term competitive advantage.',
			'Brand consistency is another valuable benefit. AI agents ensure that every customer interaction reflects your brand voice and values consistently. This consistency builds brand recognition, trust, and loyalty over time, creating intangible but valuable brand equity.',
			'Risk reduction is an important consideration. AI agents reduce the risk of human error, inconsistent service quality, and compliance issues. They can be programmed with business rules and regulations, ensuring that every interaction complies with policies and standards. This risk reduction has measurable value, especially in regulated industries.',
			'When calculating ROI, businesses should consider all these factors, not just direct cost savings. The true ROI of AI automation often exceeds 300-500% when all benefits are accounted for. More importantly, these benefits compound over time—as the AI learns and improves, the value delivered increases, creating a positive feedback loop that drives continuous improvement and growing returns on investment.'
		],
		8: [
			'Implementing AI agents in your business can seem daunting, but with the right approach, it\'s a straightforward process that delivers significant value quickly. This step-by-step guide walks you through everything you need to know, from initial planning to deployment and optimization.',
			'Step 1: Define Your Goals and Use Cases. Before implementing AI agents, clearly define what you want to achieve. Are you looking to reduce support costs, improve response times, scale operations, or enhance customer experience? Identifying specific, measurable goals will guide your implementation and help you measure success.',
			'Step 2: Assess Your Current State. Analyze your current processes, pain points, and customer interaction patterns. Identify which tasks are routine and repetitive (good candidates for AI automation) versus complex and nuanced (better suited for human agents). This assessment will help you determine where AI agents will deliver the most value.',
			'Step 3: Choose the Right AI Agent. Different AI agents are designed for different purposes. ARA Agent excels at customer support, booking management, and communication. AXE Agent specializes in video content creation. Choose the agent that best matches your primary use case, or consider implementing multiple agents for different functions.',
			'Step 4: Prepare Your Data and Content. AI agents need information to work effectively. Prepare your knowledge base, FAQs, product information, and brand guidelines. The more comprehensive your data, the better your AI agent will perform. Organize this information clearly and ensure it\'s up-to-date and accurate.',
			'Step 5: Configure and Customize. Work with your implementation team to configure the AI agent to match your brand voice, business rules, and specific requirements. This includes setting up integrations with your existing systems (CRM, ticketing, calendar, etc.), defining escalation rules, and customizing the AI\'s personality and tone.',
			'Step 6: Train Your Team. Even though AI agents work autonomously, your team needs to understand how to work with them. Train your staff on monitoring AI interactions, handling escalations, and optimizing the AI\'s performance. This ensures a smooth transition and maximizes the value of your AI implementation.',
			'Step 7: Pilot and Test. Start with a pilot program, testing the AI agent with a limited scope before full deployment. This allows you to identify issues, refine configurations, and build confidence before scaling. Monitor performance closely during the pilot phase and gather feedback from both customers and team members.',
			'Step 8: Deploy and Scale. Once the pilot is successful, gradually scale the deployment. You can start by having the AI handle a percentage of inquiries and gradually increase as confidence grows. This phased approach minimizes risk and allows for continuous optimization.',
			'Step 9: Monitor and Optimize. AI agents improve over time, but they need monitoring and optimization. Regularly review performance metrics, customer feedback, and interaction quality. Use this data to refine the AI\'s responses, update knowledge bases, and adjust configurations. Continuous optimization ensures you\'re getting maximum value from your investment.',
			'Step 10: Scale and Expand. As you see success with your initial implementation, consider expanding AI automation to other areas of your business. The experience and data from your first implementation will make subsequent deployments faster and more effective.',
			'Success with AI agents requires a thoughtful, strategic approach. By following these steps, you can implement AI agents that transform your operations, improve customer experiences, and drive business growth. Remember, implementation is not a one-time event—it\'s an ongoing process of optimization and improvement that delivers increasing value over time.'
		],
		9: [
			'One of the most common questions we hear from businesses is: "Should we use a standard AI product or invest in custom development?" The answer depends on several factors, and understanding when to choose each approach can save you time, money, and frustration.',
			'Standard products like ARA Agent and AXE Agent are perfect for businesses with common use cases. If your needs align with typical customer support, booking management, or video content creation, a standard product will likely meet your requirements quickly and cost-effectively. These products are battle-tested, feature-rich, and ready to deploy immediately.',
			'However, some businesses have unique requirements that standard products can\'t address. Perhaps you need industry-specific knowledge, custom workflows that don\'t fit standard patterns, or integration with proprietary systems. In these cases, custom development becomes the right choice.',
			'Custom solutions are ideal when you need specialized functionality. For example, a healthcare provider might need an AI agent that understands medical terminology and can integrate with electronic health records. A financial services company might require compliance-specific features and audit trails. These specialized needs often require custom development.',
			'Another indicator that custom development might be necessary is when you have complex, multi-step workflows that don\'t align with standard automation patterns. If your business processes are highly unique or involve multiple systems working together in specific ways, a custom solution can be designed to match your exact workflow.',
			'Integration requirements often drive the decision toward custom development. While standard products integrate with many common business tools, if you use proprietary systems, legacy software, or highly customized platforms, you may need custom integration work that goes beyond what standard products offer.',
			'Scale and performance requirements can also influence the decision. If you need to handle extremely high volumes, require specific performance characteristics, or need to operate in unique environments (like on-premises deployment), custom development might be necessary to meet these specialized requirements.',
			'Budget and timeline are important considerations. Standard products are typically faster to deploy and more cost-effective upfront. Custom development takes longer and costs more initially, but can provide better long-term value if it perfectly matches your needs and eliminates workarounds or compromises.',
			'The best approach is often a hybrid: start with a standard product to address immediate needs, then add custom development for specialized requirements. This gives you the speed and cost-effectiveness of standard products while addressing unique needs through targeted custom development.',
			'When evaluating your options, consider your long-term vision. If you anticipate significant growth, changing requirements, or expansion into new areas, a custom solution might provide more flexibility. However, if your needs are stable and align with standard use cases, a standard product will likely serve you well.',
			'Ultimately, the decision comes down to fit. Standard products excel when they match your needs out of the box. Custom development shines when you have unique requirements that standard products can\'t address. Many successful businesses use both: standard products for common functions and custom solutions for specialized needs, creating a comprehensive automation strategy that perfectly matches their business.'
		],
		10: [
			'Integrating AI agents with your existing business tools is crucial for maximizing their value. When AI agents work seamlessly with your CRM, email platform, calendar, and other tools, they become a powerful force multiplier that enhances your entire tech stack rather than operating in isolation.',
			'The first step in successful integration is understanding your current tech ecosystem. Map out all the tools you use: CRM systems like Salesforce or HubSpot, email platforms like Gmail or Outlook, calendar systems, project management tools, payment processors, and any proprietary software. Understanding this landscape helps identify integration opportunities and potential challenges.',
			'API-based integrations are the most common and reliable approach. Most modern business tools provide APIs that allow AI agents to read and write data, trigger actions, and sync information in real-time. ARA Agent, for example, can integrate with CRM systems to automatically create customer records, update contact information, and log interactions—all without manual data entry.',
			'Calendar integration is particularly powerful for booking management. When ARA Agent integrates with your calendar system, it can check availability in real-time, schedule appointments automatically, send reminders, and even handle rescheduling requests. This eliminates the back-and-forth emails and phone calls that consume so much time.',
			'Email integration enables AI agents to handle customer inquiries that come through email, maintain conversation context across channels, and automatically categorize and route messages. This creates a unified communication experience where customers can reach you through any channel and receive consistent, high-quality service.',
			'CRM integration provides powerful customer intelligence. When AI agents can access customer history, purchase records, preferences, and previous interactions, they can provide personalized service that feels genuinely tailored to each customer. This context makes every interaction more valuable and effective.',
			'Payment and e-commerce integrations enable AI agents to handle transactions, process orders, check order status, and provide shipping updates. This extends the capabilities of AI agents beyond communication into actual business operations, creating a more comprehensive automation solution.',
			'Data synchronization is critical for integration success. AI agents should update all relevant systems when they interact with customers, ensuring that your CRM, support tickets, analytics platforms, and other tools all have current, accurate information. This creates a single source of truth across your business.',
			'Security and compliance must be considered in every integration. Ensure that integrations use secure authentication methods, encrypt data in transit, and comply with relevant regulations (GDPR, HIPAA, etc.). Work with your integration team to implement proper security measures from the start.',
			'Testing integrations thoroughly before deployment is essential. Test all integration points, error handling, data synchronization, and edge cases. A well-tested integration will work reliably in production, while a poorly tested one can cause data inconsistencies and operational issues.',
			'Monitoring and maintenance ensure integrations continue working well over time. APIs change, systems update, and business needs evolve. Regular monitoring helps identify issues early, and ongoing maintenance ensures integrations adapt to changes in your tech stack.',
			'Successful integration transforms AI agents from standalone tools into integral parts of your business operations. When AI agents work seamlessly with your existing tools, they enhance everything you do, creating a unified, efficient, and powerful business automation ecosystem that delivers value far beyond what any single tool could provide.'
		],
		11: [
			'As businesses increasingly adopt AI agents, security becomes paramount. AI agents handle sensitive customer data, business information, and operational processes, making them attractive targets for cybercriminals. Implementing robust security measures is not optional—it\'s essential for protecting your business and maintaining customer trust.',
			'Encryption is the foundation of AI agent security. All data should be encrypted both in transit (when being transmitted) and at rest (when stored). This means using TLS/SSL for data transmission and strong encryption algorithms for stored data. Even if data is intercepted, encryption ensures it remains unreadable without the proper keys.',
			'Access control is critical for preventing unauthorized access. Implement strong authentication methods, including multi-factor authentication for administrative access. Use role-based access controls to ensure that only authorized personnel can access sensitive AI agent configurations and data. Regularly review and update access permissions as team members change roles or leave the organization.',
			'Data privacy compliance is essential, especially with regulations like GDPR, CCPA, and HIPAA. AI agents must be configured to handle personal data in compliance with applicable regulations. This includes obtaining proper consent, providing data access and deletion capabilities, and maintaining audit trails of data access and usage.',
			'Regular security audits help identify vulnerabilities before they\'re exploited. Conduct periodic security assessments, penetration testing, and code reviews. These audits should examine not just the AI agent platform itself, but also integrations, data storage, and access controls. Address any identified vulnerabilities immediately.',
			'Monitoring and logging provide visibility into security events. Implement comprehensive logging of all AI agent activities, including access attempts, data access, configuration changes, and unusual patterns. Monitor these logs for suspicious activity and set up alerts for potential security incidents.',
			'Backup and disaster recovery protect against data loss and ensure business continuity. Regularly back up AI agent configurations, training data, and customer interaction logs. Test your backup and recovery procedures to ensure they work when needed. A well-planned disaster recovery strategy minimizes downtime and data loss.',
			'Vendor security assessment is important when using third-party AI platforms. Evaluate the security practices of AI agent providers, including their certifications (SOC 2, ISO 27001, etc.), security policies, and incident response procedures. Choose vendors with strong security track records and transparent security practices.',
			'Employee training is often overlooked but crucial. Ensure your team understands security best practices, recognizes phishing attempts, and knows how to handle sensitive data properly. Regular security training helps prevent human error, which is a leading cause of security incidents.',
			'Incident response planning prepares you for security breaches. Develop a clear incident response plan that outlines steps to take if a security breach occurs, including containment, investigation, notification, and recovery. Practice this plan regularly so your team knows how to respond quickly and effectively.',
			'Regular updates and patches keep security measures current. AI agent platforms, integrations, and underlying systems should be kept up-to-date with the latest security patches. Outdated software often contains known vulnerabilities that attackers can exploit.',
			'Security is not a one-time implementation—it\'s an ongoing commitment. As threats evolve and your business grows, security measures must adapt. By implementing comprehensive security practices from the start and maintaining them over time, you can protect your business, your customers, and your reputation while enjoying the benefits of AI automation.'
		],
		12: [
			'The workplace is undergoing a fundamental transformation, and AI agents are at the forefront of this change. As businesses adapt to new technologies and changing customer expectations, AI agents are reshaping how work gets done, how teams collaborate, and how businesses compete.',
			'One of the most significant shifts is the move from task-based work to outcome-based work. AI agents handle routine, repetitive tasks, freeing human employees to focus on strategic thinking, creativity, and relationship-building. This changes the nature of work itself, making jobs more engaging and valuable while improving business outcomes.',
			'24/7 operations are becoming the norm rather than the exception. AI agents enable businesses to serve customers, process orders, and handle inquiries around the clock without the cost and complexity of round-the-clock human staffing. This creates competitive advantages for businesses that can provide always-on service.',
			'Data-driven decision-making is accelerating. AI agents generate rich data about customer interactions, business processes, and operational patterns. This data enables businesses to make faster, more informed decisions based on real-time insights rather than intuition or delayed reporting.',
			'Personalization at scale is now possible. AI agents can provide personalized experiences to thousands or millions of customers simultaneously, something that was previously impossible with human-only teams. This personalization improves customer satisfaction and drives business growth.',
			'Remote and distributed teams are becoming more effective. AI agents provide consistent service and support regardless of where team members are located. They bridge time zones, maintain continuity, and ensure that customers receive the same high-quality experience whether they\'re interacting with a team member in New York or Tokyo.',
			'Skill requirements are evolving. As AI agents handle routine tasks, the skills that are most valuable are shifting toward critical thinking, emotional intelligence, creativity, and strategic planning. This creates opportunities for employees to develop more valuable, fulfilling skills while AI handles the mundane.',
			'Business agility is increasing dramatically. AI agents can be deployed, scaled, and adapted much faster than human teams. This enables businesses to respond quickly to market changes, seasonal fluctuations, and growth opportunities. The ability to scale operations instantly is a significant competitive advantage.',
			'Customer expectations are rising. As more businesses adopt AI agents, customers come to expect instant responses, 24/7 availability, and personalized service. Businesses that don\'t meet these expectations risk losing customers to competitors who do. AI agents are becoming essential for meeting modern customer expectations.',
			'Cost structures are changing. The economics of business operations are shifting as AI agents reduce the cost of scaling. Businesses can grow revenue without proportional increases in operational costs, creating new business models and competitive dynamics.',
			'The future of work is not about humans versus AI—it\'s about humans and AI working together. The most successful businesses will be those that effectively combine human creativity, judgment, and empathy with AI efficiency, consistency, and scalability. This human-AI collaboration will define the next era of business operations.',
			'As we look ahead, AI agents will continue to evolve and become more capable. Businesses that embrace this transformation early and thoughtfully will gain significant advantages. Those that resist or delay will find themselves at a competitive disadvantage. The future of work is here, and AI agents are leading the way.'
		]
	}
	
	const relatedPosts = blogPostsData
		.filter(p => p.id !== postId && (p.category === post.category || Math.random() > 0.5))
		.slice(0, 3)
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Back Navigation */}
			<motion.section 
				className="blogpost-nav-section"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				<div className="container">
					<motion.a
						href="#blog"
						className="blogpost-back-link"
						whileHover={{ x: -4 }}
					>
						<ArrowLeft size={20} />
						<span>Back to Blog</span>
					</motion.a>
				</div>
			</motion.section>
			
			{/* Hero Section */}
			<motion.section 
				className="blogpost-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="blogpost-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="blogpost-meta">
							<span className="blogpost-date">{post.date}</span>
							<span className="blogpost-category">{post.category.replace('-', ' ')}</span>
							<span className="blogpost-read-time">{post.readTime}</span>
						</div>
						<h1 className="blogpost-title">{post.title}</h1>
						<p className="blogpost-excerpt">{post.excerpt}</p>
						<div className="blogpost-author-info">
							<div className="blogpost-author-avatar">
								<User size={24} />
							</div>
							<div className="blogpost-author-details">
								<div className="blogpost-author-name">{post.author}</div>
								<div className="blogpost-author-role">{post.authorRole}</div>
							</div>
						</div>
					</motion.div>
					<motion.div 
						className="blogpost-hero-image"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.4 }}
					>
						<img src={post.image} alt={post.title} />
					</motion.div>
				</div>
			</motion.section>
			
			{/* Article Content */}
			<motion.section 
				className="blogpost-content-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="blogpost-content-wrapper">
						<article className="blogpost-article">
							{fullContent[postId]?.map((paragraph, idx) => (
								<motion.p
									key={idx}
									className="blogpost-paragraph"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
								>
									{paragraph}
								</motion.p>
							))}
							
							{/* Key Points Section */}
							<motion.div
								className="blogpost-keypoints"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 }}
							>
								<h3 className="blogpost-keypoints-title">Key Takeaways</h3>
								<ul className="blogpost-keypoints-list">
									{[
										'AI agents reduce response times by up to 80% while maintaining quality',
										'24/7 availability improves customer satisfaction and reduces churn',
										'Cost savings of 50-70% are typical for businesses implementing AI automation',
										'Human agents can focus on complex issues while AI handles routine inquiries',
										'Multi-language support enables global expansion without additional hiring'
									].slice(0, 3).map((point, idx) => (
										<motion.li
											key={idx}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.4 + idx * 0.1 }}
										>
											<CheckCircle2 size={20} />
											<span>{point}</span>
										</motion.li>
									))}
								</ul>
							</motion.div>
							
							{/* CTA Section */}
							<motion.div
								className="blogpost-cta"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.5 }}
							>
								<div className="blogpost-cta-content">
									<h3 className="blogpost-cta-title">Ready to Transform Your Business?</h3>
									<p className="blogpost-cta-text">
										Experience the power of AI automation with AIXcellence. Get started today and see the difference intelligent agents can make.
									</p>
									<motion.a
										href="#contact"
										className="btn btn-primary"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										Get Started
										<ArrowRight size={20} />
									</motion.a>
								</div>
							</motion.div>
						</article>
						
						{/* Sidebar */}
						<aside className="blogpost-sidebar">
							<div className="blogpost-share-card">
								<h4 className="blogpost-share-title">Share this article</h4>
								<div className="blogpost-share-links">
									<motion.a
										href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
										className="blogpost-share-link"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Twitter size={20} />
									</motion.a>
									<motion.a
										href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
										className="blogpost-share-link"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Linkedin size={20} />
									</motion.a>
									<motion.button
										className="blogpost-share-link"
										onClick={() => {
											navigator.clipboard.writeText(window.location.href)
											alert('Link copied to clipboard!')
										}}
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Share2 size={20} />
									</motion.button>
								</div>
							</div>
							
							{relatedPosts.length > 0 && (
								<div className="blogpost-related-card">
									<h4 className="blogpost-related-title">Related Articles</h4>
									<div className="blogpost-related-list">
										{relatedPosts.map((relatedPost) => (
											<motion.a
												key={relatedPost.id}
												href={`#blog-${relatedPost.id}`}
												className="blogpost-related-item"
												whileHover={{ x: 4 }}
											>
												<img src={relatedPost.image} alt={relatedPost.title} />
												<div className="blogpost-related-content">
													<h5 className="blogpost-related-item-title">{relatedPost.title}</h5>
													<span className="blogpost-related-date">{relatedPost.date}</span>
												</div>
											</motion.a>
										))}
									</div>
								</div>
							)}
						</aside>
					</div>
				</div>
			</motion.section>
		</motion.div>
	)
}

function BlogPage() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [searchQuery, setSearchQuery] = useState('')
	
	useSEO({
		title: 'Blog — AI Automation Insights & Best Practices | AIXcellence',
		description: 'Explore the latest trends in AI automation, learn best practices, and discover how businesses are transforming with intelligent agents. Expert insights on customer service, video marketing, and AI implementation.',
		keywords: 'AI automation blog, AI agents blog, customer service AI, video marketing AI, AI best practices, business automation insights',
		url: 'https://aixcellence.co/#blog',
		canonical: 'https://aixcellence.co/#blog'
	})
	
	const blogPosts = blogPostsData
	
	const categories = [
		{ id: 'all', label: 'All Posts' },
		{ id: 'ai-automation', label: 'AI Automation' },
		{ id: 'product-updates', label: 'Product Updates' },
		{ id: 'best-practices', label: 'Best Practices' },
		{ id: 'case-studies', label: 'Case Studies' }
	]
	
	const filteredPosts = blogPosts.filter(post => {
		const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
		const matchesSearch = searchQuery === '' || 
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.author.toLowerCase().includes(searchQuery.toLowerCase())
		return matchesCategory && matchesSearch
	})
	
	const featuredPost = blogPosts.find(post => post.featured)
	const regularPosts = filteredPosts.filter(post => !post.featured)
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Hero Section */}
			<motion.section 
				className="blog-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="blog-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="blog-hero-badge">
							<BookOpen size={20} />
							<span>Blog</span>
						</div>
						<h1 className="blog-hero-title">
							Insights, Tips & Stories
						</h1>
						<p className="blog-hero-subtitle">
							Explore the latest trends in AI automation, learn best practices, and discover how businesses are transforming with intelligent agents.
						</p>
					</motion.div>
				</div>
			</motion.section>
			
			{/* Search and Filter Section */}
			<motion.section 
				className="blog-filter-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="blog-search-wrapper">
						<div className="blog-search-box">
							<Search size={20} />
							<input
								type="text"
								placeholder="Search articles..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="blog-search-input"
							/>
						</div>
					</div>
					<div className="blog-filter-tabs">
						{categories.map((category) => (
							<button
								key={category.id}
								className={`blog-filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
								onClick={() => setSelectedCategory(category.id)}
							>
								{category.label}
							</button>
						))}
					</div>
				</div>
			</motion.section>
			
			{/* Featured Post */}
			{featuredPost && selectedCategory === 'all' && searchQuery === '' && (
				<motion.section 
					className="blog-featured-section"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="container">
						<motion.div
							className="blog-featured-card"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							whileHover={{ y: -4 }}
						>
							<div className="blog-featured-image">
								<img src={featuredPost.image} alt={featuredPost.title} />
								<div className="blog-featured-badge">Featured Article</div>
							</div>
							<div className="blog-featured-content">
								<div className="blog-meta">
									<span className="blog-date">{featuredPost.date}</span>
									<span className="blog-category">{featuredPost.category.replace('-', ' ')}</span>
									<span className="blog-read-time">{featuredPost.readTime}</span>
								</div>
								<h2 className="blog-featured-title">{featuredPost.title}</h2>
								<p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
								<div className="blog-author-info">
									<div className="blog-author-avatar">
										<User size={20} />
									</div>
									<div className="blog-author-details">
										<div className="blog-author-name">{featuredPost.author}</div>
										<div className="blog-author-role">{featuredPost.authorRole}</div>
									</div>
								</div>
								<motion.a 
									href={`#blog-${featuredPost.id}`}
									className="blog-read-more"
									whileHover={{ x: 4 }}
								>
									Read Full Article
									<ArrowRight size={16} />
								</motion.a>
							</div>
						</motion.div>
					</div>
				</motion.section>
			)}
			
			{/* Blog Posts Grid */}
			<motion.section 
				className="blog-grid-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<AnimatePresence mode="wait">
						<motion.div
							key={`${selectedCategory}-${searchQuery}`}
							className="blog-grid"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							{regularPosts.map((post, idx) => (
								<motion.article
									key={post.id}
									className="blog-article-card"
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									whileHover={{ y: -8 }}
								>
									<div className="blog-article-image">
										<img src={post.image} alt={post.title} />
									</div>
									<div className="blog-article-content">
										<div className="blog-meta">
											<span className="blog-date">{post.date}</span>
											<span className="blog-category">{post.category.replace('-', ' ')}</span>
											<span className="blog-read-time">{post.readTime}</span>
										</div>
										<h3 className="blog-article-title">{post.title}</h3>
										<p className="blog-article-excerpt">{post.excerpt}</p>
										<div className="blog-author-info">
											<div className="blog-author-avatar">
												<User size={16} />
											</div>
											<div className="blog-author-details">
												<div className="blog-author-name">{post.author}</div>
												<div className="blog-author-role">{post.authorRole}</div>
											</div>
										</div>
										<motion.a 
											href={`#blog-${post.id}`}
											className="blog-read-more"
											whileHover={{ x: 4 }}
										>
											Read More
											<ArrowRight size={16} />
										</motion.a>
									</div>
								</motion.article>
							))}
						</motion.div>
					</AnimatePresence>
					
					{regularPosts.length === 0 && (
						<div className="blog-empty-state">
							<Search size={48} />
							<p>No articles found matching your search.</p>
							<button 
								className="blog-clear-search"
								onClick={() => {
									setSearchQuery('')
									setSelectedCategory('all')
								}}
							>
								Clear Filters
							</button>
						</div>
					)}
				</div>
			</motion.section>
		</motion.div>
	)
}

// Shared newsroom data
const newsItemsData = [
		{
			id: 1,
			category: 'announcement',
			date: 'January 15, 2025',
			title: 'AIXcellence Launches Early Access Program for AIX One Platform',
			excerpt: 'We\'re excited to announce the launch of our early access program, giving select businesses the opportunity to experience the future of AI automation.',
			image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
			readTime: '3 min read',
			featured: true
		},
		{
			id: 2,
			category: 'product',
			date: 'January 10, 2025',
			title: 'ARA Agent Now Supports Multi-Language Customer Interactions',
			excerpt: 'Our customer intelligence agent now seamlessly handles conversations in over 50 languages, breaking down communication barriers for global businesses.',
			image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
			readTime: '4 min read',
			featured: false
		},
		{
			id: 3,
			category: 'partnership',
			date: 'January 5, 2025',
			title: 'AIXcellence Partners with Leading CRM Platforms',
			excerpt: 'New integrations with Salesforce, HubSpot, and Zoho enable seamless workflow automation across your entire tech stack.',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
			readTime: '5 min read',
			featured: false
		},
		{
			id: 4,
			category: 'announcement',
			date: 'December 28, 2024',
			title: 'AIXcellence Achieves SOC 2 Type II Certification',
			excerpt: 'We\'re proud to announce our SOC 2 Type II certification, demonstrating our commitment to enterprise-grade security and data protection.',
			image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
			readTime: '3 min read',
			featured: false
		},
		{
			id: 5,
			category: 'product',
			date: 'December 20, 2024',
			title: 'AXE Agent Introduces Real-Time Video Generation',
			excerpt: 'Create professional video content in under 5 minutes with our new real-time video generation feature, powered by advanced AI cloning technology.',
			image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
			readTime: '4 min read',
			featured: false
		},
		{
			id: 6,
			category: 'company',
			date: 'December 15, 2024',
			title: 'AIXcellence Expands Team with Key Engineering Hires',
			excerpt: 'We\'ve welcomed top talent from Google, Microsoft, and OpenAI to accelerate our mission of democratizing AI excellence.',
			image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
			readTime: '3 min read',
			featured: false
		},
		{
			id: 7,
			category: 'announcement',
			date: 'December 10, 2024',
			title: 'AIXcellence Launches Custom Software Solutions Division',
			excerpt: 'We\'re expanding our services to offer custom AI development, integration services, and bespoke automation solutions built on our proven technology.',
			image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
			readTime: '4 min read',
			featured: false
		},
		{
			id: 8,
			category: 'company',
			date: 'December 5, 2024',
			title: 'AIXcellence Recognized as Top AI Automation Platform by Industry Leaders',
			excerpt: 'Leading technology publications and industry analysts have recognized AIXcellence for innovation in AI automation and customer experience transformation.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
			readTime: '3 min read',
			featured: false
		},
		{
			id: 9,
			category: 'product',
			date: 'November 28, 2024',
			title: 'New Enterprise Features: Advanced Analytics and Custom Reporting',
			excerpt: 'Enterprise customers can now access advanced analytics dashboards, custom reporting, and detailed performance insights to optimize their AI agent deployments.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
			readTime: '4 min read',
			featured: false
		},
		{
			id: 10,
			category: 'company',
			date: 'November 20, 2024',
			title: 'AIXcellence Reaches 1,000+ Active Customers Milestone',
			excerpt: 'We\'re thrilled to announce that over 1,000 businesses are now using AIXcellence agents to transform their operations and deliver exceptional customer experiences.',
			image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
			readTime: '3 min read',
			featured: false
		}
	]

function NewsroomPostPage() {
	const [postId, setPostId] = useState<number | null>(() => {
		const hash = window.location.hash
		const match = hash.match(/^#news-(\d+)$/)
		return match ? parseInt(match[1], 10) : null
	})
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash
			const match = hash.match(/^#news-(\d+)$/)
			if (match) {
				setPostId(parseInt(match[1], 10))
			} else {
				setPostId(null)
			}
		}
		
		// Check immediately
		handleHashChange()
		
		// Listen for hash changes
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])
	
	const post = newsItemsData.find(p => p.id === postId)
	
	if (!postId || !post) {
		return (
			<div style={{ padding: '100px 20px', textAlign: 'center' }}>
				<p>News item not found. <a href="#news">Return to Newsroom</a></p>
			</div>
		)
	}
	
	// SEO for news post
	useSEO({
		title: `${post.title} | AIXcellence Newsroom`,
		description: post.excerpt,
		keywords: `AIXcellence news, ${post.category}, ${post.title}, AI automation updates`,
		url: `https://aixcellence.co/#news-${postId}`,
		canonical: `https://aixcellence.co/#news-${postId}`,
		image: post.image,
		type: 'article',
		publishedTime: new Date(post.date).toISOString()
	})
	
	const fullContent: Record<number, string[]> = {
		1: [
			'We\'re thrilled to announce the launch of our Early Access Program for the AIX One Platform, marking a significant milestone in our mission to democratize AI excellence. This exclusive program offers select businesses the opportunity to experience the future of AI automation before our public launch.',
			'The Early Access Program is designed for forward-thinking organizations ready to transform their operations with intelligent AI agents. Participants will gain first-hand experience with our comprehensive platform, including access to both ARA and AXE agents, advanced workflow automation, and enterprise-grade security features.',
			'This program represents more than just early access—it\'s an invitation to be part of a select group of innovators who will help shape the future of AI-powered business automation. Early access members will work directly with our product and engineering teams, providing feedback that directly influences platform development and feature prioritization.',
			'During the early access period, participants will work closely with our team to customize their AI agents, integrate with existing systems, and optimize their workflows. We\'re committed to providing exceptional support and gathering valuable feedback to ensure the platform meets the highest standards of excellence.',
			'Early access members will also receive priority support, exclusive training sessions, and the opportunity to influence the platform\'s development roadmap. This is your chance to be at the forefront of the AI revolution and shape the future of business automation.',
			'The AIX One Platform brings together all our AI agents and capabilities into a unified ecosystem. This means seamless integration between ARA Agent for customer interactions, AXE Agent for video content creation, and advanced workflow automation that connects your entire business operation.',
			'One of the key benefits of early access is the ability to customize and configure the platform to your specific business needs before general availability. Our team will work with you to understand your workflows, identify automation opportunities, and implement solutions that deliver immediate value.',
			'Early access participants will also benefit from exclusive pricing and terms that won\'t be available after public launch. This includes discounted rates, extended trial periods, and priority access to new features and capabilities as they\'re developed.',
			'We\'re particularly interested in working with businesses that have complex operations, multiple customer touchpoints, or unique industry requirements. These organizations will provide the most valuable feedback and help us ensure the platform can handle real-world business challenges.',
			'Applications for the Early Access Program are now open. We\'re looking for businesses across various industries who are ready to embrace AI transformation. If you\'re interested in joining this exclusive program, please contact our team through our contact page. Space is limited, and we\'re selecting participants based on their potential to provide valuable insights and their readiness to implement AI automation at scale.'
		],
		2: [
			'We\'re excited to announce a major update to ARA Agent: comprehensive multi-language support for customer interactions. ARA can now seamlessly handle conversations in over 50 languages, breaking down communication barriers for global businesses.',
			'This update represents a significant leap forward in making AI-powered customer service truly accessible worldwide. Whether your customers speak English, Spanish, Mandarin, French, Arabic, or any of 45+ other languages, ARA can understand and respond naturally in their preferred language.',
			'The multi-language capability goes beyond simple translation. ARA understands cultural nuances, regional dialects, and context-specific language patterns. This ensures that every customer interaction feels authentic and personalized, regardless of the language being used.',
			'Our advanced natural language processing models have been trained on millions of multilingual conversations, learning not just vocabulary and grammar, but also cultural context, business terminology, and regional communication styles. This means ARA doesn\'t just translate—it communicates naturally in each language.',
			'For businesses operating in multiple markets, this update means you can now provide consistent, high-quality customer service across all regions without the need for multilingual support teams. ARA automatically detects the customer\'s language and responds accordingly.',
			'The language detection happens instantly and automatically. When a customer sends a message in any supported language, ARA immediately recognizes it and switches to that language seamlessly. There are no configuration menus, no language selection steps—just natural, fluid communication.',
			'This update is particularly valuable for businesses expanding into new international markets. Instead of hiring and training multilingual support staff, you can deploy ARA Agent and immediately provide native-quality support in any language your customers prefer.',
			'We\'ve also ensured that ARA maintains context when customers switch languages mid-conversation. If a customer starts in English and switches to Spanish, ARA adapts seamlessly while maintaining full understanding of the conversation history.',
			'Implementation is seamless - no additional configuration required. ARA\'s language detection and processing happen automatically, ensuring a smooth experience for both your customers and your team. This update is available immediately for all ARA Agent users.',
			'The supported languages include all major world languages: English, Spanish, Mandarin, French, German, Italian, Portuguese, Japanese, Korean, Arabic, Hindi, Russian, and 40+ more. Each language includes support for regional variations, ensuring authentic communication regardless of dialect.'
		],
		3: [
			'AIXcellence is proud to announce strategic partnerships with leading CRM platforms including Salesforce, HubSpot, and Zoho. These integrations enable seamless workflow automation across your entire tech stack, creating a unified ecosystem for business operations.',
			'These partnerships represent our commitment to making AI agents work seamlessly with the tools businesses already use. By integrating with these popular CRM platforms, we\'re eliminating the friction that often comes with adopting new technology.',
			'The integrations allow ARA and AXE agents to access and update CRM data in real-time, ensuring that all customer interactions, bookings, and communications are automatically synchronized. This creates a single source of truth for all customer information.',
			'For Salesforce users, the integration includes support for custom objects, workflows, and Lightning components. ARA Agent can automatically create and update Salesforce records based on customer interactions, while AXE Agent can generate personalized video messages using customer data from Salesforce.',
			'HubSpot users can leverage ARA for automated lead nurturing and customer engagement. The integration enables ARA to qualify leads, schedule follow-ups, and update contact records automatically. This creates a seamless flow from initial contact to customer conversion.',
			'Zoho users benefit from seamless data synchronization across all Zoho applications. Whether you\'re using Zoho CRM, Zoho Desk, or Zoho Campaigns, ARA and AXE agents can access and update data across the entire Zoho ecosystem.',
			'These integrations go beyond simple data sync. Our AI agents can intelligently interpret CRM data to provide context-aware responses. For example, ARA can reference a customer\'s purchase history, support tickets, or previous interactions when handling inquiries.',
			'The partnerships also include co-marketing opportunities and joint go-to-market initiatives. We\'re working with each platform to create best-practice guides, integration templates, and training resources that help businesses maximize the value of AI-powered CRM automation.',
			'These partnerships are just the beginning. We\'re actively working on additional integrations with other popular business tools, including marketing automation platforms, help desk software, and e-commerce solutions. Our goal is to make AIXcellence the central hub for all your business automation needs.',
			'All integrations are available immediately for existing AIXcellence customers at no additional cost. Setup is straightforward, with guided configuration wizards that walk you through connecting your CRM and configuring data sync preferences. Our support team is also available to assist with any integration questions or custom requirements.'
		],
		4: [
			'AIXcellence has achieved SOC 2 Type II certification, demonstrating our unwavering commitment to enterprise-grade security and data protection. This certification validates that our security controls, policies, and procedures meet the highest industry standards.',
			'SOC 2 Type II certification is one of the most rigorous security audits in the industry. It requires an independent assessment of our security controls over a minimum of six months, ensuring that our systems are not just secure in theory, but secure in practice.',
			'This certification covers five key trust service criteria: security, availability, processing integrity, confidentiality, and privacy. By meeting all these criteria, we\'re providing our enterprise customers with the assurance they need to trust us with their sensitive business data.',
			'The audit process involved comprehensive reviews of our infrastructure, data handling procedures, access controls, and incident response protocols. Independent auditors examined our systems, interviewed our team, and tested our security measures to ensure they meet SOC 2 standards.',
			'For our customers, this means peace of mind knowing that their data is protected by industry-leading security measures. Our platform includes bank-level encryption, regular security audits, comprehensive access controls, and continuous monitoring for potential threats.',
			'Our security infrastructure includes end-to-end encryption for all data in transit and at rest, multi-factor authentication for all system access, and role-based access controls that ensure employees only have access to the data they need for their specific roles.',
			'We also maintain comprehensive audit logs that track all system access and data modifications. These logs are regularly reviewed by our security team and are available to enterprise customers for their own compliance and auditing needs.',
			'This achievement reflects our dedication to building a platform that enterprises can trust. As we continue to grow and serve larger organizations, maintaining the highest security standards remains our top priority. We\'re committed to ongoing security improvements and regular audits to ensure we continue to meet and exceed industry standards.',
			'For enterprise customers, SOC 2 Type II certification means they can confidently use AIXcellence for sensitive business operations, knowing that we meet the same security standards expected of major enterprise software providers. This certification is often a requirement for enterprise procurement processes, and achieving it removes a significant barrier to adoption.',
			'We\'re not stopping here. We\'re actively pursuing additional security certifications, including ISO 27001 and GDPR compliance validation. Our goal is to maintain the highest security standards in the industry and provide our customers with complete confidence in our platform.'
		],
		5: [
			'AXE Agent now features real-time video generation capabilities, allowing businesses to create professional video content in under 5 minutes. This revolutionary feature is powered by our advanced AI cloning technology, enabling instant video production without cameras, studios, or actors.',
			'The real-time video generation feature represents a breakthrough in content creation efficiency. Businesses can now produce unlimited video variations instantly, making it possible to create personalized video messages for every customer, campaign, or use case.',
			'This update includes enhanced video quality with 4K resolution support, improved facial expression accuracy, and more natural voice synchronization. The AI can now capture subtle emotional nuances and gestures, making the generated videos virtually indistinguishable from real recordings.',
			'Our advanced AI models have been trained on thousands of hours of video footage, learning to replicate not just appearance and voice, but also natural movements, expressions, and speech patterns. This creates videos that look and feel completely authentic.',
			'Real-time generation means no waiting for video processing. Create a video, preview it instantly, make adjustments, and deploy it immediately. This dramatically reduces the time-to-market for video content and enables rapid iteration and optimization.',
			'The technology behind real-time generation is groundbreaking. Our AI can process video generation requests in seconds, compared to hours or days with traditional production methods. This speed enables use cases that were previously impossible, such as live personalized video messages or real-time content updates.',
			'Businesses are already using this feature for a wide range of applications: personalized customer onboarding videos, product demonstrations, training content, marketing campaigns, and even live presentations where the AI spokesperson can adapt in real-time.',
			'The feature supports all languages and accents, making it perfect for global businesses. Whether you need a product demonstration in English, a training video in Spanish, or a marketing message in Japanese, AXE can generate it in real-time with authentic pronunciation and expression.',
			'Quality improvements are significant. The 4K resolution ensures that videos look professional on any screen size, from mobile devices to large displays. Enhanced facial expression accuracy means the AI can convey emotions naturally, making videos more engaging and effective.',
			'This update is available immediately for all AXE Agent users. The real-time generation feature works with any existing video clone you\'ve created, so you can start using it right away with your current spokesperson. No additional setup or training required.'
		],
		6: [
			'AIXcellence is expanding its engineering team with key hires from Google, Microsoft, and OpenAI. These industry veterans bring decades of combined experience in AI, machine learning, and enterprise software development, accelerating our mission to democratize AI excellence.',
			'The new team members include senior engineers specializing in natural language processing, computer vision, distributed systems, and security. Their expertise will be instrumental in advancing our platform\'s capabilities and ensuring we deliver world-class AI solutions.',
			'From Google, we\'ve welcomed engineers who worked on large-scale AI systems and infrastructure. Their experience building systems that serve billions of users will help us scale our platform to meet growing demand while maintaining performance and reliability.',
			'Our Microsoft hires bring deep expertise in enterprise software development and cloud infrastructure. Their knowledge of building secure, scalable platforms for business customers will enhance our enterprise offerings and help us meet the needs of larger organizations.',
			'The OpenAI engineers joining our team have extensive experience with advanced AI models and natural language processing. Their expertise will accelerate our development of more sophisticated AI capabilities and help us push the boundaries of what\'s possible with AI agents.',
			'This expansion reflects our rapid growth and the increasing demand for our platform. As we scale to serve more businesses, having top-tier engineering talent is essential to maintaining our high standards of quality, performance, and innovation.',
			'The new hires will focus on enhancing our AI models, improving platform scalability, developing new features, and strengthening our security infrastructure. Their contributions will directly benefit our customers through improved performance, new capabilities, and enhanced reliability.',
			'We\'re particularly excited about the impact these engineers will have on our AI model development. Their experience with cutting-edge AI research and development will help us create more intelligent, capable agents that can handle increasingly complex business tasks.',
			'This expansion also strengthens our commitment to security and compliance. The new security-focused engineers will help us maintain and improve our SOC 2 certification and pursue additional security standards, ensuring our platform meets the highest enterprise security requirements.',
			'We\'re continuing to grow and are actively recruiting for additional positions across engineering, product, sales, and customer success. If you\'re passionate about AI and want to be part of a team that\'s transforming how businesses operate, we\'d love to hear from you. Visit our careers page or reach out to our team to learn more about open positions.'
		],
		7: [
			'AIXcellence is excited to announce the launch of our Custom Software Solutions Division, expanding our services beyond standard products to offer bespoke AI development, integration services, and tailored automation solutions. This new division enables businesses with unique requirements to leverage our proven AI technology in custom implementations.',
			'While our standard products—ARA Agent and AXE Agent—serve many businesses effectively, we recognize that some organizations have specialized needs that require custom development. Our new Custom Software Solutions Division addresses these unique requirements by building tailored solutions on our proven AI foundation.',
			'The division offers comprehensive custom development services, including custom AI agent development, specialized integrations with proprietary systems, custom workflow automation, enterprise implementation, white-label solutions, and AI consulting. Each solution is designed to perfectly match the client\'s specific business processes and requirements.',
			'Our custom solutions leverage the same battle-tested AI technology that powers ARA and AXE agents, ensuring reliability, performance, and scalability. By building on our proven foundation, we can deliver custom solutions faster and more cost-effectively than building from scratch, while still providing the flexibility and customization businesses need.',
			'One of the key advantages of our custom solutions approach is the hybrid model: businesses can start with our standard products for common use cases and add custom development for specialized requirements. This provides the speed and cost-effectiveness of standard products while addressing unique needs through targeted custom development.',
			'The Custom Software Solutions Division is led by experienced engineers and solution architects who specialize in understanding complex business requirements and translating them into effective AI solutions. Our team works closely with clients through every stage, from initial discovery and planning to design, development, testing, and deployment.',
			'We\'re particularly focused on industries with specialized requirements, including healthcare, finance, legal, and manufacturing. These industries often have unique compliance needs, proprietary systems, or complex workflows that benefit from custom AI development tailored to their specific context.',
			'Our custom development process follows a proven methodology: discovery and planning, design and architecture, development and testing, and deployment and training. This structured approach ensures that custom solutions are delivered on time, on budget, and meet all specified requirements.',
			'For businesses considering custom solutions, we offer free consultations to assess whether custom development is the right approach. Our team evaluates requirements, identifies opportunities, and provides recommendations on the best path forward—whether that\'s standard products, custom development, or a hybrid approach.',
			'The launch of our Custom Software Solutions Division represents our commitment to serving businesses of all sizes and requirements. Whether you need our ready-to-use products or custom solutions tailored to your business, we\'re here to help you leverage AI to transform your operations and drive growth.'
		],
		8: [
			'AIXcellence has been recognized by leading technology publications and industry analysts as a top AI automation platform, receiving accolades for innovation, customer impact, and technological excellence. These recognitions validate our mission to democratize AI excellence and make advanced automation accessible to businesses of all sizes.',
			'Industry analysts have highlighted our platform\'s unique combination of ease of use, powerful capabilities, and enterprise-grade security. Publications have praised our approach to making AI agents accessible to businesses without requiring technical expertise, while still providing the sophistication and customization options that larger organizations need.',
			'One of the key factors cited in these recognitions is our hybrid model—offering both standard products and custom solutions. This approach allows businesses to start with ready-to-use AI agents and scale to custom development as their needs evolve, providing flexibility that many competitors don\'t offer.',
			'Our customer success stories have also been featured prominently, with analysts noting the significant ROI and transformation that businesses achieve with our platform. Case studies showing 65% cost reductions, 50% satisfaction improvements, and substantial revenue growth have caught the attention of industry leaders.',
			'Technology reviewers have particularly praised our AI agents\' natural language understanding and emotional intelligence. The ability of ARA and AXE agents to understand context, detect sentiment, and respond with appropriate empathy has been recognized as a significant differentiator in the market.',
			'Our security and compliance posture has also received recognition. The SOC 2 Type II certification, combined with our comprehensive security measures, has been noted as a key factor for enterprise adoption. Analysts have highlighted our commitment to data protection and regulatory compliance.',
			'Innovation in video AI has been another area of recognition. AXE Agent\'s ability to create professional video content with AI cloning has been praised for its quality, speed, and cost-effectiveness. Industry publications have featured our video AI capabilities as a game-changer for content marketing.',
			'These recognitions reflect not just our technology, but also our customer-centric approach. Analysts have noted our focus on customer success, comprehensive support, and continuous platform improvement based on customer feedback. This customer-first philosophy has been a key factor in our recognition.',
			'Looking ahead, we\'re committed to maintaining and building on these recognitions. We continue to invest in innovation, customer success, and platform development. Our goal is not just to be recognized, but to consistently deliver value that transforms how businesses operate.',
			'We\'re grateful for these recognitions and see them as validation of our mission. However, our focus remains on our customers and helping them achieve their business goals through AI automation. These awards and recognitions are meaningful, but the real measure of success is the transformation we help our customers achieve.'
		],
		9: [
			'AIXcellence is excited to announce new enterprise features that provide advanced analytics, custom reporting, and detailed performance insights. These features enable enterprise customers to optimize their AI agent deployments, measure ROI, and make data-driven decisions about their automation strategies.',
			'The new Advanced Analytics Dashboard provides comprehensive insights into AI agent performance, customer interactions, and business impact. Enterprise customers can now access real-time metrics, historical trends, and predictive analytics that help them understand how AI agents are transforming their operations.',
			'Custom reporting capabilities allow enterprises to create tailored reports that match their specific KPIs and business metrics. Whether you need executive summaries, operational dashboards, or detailed performance reports, the new reporting system provides the flexibility to create exactly what you need.',
			'Performance insights go beyond basic metrics to provide actionable intelligence. The system identifies trends, patterns, and opportunities for optimization. For example, it might identify peak interaction times, common customer issues, or areas where AI agents could be more effective.',
			'ROI tracking is built into the analytics, allowing enterprises to measure the financial impact of their AI automation investments. The system tracks cost savings, revenue increases, efficiency gains, and other financial metrics that demonstrate the value of AI agent deployments.',
			'Customer journey analytics provide insights into how customers interact with AI agents across different touchpoints. This helps enterprises understand customer behavior, identify pain points, and optimize the customer experience. The analytics show the complete customer journey from first contact to resolution.',
			'Agent performance metrics help enterprises understand how well their AI agents are performing. Metrics include response times, resolution rates, customer satisfaction scores, escalation rates, and more. These metrics help identify areas for improvement and optimization.',
			'Integration analytics show how AI agents are working with other business systems. Enterprises can see data flow, synchronization status, and integration performance. This helps ensure that AI agents are seamlessly integrated with the rest of the tech stack.',
			'Custom alerts and notifications keep enterprise teams informed about important events and trends. Whether it\'s a spike in customer inquiries, a performance issue, or an opportunity for optimization, the system can alert the right team members at the right time.',
			'These enterprise features are available immediately for all enterprise customers. Setup is straightforward, with guided configuration that helps enterprises customize their analytics and reporting to match their specific needs. Our support team is available to assist with implementation and optimization.',
			'The new enterprise features represent our commitment to providing enterprise-grade capabilities that help large organizations maximize the value of their AI automation investments. By providing comprehensive analytics and insights, we enable enterprises to continuously optimize and improve their AI agent deployments.'
		],
		10: [
			'AIXcellence is thrilled to announce a major milestone: we\'ve reached over 1,000 active customers using our AI agents to transform their business operations. This milestone represents significant growth and validates the value that businesses are finding in AI-powered automation.',
			'These 1,000+ businesses span industries including technology, healthcare, retail, finance, education, and more. They range from startups to enterprise organizations, demonstrating that AI automation is valuable for businesses of all sizes and stages. This diversity shows the broad applicability of our platform.',
			'The growth has been rapid, reflecting the increasing demand for AI automation solutions. Businesses are recognizing that AI agents are no longer a nice-to-have, but a necessity for competing in today\'s market. The ability to provide 24/7 service, handle high volumes, and deliver consistent quality is becoming essential.',
			'Customer success has been a key driver of this growth. Businesses using AIXcellence agents report significant improvements: 65% average cost reduction, 50% improvement in customer satisfaction, 80% faster response times, and substantial revenue growth. These results create strong word-of-mouth and referrals.',
			'The milestone reflects not just growth in customer count, but also in usage and impact. Our AI agents are handling millions of customer interactions, processing thousands of bookings, and creating countless video content pieces. The scale of automation happening on our platform is substantial.',
			'Geographic diversity is another notable aspect of this milestone. Our customers are located across North America, Europe, Asia, and other regions. This global reach demonstrates that AI automation needs are universal, and our platform can serve businesses anywhere in the world.',
			'Industry diversity is also impressive. While technology companies were early adopters, we now serve healthcare providers, financial services firms, educational institutions, retail businesses, and more. Each industry brings unique requirements, and our platform\'s flexibility allows us to serve them all effectively.',
			'This milestone wouldn\'t have been possible without our customers\' trust and partnership. We\'re grateful for every business that has chosen AIXcellence and for the feedback they\'ve provided that has helped us improve and evolve. Our customers are our partners in transforming how businesses operate.',
			'Looking ahead, we\'re focused on continuing to grow while maintaining the high standards of quality, support, and innovation that have brought us to this milestone. We\'re investing in platform development, expanding our team, and enhancing our capabilities to serve even more businesses effectively.',
			'Reaching 1,000+ customers is just the beginning. We\'re committed to helping businesses of all sizes leverage AI to transform their operations, improve customer experiences, and drive growth. As we continue to grow, our mission remains the same: democratize AI excellence and make advanced automation accessible to everyone.'
		]
	}
	
	const content = fullContent[postId] || []
	const relatedNews = newsItemsData.filter(item => item.id !== postId && item.category === post.category).slice(0, 3)
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Navigation */}
			<motion.section 
				className="newsroompost-nav-section"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				<div className="container">
					<motion.a 
						href="#news" 
						className="newsroompost-back-link"
						whileHover={{ x: -4 }}
					>
						<ArrowLeft size={20} />
						Back to Newsroom
					</motion.a>
				</div>
			</motion.section>
			
			{/* Hero Section */}
			<motion.section 
				className="newsroompost-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="newsroompost-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="newsroompost-meta">
							<span className="newsroompost-date">{post.date}</span>
							<span className="newsroompost-category">{post.category}</span>
							<span className="newsroompost-read-time">{post.readTime}</span>
						</div>
						<h1 className="newsroompost-title">{post.title}</h1>
					</motion.div>
					<motion.div 
						className="newsroompost-featured-image"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.4 }}
					>
						<img src={post.image} alt={post.title} />
					</motion.div>
				</div>
			</motion.section>
			
			{/* Article Content */}
			<motion.section 
				className="newsroompost-content-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="newsroompost-content-wrapper">
						<article className="newsroompost-article">
							{content.map((paragraph, idx) => (
								<motion.p
									key={idx}
									className="newsroompost-paragraph"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
								>
									{paragraph}
								</motion.p>
							))}
						</article>
						
						<aside className="newsroompost-sidebar">
							<div className="newsroompost-share-card">
								<h4 className="newsroompost-share-title">Share This Article</h4>
								<div className="newsroompost-share-links">
									<motion.a
										href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
										className="newsroompost-share-link"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Twitter size={20} />
									</motion.a>
									<motion.a
										href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
										className="newsroompost-share-link"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Linkedin size={20} />
									</motion.a>
									<motion.button
										className="newsroompost-share-link"
										onClick={() => {
											navigator.clipboard.writeText(window.location.href)
											alert('Link copied to clipboard!')
										}}
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
									>
										<Share2 size={20} />
									</motion.button>
								</div>
							</div>
							
							{relatedNews.length > 0 && (
								<div className="newsroompost-related-card">
									<h4 className="newsroompost-related-title">Related News</h4>
									<div className="newsroompost-related-list">
										{relatedNews.map((relatedItem) => (
											<motion.a
												key={relatedItem.id}
												href={`#news-${relatedItem.id}`}
												className="newsroompost-related-item"
												whileHover={{ x: 4 }}
											>
												<img src={relatedItem.image} alt={relatedItem.title} />
												<div className="newsroompost-related-content">
													<h5 className="newsroompost-related-item-title">{relatedItem.title}</h5>
													<span className="newsroompost-related-date">{relatedItem.date}</span>
												</div>
											</motion.a>
										))}
									</div>
								</div>
							)}
						</aside>
					</div>
				</div>
			</motion.section>
			
			{/* CTA Section */}
			<motion.section 
				className="newsroompost-cta-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="newsroompost-cta-content">
						<h2 className="newsroompost-cta-title">Stay Updated</h2>
						<p className="newsroompost-cta-subtitle">
							Get the latest news and updates from AIXcellence delivered to your inbox.
						</p>
						<motion.a 
							href="#contact" 
							className="btn btn-primary"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Subscribe to Updates
							<ArrowRight size={20} />
						</motion.a>
					</div>
				</div>
			</motion.section>
		</motion.div>
	)
}

function NewsroomPage() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const [selectedCategory, setSelectedCategory] = useState('all')
	
	useSEO({
		title: 'Newsroom — Latest Updates & Announcements | AIXcellence',
		description: 'Stay updated with the latest news, product updates, partnerships, and announcements from AIXcellence. Get insights into new features, company milestones, and industry developments.',
		keywords: 'AIXcellence news, AI automation updates, product announcements, company news, AI technology updates',
		url: 'https://aixcellence.co/#news',
		canonical: 'https://aixcellence.co/#news'
	})
	
	const newsItems = newsItemsData
	
	const categories = [
		{ id: 'all', label: 'All News' },
		{ id: 'announcement', label: 'Announcements' },
		{ id: 'product', label: 'Product Updates' },
		{ id: 'partnership', label: 'Partnerships' },
		{ id: 'company', label: 'Company News' }
	]
	
	const filteredNews = selectedCategory === 'all' 
		? newsItems 
		: newsItems.filter(item => item.category === selectedCategory)
	
	const featuredNews = newsItems.filter(item => item.featured)[0]
	const regularNews = filteredNews.filter(item => !item.featured)
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Hero Section */}
			<motion.section 
				className="newsroom-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="newsroom-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="newsroom-hero-badge">
							<Newspaper size={20} />
							<span>Newsroom</span>
						</div>
						<h1 className="newsroom-hero-title">
							Latest Updates & Announcements
						</h1>
						<p className="newsroom-hero-subtitle">
							Stay informed about product launches, company milestones, partnerships, and the latest innovations in AI automation.
						</p>
					</motion.div>
				</div>
			</motion.section>
			
			{/* Categories Filter */}
			<motion.section 
				className="newsroom-filter-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="newsroom-filter-tabs">
						{categories.map((category) => (
							<button
								key={category.id}
								className={`newsroom-filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
								onClick={() => setSelectedCategory(category.id)}
							>
								{category.label}
							</button>
						))}
					</div>
				</div>
			</motion.section>
			
			{/* Featured News */}
			{featuredNews && selectedCategory === 'all' && (
				<motion.section 
					className="newsroom-featured-section"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="container">
						<motion.div
							className="newsroom-featured-card"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							whileHover={{ y: -4 }}
						>
							<div className="newsroom-featured-image">
								<img src={featuredNews.image} alt={featuredNews.title} />
								<div className="newsroom-featured-badge">Featured</div>
							</div>
							<div className="newsroom-featured-content">
								<div className="newsroom-meta">
									<span className="newsroom-date">{featuredNews.date}</span>
									<span className="newsroom-category">{featuredNews.category}</span>
									<span className="newsroom-read-time">{featuredNews.readTime}</span>
								</div>
								<h2 className="newsroom-featured-title">{featuredNews.title}</h2>
								<p className="newsroom-featured-excerpt">{featuredNews.excerpt}</p>
								<motion.a 
									href={`#news-${featuredNews.id}`}
									className="newsroom-read-more"
									whileHover={{ x: 4 }}
								>
									Read More
									<ArrowRight size={16} />
								</motion.a>
							</div>
						</motion.div>
					</div>
				</motion.section>
			)}
			
			{/* News Grid */}
			<motion.section 
				className="newsroom-grid-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedCategory}
							className="newsroom-grid"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							{regularNews.map((item, idx) => (
								<motion.article
									key={item.id}
									className="newsroom-article-card"
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									whileHover={{ y: -8 }}
								>
									<div className="newsroom-article-image">
										<img src={item.image} alt={item.title} />
									</div>
									<div className="newsroom-article-content">
										<div className="newsroom-meta">
											<span className="newsroom-date">{item.date}</span>
											<span className="newsroom-category">{item.category}</span>
											<span className="newsroom-read-time">{item.readTime}</span>
										</div>
										<h3 className="newsroom-article-title">{item.title}</h3>
										<p className="newsroom-article-excerpt">{item.excerpt}</p>
										<motion.a 
											href={`#news-${item.id}`}
											className="newsroom-read-more"
											whileHover={{ x: 4 }}
										>
											Read More
											<ArrowRight size={16} />
										</motion.a>
									</div>
								</motion.article>
							))}
						</motion.div>
					</AnimatePresence>
					
					{regularNews.length === 0 && (
						<div className="newsroom-empty-state">
							<Newspaper size={48} />
							<p>No news found in this category.</p>
						</div>
					)}
				</div>
			</motion.section>
			
			{/* Press Kit Section */}
			<motion.section 
				className="newsroom-presskit-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="newsroom-presskit-content">
						<motion.div
							className="newsroom-presskit-text"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<h2 className="section-title">Press Kit</h2>
							<p className="section-sub">
								Access our brand assets, logos, and press materials for media use.
							</p>
							<div className="newsroom-presskit-items">
								<motion.a
									href="#press-kit"
									className="newsroom-presskit-item"
									whileHover={{ x: 4 }}
								>
									<FileText size={20} />
									<span>Brand Guidelines</span>
									<ExternalLink size={16} />
								</motion.a>
								<motion.a
									href="#press-kit"
									className="newsroom-presskit-item"
									whileHover={{ x: 4 }}
								>
									<FileText size={20} />
									<span>Logo Assets</span>
									<ExternalLink size={16} />
								</motion.a>
								<motion.a
									href="#press-kit"
									className="newsroom-presskit-item"
									whileHover={{ x: 4 }}
								>
									<FileText size={20} />
									<span>Press Releases</span>
									<ExternalLink size={16} />
								</motion.a>
							</div>
						</motion.div>
						<motion.div
							className="newsroom-presskit-contact"
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
						>
							<div className="card newsroom-presskit-card">
								<h3 className="newsroom-presskit-card-title">Media Inquiries</h3>
								<p className="newsroom-presskit-card-text">
									For press inquiries, interview requests, or media partnerships, please contact our communications team.
								</p>
								<motion.a
									href="mailto:press@aixcellence.co"
									className="btn btn-primary"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Mail size={20} />
									Contact Press Team
								</motion.a>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</motion.div>
	)
}

function CustomServicesPage() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	useSEO({
		title: 'Custom Software Solutions — AI-Powered Development Services | AIXcellence',
		description: 'Get custom AI software solutions tailored to your business needs. We offer custom AI agent development, integrations, workflow automation, and implementation services built on our proven ARA and AXE Agent technology.',
		keywords: 'custom software solutions, custom AI development, bespoke AI agents, custom automation, AI integration services, custom software development, AIXcellence custom services',
		url: 'https://aixcellence.co/#custom-services',
		canonical: 'https://aixcellence.co/#custom-services'
	})
	
	const services = [
		{
			icon: Settings,
			title: 'Custom AI Agent Development',
			description: 'We build bespoke AI agents tailored to your specific business processes, workflows, and requirements. Leverage our proven ARA and AXE Agent technology as a foundation for your custom solution.',
			features: [
				'Custom conversation flows and logic',
				'Industry-specific training and knowledge',
				'Unique personality and brand voice',
				'Specialized integrations with your systems',
				'Custom analytics and reporting'
			]
		},
		{
			icon: Layers,
			title: 'Custom Integration Services',
			description: 'Seamlessly integrate AI agents with your existing tech stack, CRM systems, databases, and proprietary software. We ensure your AI solutions work perfectly with your current infrastructure.',
			features: [
				'API development and integration',
				'Legacy system integration',
				'Custom data pipelines',
				'Real-time synchronization',
				'Multi-platform connectivity'
			]
		},
		{
			icon: Zap,
			title: 'Custom Workflow Automation',
			description: 'Design and implement custom automation workflows that streamline your unique business processes. From lead management to order fulfillment, we automate what matters most to your business.',
			features: [
				'End-to-end process automation',
				'Custom business logic implementation',
				'Multi-step workflow orchestration',
				'Exception handling and error recovery',
				'Performance monitoring and optimization'
			]
		},
		{
			icon: Building2,
			title: 'Enterprise Implementation',
			description: 'Comprehensive implementation services for large organizations. We handle everything from planning and deployment to training and ongoing support, ensuring smooth adoption across your enterprise.',
			features: [
				'Enterprise architecture design',
				'Phased rollout planning',
				'Staff training and change management',
				'Dedicated support team',
				'Performance optimization'
			]
		},
		{
			icon: Shield,
			title: 'White-Label Solutions',
			description: 'Rebrand our AI technology as your own. Perfect for agencies, resellers, and companies looking to offer AI capabilities under their brand with full customization and support.',
			features: [
				'Complete brand customization',
				'Custom domain and hosting',
				'Reseller program support',
				'Co-marketing opportunities',
				'Dedicated account management'
			]
		},
		{
			icon: Cpu,
			title: 'AI Consulting & Strategy',
			description: 'Strategic guidance on how to leverage AI in your business. Our experts help you identify opportunities, plan implementations, and maximize ROI from AI investments.',
			features: [
				'AI readiness assessment',
				'Custom AI strategy development',
				'ROI analysis and planning',
				'Technology recommendations',
				'Ongoing strategic guidance'
			]
		}
	]
	
	const processSteps = [
		{
			number: '01',
			title: 'Discovery & Planning',
			description: 'We start by understanding your business needs, challenges, and goals. Through workshops and analysis, we create a detailed roadmap for your custom solution.'
		},
		{
			number: '02',
			title: 'Design & Architecture',
			description: 'Our team designs the solution architecture, user flows, and technical specifications. We ensure scalability, security, and seamless integration with your existing systems.'
		},
		{
			number: '03',
			title: 'Development & Testing',
			description: 'Using agile methodologies, we build your custom solution with regular check-ins and demos. Rigorous testing ensures quality, performance, and reliability.'
		},
		{
			number: '04',
			title: 'Deployment & Training',
			description: 'We handle deployment, configuration, and provide comprehensive training to your team. Ongoing support ensures smooth operations from day one.'
		}
	]
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Hero Section */}
			<motion.section 
				className="custom-services-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="custom-services-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="custom-services-hero-badge">
							<Settings size={20} />
							<span>Custom Software Solutions</span>
						</div>
						<h1 className="custom-services-hero-title">
							Tailored AI Solutions for Your Business
						</h1>
						<p className="custom-services-hero-subtitle">
							Beyond our standard products, we build custom AI software solutions that perfectly fit your unique business needs. 
							Leverage our proven ARA and AXE Agent technology as the foundation for your bespoke solution.
						</p>
						<div className="custom-services-hero-buttons">
							<motion.a 
								href="#contact" 
								className="btn btn-primary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get a Custom Quote
								<ArrowRight size={20} />
							</motion.a>
							<motion.a 
								href="#services" 
								className="btn btn-secondary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								View Services
							</motion.a>
						</div>
					</motion.div>
				</div>
			</motion.section>
			
			{/* Services Grid */}
			<motion.section 
				className="custom-services-section"
				id="services"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="section-header"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						<h2 className="section-title">Our Custom Services</h2>
						<p className="section-sub">
							Comprehensive custom software solutions built on our proven AI technology
						</p>
					</motion.div>
					
					<div className="custom-services-grid">
						{services.map((service, idx) => (
							<motion.div
								key={idx}
								className="custom-service-card"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
							>
								<div className="custom-service-icon">
									<service.icon size={32} />
								</div>
								<h3 className="custom-service-title">{service.title}</h3>
								<p className="custom-service-description">{service.description}</p>
								<ul className="custom-service-features">
									{service.features.map((feature, fidx) => (
										<li key={fidx}>
											<CheckCircle2 size={16} />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
			
			{/* Process Section */}
			<motion.section 
				className="custom-services-process-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="section-header"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="section-title">Our Development Process</h2>
						<p className="section-sub">
							A proven methodology for delivering custom solutions on time and on budget
						</p>
					</motion.div>
					
					<div className="custom-services-process-grid">
						{processSteps.map((step, idx) => (
							<motion.div
								key={idx}
								className="custom-services-process-card"
								initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.15 }}
							>
								<div className="process-number">{step.number}</div>
								<h3 className="process-title">{step.title}</h3>
								<p className="process-description">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
			
			{/* Why Custom Section */}
			<motion.section 
				className="custom-services-why-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="custom-services-why-content">
						<motion.div 
							className="custom-services-why-text"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="section-title">Why Choose Custom Solutions?</h2>
							<p className="section-sub">
								While our standard products (ARA Agent, AXE Agent) work great for many businesses, 
								custom solutions give you the flexibility to address unique requirements and scale 
								exactly how you need.
							</p>
							<div className="custom-services-why-list">
								<div className="why-item">
									<CheckCircle2 size={24} />
									<div>
										<h4>Perfect Fit for Your Business</h4>
										<p>Solutions designed specifically for your workflows, processes, and industry requirements</p>
									</div>
								</div>
								<div className="why-item">
									<CheckCircle2 size={24} />
									<div>
										<h4>Built on Proven Technology</h4>
										<p>Leverage our battle-tested ARA and AXE Agent technology as your foundation</p>
									</div>
								</div>
								<div className="why-item">
									<CheckCircle2 size={24} />
									<div>
										<h4>Seamless Integration</h4>
										<p>Works perfectly with your existing systems, tools, and infrastructure</p>
									</div>
								</div>
								<div className="why-item">
									<CheckCircle2 size={24} />
									<div>
										<h4>Scalable & Future-Proof</h4>
										<p>Built to grow with your business and adapt to changing needs</p>
									</div>
								</div>
							</div>
						</motion.div>
						<motion.div 
							className="custom-services-why-visual"
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<div className="why-visual-card">
								<div className="why-visual-icon">
									<Sparkles size={48} />
								</div>
								<h3>Products + Custom Services</h3>
								<p>Get the best of both worlds: proven products for standard needs, custom solutions for unique requirements</p>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>
			
			{/* CTA Section */}
			<motion.section 
				className="custom-services-cta-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="custom-services-cta-content"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="cta-title">Ready to Build Your Custom Solution?</h2>
						<p className="cta-subtitle">
							Let's discuss how we can create a tailored AI solution that perfectly fits your business needs
						</p>
						<div className="cta-buttons">
							<motion.a 
								href="#contact" 
								className="btn btn-primary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Schedule a Consultation
								<ArrowRight size={20} />
							</motion.a>
							<motion.a 
								href="#ara-agent" 
								className="btn btn-secondary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								View Our Products
							</motion.a>
						</div>
					</motion.div>
				</div>
			</motion.section>
		</motion.div>
	)
}

function ContactPage() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	useSEO({
		title: 'Contact Us — Get Started with AIXcellence | AIXcellence',
		description: 'Get in touch with AIXcellence to learn how our AI agents can transform your business. Schedule a demo, request a quote, or speak with our team about intelligent automation solutions.',
		keywords: 'contact AIXcellence, AI automation demo, get started with AI agents, AIXcellence sales, business automation consultation',
		url: 'https://aixcellence.co/#contact',
		canonical: 'https://aixcellence.co/#contact'
	})
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		subject: '',
		message: ''
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })
	
	// API URL - use environment variable or default to Supabase Edge Function
	const API_URL = import.meta.env.VITE_API_URL || 'https://slywhefjsrzluticwxsm.supabase.co/functions/v1/contact'
	const contactSocialProfiles = [
		{ icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1C7UCG71Vh/?mibextid=wwXIfr' },
		{ icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aixcellenceteam?igsh=MXRremRmZnB3bmluMg%3D%3D&utm_source=qr' },
		{ icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/aixcellenceteam/' },
		{ icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@aixcellenceteam?si=zUSp7FUGa-bXW6pV' },
	]
	
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus({ type: null, message: '' })
		
		try {
			// Send contact form directly to Supabase Edge Function / Flask (if VITE_API_URL is set)
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			
			if (!response.ok && response.status === 0) {
				// Network error or CORS issue
				throw new Error('Network error: Unable to reach server. Please check your connection.')
			}
			
			const data = await response.json()
			
			if (response.ok && data.success) {
				setSubmitStatus({ type: 'success', message: data.message || 'Thank you for your message! We\'ll get back to you soon.' })
			setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
			} else {
				// Handle validation errors
				if (data.errors) {
					const errorMessages = Object.entries(data.errors)
						.map(([field, errors]: [string, any]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
						.join('\n')
					setSubmitStatus({ type: 'error', message: `Please fix the following errors:\n${errorMessages}` })
				} else {
					setSubmitStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again later.' })
				}
			}
		} catch (error) {
			console.error('Contact form error:', error)
			if (error instanceof TypeError && error.message.includes('fetch')) {
				setSubmitStatus({ type: 'error', message: 'Network error: Unable to connect to server. Please check your internet connection and try again.' })
			} else if (error instanceof Error) {
				setSubmitStatus({ type: 'error', message: error.message })
			} else {
				setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
			}
		} finally {
			setIsSubmitting(false)
		}
	}
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Hero Section */}
			<motion.section 
				className="contact-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="contact-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="contact-hero-badge">
							<MessageSquare size={20} />
							<span>Get in Touch</span>
						</div>
						<h1 className="contact-hero-title">
							Let's Build Something Amazing Together
						</h1>
						<p className="contact-hero-subtitle">
							Have questions about AIXcellence? Want to see a demo? Or ready to transform your business with AI? 
							We're here to help. Reach out and let's start a conversation.
						</p>
					</motion.div>
				</div>
			</motion.section>
			
			{/* Contact Content Section */}
			<motion.section 
				className="contact-content-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="contact-content-grid">
						{/* Contact Form */}
						<motion.div
							className="contact-form-wrapper"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<div className="card contact-form-card">
								<h2 className="contact-form-title">Send us a Message</h2>
								<p className="contact-form-subtitle">
									Fill out the form below and we'll get back to you within 24 hours.
								</p>
								{submitStatus.type && (
									<div className={`contact-form-message ${submitStatus.type === 'success' ? 'contact-form-message-success' : 'contact-form-message-error'}`}>
										{submitStatus.type === 'success' ? '✓' : '✗'} {submitStatus.message}
									</div>
								)}
								<form onSubmit={handleSubmit} className="contact-form">
									<div className="contact-form-row">
										<div className="contact-form-group">
											<label htmlFor="name">Full Name *</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												placeholder="John Doe"
											/>
										</div>
										<div className="contact-form-group">
											<label htmlFor="email">Email Address *</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												placeholder="john@company.com"
											/>
										</div>
									</div>
									<div className="contact-form-row">
										<div className="contact-form-group">
											<label htmlFor="company">Company Name</label>
											<input
												type="text"
												id="company"
												name="company"
												value={formData.company}
												onChange={handleChange}
												placeholder="Your Company"
											/>
										</div>
										<div className="contact-form-group">
											<label htmlFor="phone">Phone Number</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												placeholder="+1 (555) 000-0000"
											/>
										</div>
									</div>
									<div className="contact-form-group">
										<label htmlFor="subject">Subject *</label>
										<select
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											required
										>
											<option value="">Select a subject</option>
											<option value="demo">Request a Demo</option>
											<option value="pricing">Pricing Inquiry</option>
											<option value="partnership">Partnership Opportunity</option>
											<option value="support">Technical Support</option>
											<option value="other">Other</option>
										</select>
									</div>
									<div className="contact-form-group">
										<label htmlFor="message">Message *</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											required
											rows={6}
											placeholder="Tell us about your needs and how we can help..."
										/>
									</div>
									<motion.button
										type="submit"
										className="btn btn-primary contact-submit-btn"
										disabled={isSubmitting}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										{isSubmitting ? (
											<>Sending...</>
										) : (
											<>
												Send Message
												<Send size={20} />
											</>
										)}
									</motion.button>
								</form>
							</div>
						</motion.div>
						
						{/* Contact Information */}
						<motion.div
							className="contact-info-wrapper"
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
						>
							<div className="contact-info-card">
								<h2 className="contact-info-title">Contact Information</h2>
								<p className="contact-info-subtitle">
									Choose the best way to reach us
								</p>
								
								<div className="contact-info-items">
									<motion.a
										href="tel:+17206047231"
										className="contact-info-item"
										whileHover={{ x: 4 }}
									>
										<div className="contact-info-icon">
											<Phone size={24} />
										</div>
										<div className="contact-info-content">
											<h3 className="contact-info-label">Phone</h3>
											<p className="contact-info-value">+1 (720) 604-7231</p>
										</div>
									</motion.a>
									
									<motion.a
										href="mailto:hi@aixcellence.co"
										className="contact-info-item"
										whileHover={{ x: 4 }}
									>
										<div className="contact-info-icon">
											<Mail size={24} />
										</div>
										<div className="contact-info-content">
											<h3 className="contact-info-label">Email</h3>
											<p className="contact-info-value">hi@aixcellence.co</p>
										</div>
									</motion.a>
									
									<div className="contact-info-item">
										<div className="contact-info-icon">
											<MapPin size={24} />
										</div>
										<div className="contact-info-content">
											<h3 className="contact-info-label">Address</h3>
											<p className="contact-info-value">
												1500 Grant St #4242<br />
												Denver, CO 80203<br />
												United States
											</p>
										</div>
									</div>
								</div>
								
								<div className="contact-social-section">
									<h3 className="contact-social-title">Follow Us</h3>
									<div className="contact-social-links">
										{contactSocialProfiles.map((profile) => {
											const IconComponent = profile.icon
											return (
										<motion.a
													key={profile.label}
													href={profile.href}
											className="contact-social-link"
													target="_blank"
													rel="noopener noreferrer"
											whileHover={{ scale: 1.1, y: -2 }}
											whileTap={{ scale: 0.95 }}
													aria-label={profile.label}
										>
													<IconComponent size={20} />
										</motion.a>
											)
										})}
									</div>
								</div>
							</div>
							
							<div className="contact-hours-card">
								<h3 className="contact-hours-title">Business Hours</h3>
								<div className="contact-hours-list">
									<div className="contact-hours-item">
										<span className="contact-hours-day">Monday - Friday</span>
										<span className="contact-hours-time">9:00 AM - 6:00 PM MST</span>
									</div>
									<div className="contact-hours-item">
										<span className="contact-hours-day">Saturday</span>
										<span className="contact-hours-time">10:00 AM - 4:00 PM MST</span>
									</div>
									<div className="contact-hours-item">
										<span className="contact-hours-day">Sunday</span>
										<span className="contact-hours-time">Closed</span>
									</div>
								</div>
								<p className="contact-hours-note">
									Our AI agents are available 24/7, but our team responds during business hours.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</motion.div>
	)
}

function AXEAgentPage() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	useSEO({
		title: 'AXE Agent — AI Video Intelligence Agent | AIXcellence',
		description: 'AXE Agent creates professional video content with AI cloning technology. Generate marketing videos, training content, and personalized messages in minutes with voice and video cloning. Multi-language support included.',
		keywords: 'AXE Agent, AI video generation, video cloning, voice cloning, AI spokesperson, automated video production, AI video content',
		url: 'https://aixcellence.co/#axe-agent',
		canonical: 'https://aixcellence.co/#axe-agent',
		image: 'https://aixcellence.co/images/products/ChatGPT%20Image%20Nov%2014,%202025,%2003_08_07%20PM.png'
	})
	
	const features = [
		{
			icon: Video,
			title: 'AI Video Cloning',
			description: 'Create lifelike video content with your cloned spokesperson in minutes. Perfect for marketing videos, training content, and personalized messages.'
		},
		{
			icon: Mic,
			title: 'Voice Cloning Technology',
			description: 'Clone any voice with precision. Generate natural-sounding speech in multiple languages with emotional nuance and professional quality.'
		},
		{
			icon: Film,
			title: 'Automated Video Production',
			description: 'Produce professional videos at scale without cameras, studios, or actors. Generate unlimited content variations instantly.'
		},
		{
			icon: Languages,
			title: 'Multi-Language Support',
			description: 'Create content in any language with authentic accents and natural pronunciation. Reach global audiences effortlessly.'
		},
		{
			icon: PlayCircle,
			title: 'Real-Time Video Generation',
			description: 'Generate video content in real-time for live presentations, webinars, and interactive experiences with your cloned persona.'
		},
		{
			icon: Sparkles,
			title: 'Human Expression & Emotion',
			description: 'Capture authentic facial expressions, gestures, and emotions. Your AI spokesperson looks and sounds completely natural.'
		}
	]
	
	const useCases = [
		'Marketing & Advertising Videos',
		'Training & Educational Content',
		'Personalized Customer Messages',
		'Product Demonstrations',
		'Social Media Content',
		'Corporate Communications'
	]
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Hero Section */}
			<motion.section 
				className="axe-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="axe-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="axe-hero-badge">
							<Video size={20} />
							<span>AXE Agent</span>
						</div>
						<h1 className="axe-hero-title">
							Your AI Video Intelligence Agent
						</h1>
						<p className="axe-hero-subtitle">
							Your business now has a perfect spokesperson. Fully cloned voice and video, human expression, 
							and multi-language support — in minutes. Create, convert, and show effortlessly.
						</p>
						<div className="axe-hero-buttons">
							<motion.a 
								href="#contact" 
								className="btn btn-primary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get Started
								<ArrowRight size={20} />
							</motion.a>
							<motion.a 
								href="#demo" 
								className="btn btn-secondary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Watch Demo
							</motion.a>
						</div>
					</motion.div>
					<motion.div 
						className="axe-hero-visual"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.4 }}
					>
						<div className="axe-visual-card">
							<div className="axe-video-preview">
								<div className="axe-video-header">
									<div className="axe-video-avatar">
										<Video size={24} />
									</div>
									<div>
										<div className="axe-video-name">AXE Agent</div>
										<div className="axe-video-status">Ready to Create</div>
									</div>
								</div>
								<div className="axe-video-content">
									<div className="axe-video-placeholder">
										<PlayCircle size={48} />
										<p>Video Preview</p>
									</div>
									<div className="axe-video-controls">
										<div className="axe-control-item">
											<Video size={16} />
											<span>4K Quality</span>
										</div>
										<div className="axe-control-item">
											<Languages size={16} />
											<span>Multi-Language</span>
										</div>
										<div className="axe-control-item">
											<Mic size={16} />
											<span>Voice Cloned</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.section>
			
			{/* Features Section */}
			<motion.section 
				className="axe-features-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="section-header">
						<h2 className="section-title">Revolutionary Capabilities</h2>
						<p className="section-sub">
							Transform how you create and deliver video content
						</p>
					</div>
					<div className="axe-features-grid">
						{features.map((feature, idx) => {
							const IconComponent = feature.icon
							return (
								<motion.div
									key={idx}
									className="card axe-feature-card"
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									whileHover={{ y: -8 }}
								>
									<div className="axe-feature-icon">
										<IconComponent size={32} />
									</div>
									<h3 className="axe-feature-title">{feature.title}</h3>
									<p className="axe-feature-description">{feature.description}</p>
								</motion.div>
							)
						})}
					</div>
				</div>
			</motion.section>
			
			{/* Use Cases Section */}
			<motion.section 
				className="axe-usecases-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="axe-usecases-content">
						<motion.div
							className="axe-usecases-text"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<h2 className="section-title">Perfect for Every Content Need</h2>
							<p className="section-sub">
								AXE adapts to your content strategy, providing powerful solutions for:
							</p>
							<ul className="axe-usecases-list">
								{useCases.map((useCase, idx) => (
									<motion.li
										key={idx}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.3 + idx * 0.1 }}
									>
										<CheckCircle2 size={20} />
										<span>{useCase}</span>
									</motion.li>
								))}
							</ul>
						</motion.div>
						<motion.div
							className="axe-usecases-visual"
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
						>
							<div className="axe-stats-card">
								<div className="axe-stat-item">
									<div className="axe-stat-value">&lt;5min</div>
									<div className="axe-stat-label">Creation Time</div>
								</div>
								<div className="axe-stat-item">
									<div className="axe-stat-value">4K</div>
									<div className="axe-stat-label">Video Quality</div>
								</div>
								<div className="axe-stat-item">
									<div className="axe-stat-value">50+</div>
									<div className="axe-stat-label">Languages</div>
								</div>
								<div className="axe-stat-item">
									<div className="axe-stat-value">100%</div>
									<div className="axe-stat-label">Authentic</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>
			
			{/* CTA Section */}
			<motion.section 
				className="axe-cta-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="axe-cta-content">
						<h2 className="axe-cta-title">Ready to Transform Your Video Content?</h2>
						<p className="axe-cta-subtitle">
							Join businesses using AXE to create professional video content at scale
						</p>
						<div className="axe-cta-buttons">
							<motion.a 
								href="#contact" 
								className="btn btn-primary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get Early Access
								<ArrowRight size={20} />
							</motion.a>
							<motion.a 
								href="#contact" 
								className="btn btn-secondary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Schedule a Demo
							</motion.a>
						</div>
					</div>
				</div>
			</motion.section>
		</motion.div>
	)
}

function ARAAgentPage() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	
	useSEO({
		title: 'ARA Agent — Customer Intelligence Agent | AIXcellence',
		description: 'ARA Agent is your 24/7 customer intelligence agent that handles support, bookings, and multi-channel communication with human-like empathy. Automate customer interactions, manage appointments, and boost satisfaction.',
		keywords: 'ARA Agent, customer support AI, AI customer service, booking management AI, AI chatbot, customer intelligence, automated support',
		url: 'https://aixcellence.co/#ara-agent',
		canonical: 'https://aixcellence.co/#ara-agent',
		image: 'https://aixcellence.co/images/products/ChatGPT%20Image%20Nov%2012,%202025,%2011_25_49%20AM.png'
	})
	
	const features = [
		{
			icon: MessageSquare,
			title: '24/7 Customer Support',
			description: 'Handle customer inquiries, support tickets, and conversations around the clock with human-like empathy and understanding.'
		},
		{
			icon: Calendar,
			title: 'Smart Booking Management',
			description: 'Automatically schedule appointments, manage calendars, and send reminders to both customers and your team.'
		},
		{
			icon: Phone,
			title: 'Voice & Call Handling',
			description: 'Answer calls, take messages, and handle phone inquiries with natural conversation flow and professional tone.'
		},
		{
			icon: Users,
			title: 'Multi-Channel Communication',
			description: 'Seamlessly manage conversations across chat, email, phone, and social media from a single platform.'
		},
		{
			icon: CheckCircle2,
			title: 'Intelligent Routing',
			description: 'Automatically route complex issues to the right team member while handling routine queries independently.'
		},
		{
			icon: TrendingUp,
			title: 'Performance Analytics',
			description: 'Track response times, satisfaction scores, and conversation insights to continuously improve service quality.'
		}
	]
	
	const capabilities = [
		'Natural language understanding and processing',
		'Context-aware conversation management',
		'Multi-language support',
		'Integration with CRM and business tools',
		'Customizable personality and tone',
		'Real-time learning and adaptation'
	]
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			{/* Hero Section */}
			<motion.section 
				className="ara-hero-section"
				ref={ref}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<motion.div 
						className="ara-hero-content"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.2 }}
					>
						<div className="ara-hero-badge">
							<Bot size={20} />
							<span>ARA Agent</span>
						</div>
						<h1 className="ara-hero-title">
							Your AI Customer Success Agent
						</h1>
						<p className="ara-hero-subtitle">
							ARA handles every customer touchpoint with human-like empathy and precision. 
							From support queries to bookings, ARA keeps your customers engaged, satisfied, and loyal — 24/7.
						</p>
						<div className="ara-hero-buttons">
							<motion.a 
								href="#contact" 
								className="btn btn-primary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get Started
								<ArrowRight size={20} />
							</motion.a>
							<motion.a 
								href="#demo" 
								className="btn btn-secondary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Watch Demo
							</motion.a>
						</div>
					</motion.div>
					<motion.div 
						className="ara-hero-visual"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.4 }}
					>
						<div className="ara-visual-card">
							<div className="ara-chat-interface">
								<div className="ara-chat-header">
									<div className="ara-chat-avatar">
										<Bot size={24} />
									</div>
									<div>
										<div className="ara-chat-name">ARA Agent</div>
										<div className="ara-chat-status">Online</div>
									</div>
								</div>
								<div className="ara-chat-messages">
									<div className="ara-message ara-message-user">
										<p>I need help with my booking</p>
									</div>
									<div className="ara-message ara-message-agent">
										<p>I'd be happy to help! Can you share your booking reference number?</p>
									</div>
									<div className="ara-message ara-message-user">
										<p>It's #BK-12345</p>
									</div>
									<div className="ara-message ara-message-agent">
										<p>Perfect! I found your booking. How can I assist you today?</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.section>
			
			{/* Features Section */}
			<motion.section 
				className="ara-features-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="section-header">
						<h2 className="section-title">Powerful Capabilities</h2>
						<p className="section-sub">
							Everything you need to deliver exceptional customer experiences
						</p>
					</div>
					<div className="ara-features-grid">
						{features.map((feature, idx) => {
							const IconComponent = feature.icon
							return (
								<motion.div
									key={idx}
									className="card ara-feature-card"
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									whileHover={{ y: -8 }}
								>
									<div className="ara-feature-icon">
										<IconComponent size={32} />
									</div>
									<h3 className="ara-feature-title">{feature.title}</h3>
									<p className="ara-feature-description">{feature.description}</p>
								</motion.div>
							)
						})}
					</div>
				</div>
			</motion.section>
			
			{/* Use Cases Section */}
			<motion.section 
				className="ara-usecases-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="ara-usecases-content">
						<motion.div
							className="ara-usecases-text"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<h2 className="section-title">Perfect for Every Business</h2>
							<p className="section-sub">
								ARA adapts to your industry and business needs, providing tailored solutions for:
							</p>
							<ul className="ara-usecases-list">
								{[
									'E-commerce & Retail',
									'Healthcare & Medical',
									'Real Estate',
									'Professional Services',
									'Hospitality & Travel',
									'Education & Training'
								].map((useCase, idx) => (
									<motion.li
										key={idx}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.3 + idx * 0.1 }}
									>
										<CheckCircle2 size={20} />
										<span>{useCase}</span>
									</motion.li>
								))}
							</ul>
						</motion.div>
						<motion.div
							className="ara-usecases-visual"
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
						>
							<div className="ara-stats-card">
								<div className="ara-stat-item">
									<div className="ara-stat-value">99.9%</div>
									<div className="ara-stat-label">Uptime</div>
								</div>
								<div className="ara-stat-item">
									<div className="ara-stat-value">24/7</div>
									<div className="ara-stat-label">Availability</div>
								</div>
								<div className="ara-stat-item">
									<div className="ara-stat-value">&lt;2s</div>
									<div className="ara-stat-label">Response Time</div>
								</div>
								<div className="ara-stat-item">
									<div className="ara-stat-value">95%+</div>
									<div className="ara-stat-label">Satisfaction</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>
			
			{/* CTA Section */}
			<motion.section 
				className="ara-cta-section"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			>
				<div className="container">
					<div className="ara-cta-content">
						<h2 className="ara-cta-title">Ready to Transform Your Customer Experience?</h2>
						<p className="ara-cta-subtitle">
							Join thousands of businesses using ARA to deliver exceptional customer service
						</p>
						<div className="ara-cta-buttons">
							<motion.a 
								href="#contact" 
								className="btn btn-primary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get Early Access
								<ArrowRight size={20} />
							</motion.a>
							<motion.a 
								href="#contact" 
								className="btn btn-secondary"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Schedule a Demo
							</motion.a>
						</div>
					</div>
				</div>
			</motion.section>
		</motion.div>
	)
}

export default function App() {
	const [currentPage, setCurrentPage] = useState(() => {
		const hash = window.location.hash
		if (hash === '#ara-agent') return 'ara-agent'
		if (hash === '#axe-agent') return 'axe-agent'
		if (hash === '#contact') return 'contact'
		if (hash === '#custom-services') return 'custom-services'
		if (hash.match(/^#news-\d+$/)) return 'news-post'
		if (hash === '#news') return 'news'
		if (hash.match(/^#blog-\d+$/)) return 'blog-post'
		if (hash === '#blog') return 'blog'
		if (hash.match(/^#case-\d+$/)) return 'case-study'
		if (hash === '#cases' || hash === '#case-studies') return 'case-studies'
		return 'home'
	})
	const [isImagesLoading, setIsImagesLoading] = useState(false)
	
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash
			if (hash === '#ara-agent') setCurrentPage('ara-agent')
			else if (hash === '#axe-agent') setCurrentPage('axe-agent')
			else if (hash === '#contact') setCurrentPage('contact')
			else if (hash === '#custom-services') setCurrentPage('custom-services')
			else if (hash.match(/^#news-\d+$/)) setCurrentPage('news-post')
			else if (hash === '#news') setCurrentPage('news')
			else if (hash.match(/^#blog-\d+$/)) setCurrentPage('blog-post')
			else if (hash === '#blog') setCurrentPage('blog')
			else if (hash.match(/^#case-\d+$/)) setCurrentPage('case-study')
			else if (hash === '#cases' || hash === '#case-studies') setCurrentPage('case-studies')
			else setCurrentPage('home')
			
			// Scroll to top when navigating to a new page
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
		handleHashChange()
		window.addEventListener('hashchange', handleHashChange)
		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])
	
	// Handle image loading for pages with external images
	useEffect(() => {
		const pagesWithExternalImages = ['blog', 'blog-post', 'news', 'news-post', 'case-studies', 'case-study']
		
		if (!pagesWithExternalImages.includes(currentPage)) {
			setIsImagesLoading(false)
			return
		}
		
		setIsImagesLoading(true)
		
		// Wait for DOM to update, then check for external images
		const checkImages = () => {
			// Use requestAnimationFrame to ensure DOM is updated
			requestAnimationFrame(() => {
				setTimeout(() => {
					const images = document.querySelectorAll('img[src^="https://images.unsplash.com"]')
					const totalImages = images.length
					
					if (totalImages === 0) {
						// Check again after a short delay in case images are added dynamically
						setTimeout(() => {
							const retryImages = document.querySelectorAll('img[src^="https://images.unsplash.com"]')
							if (retryImages.length === 0) {
								setIsImagesLoading(false)
							} else {
								// Process the images found on retry
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
			
			const handleImageLoad = (image: HTMLImageElement) => {
				if (processedImages.has(image)) return
				processedImages.add(image)
				loadedCount++
				if (loadedCount + errorCount === totalImages) {
					setTimeout(() => setIsImagesLoading(false), 300)
				}
			}
			
			const handleImageError = (image: HTMLImageElement) => {
				if (processedImages.has(image)) return
				processedImages.add(image)
				errorCount++
				if (loadedCount + errorCount === totalImages) {
					setTimeout(() => setIsImagesLoading(false), 300)
				}
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
			
			// If all images are already loaded
			if (loadedCount === totalImages) {
				setTimeout(() => setIsImagesLoading(false), 300)
			}
		}
		
		checkImages()
		
		// Fallback: hide loading after max time (5 seconds)
		const timeout = setTimeout(() => {
			setIsImagesLoading(false)
		}, 5000)
		
		return () => {
			clearTimeout(timeout)
		}
	}, [currentPage])
	
	return (
		<>
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
			{currentPage === 'ara-agent' ? (
				<ARAAgentPage />
			) : currentPage === 'axe-agent' ? (
				<AXEAgentPage />
			) : currentPage === 'contact' ? (
				<ContactPage />
			) : currentPage === 'custom-services' ? (
				<CustomServicesPage />
			) : currentPage === 'news-post' ? (
				<NewsroomPostPage />
			) : currentPage === 'news' ? (
				<NewsroomPage />
			) : currentPage === 'blog-post' ? (
				<BlogPostPage />
			) : currentPage === 'blog' ? (
				<BlogPage />
			) : currentPage === 'case-study' ? (
				<CaseStudyPage />
			) : currentPage === 'case-studies' ? (
				<CaseStudiesPage />
			) : (
				<>
					<Hero />
					<AIX1Section />
					<FutureColleagues />
					<AgentFeaturesCard />
					<AdvancedTechnology />
					<ProvenResults />
					<OurMission />
					<Testimonials />
					<FAQ />
					<CTASection />
				</>
			)}
			<Footer />
			<PrivacyPolicy />
			<TermsOfService />
			<Security />
			<SpeedInsights />
		</>
	)
}
