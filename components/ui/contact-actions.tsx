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
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {methods.map((method) => {
          const Icon = iconMap[method.label as keyof typeof iconMap];

          return (
            <div
              key={method.label}
              data-cursor-hover
              data-cursor-type="contact"
              data-cursor-magnetic
              className="group flex flex-col items-center border-2 border-black bg-background p-5 text-center shadow-sm transition-all duration-300 active:scale-[0.98] sm:p-6 sm:hover:-translate-y-1.5 sm:hover:border-yellow sm:hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-black bg-yellow text-foreground shadow-xs transition-transform duration-300 sm:group-hover:scale-110">
                {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
              </div>
              <p className="font-head text-sm font-semibold text-card-foreground">
                {method.label}
              </p>
              <p className="mt-1.5 max-w-full break-all text-sm leading-5 text-muted-foreground">
                {method.description}
              </p>
              <Button
                size="md"
                variant="outline"
                className="mt-5 w-full min-h-11"
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
