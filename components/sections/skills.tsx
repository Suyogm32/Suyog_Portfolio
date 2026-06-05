import { skills, skillsContent } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/retroui/Card";

export function Skills() {
  return (
    <SectionWrapper id="skills" variant="muted">
      <SectionHeading
        label={skillsContent.label}
        title={skillsContent.title}
        description={skillsContent.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.name} className="w-full p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-head font-medium text-card-foreground">
                {skill.name}
              </span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-3 overflow-hidden border-2 border-black bg-secondary">
              <div
                className="h-full bg-primary"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
