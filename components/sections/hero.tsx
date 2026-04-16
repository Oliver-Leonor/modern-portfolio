import { hero, personal } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between pt-16 lg:pt-28 pb-10"
      aria-label="Introduction"
    >
      {/* Top meta line */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-accent" />
          {personal.location}
        </span>
        <span className="hidden sm:inline">·</span>
        <span>14+ yrs in IT / 6+ yrs shipping</span>
      </div>

      {/* Main hero content */}
      <div className="mt-16 lg:mt-0 flex-1 flex flex-col justify-center">
        <p
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-6 animate-fade-up"
          style={{ animationDelay: "50ms" }}
        >
          Oliver Leonor
        </p>

        <h1
          className="font-sans font-semibold text-display-xl text-balance animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          {hero.role[0]}
          <br />
          <span className="text-muted-foreground">
            <span className="text-accent">&</span> {hero.role[1]}
          </span>
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80 text-pretty leading-relaxed animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          {hero.pitch}
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href={`mailto:${personal.email}?subject=Let's%20talk%20-%20potential%20role`}
            className={buttonVariants({ size: "lg" })}
          >
            <Mail className="h-4 w-4" aria-hidden />
            Let&apos;s talk
          </a>
          <a
            href="#work"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            See my work
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
        </div>

        {/* Status row */}
        <div
          className="mt-10 flex items-center gap-3 font-mono text-xs text-muted-foreground animate-fade-up"
          style={{ animationDelay: "420ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {hero.statusLine}
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="hidden lg:flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <span className="inline-block h-px w-10 bg-border" />
        Scroll
      </div>
    </section>
  );
}
