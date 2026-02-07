import React, { useState } from 'react'

// Safe Image Component with error handling
export function SafeImage({ src, alt, className = '', ...props }: { src: string, alt: string, className?: string, [key: string]: any }) {
    const [imageError, setImageError] = useState(false)
    const [imageLoading, setImageLoading] = useState(true)
    const defaultImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80'

    return (
        <div className={`safe-image-wrapper ${className}`} style={{ position: 'relative', overflow: 'hidden' }}>
            {imageLoading && (
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                    zIndex: 1
                }} />
            )}
            <img
                src={imageError ? defaultImage : src}
                alt={alt}
                className={className}
                onError={() => {
                    setImageError(true)
                    setImageLoading(false)
                }}
                onLoad={() => setImageLoading(false)}
                style={{
                    opacity: imageLoading ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                {...props}
            />
        </div>
    )
}
