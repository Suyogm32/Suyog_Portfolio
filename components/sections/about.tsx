import {
  aboutContent,
  aboutStory,
  aboutStrengths,
  education,
} from "@/data/about";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function About() {
  return (
    <SectionWrapper id="about" cursorZone="about">
      <SectionHeading
        label={aboutContent.label}
        title={aboutContent.title}
        description={aboutContent.description}
        badgeVariant="purple"
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-8 lg:gap-10">
        <ScrollReveal>
          <Card
            className="w-full p-5 sm:p-8 lg:p-10"
            data-cursor-hover
            data-cursor-type="card"
          >
            <Text as="h3" className="text-card-foreground">
              About Me
            </Text>
            {aboutStory.map((paragraph) => (
              <p key={paragraph} className="prose-body mt-5 text-sm sm:text-base">
                {paragraph}
              </p>
            ))}
          </Card>
        </ScrollReveal>

        <div className="flex flex-col gap-5 sm:gap-8 lg:gap-10">
          <ScrollReveal delay={100}>
            <Card
              className="w-full p-5 sm:p-8 lg:p-10"
              data-cursor-hover
              data-cursor-type="card"
            >
              <Text as="h3" className="text-card-foreground">
                Core Strengths
              </Text>
              <ul className="mt-5 space-y-4">
                {aboutStrengths.map((strength) => (
                  <li
                    key={strength}
                    className="prose-body flex items-start gap-3 text-sm sm:text-base"
                  >
                    <span className="mt-2.5 h-2 w-2 shrink-0 border border-black bg-purple" />
                    {strength}
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card
              className="w-full p-5 sm:p-8 lg:p-10"
              data-cursor-hover
              data-cursor-type="card"
            >
              <Text as="h3" className="text-card-foreground">
                Education
              </Text>
              <ul className="mt-5 space-y-5">
                {education.map((item) => (
                  <li
                    key={item.degree}
                    className="border-l-4 border-purple pl-5"
                  >
                    <p className="font-head font-semibold text-card-foreground">
                      {item.degree}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
