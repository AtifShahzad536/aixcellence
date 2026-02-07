import React, { useRef, useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { BookOpen, Search, User, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { blogPostsData } from '../data/blogPosts'
import { BLOG_CATEGORIES } from '../constants/blogCategories'
import { FilterTabs } from '../components/ui/FilterTabs'


const MotionLink = motion(Link)

export const BlogPage: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    useSEO({
        title: 'Blog — AI Automation Insights & Best Practices | AIXcellence',
        description: 'Explore the latest trends in AI automation, learn best practices, and discover how businesses are transforming with intelligent agents. Expert insights on customer service, video marketing, and AI implementation.',
        keywords: 'AI automation blog, AI agents blog, customer service AI, video marketing AI, AI best practices, business automation insights',
        url: 'https://aixcellence.co/#blog',
        canonical: 'https://aixcellence.co/#blog'
    })

    // Memoize filtered posts to avoid recalculation on every render
    const filteredPosts = useMemo(() => {
        return blogPostsData.filter(post => {
            const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
            const matchesSearch = searchQuery === '' ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.author.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesCategory && matchesSearch
        })
    }, [selectedCategory, searchQuery])

    // Memoize featured and regular posts
    const featuredPost = useMemo(() => blogPostsData.find(post => post.featured), [])
    const regularPosts = useMemo(() => filteredPosts.filter(post => !post.featured), [filteredPosts])

    // Memoize event handlers
    const handleCategoryChange = useCallback((categoryId: string) => {
        setSelectedCategory(categoryId)
    }, [])

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
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
                className="blog-hero-section"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="blog-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="blog-hero-badge">
                            <BookOpen size={20} />
                            <span>Blog</span>
                        </div>
                        <h1 className="blog-hero-title">
                            Insights, Tips & Stories
                        </h1>
                        <p className="blog-hero-subtitle">
                            Explore the latest trends in AI automation, learn best practices, and discover how businesses are transforming with intelligent agents.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Search and Filter Section */}
            <motion.section
                className="blog-filter-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">

                    <div className="blog-search-wrapper">
                        <div className="blog-search-box">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="blog-search-input"
                            />
                        </div>
                    </div>


                    <FilterTabs
                        tabs={BLOG_CATEGORIES}
                        activeTab={selectedCategory}
                        onChange={handleCategoryChange}
                        containerClassName="blog-filter-tabs"
                        tabClassName="blog-filter-tab"
                        activeTabClassName="active"
                    />


                </div>
            </motion.section>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'all' && searchQuery === '' && (
                <motion.section
                    className="blog-featured-section"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="container">
                        <motion.div
                            className="blog-featured-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="blog-featured-image">
                                <img src={featuredPost.image} alt={featuredPost.title} />
                                <div className="blog-featured-badge">Featured Article</div>
                            </div>
                            <div className="blog-featured-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{featuredPost.date}</span>
                                    <span className="blog-category">{featuredPost.category.replace('-', ' ')}</span>
                                    <span className="blog-read-time">{featuredPost.readTime}</span>
                                </div>
                                <h2 className="blog-featured-title">{featuredPost.title}</h2>
                                <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
                                <div className="blog-author-info">
                                    <div className="blog-author-avatar">
                                        <User size={20} />
                                    </div>
                                    <div className="blog-author-details">
                                        <div className="blog-author-name">{featuredPost.author}</div>
                                        <div className="blog-author-role">{featuredPost.authorRole}</div>
                                    </div>
                                </div>
                                <MotionLink
                                    to={`/blog/${featuredPost.id}`}
                                    className="blog-read-more"
                                    whileHover={{ x: 4 }}
                                >
                                    Read Full Article
                                    <ArrowRight size={16} />
                                </MotionLink>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            )}

            {/* Blog Posts Grid */}
            <motion.section
                className="blog-grid-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedCategory}-${searchQuery}`}
                            className="blog-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {regularPosts.map((post, idx) => (
                                <motion.article
                                    key={post.id}
                                    className="blog-article-card"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="blog-article-image">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                    <div className="blog-article-content">
                                        <div className="blog-meta">
                                            <span className="blog-date">{post.date}</span>
                                            <span className="blog-category">{post.category.replace('-', ' ')}</span>
                                            <span className="blog-read-time">{post.readTime}</span>
                                        </div>
                                        <h3 className="blog-article-title">{post.title}</h3>
                                        <p className="blog-article-excerpt">{post.excerpt}</p>
                                        <div className="blog-author-info">
                                            <div className="blog-author-avatar">
                                                <User size={16} />
                                            </div>
                                            <div className="blog-author-details">
                                                <div className="blog-author-name">{post.author}</div>
                                                <div className="blog-author-role">{post.authorRole}</div>
                                            </div>
                                        </div>
                                        <MotionLink
                                            to={`/blog/${post.id}`}
                                            className="blog-read-more"
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

                    {regularPosts.length === 0 && (
                        <div className="blog-empty-state">
                            <Search size={48} />
                            <p>No articles found matching your search.</p>
                            <button
                                className="blog-clear-search"
                                onClick={() => {
                                    setSearchQuery('')
                                    setSelectedCategory('all')
                                }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </motion.section>
        </motion.div>
    )
}

export default BlogPage
