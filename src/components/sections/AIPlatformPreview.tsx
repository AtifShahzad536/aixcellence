import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Magnet, Calendar, MessageSquare, TrendingUp, Users2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'
import { Section } from '../ui/Section'
import { AI_PLATFORM_DATA } from '../../constants/landing'

export function AIPlatformPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const { badge, headline, subheadline, features, buttons } = AI_PLATFORM_DATA

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ElementType } = {
            'Magnet': Magnet,
            'Calendar': Calendar,
            'MessageSquare': MessageSquare,
            'TrendingUp': TrendingUp,
            'Users2': Users2,
            'ShieldCheck': ShieldCheck
        }
        return icons[iconName] || Sparkles
    }

    const fontStack = "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

    return (
        <Section
            className="ai-platform-section py-24 relative overflow-hidden"
            id="platform-preview"
            ref={ref}
            style={{ backgroundColor: '#ffffff', fontFamily: fontStack }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 shadow-sm"
                        style={{
                            backgroundColor: '#F0FDFA',
                            border: '1px solid #CCFBF1'
                        }}
                    >
                        <Sparkles size={14} style={{ color: '#0D9488' }} />
                        <span
                            className="font-bold tracking-wide uppercase"
                            style={{
                                color: '#0F766E',
                                fontSize: '0.75rem',
                                fontFamily: fontStack
                            }}
                        >
                            {badge}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="font-extrabold mb-6 leading-tight whitespace-pre-line tracking-tight"
                        style={{
                            background: 'linear-gradient(135deg, #18CBBE 0%, #0E4B8E 100%)', // Cyan to Darker Blue
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent', // Fallback
                            fontFamily: fontStack,
                            fontSize: '3rem',
                            paddingBottom: '0.1em' // Prevent clipper descenders
                        }}
                    >
                        <span className="text-4xl md:text-5xl lg:text-[3.75rem] block">
                            {headline}
                        </span>
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="mb-12 max-w-3xl leading-relaxed mx-auto"
                        style={{
                            color: '#64748B',
                            fontWeight: 500,
                            fontFamily: fontStack,
                            fontSize: '1.125rem'
                        }}
                    >
                        {subheadline}
                    </motion.p>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mb-14"
                    >
                        {features.map((feature, index) => {
                            const Icon = getIcon(feature.icon)
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-3 px-6 py-4 rounded-full bg-white transition-all duration-300"
                                    style={{
                                        border: '1px solid #E2E8F0',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                                    }}
                                >
                                    <Icon size={18} style={{ color: '#18CBBE' }} />
                                    <span
                                        className="font-bold"
                                        style={{
                                            color: '#334155',
                                            fontSize: '0.875rem',
                                            fontFamily: fontStack
                                        }}
                                    >
                                        {feature.label}
                                    </span>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        {buttons.map((button, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={button.href}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-300"
                                    style={{
                                        fontFamily: fontStack,
                                        fontSize: '0.875rem',
                                        ...(button.variant === 'primary'
                                            ? {
                                                background: 'linear-gradient(135deg, #18CBBE 0%, #0E4B8E 100%)', // Match headline gradient
                                                color: '#FFFFFF',
                                                boxShadow: '0 10px 15px -3px rgba(24, 203, 190, 0.3)'
                                            }
                                            : {
                                                backgroundColor: '#FFFFFF',
                                                color: '#0A1A2F',
                                                border: '1px solid #cbd5e1',
                                                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                                            }
                                        )
                                    }}
                                >
                                    {button.text}
                                    {button.variant === 'primary' && <ArrowRight size={18} />}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Background Decorations - Light variations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-[100%] blur-[80px] opacity-40"
                    style={{ background: 'linear-gradient(180deg, rgba(20, 184, 166, 0.15) 0%, rgba(255, 255, 255, 0) 100%)' }}
                />
            </div>
        </Section>
    )
}
