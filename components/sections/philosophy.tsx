import { philosophy } from "@/lib/data";

export function Philosophy() {
  return (
    <section
      aria-label="Work philosophy"
      className="py-20 lg:py-28 border-y border-border"
    >
      <div className="max-w-3xl">
        <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-border" />
          Note
        </div>

        <blockquote className="relative">
          {/* Decorative oversized amber quote mark */}
          <span
            aria-hidden
            className="absolute -left-1 -top-10 font-serif text-[7rem] leading-none text-accent/25 select-none"
          >
            &ldquo;
          </span>

          <p className="relative text-2xl md:text-3xl lg:text-[2.1rem] font-medium leading-[1.25] tracking-tight text-foreground text-balance">
            {philosophy.quote}
          </p>

          <footer className="mt-6 pl-5 border-l border-accent/50 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
            {philosophy.subtext}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
