import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Zap, Shield, TrendingUp, Rocket, Users, Clock, Target, Calendar, CheckCircle2, DollarSign, MessageSquare, BarChart3 } from 'lucide-react'
import { Section } from '../ui/Section'
import { WHY_CHOOSE_US_REASONS, WHY_CHOOSE_US_STATS } from '../../constants/landing'

export function WhyChooseUs() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const constraintsRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % WHY_CHOOSE_US_REASONS.length)
        }, 4000) // Change card every 4 seconds

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const handleDragEnd = (_event: any, info: { offset: { x: number } }) => {
        const threshold = 50
        if (info.offset.x > threshold && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            setIsAutoPlaying(false)
        } else if (info.offset.x < -threshold && currentIndex < WHY_CHOOSE_US_REASONS.length - 1) {
            setCurrentIndex(currentIndex + 1)
            setIsAutoPlaying(false)
        }
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const getDragConstraints = () => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth
            return { left: -(WHY_CHOOSE_US_REASONS.length - 1) * width, right: 0 }
        }
        return { left: 0, right: 0 }
    }

    return (
        <Section
            className="section why-choose-us-section"
            id="features"
            ref={ref}
            style={{ background: 'var(--off-white)', padding: '60px 0', position: 'relative' }}
        >
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
            >
                <motion.div
                    className="eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <Award size={16} />
                    <span>Our Core Advantages</span>
                </motion.div>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    Why Businesses Choose <span style={{ background: 'linear-gradient(135deg, #0A1A2F 0%, #18CBBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AIXcellence</span>
                </motion.h2>
                <motion.p
                    className="section-sub"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    Discover the distinct advantages that make us the preferred partner for businesses seeking transformative AI and software solutions.
                </motion.p>
            </motion.div>

            {/* Carousel Container */}
            <motion.div
                className="why-choose-us-carousel-wrapper"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                ref={constraintsRef}
            >
                <motion.div
                    ref={containerRef}
                    className="why-choose-us-carousel-container"
                    drag="x"
                    dragConstraints={getDragConstraints()}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    animate={{ x: `calc(50% - 160px - ${currentIndex * 352}px)` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {WHY_CHOOSE_US_REASONS.map((reason, idx) => {
                        const IconComponent = reason.icon
                        const isActive = idx === currentIndex
                        return (
                            <motion.div
                                key={idx}
                                className={`why-choose-us-card ${isActive ? 'active' : ''}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 } : {}}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="why-choose-us-card-icon">
                                    <IconComponent size={48} />
                                </div>
                                <h3 className="why-choose-us-card-title">{reason.title}</h3>
                                <p className="why-choose-us-card-description">{reason.description}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Pagination Dots */}
                <div className="why-choose-us-pagination">
                    {WHY_CHOOSE_US_REASONS.map((_, idx) => (
                        <button
                            key={idx}
                            className={`why-choose-us-dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Proven Results Marquee */}
            <motion.div
                className="why-choose-us-results-marquee-wrapper"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                <div className="why-choose-us-results-marquee">
                    <div className="why-choose-us-results-track">
                        {WHY_CHOOSE_US_STATS.flatMap(item => [item, item, item]).map((item: any, idx: number) => {
                            const IconComponent = item.icon
                            if (item.type === 'stat') {
                                return (
                                    <div key={idx} className="why-choose-us-results-card why-choose-us-results-stat-card">
                                        <div className="why-choose-us-results-card-header">
                                            <div>
                                                <p className="why-choose-us-results-card-label">{item.label}</p>
                                                <h3 className="why-choose-us-results-card-value">{item.value}</h3>
                                            </div>
                                            <div className="why-choose-us-results-icon-wrapper" style={{ background: `${item.color}15` }}>
                                                <IconComponent size={24} style={{ color: item.color }} />
                                            </div>
                                        </div>
                                        <div className="why-choose-us-results-card-footer">
                                            <TrendingUp size={16} style={{ color: '#10b981' }} />
                                            <span>{item.footer}</span>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={idx} className="why-choose-us-results-card why-choose-us-results-featured-card" style={{ background: 'var(--gradient-primary)', color: 'var(--white)' }}>
                                        <div className="why-choose-us-results-featured-header">
                                            <IconComponent size={24} />
                                            <h4 className="why-choose-us-results-featured-title">{item.title}</h4>
                                        </div>
                                        <p className="why-choose-us-results-featured-text">{item.text}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </motion.div>
        </Section>
    )
}
