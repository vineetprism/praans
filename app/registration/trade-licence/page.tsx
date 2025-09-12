import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import BenefitsTradeLicence from '@/app/_component/Registration/TradeLicence/Benefits'
import WhyChooseTradeLicence from '@/app/_component/Registration/TradeLicence/Choose'
import TradeLicenceDocuments from '@/app/_component/Registration/TradeLicence/Documents'
import FaqPage from '@/app/_component/Registration/TradeLicence/Faq'
import TradeLicenceHero from '@/app/_component/Registration/TradeLicence/Hero'
import TradeLicenceProcessPage from '@/app/_component/Registration/TradeLicence/Process'
import TradeLicence from '@/app/_component/Registration/TradeLicence/TradeLicence'
import TradeLicenceNeeds from '@/app/_component/Registration/TradeLicence/TradeLicenceNeeds'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title:
        "Trade Licence Registration & Compliance Consultant (PAN India) | Praans Consultech",
    description:
        "End-to-end Trade Licence registration with municipal authorities, renewals, amendments (name/activity/address), inspections support, and state/city-wise compliance. Fast TAT, expert guidance, PAN-India coverage, and free consultation.",
    keywords: [
        "Trade Licence",
        "Trade License Registration",
        "Municipal Trade Licence",
        "Trade Licence Renewal",
        "Trade Licence Amendment",
        "Health Trade Licence",
        "Trade Storage Licence",
        "Municipal Compliance",
        "City-wise Trade Licence",
        "PAN India Services",
        "Praans Consultech"
    ],
};


export default function Page() {
    return (
        <>
            <TradeLicenceHero />
            <TradeLicence />
            <BenefitsTradeLicence />
            <WhyChooseTradeLicence />
            <TradeLicenceProcessPage />
            <TradeLicenceNeeds />
            <TradeLicenceDocuments />
            <FounderPage />
            <FaqPage />
        </>
    )
}