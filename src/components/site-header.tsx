"use client";

import Link from "next/link";
import { useState } from "react";
import { brandName, navItems } from "@/lib/site-data";

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)] px-4 py-4 sm:px-6 sm:py-5 lg:px-10">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="block">
          <p className="text-[11px] uppercase tracking-[0.32em] text-stone-500 sm:text-xs sm:tracking-[0.4em]">{brandName}</p>
          <p className="display-font text-2xl text-stone-900 sm:text-[2rem]">Showroom</p>
        </Link>

        <button
          type="button"
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/80 text-stone-900 transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent-dark)] lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span
              className={[
                "absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-all duration-300",
                isMenuOpen ? "top-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-all duration-300",
                isMenuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[14px] h-[1.5px] w-5 bg-current transition-all duration-300",
                isMenuOpen ? "top-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>

        <nav className="hidden items-center gap-6 text-sm text-stone-700 lg:flex">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative inline-flex items-center py-1 text-sm transition-all duration-300 hover:translate-x-1 hover:text-[var(--accent-dark)]",
                  isActive ? "text-[var(--accent-dark)]" : "text-stone-700",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div
        id="site-navigation"
        className={[
          "grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 lg:hidden",
          isMenuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <nav className="min-h-0 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white/85 p-2 shadow-[0_20px_50px_rgba(45,29,18,0.08)] backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={[
                  "flex min-h-12 items-center rounded-[1rem] px-4 py-3 text-sm transition-colors duration-300",
                  isActive
                    ? "bg-[var(--surface-strong)] text-[var(--accent-dark)]"
                    : "text-stone-700 hover:bg-[var(--surface-strong)] hover:text-[var(--accent-dark)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
