import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Lock, Mail, Eye, EyeOff, ArrowRight, Shield, X, AlertCircle } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'

export function LoginPage() {
    useSEO({
        title: 'Login — Access Your AIXcellence Account | AIXcellence',
        description: 'Sign in to your AIXcellence account to access AIX1 platform, manage your AI agents, and automate your business operations.',
        keywords: 'AIXcellence login, AIX1 login, sign in, account access, AI automation platform login',
        url: 'https://aixcellence.co/#login',
        canonical: 'https://aixcellence.co/#login'
    })

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

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
        <div className="login-page-container">
            {/* Left Side: Visuals */}
            <motion.div
                className="login-visual-side"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="login-brand-group">
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}
                    >
                        <img
                            src="/images/icons/onlyicon.svg"
                            alt="AIX Logo"
                            className="login-brand-logo-large"
                        />
                    </motion.div>
                    <h1 className="login-visual-title">
                        The Future of <span>Business Automation</span> is Here.
                    </h1>
                    <p className="login-visual-subtitle">
                        Experience the power of orchestrating intelligent agents that scale with your vision.
                    </p>
                </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
                className="login-form-side"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
                <div className="login-form-container">
                    <div className="login-header">
                        <Link to="/" style={{ display: 'inline-block', marginBottom: '32px' }}>
                            <img src="/images/logos/fulllogo_nobuffer.png" alt="AIXcellence" style={{ height: '32px' }} />
                        </Link>
                        <h2 className="login-title">Welcome Back</h2>
                        <p className="login-subtitle">Please enter your details to sign in.</p>
                    </div>

                    {submitStatus.type && (
                        <motion.div
                            className={`login-message login-message-${submitStatus.type}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {submitStatus.type === 'error' ? <AlertCircle size={18} /> : <Shield size={18} />}
                            {submitStatus.message}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="login-field-group">
                            <label className="login-label" htmlFor="email">Email address</label>
                            <div className="login-input-wrapper">
                                <Mail className="login-input-icon" size={20} />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="login-input"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div className="login-field-group">
                            <label className="login-label" htmlFor="password">Password</label>
                            <div className="login-input-wrapper">
                                <Lock className="login-input-icon" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    className="login-input"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    className="login-password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="login-options">
                            <label className="login-remember">
                                <input type="checkbox" />
                                <span>Remember for 30 days</span>
                            </label>
                            <Link to="/#forgot-password" className="login-forgot">
                                Forgot password?
                            </Link>
                        </div>

                        <motion.button
                            type="submit"
                            className="login-submit-btn"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            {isSubmitting ? (
                                <motion.div
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        border: '2px solid rgba(255, 255, 255, 0.3)',
                                        borderTop: '2px solid var(--white)',
                                        borderRadius: '50%'
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={20} />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <div className="login-footer">
                        <p className="login-footer-text">Don't have an account?</p>
                        <button className="login-signup-btn">
                            Get Started — Coming Soon
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
