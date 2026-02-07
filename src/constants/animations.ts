// Common animation variants for framer-motion
export const FADE_IN = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
} as const

export const FADE_IN_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
} as const

export const FADE_IN_DOWN = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 }
} as const

export const SCALE_IN = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 }
} as const

export const SLIDE_IN_LEFT = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
} as const

export const SLIDE_IN_RIGHT = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
} as const

// Common transition configs
export const TRANSITION_SMOOTH = { duration: 0.3 } as const
export const TRANSITION_MEDIUM = { duration: 0.6 } as const
export const TRANSITION_SLOW = { duration: 0.8 } as const

// Stagger children animation
export const STAGGER_CONTAINER = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
} as const
