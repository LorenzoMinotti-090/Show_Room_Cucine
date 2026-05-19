export type CollectionDetail = {
  slug: string;
  title: string;
  label: string;
  description: string;
  image: string;
  alt: string;
  headline: string;
  longDescription: string;
  features: string[];
  materials: string[];
  gallery: Array<{
    src: string;
    alt: string;
  }>;
};

export const kitchenCollections: CollectionDetail[] = [
  {
    slug: "linea-frame",
    title: "Linea Frame",
    label: "Industrial urban",
    description:
      "Volumi puliti, metallo brunito e superfici materiche per ambienti dal carattere deciso.",
    image: "/images/showroom/catalogo-a.png",
    alt: "Cucina industrial con isola centrale e finiture in legno scuro",
    headline: "Una cucina pensata per loft, open space e ambienti dal gusto contemporaneo.",
    longDescription:
      "Linea Frame punta su contrasti netti e materiali decisi: strutture scure, superfici materiche, luce radente e dettagli tecnici che valorizzano l'ambiente senza appesantirlo.",
    features: [
      "Isola centrale con top materico e frontali opachi.",
      "Colonne a tutta altezza con ritmo architettonico rigoroso.",
      "Dettagli metallici e tonalita fumé per ambienti dal carattere deciso.",
    ],
    materials: ["Acciaio fumé", "Rovere tostato", "Gres effetto pietra"],
    gallery: [
      { src: "/images/collections/collection-1.png", alt: "Variante Linea Frame 1" },
      { src: "/images/collections/collection-2.png", alt: "Variante Linea Frame 2" },
      { src: "/images/collections/collection-3.png", alt: "Variante Linea Frame 3" },
      { src: "/images/collections/collection-4.png", alt: "Variante Linea Frame 4" },
      { src: "/images/collections/collection-5.png", alt: "Variante Linea Frame 5" },
      { src: "/images/collections/collection-6.png", alt: "Variante Linea Frame 6" },
    ],
  },
  {
    slug: "linea-atelier",
    title: "Linea Atelier",
    label: "Contemporary warm",
    description:
      "Legni chiari, gole integrate e composizioni su misura pensate per una cucina da vivere ogni giorno.",
    image: "/images/showroom/catalogo-b.png",
    alt: "Cucina contemporanea con isola materica e illuminazione soffusa",
    headline: "Un equilibrio naturale tra funzionalita quotidiana, luce morbida e composizioni su misura.",
    longDescription:
      "Linea Atelier nasce per chi cerca una cucina elegante ma accogliente: superfici luminose, volumi puliti e materiali caldi, con tutta l'attenzione necessaria a praticita e proporzioni.",
    features: [
      "Penisole e isole conviviali pensate per la vita quotidiana.",
      "Integrazione discreta di vani, gole e illuminazione tecnica.",
      "Palette chiara e naturale per ambienti accoglienti ma contemporanei.",
    ],
    materials: ["Rovere chiaro", "Laccati soft touch", "Quarzo chiaro"],
    gallery: [
      { src: "/images/collections/collection-7.png", alt: "Variante Linea Atelier 1" },
      { src: "/images/collections/collection-8.png", alt: "Variante Linea Atelier 2" },
      { src: "/images/collections/collection-9.png", alt: "Variante Linea Atelier 3" },
      { src: "/images/collections/collection-10.png", alt: "Variante Linea Atelier 4" },
      { src: "/images/collections/collection-11.png", alt: "Variante Linea Atelier 5" },
      { src: "/images/collections/collection-12.png", alt: "Variante Linea Atelier 6" },
      { src: "/images/collections/collection-13.png", alt: "Variante Linea Atelier 7" },
    ],
  },
  {
    slug: "linea-signature",
    title: "Linea Signature",
    label: "Luxury custom",
    description:
      "Isola importante, pietre tecniche e dettagli su misura per progetti di fascia alta.",
    image: "/images/showroom/catalogo-c.png",
    alt: "Cucina luxury con soffitti alti e atmosfera showroom premium",
    headline: "La collezione per chi desidera una cucina scenografica, curata nei dettagli e nelle finiture.",
    longDescription:
      "Linea Signature interpreta il lato piu esclusivo del progetto: grandi isole, materiali ricercati, luce controllata e una composizione pensata per dare presenza e continuita all'ambiente.",
    features: [
      "Isola scultorea con forte impatto visivo.",
      "Materiali coordinati tra top, schienali e dettagli tecnici.",
      "Composizioni importanti per ambienti ampi e open space di rappresentanza.",
    ],
    materials: ["Pietra tecnica", "Finiture satin", "Legni scuri selezionati"],
    gallery: [
      { src: "/images/collections/collection-14.png", alt: "Variante Linea Signature 1" },
      { src: "/images/collections/collection-15.png", alt: "Variante Linea Signature 2" },
      { src: "/images/collections/collection-16.png", alt: "Variante Linea Signature 3" },
      { src: "/images/collections/collection-17.png", alt: "Variante Linea Signature 4" },
      { src: "/images/collections/collection-18.png", alt: "Variante Linea Signature 5" },
      { src: "/images/collections/collection-19.png", alt: "Variante Linea Signature 6" },
      { src: "/images/collections/collection-20.png", alt: "Variante Linea Signature 7" },
    ],
  },
];

export const galleryProjects = [
  {
    title: "Loft metropolitano",
    description: "Isola in gres, volumi essenziali e materiali decisi per un ambiente contemporaneo.",
    image: "/images/showroom/gallery-1.png",
    alt: "Cucina in loft industrial con soppalco e grandi vetrate",
  },
  {
    title: "Open space tecnico",
    description: "Colonne a tutta altezza, luce ben distribuita e composizione pulita.",
    image: "/images/showroom/gallery-2.png",
    alt: "Cucina open space elegante con isola e volumi puliti",
  },
  {
    title: "Family luxury",
    description: "Uno spazio conviviale che unisce eleganza, comfort e praticita quotidiana.",
    image: "/images/showroom/gallery-3.png",
    alt: "Cucina family con dettagli luxury e atmosfera accogliente",
  },
];

export const materialShots = [
  {
    title: "Matericita autentica",
    description:
      "Dettagli di top, venature e finiture che raccontano subito qualita e cura progettuale.",
    image: "/images/showroom/dettagli-1.png",
    alt: "Dettaglio ravvicinato di top cucina e finiture materiche",
  },
  {
    title: "Luce e dettagli",
    description:
      "Gole, illuminazione e texture aiutano a definire il carattere della cucina fin dal primo sguardo.",
    image: "/images/showroom/dettagli-2.png",
    alt: "Dettaglio ravvicinato di luci e superfici cucina premium",
  },
];

export const collectionLibrary = Array.from({ length: 20 }, (_, index) => ({
  src: `/images/collections/collection-${index + 1}.png`,
  alt: `Vista collezione cucina ${index + 1}`,
}));

export const editorialGallery = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/gallery-editorial/editorial-${index + 1}.png`,
  alt: `Scatto editoriale showroom ${index + 1}`,
}));

export const materialLibrary = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/materials-library/material-${index + 1}.png`,
  alt: `Dettaglio materiale cucina ${index + 1}`,
}));

export const designSteps = [
  "Sopralluogo o confronto iniziale per capire spazio, esigenze e stile.",
  "Scelta di materiali, finiture, composizione ed elettrodomestici.",
  "Proposta progettuale, preventivo e assistenza fino alla consegna.",
];

export const navItems = [
  { href: "/catalogo", label: "Catalogo" },
  { href: "/gallery", label: "Gallery" },
  { href: "/progettazione", label: "Progettazione" },
  { href: "/contatti", label: "Richiedi una consulenza" },
];

export const contactDetails = [
  ["Telefono", "+39 0547 000 000"],
  ["Email", "atelier@officinacucine.it"],
  ["Showroom", "Via delle Materie 18, Cesena"],
  ["Orari", "Lun-Sab 10:00 - 19:00"],
] as const;

export const brandName = "Officina Cucine";

export function getCollectionBySlug(slug: string) {
  return kitchenCollections.find((collection) => collection.slug === slug);
}
