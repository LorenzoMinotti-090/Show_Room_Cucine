import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageLightboxGallery } from "@/components/image-lightbox-gallery";
import { PageShell } from "@/components/page-shell";
import { collectionLibrary, kitchenCollections, materialShots } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Catalogo | Officina Cucine",
  description: "Collezioni di cucine su misura a Cesena, progettate per ambienti contemporanei, accoglienti o di fascia alta.",
};

export default function CatalogoPage() {
  return (
    <PageShell currentPath="/catalogo">
      <section className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-14">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Catalogo</p>
          <h1 className="display-font text-5xl text-stone-950 sm:text-6xl">
            Collezioni pensate per case vere, esigenze concrete e progetti su misura.
          </h1>
          <p className="max-w-lg text-base leading-8 text-stone-700">
            Ogni collezione definisce uno stile preciso, ma resta aperta a personalizzazioni su proporzioni, finiture, top ed elettrodomestici.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {kitchenCollections.map((collection) => (
            <Link
              key={collection.title}
              href={`/catalogo/${collection.slug}`}
              className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/75"
            >
              <div className="relative h-72">
                <Image src={collection.image} alt={collection.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">{collection.label}</p>
                <h2 className="display-font mt-3 text-3xl text-stone-950">{collection.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone-600">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface-strong)] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Dettagli</p>
          <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
            Materiali che reggono il confronto da vicino.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {materialShots.map((shot) => (
            <Link key={shot.title} href="/progettazione" className="overflow-hidden rounded-[1.85rem] border border-[var(--border)] bg-white/80 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-[320px]">
                <Image src={shot.image} alt={shot.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <h3 className="display-font text-3xl text-stone-950">{shot.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{shot.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Libreria visiva</p>
          <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
            Varianti e ambientazioni per leggere meglio ogni collezione.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
            Questa selezione aiuta a confrontare atmosfere, materiali e composizioni, senza perdere coerenza con lo stile generale dello showroom.
          </p>
        </div>

        <ImageLightboxGallery
          images={collectionLibrary.map((image, index) => ({
            ...image,
            label: `Variante ${index + 1}`,
          }))}
          columns="sm:grid-cols-2 lg:grid-cols-4"
          aspectClassName="aspect-[4/5]"
          roundedClassName="rounded-[1.5rem]"
        />
      </section>
    </PageShell>
  );
}
