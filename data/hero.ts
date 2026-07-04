import type { TechStackItem } from "@/types/portfolio";

export const heroContent = {
  badge: "2+ Years of Professional Experience",
  availability: "Open to Opportunities",
  greeting: "Hi, I'm",
  tagline:
    "Software Engineer specializing in C++ backend development, distributed systems debugging, and performance optimization on enterprise platforms — with full-stack project experience in Next.js, React.js, and MongoDB.",
  availabilityNote:
    "Open to software engineering roles and backend/full-stack projects.",
  primaryCta: { label: "View Experience", href: "#experience" },
  secondaryCta: { label: "View Projects", href: "#projects" },
  resumeCta: { label: "View Resume" },
} as const;

export const heroTechStack: TechStackItem[] = [
  { name: "C++", icon: "cpp" },
  { name: "Python", icon: "python" },
  { name: "Java", icon: "java" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Material UI", icon: "mui" },
  { name: "AWS", icon: "aws" },
  { name: "Linux", icon: "linux" },
  { name: "Git", icon: "git" },
  { name: "ASP.NET", icon: "dotnet" },
];
