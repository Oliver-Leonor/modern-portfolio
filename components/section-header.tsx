import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, lead, className }: Props) {
  return (
    <header className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-accent">
        <span className="inline-block h-px w-8 bg-accent" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-display-lg font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          {lead}
        </p>
      )}
    </header>
  );
}
