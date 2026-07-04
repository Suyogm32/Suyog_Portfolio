import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiDotnet,
  SiGit,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const iconMap: Record<string, IconType> = {
  cpp: SiCplusplus,
  python: SiPython,
  java: FaJava,
  react: SiReact,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  mysql: SiMysql,
  tailwindcss: SiTailwindcss,
  mui: SiMui,
  aws: FaAws,
  linux: SiLinux,
  git: SiGit,
  dotnet: SiDotnet,
};

type TechIconProps = {
  icon: string;
  className?: string;
};

export function TechIcon({ icon, className }: TechIconProps) {
  const Icon = iconMap[icon];

  if (!Icon) {
    return null;
  }

  return <Icon className={cn("h-8 w-8", className)} aria-hidden />;
}
