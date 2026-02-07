import React, { memo, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode
    className?: string
    containerClassName?: string
    delay?: number
    noContainer?: boolean
}

export const Section = memo(forwardRef<HTMLElement, SectionProps>(({
    children,
    className = "",
    containerClassName = "container",
    delay = 0,
    noContainer = false,
    initial = { opacity: 0, y: 20 },
    whileInView = { opacity: 1, y: 0 },
    viewport = { once: true, margin: "-50px" },
    transition = { duration: 0.6 },
    ...props
}, ref) => {
    return (
        <motion.section
            ref={ref}
            className={className}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ...transition, delay }}
            {...props}
        >
            {noContainer ? children : (
                <div className={containerClassName}>
                    {children}
                </div>
            )}
        </motion.section>
    )
}))

Section.displayName = 'Section'
