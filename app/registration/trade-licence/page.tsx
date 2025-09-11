import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import BenefitsTradeLicence from '@/app/_component/Registration/TradeLicence/Benefits'
import WhyChooseTradeLicence from '@/app/_component/Registration/TradeLicence/Choose'
import TradeLicenceDocuments from '@/app/_component/Registration/TradeLicence/Documents'
import FaqPage from '@/app/_component/Registration/TradeLicence/Faq'
import TradeLicenceHero from '@/app/_component/Registration/TradeLicence/Hero'
import TradeLicenceProcessPage from '@/app/_component/Registration/TradeLicence/Process'
import TradeLicence from '@/app/_component/Registration/TradeLicence/TradeLicence'
import TradeLicenceNeeds from '@/app/_component/Registration/TradeLicence/TradeLicenceNeeds'
import React from 'react'

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