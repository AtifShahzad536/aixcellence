export const INDUSTRIES = [
    { id: 'all', label: 'All Industries' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'retail', label: 'Retail' },
    { id: 'logistics', label: 'Logistics' },
    { id: 'edtech', label: 'EdTech' },
    { id: 'legaltech', label: 'LegalTech' }
] as const

export type IndustryId = typeof INDUSTRIES[number]['id']
