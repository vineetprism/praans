import BenefitsGST from '@/app/_component/Registration/GST/Benefits'
import GstDocsAndPenalties from '@/app/_component/Registration/GST/Documents'
import FaqPage from '@/app/_component/Registration/GST/Faq'
import GSTNeeds from '@/app/_component/Registration/GST/GSTNeeds'
import GSTRegistration from '@/app/_component/Registration/GST/GSTRegistration'
import GstHero from '@/app/_component/Registration/GST/Hero'
import GSTReviews from '@/app/_component/Registration/GST/Reviews'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "GST Registration & Goods and Services Tax Consultant (PAN India) | Praans Consultech",
    description:
        "End-to-end GST Registration & Goods and Services Tax services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
    keywords: [
        "GST Registration",
        "Goods and Services Tax",
        "Goods and Services Tax Registration",
        "Goods and Services Tax Compliance",
        "Goods and Services Tax Compliance India",
        "PAN India Services",
        "Praans Consultech"
    ],
}

export default function Page() {
    return (
        <>
            <GstHero />
            <GSTRegistration />
            <BenefitsGST />
            <GSTReviews />
            <GSTNeeds />
            <GstDocsAndPenalties />
            <FounderPage />
            <FaqPage />
        </>
    )
}