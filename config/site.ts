import type { Metadata } from "next";

export const siteConfig = {
  name: "Suyog Mahangade",
  shortName: "Suyog",
  title: "Suyog Mahangade | Software Engineer",
  role: "Software Engineer — C++ & Distributed Systems",
  description:
    "Portfolio of Suyog Mahangade — Software Engineer with 2+ years of experience in C++, Python, Java, and JavaScript, specializing in backend development, distributed systems debugging, and performance optimization on enterprise platforms like Siemens Teamcenter.",
  url: "https://suyog-portfolio-phi.vercel.app",
  email: "suyogm32@gmail.com",
  phone: "+919890611650",
  phoneDisplay: "+91 98906 11650",
  linkedin: "https://www.linkedin.com/in/suyog-mahangade/",
  resumePath: "/SUYOG_Resume.pdf",
} as const;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Suyog Mahangade",
    "Software Engineer",
    "C++ Developer",
    "Backend Developer",
    "Siemens Teamcenter",
    "Distributed Systems",
    "Full Stack Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};