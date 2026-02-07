import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '../ui/Section'
import { SERVICES_OVERVIEW_DATA } from '../../constants/landing'

export function ServicesOverview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [selectedService, setSelectedService] = useState(0)
    const [ripple, setRipple] = useState<{ x: number; y: number; key: number; serviceIndex: number } | null>(null)
    const rippleKeyRef = useRef(0)

    const services = SERVICES_OVERVIEW_DATA

    const handleServiceClick = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        rippleKeyRef.current += 1
        setRipple({ x, y, key: rippleKeyRef.current, serviceIndex: index })
        setSelectedService(index)
        // Clear ripple after animation
        setTimeout(() => setRipple(null), 600)
    }

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setSelectedService(index)
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault()
            setSelectedService((prev) => (prev + 1) % services.length)
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault()
            setSelectedService((prev) => (prev - 1 + services.length) % services.length)
        }
    }

    const currentService = services[selectedService]
    const IconComponent = currentService.icon

    return (
        <Section
            className="section services-overview-interactive"
            id="services-overview"
            ref={ref}
            style={{ background: 'var(--off-white)', padding: '80px 0' }}
        >
            <div className="section-header">
                <motion.div
                    className="eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <Sparkles size={16} />
                    <span>Explore Our Expertise</span>
                </motion.div>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    Comprehensive <span style={{ background: 'linear-gradient(135deg, #0A1A2F 0%, #18CBBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI Solutions</span> for Your Business
                </motion.h2>
                <motion.p
                    className="section-sub"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    From AI development to mobile apps, we deliver end-to-end solutions that transform your business operations and drive growth.
                </motion.p>
            </div>

            {/* Interactive Services Container */}
            <motion.div
                className="services-interactive-container"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {/* Service Buttons */}
                <div
                    className="services-buttons-wrapper"
                    role="tablist"
                    aria-label="Service selection"
                >
                    {services.map((service, idx) => {
                        const ServiceIcon = service.icon
                        const isSelected = selectedService === idx
                        return (
                            <motion.button
                                key={idx}
                                role="tab"
                                aria-selected={isSelected}
                                aria-controls={`service-panel-${idx}`}
                                id={`service-tab-${idx}`}
                                tabIndex={isSelected ? 0 : -1}
                                className={`service-button ${isSelected ? 'active' : ''}`}
                                onClick={(e) => handleServiceClick(idx, e)}
                                onKeyDown={(e) => handleKeyDown(idx, e)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.02, x: 4, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Ripple Effect */}
                                {ripple && ripple.serviceIndex === idx && (
                                    <motion.span
                                        key={ripple.key}
                                        className="ripple-effect"
                                        initial={{
                                            scale: 0,
                                            opacity: 0.6
                                        }}
                                        animate={{
                                            scale: 4,
                                            opacity: 0
                                        }}
                                        transition={{ duration: 0.6 }}
                                        style={{
                                            position: 'absolute',
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            background: service.color,
                                            pointerEvents: 'none',
                                            left: ripple.x,
                                            top: ripple.y,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    />
                                )}

                                <div className="service-button-content">
                                    <div
                                        className="service-button-icon"
                                        style={{
                                            background: isSelected
                                                ? `linear-gradient(135deg, ${service.color}40 0%, ${service.color}20 100%)`
                                                : `linear-gradient(135deg, ${service.color}10 0%, ${service.color}05 100%)`
                                        }}
                                    >
                                        <ServiceIcon
                                            size={24}
                                            style={{
                                                color: isSelected ? service.color : service.color + '80'
                                            }}
                                        />
                                    </div>
                                    <span className="service-button-text">{service.title}</span>
                                </div>

                                {/* Active Indicator */}
                                <motion.div
                                    className="service-button-indicator"
                                    initial={false}
                                    animate={{
                                        scaleX: isSelected ? 1 : 0,
                                        opacity: isSelected ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        background: service.color,
                                        transformOrigin: 'left'
                                    }}
                                />
                            </motion.button>
                        )
                    })}
                </div>

                {/* Dynamic Content Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedService}
                        role="tabpanel"
                        id={`service-panel-${selectedService}`}
                        aria-labelledby={`service-tab-${selectedService}`}
                        className="service-content-panel"
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="service-content-header">
                            <div
                                className="service-content-icon"
                                style={{
                                    background: `linear-gradient(135deg, ${currentService.color}20 0%, ${currentService.color}10 100%)`
                                }}
                            >
                                <IconComponent size={40} style={{ color: currentService.color }} />
                            </div>
                            <div className="service-content-title-wrapper">
                                <h3 className="service-content-title">{currentService.title}</h3>
                                <p className="service-content-description">{currentService.description}</p>
                            </div>
                        </div>

                        <div className="service-content-body">
                            <div className="service-features-section">
                                <h4 className="service-section-title">Key Features</h4>
                                <ul className="service-features-list">
                                    {currentService.features.map((feature, fidx) => (
                                        <motion.li
                                            key={fidx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + fidx * 0.05 }}
                                        >
                                            <CheckCircle2 size={18} style={{ color: currentService.color }} />
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="service-benefits-section">
                                <h4 className="service-section-title">Benefits</h4>
                                <ul className="service-benefits-list">
                                    {currentService.benefits.map((benefit, bidx) => (
                                        <motion.li
                                            key={bidx}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + bidx * 0.05 }}
                                        >
                                            <ArrowRight size={16} style={{ color: currentService.color }} />
                                            <span>{benefit}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="service-content-footer">
                            <Link
                                to={currentService.href}
                                className="service-cta-button"
                                style={{
                                    background: currentService.color,
                                    color: currentService.color === '#0A1A2F' ? '#FFFFFF' : '#0A1A2F',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    fontWeight: 'var(--font-semibold)',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span>Learn More</span>
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </Section>
    )
}
