import type { SectionContent } from "@/types/portfolio";
import { siteConfig } from "@/config/site";

export const contactContent: SectionContent = {
  label: "Contact",
  title: "Let's connect",
  description:
    "Open to software engineering roles, backend/full-stack projects, and collaborations. Reach out anytime.",
};

export const contactMethods = [
  {
    label: "Email Me",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: "Send Email",
  },
  {
    label: "Call Me",
    description: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    cta: "Call Now",
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: siteConfig.linkedin,
    cta: "Connect on LinkedIn",
    external: true,
  },
] as const;
