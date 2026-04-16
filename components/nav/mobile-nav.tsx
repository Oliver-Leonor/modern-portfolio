"use client";

import Link from "next/link";
import { personal } from "@/lib/data";

export function MobileNav() {
  return (
    <header className="lg:hidden sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex flex-col" aria-label="Home">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {personal.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Full-stack · AI
          </span>
        </Link>
        <a
          href="#contact"
          className="font-mono text-[11px] uppercase tracking-widest text-accent hover:text-accent/80"
        >
          Contact →
        </a>
      </div>
    </header>
  );
}
