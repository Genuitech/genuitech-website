const differentiators = [
  {
    icon: <BoltIcon />,
    title: "Built for Speed",
    description:
      "Most software projects drag on for months. We deliver working AI agents in weeks because we focus on one problem at a time and move fast.",
  },
  {
    icon: <PuzzleIcon />,
    title: "No-Jargon Approach",
    description:
      "We speak in business outcomes, not tech-speak. If we can't explain what the AI does in plain English, we go back and simplify it.",
  },
  {
    icon: <BuildingIcon />,
    title: "Any Industry, Any Size",
    description:
      "From local service businesses to multi-location companies, we've built agents that fit real operations — not just enterprise software demos.",
  },
  {
    icon: <ShieldIcon />,
    title: "We Stay After Launch",
    description:
      "We don't disappear after deployment. Your agent gets monitored, tuned, and supported. If something breaks, we fix it — fast.",
  },
];

export default function WhyGenuitech() {
  return (
    <section className="py-24 md:py-32 bg-[#07091a]">
      <div className="section-container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Why Genuitech
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-50 mb-6 leading-tight">
              We Build It.{" "}
              <span className="gradient-text">We Own It.</span>
              <br />
              Until It Works.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              There are a lot of AI consultants who will write you a report. We write code.
              Our goal is a running agent solving a real problem for your business — not a
              slide deck about AI&apos;s potential.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              We&apos;re approachable, results-driven, and we&apos;ll never make you feel
              out of the loop. If you have a bottleneck, we have an agent for it.
            </p>
          </div>

          {/* Right: differentiator grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="card p-6 group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500/15 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-base text-slate-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function BoltIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}
