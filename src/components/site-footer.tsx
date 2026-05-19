import Link from "next/link";
import { brandName } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-6 text-sm text-stone-600 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {brandName} | Showroom cucine a Cesena e provincia
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/catalogo" className="hover:text-[var(--accent-dark)]">
            Catalogo
          </Link>
          <Link href="/gallery" className="hover:text-[var(--accent-dark)]">
            Gallery
          </Link>
          <Link href="/contatti" className="hover:text-[var(--accent-dark)]">
            Contatti
          </Link>
        </div>
      </div>
    </footer>
  );
}
