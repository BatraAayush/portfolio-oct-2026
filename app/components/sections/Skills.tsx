"use client";
import { motion } from "framer-motion";
import { Cpu, Code2, Database, Wrench } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Code2,
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python", "SQL"],
  },
  {
    title: "Frameworks & State",
    icon: Cpu,
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Vue 3",
      "Pinia",
      "Tailwind CSS",
      "Zustand",
      "MUI",
    ],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    items: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Google Gemini AI",
    ],
  },
  {
    title: "Tools & Workflows",
    icon: Wrench,
    items: [
      "Git & GitHub",
      "RESTful APIs",
      "JWT & RBAC",
      "JIRA",
      "Postman",
      "VS Code",
      "Figma-to-Code",
    ],
  },
];

export function Skills() {
  return (
    <section
      className="py-24 px-6 max-w-7xl mx-auto border-t border-[var(--border)]"
      id="skills"
    >
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[var(--accent)]" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
            Technical Arsenal
          </h2>
        </div>
        <span className="font-mono text-xs text-[var(--text-secondary)]">
          STACK // 04
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Icon className="w-4 h-4 text-[var(--accent)]" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all cursor-default select-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}