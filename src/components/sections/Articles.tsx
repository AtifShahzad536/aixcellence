import React, { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '../ui/Section'
import { blogPostsData } from '../../data/blogPosts'

export function Articles() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    // Memoize article lists
    const { mainArticle, sidebarArticles } = useMemo(() => {
        const featuredArticles = blogPostsData.filter(post => post.featured).slice(0, 1)
        const latestArticles = blogPostsData.filter(post => !post.featured).slice(0, 5)
        const orderedArticles = [...featuredArticles, ...latestArticles].slice(0, 6)

        if (orderedArticles.length === 0) return { mainArticle: null, sidebarArticles: [] }

        const [main, ...rest] = orderedArticles
        return {
            mainArticle: main,
            sidebarArticles: rest.slice(0, 3)
        }
    }, [])

    if (!mainArticle) return null


    const getCategoryLabel = (category: string) => {
        const labels: { [key: string]: string } = {
            'ai-automation': 'AI Automation',
            'product-updates': 'Product Updates',
            'best-practices': 'Best Practices',
            'case-studies': 'Case Studies'
        }
        return labels[category] || category
    }

    return (
        <Section
            className="section articles-section"
            id="articles"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
        >
            <div className="section-header">
                <motion.div
                    className="eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                >
                    <BookOpen size={16} />
                    <span>Our Latest Insights</span>
                </motion.div>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    Insights & Resources
                </motion.h2>
                <motion.p
                    className="section-sub"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                >
                    Discover the latest trends, best practices, and insights on AI automation and business transformation
                </motion.p>
            </div>

            <div className="articles-layout">
                {/* Left: main article */}
                <motion.div
                    className="article-main-card-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    whileHover={{ y: -8, boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)' }}
                >
                    <Link
                        to={`/blog/${mainArticle.id}`}
                        className="article-main-card"
                    >
                        <div className="article-main-image-wrapper">
                            <img
                                src={mainArticle.image}
                                alt={mainArticle.title}
                                className="article-main-image"
                                loading="lazy"
                            />
                            <div className="article-featured-badge">
                                <Star size={14} fill="currentColor" />
                                <span>Featured article</span>
                            </div>
                            <div className="article-category-badge">
                                {getCategoryLabel(mainArticle.category)}
                            </div>
                        </div>

                        <div className="article-main-content">
                            <div className="article-meta">
                                <span className="article-date">{mainArticle.date}</span>
                                <span className="article-read-time">{mainArticle.readTime}</span>
                            </div>

                            <h3 className="article-main-title">{mainArticle.title}</h3>
                            <p className="article-main-excerpt">{mainArticle.excerpt}</p>

                            <div className="article-footer">
                                <div className="article-author">
                                    <div className="article-author-info">
                                        <span className="article-author-name">{mainArticle.author}</span>
                                        <span className="article-author-role">{mainArticle.authorRole}</span>
                                    </div>
                                </div>
                                <ArrowRight size={18} className="article-arrow" />
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Right: sidebar list */}
                <div className="articles-sidebar">
                    <div className="articles-sidebar-header">
                        <span className="articles-sidebar-label">More from our blog</span>
                    </div>
                    <div className="articles-sidebar-list">
                        {sidebarArticles.map((article, idx) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.45 + idx * 0.05, duration: 0.4 }}
                                whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}
                            >
                                <Link
                                    to={`/blog/${article.id}`}
                                    className="articles-sidebar-item"
                                >
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="articles-sidebar-thumbnail"
                                        loading="lazy"
                                    />
                                    <div className="articles-sidebar-body">
                                        <div className="articles-sidebar-meta">
                                            <span className="articles-sidebar-category">
                                                {getCategoryLabel(article.category)}
                                            </span>
                                            <span className="articles-sidebar-date">{article.date}</span>
                                        </div>
                                        <h4 className="articles-sidebar-title">{article.title}</h4>
                                        <p className="articles-sidebar-excerpt">{article.excerpt}</p>
                                        <span className="articles-sidebar-cta">Read more →</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="articles-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/blog" className="btn btn-secondary">
                                View All Articles
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}
