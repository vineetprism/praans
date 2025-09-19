import LWFAdvantage from '@/app/_component/Registration/LWF/Advantage'
import LWFDocuments from '@/app/_component/Registration/LWF/Documents'
import FaqPage from '@/app/_component/Registration/LWF/Faq'
import LWFHero from '@/app/_component/Registration/LWF/Hero'
import LWFNeeds from '@/app/_component/Registration/LWF/LWFNeeds'
import LWFRegistration from '@/app/_component/Registration/LWF/LWFRegistration'
import LWFProcessPage from '@/app/_component/Registration/LWF/Process'
import LWFReviews from '@/app/_component/Registration/LWF/Reviews'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title:
        "Labour Welfare Fund (LWF) Registration & Compliance Consultant (PAN India) | Praans Consultech",
    description:
        "End-to-end Labour Welfare Fund (LWF) registration, contribution setup, deductions, and return filing for employers. Fast TAT, expert guidance, PAN-India/state-specific compliance, and free consultation.",
    keywords: [
        "Labour Welfare Fund",
        "LWF Registration",
        "LWF Employer Registration",
        "LWF Contribution",
        "LWF Deduction",
        "LWF Return Filing",
        "LWF Compliance",
        "State-wise Labour Welfare Fund",
        "Labour Compliance India",
        "PAN India Services",
        "Praans Consultech"
    ],
};

export default function Page() {
    return (
        <>
            <LWFHero />
            <LWFRegistration />
            <LWFAdvantage />
            <LWFReviews />
            <LWFProcessPage />
            <LWFNeeds />
            <LWFDocuments />
            <FounderPage />
            <FaqPage />
        </>
    )
}