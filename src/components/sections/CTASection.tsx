import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '../ui/Section'
import { CTA_SECTION_DATA } from '../../constants/landing'

export function CTASection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const { badge, title, subtitle, buttons, features } = CTA_SECTION_DATA

    return (
        <Section
            className="section cta-section-new"
            id="cta"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
        >
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
                        <span>{badge}</span>
                    </motion.div>

                    <motion.h2
                        className="cta-title-new"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        className="cta-subtitle-new"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        className="cta-buttons-new"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7 }}
                    >
                        {buttons.map((button, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to={button.href}
                                    className={button.variant === 'primary' ? 'btn btn-cta-primary-new' : 'btn btn-cta-secondary-new'}
                                >
                                    {button.text}
                                    {button.variant === 'primary' && (
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="cta-features-new"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        {features.map((feature, index) => (
                            <div key={index} className="cta-feature-item-new">
                                <CheckCircle2 size={16} />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="cta-visual-new">
                    <div className="cta-gradient-orb"></div>
                </div>
            </motion.div>
        </Section>
    )
}
