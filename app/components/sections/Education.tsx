"use client";
import { EDUCATION } from "@/app/lib/data";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, FileText } from "lucide-react";

export function Education() {
  return (
    <section
      className="py-24 px-6 max-w-7xl mx-auto border-t border-[var(--border)]"
      id="education"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Education & Credentials
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/Aayush_Batra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono text-xs bg-[var(--bg-secondary)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Resume (PDF)</span>
          </a>
          <span className="font-mono text-xs text-[var(--text-secondary)] hidden md:inline">
            FOUNDATION // 06
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--accent)]">
                  {index === 0 ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : (
                    <Award className="w-5 h-5" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-2">
                {edu.degree}
              </h3>
              <p className="font-mono text-xs text-[var(--accent)] mb-4">
                {edu.institution}
                {edu.location ? ` • ${edu.location}` : ""}
              </p>
              {edu.description && (
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
