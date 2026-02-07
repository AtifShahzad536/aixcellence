import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { CLIENT_TESTIMONIALS_DATA } from '../../constants/landing'

export function ClientTestimonials() {
    const ref = useRef(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const clientTestimonials = CLIENT_TESTIMONIALS_DATA

    const totalTestimonials = clientTestimonials.length

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalTestimonials)
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [isPaused, totalTestimonials])

    // Navigation functions
    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalTestimonials)
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 10000)
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials)
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 10000)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 10000)
    }

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const minSwipeDistance = 50

        if (distance > minSwipeDistance) {
            goToNext()
        } else if (distance < -minSwipeDistance) {
            goToPrevious()
        }

        setTouchStart(0)
        setTouchEnd(0)
    }

    return (
        <Section
            className="section client-testimonials-section"
            id="client-testimonials"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="section-header">
                <motion.div
                    className="eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Star size={16} />
                    <span>Client Success Stories</span>
                </motion.div>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    What Our Clients Say
                </motion.h2>
                <motion.p
                    className="section-sub"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Real feedback from businesses that have transformed their operations with AIXcellence
                </motion.p>
            </div>

            <div className="testimonials-slider-wrapper">
                <div
                    className="testimonials-slider-track"
                    ref={carouselRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="testimonials-grid-view">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {[0, 1, 2].map((offset) => {
                                const itemIndex = (currentIndex + offset) % totalTestimonials
                                const testimonial = clientTestimonials[itemIndex]
                                return (
                                    <motion.div
                                        key={`${testimonial.name}-${itemIndex}`}
                                        className="testimonial-slide-card"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <div className="testimonial-slide-content">
                                            <div className="testimonial-slide-header">
                                                <div className="testimonial-slide-rating">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} size={20} fill="var(--aix-cyan)" color="var(--aix-cyan)" />
                                                    ))}
                                                </div>
                                                <div className="testimonial-slide-quote-icon">
                                                    <MessageSquare size={32} style={{ color: 'var(--aix-cyan)' }} />
                                                </div>
                                            </div>

                                            <p className="testimonial-slide-quote">{testimonial.quote}</p>

                                            <div className="testimonial-slide-author">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="testimonial-slide-avatar"
                                                    loading="lazy"
                                                />
                                                <div className="testimonial-slide-info">
                                                    <h4 className="testimonial-slide-name">{testimonial.name}</h4>
                                                    <p className="testimonial-slide-role">{testimonial.role}</p>
                                                    <p className="testimonial-slide-company">{testimonial.company}</p>
                                                    <span className="testimonial-slide-industry">{testimonial.industry}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    className="slider-nav-btn slider-nav-prev"
                    onClick={goToPrevious}
                    aria-label="Previous testimonial"
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    className="slider-nav-btn slider-nav-next"
                    onClick={goToNext}
                    aria-label="Next testimonial"
                >
                    <ArrowRight size={24} />
                </button>

                {/* Pagination Dots */}
                <div className="slider-pagination">
                    {clientTestimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}
