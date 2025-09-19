import React from 'react'
import Hero from '@/app/_component/AboutSection/Clients/Hero'
import Sector from '@/app/_component/AboutSection/Clients/Sector'
import Confidental from '@/app/_component/AboutSection/Clients/Confidental'
import Cta from '@/app/_component/AboutSection/Clients/Cta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Clients | Praans Consultech',
  description: 'Trusted by businesses across all major sectors in India for labour law compliance solutions.',
  keywords: 'clients, Praans Consultech, labour law compliance, business sectors, India, corporate compliance, HR solutions, compliance outsourcing, industry leaders'
}


export default function Page() {
  return (
    <>
      <Hero />
      <Sector />
      <Confidental />
      <Cta />
    </>
  )
}