import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { contactDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contatti | Officina Cucine",
  description: "Contatta Officina Cucine per fissare una visita in showroom a Cesena o richiedere un primo confronto sul tuo progetto.",
};

export default function ContattiPage() {
  return (
    <PageShell currentPath="/contatti">
      <section className="grid gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-14">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Contatti</p>
          <h1 className="display-font text-5xl text-stone-950 sm:text-6xl">
            Prenota una visita in showroom o una consulenza iniziale.
          </h1>
          <p className="max-w-lg text-base leading-8 text-stone-700">
            Un primo confronto serve a chiarire esigenze, stile, tempi e budget, cosi da impostare il progetto con una direzione precisa fin dall&apos;inizio.
          </p>
          <Link
            href="mailto:atelier@officinacucine.it"
            className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-50 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Scrivi ora
          </Link>
        </div>

        <div className="rounded-[2rem] bg-[var(--steel)] p-6 text-stone-50 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {contactDetails.map(([label, value]) => (
              <Link
                key={label}
                href={
                  label === "Telefono"
                    ? `tel:${value.replace(/\s+/g, "")}`
                    : label === "Email"
                      ? `mailto:${value}`
                      : label === "Showroom"
                        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`
                        : "/contatti"
                }
                target={label === "Showroom" ? "_blank" : undefined}
                rel={label === "Showroom" ? "noopener noreferrer" : undefined}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-stone-300">{label}</p>
                <p className="mt-3 text-base text-stone-100">{value}</p>
              </Link>
            ))}
          </div>

          <Link href="mailto:atelier@officinacucine.it" className="mt-6 block rounded-[1.5rem] border border-white/10 bg-black/15 p-5 transition-transform duration-300 hover:-translate-y-1 hover:bg-black/25">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-300">Primo passo</p>
            <p className="mt-3 text-lg leading-8 text-stone-100">
              Scrivici o chiamaci per fissare un incontro in showroom e valutare insieme il tuo progetto cucina.
            </p>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
