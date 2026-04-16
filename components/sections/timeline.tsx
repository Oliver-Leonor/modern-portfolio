import { timeline } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";

export function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-24 py-20 lg:py-28">
      <SectionHeader
        eyebrow="03 / Path"
        title="How I got here."
        lead="Fourteen years across enterprise systems, real-time backend at scale, AI recruiting, and now AI-native full-stack. Each role taught me something the next one needed."
      />

      <ol className="mt-14 relative">
        {/* Vertical spine */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
        />

        {timeline.map((entry, i) => (
          <li key={`${entry.year}-${entry.org}`} className="relative pl-10 pb-12 last:pb-0">
            {/* Node */}
            <span
              aria-hidden
              className="absolute left-0 top-[10px] flex h-[15px] w-[15px] items-center justify-center"
            >
              <span className="absolute inline-flex h-full w-full rounded-full bg-background" />
              <span
                className={`relative inline-flex rounded-full ${
                  i === 0 ? "h-3 w-3 bg-accent shadow-[0_0_0_3px_hsl(var(--accent)/0.15)]" : "h-2 w-2 bg-border"
                }`}
              />
            </span>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {entry.year}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {entry.duration}
              </span>
            </div>

            <h3 className="mt-2 text-lg md:text-xl font-semibold text-foreground tracking-tight">
              {entry.title}
            </h3>
            <div className="mt-1 text-sm text-muted-foreground font-mono">
              {entry.org}
            </div>

            <p className="mt-4 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/75 text-pretty">
              {entry.details}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {entry.tags.map((t) => (
                <Badge key={t} variant="outline">{t}</Badge>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
