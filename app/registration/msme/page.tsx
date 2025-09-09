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