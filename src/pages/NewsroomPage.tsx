import React, { useRef, useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Newspaper, ArrowRight, FileText, ExternalLink, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { newsItemsData } from '../data/newsItems'
import { NEWS_CATEGORIES } from '../constants/newsCategories'
import { FilterTabs } from '../components/ui/FilterTabs'

const MotionLink = motion(Link)

export const NewsroomPage: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [selectedCategory, setSelectedCategory] = useState('all')

    useSEO({
        title: 'Newsroom — Latest Updates & Announcements | AIXcellence',
        description: 'Stay updated with the latest news, product updates, partnerships, and announcements from AIXcellence. Get insights into new features, company milestones, and industry developments.',
        keywords: 'AIXcellence news, AI automation updates, product announcements, company news, AI technology updates',
        url: 'https://aixcellence.co/#news',
        canonical: 'https://aixcellence.co/#news'
    })

    // Memoize filtered news to avoid recalculation
    const filteredNews = useMemo(() =>
        selectedCategory === 'all'
            ? newsItemsData
            : newsItemsData.filter(item => item.category === selectedCategory),
        [selectedCategory]
    )

    const featuredNews = useMemo(() => newsItemsData.find(item => item.featured), [])
    const regularNews = useMemo(() => filteredNews.filter(item => !item.featured), [filteredNews])

    // Memoize event handler
    const handleCategoryChange = useCallback((categoryId: string) => {
        setSelectedCategory(categoryId)
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
                className="newsroom-hero-section"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="newsroom-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="newsroom-hero-badge">
                            <Newspaper size={20} />
                            <span>Newsroom</span>
                        </div>
                        <h1 className="newsroom-hero-title">
                            Latest Updates & Announcements
                        </h1>
                        <p className="newsroom-hero-subtitle">
                            Stay informed about product launches, company milestones, partnerships, and the latest innovations in AI automation.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Categories Filter */}
            <motion.section
                className="newsroom-filter-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">


                    <FilterTabs
                        tabs={NEWS_CATEGORIES}
                        activeTab={selectedCategory}
                        onChange={handleCategoryChange}
                        containerClassName="newsroom-filter-tabs"
                        tabClassName="newsroom-filter-tab"
                        activeTabClassName="active"
                    />

                </div>
            </motion.section>

            {/* Featured News */}
            {featuredNews && selectedCategory === 'all' && (
                <motion.section
                    className="newsroom-featured-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container">
                        <motion.div
                            className="newsroom-featured-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="newsroom-featured-image">
                                <img src={featuredNews.image} alt={featuredNews.title} />
                                <div className="newsroom-featured-badge">Featured</div>
                            </div>
                            <div className="newsroom-featured-content">
                                <div className="newsroom-meta">
                                    <span className="newsroom-date">{featuredNews.date}</span>
                                    <span className="newsroom-category">{featuredNews.category}</span>
                                    <span className="newsroom-read-time">{featuredNews.readTime}</span>
                                </div>
                                <h2 className="newsroom-featured-title">{featuredNews.title}</h2>
                                <p className="newsroom-featured-excerpt">{featuredNews.excerpt}</p>
                                <MotionLink
                                    to={`/news/${featuredNews.id}`}
                                    className="newsroom-read-more"
                                    whileHover={{ x: 4 }}
                                >
                                    Read More
                                    <ArrowRight size={16} />
                                </MotionLink>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            )}

            {/* News Grid */}
            <motion.section
                className="newsroom-grid-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            className="newsroom-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {regularNews.map((item, idx) => (
                                <motion.article
                                    key={item.id}
                                    className="newsroom-article-card"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="newsroom-article-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="newsroom-article-content">
                                        <div className="newsroom-meta">
                                            <span className="newsroom-date">{item.date}</span>
                                            <span className="newsroom-category">{item.category}</span>
                                            <span className="newsroom-read-time">{item.readTime}</span>
                                        </div>
                                        <h3 className="newsroom-article-title">{item.title}</h3>
                                        <p className="newsroom-article-excerpt">{item.excerpt}</p>
                                        <MotionLink
                                            to={`/news/${item.id}`}
                                            className="newsroom-read-more"
                                            whileHover={{ x: 4 }}
                                        >
                                            Read More
                                            <ArrowRight size={16} />
                                        </MotionLink>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {regularNews.length === 0 && (
                        <div className="newsroom-empty-state">
                            <Newspaper size={48} />
                            <p>No news found in this category.</p>
                        </div>
                    )}
                </div>
            </motion.section>

            {/* Press Kit Section */}
            <motion.section
                className="newsroom-presskit-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="newsroom-presskit-content">
                        <motion.div
                            className="newsroom-presskit-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="section-title">Press Kit</h2>
                            <p className="section-sub">
                                Access our brand assets, logos, and press materials for media use.
                            </p>
                            <div className="newsroom-presskit-items">
                                <motion.a
                                    href="mailto:press@aixcellence.co?subject=Brand Guidelines Request"
                                    className="newsroom-presskit-item"
                                    whileHover={{ x: 4 }}
                                >
                                    <FileText size={20} />
                                    <span>Brand Guidelines</span>
                                    <ExternalLink size={16} />
                                </motion.a>
                                <motion.a
                                    href="mailto:press@aixcellence.co?subject=Logo Assets Request"
                                    className="newsroom-presskit-item"
                                    whileHover={{ x: 4 }}
                                >
                                    <FileText size={20} />
                                    <span>Logo Assets</span>
                                    <ExternalLink size={16} />
                                </motion.a>
                                <motion.a
                                    href="mailto:press@aixcellence.co?subject=Press Releases Request"
                                    className="newsroom-presskit-item"
                                    whileHover={{ x: 4 }}
                                >
                                    <FileText size={20} />
                                    <span>Press Releases</span>
                                    <ExternalLink size={16} />
                                </motion.a>
                            </div>
                        </motion.div>
                        <motion.div
                            className="newsroom-presskit-contact"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="card newsroom-presskit-card">
                                <h3 className="newsroom-presskit-card-title">Media Inquiries</h3>
                                <p className="newsroom-presskit-card-text">
                                    For press inquiries, interview requests, or media partnerships, please contact our communications team.
                                </p>
                                <motion.a
                                    href="mailto:press@aixcellence.co"
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Mail size={20} />
                                    Contact Press Team
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default NewsroomPage
