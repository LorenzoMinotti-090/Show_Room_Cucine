import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: ReactNode;
  currentPath?: string;
};

export function PageShell({ children, currentPath = "/" }: PageShellProps) {
  return (
    <main className="industrial-grid flex-1 px-2 py-2 text-stone-950 sm:px-4 sm:py-4 lg:px-8">
      <div className="soft-panel mx-auto flex min-h-[calc(100vh-1rem)] w-full max-w-7xl flex-col overflow-hidden rounded-[1.5rem] sm:min-h-[calc(100vh-2rem)] sm:rounded-[2rem]">
        <SiteHeader currentPath={currentPath} />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
    </main>
  );
}
