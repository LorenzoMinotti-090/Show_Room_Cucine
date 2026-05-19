import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageLightboxGallery } from "@/components/image-lightbox-gallery";
import { PageShell } from "@/components/page-shell";
import { designSteps, materialLibrary, materialShots } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Progettazione | Officina Cucine",
  description: "Scopri come nasce un progetto cucina: rilievo, scelta materiali, composizione e assistenza fino alla consegna.",
};

export default function ProgettazionePage() {
  return (
    <PageShell currentPath="/progettazione">
      <section className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-14">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Progettazione</p>
          <h1 className="display-font text-5xl text-stone-950 sm:text-6xl">
            Un metodo chiaro, pensato per accompagnarti dal primo confronto alla consegna.
          </h1>
          <p className="max-w-lg text-base leading-8 text-stone-700">
            Ogni progetto parte dall&apos;ascolto delle esigenze, prosegue con la definizione di materiali e composizione e arriva a una proposta completa e realizzabile.
          </p>
        </div>

        <div className="grid gap-4">
          {designSteps.map((step, index) => (
            <Link key={step} href="/contatti" className="rounded-[1.6rem] border border-[var(--border)] bg-white/80 p-6 transition-transform duration-300 hover:-translate-y-1 hover:bg-white">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500">Step 0{index + 1}</p>
              <p className="mt-5 text-lg leading-8 text-stone-800">{step}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-black/5 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-5 lg:grid-cols-2">
          {materialShots.map((shot) => (
            <article key={shot.title} className="overflow-hidden rounded-[1.85rem] border border-[var(--border)] bg-white/80 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-[340px]">
                <Image src={shot.image} alt={shot.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <h2 className="display-font text-3xl text-stone-950">{shot.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{shot.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <ImageLightboxGallery
            images={materialShots.map((shot, index) => ({
              src: shot.image,
              alt: shot.alt,
              label: `Materiale ${index + 1}`,
            }))}
            columns="lg:grid-cols-2"
            aspectClassName="aspect-[16/10]"
            roundedClassName="rounded-[1.85rem]"
            viewerTitle="Dettaglio materiale"
          />
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Materiali e finiture</p>
          <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
            Top, banconi, luci, cappe e rubinetti completano il carattere del progetto.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
            Anche i dettagli fanno parte della progettazione: finiture, luce e accessori incidono sul risultato finale quanto la composizione generale.
          </p>
        </div>

        <ImageLightboxGallery
          images={materialLibrary.map((image, index) => ({
            ...image,
            label: `Dettaglio ${index + 1}`,
          }))}
          columns="sm:grid-cols-2 lg:grid-cols-5"
          aspectClassName="aspect-square"
          roundedClassName="rounded-[1.4rem]"
          viewerTitle="Finitura selezionata"
        />
      </section>
    </PageShell>
  );
}
