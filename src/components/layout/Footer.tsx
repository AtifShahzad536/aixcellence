import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NAVIGATION_DATA, NavItem } from '../../constants/navigation'

interface FooterColumnProps {
    title: string
    items: NavItem[] | { label: string, path: string, badge?: string }[]
    delay: number
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items, delay }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            className="footer-column"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay }}
        >
            <strong>{title}</strong>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>
                        <Link to={item.path}>{item.label}</Link>
                        {item.badge && <span className="soon-badge">{item.badge}</span>}
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const socialLinks = [
        { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1C7UCG71Vh/?mibextid=wwXIfr' },
        { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aixcellenceteam?igsh=MXRremRmZnB3bmluMg%3D%3D&utm_source=qr' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/aixcellenceteam/' },
        { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@aixcellenceteam?si=zUSp7FUGa-bXW6pV' },
    ]

    return (
        <motion.footer
            className="footer"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
        >
            <div className="container footer-grid">
                <motion.div
                    className="footer-brand"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    <Link to="/" className="footer-logo-link">
                        <img
                            src="/images/logos/logo_aixcellence.png"
                            alt="AIXcellence"
                            className="footer-logo-image"
                        />
                    </Link>
                    <div className="footer-brand-tagline">
                        <p className="footer-brand-title">Aixcellence</p>
                        <p className="footer-brand-subtitle">Where AI meets excellence.</p>
                    </div>

                    <div className="footer-contact">
                        <div className="footer-contact-item">
                            <Phone size={16} />
                            <a href="tel:+17206047231">+1 (720) 604-7231</a>
                        </div>
                        <div className="footer-contact-item">
                            <Mail size={16} />
                            <a href="mailto:hi@aixcellence.co">hi@aixcellence.co</a>
                        </div>
                        <div className="footer-contact-item">
                            <MapPin size={16} />
                            <span>1500 Grant St #4242, Denver, CO 80203, United States</span>
                        </div>
                    </div>
                </motion.div>

                <FooterColumn
                    title={NAVIGATION_DATA.platform.title}
                    items={NAVIGATION_DATA.platform.items}
                    delay={0.3}
                />

                <FooterColumn
                    title={NAVIGATION_DATA.services.title}
                    items={NAVIGATION_DATA.services.items.slice(0, 4)} // Show top services
                    delay={0.4}
                />

                <FooterColumn
                    title={NAVIGATION_DATA.solutions.title || 'Solutions'}
                    items={NAVIGATION_DATA.solutions.industries.slice(0, 4)} // Show top industries
                    delay={0.45}
                />

                <FooterColumn
                    title="Company"
                    items={NAVIGATION_DATA.resources.company}
                    delay={0.5}
                />

                <FooterColumn
                    title="Discover"
                    items={NAVIGATION_DATA.resources.learn}
                    delay={0.6}
                />


                <motion.div
                    className="footer-social-panel"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                >
                    <div className="footer-social-heading">
                        <span>Connect with us</span>
                    </div>
                    <div className="footer-social-links">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    <IconComponent size={18} />
                                </motion.a>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
            <div className="container footer-bottom">
                <motion.div
                    className="footer-copyright"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <p>© 2025 AIXCellence, LLC. All rights reserved.</p>
                </motion.div>
                <motion.div
                    className="footer-legal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/security">Security</Link>
                </motion.div>
            </div>
        </motion.footer>
    )
}
