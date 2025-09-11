import BenefitsGST from '@/app/_component/Registration/GST/Benefits'
import GstDocsAndPenalties from '@/app/_component/Registration/GST/Documents'
import FaqPage from '@/app/_component/Registration/GST/Faq'
import GSTNeeds from '@/app/_component/Registration/GST/GSTNeeds'
import GSTRegistration from '@/app/_component/Registration/GST/GSTRegistration'
import GstHero from '@/app/_component/Registration/GST/Hero'
import GSTReviews from '@/app/_component/Registration/GST/Reviews'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import React from 'react'

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