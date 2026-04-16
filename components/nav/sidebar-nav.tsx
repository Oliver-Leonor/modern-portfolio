"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, personal } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost section that is visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 xl:w-72 flex-col justify-between px-10 py-12 z-10">
      <div>
        <Link
          href="/"
          className="block group"
          aria-label="Oliver Leonor - home"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Portfolio · 2026
          </span>
          <span className="mt-2 block text-lg font-semibold text-foreground tracking-tight">
            {personal.name}
          </span>
          <span className="mt-0.5 block text-xs text-muted-foreground">
            Full-stack · AI
          </span>
        </Link>

        <nav className="mt-16">
          <ul className="space-y-1">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "group flex items-center gap-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "h-px transition-all",
                        isActive
                          ? "w-10 bg-accent"
                          : "w-5 bg-border group-hover:w-8 group-hover:bg-muted-foreground",
                      )}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Available for work
        </div>
      </div>
    </aside>
  );
}
