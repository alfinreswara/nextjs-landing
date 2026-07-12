import { Zap, ShieldCheck, Smartphone, Code2 } from "lucide-react";

const items = [
  { icon: Zap, title: "48h Delivery" },
  { icon: ShieldCheck, title: "100% Code Own" },
  { icon: Smartphone, title: "Mobile Responsive" },
  { icon: Code2, title: "Next.js + Tailwind" },
];

export function TrustBadges() {
  return (
    <div className="border-y border-border bg-surface/50 py-6 overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-16">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5 text-text-secondary">
            <item.icon className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold tracking-wide uppercase">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
