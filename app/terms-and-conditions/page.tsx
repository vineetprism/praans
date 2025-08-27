import Link from "next/link";

export default function TermsAndConditionsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl text-center font-bold text-slate-800 mb-6">
            Terms and Conditions
          </h1>
          <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-6">

            <p>
              Welcome to <span className="text-[#eb8535]">Praans Consultech</span>. By accessing or
              using our website, services, or products, you agree to comply
              with and be bound by the following Terms and Conditions. Please
              read them carefully before using our services.
            </p>

            <h2 className="font-bold">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to be legally bound by these
              Terms and Conditions and our Privacy Policy. If you do not agree,
              you should not use our website or services.
            </p>

            <h2 className="font-bold">2. Use of Services</h2>
            <ul>
              <li>You agree to use our website and services only for lawful purposes.</li>
              <li>
                You must not misuse our services, attempt unauthorized access,
                or engage in activities that may disrupt or damage our systems.
              </li>
            </ul>

            <h2 className="font-bold">3. Intellectual Property Rights</h2>
            <p>
              All content on this site—including text, graphics, logos,
              designs, and software—is the property of Praans Consultech or its
              licensors and is protected by applicable intellectual property
              laws. You may not copy, reproduce, or distribute any content
              without prior written consent.
            </p>

            <h2 className="font-bold">4. User Responsibilities</h2>
            <ul>
              <li>Provide accurate and truthful information when requested.</li>
              <li>
                Keep your login credentials (if applicable) secure and not share
                them with others.
              </li>
              <li>
                Comply with all applicable laws and regulations while using our
                services.
              </li>
            </ul>

            <h2 className="font-bold">5. Payment & Billing</h2>
            <p>
              If you purchase services from us, you agree to provide accurate
              billing information. All fees are payable as specified in your
              service agreement or invoice. Late payments may result in
              suspension of services.
            </p>

            <h2 className="font-bold">6. Limitation of Liability</h2>
            <p>
              Praans Consultech is not liable for any direct, indirect,
              incidental, or consequential damages resulting from the use of our
              website or services. While we strive to provide accurate
              information, we do not guarantee completeness or error-free
              content.
            </p>

            <h2 className="font-bold">7. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the content, policies, or practices of those
              third-party sites.
            </p>

            <h2 className="font-bold">8. Termination of Use</h2>
            <p>
              We reserve the right to suspend or terminate your access to our
              services if you violate these Terms or engage in activities that
              harm our company, clients, or systems.
            </p>

            <h2 className="font-bold">9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of India.
              Any disputes will be subject to the exclusive jurisdiction of the
              courts in Gurugram, Haryana.
            </p>

            <h2 className="font-bold">10. Updates to Terms</h2>
            <p>
              We may revise these Terms from time to time. The updated version
              will always be available on this page with a revised “Last
              Updated” date.
            </p>

            <h2 className="font-bold">11. Contact Us</h2>
            <p>
              For questions regarding these Terms and Conditions, please
              contact us at:
            </p>
            <p>
              <span className="font-bold text-xl text-[#eb8535]">Praans Consultech</span> <br />
              <span className="font-semibold">CP-9, Sector-8, IMT Manesar, Gurugram, Haryana - 122052</span> <br />
              <span className="font-semibold">Email:{" "}</span>
              <Link
                href="mailto:info@praansconsultech.com"
                className="text-orange-600 hover:underline"
                aria-label="Email Praans Consultech"
              >
                info@praansconsultech.com
              </Link>
              <br />
              <span className="font-semibold">Phone:</span>{" "}
              <Link
                href="tel:+919050576838"
                className="text-orange-600 hover:underline"
                aria-label="Call Praans Consultech"
              >
                +91-9050576838
              </Link>

            </p>

            <p className="text-sm text-gray-500 mt-6">
              <em>Last Updated: August 2025</em>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
