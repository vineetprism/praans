import FounderPage from '@/app/_component/Registration/Msme_Registration/Founder'
import BenefitsShopEstabilishment from '@/app/_component/Registration/Shop_Estabilishment/Benefits'
import ShopEstabilishmentDocs from '@/app/_component/Registration/Shop_Estabilishment/Documents'
import FaqPage from '@/app/_component/Registration/Shop_Estabilishment/Faq'
import ShopEstablishmentHero from '@/app/_component/Registration/Shop_Estabilishment/Hero'
import ShopEstabilishmentProcessPage from '@/app/_component/Registration/Shop_Estabilishment/Process'
import ShopEstablishmentReviews from '@/app/_component/Registration/Shop_Estabilishment/Reviews'
import ShopEstabilishment from '@/app/_component/Registration/Shop_Estabilishment/ShopEstabilishment'
import ShopEstabilishmentNeeds from '@/app/_component/Registration/Shop_Estabilishment/ShopEstabilishmentNeeds'
import React from 'react'

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