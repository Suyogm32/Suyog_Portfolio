import type { Metadata } from "next";

export const siteConfig = {
  name: "Suyog Mahangade",
  shortName: "Ashwini",
  title: "Suyog Mahangade | Senior Full Stack Developer",
  role: "Senior Full Stack Developer (Laravel + React)",
  description:
    "Portfolio of Suyog Mahangade — Senior Full Stack Developer with 8+ years of experience in Laravel, React, and scalable web applications.",
  url: "https://ashwini.dev",
  email: "jadhavashwini2017@gmail.com",
  phone: "7972305010",
  phoneDisplay: "+91 7972305010",
  linkedin: "https://www.linkedin.com/in/ashwini-jadhav",
  resumePath: "/ASHWINI_RESUME_2026.pdf",
} as const;

export const siteMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};
