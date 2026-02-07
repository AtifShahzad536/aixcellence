import React, { useRef, useState, useEffect, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Target, Rocket, BarChart, TrendingUp, Users, ArrowRight } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { SafeImage } from '../components/ui/SafeImage'
import { useSEO } from '../hooks/useSEO'
import { caseStudiesData } from '../data/caseStudies'

export const CaseStudyPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const caseId = id ? parseInt(id, 10) : null
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const cs = useMemo(() => caseStudiesData.find(c => c.id === caseId), [caseId])

    if (!caseId || !cs) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                <p>Case study not found. <Link to="/portfolio">Return to Portfolio</Link></p>
            </div>
        )
    }

    // SEO for case study
    useSEO({
        title: `${cs.company} — ${cs.title} | AIXcellence Success Stories`,
        description: cs.excerpt,
        keywords: `AI case study, ${cs.industry} AI, ${cs.company}, AI implementation results`,
        url: `https://aixcellence.co/portfolio/${caseId}`,
        canonical: `https://aixcellence.co/portfolio/${caseId}`,
        image: cs.image,
        type: 'article'
    })

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
                    <Link
                        to="/portfolio"
                        className="casestudy-back-link"
                    >
                        <ArrowLeft size={20} />
                        Back to Portfolio
                    </Link>
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
                    <div className="casestudy-hero-grid">
                        <motion.div
                            className="casestudy-hero-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="casestudy-industry">{cs.industry}</div>
                            <h1 className="casestudy-title">{cs.title}</h1>
                            <p className="casestudy-subtitle">{cs.company}</p>
                        </motion.div>
                        <motion.div
                            className="casestudy-hero-image"
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                        >
                            <SafeImage src={cs.image} alt={cs.title} />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Key Results Section */}
            <motion.section
                className="casestudy-results-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="casestudy-results-grid">
                        {cs.results.map((res, idx) => (
                            <motion.div
                                key={idx}
                                className="result-card-modern"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="result-icon-wrapper">
                                    <res.icon size={24} />
                                </div>
                                <div className="result-value">{res.value}</div>
                                <div className="result-label">{res.label}</div>
                            </motion.div>
                        ))}
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
                    <div className="casestudy-content-grid">
                        <div className="content-main">
                            <motion.div
                                className="content-block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3>The Challenge</h3>
                                <p>
                                    {cs.company} faced significant operational hurdles in their {cs.industry} operations.
                                    Manual processes were leadings to high costs, inconsistent customer experiences,
                                    and limited scalability. They needed a solution that could automate complex workflows
                                    while maintaining high quality and security standards.
                                </p>
                            </motion.div>

                            <motion.div
                                className="content-block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h3>The Solution</h3>
                                <p>
                                    AIXcellence implemented a tailored AI solution built on our proven platform.
                                    This included intelligent agents for {cs.industry}-specific tasks, automated
                                    document processing, and multimodal customer interaction capabilities.
                                    The solution was seamlessly integrated with their existing tech stack.
                                </p>
                                <ul className="solution-features">
                                    <li>
                                        <CheckCircle2 size={18} />
                                        <span>Custom AI Agents for {cs.industry} workflows</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={18} />
                                        <span>Multimodal customer support (Text, Voice, Video)</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={18} />
                                        <span>Secure integration with existing enterprise systems</span>
                                    </li>
                                    <li>
                                        <CheckCircle2 size={18} />
                                        <span>Real-time analytics and performance monitoring</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        <div className="content-sidebar">
                            <motion.div
                                className="sidebar-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="sidebar-icon">
                                    <Target size={24} />
                                </div>
                                <h4>Project Goals</h4>
                                <ul>
                                    <li>Reduce operational costs</li>
                                    <li>Improve customer satisfaction</li>
                                    <li>Enable 24/7 scalability</li>
                                    <li>Enhance data security</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className="sidebar-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="sidebar-icon">
                                    <Rocket size={24} />
                                </div>
                                <h4>Technologies Used</h4>
                                <ul>
                                    <li>Multimodal AI Platform</li>
                                    <li>GPT-4 Turbo Integration</li>
                                    <li>Predictive Analytics</li>
                                    <li>Azure Cloud Infrastructure</li>
                                </ul>
                            </motion.div>
                        </div>
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
                        <h2 className="cta-title">Achieve Similar Results</h2>
                        <p className="cta-subtitle">
                            Discover how our AI solutions can transform your {cs.industry} business operations.
                        </p>
                        <Link
                            to="/contact"
                            className="btn btn-primary"
                        >
                            Start Your Transformation
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default CaseStudyPage
