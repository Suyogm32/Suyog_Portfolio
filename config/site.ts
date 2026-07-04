import type { Metadata } from "next";

export const siteConfig = {
  name: "Suyog Mahangade",
  shortName: "Suyog",
  title: "Suyog Mahangade | Software Engineer",
  role: "Software Engineer — C++ & Distributed Systems",
  description:
    "Portfolio of Suyog Mahangade — Software Engineer with 2+ years of experience in C++, Python, Java, and JavaScript, specializing in backend development, distributed systems debugging, and performance optimization on enterprise platforms like Siemens Teamcenter.",
  url: "",
  email: "suyogm32@gmail.com",
  phone: "+919890611650",
  phoneDisplay: "+91 98906 11650",
  linkedin: "https://www.linkedin.com/in/suyog-mahangade/",
  resumePath: "/SUYOG_Resume.pdf",
} as const;

export const siteMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};