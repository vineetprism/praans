import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import BenefitsProfessionalTax from '@/app/_component/Registration/Professional_Tax/Benefits'
import ProfessionalTaxKeyDifference from '@/app/_component/Registration/Professional_Tax/Difference'
import ProfessionalTaxDocs from '@/app/_component/Registration/Professional_Tax/Document'
import FaqPage from '@/app/_component/Registration/Professional_Tax/Faq'
import ProfessionalTaxHero from '@/app/_component/Registration/Professional_Tax/Hero'
import FssaiProcessPage from '@/app/_component/Registration/Professional_Tax/Process'
import ProfessionalTaxNeeds from '@/app/_component/Registration/Professional_Tax/ProfessionalTaxNeeds'
import ProfessionalTaxRegistration from '@/app/_component/Registration/Professional_Tax/ProfessionalTaxRegistration'
import ProfessionalTaxReviews from '@/app/_component/Registration/Professional_Tax/Reviews'
import ProfessionalTaxTypes from '@/app/_component/Registration/Professional_Tax/TypesProfessionalTax'
import React from 'react'

export default function Page() {
    return (
        <>
            <ProfessionalTaxHero />
            <ProfessionalTaxRegistration />
            <BenefitsProfessionalTax />
            <ProfessionalTaxTypes />
            <ProfessionalTaxKeyDifference />
            <ProfessionalTaxReviews />
            <FssaiProcessPage />
            <ProfessionalTaxNeeds />
            <ProfessionalTaxDocs />
            <FounderPage />
            <FaqPage />
        </>
    )
}