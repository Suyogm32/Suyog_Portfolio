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
  php: "pink",
  laravel: "purple",
  codeigniter: "orange",
  react: "cyan",
  javascript: "yellow",
  mysql: "orange",
  html5: "orange",
  css3: "purple",
  jquery: "yellow",
  tailwindcss: "cyan",
  antdesign: "purple",
  mui: "cyan",
  d3: "cyan",
  shopify: "orange",
  bootstrap: "purple",
  api: "cyan",
};

export function getTechAccent(icon: string): AccentColor {
  return techAccentMap[icon] ?? "purple";
}
