"use client";

import { PixelArrowCursor } from "@/components/ui/pixel-arrow-cursor";
import { useEffect, useRef } from "react";

const ZONE_COLORS: Record<string, string> = {
  hero: "#ec4899",
  tech: "#06b6d4",
  projects: "#8b5cf6",
  experience: "#f97316",
  skills: "#06b6d4",
  contact: "#facc15",
  about: "#8b5cf6",
  default: "#ec4899",
};

const LERP_POS = 0.22;
const LERP_COLOR = 0.12;
const LERP_SCALE = 0.15;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function hexToRgb(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function lerpColor(from: string, to: string, t: number) {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  return `rgb(${Math.round(lerp(a.r, b.r, t))}, ${Math.round(lerp(a.g, b.g, t))}, ${Math.round(lerp(a.b, b.b, t))})`;
}

export function CustomCursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!isFinePointer || prefersReduced) return;

    document.body.setAttribute("data-custom-cursor", "true");

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let targetX = 0;
    let targetY = 0;
    let visible = 0;
    let scale = 1;
    let targetScale = 1;
    let rafId = 0;

    let currentColor = ZONE_COLORS.default;
    let targetColor = ZONE_COLORS.default;

    const detectZone = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y);
      const zone = el?.closest("[data-cursor-zone]") as HTMLElement | null;
      targetColor =
        ZONE_COLORS[zone?.dataset.cursorZone ?? "default"] ??
        ZONE_COLORS.default;
    };

    const updateHover = (e: MouseEvent) => {
      const hoverEl = (e.target as HTMLElement).closest(
        "[data-cursor-hover]",
      ) as HTMLElement | null;

      targetScale = hoverEl ? 1.14 : 1;

      if (!hoverEl) {
        targetX = mouseX;
        targetY = mouseY;
        cursor.dataset.hover = "false";
        return;
      }

      cursor.dataset.hover = "true";

      const magnetic = hoverEl.closest(
        "[data-cursor-magnetic]",
      ) as HTMLElement | null;

      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        targetX = lerp(mouseX, rect.left + rect.width / 2, 0.18);
        targetY = lerp(mouseY, rect.top + rect.height / 2, 0.18);
      } else {
        targetX = mouseX;
        targetY = mouseY;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      detectZone(mouseX, mouseY);
      updateHover(e);
      if (visible === 0) visible = 1;
    };

    const onMouseLeave = () => {
      visible = 0;
    };

    const onMouseEnter = () => {
      visible = 1;
    };

    const tick = () => {
      posX = lerp(posX, targetX, LERP_POS);
      posY = lerp(posY, targetY, LERP_POS);
      scale = lerp(scale, targetScale, LERP_SCALE);
      currentColor = lerpColor(currentColor, targetColor, LERP_COLOR);

      cursor.style.opacity = String(visible);
      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      cursor.style.setProperty("--cursor-accent", currentColor);
      cursor.style.setProperty("--cursor-scale", String(scale));

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.body.removeAttribute("data-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="retro-cursor"
        data-hover="false"
        aria-hidden
      >
        <PixelArrowCursor />
      </div>
      {children}
    </>
  );
}
