import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, X } from 'lucide-react'

import { useNavigate, useLocation } from 'react-router-dom'

export function PrivacyPolicy() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setIsOpen(location.pathname === '/privacy')
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
                            <FileText size={24} style={{ color: 'var(--aix-cyan)' }} />
                            <h2>Privacy Policy</h2>
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

                        <h3>1. Information We Collect</h3>
                        <p>AIXCellence, LLC ("we," "our," or "us") collects information that you provide directly to us, including:</p>
                        <ul>
                            <li>Account information (name, email address, company name)</li>
                            <li>Business data you input into our platform</li>
                            <li>Usage data and analytics about how you interact with our services</li>
                            <li>Payment information processed through secure third-party providers</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, maintain, and improve our AI automation services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send technical notices, updates, and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Monitor and analyze trends and usage</li>
                        </ul>

                        <h3>3. Data Security</h3>
                        <p>We implement industry-standard security measures including:</p>
                        <ul>
                            <li>End-to-end encryption for data in transit and at rest</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Access controls and authentication protocols</li>
                            <li>Compliance with SOC 2 and GDPR standards</li>
                        </ul>

                        <h3>4. Data Sharing</h3>
                        <p>We do not sell your personal information. We may share data only:</p>
                        <ul>
                            <li>With your explicit consent</li>
                            <li>To comply with legal obligations</li>
                            <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                        </ul>

                        <h3>5. Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access, update, or delete your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Request data portability</li>
                            <li>File a complaint with relevant data protection authorities</li>
                        </ul>

                        <h3>6. Contact Us</h3>
                        <p>For privacy-related questions, contact us at:</p>
                        <p>Email: <a href="mailto:privacy@aixcellence.co">privacy@aixcellence.co</a><br />
                            Address: 1500 Grant St #4242, Denver, CO 80203, United States</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
