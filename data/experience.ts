import type { Experience, SectionContent } from "@/types/portfolio";

export const experienceContent: SectionContent = {
  label: "Experience",
  title: "Professional journey",
  description:
    "A track record of building and shipping Laravel and React systems — from internships to senior full-stack roles and freelance delivery.",
};

export const experience: Experience[] = [
  {
    company: "Aarya Global Consulting",
    role: "Senior Web Developer",
    period: "Jan 2023 – Present",
    highlights: [
      "Develop scalable Laravel applications and REST APIs for production systems",
      "Build React-based admin dashboards and business management platforms",
      "Develop Shopify embedded applications and theme extensions",
      "Design e-commerce and multi-tenant system architecture",
      "Deliver full systems independently from development to deployment",
      "Manage production releases and server deployments",
    ],
  },
  {
    company: "Freelance Full Stack Developer",
    role: "Full Stack Developer",
    period: "July 2022 – Dec 2022",
    highlights: [
      "Built Samurai Golf international booking platform from scratch for golf players",
      "Developed CRM modules for petrol pump management system",
      "Expanded features for large-scale matrimonial platform",
      "Delivered Laravel systems with admin workflows and automation",
    ],
  },
  {
    company: "Techbee Consulting",
    role: "PHP Developer",
    period: "May 2019 – May 2022",
    highlights: [
      "Developed Laravel-based web applications and REST APIs",
      "Built dynamic admin dashboards and e-commerce modules",
      "Integrated payment gateways and third-party services",
      "Supported production maintenance and feature expansion",
    ],
  },
  {
    company: "LBM Infotech",
    role: "CodeIgniter Developer",
    period: "Nov 2018 – Mar 2019",
    highlights: [
      "Developed backend modules using CodeIgniter framework",
      "Maintained business logic and database operations",
    ],
  },
  {
    company: "Aspire Web & Informatics",
    role: "PHP Developer",
    period: "Feb 2018 – Oct 2018",
    highlights: [
      "Built PHP applications using Laravel and CodeIgniter",
      "Developed backend modules and CRUD systems",
      "Worked on React.js",
    ],
  },
  {
    company: "Freelance Developer",
    role: "Freelance Developer",
    period: "Aug 2017 – Jan 2018",
    highlights: [
      "Developed CRM-style applications for small businesses",
      "Built school management systems and exam management systems",
    ],
  },
  {
    company: "Netwin InfoSolutions",
    role: "Web Development Intern",
    period: "Jan 2017 – Jul 2017",
    highlights: [
      "Assisted in PHP and Flask application development",
      "Supported backend testing and debugging",
    ],
  },
];
