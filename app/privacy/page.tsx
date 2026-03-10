import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Genuitech LLC.",
};

export default function PrivacyPage() {
  return (
    <div className="section-container py-20 md:py-28 max-w-3xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-50 mb-4">
        Privacy Policy
      </h1>
      <p className="text-slate-400 text-sm mb-12">Effective date: March 10, 2026</p>

      <div className="space-y-10 text-slate-300 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">1. Overview</h2>
          <p>
            Genuitech LLC ("Genuitech", "we", "us", or "our") respects your privacy. This Privacy
            Policy explains how we collect, use, and protect information when you visit genuitech.ai
            or engage with our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">2. Information We Collect</h2>
          <p className="mb-3">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>
              <span className="text-slate-300">Contact information</span> — name and email address
              submitted through our contact form.
            </li>
            <li>
              <span className="text-slate-300">Usage data</span> — pages visited, time spent, and
              general interaction data collected via Vercel Analytics (anonymized).
            </li>
            <li>
              <span className="text-slate-300">Business information</span> — details shared during
              client onboarding or project scoping, used solely to deliver services.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">3. How We Use Your Information</h2>
          <p className="mb-3">We use collected information to:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li>Respond to inquiries and deliver requested services</li>
            <li>Improve our website and understand how visitors use it</li>
            <li>Communicate project updates to existing clients</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">4. Third-Party Integrations</h2>
          <p>
            Our internal tools and applications may connect to third-party platforms including
            social media networks, AI service providers, and cloud infrastructure. Data shared
            with these platforms is governed by their respective privacy policies. Genuitech
            limits data sharing to what is necessary to operate the requested service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">5. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfill the purposes
            described in this policy or as required by law. Contact form submissions are retained
            for up to 12 months.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">6. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your
            information. However, no method of transmission over the internet is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">7. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of any personal information we
            hold about you by contacting us at{" "}
            <a href="mailto:hello@genuitech.ai" className="text-cyan-400 hover:underline">
              hello@genuitech.ai
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The effective date at the top
            of this page will reflect the most recent revision. Continued use of our services
            after changes are posted constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">9. Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href="mailto:hello@genuitech.ai" className="text-cyan-400 hover:underline">
              hello@genuitech.ai
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}
