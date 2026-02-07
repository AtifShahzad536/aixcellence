export interface NewsItem {
    id: number
    category: 'announcement' | 'product' | 'partnership' | 'company'
    date: string
    title: string
    excerpt: string
    image: string
    readTime: string
    featured: boolean
}

export const newsItemsData: NewsItem[] = [
    {
        id: 1,
        category: 'announcement',
        date: 'February 20, 2025',
        title: 'AIXcellence Unveils Next-Generation AI Agent Platform with Enhanced Multimodal Capabilities',
        excerpt: 'Revolutionary update introduces voice, video, and real-time collaboration features, setting a new standard for AI-powered business automation.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        readTime: '5 min read',
        featured: true
    },
    {
        id: 2,
        category: 'product',
        date: 'February 15, 2025',
        title: 'New AI Agent Marketplace Launches with 50+ Pre-Built Industry Solutions',
        excerpt: 'Access ready-to-deploy AI agents for healthcare, finance, retail, and more. Customize and deploy in minutes, not months.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        readTime: '4 min read',
        featured: false
    },
    {
        id: 3,
        category: 'partnership',
        date: 'February 10, 2025',
        title: 'AIXcellence Announces Strategic Partnership with Microsoft Azure',
        excerpt: 'Deep integration with Azure AI services enables enterprise customers to leverage advanced AI capabilities with seamless cloud infrastructure.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        readTime: '4 min read',
        featured: false
    },
    {
        id: 4,
        category: 'announcement',
        date: 'February 5, 2025',
        title: 'AIXcellence Achieves ISO 27001 Certification for Information Security',
        excerpt: 'International recognition validates our commitment to the highest standards of data security, privacy, and information management.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        readTime: '3 min read',
        featured: false
    },
    {
        id: 5,
        category: 'product',
        date: 'January 30, 2025',
        title: 'Revolutionary AI Agent Builder: No-Code Platform for Custom Automation',
        excerpt: 'Build sophisticated AI agents without writing a single line of code. Drag-and-drop interface makes automation accessible to everyone.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        readTime: '5 min read',
        featured: false
    },
    {
        id: 6,
        category: 'company',
        date: 'January 25, 2025',
        title: 'AIXcellence Opens New Innovation Hub in San Francisco',
        excerpt: 'State-of-the-art facility will house our AI research team and serve as a collaboration center for enterprise partners and developers.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
        readTime: '3 min read',
        featured: false
    },
    {
        id: 7,
        category: 'announcement',
        date: 'January 20, 2025',
        title: 'AIXcellence Launches Global Partner Program for System Integrators',
        excerpt: 'New program empowers technology partners to deliver AIXcellence solutions, with comprehensive training, certification, and revenue-sharing opportunities.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        readTime: '4 min read',
        featured: false
    },
    {
        id: 8,
        category: 'company',
        date: 'January 15, 2025',
        title: 'AIXcellence Named "AI Innovation of the Year" by Tech Excellence Awards',
        excerpt: 'Industry recognition highlights our breakthrough contributions to AI automation and customer experience transformation across multiple sectors.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        readTime: '3 min read',
        featured: false
    },
    {
        id: 9,
        category: 'product',
        date: 'January 10, 2025',
        title: 'Advanced AI Analytics Dashboard: Real-Time Insights and Predictive Intelligence',
        excerpt: 'New analytics platform provides deep visibility into AI agent performance, customer interactions, and predictive insights for business optimization.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        readTime: '4 min read',
        featured: false
    },
    {
        id: 10,
        category: 'company',
        date: 'January 5, 2025',
        title: 'AIXcellence Surpasses 5,000+ Enterprise Customers Worldwide',
        excerpt: 'Milestone achievement reflects growing trust in AIXcellence as the leading platform for intelligent business automation and customer engagement.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        readTime: '3 min read',
        featured: false
    },
    {
        id: 11,
        category: 'partnership',
        date: 'December 28, 2024',
        title: 'Integration with OpenAI GPT-4 Turbo: Enhanced Conversational AI Capabilities',
        excerpt: 'Seamless integration brings cutting-edge language understanding to AIXcellence agents, enabling more natural and intelligent customer interactions.',
        image: 'https://images.unsplash.com/photo-1676299080920-7761a97c9b8e?w=800&h=600&fit=crop',
        readTime: '4 min read',
        featured: false
    },
    {
        id: 12,
        category: 'product',
        date: 'December 22, 2024',
        title: 'New Mobile App: Manage Your AI Agents On-the-Go',
        excerpt: 'Comprehensive mobile application allows administrators to monitor, configure, and optimize AI agents from anywhere, anytime.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        readTime: '3 min read',
        featured: false
    }
]
