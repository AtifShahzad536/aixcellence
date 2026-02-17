export interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
}

export const DEFAULT_SEO: SEOProps = {
    title: 'AIXcellence — Where AI meets excellence | Intelligent Automation Platform',
    description: 'Transform your business with AIXcellence intelligent automation platform. ARA Agent handles 24/7 customer support and bookings. AXE Agent creates professional video content with AI cloning.',
    canonical: 'https://aixcellence.co/',
    ogTitle: 'AIXcellence — Where AI meets excellence | Intelligent Automation Platform',
    ogDescription: 'Transform your business with AIXcellence intelligent automation platform. ARA Agent handles 24/7 customer support and bookings. AXE Agent creates professional video content with AI cloning.',
    ogImage: 'https://aixcellence.co/fulllogo_nobuffer.png',
    twitterTitle: 'AIXcellence — Where AI meets excellence | Intelligent Automation Platform',
    twitterDescription: 'Transform your business with AIXcellence intelligent automation platform. ARA Agent handles 24/7 customer support and bookings. AXE Agent creates professional video content with AI cloning.',
    twitterImage: 'https://aixcellence.co/fulllogo_nobuffer.png',
};

export const SEO_DATA: Record<string, SEOProps> = {
    '/': {
        title: 'AIXcellence — Intelligent AI Automation Platform',
        description: 'Empower your business with AIXcellence. Automated AI agents for customer service, video cloning, and workflow optimization.',
    },
    '/about': {
        title: 'About AIXcellence — Our Mission & Team',
        description: 'Learn about AIXcellence, the team behind the most advanced AI automation agents for modern businesses.',
    },
    '/contact': {
        title: 'Contact AIXcellence — Get in Touch',
        description: 'Have questions about AI automation? Contact our team for a demo or consultation on how AIXcellence can help your business.',
    },
    '/services/ai-development': {
        title: 'Custom AI Development Services — AIXcellence',
        description: 'Advanced custom AI development tailored to your business needs, from machine learning models to intelligent agents.',
    },
    '/services/ai-models-integrations': {
        title: 'AI Models & Integrations — Future-Proof Your Business',
        description: 'Seamlessly integrate cutting-edge AI models into your existing workflows with AIXcellence experts.',
    },
    '/services/software-development': {
        title: 'AI-Powered Software Development — AIXcellence',
        description: 'Modern software development enhanced by AI to deliver faster, smarter, and more scalable solutions.',
    },
    '/services/mobile-apps-development': {
        title: 'AI-Driven Mobile App Development — AIXcellence',
        description: 'Build the next generation of mobile apps with integrated AI capabilities for iOS and Android.',
    },
    '/portfolio': {
        title: 'AIXcellence Portfolio — Real-World AI Success Stories',
        description: 'Explore our case studies and see how AIXcellence has transformed businesses through intelligent automation.',
    },
    '/blog': {
        title: 'AIXcellence Blog — Insights on the Future of AI',
        description: 'Latest news, guides, and strategic insights on professional AI automation and intelligent business systems.',
    },
    '/news': {
        title: 'AIXcellence Newsroom — Latest Updates',
        description: 'Official announcements and the latest news from the world of AIXcellence and intelligent automation.',
    },
    '/login': {
        title: 'Login to AIXcellence — Manage Your AI Agents',
        description: 'Access your AIXcellence dashboard to manage your ARA and AXE agents and view real-time analytics.',
    }
};
