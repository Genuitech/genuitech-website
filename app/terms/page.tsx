import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Genuitech LLC.",
};

export default function TermsPage() {
  return (
    <div className="section-container py-20 md:py-28 max-w-3xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-50 mb-4">
        Terms of Service
      </h1>
      <p className="text-slate-400 text-sm mb-12">Effective date: March 10, 2026</p>

      <div className="space-y-10 text-slate-300 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using any services provided by Genuitech LLC ("Genuitech", "we", "us",
            or "our"), including our website at genuitech.ai and any associated tools or
            applications, you agree to be bound by these Terms of Service. If you do not agree,
            please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">2. Services</h2>
          <p>
            Genuitech provides custom AI-powered applications, automation tools, and consulting
            services for businesses. The specific scope of services is defined in individual
            client agreements or statements of work.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">3. Use of Our Website</h2>
          <p>
            You agree to use our website only for lawful purposes. You may not use our site to
            transmit harmful, offensive, or disruptive content, or attempt to gain unauthorized
            access to any part of our systems.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">4. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and software — is the
            property of Genuitech LLC and protected by applicable intellectual property laws.
            Custom work delivered to clients is governed by the terms of the applicable client
            agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Genuitech LLC shall not be liable for any
            indirect, incidental, or consequential damages arising from the use of our website or
            services. Our total liability in any matter is limited to the amount paid by you for
            the relevant service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">6. Third-Party Services</h2>
          <p>
            Our services and tools may integrate with third-party platforms (such as social media
            networks, AI providers, and cloud services). Use of those platforms is subject to
            their own terms and conditions. Genuitech is not responsible for third-party platform
            availability or policy changes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">7. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Continued use of
            our services after changes are posted constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">8. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:contact@genuitech.ai" className="text-cyan-400 hover:underline">
              contact@genuitech.ai
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}
