import type { Metadata } from "next";

export const siteConfig = {
  name: "Suyog Mahangade",
  shortName: "Ashwini",
  title: "Suyog Mahangade | Senior Full Stack Developer",
  role: "Senior Full Stack Developer (Laravel + React)",
  description:
    "Portfolio of Suyog Mahangade — Senior Full Stack Developer with 8+ years of experience in Laravel, React, and scalable web applications.",
  url: "",
  email: "",
  phone: "",
  phoneDisplay: "+",
  linkedin: "",
  resumePath: "",
} as const;

export const siteMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};