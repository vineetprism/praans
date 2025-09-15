import React from 'react'

const Team = () => {
    return (
        <>
            <section className="py-16 md:py-20 lg:py-10 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                    {/* Heading */}
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our <span className="text-orange-500">Team</span></h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="text-gray-600 text-base md:text-lg leading-relaxed text-justify space-y-6">
                        <p>
                            <span className="font-semibold text-orange-500"><em>Praans Consultech</em></span> is powered by a dynamic team of legal experts, HR specialists,
                            and technology professionals. We strongly believe that legal knowledge is more effective
                            when combined with modern tools and practical execution.
                        </p>
                        <p>
                            Our strength lies not just in knowledge, but in the <strong>practical application of the subject</strong>.
                            With a team spread across India, our compliance officers ensure local expertise with
                            centralized efficiency, helping businesses stay fully compliant and future-ready.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
