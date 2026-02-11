import {
    X, Layers, Zap, Cpu, Phone, MessageSquare, FileText, TrendingUp, Mic, Video, Lock, BarChart3, Settings, DollarSign,
    Heart, GraduationCap, Car, ShoppingCart, Building2, Award, Newspaper, BookOpen, FileText as CaseStudy, Menu, Users, PlayCircle
} from 'lucide-react'

export interface NavItem {
    label: string
    path: string
    icon?: any
    description?: string
    badge?: string
}

export interface NavSection {
    title: string
    items: NavItem[]
    badge?: string
    className?: string
}

export const NAVIGATION_DATA = {
    platform: {
        title: 'Platform',
        items: [
            { label: 'AIX One Platform', path: '/platform', icon: Layers, badge: 'Soon' },
            { label: 'See in Action', path: '/#platform-action', icon: PlayCircle }
        ]
    },
    services: {
        title: 'Services',
        items: [
            { label: 'AI Development', path: '/services/ai-development', icon: Zap },
            { label: 'AI Models & Integrations', path: '/services/ai-models-integrations', icon: Cpu },
            { label: 'Software Development', path: '/services/software-development', icon: Layers },
            { label: 'Mobile Apps Development', path: '/services/mobile-apps-development', icon: Phone }
        ]
    },
    features: {
        title: 'Features',
        items: [
            { label: 'AI Chatbots & Assistants', path: '/features', icon: MessageSquare, description: 'Context-aware, multi-turn conversations' },
            { label: 'Document Intelligence', path: '/features', icon: FileText, description: 'PDF/Doc analysis, summarization, Q&A' },
            { label: 'Content Generation', path: '/features', icon: Zap, description: 'Blogs, emails, brand-voice copy' },
            { label: 'Smart Recommendations', path: '/features', icon: TrendingUp, description: 'Personalized suggestions, behavior-based predictions' },
            { label: 'Voice AI Agents', path: '/features', icon: Mic, description: 'Natural speech-to-text & text-to-speech for calls' },
            { label: 'Computer Vision', path: '/features', icon: Video, description: 'Image recognition, object detection, video analysis' },
            { label: 'Security & Compliance', path: '/features', icon: Lock, description: 'Enterprise-grade data protection' },
            { label: 'Analytics Dashboard', path: '/features', icon: BarChart3, description: 'Real-time insights on AI usage & ROI' },
            { label: 'Custom Workflows', path: '/features', icon: Settings, description: 'Drag-and-drop automation builder' },
            { label: 'Cost Optimization', path: '/features', icon: DollarSign, description: 'Monitor & control AI token usage' }
        ]
    },
    solutions: {
        title: 'Solutions',
        industries: [
            { label: 'Healthcare', path: '/solutions', icon: Heart },
            { label: 'Education', path: '/solutions', icon: GraduationCap },
            { label: 'Finance', path: '/solutions', icon: DollarSign },
            { label: 'Automotive', path: '/solutions', icon: Car },
            { label: 'E-commerce', path: '/solutions', icon: ShoppingCart },
            { label: 'Real Estate', path: '/solutions', icon: Building2 }
        ],
        useCases: [
            { label: 'Customer Support', path: '/solutions', icon: MessageSquare, description: '24/7 automated support' },
            { label: 'Sales Automation', path: '/solutions', icon: TrendingUp, description: 'Lead scoring & outreach' },
            { label: 'HR & Recruiting', path: '/solutions', icon: Users, description: 'Candidate screening & onboarding' }, // Fixed Users import below
            { label: 'Marketing', path: '/solutions', icon: Zap, description: 'Content & campaign generation' },
            { label: 'Legal Analysis', path: '/solutions', icon: FileText, description: 'Contract review & compliance' },
            { label: 'Supply Chain', path: '/solutions', icon: Layers, description: 'Inventory & logistics optimization' }
        ]
    },
    resources: {
        company: [
            { label: 'About Us', path: '/about', icon: Building2 },
            { label: 'Why Choose Us', path: '/about', icon: Award },
            { label: 'Security', path: '/security', icon: Lock },
            { label: 'Contact', path: '/contact', icon: Phone }
        ],
        learn: [
            { label: 'Newsroom', path: '/news', icon: Newspaper, description: 'Latest updates & announcements' },
            { label: 'Blog', path: '/blog', icon: BookOpen, description: 'Insights, guides & best practices' },
            { label: 'Case Studies', path: '/portfolio', icon: CaseStudy, description: 'Real-world transformation stories' },
            { label: 'Help Center', path: '/guide', icon: MessageSquare, description: 'Documentation & support' }
        ]
    }
}
