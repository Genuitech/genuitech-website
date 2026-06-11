import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Foundations",
  description:
    "Done-for-you AI setup for small businesses. Custom AI agents deployed into your workflows in weeks, not months. Starting at $2,500.",
};

export default function FoundationsPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-24">
      <HeroSection />
      <hr className="section-divider" />
      <WhatsIncluded />
      <HowItWorks />
      <WhoItsFor />
      <PricingSection />
      <BottomCTA />
    </div>
  );
}

/* -- Hero ----------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container text-center">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
          AI Foundations by Genuitech
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-50 mb-6 leading-tight">
          Get AI Set Up Right.{" "}
          <span className="gradient-text">We Handle Everything.</span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-4">
          Done-for-you AI implementation for small businesses. We audit your
          workflows, deploy custom AI agents, integrate your tools, and train
          your team &mdash; so you get results without the learning curve.
        </p>
        <p className="text-slate-500 text-sm max-w-lg mx-auto mb-10">
          Setup starting at $2,500 &middot; Ongoing support from $750/month
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Book Your Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#whats-included" className="btn-secondary text-base px-8 py-4">
            See What&apos;s Included
          </a>
        </div>
      </div>
    </section>
  );
}

/* -- What's Included ------------------------------------------------------ */

const inclusions = [
  {
    title: "AI Workflow Audit",
    description:
      "We map every repetitive process in your business and identify the highest-impact opportunities for AI automation.",
    icon: "audit",
  },
  {
    title: "Custom Agent Deployment",
    description:
      "Purpose-built AI agents configured for your exact workflows — not a generic chatbot, but tools that do real work.",
    icon: "deploy",
  },
  {
    title: "Tool Integration",
    description:
      "We connect your AI agents to the tools you already use: email, CRM, scheduling, invoicing, and more.",
    icon: "integrate",
  },
  {
    title: "Staff Training",
    description:
      "Hands-on training sessions so your team knows exactly how to use, prompt, and get the most from every AI tool we deploy.",
    icon: "train",
  },
  {
    title: "Ongoing Optimization",
    description:
      "AI isn't set-it-and-forget-it. We monitor performance, refine prompts, and adapt agents as your business evolves.",
    icon: "optimize",
  },
  {
    title: "Dedicated Support",
    description:
      "A real person on the Genuitech team assigned to your account. Questions, issues, new ideas — we're a message away.",
    icon: "support",
  },
];

function WhatsIncluded() {
  return (
    <section id="whats-included" className="py-16 md:py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What&apos;s Included
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            A Complete AI Foundation{" "}
            <span className="gradient-text">Built for You</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything your business needs to go from zero AI to fully
            operational — without hiring an in-house team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item) => (
            <div key={item.title} className="card p-8">
              <div className="mb-4">
                <InclusionIcon name={item.icon} />
              </div>
              <h3 className="font-display font-semibold text-xl text-slate-50 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- How It Works --------------------------------------------------------- */

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "A 30-minute conversation to understand your business, your pain points, and where AI can make the biggest impact. No cost, no commitment.",
  },
  {
    number: "02",
    title: "AI Audit",
    description:
      "We dig into your current workflows — tools, processes, bottlenecks — and deliver a clear roadmap of what to automate and why.",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "We build, configure, and integrate your custom AI agents. Your team gets hands-on training before anything goes live.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Monthly optimization, performance monitoring, and a dedicated point of contact. We keep your AI stack running and improving.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 md:py-20" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50">
            From Discovery to Deployment in Weeks
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6 items-start">
              {/* Step number column */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-cyan-400/40 flex items-center justify-center">
                  <span className="font-display font-bold text-sm gradient-text">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full min-h-[48px] bg-[#1e2d4f]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <h3 className="font-display font-semibold text-xl text-slate-50 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- Who It's For --------------------------------------------------------- */

const personas = [
  {
    industry: "Professional Services",
    examples: "Accounting firms, law offices, consultants, agencies",
    pain: "Drowning in admin work that keeps you from billable hours",
  },
  {
    industry: "Healthcare & Wellness",
    examples: "Dental practices, med spas, physical therapy, chiropractic",
    pain: "Front desk overwhelmed by calls, scheduling, and follow-ups",
  },
  {
    industry: "Home Services",
    examples: "HVAC, plumbing, electrical, landscaping, cleaning",
    pain: "Missing leads because no one can answer the phone during jobs",
  },
  {
    industry: "Real Estate & Property",
    examples: "Brokerages, property management, title companies",
    pain: "Too many manual touchpoints from listing to close",
  },
  {
    industry: "Fitness & Coaching",
    examples: "Gyms, personal trainers, athletic programs, online coaches",
    pain: "Spending more time on operations than coaching clients",
  },
  {
    industry: "Retail & E-Commerce",
    examples: "Boutiques, DTC brands, multi-location stores",
    pain: "Inventory, customer service, and marketing eating all your time",
  },
];

function WhoItsFor() {
  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Who It&apos;s For
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            Built for Businesses That Want{" "}
            <span className="gradient-text">Results, Not Homework</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            AI Foundations is for teams that don&apos;t want to become AI experts
            — they want AI working for them while they focus on what they do
            best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div key={p.industry} className="card p-6">
              <h3 className="font-display font-semibold text-lg text-slate-50 mb-1">
                {p.industry}
              </h3>
              <p className="text-cyan-400 text-xs font-medium mb-3">
                {p.examples}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {p.pain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- Pricing -------------------------------------------------------------- */

function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Two tiers based on the complexity of your integration needs.
            Every plan includes a discovery call at no cost.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Basic */}
          <div className="card p-8 md:p-10">
            <h3 className="font-display font-semibold text-xl text-slate-50 mb-1">
              Foundations Basic
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Ideal for businesses with straightforward workflows and standard
              tool integrations.
            </p>
            <div className="mb-2">
              <span className="font-display font-bold text-4xl text-slate-50">
                $2,500
              </span>
              <span className="text-slate-500 text-sm ml-2">setup</span>
            </div>
            <div className="mb-6">
              <span className="font-display font-bold text-2xl text-slate-50">
                $750
              </span>
              <span className="text-slate-500 text-sm ml-2">/month ongoing</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "AI workflow audit",
                "Up to 2 custom AI agents",
                "Integration with core tools (email, CRM, calendar)",
                "Staff training session",
                "Monthly optimization and support",
                "Dedicated account contact",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn-secondary w-full justify-center py-3"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Premium */}
          <div
            className="relative rounded-2xl p-px overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,255,0.4) 0%, rgba(129,140,248,0.4) 50%, rgba(0,212,255,0.2) 100%)",
            }}
          >
            <div className="rounded-2xl bg-[#07091a] p-8 md:p-10 h-full">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-semibold text-xl text-slate-50">
                  Foundations Premium
                </h3>
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full font-medium">
                  Most Popular
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                For businesses with complex workflows, multiple systems, or
                higher-touch integration needs.
              </p>
              <div className="mb-2">
                <span className="font-display font-bold text-4xl text-slate-50">
                  $3,500
                </span>
                <span className="text-slate-500 text-sm ml-2">setup</span>
              </div>
              <div className="mb-6">
                <span className="font-display font-bold text-2xl text-slate-50">
                  $1,000
                </span>
                <span className="text-slate-500 text-sm ml-2">
                  /month ongoing
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Basic",
                  "Up to 5 custom AI agents",
                  "Advanced integrations (multi-system, API, custom connectors)",
                  "Priority support with faster response times",
                  "Bi-weekly optimization reviews",
                  "Quarterly strategy session with the Genuitech team",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="btn-primary w-full justify-center py-3"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-slate-500 text-sm mt-8 max-w-lg mx-auto">
          Not sure which tier you need? The discovery call is free — we&apos;ll
          assess your workflows and recommend the right fit.
        </p>
      </div>
    </section>
  );
}

/* -- Bottom CTA ----------------------------------------------------------- */

function BottomCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
          Stop figuring out AI on your own.{" "}
          <span className="gradient-text">Let us build it for you.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          One discovery call is all it takes. We&apos;ll map your workflows,
          identify the biggest wins, and show you exactly what AI can do for
          your business.
        </p>
        <Link href="/contact" className="btn-primary text-base px-10 py-4">
          Book Your Discovery Call
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

/* -- Icons ---------------------------------------------------------------- */

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function InclusionIcon({ name }: { name: string }) {
  const base = "w-10 h-10 text-cyan-400";

  switch (name) {
    case "audit":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM11 8v6M8 11h6" />
        </svg>
      );
    case "deploy":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a6 6 0 01-7.38-5.84h4.8" />
        </svg>
      );
    case "integrate":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
        </svg>
      );
    case "train":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      );
    case "optimize":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      );
    case "support":
      return (
        <svg className={base} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      );
    default:
      return null;
  }
}
