import type { IconType } from "react-icons";
import {
  SiAntdesign,
  SiBootstrap,
  SiCodeigniter,
  SiCss,
  SiD3,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMui,
  SiMysql,
  SiPhp,
  SiReact,
  SiShopify,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { cn } from "@/lib/utils";

const iconMap: Record<string, IconType> = {
  php: SiPhp,
  laravel: SiLaravel,
  codeigniter: SiCodeigniter,
  react: SiReact,
  javascript: SiJavascript,
  mysql: SiMysql,
  html5: SiHtml5,
  css3: SiCss,
  jquery: SiJquery,
  tailwindcss: SiTailwindcss,
  antdesign: SiAntdesign,
  mui: SiMui,
  d3: SiD3,
  shopify: SiShopify,
  bootstrap: SiBootstrap,
  api: TbApi,
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
