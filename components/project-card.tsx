"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const [loaded, setLoaded] = useState(false);
  const isFeatured = !!project.featured;

  return (
    <article
      className={cn(
        "group relative grid gap-8 overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-muted-foreground/30",
        // Featured: side-by-side on desktop; others also side-by-side
        "lg:grid-cols-5",
      )}
    >
      {/* Preview */}
      <div
        className={cn(
          "relative lg:col-span-3 aspect-[16/10] lg:aspect-auto lg:min-h-[340px] overflow-hidden bg-muted",
          isFeatured && "lg:min-h-[440px]",
        )}
      >
        {/* Index label */}
        <div className="absolute left-4 top-4 z-20 font-mono text-[11px] uppercase tracking-widest text-muted-foreground mix-blend-difference">
          <span className="text-foreground/90">
            {String(index + 1).padStart(2, "0")}
          </span>
          {isFeatured && (
            <span className="ml-2 text-accent">/ Featured</span>
          )}
        </div>

        {/* Loading skeleton */}
        <div
          className={cn(
            "absolute inset-0 z-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest text-muted-foreground transition-opacity",
            loaded ? "opacity-0" : "opacity-100",
          )}
          aria-hidden
        >
          <div className="flex flex-col items-center gap-3">
            <div className="h-px w-16 bg-border">
              <div className="h-px w-8 bg-accent animate-pulse" />
            </div>
            Loading preview
          </div>
        </div>

        {/* Live iframe preview — scaled down so the site fits nicely in the card */}
        <div
          className={cn(
            "absolute inset-0 z-10 origin-top-left scale-[0.55] md:scale-[0.6]",
            "pointer-events-none", // overlay handles click
          )}
          style={{ width: "181.8%", height: "181.8%" }}
        >
          <iframe
            src={project.liveUrl}
            title={`${project.title} - live preview`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={cn(
              "h-full w-full border-0 bg-background transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0",
            )}
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>

        {/* Hover overlay — opens the live site */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-30 flex items-end justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus:opacity-100 focus:outline-none bg-gradient-to-tr from-background/80 via-background/30 to-transparent"
          aria-label={`Open ${project.title} live site`}
        >
          <span className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-lg">
            Open live
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </div>

      {/* Metadata */}
      <div className="lg:col-span-2 flex flex-col justify-between p-7 lg:p-8">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {project.tagline}
          </div>

          <h3 className="mt-2 text-2xl lg:text-3xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-foreground/75 text-pretty">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5 font-mono text-xs uppercase tracking-widest">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground hover:text-accent transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}
