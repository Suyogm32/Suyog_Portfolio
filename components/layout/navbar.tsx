"use client";

import { useLenis } from "lenis/react";
import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/navigation";
import { MenuIcon } from "@/components/ui/icons/menu-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/retroui/Button";
import { cn } from "@/lib/utils";

const panelClassName =
  "border-2 border-black bg-card shadow-md";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

/** Navbar height + breathing room for active section detection */
const NAV_OFFSET = 140;

function getActiveSection(): string {
  let current = sectionIds[0];

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;

    const top = el.getBoundingClientRect().top;
    if (top <= NAV_OFFSET) {
      current = id;
    }
  }

  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;
  if (scrollBottom >= docHeight - 80) {
    return sectionIds[sectionIds.length - 1] ?? current;
  }

  return current;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const updateActive = useCallback(() => {
    setActive(getActiveSection());
  }, []);

  useLenis(updateActive);

  useEffect(() => {
    updateActive();
    window.addEventListener("resize", updateActive);
    return () => window.removeEventListener("resize", updateActive);
  }, [updateActive]);

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pt-[max(1rem,env(safe-area-inset-top))]">
      <nav
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-6 sm:py-3.5",
          panelClassName,
        )}
      >
        <a
          href="#home"
          data-cursor-hover
          data-cursor-type="link"
          className="font-head text-base font-bold tracking-tight text-foreground transition-colors hover:text-primary sm:text-lg"
          onClick={closeMenu}
        >
          {siteConfig.shortName}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                data-cursor-type="link"
                data-active={active === id ? "true" : "false"}
                className="nav-link min-h-11 px-3 py-2 text-sm text-muted-foreground hover:text-purple"
              >
                {link.label}
              </a>
            );
          })}
          <div className="ml-2 border-l-2 border-black/10 pl-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="min-h-11 min-w-11"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <MenuIcon open={open} className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="pointer-events-auto fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={closeMenu}
          />
          <div
            className={cn(
              "pointer-events-auto relative z-50 mx-auto mt-2 max-w-6xl px-3 py-3 md:hidden",
              panelClassName,
            )}
          >
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    data-cursor-hover
                    data-cursor-type="link"
                    data-active={active === id ? "true" : "false"}
                    className="nav-link min-h-11 px-3 py-3 text-base text-muted-foreground"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
