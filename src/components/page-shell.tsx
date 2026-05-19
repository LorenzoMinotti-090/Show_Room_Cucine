import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: ReactNode;
  currentPath?: string;
};

export function PageShell({ children, currentPath = "/" }: PageShellProps) {
  return (
    <main className="industrial-grid flex-1 px-4 py-4 text-stone-950 sm:px-6 lg:px-8">
      <div className="soft-panel mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem]">
        <SiteHeader currentPath={currentPath} />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
    </main>
  );
}
