const steps = [
  {
    number: "01",
    title: "Identify the Bottleneck",
    description:
      "We start with a free discovery call. You walk us through your most painful, time-consuming manual process. We ask the right questions to map exactly what needs to be automated.",
    detail: "Free 30-min discovery call",
  },
  {
    number: "02",
    title: "Design & Build the Agent",
    description:
      "Our team designs a custom AI agent specifically for your workflow. No off-the-shelf software — built from the ground up to match how your business actually operates.",
    detail: "Typically 2–4 weeks to first version",
  },
  {
    number: "03",
    title: "Deploy & Iterate",
    description:
      "Your agent goes live and starts working. We monitor performance, gather your feedback, and refine until it runs exactly as intended. Then we hand it off — fully documented and supported.",
    detail: "Ongoing support included",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#0d1024" }}>
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-50 mb-4">
            From Idea to{" "}
            <span className="gradient-text">Running Agent</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Simple process. Fast delivery. Real results.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-start lg:items-center text-left lg:text-center group">

                {/* Number bubble */}
                <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-2xl border border-cyan-500/30 bg-[#07091a] mb-6 font-display font-bold text-3xl gradient-text shadow-glow-cyan group-hover:border-cyan-500/60 transition-all duration-300">
                  {step.number}
                </div>

                <h3 className="font-display font-semibold text-xl text-slate-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xs lg:max-w-none">
                  {step.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400/80 bg-cyan-500/5 border border-cyan-500/20 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
