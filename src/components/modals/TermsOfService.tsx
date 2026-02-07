import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, X } from 'lucide-react'

import { useNavigate, useLocation } from 'react-router-dom'

export function TermsOfService() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setIsOpen(location.pathname === '/terms')
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
                            <h2>Terms of Service</h2>
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

                        <h3>1. Acceptance of Terms</h3>
                        <p>By accessing or using AIXCellence services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>

                        <h3>2. Description of Service</h3>
                        <p>AIXCellence provides AI-powered automation platforms and intelligent agents that help businesses automate operations, including customer service, marketing, bookings, and analytics.</p>

                        <h3>3. User Accounts</h3>
                        <p>You are responsible for:</p>
                        <ul>
                            <li>Maintaining the confidentiality of your account credentials</li>
                            <li>All activities that occur under your account</li>
                            <li>Providing accurate and complete information</li>
                            <li>Notifying us immediately of any unauthorized use</li>
                        </ul>

                        <h3>4. Acceptable Use</h3>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Use the service for any illegal purpose</li>
                            <li>Violate any applicable laws or regulations</li>
                            <li>Interfere with or disrupt the service</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Use the service to transmit harmful code or malware</li>
                        </ul>

                        <h3>5. Intellectual Property</h3>
                        <p>All content, features, and functionality of the service are owned by AIXCellence, LLC and are protected by international copyright, trademark, and other intellectual property laws.</p>

                        <h3>6. Payment and Billing</h3>
                        <p>Subscription fees are billed in advance on a monthly or annual basis. You may cancel your subscription at any time, with access continuing until the end of the current billing period.</p>

                        <h3>7. Limitation of Liability</h3>
                        <p>To the maximum extent permitted by law, AIXCellence shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.</p>

                        <h3>8. Contact Information</h3>
                        <p>For questions about these Terms, contact us at:</p>
                        <p>Email: <a href="mailto:legal@aixcellence.co">legal@aixcellence.co</a><br />
                            Address: 1500 Grant St #4242, Denver, CO 80203, United States</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
