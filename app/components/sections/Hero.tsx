"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Terminal, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-14 px-6 max-w-7xl mx-auto overflow-hidden bg-grid-dots">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-[var(--accent)]/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse-subtle" />


      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute bottom-36 right-24 items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-[var(--card-bg)] border border-[var(--border)] font-mono text-[11px] text-[var(--text-secondary)] shadow-sm pointer-events-none"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>TypeScript • Node.js</span>
      </motion.div>

      {/* Top micro metadata banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between text-xs font-mono text-[var(--text-secondary)] border-b border-[var(--border)] pb-4 gap-3 relative z-10"
      >
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>AAYUSH BATRA // FULL-STACK SOFTWARE DEVELOPER</span>
        </div>
        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[11px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          AVAILABLE FOR SELECT ROLES & CONTRACTS
        </span>
      </motion.div>

      {/* Kinetic Typographic Hero Main */}
      <div className="my-auto py-12 md:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-xs font-mono text-[var(--accent)] mb-6"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>Full-Stack Web Architecture • Next.js & React • Scalable Systems</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.14] max-w-4xl mb-8 text-[var(--text-primary)]">
            Architecting fluid web apps & high-velocity digital products.
          </h1>

          {/* Professional Bio */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mb-10">
            Full-stack engineer with production experience building high-performance web applications using{" "}
            <span className="text-[var(--text-primary)] font-semibold">Next.js</span>,{" "}
            <span className="text-[var(--text-primary)] font-semibold">React</span>,{" "}
            <span className="text-[var(--text-primary)] font-semibold">TypeScript</span>, and{" "}
            <span className="text-[var(--text-primary)] font-semibold">Node.js</span>. Specialized in crafting pixel-perfect design systems, optimistic UIs, and robust full-stack architectures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-semibold hover:opacity-90 transition-all shadow-md group cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-xs cursor-pointer bg-[var(--bg-secondary)]"
            >
              <span>Get in Touch</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#education"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all font-mono text-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Credentials</span>
            </motion.a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/BatraAayush"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/aayush-batra-475ab9201"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom split metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[var(--border)] text-xs font-mono relative z-10"
      >
        <div>
          <p className="text-[var(--text-secondary)] uppercase mb-1">
            Core Architecture
          </p>
          <p className="font-semibold text-sm text-[var(--text-primary)]">
            Next.js • React • TypeScript
          </p>
        </div>
        <div>
          <p className="text-[var(--text-secondary)] uppercase mb-1">
            Backend & Databases
          </p>
          <p className="font-semibold text-sm text-[var(--text-primary)]">
            Node.js • PostgreSQL • Mongo
          </p>
        </div>
        <div>
          <p className="text-[var(--text-secondary)] uppercase mb-1">
            Industry Experience
          </p>
          <p className="font-semibold text-sm text-[var(--text-primary)]">
            2+ Years Production
          </p>
        </div>
        <div>
          <p className="text-[var(--text-secondary)] uppercase mb-1">
            Current Location
          </p>
          <p className="font-semibold text-sm text-[var(--text-primary)]">
            Delhi, India (UTC+5:30)
          </p>
        </div>
      </motion.div>
    </section>
  );
}
