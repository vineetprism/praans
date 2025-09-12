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
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title:
        "Professional Tax (PT) Registration & Compliance Consultant (PAN India) | Praans Consultech",
    description:
        "End-to-end Professional Tax (PT) enrolment (PTEC), employer registration (PTRC), monthly deductions & challans, return filing, and state-wise compliance. Fast TAT, expert guidance, PAN-India support, and free consultation.",
    keywords: [
        "Professional Tax",
        "PT Registration",
        "PTEC Enrolment",
        "PTRC Registration",
        "Professional Tax Return",
        "Professional Tax Challan",
        "Professional Tax Slab",
        "Professional Tax Compliance",
        "Employer PT",
        "Employee PT Deduction",
        "PAN India Services",
        "Praans Consultech"
    ],
};

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