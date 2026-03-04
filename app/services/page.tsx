import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom AI agents for phone answering, document processing, scheduling, social media automation, data search, and more. Built for small and mid-size businesses.",
};

const services = [
  {
    number: "01",
    title: "AI Phone Answering & Lead Qualification",
    tagline: "Never miss a call. Never miss a lead.",
    description:
      "Your AI phone agent answers every inbound call, collects caller information, qualifies the prospect based on your criteria, and books appointments directly to your calendar — all without a human picking up. Works after hours, on weekends, and during your busiest days.",
    capabilities: [
      "Natural language call handling",
      "Custom qualification scripts",
      "Calendar integration (Google, Outlook, Calendly)",
      "Call transcripts and lead summaries",
      "SMS follow-up after the call",
    ],
    bestFor: "Service businesses, healthcare, real estate, law firms, any business that relies on inbound calls",
  },
  {
    number: "02",
    title: "Document Processing & Data Extraction",
    tagline: "Turn paperwork into structured data, automatically.",
    description:
      "Upload any document — invoice, W-2, bank statement, insurance form, purchase order — and our AI extracts the relevant data, validates it, and routes it to the right system. No more manual data entry, no more transcription errors.",
    capabilities: [
      "Invoice and receipt processing",
      "W-2 and 1099 extraction to tax software",
      "Bank statement categorization",
      "PDF → structured data pipelines",
      "Integration with QuickBooks, UltraTax, and more",
    ],
    bestFor: "Accounting firms, bookkeepers, insurance agencies, logistics companies",
  },
  {
    number: "03",
    title: "Scheduling & Calendar Automation",
    tagline: "Eliminate the back-and-forth forever.",
    description:
      "AI handles your entire scheduling workflow: initial booking, confirmation emails, reminders, reschedule requests, and follow-ups. Your team focuses on the appointment itself — not managing it.",
    capabilities: [
      "Intelligent availability matching",
      "Automated confirmation and reminders",
      "Reschedule and cancellation handling",
      "Multi-person and multi-location scheduling",
      "Integration with any calendar system",
    ],
    bestFor: "Consultants, medical/dental practices, salons, fitness studios, repair services",
  },
  {
    number: "04",
    title: "Social Media Automation",
    tagline: "Publish great content on every platform, on autopilot.",
    description:
      "A fully autonomous social media system that researches trending topics, writes platform-specific posts, generates on-brand images, produces short-form videos, and publishes on a weekly schedule across LinkedIn, TikTok, Instagram, YouTube, and Facebook.",
    capabilities: [
      "AI-researched content from industry sources",
      "Platform-native post writing (tone, format, length)",
      "DALL-E 3 image generation with brand style",
      "AI avatar video content (HeyGen + Runway ML)",
      "Automated scheduling and publishing",
    ],
    bestFor: "Any business that wants a consistent social presence without hiring a social media manager",
  },
  {
    number: "05",
    title: "Data Search & Routing Automation",
    tagline: "Find any record, in any system, instantly.",
    description:
      "We connect your spreadsheets, databases, filing systems, and cloud storage so your team can search across everything from one place. The AI finds the right record, pulls it, and routes it to the right person — in seconds.",
    capabilities: [
      "Cross-system search (Excel, GoFileRoom, SharePoint, etc.)",
      "Automated record matching and deduplication",
      "Smart routing to the right team member",
      "Audit trails for compliance",
      "Integration with existing file management systems",
    ],
    bestFor: "Accounting, legal, title companies, any business managing large document libraries",
  },
  {
    number: "06",
    title: "Custom AI Workflow Agents",
    tagline: "If it's a process, we can automate it.",
    description:
      "Not every bottleneck fits a category. If your team is doing any repetitive, rules-based task — data entry, report generation, internal communications, compliance checks — we'll map it and build an agent for it. This is where we do our best work.",
    capabilities: [
      "Free process mapping session",
      "Custom agent design and build",
      "Integration with your existing tools",
      "Training for your team",
      "Ongoing monitoring and support",
    ],
    bestFor: "Any industry, any size — if it's repeatable, we can automate it",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-24">

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Services
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-50 mb-6">
            AI Agents Built for{" "}
            <span className="gradient-text">Your Business</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-8">
            We don&apos;t sell licenses. We build solutions. Every agent is designed around
            your specific workflow and deployed in weeks.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Call to Discuss Your Use Case
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Services List */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="space-y-6">
            {services.map((service, i) => (
              <div
                key={service.number}
                className="card p-8 md:p-10 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* Left */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="font-display font-bold text-3xl gradient-text flex-shrink-0">
                        {service.number}
                      </span>
                      <div>
                        <h2 className="font-display font-semibold text-2xl text-slate-50 mb-1">
                          {service.title}
                        </h2>
                        <p className="text-cyan-400 text-sm font-medium">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                        Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-[#1e2d4f]/60">
                      <p className="text-xs text-slate-500">
                        <span className="text-slate-400 font-medium">Best for: </span>
                        {service.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20" style={{ background: "#0d1024" }}>
        <div className="section-container text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            Don&apos;t see your use case?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            We&apos;ve built agents for processes that don&apos;t fit any category. If your team
            does it manually today, we can probably automate it.
          </p>
          <Link href="/contact" className="btn-primary">
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
