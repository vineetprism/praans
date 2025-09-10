import BenefitsCLRA from '@/app/_component/Registration/CLRA/Benefits'
import CLRANeeds from '@/app/_component/Registration/CLRA/CLRANeeds'
import ClraRegistration from '@/app/_component/Registration/CLRA/ClraRegistration'
import CLRADocs from '@/app/_component/Registration/CLRA/Document'
import FaqPage from '@/app/_component/Registration/CLRA/Faq'
import CLRAHero from '@/app/_component/Registration/CLRA/Hero'
import CLRAProcessPage from '@/app/_component/Registration/CLRA/Process'
import CLRAReviews from '@/app/_component/Registration/CLRA/Reviews'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import React from 'react'

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