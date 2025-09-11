import LWFAdvantage from '@/app/_component/Registration/LWF/Advantage'
import LWFDocuments from '@/app/_component/Registration/LWF/Documents'
import FaqPage from '@/app/_component/Registration/LWF/Faq'
import LWFHero from '@/app/_component/Registration/LWF/Hero'
import LWFNeeds from '@/app/_component/Registration/LWF/LWFNeeds'
import LWFRegistration from '@/app/_component/Registration/LWF/LWFRegistration'
import LWFProcessPage from '@/app/_component/Registration/LWF/Process'
import LWFReviews from '@/app/_component/Registration/LWF/Reviews'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import React from 'react'

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