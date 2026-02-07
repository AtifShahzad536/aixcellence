export const BLOG_CATEGORIES = [
    { id: 'all', label: 'All Posts' },
    { id: 'ai-automation', label: 'AI Automation' },
    { id: 'product-updates', label: 'Product Updates' },
    { id: 'best-practices', label: 'Best Practices' },
    { id: 'case-studies', label: 'Case Studies' }
] as const

export type BlogCategoryId = typeof BLOG_CATEGORIES[number]['id']
