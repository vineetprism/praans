import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import BenefitsShopEstabilishment from '@/app/_component/Registration/Shop_Estabilishment/Benefits'
import ShopEstabilishmentDocs from '@/app/_component/Registration/Shop_Estabilishment/Documents'
import FaqPage from '@/app/_component/Registration/Shop_Estabilishment/Faq'
import ShopEstablishmentHero from '@/app/_component/Registration/Shop_Estabilishment/Hero'
import ShopEstabilishmentProcessPage from '@/app/_component/Registration/Shop_Estabilishment/Process'
import ShopEstablishmentReviews from '@/app/_component/Registration/Shop_Estabilishment/Reviews'
import ShopEstabilishment from '@/app/_component/Registration/Shop_Estabilishment/ShopEstabilishment'
import ShopEstabilishmentNeeds from '@/app/_component/Registration/Shop_Estabilishment/ShopEstabilishmentNeeds'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title:
        "Shop & Establishment Registration & Compliance Consultant (PAN India) | Praans Consultech",
    description:
        "End-to-end Shops & Establishments Act registration/licence, renewals, amendments (name/address/manager), closure intimation, and state-wise compliance for shops, offices, and commercial establishments. Fast TAT, expert guidance, PAN-India support, and free consultation.",
    keywords: [
        "Shop and Establishment Registration",
        "Shops & Establishments Act",
        "Shop & Establishment Licence",
        "S&E Registration",
        "Gumasta Licence",
        "Shop Licence Renewal",
        "Shop & Establishment Amendment",
        "Shop Establishment Closure",
        "State-wise Labour Compliance",
        "PAN India Services",
        "Praans Consultech"
    ],
};


export default function Page() {
    return (
        <>
            <ShopEstablishmentHero />
            <ShopEstabilishment />
            <BenefitsShopEstabilishment />
            <ShopEstablishmentReviews />
            <ShopEstabilishmentProcessPage />
            <ShopEstabilishmentNeeds />
            <ShopEstabilishmentDocs />
            <FounderPage />
            <FaqPage />
        </>
    )
}