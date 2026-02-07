import React from 'react'
import { motion } from 'framer-motion'

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="loading-spinner-container">
            <motion.div
                className="loading-spinner"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="80 40"
                        opacity="0.3"
                    />
                </svg>
            </motion.div>
            <p className="loading-text">Loading...</p>
        </div>
    )
}
