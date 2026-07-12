"use client";

import { ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, ExternalLink } from "lucide-react";
import { site } from "@/lib/site";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function ContactLink({ className, children, onClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    if (onClick) onClick();
  };

  return (
    <>
      <button onClick={handleOpen} className={className}>
        {children}
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-8 text-center"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 rounded-full p-2 text-text-tertiary transition hover:bg-foreground/5 hover:text-heading"
                >
                  <X size={20} />
                </button>

                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Mail size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-heading">
                  Let&apos;s talk
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Prefer to talk directly? Send an email and I&apos;ll respond as soon as possible.
                </p>

                <div className="mt-8 flex items-center justify-between rounded-xl border border-border bg-background p-1.5">
                  <div className="truncate px-3 text-sm font-medium text-heading">
                    {site.email}
                  </div>
                  <a
                    href={`mailto:${site.email}`}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-xs font-semibold text-[var(--btn-accent-text)] transition duration-200 hover:scale-105 hover:opacity-90 active:scale-95"
                  >
                    Email <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
