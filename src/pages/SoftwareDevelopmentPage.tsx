import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Database, Shield, Zap, Settings, BarChart3, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'

export function SoftwareDevelopmentPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useSEO({
        title: 'Software Development Services — Full-Stack Solutions | AIXcellence',
        description: 'Full-stack software solutions built with modern technologies. Scalable, secure, and designed for growth.',
        keywords: 'software development, web development, full-stack development, custom software, application development',
        url: 'https://aixcellence.co/#software-development',
        canonical: 'https://aixcellence.co/#software-development'
    })

    const services = [
        {
            icon: Layers,
            title: 'Web Application Development',
            description: 'Modern, responsive web applications built with the latest frameworks and technologies for optimal performance.',
            features: ['React, Vue, Angular', 'Node.js backend', 'RESTful APIs', 'Responsive design', 'Progressive Web Apps']
        },
        {
            icon: Database,
            title: 'Backend Development',
            description: 'Scalable backend systems and APIs that power your applications with robust architecture and security.',
            features: ['Microservices architecture', 'API development', 'Database design', 'Cloud deployment', 'Serverless functions']
        },
        {
            icon: Shield,
            title: 'Enterprise Software',
            description: 'Large-scale enterprise applications with advanced security, compliance, and integration capabilities.',
            features: ['Enterprise architecture', 'Security compliance', 'Legacy integration', 'Scalability planning', 'Disaster recovery']
        },
        {
            icon: Zap,
            title: 'Cloud Solutions',
            description: 'Cloud-native applications deployed on AWS, Azure, or GCP with auto-scaling and high availability.',
            features: ['AWS deployment', 'Azure integration', 'GCP setup', 'Container orchestration', 'CI/CD pipelines']
        },
        {
            icon: Settings,
            title: 'DevOps & Infrastructure',
            description: 'Complete DevOps setup with automated deployments, monitoring, and infrastructure as code.',
            features: ['CI/CD pipelines', 'Docker & Kubernetes', 'Infrastructure as code', 'Monitoring & logging', 'Automated testing']
        },
        {
            icon: BarChart3,
            title: 'Maintenance & Support',
            description: 'Ongoing maintenance, updates, and support to keep your software running smoothly and securely.',
            features: ['24/7 monitoring', 'Security updates', 'Performance optimization', 'Bug fixes', 'Feature enhancements']
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
                            <Layers size={20} />
                            <span>Software Development</span>
                        </div>
                        <h1 className="custom-services-hero-title">
                            Full-Stack Software Solutions
                        </h1>
                        <p className="custom-services-hero-subtitle">
                            Build scalable, secure software applications with modern technologies. From web apps to enterprise systems,
                            we deliver solutions designed for growth and performance. Our cloud-native approach leverages Microsoft Azure
                            and other leading platforms for enterprise-grade infrastructure, ensuring high availability and seamless scalability.
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
                        <h2 className="section-title">Development Services</h2>
                        <p className="section-sub">
                            Comprehensive software development solutions for your business. From web applications to enterprise systems,
                            we build scalable, secure solutions that integrate seamlessly with your existing infrastructure and AI automation.
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
                        <h2 className="section-title">Modern Development Excellence</h2>
                        <p className="section-sub">
                            We deliver modern, scalable software solutions that integrate seamlessly with AI automation and enterprise systems.
                        </p>
                    </motion.div>

                    <div className="service-benefits-modern-grid">
                        {[
                            {
                                icon: Zap,
                                title: 'Modern Tech Stack',
                                description: 'Built with latest frameworks and technologies for optimal performance, scalability, and maintainability.',
                                color: '#18CBBE'
                            },
                            {
                                icon: Shield,
                                title: 'Enterprise Security',
                                description: 'ISO 27001 certified development practices with comprehensive security and compliance built-in.',
                                color: '#0A1A2F'
                            },
                            {
                                icon: Layers,
                                title: 'Cloud-Native',
                                description: 'Deploy on Azure, AWS, or GCP with auto-scaling, high availability, and enterprise infrastructure.',
                                color: '#18CBBE'
                            },
                            {
                                icon: Settings,
                                title: 'DevOps Excellence',
                                description: 'Complete CI/CD pipelines, automated testing, and infrastructure as code for reliable deployments.',
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
                            Discover articles, case studies, and portfolio projects that showcase how software development transforms businesses
                        </p>
                    </motion.div>

                    <div className="service-resources-modern-grid">
                        {[
                            {
                                title: 'The Future of Web Development',
                                link: '/blog/5',
                                type: 'article',
                                description: 'Explore how AI and modern frameworks are shaping the future of web development',
                                icon: BookOpen
                            },
                            {
                                title: 'Building Scalable Backend Systems',
                                link: '/blog/6',
                                type: 'article',
                                description: 'Best practices for building robust and scalable backend architectures for enterprise applications',
                                icon: BookOpen
                            },
                            {
                                title: 'View Portfolio',
                                link: '/portfolio',
                                type: 'portfolio',
                                description: 'See real-world software development projects and their measurable business impact',
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
                        <h2 className="cta-title">Ready to Build Your Software?</h2>
                        <p className="cta-subtitle">
                            Let's create a solution that scales with your business. From web apps to enterprise systems, we deliver modern software solutions.
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
