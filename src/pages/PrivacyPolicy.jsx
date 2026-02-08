import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#1e1f23] text-cream">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <p className="mb-10 text-cream/90">Last updated: 2024. This policy applies to AMC Sweep and our website.</p>

        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">1. Who we are</h2>
          <p className="leading-relaxed text-cream/90">
            AMC Sweep is a chimney sweep business based in Ireland. We provide chimney sweeping and related services in the Dublin area. For the purposes of data protection law, we are the data controller in respect of the personal data we collect through this website and our contact form.
          </p>
          <p className="mt-3 leading-relaxed text-cream/90">
          You can contact us at: <a href="mailto:amcsweep58@gmail.com" className="text-accent hover:underline">amcsweep58@gmail.com</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">2. What data we collect</h2>
          <p className="leading-relaxed text-cream/90">
            When you use our contact form or get in touch with us, we may collect:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-cream/90">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>Any message or enquiry you send us</li>
          </ul>
          <p className="mt-3 leading-relaxed text-cream/90">
            We do not collect sensitive personal data through this website. Our website does not use cookies for tracking or advertising.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">3. Why we collect it</h2>
          <p className="leading-relaxed text-cream/90">
            We use your data only to:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-cream/90">
            <li>Respond to your enquiries and provide quotes or information about our services</li>
            <li>Arrange and manage appointments (e.g. chimney sweeps)</li>
            <li>Contact you where necessary in connection with the services we provide</li>
          </ul>
          <p className="mt-3 leading-relaxed text-cream/90">
            We process your data on the basis of your consent (when you submit the contact form) and, where relevant, for the performance of a contract or to take steps at your request before entering into a contract. We do not use your data for marketing unless you have agreed to that separately.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">4. Your rights under the Irish Data Protection Act 2018 and GDPR</h2>
          <p className="leading-relaxed text-cream/90">
            Under the Data Protection Act 2018 and the EU General Data Protection Regulation (GDPR), you have the right to:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-cream/90">
            <li><strong className="text-cream">Access</strong> – request a copy of the personal data we hold about you</li>
            <li><strong className="text-cream">Rectification</strong> – have inaccurate data corrected</li>
            <li><strong className="text-cream">Erasure</strong> – request that we delete your data in certain circumstances</li>
            <li><strong className="text-cream">Restrict processing</strong> – ask us to limit how we use your data in certain cases</li>
            <li><strong className="text-cream">Data portability</strong> – receive your data in a structured, machine-readable format where applicable</li>
            <li><strong className="text-cream">Object</strong> – object to processing based on our legitimate interests</li>
            <li><strong className="text-cream">Withdraw consent</strong> – where we rely on consent, you may withdraw it at any time</li>
          </ul>
          <p className="mt-3 leading-relaxed text-cream/90">
            To exercise any of these rights, please contact us at [Email Address]. You also have the right to lodge a complaint with the Data Protection Commission (DPC), which is the lead supervisory authority for data protection in Ireland.
          </p>
          <p className="mt-3 leading-relaxed text-cream/90">
            <strong className="text-cream">Data Protection Commission (Ireland):</strong> 21 Fitzwilliam Square South, Dublin 2, D02 RD28. Website: <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.dataprotection.ie</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">5. How long we keep your data</h2>
          <p className="leading-relaxed text-cream/90">
            We keep your data only for as long as necessary to respond to your enquiry, provide our services, and meet our legal and regulatory obligations. If you do not become a customer, we will not retain your contact form data longer than is reasonable for follow-up (typically up to 12 months unless you ask us to delete it sooner).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-xl font-semibold">6. Security</h2>
          <p className="leading-relaxed text-cream/90">
            We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or misuse. Data you send via the contact form is transmitted and handled in line with our security practices.
          </p>
        </section>

        <p className="mt-12 text-sm text-cream/70">
          If you have any questions about this privacy policy or our use of your data, please contact us at [Email Address].
        </p>

        <p className="mt-8">
          <Link to="/" className="text-accent hover:underline">← Back to home</Link>
        </p>
      </div>
    </div>
  )
}
