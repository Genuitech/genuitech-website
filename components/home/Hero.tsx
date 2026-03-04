import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* Background: grid + radial glow */}
      <div className="absolute inset-0 hero-grid" />
      <div className="hero-glow" />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #818cf8 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center py-20">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-8 animate-on-load"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          AI Consulting &amp; Custom Application Development
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-slate-50 mb-6 animate-on-load delay-1"
        >
          Building{" "}
          <span className="gradient-text">AI Agents</span>
          <br />
          That Work Like
          <br />
          <span className="gradient-text-warm">Real Employees</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-on-load delay-2"
        >
          We design and build custom AI-powered applications that eliminate your
          team&apos;s most time-consuming work —{" "}
          <span className="text-slate-100 font-medium">in weeks, not months</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-on-load delay-3">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Book a Free Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/services" className="btn-secondary text-base px-8 py-4">
            See What We Build
          </Link>
        </div>

        {/* Social proof / stats bar */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-on-load delay-4"
        >
          {[
            { value: "10+",    label: "AI Agents Deployed"    },
            { value: "5+",     label: "Industries Served"     },
            { value: "Weeks",  label: "Avg. Time to Deploy"   },
            { value: "24/7",   label: "Agents Work Around the Clock" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07091a] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-on-load delay-5">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, rgba(0,212,255,0.6), transparent)",
            animation: "pulseGlow 2s ease-in-out infinite",
          }}
        />
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
