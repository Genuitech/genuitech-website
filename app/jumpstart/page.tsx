"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Metadata } from "next";

export default function JumpStartPage() {
  return (
    <div className="min-h-screen bg-[#07091a] pt-24">
      <HeroSection />
      <WhatYouGet />
      <WebinarBreakdown />
      <VideoSeries />
      <PricingSection />
      <FAQSection />
      <BottomCTA />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container text-center">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
          AI JumpStart by Genuitech
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-50 mb-6 leading-tight">
          Learn AI in 60 Minutes.{" "}
          <span className="gradient-text">Start Using It Today.</span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-8">
          A live, hands-on webinar that walks you through setting up Claude AI,
          writing the right prompts, and putting AI to work in your business —
          with a real person answering your questions.
        </p>

        {/* Promo Video */}
        <div className="max-w-3xl mx-auto mb-10 rounded-xl overflow-hidden border border-[#1e2d4f]/60">
          <video
            className="w-full"
            controls
            poster="https://cdn.publer.com/uploads/photos/6a1f18e91f271afe8558fd0e.jpg"
            preload="metadata"
          >
            <source
              src="https://cdn.publer.com/uploads/videos/6a1f18e91f271afe8558fd0d/JumpStart_AI_Website_Video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="btn-primary text-base px-10 py-4">
            Sign Up Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#what-you-get" className="btn-secondary text-base px-8 py-4">
            See What&apos;s Included
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── What You Get ─────────────────────────────────────────────────────────── */

function WhatYouGet() {
  const benefits = [
    {
      icon: "🎯",
      title: "60-Minute Live Webinar",
      description:
        "Not a recording. A live session where you follow along, ask questions, and leave with AI actually working for you.",
    },
    {
      icon: "🛠",
      title: "Hands-On Claude Setup",
      description:
        "The first 30-40 minutes walks you through setting up Claude, connecting it to your workflow, and writing prompts that get real results.",
    },
    {
      icon: "💬",
      title: "Live Q&A with Our Team",
      description:
        "The last 15-20 minutes is a live conversation with a Genuitech team member. Your questions, answered in real time.",
    },
    {
      icon: "📚",
      title: "26 Follow-Up Videos",
      description:
        "After the webinar, unlock 26 how-to videos covering AI for your business and personal life. Released weekly or available in bulk.",
    },
  ];

  return (
    <section id="what-you-get" className="py-16 md:py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What&apos;s Included
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Start Using AI</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No prior AI experience required. We start from zero and get you productive fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="card p-8">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-display font-semibold text-xl text-slate-50 mb-2">
                {b.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Webinar Breakdown ────────────────────────────────────────────────────── */

function WebinarBreakdown() {
  const timeline = [
    { time: "0 – 10 min", title: "Getting Set Up", description: "Create your Claude account, configure your workspace, and connect the tools you already use." },
    { time: "10 – 25 min", title: "Prompt Engineering That Works", description: "Learn the exact prompts that turn Claude from a chatbot into a business tool. We cover the frameworks that get consistent, useful results." },
    { time: "25 – 40 min", title: "Real Business Applications", description: "Apply what you've learned to real scenarios: email drafting, report generation, data analysis, customer responses, and more." },
    { time: "40 – 60 min", title: "Live Q&A", description: "A Genuitech team member answers your questions live. No generic advice — specific answers for your specific situation." },
  ];

  return (
    <section className="py-16 md:py-20" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The 60-Minute Breakdown
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50">
            What Happens in the Webinar
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-cyan-400 font-display font-bold text-sm">{item.time}</span>
              </div>
              <div className="flex-shrink-0 w-px bg-[#1e2d4f] relative">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-cyan-400" />
              </div>
              <div className="pb-8">
                <h3 className="font-display font-semibold text-lg text-slate-50 mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Video Series ─────────────────────────────────────────────────────────── */

function VideoSeries() {
  const topics = [
    "AI for email management and drafting",
    "Automating reports and summaries",
    "AI-powered customer service responses",
    "Data analysis without spreadsheet formulas",
    "Content creation for marketing and social media",
    "AI for scheduling and calendar management",
    "Building AI workflows for your specific industry",
    "Advanced prompt techniques for complex tasks",
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              After the Webinar
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
              26 Videos.{" "}
              <span className="gradient-text">26 Weeks of Growth.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6">
              Each video teaches you a specific AI skill you can apply immediately.
              Released weekly so you build momentum over time — or purchase all 26
              upfront if you want to move faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="card p-4 text-center flex-1">
                <div className="font-display font-bold text-2xl gradient-text">$250</div>
                <div className="text-slate-400 text-sm">per month for 6 months</div>
                <div className="text-slate-500 text-xs mt-1">Released weekly</div>
              </div>
              <div className="card p-4 text-center flex-1 border-cyan-400/30">
                <div className="font-display font-bold text-2xl gradient-text">Bulk</div>
                <div className="text-slate-400 text-sm">All 26 videos at once</div>
                <div className="text-slate-500 text-xs mt-1">Best value</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Topics covered include
            </h4>
            <ul className="space-y-3">
              {topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-slate-300">
                  <CheckIcon className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {topic}
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm mt-4">...and 18 more</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ──────────────────────────────────────────────────────────────── */

function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20" style={{ background: "#0d1024" }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            Simple, Transparent Pricing
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Webinar Only */}
          <div className="card p-8 md:p-10">
            <h3 className="font-display font-semibold text-xl text-slate-50 mb-2">
              Live Webinar
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              60-minute live session with hands-on setup and Q&A
            </p>
            <div className="mb-6">
              <span className="font-display font-bold text-4xl text-slate-50">$500</span>
              <span className="text-slate-500 text-sm ml-2">one-time</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Live, interactive — not pre-recorded",
                "Claude setup walkthrough",
                "Prompt engineering fundamentals",
                "15-20 min live Q&A",
                "Recording sent after the session",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-secondary w-full justify-center py-3">
              Sign Up for Webinar
            </Link>
          </div>

          {/* Webinar + Videos */}
          <div
            className="relative rounded-2xl p-px overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,255,0.4) 0%, rgba(129,140,248,0.4) 50%, rgba(0,212,255,0.2) 100%)",
            }}
          >
            <div className="rounded-2xl bg-[#07091a] p-8 md:p-10 h-full">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display font-semibold text-xl text-slate-50">
                  Webinar + Video Series
                </h3>
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full font-medium">
                  Most Popular
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-6">
                Live webinar plus 26 follow-up videos over 6 months
              </p>
              <div className="mb-6">
                <span className="font-display font-bold text-4xl text-slate-50">$500</span>
                <span className="text-slate-500 text-sm ml-2">
                  + $250/mo for 6 months
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in the Live Webinar",
                  "26 how-to videos (business + personal AI use)",
                  "Released weekly to build momentum",
                  "Or purchase all 26 in bulk upfront",
                  "Covers email, reports, scheduling, content, data & more",
                  "No AI experience needed — start from zero",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckIcon className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary w-full justify-center py-3">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <CountdownBanner />
      </div>
    </section>
  );
}

/* ── Countdown Banner ─────────────────────────────────────────────────────── */

function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState(20 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => Math.max(t - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft <= 0) return null;

  return (
    <div className="mt-8 max-w-2xl mx-auto text-center">
      <div className="card p-6 border-cyan-400/30 bg-cyan-400/5">
        <p className="text-cyan-400 font-display font-bold text-lg mb-1">
          Limited Time Offer
        </p>
        <p className="text-slate-300 text-sm mb-3">
          Sign up in the next {minutes}:{seconds.toString().padStart(2, "0")} and
          receive a discount on the webinar + video bundle.
        </p>
        <Link href="/contact" className="btn-primary text-sm px-8 py-3">
          Claim Your Discount
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

/* ── FAQ ───────────────────────────────────────────────────────────────────── */

function FAQSection() {
  const faqs = [
    {
      q: "Do I need any AI experience?",
      a: "None at all. We start from zero and walk you through every step. By the end of the webinar, you'll have Claude set up and working.",
    },
    {
      q: "Is this live or pre-recorded?",
      a: "100% live. You follow along in real time, and a Genuitech team member answers your questions during the Q&A. A recording is sent afterward.",
    },
    {
      q: "What if I already use ChatGPT or other AI tools?",
      a: "Great — you'll learn what makes Claude different and how to get more from AI with better prompting techniques. The skills transfer across all AI tools.",
    },
    {
      q: "Can I buy the 26 videos without the webinar?",
      a: "The webinar is the foundation. The videos build on what you learn live. We recommend starting with the webinar to get the most value from the series.",
    },
    {
      q: "What if I want someone to just set it up for me instead?",
      a: "That's our Claude for Small Business service. We come in, set up everything, and maintain it for you. Check out our Services page or contact us directly.",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl text-slate-50">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="card p-6">
              <h3 className="font-display font-semibold text-slate-50 mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Bottom CTA ───────────────────────────────────────────────────────────── */

function BottomCTA() {
  return (
    <section className="py-16 md:py-20" style={{ background: "#0d1024" }}>
      <div className="section-container text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
          Stop researching AI.{" "}
          <span className="gradient-text">Start using it.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          In 60 minutes, you&apos;ll go from curious to capable. Join the next
          live AI JumpStart webinar and take control of AI for your business.
        </p>
        <Link href="/contact" className="btn-primary text-base px-10 py-4">
          Reserve Your Spot
          <ArrowRight className="w-5 h-5" />
        </Link>
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


