export type NavLink = {
  href: string;
  label: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type TechStackItem = {
  name: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  institution: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SectionContent = {
  label: string;
  title: string;
  description: string;
};
