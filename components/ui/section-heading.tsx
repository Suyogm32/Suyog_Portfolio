import { Badge } from "@/components/retroui/Badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  badgeVariant?: "surface" | "orange" | "cyan" | "purple" | "yellow";
};

export function SectionHeading({
  label,
  title,
  description,
  badgeVariant = "surface",
}: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center sm:mb-16">
      <Badge variant={badgeVariant}>{label}</Badge>
      <h2
        className={cn(
          "section-chapter-title text-balance mt-5 px-2 text-2xl text-foreground sm:mt-6 sm:px-0 sm:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="prose-body mx-auto mt-4 max-w-2xl px-2 text-sm sm:mt-6 sm:px-0 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
