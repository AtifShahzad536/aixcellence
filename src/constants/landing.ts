import { Award, Zap, Shield, TrendingUp, Rocket, Users, Clock, Target, Calendar, CheckCircle2, DollarSign, MessageSquare, BarChart3, Bot, Cpu, Layers, Phone, Building2, Heart, GraduationCap, Car, ShoppingCart, FileText } from 'lucide-react'

export const WHY_CHOOSE_US_REASONS = [
    {
        icon: Zap,
        title: 'Lightning-Fast Implementation',
        description: 'Launch rapidly, not leisurely. Our services ensure swift deployment, getting you operational in days, not months, with minimal setup time.',
    },
    {
        icon: Shield,
        title: 'Enterprise-Grade Security',
        description: 'SOC 2 Type II certified with bank-level encryption. Your data is protected with industry-leading security measures.',
    },
    {
        icon: TrendingUp,
        title: 'Proven ROI',
        description: 'Experience tangible returns. Our solutions consistently deliver an average 65% cost reduction and 50% boost in customer satisfaction, with measurable results visible within weeks.',
    },
    {
        icon: Rocket,
        title: 'Scalable Solutions',
        description: 'Grow without limits. Our services scale seamlessly with your business needs, handling thousands of operations simultaneously.',
    },
    {
        icon: Users,
        title: 'Expert Team',
        description: 'Work with experienced developers and AI specialists who understand your business needs and deliver exceptional results.',
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description: 'Comprehensive support and maintenance. Our team is always available to ensure your solutions run smoothly.',
    }
]

export const WHY_CHOOSE_US_STATS = [
    {
        type: 'stat',
        icon: Target,
        label: 'Active Campaigns',
        value: '24',
        footer: '+47% vs last month',
        color: '#18CBBE'
    },
    {
        type: 'stat',
        icon: Users,
        label: 'Total Reach',
        value: '128.5K',
        footer: '12.8% conversion rate',
        color: '#0A1A2F'
    },
    {
        type: 'stat',
        icon: Calendar,
        label: 'Scheduled Today',
        value: '47',
        footer: '3 pending confirmation',
        color: '#18CBBE'
    },
    {
        type: 'stat',
        icon: CheckCircle2,
        label: 'Success Rate',
        value: '97%',
        footer: '312 completed this month',
        color: '#10b981'
    },
    {
        type: 'stat',
        icon: DollarSign,
        label: 'Monthly Revenue',
        value: '$342.8K',
        footer: '+58% growth this quarter',
        color: '#eab308'
    },
    {
        type: 'stat',
        icon: Users,
        label: 'Active Customers',
        value: '487',
        footer: '1.3% churn rate',
        color: '#0A1A2F'
    },
    {
        type: 'featured',
        icon: MessageSquare,
        title: 'Intelligent Marketing Optimization',
        text: 'Our AI systems analyzed customer behavior patterns and identified peak engagement times. Optimizing email campaigns to 10 AM EST and 2 PM PST is predicted to increase open rates by 18% and click-through rates by 23%.',
        color: '#18CBBE'
    },
    {
        type: 'featured',
        icon: Calendar,
        title: 'Automated Booking Intelligence',
        text: 'Our AI systems detected optimal scheduling patterns across time zones. Auto-optimization has reduced no-shows by 42% and increased booking efficiency by 68%.',
        color: '#18CBBE'
    },
    {
        type: 'featured',
        icon: BarChart3,
        title: 'Predictive Business Intelligence',
        text: 'AIX One Platform predicts Q2 revenue will reach $1.2M based on current growth trends, seasonal patterns, and customer acquisition velocity.',
        color: '#18CBBE'
    }
]


export const SERVICES_OVERVIEW_DATA = [
    {
        title: 'AI Development',
        description: 'Crafting bespoke AI solutions that transform your business. From intelligent automation to insightful predictive analytics, we build AI systems designed for measurable impact.',
        icon: Bot,
        href: '/services/ai-development',
        color: '#18CBBE',
        features: [
            'AI Chatbots & Assistants',
            'Machine Learning Models',
            'Predictive Analytics',
            'Document Intelligence',
            'Computer Vision',
            'Voice & Audio AI'
        ],
        benefits: [
            'Automate repetitive tasks and processes',
            'Gain actionable insights from your data',
            'Enhance customer experiences with AI',
            'Scale operations without scaling costs'
        ]
    },
    {
        title: 'AI Models & Integrations',
        description: 'Seamlessly integrating state-of-the-art AI models into your core systems. We empower your operations with the industry\'s most advanced AI technologies.',
        icon: Cpu,
        href: '/services/ai-models-integrations',
        color: '#0A1A2F',
        features: [
            'LLM Integration (GPT, Claude, Gemini)',
            'API Integration & Development',
            'Platform Integration (CRM, ERP)',
            'Custom Connectors',
            'Security & Compliance',
            'Monitoring & Analytics'
        ],
        benefits: [
            'Connect AI to your existing infrastructure',
            'Leverage best-in-class AI models',
            'Ensure secure and compliant integrations',
            'Monitor performance and costs'
        ]
    },
    {
        title: 'Software Development',
        description: 'Delivering robust, full-stack software solutions engineered with modern technologies. Built for scalability, unwavering security, and future-proof growth.',
        icon: Layers,
        href: '/services/software-development',
        color: '#18CBBE',
        features: [
            'Web Application Development',
            'Backend Development & APIs',
            'Enterprise Software',
            'Cloud Solutions (AWS, Azure, GCP)',
            'DevOps & Infrastructure',
            'Maintenance & Support'
        ],
        benefits: [
            'Build scalable applications',
            'Modern tech stack and best practices',
            'Enterprise-grade security',
            'Ongoing support and maintenance'
        ]
    },
    {
        title: 'Mobile Apps Development',
        description: 'Developing intuitive native and cross-platform mobile applications that captivate users on both iOS and Android. Experience excellence in every tap.',
        icon: Phone,
        href: '/services/mobile-apps-development',
        color: '#0A1A2F',
        features: [
            'iOS App Development',
            'Android App Development',
            'Cross-Platform (React Native, Flutter)',
            'UI/UX Design',
            'App Maintenance',
            'Analytics & Testing'
        ],
        benefits: [
            'Native performance and feel',
            'Reach users on all platforms',
            'Beautiful, intuitive interfaces',
            'Continuous updates and support'
        ]
    }
]


export const INDUSTRIES_DATA = [
    {
        name: 'HealthTech',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
        description: 'Transform healthcare delivery with AI-powered patient engagement, automated scheduling, and intelligent document processing.',
        solutions: ['Patient Scheduling', 'Document Intelligence', '24/7 Support', 'Telemedicine'],
        color: '#18CBBE'
    },
    {
        name: 'EdTech',
        icon: GraduationCap,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
        description: 'Enhance learning experiences with AI tutors, automated content generation, and streamlined administrative processes.',
        solutions: ['AI Tutors', 'Content Generation', 'Student Support', 'Administrative Automation'],
        color: '#0A1A2F'
    },
    {
        name: 'Logistics',
        icon: Car,
        image: 'https://images.unsplash.com/photo-1601581875037-8b1c0c91c5b3?w=800&h=600&fit=crop',
        description: 'Optimize supply chains with intelligent route planning, real-time tracking, and automated inventory management.',
        solutions: ['Route Optimization', 'Delivery Tracking', 'Inventory Management', 'Supply Chain Automation'],
        color: '#18CBBE'
    },
    {
        name: 'Retail',
        icon: ShoppingCart,
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        description: 'Elevate customer experiences with personalized recommendations, AI chatbots, and automated order processing.',
        solutions: ['AI Chatbots', 'Personalized Recommendations', 'Order Automation', 'Inventory Management'],
        color: '#0A1A2F'
    },
    {
        name: 'LawTech',
        icon: FileText,
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
        description: 'Streamline legal operations with AI-powered document analysis, case research automation, and client intake systems.',
        solutions: ['Document Analysis', 'Case Research', 'Client Intake', 'Contract Review'],
        color: '#18CBBE'
    },
    {
        name: 'SaaS / Software Startups',
        icon: Cpu,
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        description: 'Scale your SaaS platform with intelligent customer support, automated onboarding, and data-driven insights.',
        solutions: ['Customer Support', 'Product Onboarding', 'Feature Recommendations', 'Analytics Automation'],
        color: '#0A1A2F'
    },
    {
        name: 'FinTech',
        icon: DollarSign,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        description: 'Secure financial services with automated onboarding, fraud detection, and intelligent document processing.',
        solutions: ['Customer Onboarding', 'Fraud Detection', 'Document Processing', 'Investment Advisory'],
        color: '#18CBBE'
    }
]

export const CLIENT_TESTIMONIALS_DATA = [
    {
        name: 'Jennifer Martinez',
        role: 'Chief Marketing Officer',
        company: 'GrowthTech Solutions',
        image: 'https://ui-avatars.com/api/?name=Jennifer+Martinez&background=18CBBE&color=fff&size=120&bold=true',
        quote: 'AIXcellence has revolutionized our customer engagement. The AI agents handle complex queries with precision, and our customer satisfaction has reached an all-time high. The ROI has been exceptional.',
        rating: 5,
        industry: 'Technology Services'
    },
    {
        name: 'Robert Kim',
        role: 'Founder & CEO',
        company: 'EcoVenture Capital',
        image: 'https://ui-avatars.com/api/?name=Robert+Kim&background=0E4B8E&color=fff&size=120&bold=true',
        quote: 'The level of automation we\'ve achieved is remarkable. Our team can now focus on strategic initiatives while AIXcellence handles routine operations flawlessly. It\'s been a game-changer for our business.',
        rating: 5,
        industry: 'Financial Services'
    },
    {
        name: 'Lisa Thompson',
        role: 'Operations Manager',
        company: 'RetailMax Pro',
        image: 'https://ui-avatars.com/api/?name=Lisa+Thompson&background=D4AF3F&color=fff&size=120&bold=true',
        quote: 'Implementing AIXcellence was seamless. Within weeks, we saw significant improvements in our operational efficiency. The support team is outstanding, and the platform is incredibly intuitive.',
        rating: 5,
        industry: 'Retail & E-commerce'
    },
    {
        name: 'James Wilson',
        role: 'VP of Customer Success',
        company: 'CloudScale Dynamics',
        image: 'https://ui-avatars.com/api/?name=James+Wilson&background=0A1A2F&color=fff&size=120&bold=true',
        quote: 'The AI agents integrate perfectly with our existing systems. We\'ve reduced response times by 85% and increased customer retention significantly. Highly recommend AIXcellence to any growing business.',
        rating: 5,
        industry: 'Cloud Services'
    },
    {
        name: 'Maria Garcia',
        role: 'Director of Sales',
        company: 'InnovateNow Inc',
        image: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=18CBBE&color=fff&size=120&bold=true',
        quote: 'Our sales team productivity has increased dramatically. The AI-powered insights help us identify opportunities faster, and the automated follow-ups ensure we never miss a lead. Outstanding results!',
        rating: 5,
        industry: 'Sales & Marketing'
    },
    {
        name: 'Thomas Anderson',
        role: 'CTO',
        company: 'DataFlow Systems',
        image: 'https://ui-avatars.com/api/?name=Thomas+Anderson&background=0E4B8E&color=fff&size=120&bold=true',
        quote: 'The technical capabilities of AIXcellence are impressive. The AI agents handle complex technical support with accuracy, and our development team can focus on innovation. Excellent platform.',
        rating: 5,
        industry: 'Software Development'
    }
]

export const FAQ_DATA = [
    {
        question: 'What is AIXcellence and how does it work?',
        answer: 'AIXcellence is an AI-powered platform that provides intelligent agents to automate your business operations. Our agents handle customer communications, bookings, marketing campaigns, and analytics — all while learning and improving over time. Simply configure your preferences, and the AI agents start working immediately.',
        articleLink: '#blog-1'
    },
    {
        question: 'Do I need technical knowledge to use AIXcellence?',
        answer: 'Not at all! AIXcellence is designed for business owners and teams without technical backgrounds. Our No-Code AI Agent Builder features an intuitive drag-and-drop interface, and setup takes just minutes. Our AI agents are pre-trained and ready to work — no coding, no complex configurations required. You can build sophisticated AI agents visually without writing a single line of code.',
        articleLink: '#blog-3'
    },
    {
        question: 'How secure is my business data?',
        answer: 'Security is our top priority. We use bank-level encryption, comply with industry standards including ISO 27001 and SOC 2 Type II certifications, and implement robust data protection measures. Your data is encrypted in transit and at rest, and we never share your information with third parties. Enterprise-grade security is built into every aspect of our platform.',
        articleLink: '#blog-9'
    },
    {
        question: 'Can AIXcellence integrate with my existing tools?',
        answer: 'Yes! AIXcellence integrates seamlessly with popular business tools including CRM systems (Salesforce, HubSpot, Zoho), email platforms, calendar apps, social media channels, and payment processors. We also have strategic partnerships with Microsoft Azure for enterprise deployments. Our agents can work across multiple platforms simultaneously, creating a unified workflow for your business.',
        articleLink: '#blog-8'
    },
    {
        question: 'What is the AI Agent Marketplace?',
        answer: 'The AI Agent Marketplace offers 50+ pre-built industry solutions that can be customized and deployed in minutes. Instead of months of custom development, businesses can choose from ready-to-deploy solutions for healthcare, finance, retail, education, and more. Each solution is pre-configured with industry best practices and can be customized to match your specific needs.',
        articleLink: '#blog-2'
    },
    {
        question: 'What are multimodal AI agents?',
        answer: 'Multimodal AI agents can understand and respond through text, voice, and video simultaneously. They can seamlessly switch between communication modes based on customer preferences and maintain context across all channels. This creates more natural, effective interactions that feel genuinely intelligent rather than scripted.',
        articleLink: '#blog-1'
    },
    {
        question: 'How quickly will I see results?',
        answer: 'Most businesses see immediate improvements in response times and efficiency. Within the first week, you\'ll notice faster customer responses and reduced manual workload. Significant growth metrics — like increased bookings and engagement — typically appear within 2-4 weeks as the AI agents optimize their performance. Our Advanced Analytics Dashboard helps you track ROI and measure results in real-time.',
        articleLink: '#blog-7'
    },
    {
        question: 'Can I build custom AI agents without coding?',
        answer: 'Absolutely! Our No-Code AI Agent Builder allows anyone to build sophisticated AI agents using a visual drag-and-drop interface. You can design conversation flows, configure responses, set up integrations, and customize behavior — all without writing code. Pre-built templates and comprehensive documentation make it easy to get started.',
        articleLink: '#blog-3'
    },
    {
        question: 'What kind of support do you provide?',
        answer: 'We offer comprehensive support including onboarding assistance, 24/7 technical support, regular platform updates, and dedicated account management for enterprise clients. Our team is committed to ensuring your success with AIXcellence, and we provide resources, tutorials, video guides, and direct support whenever you need it. Enterprise customers also have access to our mobile app for on-the-go management.',
        articleLink: '#blog-6'
    },
    {
        question: 'How does GPT-4 Turbo integration enhance AI agents?',
        answer: 'Our integration with OpenAI GPT-4 Turbo brings cutting-edge language understanding to AIXcellence agents. This enables more natural conversations, better context awareness, improved reasoning capabilities, and enhanced emotional intelligence. Agents can handle complex queries more effectively and provide more accurate, helpful responses.',
        articleLink: '#blog-4'
    },
    {
        question: 'What industries do you serve?',
        answer: 'We serve businesses across diverse industries including HealthTech, EdTech, Logistics, Retail, LawTech, SaaS/Software Startups, and FinTech. Our AI Agent Marketplace includes pre-built solutions for these industries, and we also offer custom development for specialized requirements. Each industry solution is designed by experts who understand unique challenges and workflows.',
        articleLink: '#cases'
    },
    {
        question: 'How do I measure ROI from AI automation?',
        answer: 'Our Advanced AI Analytics Dashboard provides comprehensive insights into AI agent performance, customer interactions, and business impact. You can track cost savings, revenue increases, efficiency gains, customer satisfaction improvements, and other financial metrics. The dashboard includes predictive intelligence and custom reporting to help you demonstrate ROI and optimize performance.',
        articleLink: '#blog-7'
    },
    {
        question: 'Can I manage AI agents from mobile devices?',
        answer: 'Yes! Our mobile application for iOS and Android provides full access to AI agent management features. You can monitor performance, adjust settings, view analytics, and optimize operations from anywhere, at any time. Push notifications keep you informed about important events, and offline capabilities allow you to view cached data when connectivity is limited.',
        articleLink: '#blog-6'
    },
    {
        question: 'What is the difference between standard products and custom solutions?',
        answer: 'Our standard products are perfect for common use cases and can be deployed quickly. Custom solutions are ideal when you need specialized functionality, industry-specific knowledge, or integration with proprietary systems. Many businesses use a hybrid approach: standard products for common functions and custom development for specialized needs.',
        articleLink: '#custom-services'
    },
    {
        question: 'How does the Global Partner Program work?',
        answer: 'Our Global Partner Program empowers system integrators, technology consultants, and solution providers to deliver AIXcellence solutions. Partners receive comprehensive training, certification programs, sales and marketing support, technical resources, and revenue-sharing opportunities. Multiple partner tiers provide a clear path for growth.',
        articleLink: '#blog-12'
    }
]

export const CTA_SECTION_DATA = {
    badge: 'Get Started Today',
    title: 'Ready to Transform Your Business?',
    subtitle: "We're building something revolutionary — and we want you to be part of it. Join our early access program and help shape the future of AI-powered business automation. Whether you need our ready-to-use AI agents or custom solutions tailored to your business, we're here to help. Get priority access, exclusive features, and direct input on what we build next.",
    buttons: [
        {
            text: 'Get Early Access',
            href: '/contact',
            variant: 'primary'
        },
        {
            text: 'Schedule a Call',
            href: '/contact',
            variant: 'secondary'
        }
    ],
    features: [
        'Be among the first to experience it',
        'Influence product development',
        'Exclusive early-bird pricing'
    ]
}

export const HERO_DATA = {
    badge: 'Where AI meets excellence',
    headline: 'Transform Your Vision Into',
    gradientText: 'Intelligent Reality',
    subheadline: 'We craft bespoke AI solutions that elevate your business to new heights. From intelligent features to complete MVPs solutions, we deliver excellence.',
    buttons: [
        {
            text: 'Get Started',
            href: '/contact',
            variant: 'primary',
            icon: true
        },
        {
            text: 'Watch Demo',
            href: '/contact',
            variant: 'secondary',
            icon: false
        }
    ],
    trustIndicators: [
        {
            text: 'Enterprise-grade security',
            dotColor: 'hero-trust-dot-teal'
        },
        {
            text: 'AI-powered insights',
            dotColor: 'hero-trust-dot-navy'
        }
    ]
}

export const AI_PLATFORM_DATA = {
    badge: 'OUR PLATFORM',
    headline: 'Meet AIX1 Your Complete\nBusiness Automation\nPlatform',
    subheadline: 'The all-in-one AI Automation & CRM platform that captures leads, books appointments, sends reminders, manages pipelines, replies to customers, and runs your operations 24/7 without increasing team size.',
    features: [
        { label: 'Lead Capture & Management', icon: 'Magnet' },
        { label: 'Smart Appointment Booking', icon: 'Calendar' },
        { label: 'AI Customer Communication', icon: 'MessageSquare' },
        { label: 'Pipeline Management', icon: 'TrendingUp' },
        { label: 'Team Collaboration', icon: 'Users2' },
        { label: 'Enterprise Security', icon: 'ShieldCheck' }
    ],
    buttons: [
        {
            text: 'Explore AIX1 Platform',
            href: '/platform',
            variant: 'primary'
        },
        {
            text: 'Get a Demo',
            href: '/contact',
            variant: 'secondary'
        }
    ]
}

export const NO_TECH_DATA = {
    headline: "No Technical Knowledge Required",
    subheadline: "Configure once. Scale forever.\nYour AI team speaks in your tone, stays on schedule, and needs zero technical setup.",
    features: [
        {
            title: "Always On Brand",
            description: "Consistent tone and messaging",
            icon: "Sparkles",
            color: "teal"
        },
        {
            title: "Always Ready",
            description: "Deploy instantly, no delays",
            icon: "Clock",
            color: "teal"
        },
        {
            title: "Zero Training",
            description: "Ready to deploy instantly",
            icon: "Globe",
            color: "gold"
        }
    ]
}

export const CUTTING_EDGE_AI_DATA = {
    badge: "Advanced Technology",
    headline: "Powered by cutting-edge AI",
    subheadline: "Our AI agents leverage the latest advancements in artificial intelligence to deliver exceptional results for your business.",
    features: [
        {
            title: "AI-Powered Intelligence",
            description: "Advanced machine learning models that understand context, predict outcomes, and optimize decisions in real-time.",
            icon: "Cpu",
            color: 'teal'
        },
        {
            title: "Automated Workflows",
            description: "Seamless automation across marketing, sales, customer service, and financial operations with minimal human intervention.",
            icon: "Zap",
            color: 'teal'
        },
        {
            title: "Enterprise Security",
            description: "Bank-level encryption, compliance-ready architecture, and robust data protection to keep your business secure.",
            icon: "Shield",
            color: 'gold'
        }
    ]
}
