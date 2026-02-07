import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Cpu, TrendingUp, FileText, Image as ImageIcon, Mic, Zap, Shield, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'

export function AIDevelopmentPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useSEO({
        title: 'AI Development Services — Custom AI Solutions | AIXcellence',
        description: 'Custom AI solutions tailored to your business needs. From intelligent chatbots to predictive analytics, we build AI systems that drive results.',
        keywords: 'AI development, custom AI solutions, AI chatbots, AI automation, machine learning, AI consulting',
        url: 'https://aixcellence.co/#ai-development',
        canonical: 'https://aixcellence.co/#ai-development'
    })

    const services = [
        {
            icon: Bot,
            title: 'AI Chatbots & Assistants',
            description: 'Intelligent conversational AI that understands context, handles multi-turn conversations, and provides personalized customer experiences.',
            features: ['Context-aware conversations', 'Multi-language support', '24/7 availability', 'Natural language understanding', 'Sentiment analysis']
        },
        {
            icon: Cpu,
            title: 'Machine Learning Models',
            description: 'Custom ML models trained on your data to provide predictions, classifications, and insights specific to your business domain.',
            features: ['Predictive analytics', 'Custom model training', 'Data preprocessing', 'Model optimization', 'Continuous learning']
        },
        {
            icon: TrendingUp,
            title: 'Predictive Analytics',
            description: 'Leverage AI to forecast trends, identify opportunities, and make data-driven decisions with advanced predictive models.',
            features: ['Demand forecasting', 'Risk analysis', 'Customer behavior prediction', 'Revenue optimization', 'Trend analysis']
        },
        {
            icon: FileText,
            title: 'Document Intelligence',
            description: 'AI-powered document processing that extracts, analyzes, and understands information from PDFs, documents, and unstructured data.',
            features: ['Document extraction', 'Text summarization', 'Q&A on documents', 'Content classification', 'Data extraction']
        },
        {
            icon: ImageIcon,
            title: 'Computer Vision',
            description: 'Image and video analysis solutions for recognition, classification, object detection, and visual content understanding.',
            features: ['Image recognition', 'Object detection', 'Content moderation', 'Visual search', 'Video analysis']
        },
        {
            icon: Mic,
            title: 'Voice & Audio AI',
            description: 'Speech-to-text, text-to-speech, and voice recognition solutions for voice-enabled applications and audio processing.',
            features: ['Speech recognition', 'Voice synthesis', 'Audio transcription', 'Voice commands', 'Real-time processing']
        }
    ]

    // Note: CaseStudy icon is FileText aliased in imports
    const CaseStudy = BookOpen

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.section
                className="custom-services-hero-section"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="custom-services-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="custom-services-hero-badge">
                            <Bot size={20} />
                            <span>AI Development</span>
                        </div>
                        <h1 className="custom-services-hero-title">
                            Custom AI Solutions That Drive Results
                        </h1>
                        <p className="custom-services-hero-subtitle">
                            From intelligent chatbots to predictive analytics, we build AI systems tailored to your business needs.
                            Leverage cutting-edge AI technology including GPT-4 Turbo, multimodal capabilities, and our proven AI Agent platform
                            to automate processes, gain insights, and transform your operations. Whether you need standard products or custom
                            development, we deliver solutions that scale with your business.
                        </p>
                        <div className="custom-services-hero-buttons">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Get Started
                                    <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                            <Link to="/#services" className="btn btn-secondary">
                                View All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                className="custom-services-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="section-title">Our AI Development Services</h2>
                        <p className="section-sub">
                            Comprehensive AI solutions built with cutting-edge technology. From standard products to custom development,
                            we deliver AI systems that transform your business operations and drive measurable results.
                        </p>
                    </motion.div>

                    <div className="custom-services-grid">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="custom-service-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="custom-service-icon">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="custom-service-title">{service.title}</h3>
                                <p className="custom-service-description">{service.description}</p>
                                <ul className="custom-service-features">
                                    {service.features.map((feature, fidx) => (
                                        <li key={fidx}>
                                            <CheckCircle2 size={16} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Benefits Section - Redesigned */}
            <motion.section
                className="service-benefits-modern-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="section-eyebrow">
                            <Sparkles size={16} />
                            <span>Why Choose Us</span>
                        </div>
                        <h2 className="section-title">Built for Enterprise Success</h2>
                        <p className="section-sub">
                            We combine proven AI technology with custom development expertise to deliver solutions that drive measurable business value.
                        </p>
                    </motion.div>

                    <div className="service-benefits-modern-grid">
                        {[
                            {
                                icon: Zap,
                                title: 'Rapid Deployment',
                                description: 'Get up and running in days, not months. Our AI Agent Marketplace and No-Code Builder enable fast deployment of proven solutions.',
                                color: '#18CBBE'
                            },
                            {
                                icon: Shield,
                                title: 'Enterprise Security',
                                description: 'ISO 27001 and SOC 2 Type II certified. Bank-level encryption and comprehensive compliance built into every solution.',
                                color: '#0A1A2F'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Proven Technology',
                                description: 'Built on AIXcellence\'s battle-tested AI platform, trusted by 5,000+ enterprise customers worldwide.',
                                color: '#18CBBE'
                            },
                            {
                                icon: Cpu,
                                title: 'Cutting-Edge AI',
                                description: 'Access to GPT-4 Turbo, multimodal capabilities, and the latest AI models through our strategic partnerships.',
                                color: '#0A1A2F'
                            }
                        ].map((benefit, idx) => {
                            const BenefitIcon = benefit.icon
                            return (
                                <motion.div
                                    key={idx}
                                    className="service-benefit-modern-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02, boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)' }}
                                >
                                    <div className="service-benefit-modern-icon-wrapper" style={{ background: `${benefit.color}15` }}>
                                        <BenefitIcon size={28} style={{ color: benefit.color }} />
                                    </div>
                                    <h3 className="service-benefit-modern-title">{benefit.title}</h3>
                                    <p className="service-benefit-modern-description">{benefit.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Related Resources Section - Redesigned */}
            <motion.section
                className="service-resources-modern-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="section-eyebrow">
                            <BookOpen size={16} />
                            <span>Resources</span>
                        </div>
                        <h2 className="section-title">Explore Related Content</h2>
                        <p className="section-sub">
                            Discover articles, case studies, and portfolio projects that showcase how AI development transforms businesses
                        </p>
                    </motion.div>

                    <div className="service-resources-modern-grid">
                        {[
                            {
                                title: 'Multimodal AI Agents: The Next Evolution',
                                link: '/blog/1',
                                type: 'article',
                                description: 'Learn how multimodal AI agents combine text, voice, and video for enhanced customer experiences',
                                icon: BookOpen
                            },
                            {
                                title: 'No-Code AI Agent Builder Guide',
                                link: '/blog/3',
                                type: 'article',
                                description: 'Complete guide to building AI agents without coding using our visual builder',
                                icon: BookOpen
                            },
                            {
                                title: 'View Portfolio',
                                link: '/portfolio',
                                type: 'portfolio',
                                description: 'See real-world AI development projects and their measurable business impact',
                                icon: CaseStudy
                            }
                        ].map((item, idx) => {
                            const ItemIcon = item.icon
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                >
                                    <Link
                                        to={item.link}
                                        className="service-resource-modern-card"
                                    >
                                        <div className="service-resource-modern-icon">
                                            <ItemIcon size={24} />
                                        </div>
                                        <div className="service-resource-modern-content">
                                            <div className="service-resource-modern-badge">
                                                {item.type === 'portfolio' ? 'Portfolio' : 'Article'}
                                            </div>
                                            <h4 className="service-resource-modern-title">{item.title}</h4>
                                            <p className="service-resource-modern-description">{item.description}</p>
                                        </div>
                                        <ArrowRight size={18} className="service-resource-modern-arrow" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="custom-services-cta-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="custom-services-cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="cta-title">Ready to Build Your AI Solution?</h2>
                        <p className="cta-subtitle">
                            Let's discuss how AI can transform your business operations. Explore our AI Agent Marketplace or schedule a consultation for custom development.
                        </p>
                        <div className="cta-buttons">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Schedule a Consultation
                                    <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                            <Link to="/#aix-one" className="btn btn-secondary">
                                View AI Agent Marketplace
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    )
}
