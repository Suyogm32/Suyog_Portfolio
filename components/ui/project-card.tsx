"use client";

import type { CSSProperties } from "react";
import type { Project } from "@/types/portfolio";
import { getMetroAccent } from "@/lib/project-colors";
import { Badge } from "@/components/retroui/Badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  className?: string;
};

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const accent = getMetroAccent(index);
  const initial = project.title.charAt(0).toUpperCase();
  const projectNum = String(index + 1).padStart(2, "0");

  return (
    <article
      data-cursor-hover
      data-cursor-type="project"
      data-cursor-magnetic
      className={cn(
        "metro-project-card group flex w-full flex-col overflow-hidden border-2 border-black bg-card shadow-md",
        className,
      )}
      style={
        {
          "--metro-bg": accent.bg,
          "--metro-fg": accent.fg,
        } as CSSProperties
      }
    >
      <div className="metro-project-card__tile relative flex h-32 flex-col justify-between border-b-2 border-black p-4 sm:h-40 sm:p-5 md:h-44 md:p-6">
        <span
          className="metro-project-card__ghost font-head leading-none select-none"
          aria-hidden
        >
          {initial}
        </span>
        <div className="relative z-10 flex items-end justify-between gap-2 sm:gap-3">
          <span className="font-head text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {initial}
          </span>
          <span className="font-mono text-[9px] tracking-[0.15em] uppercase opacity-80 sm:text-xs sm:tracking-[0.2em]">
            Proj · {projectNum}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <h3 className="break-words font-head text-lg font-bold tracking-tight text-card-foreground sm:text-xl md:text-2xl">
          {project.title}
        </h3>
        <p className="prose-body mt-3 flex-1 text-sm sm:text-base">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5 border-t-2 border-black/10 pt-4 sm:mt-5 sm:gap-2 sm:pt-5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
