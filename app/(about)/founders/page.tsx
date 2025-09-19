import Hero from '@/app/_component/AboutSection/Founder/Hero'
import Founder from '@/app/_component/AboutSection/Founder/Founder'
import Expertise from '@/app/_component/AboutSection/Founder/Expertise'
import Vision from '@/app/_component/AboutSection/Founder/Vision'
import Leadership from '@/app/_component/AboutSection/Founder/Leadership'
import Media from '@/app/_component/AboutSection/Founder/Media'
import Cta from '@/app/_component/AboutSection/Founder/Cta'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Founder | Praans Consultech',
  description: 'Meet the founder of Praans Consultech, a trusted labour law compliance consultant in India.',
  keywords: 'founder, praans consultech, labour law compliance, india, consultant, business, compliance, registration',
}


export default function Page() {
  return (
    <>
      <Hero />
      <Founder />
      <Expertise />
      <Vision />
      <Leadership />
      <Media />
      <Cta />
    </>
  )
}