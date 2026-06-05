"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function OnekoProvider() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setEnabled(isFinePointer && !prefersReduced);
  }, []);

  if (!enabled) return null;

  return <Script src="/oneko.js" strategy="lazyOnload" />;
}
