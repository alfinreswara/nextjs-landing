import { ContactLink } from "@/components/ContactLink";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { faqs, packages, site, steps, works } from "@/lib/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import { Logo } from "@/components/Logo";
import { Zap, Palette, Smartphone, Check, ChevronDown, Lock, Code, Globe, Layout, Layers, MessageSquare } from "lucide-react";

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
        <section className="relative px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[480px] w-[min(100%,800px)] -translate-x-1/2 rounded-full bg-[var(--hero-glow)] blur-3xl opacity-80" />
            <div className="absolute left-1/2 top-20 h-[300px] w-[min(100%,600px)] -translate-x-1/2 rounded-full bg-[var(--hero-glow-2)] blur-3xl opacity-60 mix-blend-screen" />
          </div>

          <div className="mx-auto max-w-6xl">
            <FadeIn className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--badge-text)] sm:text-sm">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-accent" />
                Next.js · Tailwind · Vercel
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-6xl md:text-7xl">
                I build a{" "}
                <span className="gradient-text">Next.js landing page</span>
                <br className="hidden sm:block" /> and deploy it in{" "}
                <span className="gradient-text">48 hours</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-xl">
                Clean, mobile-responsive landing pages for startups, creators, and local
                businesses. Live Vercel URL, production-ready code, and clear communication.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#packages"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-[var(--btn-accent-text)] transition duration-300 hover:scale-105 hover:opacity-90 hover:shadow-xl hover:shadow-accent/20 active:scale-95 sm:w-auto"
                >
                  Start Your Project
                </a>
                <a
                  href="#work"
                  className="inline-flex w-full items-center justify-center rounded-full border border-border bg-[var(--btn-ghost-bg)] px-8 py-4 text-base font-medium text-[var(--btn-ghost-text)] transition duration-300 hover:scale-105 hover:border-accent/40 hover:bg-[var(--btn-ghost-hover)] active:scale-95 sm:w-auto"
                >
                  See example work
                </a>
              </div>

              <div className="mt-14 flex flex-col items-center justify-center gap-6 border-t border-border/40 pt-10 sm:flex-row sm:gap-12">
                <div className="flex items-center gap-3 text-left">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-accent/20 text-sm font-bold text-accent shadow-sm">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-heading">Trusted by 50+</span>
                    <span className="text-xs text-text-tertiary">Startups & Creators</span>
                  </div>
                </div>
                <div className="hidden h-12 w-px bg-border/50 sm:block"></div>
                <div className="flex flex-col items-center sm:items-start text-left">
                  <div className="flex gap-0.5 text-accent">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
                    ))}
                  </div>
                  <span className="mt-1 text-sm font-medium text-text-secondary"><span className="font-bold text-heading">5.0/5</span> Average Rating</span>
                </div>
              </div>
            </FadeIn>

            {/* Browser mockup */}
            <FadeIn delay={0.2} className="mx-auto mt-20 max-w-5xl">
              <div className="glass glow-ring overflow-hidden rounded-2xl shadow-2xl transition duration-700 hover:shadow-accent/20">
                <div className="flex items-center gap-2 border-b border-border bg-[var(--mockup-bar)] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--dot-red)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--dot-yellow)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--dot-green)]" />
                  <div className="ml-3 min-w-0 flex-1 flex items-center gap-1.5 truncate rounded-md bg-[var(--mockup-url-bg)] px-3 py-1 font-mono text-[11px] text-text-tertiary sm:text-xs">
                    <Lock size={12} className="opacity-70" />
                    yourproject.vercel.app
                  </div>
                </div>
                <div className="space-y-6 bg-gradient-to-b from-[var(--mockup-body-from)] to-[var(--mockup-body-to)] p-6 sm:p-10">
                  <div className="inline-flex rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] px-2.5 py-1 text-[11px] font-medium text-[var(--badge-text)]">
                    ✨ Your project v2.0 is live
                  </div>
                  <div className="max-w-lg space-y-4">
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-heading sm:text-4xl">
                      Build faster with <span className="text-accent">Next.js</span> & Tailwind
                    </h2>
                    <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                      Deploy production-ready landing pages in a fraction of the time with our scalable architecture and pre-built components.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-[var(--btn-accent-text)] transition hover:opacity-90 hover:scale-105 active:scale-95 duration-200">
                      Get Started
                    </button>
                    <button className="rounded-full border border-border bg-[var(--btn-ghost-bg)] px-6 py-2.5 text-sm font-medium text-[var(--btn-ghost-text)] transition hover:border-accent/40 hover:scale-105 active:scale-95 duration-200">
                      Documentation
                    </button>
                  </div>
                  <div className="grid gap-6 pt-8 sm:grid-cols-3">
                    <div className="group rounded-2xl border border-border bg-[var(--btn-ghost-bg)] p-6 transition duration-300 hover:border-accent/30 hover:bg-[var(--surface-elevated)] hover:shadow-lg hover:shadow-accent/5">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                        <Zap size={24} />
                      </div>
                      <div className="mb-2 text-base font-semibold text-heading">Lightning Fast</div>
                      <div className="text-sm leading-relaxed text-text-tertiary">Optimized for speed, SEO, and flawless Core Web Vitals.</div>
                    </div>
                    <div className="group rounded-2xl border border-border bg-[var(--btn-ghost-bg)] p-6 transition duration-300 hover:border-accent/30 hover:bg-[var(--surface-elevated)] hover:shadow-lg hover:shadow-accent/5">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                        <Palette size={24} />
                      </div>
                      <div className="mb-2 text-base font-semibold text-heading">Customizable</div>
                      <div className="text-sm leading-relaxed text-text-tertiary">Built with Tailwind CSS for rapid scaling and iteration.</div>
                    </div>
                    <div className="group rounded-2xl border border-border bg-[var(--btn-ghost-bg)] p-6 transition duration-300 hover:border-accent/30 hover:bg-[var(--surface-elevated)] hover:shadow-lg hover:shadow-accent/5">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                        <Smartphone size={24} />
                      </div>
                      <div className="mb-2 text-base font-semibold text-heading">Responsive</div>
                      <div className="text-sm leading-relaxed text-text-tertiary">Pixel-perfect design on mobile, tablet, and desktop screens.</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

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
                <StaggerItem
                  key={w.title}
                  className="glass group overflow-hidden rounded-2xl transition hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div
                    className={`relative aspect-[16/10] bg-gradient-to-br ${w.accent} p-5 overflow-hidden`}
                  >
                    <div className="absolute inset-4 flex flex-col overflow-hidden rounded-xl border border-border bg-surface/80 p-3 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.03]">
                      {/* Mini Navbar */}
                      <div className="mb-2 flex items-center justify-between border-b border-border/50 pb-2">
                        <div className="text-[10px] font-bold text-heading">{w.title}</div>
                        <div className="flex gap-2">
                          <span className="cursor-pointer text-[8px] text-text-tertiary transition-colors hover:text-heading">Features</span>
                          <span className="cursor-pointer text-[8px] text-text-tertiary transition-colors hover:text-heading">Pricing</span>
                        </div>
                      </div>
                      
                      {/* Mini Hero */}
                      <div className="flex flex-1 flex-col items-center justify-center text-center">
                        <div className="mb-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-[8px] font-medium text-accent">
                          {w.type}
                        </div>
                        <div className="mb-1.5 text-[14px] font-bold leading-tight text-heading">
                          Welcome to {w.title}
                        </div>
                        <div className="mb-3 max-w-[90%] line-clamp-2 text-[9px] leading-relaxed text-text-secondary">
                          {w.blurb}
                        </div>
                        <div className="rounded-full bg-accent px-4 py-1 text-[9px] font-medium text-[var(--btn-accent-text)] shadow-sm">
                          Explore Now
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-medium uppercase tracking-wider text-accent/90">
                      {w.type}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-heading">{w.title}</h3>
                    <p className="mt-2 text-sm text-text-tertiary">{w.blurb}</p>
                    <p className="mt-4 flex items-center gap-1.5 font-mono text-xs text-text-quaternary">
                      <Code size={12} /> {w.stack}
                    </p>
                  </div>
                </StaggerItem>
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
                       {pkg.revisions} revision{pkg.revisions > 1 ? "s" : ""}
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
