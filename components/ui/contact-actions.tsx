"use client";

import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/retroui/Button";
import { ResumeModalTrigger } from "@/components/ui/resume-modal";

type ContactMethod = {
  label: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
};

const iconMap = {
  "Email Me": Mail,
  "Call Me": Phone,
  LinkedIn: FaLinkedin,
} as const;

type ContactActionsProps = {
  methods: readonly ContactMethod[];
};

export function ContactActions({ methods }: ContactActionsProps) {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div className="space-y-3">
        {methods.map((method) => {
          const Icon = iconMap[method.label as keyof typeof iconMap];

          return (
            <div
              key={method.label}
              data-cursor-hover
              data-cursor-type="contact"
              data-cursor-magnetic
              className="group flex flex-col gap-3 border-2 border-black bg-background p-4 shadow-sm transition-all duration-300 active:scale-[0.98] sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:hover:-translate-y-1 sm:hover:border-yellow sm:hover:shadow-lg"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black bg-yellow text-foreground shadow-xs transition-transform duration-300 sm:group-hover:scale-110">
                {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-head text-sm font-semibold text-card-foreground">
                  {method.label}
                </p>
                <p className="mt-0.5 max-w-full truncate text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full shrink-0 sm:w-auto"
                render={
                  <a
                    href={method.href}
                    {...(method.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  />
                }
              >
                {method.cta}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-4 border-t-2 border-black pt-6 sm:pt-8">
        <p className="text-sm text-muted-foreground">Want the full profile?</p>
        <ResumeModalTrigger size="md" variant="secondary" className="w-full min-h-11 sm:w-auto">
          View Resume
        </ResumeModalTrigger>
      </div>
    </div>
  );
}
