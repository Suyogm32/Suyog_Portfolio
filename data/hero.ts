import type { TechStackItem } from "@/types/portfolio";

export const heroContent = {
  badge: "8+ Years of Professional Experience",
  availability: "Freelancer",
  greeting: "Hi, I'm",
  tagline:
    "Senior Full Stack Developer specializing in Laravel, React.js, and scalable production systems — from REST APIs and admin dashboards to e-commerce and Shopify embedded apps.",
  availabilityNote:
    "Open for freelancing work on new projects, websites, and WordPress development.",
  primaryCta: { label: "View Experience", href: "#experience" },
  secondaryCta: { label: "View Projects", href: "#projects" },
  resumeCta: { label: "View Resume" },
} as const;

export const heroTechStack: TechStackItem[] = [
  { name: "PHP", icon: "php" },
  { name: "Laravel", icon: "laravel" },
  { name: "CodeIgniter", icon: "codeigniter" },
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "javascript" },
  { name: "MySQL", icon: "mysql" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "jQuery", icon: "jquery" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Ant Design", icon: "antdesign" },
  { name: "Material UI", icon: "mui" },
  { name: "D3.js", icon: "d3" },
  { name: "Shopify", icon: "shopify" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "REST API", icon: "api" },
];
