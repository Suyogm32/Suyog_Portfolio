import type { Education, SectionContent } from "@/types/portfolio";

export const aboutContent: SectionContent = {
  label: "About Me",
  title: "Who I am",
  description:
    "A software engineer with a strong foundation in data structures and algorithms, hands-on experience in C++ backend development, and a growing full-stack skill set.",
};

export const aboutStory = [
  "I'm Suyog Mahangade, a Software Engineer with 2+ years of experience in the analysis, design, development, and delivery of software solutions across enterprise PLM platforms and full-stack web applications. At Prescient Technologies, I work on Siemens Teamcenter — an enterprise PLM platform — where I improved the performance of the Change Management module by 88% (14.8s to 1.67s) and implemented merge functionality for Usage BOM to support more reliable product data management.",
  "I'm skilled in C++, Python, Java, and JavaScript, with strengths in backend development, code review, distributed systems debugging, and performance optimization. Beyond my day-to-day backend work, I build full-stack projects with Next.js, React.js, and MongoDB, including a fitness application and an e-commerce platform.",
];

export const aboutStrengths = [
  "C++ backend development and distributed systems debugging",
  "Performance optimization — improved a production module by 88% (14.8s to 1.67s)",
  "WCAG accessibility implementation — ARIA attributes, keyboard navigation, screen reader support",
  "Code review, technical documentation, and mentoring less experienced engineers",
  "Full-stack development with Next.js, React.js, and MongoDB",
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science — GPA 8.59/10",
    institution: "MIT Academy of Engineering, Pune (2019 – 2023)",
  },
];
