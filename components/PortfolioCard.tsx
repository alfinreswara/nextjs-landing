import { ExternalLink, Link2, Sparkles, User, Building2 } from "lucide-react";
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
        <AnimatedMockup type={item.type} accent={item.accent} />
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

const AnimatedMockup = ({ type, accent }: { type: string; accent: string }) => {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${accent} p-4 sm:p-6 overflow-hidden flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}
    >
      {type.toLowerCase().includes("saas") && (
        <div className="w-full max-w-[220px] bg-background/60 backdrop-blur-md border border-border rounded-xl p-4 shadow-2xl flex flex-col gap-3 relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-accent/20 animate-pulse flex items-center justify-center text-accent">
              <Sparkles size={14} />
            </div>
            <div className="h-2.5 w-20 bg-text-secondary/20 rounded-full"></div>
          </div>
          <div className="h-5 w-5/6 bg-text-primary/20 rounded-full mb-1"></div>
          <div className="h-2 w-full bg-text-tertiary/10 rounded-full"></div>
          <div className="h-2 w-4/5 bg-text-tertiary/10 rounded-full mb-2"></div>
          <div className="flex gap-2 mt-2">
            <div className="h-7 flex-1 bg-background/50 rounded-lg border border-border"></div>
            <div className="h-7 w-20 bg-accent rounded-lg shadow-lg shadow-accent/20"></div>
          </div>

          <div
            className="absolute -right-6 -bottom-6 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute -left-6 -top-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          ></div>
        </div>
      )}

      {type.toLowerCase().includes("coach") && (
        <div className="w-full max-w-[200px] bg-background/60 backdrop-blur-md border border-border rounded-xl p-4 shadow-2xl flex flex-col gap-3 relative items-center text-center">
          <div className="w-14 h-14 rounded-full bg-accent/20 animate-pulse mb-2 flex items-center justify-center text-accent">
            <User size={24} />
          </div>
          <div className="h-4 w-24 bg-text-primary/20 rounded-full mx-auto"></div>
          <div className="h-2 w-32 bg-text-tertiary/10 rounded-full mx-auto mb-2"></div>

          <div className="grid grid-cols-2 gap-3 w-full mt-2">
            <div
              className="h-20 bg-background/50 rounded-lg border border-border animate-pulse"
              style={{ animationDelay: "0.2s", animationDuration: "3s" }}
            ></div>
            <div
              className="h-20 bg-background/50 rounded-lg border border-border animate-pulse"
              style={{ animationDelay: "0.4s", animationDuration: "3s" }}
            ></div>
          </div>
          <div className="h-8 w-28 bg-accent rounded-full mt-2 shadow-lg shadow-accent/20"></div>
        </div>
      )}

      {type.toLowerCase().includes("local") && (
        <div className="w-full max-w-[240px] bg-background/60 backdrop-blur-md border border-border rounded-xl p-0 shadow-2xl overflow-hidden flex flex-col relative">
          <div className="h-10 bg-surface/50 border-b border-border flex items-center px-4 gap-3">
            <div className="h-4 w-4 rounded-full bg-accent/20 animate-pulse flex items-center justify-center text-accent">
              <Building2 size={10} />
            </div>
            <div className="h-2.5 w-24 bg-text-secondary/20 rounded-full"></div>
            <div className="ml-auto flex gap-1.5">
              <div className="h-1.5 w-5 bg-text-tertiary/20 rounded-full"></div>
              <div className="h-1.5 w-5 bg-text-tertiary/20 rounded-full"></div>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <div className="flex-1 flex flex-col gap-2.5">
              <div className="h-4 w-full bg-text-primary/20 rounded-full"></div>
              <div className="h-2.5 w-5/6 bg-text-tertiary/10 rounded-full"></div>
              <div className="h-6 w-24 bg-accent rounded-md mt-1 shadow-sm"></div>
            </div>
            <div
              className="w-14 h-14 bg-background/50 border border-border rounded-lg animate-pulse"
              style={{ animationDelay: "0.3s", animationDuration: "3s" }}
            ></div>
          </div>
          <div className="px-4 pb-4 grid grid-cols-3 gap-2">
            <div className="h-12 bg-background/50 border border-border rounded-lg"></div>
            <div className="h-12 bg-background/50 border border-border rounded-lg"></div>
            <div className="h-12 bg-background/50 border border-border rounded-lg"></div>
          </div>
        </div>
      )}
    </div>
  );
};
