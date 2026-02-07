import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { FAQ_DATA } from '../../constants/landing'

export function FAQ() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = FAQ_DATA

    return (
        <React.Fragment>
            <div id="faq" style={{ position: 'relative', top: '-100px' }} />
            <Section
                className="section faq-section"
                id="guide"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        className="section-sub"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        Everything you need to know about AIXcellence
                    </motion.p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            className={`faq-item ${openIndex === idx ? 'open' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                            <motion.button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                whileHover={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}
                            >
                                <span>{faq.question}</span>
                                <motion.svg
                                    className="faq-icon"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <path
                                        d="M5 7.5L10 12.5L15 7.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </motion.svg>
                            </motion.button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                                {faq.articleLink && (
                                    <motion.a href={faq.articleLink} className="faq-article-link" whileHover={{ x: 4, scale: 1.02 }}>
                                        <BookOpen size={16} />
                                        <span>Read related article</span>
                                        <ArrowRight size={14} />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </React.Fragment>
    )
}
