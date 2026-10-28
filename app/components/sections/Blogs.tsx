"use client";
import { BLOGS } from "@/app/lib/data";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ArrowUpRight } from "lucide-react";

export function Blogs() {
  return (
    <section
      className="py-24 px-6 max-w-7xl mx-auto border-t border-[var(--border)]"
      id="writing"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[var(--accent)]" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Writing & Engineering Notes
          </h2>
        </div>
        <span className="font-mono text-xs text-[var(--text-secondary)]">
          PUBLICATIONS // 05
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOGS.map((blog, index) => (
          <motion.a
            key={blog.title}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)]">
                  {blog.platform}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {blog.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
