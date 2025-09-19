import React from 'react'
import Hero from "@/app/_component/AboutSection/Company/Hero"
import OurStory from '@/app/_component/AboutSection/Company/OurStory'
import OurJourney from '@/app/_component/AboutSection/Company/OurJourney'
import Services from '@/app/_component/AboutSection/Company/Services'
import Choose from '@/app/_component/AboutSection/Company/Choose'
import Team from '@/app/_component/AboutSection/Company/Team'
import VisionMission from '@/app/_component/AboutSection/Company/VisionMission'
import Certification from '@/app/_component/AboutSection/Company/Certification'
import LabourLaw from '@/app/_component/AboutSection/Company/LabourLaw'
import OurPromise from '@/app/_component/AboutSection/Company/OurPromise'
import Serve from '@/app/_component/AboutSection/Company/Serve'
import Media from '@/app/_component/AboutSection/Company/Media'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "About Us | Praans Consultech",
  description:
    "Discover Praans Consultech — India’s trusted labour law compliance partner. Learn about our story, journey, services, team, certifications, labour law expertise, vision & mission, and our promise to businesses across sectors.",
  keywords:
    "Praans Consultech, about Praans Consultech, labour law compliance, compliance services, corporate compliance India, HR solutions, compliance outsourcing, labour law expertise, certifications, team, vision and mission, our story, our journey",
};


export default function Page() {
  return (
    <>
      <Hero />
      <OurStory />
      <OurJourney />
      <Services />
      <Choose />
      <Team />
      <VisionMission />
      <Certification />
      <LabourLaw />
      <OurPromise />
      <Serve />
      <Media />
    </>
  )
}