import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
	X, Layers, Zap, Cpu, Phone, MessageSquare, FileText, TrendingUp, Mic, Video, Lock, BarChart3, Settings, DollarSign,
	Heart, GraduationCap, Car, ShoppingCart, Building2, Award, Newspaper, BookOpen, FileText as CaseStudy, Menu
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { NAVIGATION_DATA } from '../../constants/navigation'
import { DropdownColumn, MobileDropdownColumn } from './DropdownMenu'

function ProductDropdown() {
	return (
		<div className="product-dropdown">
			<div className="product-dropdown-columns">
				<div className="product-column">
					<div className="product-column-title-wrapper">
						<h4 className="product-column-title">Platform</h4>
						<span className="soon-badge">Soon</span>
					</div>
					<Link to="/platform" className="product-item">
						<span className="product-icon">
							<Layers size={18} />
						</span>
						<div>
							<div className="product-name">AIX One Platform</div>
						</div>
					</Link>
				</div>
				<DropdownColumn
					title={NAVIGATION_DATA.services.title}
					items={NAVIGATION_DATA.services.items}
				/>
				<DropdownColumn
					title={NAVIGATION_DATA.features.title}
					items={NAVIGATION_DATA.features.items}
					className="product-column-features"
				/>
			</div>
		</div>
	)
}

function SolutionsDropdown() {
	return (
		<div className="product-dropdown">
			<div className="product-dropdown-columns product-dropdown-columns-solutions">
				<DropdownColumn
					title="Solutions for:"
					items={NAVIGATION_DATA.solutions.industries}
				/>
				<DropdownColumn
					title="Use Cases"
					items={NAVIGATION_DATA.solutions.useCases}
				/>
			</div>
		</div>
	)
}

function ResourcesDropdown() {
	return (
		<div className="product-dropdown">
			<div className="product-dropdown-columns">
				<DropdownColumn
					title="Company"
					items={NAVIGATION_DATA.resources.company}
				/>
				<DropdownColumn
					title="Learn"
					items={NAVIGATION_DATA.resources.learn}
				/>
			</div>
		</div>
	)
}

<div className="product-desc">Success stories and client projects</div>


export function Header() {
	const links = [
		{ label: 'Products', isProduct: true },
		{ label: 'Solutions', isSolutions: true },
		{ label: 'Resources', isResources: true },
		{ label: 'Portfolio', href: '/portfolio' },
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

	// Mobile menu content to be rendered via portal
	const mobileMenuContent = (
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
								<Link to="/" onClick={() => setMobileMenuOpen(false)}>
									<img className="mobile-menu-logo" src="/images/logos/fulllogo_nobuffer.jpg" alt="AIXcellence logo" />
								</Link>
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
										{(item as any).isProduct || (item as any).isSolutions || (item as any).isResources || (item as any).children ? (
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
														<path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
																		<div className="product-column-title-wrapper">
																			<h4 className="mobile-submenu-title">Platform</h4>
																			<span className="soon-badge">Soon</span>
																		</div>
																		<Link to="/platform" className="mobile-submenu-link" onClick={handleMobileLinkClick}>
																			<Layers size={18} />
																			<span>AIX One Platform</span>
																		</Link>
																	</div>
																	<MobileDropdownColumn
																		title={NAVIGATION_DATA.services.title}
																		items={NAVIGATION_DATA.services.items}
																		onLinkClick={handleMobileLinkClick}
																	/>
																	<MobileDropdownColumn
																		title={NAVIGATION_DATA.features.title}
																		items={NAVIGATION_DATA.features.items}
																		onLinkClick={handleMobileLinkClick}
																	/>
																</div>
															)}
															{(item as any).isSolutions && (
																<div className="mobile-submenu-content">
																	<div className="mobile-submenu-columns product-dropdown-columns-solutions">
																		<MobileDropdownColumn
																			title="Solutions for:"
																			items={NAVIGATION_DATA.solutions.industries}
																			onLinkClick={handleMobileLinkClick}
																		/>
																		<MobileDropdownColumn
																			title="Use Cases"
																			items={NAVIGATION_DATA.solutions.useCases}
																			onLinkClick={handleMobileLinkClick}
																		/>
																	</div>
																</div>
															)}
															{(item as any).isResources && (
																<div className="mobile-submenu-content">
																	<MobileDropdownColumn
																		title="Company"
																		items={NAVIGATION_DATA.resources.company}
																		onLinkClick={handleMobileLinkClick}
																	/>
																	<MobileDropdownColumn
																		title="Learn"
																		items={NAVIGATION_DATA.resources.learn}
																		onLinkClick={handleMobileLinkClick}
																	/>
																</div>
															)}

															{(item as any).children && !(item as any).isProduct && !(item as any).isSolutions && !(item as any).isResources && (
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
								<motion.div whileTap={{ scale: 0.95 }}>
									<Link
										to="/login"
										className="btn btn-login btn-mobile"
										onClick={handleMobileLinkClick}
									>
										Login
									</Link>
								</motion.div>
								<motion.div whileTap={{ scale: 0.95 }}>
									<Link
										to="/contact"
										className="btn btn-sales btn-mobile"
										onClick={handleMobileLinkClick}
									>
										<span>Talk to Sales</span>
										<span className="arrow-button">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
									</Link>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)

	return (
		<>
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
							<Link to="/">
								<img className="logo" src="/images/logos/fulllogo_nobuffer.jpg" alt="AIXcellence logo" />
							</Link>
						</motion.div>
						<nav className="nav-center" onMouseLeave={() => setOpen(null)}>
							{links.map((item, idx) => (
								<div key={idx} style={{ position: 'relative' }}>
									<Link
										className={`nav-link ${open === idx ? 'active' : ''}`}
										to={(item as any).href || '#'}
										onMouseEnter={() => ((item as any).children || (item as any).isProduct || (item as any).isSolutions || (item as any).isResources) ? setOpen(idx) : setOpen(null)}
										onClick={(e) => {
											if ((item as any).children || (item as any).isProduct || (item as any).isSolutions || (item as any).isResources) {
												e.preventDefault()
												setOpen(open === idx ? null : idx)
											}
										}}
									>
										{item.label}
										{((item as any).children || (item as any).isProduct || (item as any).isSolutions || (item as any).isResources) && (
											<svg className="chevron-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
												<path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										)}
									</Link>
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
									{(item as any).isSolutions && open === idx && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											className="dropdown-menu product-dropdown-menu"
										>
											<SolutionsDropdown />
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
									{(item as any).children && !(item as any).isProduct && !(item as any).isSolutions && !(item as any).isResources && open === idx && (
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
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link className="btn btn-login" to="/login">
								Login
							</Link>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link className="btn btn-sales" to="/contact">
								<span>Talk to Sales</span>
								<span className="arrow-button">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M6 4L10 8L6 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
							</Link>
						</motion.div>
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
			</motion.header>
			{typeof document !== 'undefined' && createPortal(mobileMenuContent, document.body)}
		</>
	)
}
