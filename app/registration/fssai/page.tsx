import FssaiDocumentsPage from '@/app/_component/Registration/Fssai/Documents'
import FaqPage from '@/app/_component/Registration/Fssai/Faq'
import FssaiNeeds from '@/app/_component/Registration/Fssai/FssaiNeeds'
import FassaiRegistration from '@/app/_component/Registration/Fssai/FssaiRegistration'
import FssaiHero from '@/app/_component/Registration/Fssai/Hero'
import FssaiProcessPage from '@/app/_component/Registration/Fssai/Process'
import Reviews from '@/app/_component/Registration/Fssai/Review'
import WhyFssaiImp from '@/app/_component/Registration/Fssai/WhyFssaiImp'
import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import React from 'react'

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