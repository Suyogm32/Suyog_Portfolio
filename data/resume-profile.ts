export const resumeProfile = {
  location: "Pune, India",
  phoneDisplay: "+91 7972305010",
  summary: [
    "Senior Full Stack Developer with 8+ years of experience building scalable web applications, SaaS platforms, e-commerce systems, and business management solutions. Specialized in Laravel, React.js, REST APIs, and modern frontend development.",
    "Experienced in delivering complete products from architecture and development to deployment and production support. Strong focus on performance, scalability, clean code, and business-driven solutions.",
  ],
  skillGroups: [
    {
      title: "Backend",
      items:
        "Laravel • PHP • CodeIgniter • REST APIs • JWT • Laravel Sanctum",
    },
    {
      title: "Frontend",
      items:
        "React.js • JavaScript (ES6+) • Tailwind CSS • Ant Design • Material UI • HTML5 • CSS3",
    },
    {
      title: "Database",
      items: "MySQL",
    },
    {
      title: "E-Commerce & Integrations",
      items: "Shopify Apps • Payment Gateways • OAuth • Third-Party APIs",
    },
    {
      title: "Tools",
      items: "Git • Deployment Management • System Architecture",
    },
  ],
  experience: [
    {
      title: "Senior Web Developer — Aarya Global Consulting",
      period: "Jan 2023 – Present",
      highlights: [
        "Develop scalable Laravel applications and REST APIs",
        "Build React-based dashboards and business platforms",
        "Create Shopify embedded applications and extensions",
        "Design multi-tenant and e-commerce architectures",
        "Handle deployments and production releases",
      ],
    },
    {
      title: "Freelance Full Stack Developer",
      period: "Jul 2022 – Dec 2022",
      highlights: [
        "Built Samurai Golf booking platform from scratch",
        "Developed CRM systems and workflow automation",
        "Delivered custom Laravel solutions for multiple clients",
      ],
    },
    {
      title: "PHP Developer — Techbee Consulting",
      period: "May 2019 – May 2022",
      highlights: [
        "Developed Laravel applications and admin dashboards",
        "Integrated payment gateways and third-party services",
        "Maintained and expanded production systems",
      ],
    },
    {
      title: "Early Career",
      period: "2017 – 2019",
      highlights: [
        "Worked with CodeIgniter, Laravel, React.js, and PHP applications across LBM Infotech, Aspire Web & Informatics, and freelance projects.",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "Naam Jap Shibir",
      description:
        "Real-time event tracking PWA built with React, Laravel, and MySQL featuring attendance tracking, geolocation validation, and admin dashboards.",
    },
    {
      title: "EC Mall",
      description:
        "Multi-vendor e-commerce platform with seller management, shipping automation, and order lifecycle tracking.",
    },
    {
      title: "Shopify Smart Product Filter",
      description:
        "Embedded Shopify application enabling merchants to create dynamic storefront filters without theme code modifications.",
    },
    {
      title: "Samurai Golf Tours",
      description:
        "International golf booking platform with Mapbox integration, booking workflows, and automated communications.",
    },
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "Savitribai Phule Pune University",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Savitribai Phule Pune University",
    },
  ],
  highlights: [
    "8+ Years of Experience",
    "Laravel & React Specialist",
    "Shopify App Development",
    "SaaS & Multi-Tenant Systems",
    "REST API Architecture",
    "E-Commerce Solutions",
    "End-to-End Product Development",
  ],
} as const;
