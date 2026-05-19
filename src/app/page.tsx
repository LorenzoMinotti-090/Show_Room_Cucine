import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import {
  contactDetails,
  designSteps,
  galleryProjects,
  kitchenCollections,
  materialShots,
} from "@/lib/site-data";

export default function Home() {
  return (
    <PageShell currentPath="/">
        <section className="grid gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-14">
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-[var(--border)] bg-white/65 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-stone-600 sm:text-xs sm:tracking-[0.3em]">
                Cucine su misura
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                Cesena e provincia
              </div>
              <h1 className="display-font max-w-4xl text-4xl leading-none text-stone-950 sm:text-6xl lg:text-7xl">
                Cucine progettate per essere belle, funzionali e durare nel tempo.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
                Officina Cucine realizza progetti su misura per chi cerca una cucina ben disegnata, proporzionata allo spazio e curata nei materiali.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/catalogo"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-stone-50 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Esplora il catalogo
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border border-[var(--steel)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--steel)] transition-colors duration-300 hover:bg-[var(--steel)] hover:text-stone-50"
              >
                Guarda i progetti
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                  ["12+", "anni tra progettazione e montaggio", "/progettazione"],
                  ["48h", "per ricevere una prima proposta", "/contatti"],
                  ["100%", "progetti sviluppati su esigenze reali", "/catalogo"],
                ].map(([value, text, href]) => (
                  <Link key={text} href={href} className="rounded-[1.5rem] border border-[var(--border)] bg-white/70 p-4 transition-transform duration-300 hover:-translate-y-1 hover:bg-white sm:p-5">
                  <p className="display-font text-4xl text-stone-900">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
                  </Link>
              ))}
            </div>
          </div>

            <Link href="/gallery" className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] text-stone-50 shadow-2xl shadow-stone-800/15 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[420px] sm:rounded-[2rem]">
            <Image
              src="/images/showroom/hero-home.png"
              alt="Showroom cucina moderna industrial con grande isola centrale"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,9,0.15),rgba(16,12,9,0.62))]" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xs rounded-[1.2rem] border border-white/15 bg-black/25 p-3 backdrop-blur-md sm:rounded-[1.4rem] sm:p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-stone-300">
                    Mood board
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-100">
                    Acciaio fumé, rovere tostato, quarzo chiaro e luci architetturali definiscono uno stile deciso ma equilibrato.
                  </p>
                </div>
                <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-stone-100 backdrop-blur-md sm:text-xs sm:tracking-[0.3em]">
                  2026 Edition
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.35rem] border border-white/10 bg-black/25 p-4 backdrop-blur-md sm:rounded-[1.5rem] sm:p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-stone-300">
                    Focus progetto
                  </p>
                  <p className="mt-3 display-font text-2xl text-white sm:text-3xl">
                    Isola centrale, colonne pulite e dettagli tecnici integrati con discrezione.
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:rounded-[1.5rem] sm:p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-stone-300">
                    Materiali
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-100">
                    Top effetto pietra, superfici opache e luci calde per un ambiente accogliente e ben costruito.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section
          className="border-y border-[var(--border)] bg-black/5 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14"
        >
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                Catalogo cucine
              </p>
              <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
                Tre collezioni, un unico criterio: progettare la cucina intorno a chi la vive.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-600">
              Ogni proposta puo essere personalizzata in composizione, materiali, top, elettrodomestici e illuminazione, in base allo spazio e alle esigenze reali.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {kitchenCollections.map((collection) => (
              <Link
                key={collection.title}
                href={`/catalogo/${collection.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white/75 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                    {collection.label}
                  </p>
                  <h3 className="display-font mt-3 text-3xl text-stone-950">
                    {collection.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-14">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Gallery progetti
            </p>
            <h2 className="display-font text-4xl text-stone-950 sm:text-5xl">
              Ambienti studiati per raccontare subito stile, materiali e qualita del progetto.
            </h2>
            <p className="max-w-lg text-base leading-8 text-stone-700">
              La gallery raccoglie alcuni esempi di atmosfera, proporzioni e dettagli, per aiutarti a capire il linguaggio progettuale dello showroom.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryProjects.map((project, index) => (
              <Link
                key={project.title}
                href="/gallery"
                className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] sm:min-h-[320px]"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,10,0.08),rgba(18,14,10,0.78))]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-stone-50">
                  <p className="text-xs uppercase tracking-[0.35em] text-stone-200">
                    Progetto {index + 1}
                  </p>
                  <p className="mt-3 display-font text-2xl text-white">{project.title}</p>
                  <p className="mt-2 text-sm leading-7 text-stone-100">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Materiali e dettagli
            </p>
            <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
              La qualita di una cucina si riconosce anche nei dettagli.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {materialShots.map((shot) => (
              <Link
                key={shot.title}
                href="/progettazione"
                className="overflow-hidden rounded-[1.85rem] border border-[var(--border)] bg-white/75"
              >
                <div className="relative h-[260px] sm:h-[320px] lg:h-[360px]">
                  <Image
                    src={shot.image}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="display-font text-3xl text-stone-950">{shot.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {shot.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[var(--surface-strong)] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Servizio di progettazione
            </p>
            <h2 className="display-font mt-3 text-4xl text-stone-950 sm:text-5xl">
              Dalla prima idea alla consegna, con un percorso chiaro.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {designSteps.map((step, index) => (
              <Link key={step} href="/progettazione" className="rounded-[1.6rem] border border-[var(--border)] bg-white/80 p-6 transition-transform duration-300 hover:-translate-y-1 hover:bg-white">
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  Step 0{index + 1}
                </p>
                <p className="mt-5 text-lg leading-8 text-stone-800">{step}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-14">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Contatti
            </p>
            <h2 className="display-font text-4xl text-stone-950 sm:text-5xl">
              Prenota una visita in showroom o una call di orientamento.
            </h2>
            <p className="max-w-lg text-base leading-8 text-stone-700">
              Se vuoi fissare una visita in showroom o avere un primo confronto sul progetto, qui trovi i riferimenti essenziali per contattarci.
            </p>
            <Link
              href="/contatti"
              className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-50 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Vai ai contatti
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

            <Link href="/contatti" className="mt-6 block rounded-[1.5rem] border border-white/10 bg-black/15 p-5 transition-transform duration-300 hover:-translate-y-1 hover:bg-black/25">
              <p className="text-sm uppercase tracking-[0.3em] text-stone-300">
                CTA principale
              </p>
              <p className="mt-3 text-lg leading-8 text-stone-100">
                Contattaci per fissare un primo appuntamento e valutare insieme materiali, composizione e budget.
              </p>
            </Link>
          </div>
        </section>
    </PageShell>
  );
}
