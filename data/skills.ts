import type { SectionContent, Skill } from "@/types/portfolio";

export const skillsContent: SectionContent = {
  label: "Skills",
  title: "What I'm good at",
  description:
    "Core languages, backend systems, and tools I use to build reliable software.",
};

export const skills: Skill[] = [
  { name: "C++", level: 85 },
  { name: "Data Structures & Algorithms", level: 85 },
  { name: "Distributed Systems & Debugging", level: 80 },
  { name: "Performance Optimization", level: 80 },
  { name: "Python", level: 75 },
  { name: "React.js / Next.js", level: 75 },
  { name: "MongoDB / MySQL", level: 70 },
];
