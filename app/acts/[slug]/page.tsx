"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale } from "lucide-react";

import { notFound } from "next/navigation";
import { use } from "react";
import RulesSection from "@/components/RulesSection";
import FormsSection from "@/components/FormsSection";
import { downloadFile, type DownloadItem } from "@/lib/download-utils";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

// Mock database of acts with SEO-friendly slugs
const actsDatabase = {
  "factories-act-1948": {
    id: 1,
    title: "The Factories Act, 1948",
    slug: "factories-act-1948",
    fullTitle:
      "An Act to consolidate and amend the law regulating labour in factories",
    state: "Central",
    category: "Industrial Safety",
    year: "1948",
    actNumber: "Act No. 63 of 1948",
    lastUpdated: "2024-12-15",
    effectiveDate: "1948-04-01",
    sections: 118,
    chapters: 14,
    applicability:
      "All factories employing 10 or more workers with power, or 20 or more workers without power",
    objective:
      "To consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave of workers employed in factories.",
    keyProvisions: [
      "Health and safety measures in factories",
      "Welfare provisions for workers",
      "Working hours and overtime regulations",
      "Employment of young persons and women",
      "Annual leave with wages",
      "Factory licensing and registration",
    ],
    penalties:
      "Imprisonment up to 2 years and/or fine up to ₹1,00,000 for violations",
    amendments: [
      {
        year: "2023",
        description:
          "Amendment regarding digital compliance and online reporting mechanisms",
        date: "2023-08-15",
      },
      {
        year: "2019",
        description: "Updates to safety standards and penalty provisions",
        date: "2019-03-22",
      },
    ],
    rules: [
      {
        id: 1,
        title: "The Factories (Central) Rules, 1950",
        description: "Central rules for implementation of the Factories Act",
        lastUpdated: "2024-10-15",
      },
      {
        id: 2,
        title: "Maharashtra Factories Rules, 1963",
        description: "State-specific rules for Maharashtra factories",
        lastUpdated: "2024-09-20",
      },
    ],
  },
  "contract-labour-act-1970": {
    id: 2,
    title: "The Contract Labour (Regulation and Abolition) Act, 1970",
    slug: "contract-labour-act-1970",
    fullTitle:
      "An Act to regulate the employment of contract labour in certain establishments",
    state: "Central",
    category: "Contract Labour",
    year: "1970",
    actNumber: "Act No. 37 of 1970",
    lastUpdated: "2024-11-28",
    effectiveDate: "1970-02-10",
    sections: 35,
    chapters: 8,
    applicability: "Establishments employing 20 or more contract workers",
    objective:
      "To regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
    keyProvisions: [
      "Registration of establishments employing contract labour",
      "Licensing of contractors",
      "Welfare and health provisions for contract workers",
      "Payment of wages through principal employer",
      "Prohibition of contract labour in certain processes",
    ],
    penalties:
      "Fine up to ₹1,000 and imprisonment up to 3 months for violations",
    amendments: [
      {
        year: "2021",
        description:
          "Digital registration and compliance mechanisms introduced",
        date: "2021-09-29",
      },
    ],
    rules: [
      {
        id: 1,
        title: "The Contract Labour (Central) Rules, 1971",
        description: "Central rules for contract labour regulation",
        lastUpdated: "2024-11-10",
      },
    ],
  },
};

const sections = [
  {
    chapter: "Chapter I",
    title: "Preliminary",
    sections: "1-2",
    description: "Short title, extent, commencement and definitions",
  },
  {
    chapter: "Chapter II",
    title: "The Chief Inspector and other Officers",
    sections: "3-10",
    description: "Appointment and powers of inspectors",
  },
  {
    chapter: "Chapter III",
    title: "Approval, Licensing and Registration of Factories",
    sections: "11-12",
    description: "Factory licensing requirements and procedures",
  },
  {
    chapter: "Chapter IV",
    title: "Health",
    sections: "13-20",
    description:
      "Cleanliness, ventilation, lighting, drinking water, latrines and urinals",
  },
  {
    chapter: "Chapter V",
    title: "Safety",
    sections: "21-41",
    description:
      "Fencing of machinery, work on or near machinery in motion, employment of young persons on dangerous machines",
  },
  {
    chapter: "Chapter VI",
    title: "Welfare",
    sections: "42-50",
    description:
      "Washing facilities, facilities for sitting, first-aid appliances, canteens, shelters, rest rooms and lunch rooms",
  },
];

interface ActDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ActDetailPage({ params }: ActDetailPageProps) {
  // Next.js 15 mein params ko await karna padta hai
  const resolvedParams = use(params);
  const actData =
    actsDatabase[resolvedParams.slug as keyof typeof actsDatabase];

  if (!actData) {
    notFound();
  }

  const handleActDownload = async () => {
    const downloadItem: DownloadItem = {
      url: `/acts/downloads/${actData.slug}.pdf`,
      filename: `${actData.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    };

    await downloadFile(downloadItem);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Act Header */}
            <Card className="mb-8 border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-bold text-slate-800 mb-3 leading-tight">
                      {actData.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      {actData.fullTitle}
                    </CardDescription>
                  </div>
                </div>

                {/* Act Metadata */}
                <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      {actData.year}
                    </div>
                    <div className="text-sm text-gray-600">Enacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      {actData.sections}
                    </div>
                    <div className="text-sm text-gray-600">Sections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">
                      {actData.chapters}
                    </div>
                    <div className="text-sm text-gray-600">Chapters</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Tabs for Act Details, Rules, and Forms */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Act Details</TabsTrigger>
                <TabsTrigger value="rules">Rules</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-orange-500" />
                      Act Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Objective</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {actData.objective}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-2">Applicability</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {actData.applicability}
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-3">Key Provisions</h3>
                      <ul className="space-y-2">
                        {actData.keyProvisions.map((provision, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{provision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-2">Penalties</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {actData.penalties}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rules" className="space-y-6">
                <RulesSection actTitle={actData.title} actSlug={actData.slug} />
              </TabsContent>

              <TabsContent value="forms" className="space-y-6">
                <FormsSection actTitle={actData.title} actSlug={actData.slug} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent>
                  <PopularSearch className="mb-6" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
