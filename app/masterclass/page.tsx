import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Senior Masterclass",
  description:
    "Expert-level AI training tailored to your industry. Advanced prompting, custom workflows, and AI strategy led by Genuitech's Senior AI Specialist.",
};

export default function MasterclassPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-24">
      <HeroSection />
      <hr className="section-divider" />
      <WhoThisIsFor />
      <hr className="section-divider" />
      <WhatYoullMaster />
      <hr className="section-divider" />
      <FormatOptions />
      <hr className="section-divider" />
      <WhatMakesThisDifferent />
      <BottomCTA />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(129,140,248,0.1) 0%, rgba(0,212,255,0.05) 40%, transparent 70%)",
        }}
      />
      <div className="section-container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#1e2d4f]/60 bg-[#0d1024] px-4 py-1.5 mb-8">
          <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
          </svg>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Expert-Level AI Training
          </span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-slate-50 mb-6 leading-tight max-w-4xl mx-auto">
          Beyond the Basics.{" "}
          <span className="gradient-text">Master AI at the Expert Level.</span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Intensive, hands-on training led by Genuitech&apos;s Senior AI Specialist
          — tailored to your industry, your workflows, and your strategic goals.
          This is not a beginner course.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Request a Custom Masterclass
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#what-youll-master" className="btn-secondary text-base px-8 py-4">
            See the Curriculum
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: "1:1", label: "Tailored to your business" },
            { value: "Expert", label: "Led by a practitioner, not a presenter" },
            { value: "Ongoing", label: "Follow-up support included" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Who This Is For ─────────────────────────────────────────────────────── */

function WhoThisIsFor() {
  const audiences = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      ),
      title: "Executives & Founders",
      description:
        "You need AI strategy, not AI tutorials. Learn how to evaluate AI opportunities, allocate resources, and drive adoption across your organization.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Department Heads & Team Leads",
      description:
        "You already use AI but your team doesn't. Learn how to build repeatable AI workflows and scale them across your department.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      title: "Technical Leads & Architects",
      description:
        "You understand the technology but need to go deeper. Advanced prompting techniques, API integrations, and building custom AI pipelines for production.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
      title: "Operations & Strategy Leaders",
      description:
        "You see the competitive potential but need a roadmap. Learn to identify the highest-ROI AI opportunities and build an implementation plan.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Not for Beginners
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-4">
            Who This Is{" "}
            <span className="gradient-text">Built For</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            If you&apos;re looking for &ldquo;what is AI?&rdquo; — that&apos;s our{" "}
            <Link href="/jumpstart" className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors">
              JumpStart webinar
            </Link>
            . This masterclass is for leaders who are ready to go deep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <div key={a.title} className="card p-8">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                {a.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-slate-50 mb-2">
                {a.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── What You'll Master ──────────────────────────────────────────────────── */

function WhatYoullMaster() {
  const topics = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      title: "Advanced Prompting",
      description:
        "Move beyond basic prompts into multi-step reasoning, chain-of-thought engineering, few-shot examples, system prompts, and structured output techniques that produce production-grade results.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Custom AI Workflows",
      description:
        "Design and build AI workflows tailored to your specific business processes. Automate multi-step tasks, connect to existing tools, and create repeatable systems your team can run without you.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      title: "AI Strategy for Competitive Advantage",
      description:
        "Identify the AI initiatives that will actually move the needle for your business. Prioritize use cases by ROI, build a phased roadmap, and learn to evaluate AI investments like a practitioner.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      title: "Cross-Department Integration",
      description:
        "Break AI out of a single team. Learn patterns for rolling out AI across sales, marketing, operations, finance, and customer service — with governance frameworks that prevent chaos.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      title: "Competitive Analysis with AI",
      description:
        "Use AI to monitor competitors, analyze market trends, and surface insights that would take a human analyst weeks. Build dashboards and alerting systems that run on autopilot.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: "Implementation Planning",
      description:
        "Leave with a concrete plan — not just ideas. Prioritized use cases, timeline, resource requirements, success metrics, and a phased rollout strategy customized to your organization.",
    },
  ];

  return (
    <section id="what-youll-master" className="py-16 md:py-24" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Curriculum
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-4">
            What You&apos;ll{" "}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every session is customized to your industry and goals. These are the
            core domains we cover — adapted to the problems you actually face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div key={topic.title} className="card p-8 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-[#1e2d4f]/60 flex items-center justify-center text-cyan-400 mb-6 group-hover:border-cyan-400/30 transition-colors">
                {topic.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-slate-50 mb-3">
                {topic.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Format Options ──────────────────────────────────────────────────────── */

function FormatOptions() {
  const formats = [
    {
      name: "Intensive Workshop",
      duration: "1 Day",
      description:
        "A full-day, high-intensity session for teams that want to compress maximum learning into a single day. Ideal for leadership offsites or strategic planning sessions.",
      features: [
        "6-8 hours of hands-on training",
        "Custom curriculum built around your goals",
        "Live exercises using your real business data",
        "Implementation roadmap delivered same day",
        "30-day follow-up consultation included",
      ],
      highlight: false,
    },
    {
      name: "Multi-Session Series",
      duration: "4 – 6 Weeks",
      description:
        "Spread the training across weekly sessions so your team can apply what they learn between meetings. Each session builds on the last, with real-world assignments.",
      features: [
        "Weekly 90-minute sessions",
        "Homework and applied exercises between sessions",
        "Progressive skill building from strategy to execution",
        "Individual coaching check-ins",
        "Implementation support throughout the series",
      ],
      highlight: true,
    },
    {
      name: "Custom Engagement",
      duration: "Flexible",
      description:
        "For organizations with unique requirements — multi-team rollouts, ongoing advisory relationships, or integration with existing training programs.",
      features: [
        "Fully custom scope and timeline",
        "Multi-department or multi-location delivery",
        "Ongoing advisory and office hours",
        "Integration with your L&D programs",
        "Executive briefings and board-ready materials",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Delivery Formats
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-4">
            Choose Your{" "}
            <span className="gradient-text">Format</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every engagement is scoped to your needs. Pick the structure that fits
            your team, your timeline, and your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {formats.map((format) => (
            <div
              key={format.name}
              className={
                format.highlight
                  ? "relative rounded-2xl p-px overflow-hidden"
                  : "card p-8 md:p-10 flex flex-col"
              }
              style={
                format.highlight
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.4) 0%, rgba(129,140,248,0.4) 50%, rgba(0,212,255,0.2) 100%)",
                    }
                  : undefined
              }
            >
              {format.highlight ? (
                <div className="rounded-2xl bg-[#07091a] p-8 md:p-10 h-full flex flex-col">
                  <FormatContent format={format} />
                </div>
              ) : (
                <FormatContent format={format} />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm">
            All formats include follow-up consultation and implementation support.
            Pricing is custom — based on scope, team size, and delivery format.
          </p>
        </div>
      </div>
    </section>
  );
}

function FormatContent({
  format,
}: {
  format: {
    name: string;
    duration: string;
    description: string;
    features: string[];
    highlight: boolean;
  };
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display font-semibold text-xl text-slate-50">
          {format.name}
        </h3>
        {format.highlight && (
          <span className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full font-medium">
            Most Popular
          </span>
        )}
      </div>
      <div className="font-display font-bold text-3xl gradient-text mb-4">
        {format.duration}
      </div>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {format.description}
      </p>
      <ul className="space-y-3 mb-8 flex-1">
        {format.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-slate-300"
          >
            <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={
          format.highlight
            ? "btn-primary w-full justify-center py-3"
            : "btn-secondary w-full justify-center py-3"
        }
      >
        {format.highlight ? (
          <>
            Request This Format
            <ArrowRight className="w-4 h-4" />
          </>
        ) : (
          "Request This Format"
        )}
      </Link>
    </>
  );
}

/* ── What Makes This Different ───────────────────────────────────────────── */

function WhatMakesThisDifferent() {
  const comparisons = [
    {
      generic: "Generic AI overview for a general audience",
      masterclass: "Curriculum built around YOUR industry, YOUR workflows, YOUR competitive landscape",
    },
    {
      generic: "Led by a presenter reading slides",
      masterclass: "Led by Genuitech's Senior AI Specialist — a practitioner who builds AI systems daily",
    },
    {
      generic: "One-size-fits-all content",
      masterclass: "Hands-on exercises using your actual business data and processes",
    },
    {
      generic: "You leave with notes",
      masterclass: "You leave with an implementation plan, ready to execute",
    },
    {
      generic: "No follow-up after the event",
      masterclass: "Follow-up consultation and implementation support included",
    },
    {
      generic: "Theory-heavy, surface-level",
      masterclass: "Deep, technical, strategic — built for people who already use AI",
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Difference
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-4">
            Not Another{" "}
            <span className="gradient-text">AI Seminar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Most AI training is generic, surface-level, and led by people who
            don&apos;t build AI systems. This is the opposite.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table header */}
          <div className="grid grid-cols-2 gap-4 mb-4 px-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Generic AI Training
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                Genuitech Masterclass
              </span>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-3">
            {comparisons.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-4 rounded-xl border border-[#1e2d4f]/60 overflow-hidden"
              >
                <div className="p-5 bg-[#07091a]/50">
                  <p className="text-slate-500 text-sm leading-relaxed line-through decoration-slate-700">
                    {row.generic}
                  </p>
                </div>
                <div className="p-5 bg-cyan-400/[0.03]">
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {row.masterclass}
                  </p>
                </div>
              </div>
            ))}
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
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(129,140,248,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="section-container relative z-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-[#1e2d4f]/60 flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </div>

        <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-50 mb-4 max-w-3xl mx-auto">
          Ready to Move Beyond{" "}
          <span className="gradient-text">Surface-Level AI?</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Every masterclass is custom-scoped. Tell us about your team, your
          industry, and your goals — we&apos;ll design the engagement and send you a
          proposal within 48 hours.
        </p>
        <Link href="/contact" className="btn-primary text-base px-10 py-4">
          Request a Custom Masterclass
          <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-slate-600 text-sm mt-6">
          No public pricing. No generic packages. Every engagement is scoped to you.
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
