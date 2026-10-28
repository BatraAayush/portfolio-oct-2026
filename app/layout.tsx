import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { type ReactNode } from "react";
import { LenisProvider } from "./components/common/LenisProvider";
import { Navbar } from "./components/common/Navbar";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

const TypedThemeProvider = NextThemesProvider as unknown as React.ComponentType<{
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}>;

export const metadata: Metadata = {
  title: "Aayush Batra | Full-Stack Software Developer",
  description:
    "Portfolio of Aayush Batra — Full-Stack Engineer specializing in React, Next.js, TypeScript, Node.js, and modern web architectures.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable}`}
    >
      <body className="antialiased selection:bg-[var(--accent)] selection:text-white">
        <TypedThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LenisProvider>
            <Navbar />
            <main>{children}</main>
            <footer className="py-8 px-6 max-w-7xl mx-auto border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-secondary)]">
              <p>
                © {new Date().getFullYear()} Aayush Batra. Built with Next.js &
                Tailwind.
              </p>

              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/BatraAayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/aayush-batra-475ab9201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/aayush_batra__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                  aria-label="Twitter / X"
                >
                  <FaTwitter size={14} />
                  <span>Twitter</span>
                </a>
                <a
                  href="mailto:aayushbatra33@gmail.com"
                  className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                  aria-label="Email"
                >
                  <FaEnvelope size={14} />
                  <span>Email</span>
                </a>
              </div>

              <p>Delhi, India • 8397-082-347</p>
            </footer>
          </LenisProvider>
        </TypedThemeProvider>
      </body>
    </html>
  );
}