import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Clock, Globe } from 'lucide-react'
import { Section } from '../ui/Section'
import { NO_TECH_DATA } from '../../constants/landing'

export function NoTechRequired() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const { headline, subheadline, features } = NO_TECH_DATA
    const fontStack = "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ElementType } = {
            'Sparkles': Sparkles,
            'Clock': Clock,
            'Globe': Globe
        }
        return icons[iconName] || Sparkles
    }

    return (
        <Section
            className="no-tech-section py-20 relative"
            id="no-tech"
            ref={ref}
            style={{
                backgroundColor: '#F9FAFB',
                fontFamily: fontStack,
                backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial="initial"
                    whileHover="hover"
                    animate="initial"
                    className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl relative overflow-hidden"
                    style={{
                        boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.05), 0 8px 16px -6px rgba(0, 0, 0, 0.05)',
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
                    <div className="px-6 py-8 md:p-12 lg:p-14 text-left md:text-center">
                        {/* Headline */}
                        <h2
                            className="text-2xl md:text-4xl font-bold mb-4 tracking-tight"
                            style={{ color: '#0A1A2F' }} // Navy
                        >
                            {headline}
                        </h2>

                        {/* Subheadline */}
                        <p
                            className="text-sm md:text-lg max-w-3xl md:mx-auto mb-8 md:mb-14 leading-relaxed"
                            style={{ color: '#64748B' }} // Slate 500
                        >
                            {subheadline}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-left">
                            {features.map((feature: { title: string; description: string; icon: string; color: string }, index: number) => {
                                const Icon = getIcon(feature.icon)
                                const isGold = feature.color === 'gold'

                                return (
                                    <div key={index} className="flex items-start gap-4 lg:gap-5">
                                        <div
                                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
                                            style={{
                                                backgroundColor: isGold ? '#FFFBEB' : '#F0FDFA',
                                            }}
                                        >
                                            <Icon
                                                size={20}
                                                style={{ color: isGold ? '#D97706' : '#0D9488' }}
                                            />
                                        </div>
                                        <div>
                                            <h3
                                                className="text-lg md:text-xl font-bold mb-1"
                                                style={{ color: '#0A1A2F' }}
                                            >
                                                {feature.title}
                                            </h3>
                                            <p
                                                className="text-sm md:text-base leading-snug"
                                                style={{ color: '#64748B' }}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    )
}
