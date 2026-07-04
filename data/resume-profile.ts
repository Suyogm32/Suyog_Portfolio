export const resumeProfile = {
  location: "Pune, India, 411045",
  phoneDisplay: "+91 98906 11650",
  summary: [
    "Software Engineer with 2+ years of experience in the analysis, design, development, and delivery of software solutions across enterprise PLM platforms and full-stack web applications. Skilled in C++, Python, Java, and JavaScript, with proven strengths in backend development, code review, distributed systems debugging, and performance optimization. Experienced in defining requirements, authoring technical documentation, collaborating in Agile teams, and guiding less experienced engineers to deliver reliable, scalable software.",
  ],
  skillGroups: [
    {
      title: "Languages",
      items: "C++ • Python • Java • JavaScript",
    },
    {
      title: "Backend & Systems",
      items:
        "Distributed Systems • REST APIs • Debugging • Performance Optimization • Data Structures & Algorithms",
    },
    {
      title: "Frameworks & Tools",
      items:
        "Google Test (GTest) • ASP.NET • Node.js • Next.js • React.js • Git • Agile",
    },
    {
      title: "Databases",
      items: "MySQL • MongoDB",
    },
    {
      title: "Cloud & Platforms",
      items: "AWS • Linux",
    },
  ],
  experience: [
    {
      title: "Software Engineer — Prescient Technologies, Baner, Pune",
      period: "Jul 2024 – Present",
      highlights: [
        "Contributed to the design, development, and delivery of backend functionality for Siemens Teamcenter, an enterprise PLM platform built on a distributed service architecture",
        "Improved the performance of the Change Management module by 88% (14.8s to 1.67s) by re-engineering bulk processing of problem, solution, and impacted items (checkAndConsumeCMLicenseBulk)",
        "Implemented merge functionality for Usage BOM in Teamcenter to support more reliable product data management",
        "Implemented WCAG accessibility fixes, resolving ARIA attribute, keyboard navigation, and screen reader compatibility issues",
        "Performed remote debugging of distributed backend services to identify and resolve production defects, supporting day-to-day system reliability",
        "Authored unit tests using Google Test (GTest) and participated in code reviews to uphold coding standards and best practices",
        "Contributed to Prescient Author, a low-code software development platform, implementing soft delete functionality and partial page rendering using ASP.NET UpdatePanel",
        "Collaborated with cross-functional teams in an Agile environment to deliver production-ready features",
      ],
    },
    {
      title: "Software Engineering Intern — Persistent Systems, Hinjewadi, Pune",
      period: "Jan 2023 – Jun 2023",
      highlights: [
        "Completed technical training in Python, Linux, SQL, and data engineering fundamentals",
        "Developed an e-commerce web application demonstrating backend development and database integration",
        "Collaborated with development teams to implement scalable, maintainable software solutions",
      ],
    },
    {
      title: "Data Engineering Intern — Celebal Technologies, Pune",
      period: "Jun 2022 – Jul 2022",
      highlights: [
        "Implemented ETL pipelines for efficient data extraction, transformation, and loading",
        "Optimized database queries and assisted in maintaining large-scale datasets",
        "Performed data analysis to generate insights supporting business decision-making",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "FitVoyage – Fitness Application",
      description:
        "Full-stack fitness application with workout scheduling, exercise guidance, diet articles, and integrated shopping. Integrated with Google Fit to track user activity and health metrics. Built with Next.js, React.js, MongoDB, Tailwind CSS, and Material UI.",
    },
    {
      title: "E-Commerce Web Application",
      description:
        "Full-stack e-commerce platform with product browsing, shopping cart functionality, and secure payments via Stripe, plus AWS S3 for product media storage. Built with Next.js, React.js, MongoDB, and Tailwind CSS.",
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science — GPA 8.59/10",
      institution: "MIT Academy of Engineering, Pune (2019 – 2023)",
    },
  ],
  highlights: [
    "2+ Years Professional Experience",
    "C++ & Distributed Systems",
    "88% Perf. Improvement Shipped",
    "Siemens Teamcenter Contributor",
    "WCAG Accessibility",
    "Full-Stack: Next.js & React",
  ],
} as const;
