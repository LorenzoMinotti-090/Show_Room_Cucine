import type { Metadata } from "next";
import { ImageLightboxGallery } from "@/components/image-lightbox-gallery";
import { PageShell } from "@/components/page-shell";
import { editorialGallery, galleryProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery | Officina Cucine",
  description: "Una selezione di ambienti, composizioni e dettagli per raccontare lo stile progettuale di Officina Cucine.",
};

export default function GalleryPage() {
  return (
    <PageShell currentPath="/gallery">
      <section className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Gallery</p>
          <h1 className="display-font mt-3 text-5xl text-stone-950 sm:text-6xl">
            Ambienti pensati per mostrare proporzioni, materiali e atmosfera.
          </h1>
        </div>

        <ImageLightboxGallery
          images={galleryProjects.map((project, index) => ({
            src: project.image,
            alt: project.alt,
            label: `Progetto 0${index + 1} | ${project.title}`,
          }))}
          columns="sm:grid-cols-2 lg:grid-cols-3"
          aspectClassName="aspect-[4/3]"
          roundedClassName="rounded-[1.85rem]"
        />
      </section>

      <section className="border-y border-[var(--border)] bg-black/5 px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Serie editoriale</p>
          <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
            Una raccolta di immagini per approfondire stile, dettagli e taglio compositivo.
          </h2>
        </div>

        <ImageLightboxGallery
          images={editorialGallery.map((image, index) => ({
            ...image,
            label: `Editoriale ${index + 1}`,
          }))}
          columns="sm:grid-cols-2 lg:grid-cols-3"
          aspectClassName="aspect-[4/3]"
          roundedClassName="rounded-[1.7rem]"
        />
      </section>
    </PageShell>
  );
}
