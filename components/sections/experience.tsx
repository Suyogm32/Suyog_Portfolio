import { experience, experienceContent } from "@/data/experience";
import { ImpactStat } from "@/components/ui/impact-stat";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function Experience() {
  return (
    <SectionWrapper id="experience" variant="muted" cursorZone="experience">
      <SectionHeading
        label={experienceContent.label}
        title={experienceContent.title}
        description={experienceContent.description}
        badgeVariant="orange"
      />

      <div className="flex flex-col gap-5 sm:gap-8">
        {experience.map((job, i) => (
          <ScrollReveal key={`${job.company}-${job.period}`} delay={i * 80}>
            <Card
              className="w-full p-5 sm:p-7 lg:p-9"
              data-cursor-hover
              data-cursor-type="card"
              data-cursor-magnetic
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Text as="h3" className="text-card-foreground">
                    {job.company}
                  </Text>
                  <p className="role-title mt-2 text-base text-primary sm:text-lg">
                    {job.role}
                  </p>
                </div>
                <Badge variant="orange" className="w-fit shrink-0">
                  {job.period}
                </Badge>
              </div>
              <ul className="mt-6 space-y-3">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="prose-body flex items-start gap-3 text-sm sm:text-base"
                  >
                    <span className="mt-2.5 h-2 w-2 shrink-0 border border-black bg-orange" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {job.impact && (
                <ImpactStat
                  className="mt-6"
                  metric={job.impact.metric}
                  context={job.impact.context}
                  before={job.impact.before}
                  after={job.impact.after}
                  unit={job.impact.unit}
                  percent={job.impact.percent}
                />
              )}
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
