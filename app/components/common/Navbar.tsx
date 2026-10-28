"use client";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#writing", label: "Writing" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 right-0 z-50 px-6 max-w-7xl mx-auto flex items-center justify-between pointer-events-none"
    >
      {/* Brand logo / Monogram */}
      <a
        href="#"
        className="pointer-events-auto px-4 py-2 rounded-full backdrop-blur-md bg-[var(--card-bg)] border border-[var(--border)] font-mono text-xs font-bold tracking-tighter hover:border-[var(--accent)] transition-colors"
      >
        AAYUSH.BATRA // &lt;/&gt;
      </a>

      {/* Floating Capsule Nav (Desktop) */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-0.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-[var(--card-bg)] border border-[var(--border)] font-mono text-xs">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3 py-1 rounded-full hover:text-[var(--accent)] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right controls: Resume + Theme + Mobile Menu Button */}
      <div className="pointer-events-auto flex items-center gap-2">
        <a
          href="/Aayush_Batra_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-[var(--card-bg)] border border-[var(--border)] font-mono text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-pointer"
        >
          <span>Resume</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>

        <div className="backdrop-blur-md p-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)]">
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full backdrop-blur-md bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden absolute top-16 left-6 right-6 p-6 rounded-2xl backdrop-blur-xl bg-[var(--bg-secondary)]/95 border border-[var(--border)] shadow-2xl flex flex-col gap-4 font-mono text-sm"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-[var(--card-bg)] text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Aayush_Batra_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[var(--accent)] text-white font-semibold transition-opacity hover:opacity-90 mt-1"
              >
                <span>View Resume (PDF)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
              <a
                href="https://github.com/BatraAayush"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--text-primary)]"
              >
                <FaGithub size={14} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/aayush-batra-475ab9201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--text-primary)]"
              >
                <FaLinkedin size={14} /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
