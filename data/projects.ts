import type { Project, SectionContent } from "@/types/portfolio";

export const projectsContent: SectionContent = {
  label: "Projects",
  title: "What I've built",
  description:
    "Full-stack projects built with Next.js, React.js, and MongoDB — alongside enterprise backend work in C++.",
};

export const projects: Project[] = [
  {
    title: "FitVoyage – Fitness Application",
    description:
      "Full-stack fitness application offering workout scheduling, exercise guidance, diet articles, and integrated shopping for fitness products. Integrated with Google Fit to track and monitor user fitness activities and health metrics, with responsive UI and scalable backend services.",
    tags: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Tailwind CSS",
      "Material UI",
      "Google Fit API",
    ],
  },
  {
    title: "E-Commerce Web Application",
    description:
      "Full-stack e-commerce platform enabling product browsing, shopping cart functionality, and secure online payments. Implemented payment integration using Stripe and cloud-based storage using AWS S3 for product media management.",
    tags: ["Next.js", "React.js", "MongoDB", "Tailwind CSS", "Stripe", "AWS S3"],
  },
];
