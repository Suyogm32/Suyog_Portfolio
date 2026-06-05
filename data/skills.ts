import type { SectionContent, Skill } from "@/types/portfolio";

export const skillsContent: SectionContent = {
  label: "Skills",
  title: "What I'm good at",
  description:
    "A mix of development and design skills I use to build lovely digital experiences.",
};

export const skills: Skill[] = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React / Next.js", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Figma", level: 70 },
];
