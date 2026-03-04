import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#0d1024" }}>
      <div className="section-container">

        {/* Gradient border card */}
        <div
          className="relative rounded-2xl p-px overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.3) 0%, rgba(129,140,248,0.3) 50%, rgba(0,212,255,0.1) 100%)",
          }}
        >
          <div className="relative rounded-2xl bg-[#07091a] px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">

            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,212,255,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Ready to Get Started?
              </p>

              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-50 mb-6 leading-tight">
                What&apos;s Your{" "}
                <span className="gradient-text">Biggest Bottleneck?</span>
              </h2>

              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Book a free 30-minute discovery call. We&apos;ll listen to your problem,
                tell you if AI can solve it, and give you a clear next step —
                no sales pitch, no commitment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-base px-10 py-4">
                  Book a Free Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/services" className="btn-secondary text-base px-8 py-4">
                  Explore Services
                </Link>
              </div>

              <p className="mt-6 text-slate-500 text-sm">
                No commitment. No spam. Just a real conversation about your problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
