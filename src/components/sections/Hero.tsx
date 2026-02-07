import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { useSEO } from '../../hooks/useSEO'
import { Link } from 'react-router-dom'
import { HERO_DATA } from '../../constants/landing'

export function Hero() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useSEO({
        title: 'AIXcellence',
        description: 'Transform your business with AIXcellence intelligent automation platform. Our advanced AI solutions handle 24/7 customer support and bookings, and create professional video content with AI cloning. Enterprise-grade AI automation solutions.',
        url: 'https://aixcellence.co/',
        canonical: 'https://aixcellence.co/'
    })

    // Generate Bento grid cells
    const bentoCells = Array.from({ length: 48 }, (_, i) => i)

    const { badge, headline, gradientText, subheadline, buttons, trustIndicators } = HERO_DATA

    return (
        <motion.section
            className="hero hero-new"
            id="platform"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
        >
            {/* Bento Grid Background Animation */}
            <div className="hero-bento-grid">
                {bentoCells.map((index) => {
                    const row = Math.floor(index / 8)
                    const col = index % 8
                    const delay = (row + col) * 0.05
                    const duration = 3 + (index % 3) * 0.5

                    return (
                        <motion.div
                            key={index}
                            className="hero-bento-cell"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: duration,
                                delay: delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                gridRow: row + 1,
                                gridColumn: col + 1,
                            }}
                        />
                    )
                })}
            </div>

            {/* Gradient Orbs for Depth */}
            <div className="hero-gradient-orb hero-gradient-orb-1"></div>
            <div className="hero-gradient-orb hero-gradient-orb-2"></div>
            <div className="hero-gradient-orb hero-gradient-orb-3"></div>

            {/* Overlay Gradient */}
            <div className="hero-overlay-gradient"></div>

            <div className="container hero-container-new">
                <div className="hero-content-new">
                    {/* Badge */}
                    <motion.div
                        className="hero-badge-new"
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <Sparkles size={14} />
                        <span>{badge}</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="hero-headline-new"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                        {headline}{" "}
                        <span className="hero-gradient-text-new">{gradientText}</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className="hero-subheadline-new"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {subheadline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero-buttons-new"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 }}
                    >
                        {buttons.map((button, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to={button.href}
                                    className={button.variant === 'primary' ? 'btn btn-hero-primary-new' : 'btn btn-hero-secondary-new'}
                                >
                                    {button.text}
                                    {button.icon && <ArrowRight size={20} style={{ marginLeft: '10px' }} />}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="hero-trust-indicators-new"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.9 }}
                    >
                        {trustIndicators.map((indicator, index) => (
                            <div key={index} className="hero-trust-item-new">
                                <div className={`hero-trust-dot ${indicator.dotColor}`}></div>
                                <span>{indicator.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
