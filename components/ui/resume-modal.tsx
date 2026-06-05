"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { resumeProfile } from "@/data/resume-profile";
import { Badge } from "@/components/retroui/Badge";
import { Button, type IButtonProps } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { cn } from "@/lib/utils";

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

function ResumeProfileContent() {
  return (
    <div className="space-y-8">
      <header className="space-y-3 border-b-2 border-black pb-6">
        <Text as="h2" className="text-card-foreground">
          {siteConfig.name}
        </Text>
        <p className="font-head text-lg text-primary">{siteConfig.role}</p>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <p>📍 {resumeProfile.location}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="max-w-full break-all transition-colors hover:text-primary"
          >
            📧 {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="w-fit transition-colors hover:text-primary"
          >
            📱 {resumeProfile.phoneDisplay}
          </a>
        </div>
      </header>

      <section>
        <Text as="h3" className="mb-3 text-card-foreground">
          Professional Summary
        </Text>
        <div className="space-y-3 text-sm leading-7 text-muted-foreground">
          {resumeProfile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <Text as="h3" className="mb-4 text-card-foreground">
          Skills
        </Text>
        <div className="space-y-3">
          {resumeProfile.skillGroups.map((group) => (
            <div
              key={group.title}
              className="border-2 border-black bg-background p-4 shadow-xs"
            >
              <p className="font-head text-sm text-primary">{group.title}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {group.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Text as="h3" className="mb-4 text-card-foreground">
          Experience
        </Text>
        <div className="space-y-4">
          {resumeProfile.experience.map((job) => (
            <div
              key={job.title}
              className="border-2 border-black bg-card p-4 shadow-xs"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <Text as="h4" className="text-base text-card-foreground">
                  {job.title}
                </Text>
                <Badge variant="outline" size="sm" className="w-fit shrink-0">
                  {job.period}
                </Badge>
              </div>
              <ul className="mt-3 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 border border-black bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Text as="h3" className="mb-4 text-card-foreground">
          Featured Projects
        </Text>
        <div className="grid gap-3 md:grid-cols-2">
          {resumeProfile.featuredProjects.map((project) => (
            <div
              key={project.title}
              className="border-2 border-black bg-secondary/30 p-4 shadow-xs"
            >
              <p className="font-head text-sm text-card-foreground">
                {project.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Text as="h3" className="mb-4 text-card-foreground">
          Education
        </Text>
        <div className="space-y-3">
          {resumeProfile.education.map((item) => (
            <div
              key={item.degree}
              className="border-l-4 border-primary pl-4"
            >
              <p className="font-head text-sm text-card-foreground">
                {item.degree}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Text as="h3" className="mb-4 text-card-foreground">
          Highlights
        </Text>
        <div className="flex flex-wrap gap-2">
          {resumeProfile.highlights.map((item) => (
            <Badge key={item} variant="surface" size="sm">
              {item}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const titleId = useId();
  const lenis = useLenis();
  const [mounted, setMounted] = useState(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    lenis?.stop();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown, lenis]);

  if (!open || !mounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6"
      data-lenis-prevent
    >
      <button
        type="button"
        aria-label="Close resume"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col border-2 border-black bg-card shadow-2xl sm:max-h-[90vh]"
        onWheel={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b-2 border-black bg-primary px-4 py-3 sm:px-6">
          <p
            id={titleId}
            className="font-head text-sm text-primary-foreground sm:text-base"
          >
            Professional Profile
          </p>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={onClose}
            aria-label="Close"
            className="min-h-11 min-w-11 bg-card"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div
          className="hide-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-8"
          data-lenis-prevent
        >
          <ResumeProfileContent />
        </div>
      </div>
    </div>,
    document.body,
  );
}

type ResumeModalTriggerProps = {
  children?: React.ReactNode;
  className?: string;
} & Pick<IButtonProps, "size" | "variant">;

export function ResumeModalTrigger({
  children = "View Resume",
  size = "lg",
  variant = "secondary",
  className,
}: ResumeModalTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        size={size}
        variant={variant}
        className={cn(className)}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
