import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, X } from 'lucide-react'

import { useNavigate, useLocation } from 'react-router-dom'

export function Security() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setIsOpen(location.pathname === '/security')
    }, [location.pathname])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                className="legal-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                    navigate(-1)
                    setIsOpen(false)
                }}
            >
                <motion.div
                    className="legal-modal"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="legal-modal-header">
                        <div className="legal-modal-title-wrapper">
                            <Lock size={24} style={{ color: 'var(--aix-cyan)' }} />
                            <h2>Security</h2>
                        </div>
                        <button
                            className="legal-modal-close"
                            onClick={() => {
                                navigate(-1)
                                setIsOpen(false)
                            }}
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="legal-modal-content">
                        <p><strong>Last Updated: January 2025</strong></p>

                        <h3>Our Security Commitment</h3>
                        <p>At AIXCellence, security is fundamental to everything we do. We protect your data with enterprise-grade security measures and industry best practices.</p>

                        <h3>1. Data Encryption</h3>
                        <ul>
                            <li><strong>In Transit:</strong> All data transmitted between your devices and our servers is encrypted using TLS 1.3</li>
                            <li><strong>At Rest:</strong> All stored data is encrypted using AES-256 encryption</li>
                            <li><strong>Database:</strong> All databases are encrypted with multiple layers of protection</li>
                        </ul>

                        <h3>2. Access Controls</h3>
                        <ul>
                            <li>Multi-factor authentication (MFA) for all accounts</li>
                            <li>Role-based access control (RBAC) to limit data access</li>
                            <li>Regular access reviews and audits</li>
                            <li>Principle of least privilege for all system access</li>
                        </ul>

                        <h3>3. Infrastructure Security</h3>
                        <ul>
                            <li>Hosted on secure, compliant cloud infrastructure</li>
                            <li>Regular security patches and updates</li>
                            <li>Intrusion detection and prevention systems</li>
                            <li>DDoS protection and mitigation</li>
                            <li>24/7 security monitoring and incident response</li>
                        </ul>

                        <h3>4. Compliance & Certifications</h3>
                        <ul>
                            <li><strong>SOC 2 Type II:</strong> Certified for security, availability, and confidentiality</li>
                            <li><strong>GDPR Ready:</strong> Compliant with European data protection regulations</li>
                            <li><strong>CCPA:</strong> Compliant with California Consumer Privacy Act</li>
                            <li>Regular third-party security audits</li>
                        </ul>

                        <h3>5. Data Protection</h3>
                        <ul>
                            <li>Automated backups with point-in-time recovery</li>
                            <li>Data redundancy across multiple geographic regions</li>
                            <li>Secure data deletion and retention policies</li>
                            <li>No data sharing with third parties without explicit consent</li>
                        </ul>

                        <h3>6. Incident Response</h3>
                        <p>We maintain a comprehensive incident response plan and will notify affected users within 72 hours of discovering any security breach that may impact their data.</p>

                        <h3>7. Security Best Practices for Users</h3>
                        <ul>
                            <li>Use strong, unique passwords</li>
                            <li>Enable multi-factor authentication</li>
                            <li>Regularly review account activity</li>
                            <li>Keep your devices and browsers updated</li>
                            <li>Report any suspicious activity immediately</li>
                        </ul>

                        <h3>8. Security Contact</h3>
                        <p>To report security vulnerabilities or concerns:</p>
                        <p>Email: <a href="mailto:security@aixcellence.co">security@aixcellence.co</a><br />
                            Address: 1500 Grant St #4242, Denver, CO 80203, United States</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
