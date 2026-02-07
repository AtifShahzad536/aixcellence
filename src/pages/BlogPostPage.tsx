import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, Twitter, Linkedin, Share2, ArrowRight, User } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { blogPostsData } from '../data/blogPosts'

export const BlogPostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const postId = id ? parseInt(id, 10) : null
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const post = blogPostsData.find(p => p.id === postId)

    if (!postId || !post) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                <p>Blog post not found. <Link to="/blog">Return to Blog</Link></p>
            </div>
        )
    }

    // SEO for blog post
    useSEO({
        title: `${post.title} | AIXcellence Blog`,
        description: post.excerpt,
        keywords: `AI automation blog, ${post.category}, ${post.title}, AI best practices`,
        url: `https://aixcellence.co/blog/${postId}`,
        canonical: `https://aixcellence.co/blog/${postId}`,
        image: post.image,
        type: 'article',
        publishedTime: new Date(post.date).toISOString(),
        author: post.author
    })

    const fullContent: Record<number, string[]> = {
        1: [
            'The landscape of business automation is undergoing a seismic shift. While we\'ve become accustomed to AI agents that process text and data, the next evolution has arrived: multimodal AI. These advanced systems don\'t just read and write; they can see, hear, and respond through multiple channels simultaneously, creating a level of automation that was previously science fiction.',
            'Multimodal AI represents a fundamental change in how AI models process information. Traditional models are often "modal-specific"—they might be excellent at processing text or images, but they struggle to combine these inputs naturally. Modern multimodal systems, however, are built from the ground up to understand information across different formats, much like the human brain does.',
            'For businesses, this translates to unprecedented opportunities for customer engagement. Imagine an AI agent that can lead a customer through a complex software setup via video call, seeing exactly what the customer sees on their screen, hearing their questions, and providing visual and verbal guidance in real-time. This isn\'t just customer support; it\'s a collaborative experience.',
            'In the realm of e-commerce, multimodal agents are revolutionizing the shopping experience. Customers can now show an agent a photo of an item they like, and the agent can identify the product, find similar items, explain features through voice or video, and even help complete the purchase—all while maintaining a natural, multi-channel conversation.',
            'The internal implications for enterprise automation are equally profound. Multimodal agents can participate in video meetings, taking comprehensive notes, identifying action items, and providing real-time information by analyzing both verbal discussions and visual presentations. They become true digital teammates, capable of contributing to collaborative environments in ways that text-only agents never could.',
            'Security and privacy are, of course, paramount when dealing with multimodal data. The processing of voice and video requires robust encryption and strict compliance measures. At AIXcellence, we\'ve built our multimodal platform with enterprise-grade security at its core, ensuring that all interactions are protected and meet the highest international standards.',
            'As we look toward the future, the boundaries of multimodal AI will continue to expand. We\'re already seeing early developments in agents that can understand emotional cues from voice and facial expressions, allowing for more empathetic and effective interactions. This level of emotional intelligence will be a key differentiator for brands in the years to come.',
            'The transition to multimodal automation requires a strategic approach. It\'s not just about adding voice or video to existing processes; it\'s about reimagining how those processes can be transformed through multi-channel interaction. Businesses that embrace this evolution early will be best positioned to lead in the age of intelligent automation.',
            'We\'re only beginning to scratch the surface of what\'s possible with multimodal AI. As the technology continues to mature, we can expect to see even more innovative applications across healthcare, education, finance, and beyond. The future of business automation isn\'t just intelligent—it\'s multimodal.',
            'At AIXcellence, we\'re proud to be at the forefront of this revolution. Our next-generation AI platform is designed specifically to help enterprises harness the power of multimodal automation, creating more natural, effective, and human-centric experiences for their customers and employees alike.'
        ],
        2: [
            'Deploying AI solutions used to be a months-long process involving significant development resources and complex implementation strategies. Not anymore. We\'re excited to introduce the AI Agent Marketplace, a revolutionary platform that makes advanced AI automation accessible to businesses of all sizes in minutes.',
            'The marketplace is built on a simple principle: businesses shouldn\'t have to reinvent the wheel for every automation project. By providing pre-configured, industry-specific AI agents, we\'re allowing organizations to leverage proven solutions that are already optimized for their specific needs.',
            'Our current marketplace features over 50 specialized agents covering a wide range of industries including healthcare, finance, retail, legal, and education. Each agent comes pre-equipped with industry-specific knowledge, standard operating procedures, and common workflows, allowing for immediate deployment.',
            'For a healthcare provider, this might mean deploying a patient scheduling agent that already understands medical terminology and HIPAA compliance requirements. For a retail business, it could mean launching a customer support agent that already knows how to handle returns, order tracking, and product recommendations.',
            'The beauty of the marketplace lies in its balance of standardization and customization. While the agents come pre-configured with industry best practices, they are also highly customizable. Businesses can easily adjust their agent\'s voice, integrate it with their existing systems, and refine its knowledge base to match their specific requirements.',
            'One of the most significant benefits for our customers has been the dramatic reduction in time-to-value. Projects that previously would have taken six months can now be live in six days. This agility allows businesses to respond faster to market changes and realize the benefits of AI automation much sooner.',
            'Integration is another key focus of the marketplace. Each agent is designed to work seamlessly with popular business tools and platforms. Whether you\'re using a specific CRM, a specialized healthcare platform, or a custom-built internal system, our agents can be connected with minimal effort.',
            'We\'re also committed to the continuous evolution of our marketplace. New agents and updates are added regularly based on customer feedback and emerging industry trends. This ensured that our users always have access to the latest and most effective AI automation solutions.',
            'As we scale the marketplace, we\'re also opening it up to curated partners through our Global Partner Program. This will allow for an even wider range of specialized solutions, further expanding the possibilities for our customers.',
            'The AI Agent Marketplace is more than just a store; it\'s a catalyst for business transformation. By removing the barriers to AI adoption, we\'re empowering every organization to achieve excellence through automation. The future of AI is here, and it\'s ready for immediate deployment.'
        ],
        3: [
            'The promise of AI automation is often tempered by the perceived technical complexity of building and deploying it. Our mission at AIXcellence has always been to simplify this process, and today we\'re taking our biggest step yet with the No-Code AI Agent Builder.',
            'No-code technology is about empowerment. It\'s about giving the people who understand the business challenges—product managers, customer success leads, operational heads—the tools to build the solutions themselves, without needing to write a single line of code.',
            'The heart of our No-Code Builder is a visual interface that allows you to map out an agent\'s intelligence through a series of logical steps. It\'s as intuitive as building a flowchart or a presentation. You can define triggers, set up decision-making paths, and configure how the agent interacts with different inputs.',
            'Customization is where the builder truly shines. You can easily train your agent on your specific company documents, product manuals, and FAQ pages simply by uploading them. The agent then uses this information to provide accurate, context-aware responses to your customers.',
            'The builder also makes integration surprisingly simple. Through a series of visual connectors, you can link your AI agent to your CRM, project management tools, or e-commerce platform. This allows the agent to not just provide information, but to actually perform tasks like updating records or processing orders.',
            'Testing is built directly into the builder experience. You can interact with your agent in a sandbox environment, seeing exactly how it responds to different scenarios. This immediate feedback loop allows for rapid iteration and ensures that your agent is perfectly tuned before it goes live.',
            'Security and compliance are never compromised. Even though it\'s a no-code environment, the underlying infrastructure is built to enterprise standards. All agents created through the builder benefit from our ISO 27001 and SOC 2 Type II certifications, ensuring your data is always protected.',
            'The result of this no-code approach is a significant increase in innovation across organizations. When the barriers to building are removed, more people can contribute ideas and create solutions. We\'ve seen our customers use the builder to create everything from simple internal information bots to complex, customer-facing support systems.',
            'Education and support are key to successful no-code adoption. We provide a library of templates, video tutorials, and best-practice guides to help our users get started. Our community of builders is also a great place to share ideas and learn from others.',
            'The No-Code AI Agent Builder is redefining what\'s possible in the world of automation. By putting the power of AI into the hands of everyone, we\'re accelerating the journey toward business excellence. The only limit to what you can build is your imagination.'
        ]
    }

    const content = fullContent[postId] || []
    const relatedPosts = blogPostsData.filter(item => item.id !== postId && item.category === post.category).slice(0, 3)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Navigation */}
            <motion.section
                className="blogpost-nav-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container">
                    <Link
                        to="/blog"
                        className="blogpost-back-link"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>
                </div>
            </motion.section>

            {/* Hero Section */}
            <motion.section
                className="blogpost-hero-section"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="blogpost-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="blogpost-meta">
                            <span className="blogpost-date">{post.date}</span>
                            <span className="blogpost-category">{post.category.replace('-', ' ')}</span>
                            <span className="blogpost-read-time">{post.readTime}</span>
                        </div>
                        <h1 className="blogpost-title">{post.title}</h1>
                        <div className="blogpost-author">
                            <div className="author-avatar">
                                <User size={24} />
                            </div>
                            <div className="author-details">
                                <div className="author-name">{post.author}</div>
                                <div className="author-role">{post.authorRole}</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="blogpost-featured-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <img src={post.image} alt={post.title} />
                    </motion.div>
                </div>
            </motion.section>

            {/* Article Content */}
            <motion.section
                className="blogpost-content-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="blogpost-content-wrapper">
                        <article className="blogpost-article">
                            {content.map((paragraph, idx) => (
                                <motion.p
                                    key={idx}
                                    className="blogpost-paragraph"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </article>

                        <aside className="blogpost-sidebar">
                            <div className="blogpost-share-card">
                                <h4 className="blogpost-share-title">Share This Article</h4>
                                <div className="blogpost-share-links">
                                    <motion.a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                                        className="blogpost-share-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Twitter size={20} />
                                    </motion.a>
                                    <motion.a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                        className="blogpost-share-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin size={20} />
                                    </motion.a>
                                    <motion.button
                                        className="blogpost-share-link"
                                        onClick={() => {
                                            navigator.clipboard.writeText(window.location.href)
                                            alert('Link copied to clipboard!')
                                        }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Share2 size={20} />
                                    </motion.button>
                                </div>
                            </div>

                            {relatedPosts.length > 0 && (
                                <div className="blogpost-related-card">
                                    <h4 className="blogpost-related-title">Related Posts</h4>
                                    <div className="blogpost-related-list">
                                        {relatedPosts.map((relatedPost) => (
                                            <Link
                                                key={relatedPost.id}
                                                to={`/blog/${relatedPost.id}`}
                                                className="blogpost-related-item"
                                            >
                                                <img src={relatedPost.image} alt={relatedPost.title} />
                                                <div className="blogpost-related-content">
                                                    <h5 className="blogpost-related-item-title">{relatedPost.title}</h5>
                                                    <span className="blogpost-related-date">{relatedPost.date}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="blogpost-cta-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="blogpost-cta-content">
                        <h2 className="blogpost-cta-title">Want More Insights?</h2>
                        <p className="blogpost-cta-subtitle">
                            Join 10,000+ business leaders who receive our weekly insights on AI automation and best practices.
                        </p>
                        <Link
                            to="/contact"
                            className="btn btn-primary"
                        >
                            Subscribe to Newsletter
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}

export default BlogPostPage
