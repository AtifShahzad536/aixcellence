export const NEWS_CATEGORIES = [
    { id: 'all', label: 'All News' },
    { id: 'announcement', label: 'Announcements' },
    { id: 'product', label: 'Product Updates' },
    { id: 'partnership', label: 'Partnerships' },
    { id: 'company', label: 'Company News' }
] as const

export type NewsCategoryId = typeof NEWS_CATEGORIES[number]['id']
