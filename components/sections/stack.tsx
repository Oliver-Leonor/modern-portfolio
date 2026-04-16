import { stack } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";

const groups: Array<{ key: keyof typeof stack; label: string }> = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI" },
  { key: "ops", label: "Cloud / Ops" },
  { key: "automation", label: "Automation" },
  { key: "analytics", label: "Analytics" },
];

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 py-20 lg:py-28">
      <SectionHeader
        eyebrow="02 / Stack"
        title="Tools I reach for."
        lead="Grouped by where they fit in a typical app. Nothing on this list is aspirational - these are the tools I use in production."
      />

      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.key}>
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent mb-4 flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-accent" />
              {group.label}
            </h3>
            <ul className="space-y-2 font-mono text-sm text-foreground/85">
              {stack[group.key].map((item) => (
                <li
                  key={item}
                  className="leading-relaxed before:content-['-'] before:text-muted-foreground before:mr-2 before:inline-block"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
