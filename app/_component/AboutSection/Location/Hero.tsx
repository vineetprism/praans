import React from 'react'

export default function Hero() {
    return (
        <>
            <div className="relative overflow-hidden bg-gray-50">
                <div className="relative z-10 py-14">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-slate-800 leading-tight">
                            Pan-India{" "}
                            <span className="text-transparent bg-orange-500 bg-clip-text">
                                Presence
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}