export type MetroAccent = {
  bg: string;
  fg: string;
  name: string;
};

/** One bold flat color per card — retro metro palette */
export const metroAccents: MetroAccent[] = [
  { bg: "#ec4899", fg: "#ffffff", name: "pink" },
  { bg: "#8b5cf6", fg: "#ffffff", name: "purple" },
  { bg: "#06b6d4", fg: "#ffffff", name: "cyan" },
  { bg: "#f97316", fg: "#ffffff", name: "orange" },
  { bg: "#111111", fg: "#ffffff", name: "mono" },
  { bg: "#facc15", fg: "#111111", name: "yellow" },
];

export function getMetroAccent(index: number): MetroAccent {
  return metroAccents[index % metroAccents.length];
}
