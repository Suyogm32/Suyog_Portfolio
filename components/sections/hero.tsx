import type { CSSProperties } from "react";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroContent, heroTechStack } from "@/data/hero";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { HeroName } from "@/components/ui/hero-name";
import { ResumeModalTrigger } from "@/components/ui/resume-modal";
import { TechCard } from "@/components/ui/tech-card";

export function Hero() {
  return (
    <section
      id="home"
      data-cursor-zone="hero"
      className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20"
    >
      <div
        className="hero-watermark pointer-events-none absolute top-[12%] right-[-5%] hidden text-[12rem] lg:block"
        aria-hidden
      >
        2+
      </div>
      <div
        className="hero-watermark pointer-events-none absolute bottom-[18%] left-[-8%] hidden text-[6rem] lg:block"
        aria-hidden
      >
        DEVELOPER
      </div>
      <div
        className="hero-watermark pointer-events-none absolute top-[35%] left-[40%] hidden text-[5rem] lg:block"
        aria-hidden
      >
        C++
      </div>

      <div
        className="animate-float-shape pointer-events-none absolute top-[18%] right-[12%] hidden h-20 w-20 border-2 border-black bg-primary shadow-lg lg:block"
        style={{ "--rotate": "4deg" } as CSSProperties}
        aria-hidden
      />
      <div
        className="animate-float-shape pointer-events-none absolute bottom-[28%] left-[8%] hidden h-14 w-14 border-2 border-black bg-yellow shadow-md lg:block"
        style={
          { "--rotate": "-3deg", animationDelay: "2s" } as CSSProperties
        }
        aria-hidden
      />
      <div
        className="animate-float-shape pointer-events-none absolute top-[45%] right-[6%] hidden h-3 w-3 bg-cyan lg:block"
        style={{ animationDelay: "1s" } as CSSProperties}
        aria-hidden
      />

      <Card className="relative w-full max-w-5xl p-5 sm:p-8 lg:p-14">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="flex w-full flex-col items-center gap-6 text-center sm:items-start sm:gap-8 sm:text-left">
            <div className="animate-hero-reveal stagger-1 flex w-full flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3">
              <Badge variant="orange" className="text-xs sm:text-sm">
                <span className="sm:hidden">2+ Years Experience</span>
                <span className="hidden sm:inline">{heroContent.badge}</span>
              </Badge>
              <Badge variant="outline" className="gap-2 text-xs sm:text-sm">
                <span
                  className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-orange"
                  aria-hidden
                />
                {heroContent.availability}
              </Badge>
            </div>

            <div className="w-full space-y-4 sm:space-y-5">
              <p className="animate-hero-reveal stagger-2 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase sm:text-sm sm:tracking-[0.2em]">
                {heroContent.greeting}
              </p>
              <HeroName name={siteConfig.name} />
              <p className="animate-hero-reveal stagger-4 role-title text-lg text-foreground sm:text-2xl">
                {siteConfig.role}
              </p>
              <p className="animate-hero-reveal stagger-5 prose-body mx-auto w-full max-w-3xl text-left text-sm sm:mx-0 sm:text-lg">
                {heroContent.tagline}
              </p>
              <p className="animate-hero-reveal stagger-5 w-full max-w-3xl border-l-4 border-primary py-1 pl-4 text-left text-sm leading-relaxed text-foreground sm:text-lg">
                {heroContent.availabilityNote}
              </p>
            </div>

            <div className="animate-hero-reveal stagger-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="w-full sm:w-auto" data-cursor-magnetic data-cursor-type="cta">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  render={<a href={heroContent.primaryCta.href} />}
                >
                  {heroContent.primaryCta.label}
                </Button>
              </div>
              <Button
                size="lg"
                className="w-full sm:w-auto"
                variant="outline"
                render={<a href={heroContent.secondaryCta.href} />}
              >
                {heroContent.secondaryCta.label}
              </Button>
              <ResumeModalTrigger
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {heroContent.resumeCta.label}
              </ResumeModalTrigger>
              <Button
                size="lg"
                className="w-full sm:w-auto"
                variant="outline"
                render={
                  <a href={siteConfig.resumePath} download />
                }
              >
                Download Resume
              </Button>
            </div>

            <div className="animate-hero-reveal stagger-7 flex w-full max-w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                data-cursor-hover
                className="link-hover group inline-flex max-w-full items-center gap-2.5 font-mono text-xs text-muted-foreground transition-colors sm:text-sm"
              >
                <span
                  className="retro-contact-icon retro-contact-icon--mail"
                  aria-hidden
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="break-all group-hover:text-primary">
                  {siteConfig.email}
                </span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                data-cursor-hover
                className="link-hover group inline-flex items-center gap-2.5 font-mono text-xs text-muted-foreground transition-colors sm:text-sm"
              >
                <span
                  className="retro-contact-icon retro-contact-icon--phone"
                  aria-hidden
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="group-hover:text-primary">
                  {siteConfig.phoneDisplay}
                </span>
              </a>
            </div>
          </div>

          <div
            className="animate-hero-reveal stagger-7 border-t-2 border-black pt-8 sm:pt-10"
            data-cursor-zone="tech"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2 sm:mb-6 sm:gap-4">
              <h3 className="font-head text-base font-semibold text-foreground sm:text-lg">
                Tech Stack
              </h3>
              <Badge variant="cyan" size="sm">
                {heroTechStack.length} technologies
              </Badge>
            </div>
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {heroTechStack.map((tech, index) => (
                <li key={`${tech.name}-${tech.icon}-${index}`}>
                  <TechCard name={tech.name} icon={tech.icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
