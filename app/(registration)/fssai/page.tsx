import FssaiDocumentsPage from '@/app/_component/Registration/Fssai/Documents'
import FaqPage from '@/app/_component/Registration/Fssai/Faq'
import FssaiNeeds from '@/app/_component/Registration/Fssai/FssaiNeeds'
import FassaiRegistration from '@/app/_component/Registration/Fssai/FssaiRegistration'
import FssaiHero from '@/app/_component/Registration/Fssai/Hero'
import FssaiProcessPage from '@/app/_component/Registration/Fssai/Process'
import Reviews from '@/app/_component/Registration/Fssai/Review'
import WhyFssaiImp from '@/app/_component/Registration/Fssai/WhyFssaiImp'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "FSSAI Registration & Licence Consultant (PAN India) | Praans Consultech",
    description:
        "End-to-end FSSAI Registration & Labour Licence services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
    keywords: [
        "FSSAI Registration",
        "Food Safety and Standards Act",
        "Food Licence",
        "Food Business Operator Registration",
        "FSSAI Licence Renewal",
        "FSSAI Licence Amendment",
        "Labour Compliance India",
        "PAN India Services",
        "Praans Consultech"
    ],
}

export default function Page() {
    return (
        <>
            <FssaiHero />
            <FassaiRegistration />
            <WhyFssaiImp />
            <Reviews />
            <FssaiProcessPage />
            <FssaiNeeds />
            <FssaiDocumentsPage />
            <FounderPage />
            <FaqPage />
        </>
    )
}