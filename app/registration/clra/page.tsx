import BenefitsCLRA from '@/app/_component/Registration/CLRA/Benefits'
import CLRANeeds from '@/app/_component/Registration/CLRA/CLRANeeds'
import ClraRegistration from '@/app/_component/Registration/CLRA/ClraRegistration'
import CLRADocs from '@/app/_component/Registration/CLRA/Document'
import FaqPage from '@/app/_component/Registration/CLRA/Faq'
import CLRAHero from '@/app/_component/Registration/CLRA/Hero'
import CLRAProcessPage from '@/app/_component/Registration/CLRA/Process'
import CLRAReviews from '@/app/_component/Registration/CLRA/Reviews'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "CLRA Registration & Licence Consultant (PAN India) in Gurugram | Praans Consultech",
    description:
        "End-to-end CLRA Registration & Labour Licence services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
    keywords: [
        "CLRA Registration",
        "Contract Labour (Regulation and Abolition) Act",
        "Labour Licence",
        "Contractor Licence",
        "Principal Employer Registration",
        "CLRA Licence Renewal",
        "CLRA Licence Amendment",
        "Labour Compliance India",
        "PAN India Services",
        "Praans Consultech"
    ],
}

export default function Page() {
    return (
        <>
            <CLRAHero />
            <ClraRegistration />
            <BenefitsCLRA />
            <CLRAReviews />
            <CLRAProcessPage />
            <CLRANeeds />
            <CLRADocs />
            <FounderPage />
            <FaqPage />
        </>
    )
}