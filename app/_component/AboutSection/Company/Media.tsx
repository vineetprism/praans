import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react';


type MediaItem = {
  title: string;
  source: string;
  year: string;
  type: string;
  link?: string;
  image?: string;
};

const media: MediaItem[] = [
  {
    title:
      "Shaping the Future of Labour Law and Business Registration",
    source: "CEO India Magazine",
    year: "2025",
    type: "Feature",
    link: "https://ceoindiamagazine.com/praans-consultech-shaping-the-future-of-labour-law-and-business-registration/",
  },
  {
    title:
      "Empowering India's Businesses Through Compliance: The Success Story of Praans Consultech",
    source: "Success India Magazine",
    year: "2025",
    type: "Success Story",
    link: "https://successmagazine.in/empowering-indias-businesses-through-compliance-the-success-story-of-praans-consultech/",
  },
];

export default function Media() {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-8xl">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Media & <span className="text-orange-500">Awards</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Praans Consultech has quickly earned recognition in the industry for its
              labour law consulting and compliance management services.
            </p>
          </div>

          {/* Highlights List */}
          <div className="max-w-3xl mx-auto mb-12 space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>🏆 Acknowledged as the <strong>Best Labour Law Consultant</strong> for offering comprehensive compliance solutions.</p>
            <p>🏆 Awarded for <strong>Excellence in Business Compliance</strong> for helping businesses streamline operations and avoid fines.</p>
            <p>🏆 Recognized as a <strong>technologically advanced pioneer</strong> in the field of labour law compliance at leading business forums.</p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {media.map((item, idx) => (
              <Card
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm ring-1 ring-black/5"
              >
                {/* top accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />

                <CardContent className="p-0 flex flex-col h-full">
                  {/* Header row (CTA) */}
                  <div className="px-6 pt-4 pb-2 flex items-start justify-between">
                    <span className="text-xs font-bold bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                    <Link
                      href={item.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="for reading articles"
                      className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center gap-2"
                    >
                      Open article
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Scrollable live preview */}
                  <div className="w-full bg-white border-t">
                    <iframe
                      src={item.link!}
                      className="w-full h-[520px] md:h-[560px] lg:h-[600px] border-0"
                      loading="lazy"
                      sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                      referrerPolicy="no-referrer-when-downgrade"
                      scrolling="yes"
                    />
                  </div>

                  {/* Footer meta (clickable) */}
                  <Link
                    href={item.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 block hover:bg-gray-50 transition-colors"
                    aria-label={`Open article: ${item.title}`}
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <span className="text-xs text-orange-500 font-medium">{item.year}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{item.source}</p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}