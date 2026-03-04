import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "Services",  href: "/services"  },
    { label: "Why AI",    href: "/why-ai"    },
    { label: "Contact",   href: "/contact"   },
  ],
  Connect: [
    { label: "LinkedIn",  href: "https://linkedin.com/company/genuitech", external: true },
    { label: "Instagram", href: "https://instagram.com/genuitech",        external: true },
    { label: "TikTok",    href: "https://tiktok.com/@genuitech",          external: true },
    { label: "YouTube",   href: "https://youtube.com/@genuitech",         external: true },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e2d4f]/60 bg-[#07091a]">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/genuitech-logo.png"
                  alt="Genuitech"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg text-slate-50 group-hover:text-cyan-400 transition-colors">
                Genuitech
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building AI agents that work like real employees. We solve your biggest operational
              bottlenecks with custom AI-powered applications — fast.
            </p>
            <p className="mt-4 text-sm text-cyan-500/80 font-medium">
              hello@genuitech.ai
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} Genuitech LLC. All rights reserved.</p>
          <p className="gradient-text font-medium">
            Building AI Agents That Work Like Real Employees
          </p>
        </div>
      </div>
    </footer>
  );
}
