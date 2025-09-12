import MsmeRegistrationAbout from '@/app/_component/Registration/Msme_Registration/About'
import BenefitsPage from '@/app/_component/Registration/Msme_Registration/Benefits'
import ReviewsPage from '@/app/_component/Registration/Msme_Registration/Review'
import EmploymentPage from '@/app/_component/Registration/Msme_Registration/EmployementBenfits'
import MsmeHero from '@/app/_component/Registration/Msme_Registration/Hero'
import ProtectionPage from '@/app/_component/Registration/Msme_Registration/Protection'
import React from 'react'
import MsmeProcessPage from '@/app/_component/Registration/Msme_Registration/Process'
import WhoCanApplyPage from '@/app/_component/Registration/Msme_Registration/Apply'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import FaqPage from '@/app/_component/Registration/Msme_Registration/Faq'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title:
        "MSME (Udyam) Registration Consultant (PAN India) | Praans Consultech",
    description:
        "End-to-end MSME/Udyam registration, renewals, updates/corrections, and certificate download. Fast TAT, expert guidance, PAN-India coverage, and free consultation.",
    keywords: [
        "MSME Registration",
        "Udyam Registration",
        "Udyam Certificate",
        "MSME Certificate",
        "MSME Renewal",
        "Udyam Update",
        "NIC Code Selection",
        "Micro Small Medium Enterprise",
        "Labour & Compliance India",
        "PAN India Services",
        "Praans Consultech"
    ],
};



export default function Page() {
    return (
        <>
            <MsmeHero />
            <MsmeRegistrationAbout />
            <BenefitsPage />
            <ProtectionPage />
            <EmploymentPage />
            <ReviewsPage />
            <MsmeProcessPage />
            <WhoCanApplyPage />
            <FounderPage />
            <FaqPage />
        </>
    )
}