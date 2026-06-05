"use client";

import type { CSSProperties } from "react";
import { accentHex, getTechAccent } from "@/lib/tech-colors";
import { TechIcon } from "@/components/ui/tech-icon";
import { cn } from "@/lib/utils";

type TechCardProps = {
  name: string;
  icon: string;
  className?: string;
};

export function TechCard({ name, icon, className }: TechCardProps) {
  const accent = getTechAccent(icon);
  const color = accentHex[accent];

  return (
    <div
      data-cursor-hover
      data-cursor-type="tech"
      data-cursor-magnetic
      className={cn(
        "tech-card group flex h-full min-h-[88px] flex-col items-center justify-center gap-1.5 border-2 border-black bg-card p-2.5 shadow-sm transition-all duration-300 active:scale-[0.97] sm:min-h-0 sm:gap-2 sm:p-3 sm:hover:-translate-y-1.5 sm:hover:shadow-lg md:p-3.5",
        `tech-glow-${accent}`,
        className,
      )}
      style={
        {
          "--tech-color": color,
        } as CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `4px 4px 0 0 var(--shadow-color), 0 8px 24px color-mix(in srgb, ${color} 25%, transparent)`;
        e.currentTarget.style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.borderColor = "";
      }}
    >
      <TechIcon
        icon={icon}
        className="h-6 w-6 text-foreground transition-all duration-300 sm:h-8 sm:w-8 sm:group-hover:scale-110 sm:group-hover:text-[var(--tech-color)]"
      />
      <span className="text-center text-[11px] font-head leading-tight text-muted-foreground transition-colors duration-300 sm:text-xs sm:group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}
