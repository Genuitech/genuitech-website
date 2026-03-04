import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why AI",
  description:
    "Why small and mid-size businesses are adopting AI automation — and what happens if they don't. Real use cases, real outcomes.",
};

const painPoints = [
  {
    problem: "Your team wastes hours on data entry every week",
    solution: "AI reads, extracts, and files documents automatically — in seconds, with zero errors.",
  },
  {
    problem: "Leads fall through the cracks when no one picks up the phone",
    solution: "An AI phone agent answers every call, qualifies the lead, and books the appointment.",
  },
  {
    problem: "Scheduling takes 10 emails to finalize one meeting",
    solution: "AI handles the full scheduling cycle — from first contact to confirmation — without a human touchpoint.",
  },
  {
    problem: "Your social media presence is inconsistent or nonexistent",
    solution: "A fully automated system researches, writes, designs, and publishes content every week.",
  },
  {
    problem: "Finding a record means digging through multiple systems",
    solution: "AI searches across all your systems and surfaces the right document in seconds.",
  },
];

const faqs = [
  {
    q: "Is this just ChatGPT with a different label?",
    a: "No. ChatGPT is a general-purpose assistant. We build purpose-built agents that are trained on your specific workflow, integrated with your tools, and designed to complete tasks — not just answer questions. Think of the difference between a hammer and a construction crew.",
  },
  {
    q: "Do I need technical staff to use this?",
    a: "Not at all. We handle all the technical setup, integration, and training. Your team interacts with the agent just like any other business tool — no coding required.",
  },
  {
    q: "What if AI makes a mistake?",
    a: "Every agent we build includes validation checks, logging, and a human review step where the stakes are high. We design for the real world, where errors happen — and we build in safeguards accordingly.",
  },
  {
    q: "How is this different from buying off-the-shelf software?",
    a: "Off-the-shelf software is built for the average business. Your processes aren't average. We build to your exact workflow, your existing tools, and your team's way of working — not the other way around.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the complexity of the agent. Book a free discovery call and we'll give you an honest estimate. Most of our agents are priced as one-time build fees with optional monthly support.",
  },
];

export default function WhyAIPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-24">

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="section-container text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Why AI
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-50 mb-6">
            Your Competition Is Already{" "}
            <span className="gradient-text">Using This</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            AI isn&apos;t the future. It&apos;s what your most efficient competitors are running today.
            Here&apos;s what it looks like when it&apos;s built right — and what it costs when it&apos;s ignored.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Problem → Solution */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
              Common Problems.{" "}
              <span className="gradient-text">AI Solutions.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              These aren&apos;t hypothetical. These are the exact problems our clients faced before we built their agents.
            </p>
          </div>

          <div className="space-y-4">
            {painPoints.map((item, i) => (
              <div key={i} className="card p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm">✕</span>
                  </div>
                  <p className="text-slate-300 font-medium">{item.problem}</p>
                </div>
                <div className="flex items-start gap-4 md:border-l md:border-[#1e2d4f]/60 md:pl-6">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 text-sm">✓</span>
                  </div>
                  <p className="text-slate-300">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ background: "#0d1024" }}>
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
              Honest Answers to{" "}
              <span className="gradient-text">Common Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-6 md:p-8">
                <h3 className="font-display font-semibold text-slate-50 mb-3">
                  {faq.q}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#07091a]">
        <div className="section-container text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            Ready to see what AI can do for your business?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Book a free call. No pitch, no pressure — just an honest conversation about your biggest problem.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Discovery Call
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
