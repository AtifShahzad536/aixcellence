import { Zap, TrendingUp, Users, Target, Rocket, Clock, Shield, Award, Calendar, CheckCircle2, DollarSign, MessageSquare, BarChart3 } from 'lucide-react'

export interface CaseStudyResult {
    icon: any
    label: string
    value: string
}

export interface CaseStudy {
    id: number
    industry: string
    company: string
    title: string
    excerpt: string
    image: string
    results: CaseStudyResult[]
}

export const caseStudiesData: CaseStudy[] = [
    {
        id: 1,
        industry: 'healthcare',
        company: 'HealthTech Solutions',
        title: '75% Reduction in Patient Wait Times with AI-Powered Scheduling',
        excerpt: 'HealthTech Solutions transformed patient care by implementing AIXcellence\'s AI solution for appointment management, reducing wait times from 2 days to under 2 hours while improving satisfaction scores from 68% to 92%.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        results: [
            { icon: Clock, label: 'Wait Time Reduction', value: '75%' },
            { icon: TrendingUp, label: 'Patient Satisfaction', value: '+35%' },
            { icon: Users, label: 'Staff Efficiency', value: '2.4x' }
        ]
    },
    {
        id: 2,
        industry: 'fintech',
        company: 'Global Capital Finance',
        title: 'Automated Loan Processing and Compliance for Global Capital Finance',
        excerpt: 'We helped Global Capital Finance automate their complex loan processing and compliance workflows, reducing manual errors by 94% and cutting processing time from 3 days to 15 minutes while ensuring 100% regulatory compliance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        results: [
            { icon: Zap, label: 'Processing Speed', value: '12x' },
            { icon: Shield, label: 'Manual Error Reduction', value: '94%' },
            { icon: Award, label: 'Compliance Audit', value: '100%' }
        ]
    },
    {
        id: 3,
        industry: 'retail',
        company: 'FashionForward',
        title: 'Personalized AI Shopping Assistants Increase Conversion by 45%',
        excerpt: 'FashionForward implemented our multimodal AI agents as personalized shopping assistants, resulting in a 45% increase in conversion rates and a 20% increase in average order value through intelligent product recommendations.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
        results: [
            { icon: DollarSign, label: 'Conversion Increase', value: '45%' },
            { icon: TrendingUp, label: 'Avg Order Value', value: '+20%' },
            { icon: Users, label: 'Customer Retention', value: '+28%' }
        ]
    },
    {
        id: 4,
        industry: 'logistics',
        company: 'SwiftLogistics',
        title: 'AI-Driven Route Optimization and Fleet Management for SwiftLogistics',
        excerpt: 'SwiftLogistics optimized their entire delivery network using AIXcellence\'s predictive analytics and route optimization agents, reducing fuel costs by 22% and improving on-time delivery rates to 99.8%.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop',
        results: [
            { icon: BarChart3, label: 'Fuel Cost Savings', value: '22%' },
            { icon: Calendar, label: 'On-Time Delivery', value: '99.8%' },
            { icon: Rocket, label: 'Efficiency Gain', value: '+31%' }
        ]
    },
    {
        id: 5,
        industry: 'edtech',
        company: 'EduSpark Academy',
        title: 'Scalable AI Tutoring for 50,000+ Students Globally',
        excerpt: 'EduSpark Academy leveraged our AI agents to provide 24/7 personalized tutoring support to over 50,000 students worldwide, maintaining a 4.9/5 student satisfaction rating while reducing support costs by 65%.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
        results: [
            { icon: MessageSquare, label: 'Support Cost Reduction', value: '65%' },
            { icon: Award, label: 'Satisfaction Rating', value: '4.9/5' },
            { icon: Target, label: 'Student Progress', value: '+42%' }
        ]
    },
    {
        id: 6,
        industry: 'legaltech',
        company: 'JusticeConnect',
        title: 'AI Document Review and Analysis Platform for JusticeConnect',
        excerpt: 'We built a high-performance legal document review platform for JusticeConnect that uses AI to analyze thousands of documents in minutes, saving their legal teams over 4,000 hours of manual work per month.',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
        results: [
            { icon: Clock, label: 'Hours Saved Monthly', value: '4000+' },
            { icon: CheckCircle2, label: 'Analysis Accuracy', value: '99.9%' },
            { icon: TrendingUp, label: 'Case Lead Time', value: '-60%' }
        ]
    }
]
