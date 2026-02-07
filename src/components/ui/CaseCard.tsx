import React, { memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SafeImage } from './SafeImage'

const MotionLink = motion(Link)

interface CaseResult {
    icon: React.ComponentType<{ size?: number }>
    value: string
    label: string
}

interface CaseCardProps {
    id: number | string
    image: string
    industry: string
    company: string
    title: string
    excerpt: string
    results: CaseResult[]
    index: number
}


export const CaseCard = memo<CaseCardProps>(({
    id,
    image,
    industry,
    company,
    title,
    excerpt,
    results,
    index
}) => {
    return (
        <motion.article
            className="case-card-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
        >
            <div className="case-image-wrapper">
                <SafeImage src={image} alt={title} className="case-image" />
                <div className="case-industry-badge">{industry}</div>
            </div>
            <div className="case-content">
                <div className="case-company">{company}</div>
                <h3 className="case-title">{title}</h3>
                <p className="case-excerpt">{excerpt}</p>

                <div className="case-results-mini">
                    {results.map((res, ridx) => (
                        <div key={ridx} className="mini-result">
                            <res.icon size={16} />
                            <div className="mini-result-info">
                                <span className="mini-value">{res.value}</span>
                                <span className="mini-label">{res.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <MotionLink
                    to={`/portfolio/${id}`}
                    className="casestudies-read-more"
                    whileHover={{ x: 4 }}
                >
                    Read Full Case Study
                    <ArrowRight size={16} />
                </MotionLink>
            </div>
        </motion.article>
    )
})

CaseCard.displayName = 'CaseCard'
