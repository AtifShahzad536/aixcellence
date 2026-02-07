import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Settings, Layers, Zap, Building2, Shield, Cpu, CheckCircle2, ArrowRight, Sparkles, BookOpen } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'

export function CustomServicesPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useSEO({
        title: 'Custom Software Solutions — AI-Powered Development Services | AIXcellence',
        description: 'Get custom AI software solutions tailored to your business needs. We offer custom AI agent development, integrations, workflow automation, and implementation services built on AIXcellence\'s proven AI technology.',
        keywords: 'custom software solutions, custom AI development, bespoke AI agents, custom automation, AI integration services, custom software development, AIXcellence custom services',
        url: 'https://aixcellence.co/services/custom',
        canonical: 'https://aixcellence.co/services/custom'
    })

    const services = [
        {
            icon: Settings,
            title: 'Custom AI Agent Development',
            description: 'We build bespoke AI agents tailored to your specific business processes, workflows, and requirements. Leverage AIXcellence\'s proven AI technology as a foundation for your custom solution.',
            features: [
                'Custom conversation flows and logic',
                'Industry-specific training and knowledge',
                'Unique personality and brand voice',
                'Specialized integrations with your systems',
                'Custom analytics and reporting'
            ]
        },
        {
            icon: Layers,
            title: 'Custom Integration Services',
            description: 'Seamlessly integrate AI agents with your existing tech stack, CRM systems, databases, and proprietary software. We ensure your AI solutions work perfectly with your current infrastructure.',
            features: [
                'API development and integration',
                'Legacy system integration',
                'Custom data pipelines',
                'Real-time synchronization',
                'Multi-platform connectivity'
            ]
        },
        {
            icon: Zap,
            title: 'Custom Workflow Automation',
            description: 'Design and implement custom automation workflows that streamline your unique business processes. From lead management to order fulfillment, we automate what matters most to your business.',
            features: [
                'End-to-end process automation',
                'Custom business logic implementation',
                'Multi-step workflow orchestration',
                'Exception handling and error recovery',
                'Performance monitoring and optimization'
            ]
        },
        {
            icon: Building2,
            title: 'Enterprise Implementation',
            description: 'Comprehensive implementation services for large organizations. We handle everything from planning and deployment to training and ongoing support, ensuring smooth adoption across your enterprise.',
            features: [
                'Enterprise architecture design',
                'Phased rollout planning',
                'Staff training and change management',
                'Dedicated support team',
                'Performance optimization'
            ]
        },
        {
            icon: Shield,
            title: 'White-Label Solutions',
            description: 'Rebrand our AI technology as your own. Perfect for agencies, resellers, and companies looking to offer AI capabilities under their brand with full customization and support.',
            features: [
                'Complete brand customization',
                'Custom domain and hosting',
                'Reseller program support',
                'Co-marketing opportunities',
                'Dedicated account management'
            ]
        },
        {
            icon: Cpu,
            title: 'AI Consulting & Strategy',
            description: 'Strategic guidance on how to leverage AI in your business. Our experts help you identify opportunities, plan implementations, and maximize ROI from AI investments.',
            features: [
                'AI readiness assessment',
                'Custom AI strategy development',
                'ROI analysis and planning',
                'Technology recommendations',
                'Ongoing strategic guidance'
            ]
        }
    ]

    const processSteps = [
        {
            number: '01',
            title: 'Discovery & Planning',
            description: 'We start by understanding your business needs, challenges, and goals. Through workshops and analysis, we create a detailed roadmap for your custom solution.'
        },
        {
            number: '02',
            title: 'Design & Architecture',
            description: 'Our team designs the solution architecture, user flows, and technical specifications. We ensure scalability, security, and seamless integration with your existing systems.'
        },
        {
            number: '03',
            title: 'Development & Testing',
            description: 'Using agile methodologies, we build your custom solution with regular check-ins and demos. Rigorous testing ensures quality, performance, and reliability.'
        },
        {
            number: '04',
            title: 'Deployment & Training',
            description: 'We handle deployment, configuration, and provide comprehensive training to your team. Ongoing support ensures smooth operations from day one.'
        }
    ]

    // Note: CaseStudy icon is FileText aliased in imports
    const CaseStudy = BookOpen // Fallback if CaseStudy is not explicitly available as an icon

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Hero Section */}
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
                            <Settings size={20} />
                            <span>Custom Software Solutions</span>
                        </div>
                        <h1 className="custom-services-hero-title">
                            Tailored AI Solutions for Your Business
                        </h1>
                        <p className="custom-services-hero-subtitle">
                            Beyond our standard products, we build custom AI software solutions that perfectly fit your unique business needs.
                            Leverage AIXcellence\'s proven AI technology as the foundation for your bespoke solution.
                        </p>
                        <div className="custom-services-hero-buttons">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Get a Custom Quote
                                    <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                            <Link to="/solutions" className="btn btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Services Grid */}
            <motion.section
                className="custom-services-section"
                id="services"
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
                        <h2 className="section-title">Our Custom Services</h2>
                        <p className="section-sub">
                            Comprehensive custom software solutions built on our proven AI technology. From custom AI agents to specialized
                            integrations, we deliver tailored solutions that perfectly match your unique business requirements.
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

            {/* Process Section */}
            <motion.section
                className="custom-services-process-section"
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
                    >
                        <h2 className="section-title">Our Development Process</h2>
                        <p className="section-sub">
                            A proven methodology for delivering custom solutions on time and on budget
                        </p>
                    </motion.div>

                    <div className="custom-services-process-grid">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="custom-services-process-card"
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                            >
                                <div className="process-number">{step.number}</div>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-description">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Why Custom Section */}
            <motion.section
                className="custom-services-why-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="custom-services-why-content">
                        <motion.div
                            className="custom-services-why-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">Why Choose Custom Solutions?</h2>
                            <p className="section-sub">
                                While our standard products (our AI solutions) work great for many businesses,
                                custom solutions give you the flexibility to address unique requirements and scale
                                exactly how you need.
                            </p>
                            <div className="custom-services-why-list">
                                <div className="why-item">
                                    <CheckCircle2 size={24} />
                                    <div>
                                        <h4>Perfect Fit for Your Business</h4>
                                        <p>Solutions designed specifically for your workflows, processes, and industry requirements</p>
                                    </div>
                                </div>
                                <div className="why-item">
                                    <CheckCircle2 size={24} />
                                    <div>
                                        <h4>Built on Proven Technology</h4>
                                        <p>Leverage AIXcellence\'s battle-tested AI technology as your foundation</p>
                                    </div>
                                </div>
                                <div className="why-item">
                                    <CheckCircle2 size={24} />
                                    <div>
                                        <h4>Seamless Integration</h4>
                                        <p>Works perfectly with your existing systems, tools, and infrastructure</p>
                                    </div>
                                </div>
                                <div className="why-item">
                                    <CheckCircle2 size={24} />
                                    <div>
                                        <h4>Scalable & Future-Proof</h4>
                                        <p>Built to grow with your business and adapt to changing needs</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="custom-services-why-visual"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="why-visual-card">
                                <div className="why-visual-icon">
                                    <Sparkles size={48} />
                                </div>
                                <h3>Products + Custom Services</h3>
                                <p>Get the best of both worlds: proven products for standard needs, custom solutions for unique requirements</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
                className="custom-services-benefits-section"
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
                        <h2 className="section-title">Tailored Solutions for Unique Needs</h2>
                        <p className="section-sub">
                            When standard products don't meet your needs, custom development delivers solutions tailored to your business with proven technology foundations.
                        </p>
                    </motion.div>

                    <div className="service-benefits-modern-grid">
                        {[
                            {
                                icon: Settings,
                                title: 'Tailored Solutions',
                                description: 'Custom AI agents and workflows designed specifically for your business processes and requirements.',
                                color: '#18CBBE'
                            },
                            {
                                icon: Layers,
                                title: 'Proven Foundation',
                                description: 'Built on AIXcellence\'s battle-tested AI platform, ensuring reliability and performance.',
                                color: '#0A1A2F'
                            },
                            {
                                icon: Shield,
                                title: 'Industry Expertise',
                                description: 'Specialized knowledge for healthcare, finance, legal, and other regulated industries with compliance built-in.',
                                color: '#18CBBE'
                            },
                            {
                                icon: Zap,
                                title: 'Hybrid Approach',
                                description: 'Combine standard products for common needs with custom development for specialized requirements.',
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
                            Discover articles, case studies, and portfolio projects that showcase how custom development transforms businesses
                        </p>
                    </motion.div>

                    <div className="service-resources-modern-grid">
                        {[
                            {
                                title: 'AI Agent Marketplace: Deploy in Minutes',
                                link: '/blog/2',
                                type: 'article',
                                description: 'Learn how marketplace solutions accelerate deployment while custom development handles unique needs',
                                icon: BookOpen
                            },
                            {
                                title: 'No-Code AI Agent Builder',
                                link: '/blog/3',
                                type: 'article',
                                description: 'Discover how no-code tools enable rapid prototyping before custom development',
                                icon: BookOpen
                            },
                            {
                                title: 'View Portfolio',
                                link: '/portfolio',
                                type: 'portfolio',
                                description: 'See real-world custom development projects and their measurable business impact',
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

            {/* CTA Section */}
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
                        <h2 className="cta-title">Ready to Build Your Custom Solution?</h2>
                        <p className="cta-subtitle">
                            Let's discuss how we can create a tailored AI solution that perfectly fits your business needs.
                            Explore our AI Agent Marketplace or schedule a consultation for custom development.
                        </p>
                        <div className="cta-buttons">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Schedule a Consultation
                                    <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                            <Link to="/platform" className="btn btn-secondary">
                                View AI Agent Marketplace
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    )
}
