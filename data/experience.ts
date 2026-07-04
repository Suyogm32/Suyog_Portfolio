import type { Experience, SectionContent } from "@/types/portfolio";

export const experienceContent: SectionContent = {
  label: "Experience",
  title: "Professional journey",
  description:
    "A track record building backend systems in C++ — from data engineering and software internships to enterprise platform development at Prescient Technologies.",
};

export const experience: Experience[] = [
  {
    company: "Prescient Technologies",
    role: "Software Engineer",
    period: "Jul 2024 – Present",
    highlights: [
      "Siemens Teamcenter: Contributed to the design, development, and delivery of backend functionality for an enterprise PLM platform built on a distributed service architecture",
      "Implemented merge functionality for Usage BOM in Teamcenter to support more reliable product data management",
      "Implemented WCAG accessibility fixes, resolving ARIA attribute, keyboard navigation, and screen reader compatibility issues",
      "Performed remote debugging of distributed backend services to identify and resolve production defects, supporting day-to-day system reliability",
      "Authored unit tests using Google Test (GTest) and participated in code reviews to uphold coding standards and best practices",
      "Prescient Author Platform: Contributed to a low-code software development platform, implementing soft delete functionality and partial page rendering using ASP.NET UpdatePanel",
      "Collaborated with cross-functional teams in an Agile environment to deliver production-ready features",
    ],
    impact: {
      metric: "Change Management Module — Bulk License Processing",
      context:
        "Re-engineered bulk processing of problem, solution, and impacted items (checkAndConsumeCMLicenseBulk).",
      before: 14.8,
      after: 1.67,
      unit: "s",
      percent: 88,
    },
  },
  {
    company: "Persistent Systems",
    role: "Software Engineering Intern",
    period: "Jan 2023 – Jun 2023",
    highlights: [
      "Completed technical training in Python, Linux, SQL, and data engineering fundamentals",
      "Developed an e-commerce web application demonstrating backend development and database integration",
      "Collaborated with development teams to implement scalable, maintainable software solutions",
    ],
  },
  {
    company: "Celebal Technologies",
    role: "Data Engineering Intern",
    period: "Jun 2022 – Jul 2022",
    highlights: [
      "Implemented ETL pipelines for efficient data extraction, transformation, and loading",
      "Optimized database queries and assisted in maintaining large-scale datasets",
      "Performed data analysis to generate insights supporting business decision-making",
    ],
  },
];
