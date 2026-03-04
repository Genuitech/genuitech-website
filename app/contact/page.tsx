import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute discovery call with Genuitech. Tell us your biggest operational bottleneck and we'll tell you if AI can solve it.",
};

const contactMethods = [
  {
    icon: <MailIcon />,
    label: "Email",
    value: "hello@genuitech.ai",
    href: "mailto:hello@genuitech.ai",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "Genuitech on LinkedIn",
    href: "https://linkedin.com/company/genuitech",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-24">

      {/* Header */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-2xl">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-50 mb-6 leading-tight">
              Let&apos;s Talk About{" "}
              <span className="gradient-text">Your Problem</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Book a free 30-minute discovery call. You walk us through your biggest
              operational headache — we&apos;ll tell you honestly if AI can solve it and
              what that would look like.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 md:p-10">
                <h2 className="font-display font-semibold text-2xl text-slate-50 mb-6">
                  Send Us a Message
                </h2>

                {/* NOTE: Wire this up to Formspree, Resend, or your own email handler */}
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="Jane"
                        className="w-full px-4 py-3 rounded-lg bg-[#0d1024] border border-[#1e2d4f] text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Smith"
                        className="w-full px-4 py-3 rounded-lg bg-[#0d1024] border border-[#1e2d4f] text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#0d1024] border border-[#1e2d4f] text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Corp (optional)"
                      className="w-full px-4 py-3 rounded-lg bg-[#0d1024] border border-[#1e2d4f] text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      What&apos;s your biggest operational bottleneck?
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe the manual process or problem you want to automate..."
                      className="w-full px-4 py-3 rounded-lg bg-[#0d1024] border border-[#1e2d4f] text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-base py-4"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    We respond within 1 business day.
                  </p>
                </form>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* What to expect */}
              <div className="card p-6">
                <h3 className="font-display font-semibold text-lg text-slate-50 mb-4">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We respond within 1 business day to schedule a call." },
                    { step: "2", text: "You get a free 30-minute discovery session — no pitch." },
                    { step: "3", text: "We give you an honest assessment of what AI can and can't do for your situation." },
                    { step: "4", text: "If it's a fit, we'll walk you through the next step and a rough estimate." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-semibold flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <p className="text-slate-400 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="card p-6">
                <h3 className="font-display font-semibold text-lg text-slate-50 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#0d1024] border border-[#1e2d4f] flex items-center justify-center text-slate-500 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <div className="text-xs text-slate-600">{method.label}</div>
                        <div className="text-sm">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* No BS note */}
              <div
                className="rounded-xl p-5 border text-sm text-slate-400 leading-relaxed"
                style={{
                  background: "rgba(0,212,255,0.04)",
                  borderColor: "rgba(0,212,255,0.15)",
                }}
              >
                <span className="text-cyan-400 font-medium">No sales scripts here.</span>{" "}
                We&apos;re a small team of builders. If your use case is a good fit, we&apos;ll
                tell you. If it&apos;s not, we&apos;ll tell you that too.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
