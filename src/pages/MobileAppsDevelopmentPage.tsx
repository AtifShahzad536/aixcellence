import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Layers, Zap, Shield, BarChart3, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'

export function MobileAppsDevelopmentPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useSEO({
        title: 'Mobile Apps Development — iOS & Android Apps | AIXcellence',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
        keywords: 'mobile app development, iOS development, Android development, React Native, Flutter, mobile apps',
        url: 'https://aixcellence.co/#mobile-apps-development',
        canonical: 'https://aixcellence.co/#mobile-apps-development'
    })

    const services = [
        {
            icon: Phone,
            title: 'iOS App Development',
            description: 'Native iOS applications built with Swift and SwiftUI, optimized for iPhone and iPad devices.',
            features: ['Swift & SwiftUI', 'iOS design guidelines', 'App Store optimization', 'Push notifications', 'In-app purchases']
        },
        {
            icon: Phone,
            title: 'Android App Development',
            description: 'Native Android applications built with Kotlin and Jetpack Compose for modern Android devices.',
            features: ['Kotlin development', 'Material Design', 'Google Play optimization', 'Android widgets', 'Background services']
        },
        {
            icon: Layers,
            title: 'Cross-Platform Development',
            description: 'Build once, deploy everywhere with React Native or Flutter for iOS and Android from a single codebase.',
            features: ['React Native', 'Flutter development', 'Code sharing', 'Native performance', 'Hot reload']
        },
        {
            icon: Zap,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive mobile interfaces designed with user experience and conversion optimization in mind.',
            features: ['User research', 'Wireframing', 'Prototyping', 'Design systems', 'Usability testing']
        },
        {
            icon: Shield,
            title: 'App Maintenance',
            description: 'Ongoing support, updates, and maintenance to keep your mobile apps running smoothly and securely.',
            features: ['Bug fixes', 'OS updates', 'Security patches', 'Feature updates', 'Performance optimization']
        },
        {
            icon: BarChart3,
            title: 'Analytics & Testing',
            description: 'Comprehensive analytics integration and testing to ensure optimal performance and user engagement.',
            features: ['Analytics integration', 'A/B testing', 'Crash reporting', 'User analytics', 'Performance monitoring']
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
                            <Phone size={20} />
                            <span>Mobile Apps Development</span>
                        </div>
                        <h1 className="custom-services-hero-title">
                            Exceptional Mobile Experiences
                        </h1>
                        <p className="custom-services-hero-subtitle">
                            Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.
                            From concept to App Store, we build mobile apps that users love.
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
                        <h2 className="section-title">Mobile Development Services</h2>
                        <p className="section-sub">
                            Comprehensive mobile app solutions for iOS and Android. Build native or cross-platform apps with modern frameworks,
                            beautiful UI/UX design, and seamless integration with your business systems and AI automation.
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
                        <h2 className="section-title">Mobile Excellence Delivered</h2>
                        <p className="section-sub">
                            We build mobile apps that deliver exceptional user experiences and integrate seamlessly with your business systems and AI automation.
                        </p>
                    </motion.div>

                    <div className="service-benefits-modern-grid">
                        {[
                            {
                                icon: Phone,
                                title: 'Native Performance',
                                description: 'iOS and Android apps built with native technologies for optimal performance and user experience.',
                                color: '#18CBBE'
                            },
                            {
                                icon: Layers,
                                title: 'Cross-Platform Options',
                                description: 'React Native and Flutter development for code-sharing across iOS and Android platforms.',
                                color: '#0A1A2F'
                            },
                            {
                                icon: Zap,
                                title: 'AI Integration',
                                description: 'Seamless integration with AI agents and automation for intelligent mobile experiences.',
                                color: '#18CBBE'
                            },
                            {
                                icon: BarChart3,
                                title: 'Analytics & Testing',
                                description: 'Comprehensive analytics, A/B testing, and performance monitoring built into every app.',
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
                            Discover articles, case studies, and portfolio projects that showcase how mobile apps transform businesses
                        </p>
                    </motion.div>

                    <div className="service-resources-modern-grid">
                        {[
                            {
                                title: 'Mobile App: Manage Agents Anywhere',
                                link: '/blog/6',
                                type: 'article',
                                description: 'Learn how mobile apps enable remote AI agent management and optimization',
                                icon: BookOpen
                            },
                            {
                                title: 'Enterprise Analytics Dashboard',
                                link: '/blog/7',
                                type: 'article',
                                description: 'Discover how analytics dashboards provide insights into mobile app performance',
                                icon: BookOpen
                            },
                            {
                                title: 'View Portfolio',
                                link: '/portfolio',
                                type: 'portfolio',
                                description: 'See real-world mobile app projects and their measurable business impact',
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
                        <h2 className="cta-title">Ready to Build Your Mobile App?</h2>
                        <p className="cta-subtitle">
                            Let's create a mobile experience that users love. From native iOS/Android to cross-platform solutions.
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
