import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  variant?: "default" | "muted";
  cursorZone?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({
  id,
  variant = "default",
  cursorZone,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-cursor-zone={cursorZone ?? id}
      className={cn(
        "section-anchor relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:py-32",
        variant === "muted" && "bg-muted/50",
        className,
      )}
    >
      <ScrollReveal className="mx-auto max-w-6xl">{children}</ScrollReveal>
    </section>
  );
}
