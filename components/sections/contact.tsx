import { personal } from "@/lib/data";
import { SectionHeader } from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <SectionHeader
        eyebrow="04 / Contact"
        title="Let's talk."
        lead="Looking for a senior dev who ships AI-native work fast and straight? Email is the fastest path. I reply within 4 hours during PH / AU timezone."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* Contact lines */}
        <div className="space-y-6">
          {/* Email — the main event */}
          <div className="group">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-3 mb-3">
              <Mail className="h-3.5 w-3.5" />
              Email
              <CopyEmailButton value={personal.email} />
            </div>
            <a
              href={`mailto:${personal.email}?subject=Let's%20talk%20-%20potential%20role`}
              className="inline-block text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground link-underline"
            >
              {personal.email}
            </a>
          </div>

          {/* GitHub */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-3 mb-2">
              <Github className="h-3.5 w-3.5" />
              GitHub
            </div>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg md:text-xl text-foreground/90 hover:text-accent transition-colors"
            >
              github.com/{personal.githubHandle}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-3 mb-2">
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg md:text-xl text-foreground/90 hover:text-accent transition-colors"
            >
              in/oliver-leonor
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* CTA card */}
        <aside className="flex flex-col justify-between gap-8 rounded-lg border border-border bg-surface p-7 lg:p-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-accent flex items-center gap-2 mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Accepting new work
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              Senior contract or full-time.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              Open to PH / AU timezone roles. Also happy to consider asynchronous US work where my overnight overlap lines up with your team.
            </p>
          </div>

          <a
            href={`mailto:${personal.email}?subject=Let's%20talk%20-%20potential%20role`}
            className={buttonVariants({ size: "lg", className: "w-full" })}
          >
            <Mail className="h-4 w-4" aria-hidden />
            Start the conversation
          </a>
        </aside>
      </div>
    </section>
  );
}
