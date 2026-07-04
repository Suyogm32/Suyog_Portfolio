export type AccentColor = "pink" | "purple" | "cyan" | "orange" | "yellow";

export const accentHex: Record<AccentColor, string> = {
  pink: "#ec4899",
  purple: "#8b5cf6",
  cyan: "#06b6d4",
  orange: "#f97316",
  yellow: "#facc15",
};

/** Curated per-technology accent — intentional, not random */
export const techAccentMap: Record<string, AccentColor> = {
  cpp: "purple",
  python: "yellow",
  java: "orange",
  react: "cyan",
  javascript: "yellow",
  nextjs: "purple",
  nodejs: "orange",
  mongodb: "cyan",
  mysql: "orange",
  tailwindcss: "cyan",
  mui: "cyan",
  aws: "orange",
  linux: "pink",
  git: "purple",
  dotnet: "purple",
};

export function getTechAccent(icon: string): AccentColor {
  return techAccentMap[icon] ?? "purple";
}
