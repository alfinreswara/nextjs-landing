/** Edit these values for your brand / Fiverr / contact */
export const site = {
  name: "Your project name",
  title: "Next.js Landing Pages",
  tagline: "Live in 48 Hours",
  email: "alf.inreswara@gmail.com",
  /** Replace with your real Fiverr gig URL after publish */
  fiverrUrl: "https://www.fiverr.com/",
  /** Optional WhatsApp: country code + number, no + or spaces e.g. 6281234567890 */
  whatsapp: "",
  location: "Available worldwide · English",
};

export const packages = [
  {
    id: "basic",
    name: "Starter Landing",
    price: 80,
    delivery: "2 days",
    revisions: 1,
    popular: false,
    description:
      "1-page Next.js landing, mobile responsive, CTA + contact, deploy to Vercel.",
    features: [
      "1 long-scroll landing page",
      "Mobile responsive layout",
      "Hero, features, CTA, contact",
      "WhatsApp or email CTA",
      "Live Vercel deploy",
      "Source code after payment",
      "1 revision",
    ],
  },
  {
    id: "standard",
    name: "Business Landing",
    price: 120,
    delivery: "2 days",
    revisions: 2,
    popular: true,
    description:
      "Polished UI, SEO basics, speed polish, opt-in/CTA, 2 revisions.",
    features: [
      "Everything in Starter",
      "Stronger visual polish",
      "SEO basics (title & meta)",
      "Favicon + social preview",
      "Speed optimization",
      "Social media icons",
      "2 revisions",
    ],
  },
  {
    id: "premium",
    name: "Pro Landing",
    price: 180,
    delivery: "3 days",
    revisions: 3,
    popular: false,
    description:
      "Light animations, priority support, handoff guide, 3 revisions.",
    features: [
      "Everything in Business",
      "Light animations / micro-interactions",
      "Extra custom section",
      "Priority support",
      "Short handoff guide",
      "3 revisions",
    ],
  },
] as const;

export const works = [
  {
    title: "NovaTask",
    type: "SaaS waitlist",
    stack: "Next.js · Tailwind · Vercel",
    blurb: "Clean product waitlist with hero, features, and email CTA.",
    accent: "from-indigo-400/15 to-blue-400/8",
  },
  {
    title: "PulseCoach",
    type: "Creator / coaching",
    stack: "Next.js · Tailwind · Vercel",
    blurb: "Booking-focused landing for coaches and freelancers.",
    accent: "from-purple-400/15 to-violet-400/8",
  },
  {
    title: "Harbor Local",
    type: "Local business",
    stack: "Next.js · Tailwind · Vercel",
    blurb: "Service business page with WhatsApp CTA and social proof.",
    accent: "from-slate-400/12 to-indigo-400/6",
  },
] as const;

export const steps = [
  {
    step: "01",
    title: "Send your brief",
    text: "Goal, audience, CTA, logo/colors, and copy (or placeholders).",
  },
  {
    step: "02",
    title: "I build & preview",
    text: "Next.js + Tailwind page with a live preview link.",
  },
  {
    step: "03",
    title: "Revisions",
    text: "You request changes based on your package.",
  },
  {
    step: "04",
    title: "Deploy & handoff",
    text: "Production Vercel URL + source code after payment.",
  },
] as const;

export const faqs = [
  {
    q: "Is delivery really about 48 hours?",
    a: "Yes for Basic and Standard after a clear brief and assets. Waiting on your content does not count toward delivery time.",
  },
  {
    q: "Do I own the code?",
    a: "Yes. After full payment you own the deliverables. Project files or repo access as agreed.",
  },
  {
    q: "Will it work on mobile?",
    a: "Yes. Every package includes a mobile-responsive layout.",
  },
  {
    q: "Do you include hosting?",
    a: "I deploy to Vercel and give you a live URL. Custom domain connect can be added as an extra.",
  },
  {
    q: "Can you add login, payments, or a dashboard?",
    a: "Those are outside this landing-page service. Ask for a custom MVP offer.",
  },
  {
    q: "Which package should I choose?",
    a: "Starter for a clean single page. Business for polish + SEO. Pro for animations, priority support, and handoff guide.",
  },
] as const;
