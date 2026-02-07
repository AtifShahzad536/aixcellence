import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Layers, Settings, Zap, Shield, BarChart3, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'

export function AIModelsIntegrationsPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useSEO({
        title: 'AI Models & Integrations — Seamless AI Integration Services | AIXcellence',
        description: 'Seamlessly integrate cutting-edge AI models into your existing systems. We connect the best AI technologies to power your operations.',
        keywords: 'AI integration, AI models, API integration, AI connectors, third-party AI, AI platform integration',
        url: 'https://aixcellence.co/#ai-models-integrations',
        canonical: 'https://aixcellence.co/#ai-models-integrations'
    })

    const services = [
        {
            icon: Cpu,
            title: 'LLM Integration',
            description: 'Integrate large language models (GPT, Claude, Gemini) into your applications for advanced text understanding and generation.',
            features: ['OpenAI GPT integration', 'Anthropic Claude integration', 'Google Gemini integration', 'Custom prompt engineering', 'Model fine-tuning']
        },
        {
            icon: Layers,
            title: 'API Integration',
            description: 'Connect AI services and APIs seamlessly with your existing systems, databases, and applications.',
            features: ['RESTful API integration', 'GraphQL integration', 'Webhook setup', 'Real-time data sync', 'Error handling']
        },
        {
            icon: Settings,
            title: 'Platform Integration',
            description: 'Integrate AI capabilities into your CRM, ERP, and other business platforms for unified workflows.',
            features: ['CRM integration', 'ERP integration', 'E-commerce platforms', 'Marketing tools', 'Analytics platforms']
        },
        {
            icon: Zap,
            title: 'Custom Connectors',
            description: 'Build custom connectors and middleware to bridge your systems with AI services and data sources.',
            features: ['Custom API development', 'Data transformation', 'Protocol conversion', 'Legacy system integration', 'Real-time processing']
        },
        {
            icon: Shield,
            title: 'Security & Compliance',
            description: 'Ensure secure AI integrations with proper authentication, encryption, and compliance with industry standards.',
            features: ['OAuth implementation', 'Data encryption', 'GDPR compliance', 'SOC 2 compliance', 'Audit logging']
        },
        {
            icon: BarChart3,
            title: 'Monitoring & Analytics',
            description: 'Track AI model performance, usage, and costs with comprehensive monitoring and analytics dashboards.',
            features: ['Performance monitoring', 'Usage analytics', 'Cost tracking', 'Error tracking', 'Custom dashboards']
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
                            <Cpu size={20} />
                            <span>AI Models & Integrations</span>
                        </div>
                        <h1 className="custom-services-hero-title">
                            Seamless AI Integration Services
                        </h1>
                        <p className="custom-services-hero-subtitle">
                            Connect the best AI technologies to power your operations. We integrate cutting-edge AI models including GPT-4 Turbo,
                            Claude, and Gemini into your existing systems. Our strategic partnership with Microsoft Azure enables enterprise-grade
                            integrations with world-class cloud infrastructure, ensuring seamless connectivity and optimal performance.
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
                        <h2 className="section-title">Integration Services</h2>
                        <p className="section-sub">
                            Connect AI models and services with your existing infrastructure. Our integration services ensure seamless connectivity
                            with Microsoft Azure, CRM systems, and enterprise platforms for unified workflows and optimal performance.
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
                        <h2 className="section-title">Enterprise-Grade Integration Excellence</h2>
                        <p className="section-sub">
                            We provide enterprise-grade integrations with the world's leading AI models and platforms, ensuring seamless connectivity and optimal performance.
                        </p>
                    </motion.div>

                    <div className="service-benefits-modern-grid">
                        {[
                            {
                                icon: Cpu,
                                title: 'GPT-4 Turbo Integration',
                                description: 'Access to OpenAI GPT-4 Turbo for enhanced language understanding and reasoning capabilities in your applications.',
                                color: '#18CBBE'
                            },
                            {
                                icon: Shield,
                                title: 'Microsoft Azure Partnership',
                                description: 'Enterprise-grade integrations with Azure AI services, ensuring high availability, security, and scalability.',
                                color: '#0A1A2F'
                            },
                            {
                                icon: Zap,
                                title: 'Seamless Connectivity',
                                description: 'Connect AI models with CRM systems, databases, and business platforms for unified workflows.',
                                color: '#18CBBE'
                            },
                            {
                                icon: BarChart3,
                                title: 'Advanced Analytics',
                                description: 'Comprehensive monitoring and analytics dashboards to track performance, usage, and costs.',
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
                            Discover articles, case studies, and portfolio projects that showcase how AI integration transforms businesses
                        </p>
                    </motion.div>

                    <div className="service-resources-modern-grid">
                        {[
                            {
                                title: 'GPT-4 Turbo: Enhanced Intelligence',
                                link: '/blog/4',
                                type: 'article',
                                description: 'Learn how GPT-4 Turbo integration enhances AI agent capabilities and reasoning',
                                icon: BookOpen
                            },
                            {
                                title: 'Microsoft Azure Partnership',
                                link: '/blog/8',
                                type: 'article',
                                description: 'Discover how our Azure partnership enables enterprise-grade AI integrations',
                                icon: BookOpen
                            },
                            {
                                title: 'View Portfolio',
                                link: '/portfolio',
                                type: 'portfolio',
                                description: 'See real-world AI integration projects and their measurable business impact',
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
                        <h2 className="cta-title">Ready to Integrate AI?</h2>
                        <p className="cta-subtitle">
                            Let's connect the best AI technologies to your systems. Leverage GPT-4 Turbo, Azure AI services, and seamless integrations.
                        </p>
                        <div className="cta-buttons">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Schedule a Consultation
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
        </motion.div>
    )
}
