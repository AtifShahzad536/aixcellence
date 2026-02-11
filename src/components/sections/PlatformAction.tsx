import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Users, Calendar, CheckCircle, BarChart3, TrendingUp, ArrowRight, Zap, LucideIcon } from 'lucide-react'
import { Section } from '../ui/Section'

interface StatCardProps {
    label: string
    value: string
    subtextText: string
    subtextTrend?: string
    icon: LucideIcon
}

const StatCard: React.FC<StatCardProps> = ({ label, value, subtextText, subtextTrend, icon: Icon }) => (
    <motion.div
        className="action-stat-card"
        initial="initial"
        whileHover="hover"
        animate="initial"
    >
        {/* Animated Top Line */}
        <motion.div
            className="card-top-line"
            variants={{
                initial: { scaleX: 0, opacity: 0 },
                hover: { scaleX: 1, opacity: 1 }
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ originX: 0.5 }}
        />

        <div className="stat-content">
            <span className="stat-label">{label}</span>
            <h3 className="stat-value">{value}</h3>
            <div className="stat-subtext">
                {subtextTrend && <span className="stat-trend">{subtextTrend}</span>}
                <span className="stat-desc">{subtextText}</span>
            </div>
        </div>
        <div className="stat-icon-wrapper">
            <Icon size={24} className="stat-icon" />
        </div>
    </motion.div>
)

interface ActionTab {
    id: string
    label: string
    icon: LucideIcon
    stats: StatCardProps[]
    agentTitle: string
    agentDesc: string
    agentButton: string
}

const ACTION_TABS: ActionTab[] = [
    {
        id: 'marketing',
        label: 'Marketing',
        icon: Target,
        stats: [
            {
                label: 'Active Campaigns',
                value: '24',
                subtextTrend: '+47%',
                subtextText: 'vs last month',
                icon: Target
            },
            {
                label: 'Total Reach',
                value: '128.5K',
                subtextTrend: '',
                subtextText: 'Conversion rate: 12.8%',
                icon: Users
            }
        ],
        agentTitle: 'ARA Agent: Intelligent Marketing Optimization',
        agentDesc: 'ARA Agent analyzed customer behavior patterns and identified peak engagement times. Optimizing email campaigns to 10 AM EST and 2 PM PST is predicted to increase open rates by 18% and click-through rates by 23%.',
        agentButton: 'Apply AI Recommendation'
    },
    {
        id: 'bookings',
        label: 'Bookings',
        icon: Calendar,
        stats: [
            {
                label: 'Scheduled Today',
                value: '47',
                subtextTrend: '',
                subtextText: '3 pending confirmation',
                icon: Calendar
            },
            {
                label: 'Success Rate',
                value: '97%',
                subtextTrend: '',
                subtextText: '312 completed this month',
                icon: CheckCircle
            }
        ],
        agentTitle: 'ARA Agent: Automated Booking Intelligence',
        agentDesc: 'ARA Agent detected optimal scheduling patterns across time zones. Auto-optimization has reduced no-shows by 42% and increased booking efficiency by 68%. Smart reminders sent 24 hours and 2 hours before appointments.',
        agentButton: 'View Calendar Dashboard'
    },
    {
        id: 'analytics',
        label: 'Analytics',
        icon: BarChart3,
        stats: [
            {
                label: 'Data Points Processed',
                value: '1.2M',
                subtextTrend: '+12%',
                subtextText: 'real-time streams',
                icon: BarChart3
            },
            {
                label: 'Efficiency Gain',
                value: '34%',
                subtextTrend: '',
                subtextText: 'Operational cost reduced',
                icon: TrendingUp
            }
        ],
        agentTitle: 'AXE Agent: Predictive Operational Insights',
        agentDesc: 'Global data monitoring identified upcoming supply chain bottlenecks. Predictive rerouting of 3 logistics hubs is estimated to prevent up to $45K in potential delays over the next quarter while maintaining 99.8% uptime.',
        agentButton: 'Analyze Full Report'
    }
]

export function PlatformAction() {
    const [activeTab, setActiveTab] = useState(ACTION_TABS[0])

    return (
        <Section className="platform-action-section">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <h2 className="section-title-gradient mb-4">See The AIX One in Action</h2>
                    <p className="section-subtitle">
                        Watch how AIX One Platform orchestrates ARA and AXE agents to automate
                        marketing, manage bookings, and deliver predictive insights—all working together seamlessly
                    </p>
                </div>

                <div className="action-tabs-container mb-12">
                    <div className="action-tabs">
                        {ACTION_TABS.map((tab) => {
                            const TabIcon = tab.icon
                            return (
                                <button
                                    key={tab.id}
                                    className={`action-tab-btn ${activeTab.id === tab.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    <TabIcon size={18} />
                                    <span>{tab.label}</span>
                                    {activeTab.id === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="tab-active-bg"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="action-content-wrapper">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="action-visual-grid"
                        >
                            <div className="stats-cards-grid">
                                {activeTab.stats.map((stat, idx) => (
                                    <StatCard key={idx} {...stat} />
                                ))}
                            </div>

                            <div className="agent-detail-card">
                                <div className="agent-card-header">
                                    <Zap size={20} className="agent-icon" />
                                    <h4 className="agent-card-title">{activeTab.agentTitle}</h4>
                                </div>
                                <p className="agent-card-desc">{activeTab.agentDesc}</p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="agent-action-btn"
                                >
                                    {activeTab.agentButton}
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="section-footer-cta mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-sales"
                    >
                        <span>Start Your Free Trial</span>
                        <span className="arrow-button">
                            <ArrowRight size={16} />
                        </span>
                    </motion.button>
                </div>
            </div>
        </Section>
    )
}
