import { ContactLink } from "@/components/ContactLink";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { faqs, packages, site, steps, works } from "@/lib/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { Logo } from "@/components/Logo";
import { Zap, Palette, Smartphone, Check, ChevronDown, Lock, Code, Globe, Layout, Layers, MessageSquare } from "lucide-react";
import Image from "next/image";
import { PortfolioCard } from "@/components/PortfolioCard";
import { TrustBadges } from "@/components/TrustBadges";

export default function Home() {
  return (
    <div className="grid-bg relative flex min-h-full flex-col overflow-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-[var(--nav-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight group">
            <Logo className="h-9 w-9 transition-transform group-hover:scale-105" />
            <span className="text-lg text-heading">
              {site.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-text-tertiary md:flex">
            <a href="#work" className="transition hover:text-heading">
              Work
            </a>
            <a href="#packages" className="transition hover:text-heading">
              Packages
            </a>
            <a href="#process" className="transition hover:text-heading">
              Process
            </a>
            <a href="#faq" className="transition hover:text-heading">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="top" className="flex-1 scroll-mt-20">
        {/* Hero */}
        <section className="relative px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:pt-32">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10">
            <div className="absolute left-1/2 top-0 h-[480px] w-[min(100%,800px)] -translate-x-1/2 rounded-full bg-[var(--hero-glow)] blur-3xl opacity-80" />
            <div className="absolute left-1/2 top-20 h-[300px] w-[min(100%,600px)] -translate-x-1/2 rounded-full bg-[var(--hero-glow-2)] blur-3xl opacity-60 mix-blend-screen" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn className="text-left">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--badge-text)] sm:text-sm">
                  <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent" />
                  Next.js · Tailwind · Vercel
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl md:text-6xl lg:text-7xl">
                  Launch Your{" "}
                  <span className="gradient-text">Landing Page</span>
                  <br className="hidden sm:block" /> in{" "}
                  <span className="gradient-text">48 Hours</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-xl">
                  Production-ready, mobile-responsive landing pages built with Next.js & Tailwind. Live Vercel URL + source code you own.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-start">
                  <a
                    href="#packages"
                    className="inline-flex w-full items-center justify-center rounded-full bg-heading px-8 py-4 text-base font-bold text-background transition-all duration-200 hover:scale-[1.02] hover:opacity-95 hover:shadow-xl active:scale-95 sm:w-auto"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="#work"
                    className="inline-flex w-full items-center justify-center rounded-full border border-gray-700 bg-transparent px-8 py-4 text-base font-medium text-heading transition-all duration-200 hover:scale-[1.02] hover:border-gray-500 hover:bg-[var(--btn-ghost-hover)] active:scale-95 sm:w-auto"
                  >
                    See example work
                  </a>
                </div>
                
                <p className="mt-4 text-center sm:text-left text-sm font-medium text-accent">
                  ⚡️ Limited slots this week
                </p>

                <div className="mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-3 text-sm text-text-tertiary">
                  <span className="flex items-center gap-2"><Check size={16} className="text-accent" /> No templates</span>
                  <span className="flex items-center gap-2"><Check size={16} className="text-accent" /> Source code included</span>
                  <span className="flex items-center gap-2"><Check size={16} className="text-accent" /> 3 clear packages</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="relative mx-auto w-full max-w-2xl lg:max-w-none">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-2xl glass transition-transform duration-700 hover:scale-[1.02]">
                  <Image 
                    src="/hero-mockup.jpg" 
                    alt="Landing Page Mockup"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <FadeIn delay={0.3}>
          <TrustBadges />
        </FadeIn>

        {/* Stats */}
        <section className="border-y border-border bg-[var(--stats-bg)] px-4 py-10 sm:px-6">
          <StaggerContainer className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
            {[
              { k: "48h", v: "Typical turnaround*" },
              { k: "3", v: "Clear packages" },
              { k: "100%", v: "Code ownership after pay" },
            ].map((s) => (
              <StaggerItem key={s.v} className="text-center">
                <div className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-sm text-text-tertiary">{s.v}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3} className="mx-auto mt-6 max-w-2xl text-center text-xs text-text-quaternary">
            *After a clear brief and required assets. Basic &amp; Standard scopes.
          </FadeIn>
        </section>

        {/* What you get */}
        <section className="section-anchor px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-2xl">
              <p className="text-sm font-medium text-accent">What you get</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                Production landing pages — not template dumps
              </h2>
              <p className="mt-4 text-text-secondary">
                Built with Next.js and Tailwind, deployed on Vercel so you can share a real
                URL the same week.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  t: "Next.js + Tailwind",
                  d: "Modern stack, fast loads, easy to extend later.",
                  icon: Code,
                },
                {
                  t: "Mobile responsive",
                  d: "Looks sharp on phone, tablet, and desktop.",
                  icon: Smartphone,
                },
                {
                  t: "CTA & contact",
                  d: "WhatsApp, email, or opt-in form — your call.",
                  icon: MessageSquare,
                },
                {
                  t: "Live Vercel deploy",
                  d: "Hosting setup included. Share a production URL.",
                  icon: Globe,
                },
                {
                  t: "Source code",
                  d: "You own the project after full payment.",
                  icon: Layers,
                },
                {
                  t: "English communication",
                  d: "Clear scope, daily-friendly updates, no fluff.",
                  icon: Layout,
                },
              ].map((item) => (
                <StaggerItem
                  key={item.t}
                  className="glass group rounded-2xl p-6 transition hover:border-accent/30 hover:bg-[var(--surface-elevated)]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-tertiary">{item.d}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section-anchor px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-2xl">
              <p className="text-sm font-medium text-accent">Selected work</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                Example landing styles I ship
              </h2>
              <p className="mt-4 text-text-secondary">
                Demo-style concepts you can reference. Real client projects replace these as
                they come in.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
              {works.map((w) => (
                <PortfolioCard key={w.title} item={w} />
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="section-anchor px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium text-accent">Scope &amp; pricing</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                Simple, transparent packages
              </h2>
              <p className="mt-4 text-text-secondary">
                Custom website / functional landing. Clear scope — no surprise e-commerce or
                dashboard work in these tiers.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => (
                <StaggerItem
                  key={pkg.id}
                  className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 transition duration-300 hover:-translate-y-1 ${
                    pkg.popular
                      ? "border-accent/50 bg-gradient-to-b from-accent/10 to-card glow-ring"
                      : "border-border bg-card/80 hover:border-accent/30"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-[var(--btn-accent-text)] shadow-md">
                      Most popular
                    </span>
                  )}
                  <div className="text-sm font-medium text-text-secondary">{pkg.name}</div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-heading">
                      ${pkg.price}
                    </span>
                    <span className="text-sm text-text-tertiary">USD</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-tertiary">{pkg.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-text-tertiary">
                    <span className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1">
                       {pkg.delivery}
                    </span>
                    <span className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1">
                       {pkg.revisions} {pkg.revisions > 1 ? "revisions" : "revision"}
                    </span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-text-secondary">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <ContactLink
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition duration-200 hover:scale-105 active:scale-95 ${
                      pkg.popular
                        ? "bg-accent text-[var(--btn-accent-text)] shadow-lg shadow-accent/20 hover:opacity-90"
                        : "border border-border bg-[var(--btn-ghost-bg)] text-[var(--btn-ghost-text)] hover:border-accent/40"
                    }`}
                  >
                    Contact to Order
                  </ContactLink>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4} className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-quaternary">
              Not included: full apps, auth dashboards, payment systems, multi-language CMS.
              Message me for a custom offer.
            </FadeIn>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="section-anchor border-y border-border bg-[var(--stats-bg)] px-4 py-20 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <FadeIn className="max-w-2xl">
              <p className="text-sm font-medium text-accent">How it works</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                Simple process, fast ship
              </h2>
            </FadeIn>
            <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <StaggerItem key={s.step} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/30">
                  <div className="inline-flex rounded-md bg-accent/10 px-2 py-1 font-mono text-sm text-accent">{s.step}</div>
                  <h3 className="mt-4 text-lg font-semibold text-heading">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-tertiary">{s.text}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-anchor px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <FadeIn className="text-center">
              <p className="text-sm font-medium text-accent">FAQ</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                Common questions
              </h2>
            </FadeIn>
            <StaggerContainer className="mt-12 space-y-3">
              {faqs.map((item) => (
                <StaggerItem key={item.q}>
                  <details
                    className="group glass rounded-2xl px-5 py-4 transition-colors open:border-accent/30"
                  >
                    <summary className="cursor-pointer list-none font-medium text-heading marker:content-none [&::-webkit-details-marker]:hidden">
                      <div className="flex items-center justify-between gap-4">
                        <span>{item.q}</span>
                        <ChevronDown size={18} className="shrink-0 text-text-tertiary transition group-open:-rotate-180 group-open:text-accent" />
                      </div>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-text-tertiary">
                      {item.a}
                    </p>
                  </details>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="section-anchor px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <FadeIn className="glass glow-ring relative overflow-hidden rounded-3xl px-6 py-12 transition-shadow hover:shadow-2xl hover:shadow-accent/10 sm:px-12 sm:py-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--cta-glow)] blur-3xl" />
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                  Ready to ship your landing page?
                </h2>
                <p className="mt-4 text-text-secondary">
                  Send a message with your brief. I&apos;ll confirm scope and
                  start as soon as requirements are clear.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <ContactLink className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-[var(--btn-accent-text)] shadow-lg shadow-accent/20 transition duration-200 hover:scale-105 hover:opacity-90 active:scale-95 sm:w-auto">
                    Contact me
                  </ContactLink>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-[var(--nav-bg)] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
            {/* Brand Column */}
            <div className="flex flex-col gap-6 md:col-span-2">
              <div className="flex items-center gap-2 text-text-secondary group">
                <Logo className="h-8 w-8 transition-transform group-hover:scale-110" />
                <span className="text-lg font-semibold tracking-tight text-heading">
                  {site.name}
                </span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
                I build high-performance, mobile-responsive Next.js landing pages for startups and creators. Fast delivery, production-ready code.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://t.me/alfinreswara" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-text-tertiary transition duration-300 hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/20">
                  <span className="sr-only">Telegram</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </a>
                <a href="https://twitter.com/alfinreswara" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-text-tertiary transition duration-300 hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/20">
                  <span className="sr-only">Twitter</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="https://github.com/alfinreswara" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-text-tertiary transition duration-300 hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/20">
                  <span className="sr-only">GitHub</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div className="flex flex-col gap-5">
              <h3 className="text-sm font-semibold tracking-wide text-heading uppercase">Navigation</h3>
              <nav className="flex flex-col gap-3 text-sm text-text-secondary">
                <a href="#top" className="transition hover:text-accent">Home</a>
                <a href="#work" className="transition hover:text-accent">Work</a>
                <a href="#pricing" className="transition hover:text-accent">Pricing</a>
                <a href="#faq" className="transition hover:text-accent">FAQ</a>
              </nav>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-5">
              <h3 className="text-sm font-semibold tracking-wide text-heading uppercase">Contact</h3>
              <div className="flex flex-col gap-3 text-sm text-text-secondary">
                <a href={`mailto:${site.email}`} className="transition hover:text-accent">{site.email}</a>
                <span className="text-text-tertiary">{site.location}</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col items-center justify-between border-t border-border pt-8 text-sm text-text-tertiary sm:flex-row">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <div className="mt-4 flex gap-6 sm:mt-0">
              <span className="cursor-pointer transition hover:text-heading">Privacy Policy</span>
              <span className="cursor-pointer transition hover:text-heading">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
