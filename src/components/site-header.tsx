import Link from "next/link";
import { brandName, navItems } from "@/lib/site-data";

type SiteHeaderProps = {
  currentPath?: string;
};

export function SiteHeader({ currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] px-6 py-5 sm:px-8 lg:px-10">
      <Link href="/" className="block">
        <p className="text-xs uppercase tracking-[0.4em] text-stone-500">{brandName}</p>
        <p className="display-font text-2xl text-stone-900">Showroom</p>
      </Link>

      <nav className="flex flex-wrap items-center gap-4 text-sm text-stone-700 sm:gap-6">
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
    </header>
  );
}
