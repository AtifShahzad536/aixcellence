import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users } from 'lucide-react'
import { Section } from '../ui/Section'

export function ClientsPartners() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    // IMPORTANT: Replace these placeholder logos with actual client/partner logos to reflect real partnerships.
    const logos = [
        { name: 'TechCorp Solutions', src: '/images/logos/fulllogo_nobuffer.jpg', alt: 'TechCorp Solutions' },
        { name: 'MediCare Plus', src: '/images/logos/fulllogo_nobuffer.jpg', alt: 'MediCare Plus' },
        { name: 'Fashion Forward', src: '/images/logos/fulllogo_nobuffer.jpg', alt: 'Fashion Forward' },
        { name: 'SecureBank Financial', src: '/images/logos/fulllogo_nobuffer.jpg', alt: 'SecureBank Financial' },
        { name: 'EduLearn Academy', src: '/images/logos/fulllogo_nobuffer.jpg', alt: 'EduLearn Academy' },
        { name: 'CloudScale Inc.', src: '/images/logos/fulllogo_nobuffer.jpg', alt: 'CloudScale Inc.' },
        { name: 'MedTech Innovations', src: '/images/logos/fulllogo_nobuffer.jpg', alt: 'MedTech Innovations' },
        { name: 'Global Retail Chain', src: '/images/logos/fulllogo_nobuffer.jpg', alt: 'Global Retail Chain' },
    ]

    // Duplicate logos for seamless infinite scroll (3 sets for smooth loop)
    const duplicatedLogos = [...logos, ...logos, ...logos]

    return (
        <Section
            className="section clients-partners-section"
            id="about"
            ref={ref}
            style={{ background: 'var(--white)', padding: '80px 0', position: 'relative' }}
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
                    <Users size={16} />
                    <span>Our Valued Collaborators</span>
                </motion.div>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    Trusted by Industry Leaders
                </motion.h2>
                <motion.p
                    className="section-sub"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                >
                    Partnering with visionary companies, we empower them to revolutionize their industries through cutting-edge AI automation.
                </motion.p>
            </motion.div>

            {/* Sliding Logo Carousel */}
            <motion.div
                className="clients-partners-carousel-wrapper"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <div className="clients-partners-carousel">
                    <div className="clients-partners-track">
                        {duplicatedLogos.map((logo, idx) => (
                            <motion.div
                                key={`logo-${idx}`}
                                className="clients-partners-logo-item"
                                whileHover={{ scale: 1.05, y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    className="clients-partners-logo-image"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    )
}
