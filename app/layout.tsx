import type { Metadata } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your project name — Next.js Landing Pages Live in 48 Hours",
  description:
    "I build modern Next.js landing pages and deploy them live on Vercel. Mobile responsive, clean UI, source code included. Packages from $80.",
  keywords: [
    "Next.js landing page",
    "Vercel deploy",
    "freelance web developer",
    "React landing page",
    "custom website",
  ],
  openGraph: {
    title: "Your project name — Next.js Landing Pages Live in 48 Hours",
    description:
      "Modern Next.js landing pages with Vercel deploy. Fast delivery, production-ready code.",
    type: "website",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
