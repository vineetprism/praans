import Link from 'next/link'
import React from 'react'

export default function Privacy() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <main className="py-16">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="text-5xl text-center font-bold text-slate-800 mb-6">
                            Privacy Policy
                        </h1>
                        <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-6">

                            <p>
                                At <span className="text-[#eb8535]">Praans Consultech</span>, we are committed to
                                protecting your privacy and ensuring that your personal
                                information is handled responsibly. This Privacy Policy outlines
                                how we collect, use, and safeguard your data when you interact
                                with our website, services, and communication channels.
                            </p>

                            <h2 className="font-bold">1. Information We Collect</h2>
                            <p>We may collect the following types of information:</p>
                            <ul>
                                <li><strong>Personal Information:</strong> Name, email, phone number, company details when you fill forms or contact us.</li>
                                <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, and device details.</li>
                                <li><strong>Cookies:</strong> We use cookies to improve user experience and analyze site traffic.</li>
                            </ul>

                            <h2 className="font-bold">2. How We Use Your Information</h2>
                            <p>Your data may be used to:</p>
                            <ul>
                                <li>Provide and improve our consulting services</li>
                                <li>Respond to inquiries and customer support requests</li>
                                <li>Send updates, newsletters, or compliance alerts (with your consent)</li>
                                <li>Analyze website performance and enhance user experience</li>
                                <li>Comply with legal or regulatory requirements</li>
                            </ul>

                            <h2 className="font-bold">3. Sharing of Information</h2>
                            <p>
                                We do not sell or rent your personal information. However, we may
                                share it with:
                            </p>
                            <ul>
                                <li>Trusted third-party service providers who assist in our operations</li>
                                <li>Legal or regulatory authorities when required by law</li>
                                <li>Business partners for joint services (with your consent)</li>
                            </ul>

                            <h2 className="font-bold">4. Data Security</h2>
                            <p>
                                We implement strict technical, administrative, and physical
                                measures to protect your personal data from unauthorized access,
                                misuse, or disclosure. However, no online system is 100% secure.
                            </p>

                            <h2 className="font-bold">5. Your Rights</h2>
                            <p>
                                You have the right to access, update, or request deletion of your
                                personal information. You may also opt out of marketing
                                communications at any time.
                            </p>

                            <h2 className="font-bold">6. Cookies & Tracking</h2>
                            <p>
                                Our website uses cookies and similar technologies to personalize
                                content, analyze traffic, and improve our services. You can adjust
                                your browser settings to refuse cookies, though some features may
                                not work properly.
                            </p>

                            <h2 className="font-bold">7. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party sites. We are not
                                responsible for the privacy practices or content of those
                                websites.
                            </p>

                            <h2 className="font-bold">8. Updates to this Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect
                                changes in our practices or legal obligations. The updated version
                                will always be available on this page with a revised “Last
                                Updated” date.
                            </p>

                            <h2 className="font-bold">9. CCPA Privacy Policy (Do Not Sell My Personal Information)</h2>
                            <p>
                                Under the CCPA, among other rights, California consumers have the right to:
                            </p>
                            <ul>
                                <li>Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                                <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                                <li>Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.</li>
                            </ul>
                            <p>
                                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                            </p>

                            <h2 className="font-bold">10. GDPR Privacy Policy (Data Protection Rights)</h2>
                            <p>
                                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                            </p>
                            <ul>
                                <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                                <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                                <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                                <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                            </ul>
                            <p>
                                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                            </p>

                            <h2 className="font-bold">11. Children’s Information</h2>
                            <p>
                                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                            </p>
                            <p>
                                Praans Consultech does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                            </p>

                            <h2 className="font-bold">12. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or how we
                                handle your data, please contact us at:
                            </p>
                            <p>
                                <span className="font-bold text-xl text-[#eb8535]">Praans Consultech</span> <br />
                                <span className="font-semibold">CP-9, Sector-8, IMT Manesar, Gurugram, Haryana - 122052</span> <br />
                                <span className="font-semibold">Email:{" "}</span>
                                <Link
                                    href="mailto:info@praansconsultech.com"
                                    className="text-orange-600 hover:underline"
                                >
                                    info@praansconsultech.com
                                </Link>
                                <br />
                                <span className="font-semibold">Phone:</span>{" "}
                                <Link
                                    href="tel:+919050576838"
                                    className="text-orange-600 hover:underline"
                                >
                                    +91-9050576838
                                </Link>

                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
