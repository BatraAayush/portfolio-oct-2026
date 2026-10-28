"use client";
import { EXPERIENCE } from "@/app/lib/data";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Sparkles } from "lucide-react";

export function Experience() {
  return (
    <section
      className="py-24 px-6 max-w-7xl mx-auto border-t border-[var(--border)]"
      id="experience"
    >
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-[var(--accent)]" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Career Trajectory & Engineering Impact
          </h2>
        </div>
        <span className="font-mono text-xs text-[var(--text-secondary)]">
          CHRONOLOGY // 02
        </span>
      </div>

      <div className="relative border-l border-[var(--border)] ml-3 md:ml-4 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline node dot with live pulse on current role */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--text-secondary)] group-hover:border-[var(--accent)] group-hover:scale-125 transition-all duration-300">
              {index === 0 && (
                <span className="absolute -inset-1 rounded-full bg-[var(--accent)] animate-ping opacity-60 pointer-events-none" />
              )}
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] group-hover:border-[var(--accent)]/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {exp.role}
                    </h3>
                    {index === 0 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        Present
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-[var(--accent)]">
                    @ {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                  </span>
                  <span className="hidden md:flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 mt-4 pt-3 border-t border-[var(--border)]">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="text-[var(--accent)] font-mono mt-0.5 select-none">
                      ›
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
