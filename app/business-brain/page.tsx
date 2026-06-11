import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Brain",
  description:
    "AI that thinks alongside your team. 5 custom AI agents plus Brain AI monitoring your communications for growth opportunities. $2,500/month.",
};

export default function BusinessBrainPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-24">
      <HeroSection />
      <WhatBrainAIDoes />
      <TheFiveAgents />
      <HowItWorks />
      <WhatsIncluded />
      <PricingSection />
      <BottomCTA />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, rgba(129,140,248,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="section-container text-center relative z-10">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Business Brain by Genuitech
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-slate-50 mb-6 leading-tight max-w-4xl mx-auto">
          AI That Thinks{" "}
          <span className="gradient-text">Alongside Your Team</span>
        </h1>
        <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed">
          Not another tool. An AI-powered nervous system for your business.
          Five custom agents, a communication intelligence engine, and a
          roadmap for continuous AI expansion.
        </p>
        <p className="text-slate-500 text-base mb-10">
          The full AI transformation — designed, deployed, and managed for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Schedule Your Discovery Meeting
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#pricing" className="btn-secondary text-base px-8 py-4">
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── What Brain AI Does ──────────────────────────────────────────────────── */

function WhatBrainAIDoes() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              The Intelligence Engine
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-6">
              Brain AI Reads Between the Lines{" "}
              <span className="gradient-text">So You Don&apos;t Have To</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Brain AI is loaded into your internal communications — email,
              Microsoft Teams, Slack — and continuously monitors the flow of
              conversation across your organization. It doesn&apos;t just listen.
              It understands context, recognizes patterns, and surfaces the
              insights your team would otherwise miss.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Identifies Growth Opportunities",
                  desc: "Spots upsell signals, partnership openings, and untapped revenue buried in day-to-day messages.",
                },
                {
                  title: "Flags Risks Early",
                  desc: "Detects client dissatisfaction, project delays, and operational friction before they escalate.",
                },
                {
                  title: "Suggests Next Actions",
                  desc: "Delivers clear, prioritized recommendations so your team can act fast on the insights that matter.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/10 flex items-center justify-center">
                      <CheckIcon className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-50 mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual diagram */}
          <div className="relative">
            <div className="card p-8 md:p-10 border-cyan-400/20">
              <div className="space-y-6">
                {/* Sources */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                    Brain AI Monitors
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Email", icon: <EmailIcon className="w-6 h-6 text-cyan-400" /> },
                      { label: "Teams", icon: <ChatIcon className="w-6 h-6 text-indigo-400" /> },
                      { label: "Slack", icon: <HashIcon className="w-6 h-6 text-purple-400" /> },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="bg-[#07091a] rounded-lg p-4 text-center border border-[#1e2d4f]/60"
                      >
                        <div className="flex justify-center mb-2">{s.icon}</div>
                        <span className="text-slate-300 text-xs font-medium">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-6 bg-gradient-to-b from-cyan-400/60 to-indigo-400/60" />
                    <BrainIcon className="w-10 h-10 text-cyan-400" />
                    <p className="text-xs text-slate-500 font-medium">Brain AI</p>
                    <div className="w-px h-6 bg-gradient-to-b from-indigo-400/60 to-cyan-400/60" />
                  </div>
                </div>

                {/* Outputs */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                    Delivers
                  </p>
                  <div className="space-y-2">
                    {[
                      "Growth opportunity alerts",
                      "Risk and friction warnings",
                      "Prioritized action items",
                      "Weekly executive briefings",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 bg-[#07091a] rounded-lg px-4 py-2.5 border border-[#1e2d4f]/60"
                      >
                        <SparkleIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── The 5 Agents ────────────────────────────────────────────────────────── */

function TheFiveAgents() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Your Custom AI Workforce
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            5 Agents.{" "}
            <span className="gradient-text">Chosen for Maximum Impact.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every business is different. That&apos;s why we don&apos;t hand you a
            pre-built set of tools. We analyze your operations and identify the
            five AI agents that will drive the most value for your specific
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Discovery Card — full width on top on mobile, spans 1 col on desktop */}
          <div className="lg:row-span-2 card p-8 md:p-10 border-cyan-400/20 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
              <SearchIcon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-50 mb-3">
              The Discovery Process
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
              It starts with a 60-minute discovery meeting. We dig into your
              workflows, your team structure, your bottlenecks, and your goals.
              Then our team analyzes your business and designs the five
              highest-impact AI agents — purpose-built for how your company
              actually works.
            </p>
            <div className="space-y-3 pt-4 border-t border-[#1e2d4f]/60">
              {[
                "Deep-dive into your operations",
                "Workflow and process mapping",
                "Bottleneck and opportunity analysis",
                "Agent design tailored to your stack",
                "Deployment plan with timelines",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Example Agent Types */}
          {[
            {
              icon: <PhoneIcon className="w-5 h-5 text-cyan-400" />,
              title: "Operations Agents",
              desc: "Automate scheduling, data entry, document processing, and internal routing so your team spends zero time on busywork.",
            },
            {
              icon: <ChartIcon className="w-5 h-5 text-indigo-400" />,
              title: "Revenue Agents",
              desc: "Qualify leads, draft proposals, follow up with prospects, and manage pipeline — all running in the background.",
            },
            {
              icon: <ShieldIcon className="w-5 h-5 text-cyan-400" />,
              title: "Compliance Agents",
              desc: "Monitor regulatory requirements, flag missing documentation, and ensure nothing falls through the cracks.",
            },
            {
              icon: <UsersIcon className="w-5 h-5 text-indigo-400" />,
              title: "Customer Experience Agents",
              desc: "Handle inbound inquiries, resolve common issues, and escalate only what truly needs a human.",
            },
          ].map((agent) => (
            <div key={agent.title} className="card p-6 flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#07091a] border border-[#1e2d4f]/60 flex items-center justify-center">
                {agent.icon}
              </div>
              <div>
                <h4 className="font-display font-semibold text-slate-50 mb-1">
                  {agent.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {agent.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          These are examples — your five agents are custom-designed based on your discovery session.
        </p>
      </div>
    </section>
  );
}

/* ── How It Works ────────────────────────────────────────────────────────── */

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Discovery Meeting",
      desc: "A 60-minute deep-dive into your business. We learn your workflows, your pain points, and where AI can create the most leverage.",
      accent: "from-cyan-400 to-cyan-400",
    },
    {
      step: "02",
      title: "Analysis & Agent Design",
      desc: "Our team analyzes your operations and designs five custom AI agents — each one mapped to a specific high-impact process in your business.",
      accent: "from-cyan-400 to-indigo-400",
    },
    {
      step: "03",
      title: "Deployment",
      desc: "We build, test, and deploy all five agents plus Brain AI into your systems. Your team gets full training and support from day one.",
      accent: "from-indigo-400 to-purple-400",
    },
    {
      step: "04",
      title: "Quarterly Expansion",
      desc: "Every quarter, we review performance and identify new agents to deploy. Your AI footprint grows alongside your business at $250/month per agent.",
      accent: "from-purple-400 to-cyan-400",
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            From Discovery to{" "}
            <span className="gradient-text">Full AI Transformation</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A clear, structured path to making AI a core part of how your business operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative group">
              <div className="card p-8 h-full flex flex-col">
                {/* Step number with gradient underline */}
                <div className="mb-5">
                  <span className="font-display font-bold text-4xl gradient-text">
                    {s.step}
                  </span>
                  <div
                    className={`h-0.5 w-12 mt-2 rounded-full bg-gradient-to-r ${s.accent}`}
                  />
                </div>
                <h3 className="font-display font-semibold text-xl text-slate-50 mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {s.desc}
                </p>
              </div>

              {/* Connector arrow — hidden on last item and on mobile */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[#1e2d4f]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── What's Included ─────────────────────────────────────────────────────── */

function WhatsIncluded() {
  const included = [
    "5 custom AI agents designed for your business",
    "Brain AI monitoring across email, Teams, and Slack",
    "60-minute discovery meeting with our team",
    "Full workflow and process analysis",
    "Agent deployment, testing, and integration",
    "Team training and onboarding",
    "Quarterly performance reviews and optimization",
    "Additional agents available at $250/month each",
    "Dedicated account manager",
    "Priority support and SLA",
    "Ongoing monitoring and maintenance",
    "Quarterly strategic roadmap updates",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Everything You Get
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            The Complete{" "}
            <span className="gradient-text">Business Brain Package</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            This isn&apos;t a subscription to a dashboard. It&apos;s a full AI
            transformation — built, deployed, and managed for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 text-cyan-400" />
                    </div>
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ─────────────────────────────────────────────────────────────── */

function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            One Plan.{" "}
            <span className="gradient-text">Total Transformation.</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Premium pricing card with gradient border */}
          <div
            className="relative rounded-2xl p-px overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,255,0.5) 0%, rgba(129,140,248,0.5) 50%, rgba(0,212,255,0.3) 100%)",
            }}
          >
            <div className="rounded-2xl bg-[#07091a] p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                  <SparkleIcon className="w-3.5 h-3.5" />
                  Flagship Offering
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-50 mb-2">
                  Business Brain
                </h3>
                <div className="mb-2">
                  <span className="font-display font-bold text-5xl md:text-6xl text-slate-50">
                    $2,500
                  </span>
                  <span className="text-slate-400 text-lg ml-2">/month</span>
                </div>
                <p className="text-slate-500 text-sm">
                  3-year agreement
                </p>
              </div>

              {/* ROI framing */}
              <div className="bg-[#0d1024] rounded-xl p-5 mb-8 border border-[#1e2d4f]/60">
                <p className="text-slate-300 text-sm leading-relaxed text-center">
                  At $2,500/month, Business Brain costs less than a single
                  part-time hire — but delivers the output of an entire AI
                  department. Most clients see measurable ROI within the first
                  90 days.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "5 custom AI agents deployed to your business",
                  "Brain AI communication monitoring",
                  "Dedicated account manager",
                  "Quarterly reviews and new agent deployment",
                  "Additional agents at $250/month each",
                  "Full training, support, and maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="btn-primary w-full justify-center py-4 text-base"
              >
                Schedule Your Discovery Meeting
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Expansion add-on note */}
        <div className="max-w-lg mx-auto mt-6 text-center">
          <div className="card p-5">
            <p className="text-slate-400 text-sm">
              <span className="text-slate-300 font-medium">Quarterly expansion: </span>
              After the initial deployment, add new agents each quarter for just
              $250/month per agent. Your AI footprint scales as your business grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Bottom CTA ──────────────────────────────────────────────────────────── */

function BottomCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(129,140,248,0.06) 0%, rgba(0,212,255,0.03) 50%, transparent 70%)",
        }}
      />

      <div className="section-container text-center relative z-10">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-6 max-w-3xl mx-auto">
          Your competitors aren&apos;t waiting.{" "}
          <span className="gradient-text">Neither should you.</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          The discovery meeting is free. In 60 minutes, we&apos;ll map your
          highest-impact AI opportunities and show you exactly what Business
          Brain looks like for your business.
        </p>
        <Link href="/contact" className="btn-primary text-base px-12 py-4">
          Schedule Your Discovery Meeting
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-slate-600 text-sm mt-4">
          No commitment required. Just a conversation.
        </p>
      </div>
    </section>
  );
}

/* ── Icons ─────────────────────────────────────────────────────────────────── */

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

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.75-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 005.982-2.275M12 21a8.966 8.966 0 01-5.982-2.275M12 21v-3m0-6v3m4.5-7.125a3.375 3.375 0 11-6.75 0"
      />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
}

function HashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.6 19.5m-2.4-19.5l-3.6 19.5"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}
