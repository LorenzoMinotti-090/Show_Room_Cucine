"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

type ImageLightboxGalleryProps = {
  images: GalleryImage[];
  columns?: string;
  aspectClassName?: string;
  roundedClassName?: string;
  viewerTitle?: string;
};

export function ImageLightboxGallery({
  images,
  columns = "sm:grid-cols-2 lg:grid-cols-4",
  aspectClassName = "aspect-[4/5]",
  roundedClassName = "rounded-[1.6rem]",
  viewerTitle = "Vista editoriale",
}: ImageLightboxGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const safeSelectedIndex = images.length === 0 ? null : Math.min(selectedIndex, images.length - 1);
  const viewerRef = useRef<HTMLElement | null>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isFirstSelectionEffect = useRef(true);

  useEffect(() => {
    thumbnailRefs.current = thumbnailRefs.current.slice(0, images.length);
  }, [images.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (safeSelectedIndex === null) {
        return;
      }

      if (event.key === "Escape") {
        setSelectedIndex(0);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => (current + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [images.length, safeSelectedIndex]);

  useEffect(() => {
    if (safeSelectedIndex === null) {
      return;
    }

    const selectedThumbnail = thumbnailRefs.current[safeSelectedIndex];

    if (isFirstSelectionEffect.current) {
      isFirstSelectionEffect.current = false;
      selectedThumbnail?.scrollIntoView({ block: "nearest", inline: "center" });
      return;
    }

    viewerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    selectedThumbnail?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [safeSelectedIndex]);

  const selectedImage = safeSelectedIndex === null ? null : images[safeSelectedIndex];

  return (
    <>
      {selectedImage ? (
        <section ref={viewerRef} className="mb-5 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white/80 shadow-[0_24px_80px_rgba(45,29,18,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[320px] bg-[#e9ded0] sm:min-h-[440px] lg:min-h-[620px]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-[var(--border)] p-6 sm:p-8 lg:border-l lg:border-t-0">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500 sm:text-xs">
                  {viewerTitle}
                </p>
                <p className="mt-2 display-font text-3xl text-stone-950 sm:text-4xl">
                  {(safeSelectedIndex ?? 0) + 1} / {images.length}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700 sm:text-base sm:leading-8">
                  {selectedImage.alt}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex((current) => (current - 1 + images.length) % images.length)
                    }
                    className="rounded-full border border-[var(--steel)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--steel)] transition-colors duration-300 hover:bg-[var(--steel)] hover:text-stone-50 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    Prec.
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex((current) => (current + 1) % images.length)
                    }
                    className="rounded-full border border-[var(--steel)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--steel)] transition-colors duration-300 hover:bg-[var(--steel)] hover:text-stone-50 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    Succ.
                  </button>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 sm:text-xs">
                    Seleziona direttamente un&apos;altra immagine qui sotto.
                  </p>
                  <a
                    href={selectedImage.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors duration-300 hover:text-[var(--accent-dark)] sm:text-sm"
                  >
                    Apri immagine originale
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <div className="overflow-x-auto pb-2 [scrollbar-width:thin]">
        <div className={`flex min-w-max gap-3 ${columns ? "" : ""}`}>
        {images.map((image, index) => {
          return (
            <button
              key={image.src}
              type="button"
              ref={(element) => {
                thumbnailRefs.current[index] = element;
              }}
              onClick={() => setSelectedIndex(index)}
              className={[
                "group relative w-28 shrink-0 overflow-hidden border border-[var(--border)] bg-white/75 text-left transition-transform duration-300 hover:-translate-y-1 sm:w-32 lg:w-36",
                roundedClassName,
                safeSelectedIndex === index ? "ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--background)]" : "opacity-85 hover:opacity-100",
              ].join(" ")}
            >
              <div className={`relative ${aspectClassName}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,10,0.02),rgba(18,14,10,0.28))]" />
                {image.label ? (
                  <div className="absolute bottom-0 left-0 p-2.5 sm:p-3">
                    <p className="line-clamp-2 text-[10px] uppercase tracking-[0.24em] text-white/90 sm:text-[11px]">
                      {image.label}
                    </p>
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}
        </div>
      </div>
    </>
  );
}
