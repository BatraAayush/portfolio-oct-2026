"use client";
import { useState, useMemo } from "react";
import { PROJECTS, Project } from "@/app/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Search,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type CategoryTab = "all" | "ai" | "fullstack" | "frontend";

interface TabItem {
  id: CategoryTab;
  label: string;
}

const TABS: TabItem[] = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Flagship" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend & Social" },
];

export function Work() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesTab =
        activeTab === "all"
          ? true
          : activeTab === "ai"
          ? project.category === "ai" || project.featured
          : activeTab === "fullstack"
          ? project.category === "fullstack" || project.category === "ai"
          : project.category === activeTab;

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-[var(--accent)]" />
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              Selected Work & Engineering Labs
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Production SaaS, AI Engines & Systems
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--text-secondary)] px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]">
            Showing {filteredProjects.length} of {PROJECTS.length} Projects
          </span>
        </div>
      </div>

      {/* Filter Tabs and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[var(--border)]">
        {/* Category Pills inside Capsule Track */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]">
          {TABS.map((tab) => {
            const count =
              tab.id === "all"
                ? PROJECTS.length
                : tab.id === "ai"
                ? PROJECTS.filter((p) => p.category === "ai" || p.featured).length
                : tab.id === "fullstack"
                ? PROJECTS.filter(
                    (p) => p.category === "fullstack" || p.category === "ai"
                  ).length
                : PROJECTS.filter((p) => p.category === tab.id).length;

            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-1.5 rounded-full font-mono text-xs transition-colors duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "text-[var(--bg-primary)] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full bg-[var(--text-primary)] shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span
                  className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-[var(--bg-primary)]/20 text-[var(--bg-primary)]"
                      : "bg-[var(--border)] text-[var(--text-secondary)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech, name, or keyword..."
            className="w-full pl-9 pr-4 py-2 rounded-full font-mono text-xs bg-[var(--bg-secondary)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent)] text-[var(--text-primary)] transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent rounded-2xl" />

              <div>
                {/* Header metadata row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                      {project.year}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Actions (Live & Code) */}
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {project.github && project.githubBackend ? (
                      <>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors text-[var(--text-secondary)] font-mono text-[11px]"
                          title="Frontend Repository on GitHub"
                          aria-label="Frontend Repository on GitHub"
                        >
                          <FaGithub className="w-3 h-3" />
                          <span>Frontend</span>
                        </a>
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors text-[var(--text-secondary)] font-mono text-[11px]"
                          title="Backend Repository on GitHub"
                          aria-label="Backend Repository on GitHub"
                        >
                          <FaGithub className="w-3 h-3" />
                          <span>Backend</span>
                        </a>
                      </>
                    ) : project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors text-[var(--text-secondary)] font-mono text-[11px]"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                    ) : null}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full border border-[var(--border)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors text-[var(--text-secondary)]"
                      title="Open Live Application"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[var(--accent)] mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Optional key highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mb-6 space-y-1.5 text-xs text-[var(--text-secondary)] border-l-2 border-[var(--border)] pl-3">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="line-clamp-1">
                        • {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="font-mono text-sm text-[var(--text-secondary)]">
            No projects matched "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveTab("all");
            }}
            className="mt-4 px-4 py-2 rounded-full font-mono text-xs border border-[var(--border)] hover:border-[var(--accent)]"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}
