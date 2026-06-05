import type { Project, SectionContent } from "@/types/portfolio";

export const projectsContent: SectionContent = {
  label: "Projects",
  title: "What I've built",
  description:
    "Production systems spanning PWAs, e-commerce, Shopify apps, booking platforms, and multi-tenant APIs.",
};

export const projects: Project[] = [
  {
    title: "Naam Jap Shibir",
    description:
      "Real-time event tracking PWA for a multi-day event with family login, attendance tracking, live jap count aggregation, geolocation validation, and Excel participant import. Includes secure REST APIs and an admin dashboard with scalable frontend/backend infrastructure.",
    tags: ["React.js", "Tailwind CSS", "Laravel 10", "Sanctum", "MySQL", "PWA"],
  },
  {
    title: "EC Mall",
    description:
      "Scalable multi-vendor e-commerce platform with seller dashboards, service booking, shipping automation, and order lifecycle management. Role-based architecture allows independent seller operations under centralized admin control.",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    title: "Samurai Golf Tours",
    description:
      "Booking platform for Japanese golf tours featuring location mapping, course booking system, and admin panel for managing requests. Integrated automated email communication and improved booking workflow efficiency.",
    tags: ["Laravel", "jQuery", "Mapbox API", "SQL"],
  },
  {
    title: "Shopify Smart Product Filter",
    description:
      "Shopify embedded app enabling merchants to create dynamic storefront filters using Theme App Extensions. Implemented OAuth authentication, admin dashboard configuration, and theme-agnostic integration without Liquid code changes.",
    tags: ["Laravel", "Shopify API", "App Bridge", "JavaScript", "MySQL"],
  },
  {
    title: "Online MCQ Examination API",
    description:
      "Secure multi-tenant backend API for online examination systems with role-based access, exam management, result processing, and performance tracking.",
    tags: ["Laravel", "REST API", "MySQL", "JWT"],
  },
  {
    title: "Kaamkaz Website Revamp",
    description:
      "Enhanced job platform frontend and admin dashboard with responsive UI, API integration, authentication flows, and employer/employee management features.",
    tags: ["React.js", "Tailwind CSS", "REST APIs"],
  },
];
