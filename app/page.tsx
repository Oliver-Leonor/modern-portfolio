import { SidebarNav } from "@/components/nav/sidebar-nav";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Philosophy } from "@/components/sections/philosophy";
import { Stack } from "@/components/sections/stack";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";
import { personal } from "@/lib/data";

export default function Home() {
  return (
    <>
      <SidebarNav />
      <MobileNav />

      <main className="lg:pl-64 xl:pl-72 relative z-[2]">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 xl:px-16">
          <Hero />
          <Projects />
          <Philosophy />
          <Stack />
          <Timeline />
          <Contact />

          <footer className="py-12 flex flex-wrap items-center justify-between gap-4 border-t border-border">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              &copy; {new Date().getFullYear()} {personal.name}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Built with Next.js, Tailwind, shadcn/ui · Deployed on Vercel
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
