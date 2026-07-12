import Image from "next/image";
import { ExternalLink, Link2 } from "lucide-react";

export type PortfolioItem = {
  title: string;
  type: string;
  stack: string;
  blurb: string;
  link: string;
  image: string;
  accent: string;
};

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-[var(--btn-accent-text)] transition hover:scale-105 active:scale-95"
          >
            View Live <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-2 text-xs font-semibold tracking-wider text-accent uppercase">
          {item.type}
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-heading">
          {item.title}
        </h3>
        <p className="mt-3 leading-relaxed text-text-secondary">
          {item.blurb}
        </p>
        
        <div className="mt-4 flex items-center gap-2 text-sm text-text-tertiary">
          <Link2 size={16} className="text-accent" />
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            {item.link.replace("https://", "")}
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 flex flex-wrap gap-2 text-xs font-medium text-text-quaternary">
          {item.stack.split("·").map((tech, idx) => (
            <span key={idx} className="rounded-full bg-surface px-2.5 py-1 border border-border">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
