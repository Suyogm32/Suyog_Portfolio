"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ImpactStatProps = {
  metric: string;
  context?: string;
  before: number;
  after: number;
  unit: string;
  percent: number;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function ImpactStat({
  metric,
  context,
  before,
  after,
  unit,
  percent,
  className,
}: ImpactStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [afterValue, setAfterValue] = useState(before);
  const [percentValue, setPercentValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setAfterValue(after);
      setPercentValue(percent);
      return;
    }

    const duration = 2200;
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(t);
      setAfterValue(before + (after - before) * eased);
      setPercentValue(percent * eased);

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, before, after, percent]);

  return (
    <div
      ref={ref}
      data-cursor-hover
      data-cursor-type="card"
      className={cn(
        "border-2 border-black bg-background p-5 shadow-xs transition-all duration-300 sm:p-6",
        className,
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase sm:text-xs">
            Performance Impact
          </p>
          <p className="mt-1 font-head text-sm font-semibold text-card-foreground sm:text-base">
            {metric}
          </p>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-head text-3xl font-bold tabular-nums text-orange sm:text-4xl">
            {Math.round(percentValue)}%
          </span>
          <span className="text-xs font-medium text-muted-foreground sm:text-sm">
            faster
          </span>
        </div>
      </div>

      <div className="relative mt-9 mb-5">
        <div className="h-3 w-full overflow-hidden border-2 border-black bg-secondary">
          <div
            className="h-full bg-orange"
            style={{ width: `${Math.min(percentValue, 100)}%` }}
          />
        </div>

        <div
          className="car-bounce absolute z-10"
          style={{
            left: `${Math.min(percentValue, 100)}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/f1.png"
            alt=""
            aria-hidden="true"
            className="h-16 w-16 drop-shadow-sm"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 sm:gap-8">
        <div>
          <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
            Before
          </p>
          <p className="font-head text-xl font-bold text-muted-foreground line-through decoration-2 sm:text-2xl">
            {before.toFixed(1)}
            {unit}
          </p>
        </div>
        <span
          className="font-head text-lg text-orange sm:text-xl"
          aria-hidden
        >
          →
        </span>
        <div>
          <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
            After
          </p>
          <p className="font-head text-xl font-bold tabular-nums text-card-foreground sm:text-2xl">
            {afterValue.toFixed(2)}
            {unit}
          </p>
        </div>
      </div>

      {context && (
        <p className="prose-body mt-4 text-xs sm:text-sm">{context}</p>
      )}
    </div>
  );
}
