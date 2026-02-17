import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Hero } from '../components/sections/Hero'
import { ServicesOverview } from '../components/sections/ServicesOverview'
import { ClientsPartners } from '../components/sections/ClientsPartners'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { Industries } from '../components/sections/Industries'
import { ClientTestimonials } from '../components/sections/ClientTestimonials'
import { Articles } from '../components/sections/Articles'
import { FAQ } from '../components/sections/FAQ'
import { CTASection } from '../components/sections/CTASection'
import { AIPlatformPreview } from '../components/sections/AIPlatformPreview'
import { NoTechRequired } from '../components/sections/NoTechRequired'
import { CuttingEdgeAI } from '../components/sections/CuttingEdgeAI'
import { PlatformAction } from '../components/sections/PlatformAction'
import { useSEO } from '../hooks/useSEO'

export function HomePage() {
    const { pathname } = useLocation();

    // Dynamic SEO based on path
    const getSEOData = () => {
        switch (pathname) {
            case '/about':
                return {
                    title: 'About AIXcellence — Transforming Business with Intelligent AI',
                    description: 'Discover AIXcellence\'s mission to redefine business automation through human-like AI agents. Learn about our commitment to excellence and innovation.'
                };
            case '/features':
                return {
                    title: 'Advanced AI Features — ARA & AXE Agent Capabilities',
                    description: 'Explore the cutting-edge features of AIXcellence agents. From multi-modal conversations to professional AI video cloning and enterprise security.'
                };
            case '/solutions':
                return {
                    title: 'AI Solutions for Every Industry — Business Automation',
                    description: 'Customized AI solutions for healthcare, finance, e-commerce, and more. See how AIXcellence automates complex workflows and customer support.'
                };
            case '/platform':
                return {
                    title: 'AIX One Platform — The Future of Business Automation',
                    description: 'Centralize your AI automation with the AIX One Platform. Manage intelligent agents, analytics, and integrations in one seamless dashboard.'
                };
            default:
                return {
                    title: 'AIXcellence — Where AI Meets Excellence | Intelligent Automation',
                    description: 'Transform your business with AIXcellence intelligent automation platform. ARA Agent handles 24/7 support while AXE Agent creates professional AI video content.'
                };
        }
    };

    useSEO(getSEOData());

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <AIPlatformPreview />
            <NoTechRequired />
            <CuttingEdgeAI />
            <ServicesOverview />
            <ClientsPartners />
            <WhyChooseUs />
            <PlatformAction />
            <Industries />
            <ClientTestimonials />
            <Articles />
            <FAQ />
            <CTASection />
        </motion.div>
    )
}
