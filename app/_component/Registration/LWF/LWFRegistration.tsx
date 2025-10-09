"use client";

import Image from "next/image";
import Link from "next/link";

export default function LwfOverviewPage() {
    return (
        <main className="bg-white">
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid gap-8 lg:grid-cols-2 items-stretch">
                    <div className="flex flex-col justify-between h-full">
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1c284f]">
                            Labour Welfare Fund Registration in India
                        </h1>

                        <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-700 text-justify">
                            <p>
                                The <span className="font-semibold">Labour Welfare Fund (LWF)</span> registration process in India ensures that
                                employers contribute towards the welfare of their employees. The{" "}
                                <span className="font-semibold">Labour Welfare Fund (LWF)</span> is a mandatory contribution scheme that aims to ensure social security
                                and enhance the quality of life for workers in India. It is a statutory provision enforced by the
                                government to benefit employees. It is governed by individual state legislation and aims to support the
                                welfare of employees through various initiatives such as healthcare, housing, education, and financial
                                assistance. Employers and employees contribute to this fund, and the respective state governments
                                administer it. Currently, Labour Welfare Fund is applicable in 16 states only.
                            </p>

                            <p>
                                The contribution rates, eligibility criteria and due dates of labour welfare fund differ from state to
                                state, as the process is governed by specific laws in each state. Each state has its own unique set of
                                rules and regulations based on their requirements.
                            </p>

                            <p>
                                At Praans Consultech, we offer professional consultancy services to simplify and streamline the Labour
                                Welfare Fund registration process for our clients. With our expertise and knowledge of local
                                regulations, we will provide you with comprehensive advice and support tailored to your specific
                                business needs.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="h-full">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-slate-200">
                            <Image
                                src="/register/lwf.webp" // <-- replace with your actual image
                                alt="Certificate with ribbon for Labour Welfare Fund registration"
                                fill
                                className="object-cover"
                                sizes="(max-width:1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1c284f]">
                    Labour Welfare Fund Rates and Payment
                </h2>

                <p className="mx-auto mt-4 max-w-4xl text-[15px] leading-7 text-slate-600 text-justify">
                    The Labour Welfare Fund (LWF) is a statutory contribution administered by individual state governments by
                    constituting labour welfare boards in India, aimed at promoting the welfare and well-being of workers.
                    The fund is utilized for various employee benefits, such as housing, education, health, and vocational
                    training. Contributions are made by employers, employees, and, in some cases, the state government.
                    The applicability, rates, and payment mechanisms vary by state.
                </p>

                <div className="mt-6">
                    <Link
                        href="#worker-benefits"
                        className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-3 
                        text-sm font-semibold text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        aria-label="Worker Benefits: The Labour Welfare Fund Explained"
                    >
                        Worker Benefits: The Labour Welfare Fund Explained
                    </Link>
                </div>
            </section>

        </main>
    );
}
