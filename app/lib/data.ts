export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  githubBackend?: string;
  year: string;
  category: "all" | "ai" | "fullstack" | "frontend";
  featured?: boolean;
  highlights?: string[];
}

export interface BlogPost {
  title: string;
  description: string;
  platform: string;
  link: string;
  date: string;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  period: string;
  description?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "reviewpulse-ai",
    title: "ReviewPulse AI",
    subtitle: "QR & NFC Review Intelligence SaaS",
    description:
      "Full-stack QR & NFC review SaaS featuring Google Gemini AI review synthesis, private grievance routing, multi-tenant RBAC, and dynamic print-ready tent studio built with Next.js, Prisma, and PostgreSQL.",
    tech: [
      "Next.js",
      "TypeScript",
      "Google Gemini AI",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    link: "https://review-pulse-ai-ab.vercel.app",
    year: "2025",
    category: "ai",
    featured: true,
    highlights: [
      "Google Gemini AI review synthesis & sentiment breakdown",
      "Smart private grievance routing for proactive customer retention",
      "Multi-tenant RBAC with robust database multi-tenancy",
      "Dynamic print-ready tabletop tent card studio with live QR/NFC preview",
    ],
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    subtitle: "Collaborative Kanban Workspace",
    description:
      "Collaborative Kanban workspace featuring optimistic drag-and-drop, silent JWT refresh rotation, RBAC permissions, and an automated audit trail built with React, Redux Toolkit, Node, and MongoDB.",
    tech: ["React", "Redux Toolkit", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    link: "https://task-flow-ab.netlify.app",
    github: "https://github.com/BatraAayush/task-flow-frontend",
    githubBackend: "https://github.com/BatraAayush/task-flow-backend",
    year: "2024",
    category: "fullstack",
    featured: true,
    highlights: [
      "Optimistic UI updates with drag-and-drop task boards",
      "Silent JWT token refresh rotation mechanism for secure auth",
      "Granular role-based access control (RBAC)",
      "Automated team activity audit trails",
    ],
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    subtitle: "MERN Health & Activity Analytics",
    description:
      "Full-stack personal wellness and activity tracking application to record workouts, calculate caloric expenditure, track macronutrients, and monitor fitness progress.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
    link: "https://fitness-tracker-ab.netlify.app/",
    github: "https://github.com/BatraAayush/fitness-tracker",
    githubBackend: "https://github.com/BatraAayush/Assignment-17",
    year: "2024",
    category: "fullstack",
    featured: false,
    highlights: [
      "Workout logging & exercise metric tracking",
      "Caloric balance computation with customized daily goals",
      "Complete REST API with MongoDB aggregation pipelines",
    ],
  },
  {
    id: "sociogram",
    title: "Sociogram",
    subtitle: "Vue 3 Real-time Social Platform",
    description:
      "Modern social media platform featuring Google Authentication, interactive feed streams, user profiles, likes, and real-time document synchronization via Firebase Firestore.",
    tech: ["Vue 3", "Pinia", "Firebase", "Tailwind CSS"],
    link: "https://sociogram-ab.netlify.app",
    github: "https://github.com/BatraAayush/firebase",
    year: "2024",
    category: "frontend",
    featured: false,
    highlights: [
      "Google OAuth integration with Firebase Auth",
      "Real-time Firestore listeners for immediate feed updates",
      "Reactive state management using Pinia",
    ],
  },
  {
    id: "shoesmart",
    title: "Shoes Mart",
    subtitle: "Footwear E-Commerce Experience",
    description:
      "High-performance e-commerce catalog featuring multi-attribute filtering (brand, size, price range, ratings), persistent local cart state, and streamlined checkout UI.",
    tech: ["React", "Context API", "React Router", "CSS3"],
    link: "https://shoes-mart-ab.netlify.app",
    github: "https://github.com/BatraAayush/ecommerce-app",
    year: "2024",
    category: "frontend",
    featured: false,
    highlights: [
      "Multi-facet search and price slider filter engine",
      "Persistent cart state and checkout flow",
      "Fully responsive mobile-first UI",
    ],
  },
  {
    id: "chitchat",
    title: "Chit Chat",
    subtitle: "Community Social Network",
    description:
      "Interactive social network application enabling users to connect, share multimedia posts, follow peers, discover trending feeds, and bookmark posts.",
    tech: ["React", "Redux Toolkit", "Vanilla CSS", "REST API"],
    link: "https://chit-chat-ab.netlify.app/",
    github: "https://github.com/BatraAayush/social-media-app",
    year: "2024",
    category: "frontend",
    featured: false,
    highlights: [
      "Follow/unfollow system with personalized home timeline",
      "Interactive post creation, likes, and bookmarking feed",
      "Explore trending feeds with multi-criteria filtering",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "Xicom Technologies",
    role: "Full-Stack Developer",
    location: "New Delhi, India",
    period: "Sep 2026 – Present",
    highlights: [
      "Architecting and developing scalable full-stack web applications utilizing the MERN stack (MongoDB, Express, React, Node.js) and Next.js.",
      "Engineering robust RESTful APIs, third-party integrations, and AI/LLM services to drive high-performance enterprise solutions.",
      "Collaborating across cross-functional agile teams to deliver clean architectural design, code reviews, and software reliability.",
    ],
  },
  {
    company: "Simple Fix IT Services",
    role: "Full-Stack Developer",
    location: "Mohali, India",
    period: "Nov 2024 – Aug 2026",
    highlights: [
      "Architected flagship company website using Next.js & Tailwind CSS with pixel-perfect Figma-to-code execution.",
      "Engineered high-performance modules for Dentana and Drive Form SaaS applications, optimizing front-end SSR/CSR rendering.",
      "Synchronized real-time data flow across Express/MongoDB backends and collaborated with Designers and DevOps to ensure software reliability.",
    ],
  },
  {
    company: "Innovative Tech Solutions",
    role: "Trainee Web Developer",
    location: "Noida, India",
    period: "Mar 2024 – Jun 2024",
    highlights: [
      "Developed specialized cross-platform fishing application for the French market using Vue, Ionic, and Tailwind CSS.",
      "Contributed to the connectDMVet project through debugging, feature implementation, and performance tuning.",
      "Utilized collaborative workflows with Git and JIRA within cross-functional development teams.",
    ],
  },
  {
    company: "Rablo",
    role: "Team Leader Intern",
    location: "Remote",
    period: "Dec 2023 – Mar 2024",
    highlights: [
      "Led a front-end development team in building high-quality user interfaces using Next.js and managed task delegation.",
      "Managed Figma-to-code workflows to deliver SEO-optimized landing pages and core web modules with high visual fidelity.",
    ],
  },
];

export const BLOGS: BlogPost[] = [
  {
    title: "== VS === In JavaScript",
    description:
      "A deep dive into type coercion, implicit casting rules, and strict equality vs loose equality pitfall prevention in modern JavaScript.",
    platform: "Hashnode",
    link: "https://aayushbatra.hashnode.dev/vs-in-javascript",
    date: "Deep Dive",
    tags: ["JavaScript", "TypeScript", "Core Concepts"],
  },
  {
    title: "Framework vs Library",
    description:
      "Understanding Inversion of Control (IoC), opinionated architecture, and how frameworks establish scalable team conventions.",
    platform: "Technical Note",
    link: "https://aayushbatra.netlify.app/framework",
    date: "Architecture",
    tags: ["Architecture", "React", "Next.js"],
  },
  {
    title: "Database Management Systems (DBMS)",
    description:
      "Comparative analysis of relational vs document stores (PostgreSQL vs MongoDB), indexing patterns, and schema design principles.",
    platform: "Guide",
    link: "https://database-management-system.netlify.app/",
    date: "Databases",
    tags: ["PostgreSQL", "MongoDB", "Backend"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Deenbandhu Chhotu Ram University of Science and Technology",
    degree: "B. Tech in Electronics and Communication Engineering",
    location: "Murthal, India",
    period: "Oct 2020 – July 2024",
    description:
      "Graduated with core foundations in computing systems, algorithmic problem solving, electronics, and digital architecture.",
  },
  {
    institution: "NeoG Camp",
    degree: "Full Stack Web Development Certification",
    period: "Feb 2023 – Nov 2023",
    description:
      "Rigorous 9-month immersive program covering full-stack web development: ES6+, React, Redux, Node.js, Express, MongoDB, TypeScript, and modern system architecture.",
  },
];
