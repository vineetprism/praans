import Image from "next/image";

export default function MsmeRegistrationAbout() {
  return (
    <main className="bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <section className="py-4 sm:py-6 lg:py-10">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-xl font-bold leading-tight sm:text-2xl text-[#142a63]">
                MSME Registration: Empowering Small Businesses
              </h1>

              <p className="mt-6 text-[15px] leading-7 text-slate-700 text-justify">
                Micro, Small, and Medium Enterprises (MSMEs) play a crucial role
                in India’s economic growth—creating jobs, fostering innovation,
                and boosting exports. To support these businesses, the
                Government of India offers a range of benefits under the MSME
                Development Act, 2006. Registering as an MSME is the first step
                toward accessing these benefits and unlocking your business
                potential.
              </p>

              <h2 className="mt-10 text-xl font-bold leading-tight sm:text-2xl text-[#142a63]">
                What is MSME Registration?
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-700 text-justify">
                MSME registration is a government certification provided to
                small and medium-sized enterprises. It recognises their
                contribution to the economy and enables access to subsidies,
                schemes, incentives, and easier procurement norms—designed to
                support and accelerate growth.
              </p>
            </div>

            <div className="order-first lg:order-none self-stretch">
              <div className="relative h-full overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200">
                <Image
                  src="/register/msme.webp"
                  alt="MSME Registration"
                  width={1200}
                  height={800}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
