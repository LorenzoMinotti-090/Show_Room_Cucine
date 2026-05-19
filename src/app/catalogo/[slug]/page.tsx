import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageLightboxGallery } from "@/components/image-lightbox-gallery";
import { PageShell } from "@/components/page-shell";
import { getCollectionBySlug, kitchenCollections, materialLibrary } from "@/lib/site-data";

type CollectionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return kitchenCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collezione | Officina Cucine",
    };
  }

  return {
    title: `${collection.title} | Officina Cucine`,
    description: collection.longDescription,
  };
}

export default async function CollectionDetailPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  return (
    <PageShell currentPath="/catalogo">
      <section className="grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-14">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
            {collection.label}
          </p>
          <h1 className="display-font text-5xl text-stone-950 sm:text-6xl">
            {collection.title}
          </h1>
          <p className="text-lg leading-8 text-stone-700">{collection.headline}</p>
          <p className="max-w-xl text-base leading-8 text-stone-600">
            {collection.longDescription}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contatti"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-stone-50 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Richiedi questa collezione
            </Link>
            <Link
              href="/catalogo"
              className="rounded-full border border-[var(--steel)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--steel)] transition-colors duration-300 hover:bg-[var(--steel)] hover:text-stone-50"
            >
              Torna al catalogo
            </Link>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/70">
          <Image
            src={collection.image}
            alt={collection.alt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface-strong)] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.8rem] border border-[var(--border)] bg-white/80 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Punti chiave</p>
            <div className="mt-5 space-y-4">
              {collection.features.map((feature) => (
                <div key={feature} className="rounded-[1.2rem] border border-[var(--border)] bg-white/70 p-4 text-sm leading-7 text-stone-700">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-[var(--border)] bg-white/80 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Materiali suggeriti</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {collection.materials.map((material) => (
                <div key={material} className="rounded-[1.2rem] border border-[var(--border)] bg-white/70 p-4 text-sm uppercase tracking-[0.2em] text-stone-700">
                  {material}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Galleria collezione</p>
          <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
            Immagini dedicate a {collection.title} per approfondire finiture, atmosfera e proporzioni.
          </h2>
        </div>

        <ImageLightboxGallery
          images={collection.gallery.map((image, index) => ({
            ...image,
            label: `Vista ${index + 1}`,
          }))}
          columns="sm:grid-cols-2 lg:grid-cols-3"
          aspectClassName="aspect-[4/3]"
          viewerTitle="Vista selezionata"
        />
      </section>

      <section className="border-t border-[var(--border)] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Dettagli progetto</p>
          <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
            Materiali e finiture che completano la collezione.
          </h2>
        </div>

        <ImageLightboxGallery
          images={materialLibrary.slice(0, 5).map((image, index) => ({
            ...image,
            label: `Dettaglio ${index + 1}`,
          }))}
          columns="sm:grid-cols-2 lg:grid-cols-5"
          aspectClassName="aspect-square"
          roundedClassName="rounded-[1.4rem]"
          viewerTitle="Dettaglio selezionato"
        />
      </section>
    </PageShell>
  );
}
