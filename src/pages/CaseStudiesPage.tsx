import React, { useRef, useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Briefcase, Filter, ArrowRight, LayoutGrid, List, Search } from 'lucide-react'

import { SafeImage } from '../components/ui/SafeImage'
import { CaseCard } from '../components/ui/CaseCard'
import { FilterTabs } from '../components/ui/FilterTabs'
import { useSEO } from '../hooks/useSEO'
import { caseStudiesData } from '../data/caseStudies'
import { Link } from 'react-router-dom'
import { INDUSTRIES } from '../constants/industries'
import { FADE_IN, FADE_IN_UP, TRANSITION_MEDIUM } from '../constants/animations'

const MotionLink = motion(Link)

export const CaseStudiesPage: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [selectedIndustry, setSelectedIndustry] = useState('all')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

    useSEO({
        title: 'Case Studies — Real-World AI Transformation | AIXcellence',
        description: 'Explore our portfolio of successful AI transformation projects across healthcare, finance, retail, and more. See how we help businesses achieve measurable results with custom AI solutions.',
        keywords: 'AI case studies, AI transformation examples, healthcare AI success, fintech AI implementation, retail AI results, logistics optimization',
        url: 'https://aixcellence.co/portfolio',
        canonical: 'https://aixcellence.co/portfolio'
    })

    // Memoize filtered cases to avoid recalculation on every render
    const filteredCases = useMemo(() =>
        selectedIndustry === 'all'
            ? caseStudiesData
            : caseStudiesData.filter(item => item.industry === selectedIndustry),
        [selectedIndustry]
    )

    // Memoize event handlers to prevent recreation
    const handleIndustryChange = useCallback((industryId: string) => {
        setSelectedIndustry(industryId)
    }, [])

    const handleViewModeChange = useCallback((mode: 'grid' | 'list') => {
        setViewMode(mode)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Hero Section */}
            <motion.section
                className="cases-hero-section"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="cases-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="cases-hero-badge">
                            <Briefcase size={20} />
                            <span>Case Studies</span>
                        </div>
                        <h1 className="cases-hero-title">
                            Real-World Impact, <br />
                            <span>Measurable Results</span>
                        </h1>
                        <p className="cases-hero-subtitle">
                            Discover how we've helped leading organizations across industries transform their operations,
                            improve customer experiences, and drive growth with custom AI solutions.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Filter Section */}
            <motion.section
                className="cases-filter-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="cases-filter-bar">
                        <div className="cases-industries">
                            <div className="filter-label">
                                <Filter size={16} />
                                <span>Filter by Industry:</span>
                            </div>
                            <FilterTabs
                                tabs={INDUSTRIES}
                                activeTab={selectedIndustry}
                                onChange={handleIndustryChange}
                                containerClassName="industry-tabs"
                                tabClassName="industry-tab"
                                activeTabClassName="active"
                            />

                        </div>
                        <div className="view-toggle">
                            <button
                                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => handleViewModeChange('grid')}
                                title="Grid View"
                            >
                                <LayoutGrid size={20} />
                            </button>
                            <button
                                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => handleViewModeChange('list')}
                                title="List View"
                            >
                                <List size={20} />
                            </button>
                        </div>

                    </div>
                </div>
            </motion.section>

            {/* Results Grid */}
            <motion.section
                className="cases-grid-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedIndustry}-${viewMode}`}
                            className={`cases-${viewMode}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredCases.map((cs, idx) => (
                                <CaseCard
                                    key={cs.id}
                                    id={cs.id}
                                    image={cs.image}
                                    industry={cs.industry}
                                    company={cs.company}
                                    title={cs.title}
                                    excerpt={cs.excerpt}
                                    results={cs.results}
                                    index={idx}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredCases.length === 0 && (
                        <div className="cases-empty">
                            <Search size={48} />
                            <p>No case studies found for the selected industry.</p>
                            <button onClick={() => handleIndustryChange('all')}>Show All Industries</button>
                        </div>
                    )}
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="cases-cta-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="cases-cta-content">
                        <h2 className="cta-title">Ready to Transform Your Business?</h2>
                        <p className="cta-subtitle">
                            Let's discuss how we can help you achieve similar results with custom AI solutions tailored to your unique needs.
                        </p>
                        <div className="cta-actions">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Schedule a Consultation
                                    <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                            <Link to="/solutions" className="btn btn-secondary">
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default CaseStudiesPage
