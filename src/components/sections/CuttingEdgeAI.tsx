import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, Zap, Shield, Sparkles } from 'lucide-react'
import { Section } from '../ui/Section'
import { CUTTING_EDGE_AI_DATA } from '../../constants/landing'

export function CuttingEdgeAI() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const { badge, headline, subheadline, features } = CUTTING_EDGE_AI_DATA
    const fontStack = "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ElementType } = {
            'Cpu': Cpu,
            'Zap': Zap,
            'Shield': Shield
        }
        return icons[iconName] || Sparkles
    }

    return (
        <Section
            className="cutting-edge-ai-section py-20 relative overflow-hidden"
            id="cutting-edge-ai"
            ref={ref}
            style={{
                backgroundColor: '#F9FAFB',
                fontFamily: fontStack,
                backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 border border-rose-100 bg-rose-50"
                    >
                        <Zap size={14} className="text-rose-500" />
                        <span className="text-[10px] font-bold tracking-wider uppercase text-rose-600">{badge}</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold mb-5 tracking-tight"
                        style={{
                            background: 'linear-gradient(135deg, #18CBBE 0%, #0E4B8E 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            paddingBottom: '0.1em'
                        }}
                    >
                        {headline}
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-base md:text-lg leading-relaxed mx-auto"
                        style={{ color: '#64748B' }} // Slate 500
                    >
                        {subheadline}
                    </motion.p>
                </div>

                {/* Features Cards Grid - 3 Separate Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature: { title: string; description: string; icon: string; color: string }, index: number) => {
                        const Icon = getIcon(feature.icon)
                        const isTeal = feature.color === 'teal'
                        const isBlue = feature.color === 'blue'
                        const isGold = feature.color === 'gold'

                        return (
                            <motion.div
                                key={index}
                                initial="initial"
                                whileHover="hover"
                                animate="initial"
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group transition-all duration-300 hover:shadow-xl h-full flex flex-col"
                                style={{
                                    border: '1px solid #F1F5F9'
                                }}
                            >
                                {/* Full Card Border - Fades in on Hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                                    style={{ border: '2px solid #18CBBE' }}
                                    variants={{
                                        initial: { opacity: 0 },
                                        hover: { opacity: 1 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Gradient Top Line - Expands from center on Hover */}
                                <motion.div
                                    className="absolute top-0 left-0 h-[5px] w-full bg-gradient-to-r from-[#18CBBE] to-[#0E4B8E] z-20"
                                    variants={{
                                        initial: { scaleX: 0, opacity: 0 },
                                        hover: { scaleX: 1, opacity: 1 }
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    style={{ originX: 0.5 }}
                                />

                                <div
                                    className="mb-6 w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center p-2.5"
                                    style={{
                                        backgroundColor: isTeal ? '#F0FDFA' : isBlue ? '#EFF6FF' : isGold ? '#FFFBEB' : '#F8FAFC',
                                    }}
                                >
                                    <Icon
                                        size={22}
                                        style={{
                                            color: isTeal ? '#0D9488' : isBlue ? '#2563EB' : isGold ? '#D97706' : '#0A1A2F'
                                        }}
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-3" style={{ color: '#0A1A2F' }}>
                                    {feature.title}
                                </h3>

                                <p className="text-slate-500 leading-snug text-sm md:text-base">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}
