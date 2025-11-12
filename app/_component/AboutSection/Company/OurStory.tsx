import Image from 'next/image'
import React from 'react'

const OurStory = () => {
  return (
    <>
      <section className="py-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-[30px] font-bold mb-3 text-[#1C284F]">
              Our <span className="text-orange-500">Story</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          {/* Two-column: force equal heights */}
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
            {/* Left: Text - fills height */}
            <div className="h-full flex flex-col justify-center space-y-4 md:space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base text-[15px] text-[#1C284F] text-justify">
                Founded in 2021, <strong className="text-orange-500"><em>Praans Consultech</em></strong> has become as one of India's most trusted labour law consultants, technology-driven solution providers and compliance partners. With the motive to bring the labour law compliance in streamline and simplified it for businesses in India. Together we bring innovations, technology and legal expertise on ground level executions to ensure that organisations of any kind and sizes remain fully compliant with ever-evolving labour laws.
              </p>

              <p className="text-base text-[15px] text-[#1C284F] text-justify">
                At <strong className="text-orange-500"><em>Praans Consultech</em></strong>, Just filing returns and meeting deadlines is not  about managing compliance, it is much more than that and we understand it. It's about risk mitigations, ensuring legal accuracy, creating a smooth operational framework that supports growth and protection against penalties for business. Our founders, <strong><em>Mr. Sandeep Kumar, Mr. Nitesh Kumar, and Ms. Allisha Sharma,</em></strong> identified the growing gap in how businesses managed multi-location compliance. The process we were known in past is usually slow, error prone and so we were not able to keeps with whole regulatory landscape. With this understanding, they joined hands to create a single-window solution that would transform the way businesses handle compliance.
              </p>
            </div>

            {/* Right: Image matches text column height on lg+ */}
            <div className="order-last lg:order-none flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl 
                              h-64 sm:h-80 md:h-96 lg:h-full lg:min-h-[420px]">
                <Image
                  src="/about/about.webp"
                  alt="Praans Consultech Story"
                  fill
                  priority
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1280px) 60vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStory