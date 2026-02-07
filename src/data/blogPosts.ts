export interface BlogPost {
    id: number
    category: 'ai-automation' | 'product-updates' | 'best-practices' | 'case-studies'
    date: string
    title: string
    excerpt: string
    image: string
    readTime: string
    author: string
    authorRole: string
    featured: boolean
}

export const blogPostsData: BlogPost[] = [
    {
        id: 1,
        category: 'ai-automation',
        date: 'February 25, 2025',
        title: 'Multimodal AI Agents: The Next Evolution in Business Automation',
        excerpt: 'Discover how multimodal AI agents that understand text, voice, and video are revolutionizing business interactions and creating unprecedented opportunities for customer engagement.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        readTime: '9 min read',
        author: 'Sarah Chen',
        authorRole: 'Head of Product',
        featured: true
    },
    {
        id: 2,
        category: 'product-updates',
        date: 'February 22, 2025',
        title: 'Introducing the AI Agent Marketplace: Deploy Industry Solutions in Minutes',
        excerpt: 'Learn how our new marketplace makes AI automation accessible to everyone, with 50+ pre-built solutions for healthcare, finance, retail, and more industries.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        readTime: '7 min read',
        author: 'Michael Rodriguez',
        authorRole: 'Product Manager',
        featured: false
    },
    {
        id: 3,
        category: 'best-practices',
        date: 'February 20, 2025',
        title: 'Building AI Agents Without Code: A Complete Guide to No-Code Automation',
        excerpt: 'Master the art of building sophisticated AI agents using our no-code platform. Learn how to create, customize, and deploy intelligent automation without writing a single line of code.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        readTime: '10 min read',
        author: 'Alex Morgan',
        authorRole: 'Implementation Specialist',
        featured: false
    },
    {
        id: 4,
        category: 'ai-automation',
        date: 'February 18, 2025',
        title: 'The Power of GPT-4 Turbo: Enhanced Intelligence in AIXcellence Agents',
        excerpt: 'Explore how OpenAI GPT-4 Turbo integration is making AIXcellence agents smarter, more context-aware, and better at understanding complex customer needs.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        readTime: '8 min read',
        author: 'David Kim',
        authorRole: 'AI Research Lead',
        featured: false
    },
    {
        id: 5,
        category: 'case-studies',
        date: 'February 15, 2025',
        title: 'Case Study: How HealthTech Solutions Transformed Patient Care with AI Agents',
        excerpt: 'Discover how a leading healthcare provider reduced patient wait times by 75% and improved satisfaction scores by implementing AIXcellence agents for scheduling and support.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        readTime: '11 min read',
        author: 'Lisa Anderson',
        authorRole: 'Solutions Architect',
        featured: false
    },
    {
        id: 6,
        category: 'product-updates',
        date: 'February 12, 2025',
        title: 'New Mobile App: Manage Your AI Agents from Anywhere, Anytime',
        excerpt: 'Get full control over your AI agents with our new mobile application. Monitor performance, adjust settings, and optimize operations—all from your smartphone.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        readTime: '6 min read',
        author: 'James Park',
        authorRole: 'Engineering Manager',
        featured: false
    },
    {
        id: 7,
        category: 'best-practices',
        date: 'February 10, 2025',
        title: 'Enterprise AI Analytics: Measuring Success with Advanced Dashboards',
        excerpt: 'Learn how to leverage advanced analytics dashboards to track ROI, optimize agent performance, and make data-driven decisions about your AI automation strategy.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        readTime: '9 min read',
        author: 'Rachel Thompson',
        authorRole: 'Business Analyst',
        featured: false
    },
    {
        id: 8,
        category: 'ai-automation',
        date: 'February 8, 2025',
        title: 'Microsoft Azure Integration: Enterprise-Grade AI Automation in the Cloud',
        excerpt: 'Explore how our strategic partnership with Microsoft Azure enables enterprise customers to deploy AI agents on world-class cloud infrastructure with enhanced security and scalability.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
        readTime: '7 min read',
        author: 'Emily Watson',
        authorRole: 'Partnership Director',
        featured: false
    },
    {
        id: 9,
        category: 'best-practices',
        date: 'February 5, 2025',
        title: 'ISO 27001 Certification: What It Means for Your Business Security',
        excerpt: 'Understand how AIXcellence\'s ISO 27001 certification ensures enterprise-grade security for your data and operations, meeting the highest international standards.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
        readTime: '8 min read',
        author: 'David Kim',
        authorRole: 'Security Lead',
        featured: false
    },
    {
        id: 10,
        category: 'ai-automation',
        date: 'February 3, 2025',
        title: 'Scaling to 5,000+ Customers: Lessons from AIXcellence\'s Growth Journey',
        excerpt: 'Insights from reaching 5,000+ enterprise customers: what we learned about scaling AI automation, customer success, and building a platform that businesses trust.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        readTime: '10 min read',
        author: 'Sarah Chen',
        authorRole: 'Head of Product',
        featured: false
    },
    {
        id: 11,
        category: 'case-studies',
        date: 'January 30, 2025',
        title: 'Case Study: FinTech Startup Scales Customer Support 10x with AI Agents',
        excerpt: 'How a fast-growing financial technology company used AIXcellence agents to handle 10x more customer inquiries without increasing headcount, while improving satisfaction.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        readTime: '9 min read',
        author: 'Lisa Anderson',
        authorRole: 'Solutions Architect',
        featured: false
    },
    {
        id: 12,
        category: 'product-updates',
        date: 'January 28, 2025',
        title: 'Global Partner Program: Empowering System Integrators to Deliver AI Solutions',
        excerpt: 'Learn about our new partner program that enables technology consultants and system integrators to deliver AIXcellence solutions with comprehensive training and support.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
        readTime: '7 min read',
        author: 'Michael Rodriguez',
        authorRole: 'Partner Success Manager',
        featured: false
    }
]
