import { siteConfig } from "@/config/site";
import { Button } from "@/components/retroui/Button";

export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-black bg-background px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          © {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.
        </p>
        <Button
          variant="link"
          size="md"
          className="min-h-11"
          render={<a href="#home" />}
        >
          Back to top ↑
        </Button>
      </div>
    </footer>
  );
}
