import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-20 lg:py-28">
      <SectionHeader
        eyebrow="01 / Selected work"
        title="What I've shipped."
        lead="Three projects that best represent the dual track - AI-native full-stack, end to end. Previews are live; hover a card to open the site."
      />

      <div className="mt-14 space-y-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
