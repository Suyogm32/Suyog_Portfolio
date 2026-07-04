"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const KEY_TIMEOUT = 3000;
const RAT_COUNT = 16;
const RAT_WIDTH = 44;
const RAT_HEIGHT = 24;
const SWARM_DURATION = 8000;
const MIN_SPEED = 2.5;
const MAX_SPEED = 6.5;
const MIN_TURN_MS = 250;
const MAX_TURN_MS = 700;

/* ── Procedural pixel rat ──
 * The body is a true ellipse (computed, not hand-typed) so the silhouette
 * stays smooth and symmetric. Snout, ear, eye, tail, and legs are added as
 * small fixed offsets from that body. Two frames alternate leg stride and
 * tail curl for a scurrying run cycle. */

const RAT_COLS = 24;
const RAT_ROWS = 13;

const BODY_CX = 12;
const BODY_CY = 6;
const BODY_RX = 6.5;
const BODY_RY = 3.6;

function isBody(x: number, y: number): boolean {
  const dx = (x - BODY_CX) / BODY_RX;
  const dy = (y - BODY_CY) / BODY_RY;
  return dx * dx + dy * dy <= 1;
}

const RAT_PIXEL_COLORS: Record<string, string> = {
  B: "#8a7566", // fur
  A: "#5f4c40", // ear
  T: "#5f4c40", // tail
  L: "#5f4c40", // legs
  Y: "#161616", // eye
  N: "#d98a93", // nose
};

function buildRatFrame(tailUp: boolean, frontLegForward: boolean): string[][] {
  const grid: string[][] = Array.from({ length: RAT_ROWS }, () =>
    Array<string>(RAT_COLS).fill("."),
  );

  const set = (x: number, y: number, token: string) => {
    if (x >= 0 && x < RAT_COLS && y >= 0 && y < RAT_ROWS) {
      grid[y][x] = token;
    }
  };

  // Body — smooth ellipse
  for (let y = 0; y < RAT_ROWS; y++) {
    for (let x = 0; x < RAT_COLS; x++) {
      if (isBody(x, y)) set(x, y, "B");
    }
  }

  // Ear, perched just above the head
  set(15, 2, "A");
  set(16, 2, "A");
  set(16, 3, "A");

  // Snout, tapering to a point
  set(19, 5, "B");
  set(19, 6, "B");
  set(19, 7, "B");
  set(20, 6, "B");
  set(21, 6, "N");

  // Eye, right at the head/snout join
  set(18, 5, "Y");

  // Tail, curling either up over the back or down along the ground
  if (tailUp) {
    set(5, 6, "T");
    set(4, 5, "T");
    set(3, 4, "T");
    set(2, 3, "T");
  } else {
    set(5, 7, "T");
    set(4, 8, "T");
    set(3, 8, "T");
    set(2, 9, "T");
    set(1, 9, "T");
    set(1, 10, "T");
  }

  // Legs, alternating stride
  set(10, 10, "L");
  set(14, 10, "L");
  if (frontLegForward) {
    set(10, 11, "L");
  } else {
    set(14, 11, "L");
  }

  return grid;
}

function gridToDataUrl(grid: string[][]): string {
  let rects = "";
  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      const fill = RAT_PIXEL_COLORS[cell];
      if (!fill) return;
      rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${fill}"/>`;
    });
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${RAT_COLS} ${RAT_ROWS}" shape-rendering="crispEdges">${rects}</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const RAT_FRAME_URLS = [
  gridToDataUrl(buildRatFrame(false, true)),
  gridToDataUrl(buildRatFrame(true, false)),
];

type RatState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  nextTurnAt: number;
  frame: number;
  lastFrameTime: number;
};

function randomVelocity(speed: number) {
  const angle = Math.random() * Math.PI * 2;
  return { vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed };
}

function createRatState(width: number, height: number): RatState {
  const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
  const { vx, vy } = randomVelocity(speed);
  return {
    x: Math.random() * Math.max(width - RAT_WIDTH, 0),
    y: Math.random() * Math.max(height - RAT_HEIGHT, 0),
    vx,
    vy,
    nextTurnAt: MIN_TURN_MS + Math.random() * (MAX_TURN_MS - MIN_TURN_MS),
    frame: 0,
    lastFrameTime: 0,
  };
}

/**
 * Renders the swarm and drives every rat off a single shared animation
 * loop (instead of one rAF + listener per rat) so the chaos stays smooth.
 */
function WildRatsSwarm({ onDone }: { onDone: () => void }) {
  const elsRef = useRef<Array<HTMLDivElement | null>>([]);
  const statesRef = useRef<RatState[] | null>(null);

  if (!statesRef.current) {
    const width = typeof window !== "undefined" ? window.innerWidth : 1280;
    const height = typeof window !== "undefined" ? window.innerHeight : 800;
    statesRef.current = Array.from({ length: RAT_COUNT }, () =>
      createRatState(width, height),
    );
  }

  useEffect(() => {
    const states = statesRef.current;
    if (!states) return;

    let raf = 0;
    let elapsed = 0;
    let lastTime = performance.now();

    const tick = (t: number) => {
      const dt = t - lastTime;
      lastTime = t;
      elapsed += dt;

      const w = window.innerWidth;
      const h = window.innerHeight;

      states.forEach((rat, i) => {
        const el = elsRef.current[i];
        if (!el) return;

        rat.nextTurnAt -= dt;
        if (rat.nextTurnAt <= 0) {
          const currentSpeed = Math.hypot(rat.vx, rat.vy) || MIN_SPEED;
          const nextSpeed = Math.min(
            Math.max(currentSpeed * (0.6 + Math.random() * 0.9), MIN_SPEED),
            MAX_SPEED,
          );
          const { vx, vy } = randomVelocity(nextSpeed);
          rat.vx = vx;
          rat.vy = vy;
          rat.nextTurnAt =
            MIN_TURN_MS + Math.random() * (MAX_TURN_MS - MIN_TURN_MS);
        }

        rat.x += rat.vx * (dt / 16.7);
        rat.y += rat.vy * (dt / 16.7);

        if (rat.x <= 0) {
          rat.x = 0;
          rat.vx = Math.abs(rat.vx);
        } else if (rat.x >= w - RAT_WIDTH) {
          rat.x = w - RAT_WIDTH;
          rat.vx = -Math.abs(rat.vx);
        }

        if (rat.y <= 0) {
          rat.y = 0;
          rat.vy = Math.abs(rat.vy);
        } else if (rat.y >= h - RAT_HEIGHT) {
          rat.y = h - RAT_HEIGHT;
          rat.vy = -Math.abs(rat.vy);
        }

        rat.lastFrameTime += dt;
        if (rat.lastFrameTime > 110) {
          rat.lastFrameTime = 0;
          rat.frame += 1;
          el.style.backgroundImage = `url("${RAT_FRAME_URLS[rat.frame % RAT_FRAME_URLS.length]}")`;
        }

        const facing = rat.vx < 0 ? -1 : 1;
        el.style.transform = `translate3d(${rat.x}px, ${rat.y}px, 0) scaleX(${facing})`;

        if (elapsed < 400) {
          el.style.opacity = String(Math.min(elapsed / 250, 1));
        }
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    const timeout = window.setTimeout(onDone, SWARM_DURATION);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [onDone]);

  return (
    <>
      {Array.from({ length: RAT_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(node) => {
            elsRef.current[i] = node;
          }}
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-[9990] w-[44px] h-[24px] opacity-0 will-change-transform"
          style={{
            backgroundImage: `url("${RAT_FRAME_URLS[0]}")`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </>
  );
}

export function KonamiEasterEgg() {
  const progressRef = useRef(0);
  const lastKeyTimeRef = useRef(0);
  const [swarmActive, setSwarmActive] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    function trigger() {
      setToastOpen(true);

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!prefersReduced) {
        // Fully remount the swarm on every trigger so positions/velocities
        // reset cleanly even if the code is entered again mid-chaos.
        setSwarmActive(false);
        window.setTimeout(() => setSwarmActive(true), 0);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      const now = Date.now();
      if (now - lastKeyTimeRef.current > KEY_TIMEOUT) {
        progressRef.current = 0;
      }
      lastKeyTimeRef.current = now;

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = KONAMI_SEQUENCE[progressRef.current];

      if (key === expected) {
        progressRef.current += 1;
        if (progressRef.current === KONAMI_SEQUENCE.length) {
          progressRef.current = 0;
          trigger();
        }
      } else {
        progressRef.current = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = window.setTimeout(() => setToastOpen(false), 8000);
    return () => window.clearTimeout(timer);
  }, [toastOpen]);

  return (
    <>
      {swarmActive && <WildRatsSwarm onDone={() => setSwarmActive(false)} />}

      {toastOpen && (
        <div className="animate-reveal-up fixed bottom-5 left-1/2 z-[9999] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 sm:right-6 sm:left-auto sm:bottom-8 sm:w-full sm:translate-x-0">
          <div className="flex items-start gap-3 border-2 border-black bg-card p-4 shadow-lg">
            <span className="text-xl" aria-hidden>
              🎮
            </span>
            <div className="flex-1 text-sm">
              <p className="font-head font-semibold text-card-foreground">
                You found the secret.
              </p>
              <p className="prose-body mt-1 text-xs sm:text-sm">
                Let&apos;s talk —{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setToastOpen(false)}
              className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
