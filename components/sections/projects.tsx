import { projects, projectsContent } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Projects() {
  return (
    <SectionWrapper id="projects" cursorZone="projects">
      <SectionHeading
        label={projectsContent.label}
        title={projectsContent.title}
        description={projectsContent.description}
        badgeVariant="purple"
      />

      <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 100}>
            <ProjectCard project={project} index={i} />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
