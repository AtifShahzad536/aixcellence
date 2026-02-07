import React from 'react'
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

export function HomePage() {
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
            <Industries />
            <ClientTestimonials />
            <Articles />
            <FAQ />
            <CTASection />
        </motion.div>
    )
}
