import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '../ui/Section'
import { INDUSTRIES_DATA } from '../../constants/landing'

export function Industries() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const industries = INDUSTRIES_DATA

    return (
        <Section
            className="section industries-section"
            id="solutions"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <div className="section-header flex flex-col items-start md:items-center text-left md:text-center">
                    <motion.div
                        className="eyebrow"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <Building2 size={16} />
                        <span>Industry Solutions</span>
                    </motion.div>
                    <motion.h2
                        className="section-title text-3xl md:text-4xl lg:text-5xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        Industries We <span style={{ background: 'linear-gradient(135deg, #0A1A2F 0%, #18CBBE 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Transformed</span> with Solutions
                    </motion.h2>
                    <motion.p
                        className="section-sub max-w-2xl !mx-0 md:!mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        Discover how we've helped businesses across diverse industries leverage AI to drive growth and efficiency.
                    </motion.p>
                </div>
            </div>

            {/* Industries Grid */}
            <div className="industries-grid-new">
                {industries.map((industry, idx) => {
                    const IconComponent = industry.icon
                    return (
                        <motion.div
                            key={idx}
                            className="industry-card-new"
                            style={{ backgroundImage: `url(${industry.image})` }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8, scale: 1.02, boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)' }}
                        >
                            <div className="industry-card-overlay-bg" />

                            <div className="industry-card-icon-wrapper">
                                <IconComponent size={28} style={{ color: industry.color }} />
                            </div>

                            <div className="industry-card-body">
                                <h3 className="industry-card-title-new">{industry.name}</h3>
                                <p className="industry-card-description">{industry.description}</p>

                                <div className="industry-card-solutions-list">
                                    {industry.solutions.slice(0, 3).map((solution, sidx) => (
                                        <div key={sidx} className="industry-solution-item">
                                            <CheckCircle2 size={14} style={{ color: industry.color }} />
                                            <span>{solution}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/#solutions" className="industry-card-cta">
                                    Read More
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    )
}
