import React from 'react'

export default function Hero() {
    return (
        <>
            <section className="relative py-16 md:py-20 lg:py-10 2xl:py-24 bg-gray-50 overflow-hidden">
                <div className="absolute inset-0" />
                <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 bg-blue-200/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
                        About Praans <span className="text-orange-500">Consultech</span>
                    </h1>
                </div>
            </section>
        </>
    )
}