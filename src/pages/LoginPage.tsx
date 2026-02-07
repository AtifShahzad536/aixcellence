import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Lock, Mail, Eye, EyeOff, ArrowRight, Shield } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'

export function LoginPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useSEO({
        title: 'Login — Access Your AIXcellence Account | AIXcellence',
        description: 'Sign in to your AIXcellence account to access AIX1 platform, manage your AI agents, and automate your business operations.',
        keywords: 'AIXcellence login, AIX1 login, sign in, account access, AI automation platform login',
        url: 'https://aixcellence.co/#login',
        canonical: 'https://aixcellence.co/#login'
    })

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: '' })

        try {
            // TODO: Replace with actual login API endpoint
            // For now, this is a placeholder that simulates login
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Simulate login validation - always fail for demo purposes
            // In production, replace this with actual API call
            const isValidCredentials = false // This will be replaced with actual API response

            if (isValidCredentials) {
                // Simulate successful login
                setSubmitStatus({ type: 'success', message: 'Login successful! Redirecting...' })

                // Redirect to dashboard or home after successful login
                setTimeout(() => {
                    window.location.href = '/#home'
                }, 1500)
            } else {
                // Simulate failed login
                throw new Error('Invalid credentials')
            }
        } catch (error) {
            console.error('Login error:', error)
            setSubmitStatus({ type: 'error', message: 'Username or password is incorrect.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                            <Lock size={20} />
                            <span>Secure Access</span>
                        </div>
                        <h1 className="contact-hero-title">
                            Welcome Back
                        </h1>
                        <p className="contact-hero-subtitle">
                            Sign in to access your AIXcellence account and manage your AI automation platform.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Login Content Section */}
            <motion.section
                className="contact-content-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="contact-content-grid" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        {/* Login Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="card contact-form-card">
                                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        margin: '0 auto 24px',
                                        borderRadius: '16px',
                                        background: 'var(--gradient-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 8px 24px rgba(24, 203, 190, 0.25)'
                                    }}>
                                        <Lock size={32} style={{ color: 'var(--white)' }} />
                                    </div>
                                    <h2 className="contact-form-title" style={{ marginBottom: '8px' }}>Sign In</h2>
                                    <p className="contact-form-subtitle" style={{ margin: 0 }}>
                                        Enter your credentials to access your account
                                    </p>
                                </div>

                                {submitStatus.type && (
                                    <motion.div
                                        className={`contact-form-message ${submitStatus.type === 'success' ? 'contact-form-message-success' : 'contact-form-message-error'}`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {submitStatus.type === 'success' ? '✓' : '✗'} {submitStatus.message}
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="contact-form-group">
                                        <label htmlFor="email">
                                            <Mail size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@company.com"
                                            autoComplete="email"
                                            style={{ paddingLeft: '44px' }}
                                        />
                                    </div>

                                    <div className="contact-form-group">
                                        <label htmlFor="password">
                                            <Lock size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                            Password *
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter your password"
                                                autoComplete="current-password"
                                                style={{ paddingRight: '48px', paddingLeft: '44px' }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                style={{
                                                    position: 'absolute',
                                                    right: '12px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: 'var(--text-muted)',
                                                    padding: '4px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'color 0.2s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--aix-cyan)'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '24px',
                                        flexWrap: 'wrap',
                                        gap: '12px'
                                    }}>
                                        <label style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            cursor: 'pointer',
                                            fontSize: 'var(--text-sm)',
                                            color: 'var(--text-muted)',
                                            fontWeight: 'var(--font-regular)'
                                        }}>
                                            <input
                                                type="checkbox"
                                                style={{
                                                    cursor: 'pointer',
                                                    width: '16px',
                                                    height: '16px',
                                                    accentColor: 'var(--aix-cyan)'
                                                }}
                                            />
                                            <span>Remember me</span>
                                        </label>
                                        <Link
                                            to="/#forgot-password"
                                            style={{
                                                fontSize: 'var(--text-sm)',
                                                color: 'var(--aix-cyan)',
                                                textDecoration: 'none',
                                                fontWeight: 'var(--font-medium)',
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.textDecoration = 'underline'
                                                e.currentTarget.style.color = 'var(--aix-blue)'
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.textDecoration = 'none'
                                                e.currentTarget.style.color = 'var(--aix-cyan)'
                                            }}
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        className="btn btn-hero-primary"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        border: '2px solid rgba(255, 255, 255, 0.3)',
                                                        borderTop: '2px solid var(--white)',
                                                        borderRadius: '50%'
                                                    }}
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                />
                                                Signing in...
                                            </>
                                        ) : (
                                            <>
                                                Sign In
                                                <ArrowRight size={20} />
                                            </>
                                        )}
                                    </motion.button>

                                    <div style={{
                                        marginTop: '32px',
                                        paddingTop: '32px',
                                        borderTop: '1px solid var(--medium-gray)',
                                        textAlign: 'center'
                                    }}>
                                        <p style={{
                                            fontSize: 'var(--text-sm)',
                                            color: 'var(--text-muted)',
                                            marginBottom: '16px'
                                        }}>
                                            Don't have an account?
                                        </p>
                                        <motion.button
                                            type="button"
                                            disabled={true}
                                            className="btn btn-hero-secondary"
                                            style={{
                                                width: '100%',
                                                justifyContent: 'center',
                                                gap: '8px',
                                                opacity: 0.5,
                                                cursor: 'not-allowed',
                                                pointerEvents: 'none'
                                            }}
                                        >
                                            Get Started
                                            <ArrowRight size={20} />
                                        </motion.button>
                                    </div>
                                </form>

                                {/* Additional Security Info */}
                                <div style={{
                                    marginTop: '32px',
                                    padding: '20px',
                                    background: 'var(--gradient-subtle)',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(24, 203, 190, 0.2)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <Shield size={20} style={{ color: 'var(--aix-cyan)', flexShrink: 0, marginTop: '2px' }} />
                                        <div>
                                            <p style={{
                                                fontSize: 'var(--text-sm)',
                                                color: 'var(--text-dark)',
                                                margin: 0,
                                                fontWeight: 'var(--font-medium)',
                                                marginBottom: '4px'
                                            }}>
                                                Secure Login
                                            </p>
                                            <p style={{
                                                fontSize: 'var(--text-xs)',
                                                color: 'var(--text-muted)',
                                                margin: 0,
                                                lineHeight: 1.6
                                            }}>
                                                Your connection is encrypted and secure. We use industry-standard security measures to protect your account.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}
