import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export function ContactPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useSEO({
        title: 'Contact Us — Get Started with AIXcellence | AIXcellence',
        description: 'Get in touch with AIXcellence to learn how our AI agents can transform your business. Schedule a demo, request a quote, or speak with our team about intelligent automation solutions.',
        keywords: 'contact AIXcellence, AI automation demo, get started with AI agents, AIXcellence sales, business automation consultation',
        url: 'https://aixcellence.co/contact',
        canonical: 'https://aixcellence.co/contact'
    })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

    // API URL - use environment variable or default to Supabase Edge Function
    const API_URL = import.meta.env.VITE_API_URL || 'https://slywhefjsrzluticwxsm.supabase.co/functions/v1/contact'

    const contactSocialProfiles = [
        { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1C7UCG71Vh/?mibextid=wwXIfr' },
        { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aixcellenceteam?igsh=MXRremRmZnB3bmluMg%3D%3D&utm_source=qr' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/aixcellenceteam/' },
        { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@aixcellenceteam?si=zUSp7FUGa-bXW6pV' },
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok && response.status === 0) {
                throw new Error('Network error: Unable to reach server. Please check your connection.')
            }

            const data = await response.json()

            if (response.ok && data.success) {
                setSubmitStatus({ type: 'success', message: data.message || 'Thank you for your message! We\'ll get back to you soon.' })
                setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
            } else {
                if (data.errors) {
                    const errorMessages = Object.entries(data.errors)
                        .map(([field, errors]: [string, any]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
                        .join('\n')
                    setSubmitStatus({ type: 'error', message: `Please fix the following errors:\n${errorMessages}` })
                } else {
                    setSubmitStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again later.' })
                }
            }
        } catch (error) {
            console.error('Contact form error:', error)
            if (error instanceof TypeError && error.message.includes('fetch')) {
                setSubmitStatus({ type: 'error', message: 'Network error: Unable to connect to server. Please check your internet connection and try again.' })
            } else if (error instanceof Error) {
                setSubmitStatus({ type: 'error', message: error.message })
            } else {
                setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Hero Section */}
            <motion.section
                className="contact-hero-section"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="contact-hero-badge">
                            <MessageSquare size={20} />
                            <span>Get in Touch</span>
                        </div>
                        <h1 className="contact-hero-title">
                            Let's Build Something Amazing Together
                        </h1>
                        <p className="contact-hero-subtitle">
                            Have questions about AIXcellence? Want to see a demo? Or ready to transform your business with AI?
                            We're here to help. Reach out and let's start a conversation.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Content Section */}
            <motion.section
                className="contact-content-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="contact-content-grid">
                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="card contact-form-card">
                                <h2 className="contact-form-title">Send us a Message</h2>
                                <p className="contact-form-subtitle">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                                {submitStatus.type && (
                                    <div className={`contact-form-message ${submitStatus.type === 'success' ? 'contact-form-message-success' : 'contact-form-message-error'}`}>
                                        {submitStatus.type === 'success' ? '✓' : '✗'} {submitStatus.message}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="contact-form-row">
                                        <div className="contact-form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="contact-form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-form-row">
                                        <div className="contact-form-group">
                                            <label htmlFor="company">Company Name</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Your Company"
                                            />
                                        </div>
                                        <div className="contact-form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>
                                    <div className="contact-form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="demo">Request a Demo</option>
                                            <option value="pricing">Pricing Inquiry</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="support">Technical Support</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="contact-form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            placeholder="Tell us about your needs and how we can help..."
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        className="btn btn-primary contact-submit-btn"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>Sending...</>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={20} />
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            className="contact-info-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="contact-info-card">
                                <h2 className="contact-info-title">Contact Information</h2>
                                <p className="contact-info-subtitle">
                                    Choose the best way to reach us
                                </p>

                                <div className="contact-info-items">
                                    <motion.a
                                        href="tel:+17206047231"
                                        className="contact-info-item"
                                        whileHover={{ x: 4 }}
                                    >
                                        <div className="contact-info-icon">
                                            <Phone size={24} />
                                        </div>
                                        <div className="contact-info-content">
                                            <h3 className="contact-info-label">Phone</h3>
                                            <p className="contact-info-value">+1 (720) 604-7231</p>
                                        </div>
                                    </motion.a>

                                    <motion.a
                                        href="mailto:hi@aixcellence.co"
                                        className="contact-info-item"
                                        whileHover={{ x: 4 }}
                                    >
                                        <div className="contact-info-icon">
                                            <Mail size={24} />
                                        </div>
                                        <div className="contact-info-content">
                                            <h3 className="contact-info-label">Email</h3>
                                            <p className="contact-info-value">hi@aixcellence.co</p>
                                        </div>
                                    </motion.a>

                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <MapPin size={24} />
                                        </div>
                                        <div className="contact-info-content">
                                            <h3 className="contact-info-label">Address</h3>
                                            <p className="contact-info-value">
                                                1500 Grant St #4242<br />
                                                Denver, CO 80203<br />
                                                United States
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-social-section">
                                    <h3 className="contact-social-title">Follow Us</h3>
                                    <div className="contact-social-links">
                                        {contactSocialProfiles.map((profile) => {
                                            const IconComponent = profile.icon
                                            return (
                                                <motion.a
                                                    key={profile.label}
                                                    href={profile.href}
                                                    className="contact-social-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    aria-label={profile.label}
                                                >
                                                    <IconComponent size={20} />
                                                </motion.a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="contact-hours-card">
                                <h3 className="contact-hours-title">Business Hours</h3>
                                <div className="contact-hours-list">
                                    <div className="contact-hours-item">
                                        <span className="contact-hours-day">Monday - Friday</span>
                                        <span className="contact-hours-time">9:00 AM - 6:00 PM MST</span>
                                    </div>
                                    <div className="contact-hours-item">
                                        <span className="contact-hours-day">Saturday</span>
                                        <span className="contact-hours-time">10:00 AM - 4:00 PM MST</span>
                                    </div>
                                    <div className="contact-hours-item">
                                        <span className="contact-hours-day">Sunday</span>
                                        <span className="contact-hours-time">Closed</span>
                                    </div>
                                </div>
                                <p className="contact-hours-note">
                                    Our AI agents are available 24/7, but our team responds during business hours.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}
