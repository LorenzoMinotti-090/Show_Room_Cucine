# Show Room | Officina Cucine

Sito showroom di cucine su misura realizzato con Next.js, pensato per presentare collezioni, gallery progetti, materiali e contatti in una veste moderna, editoriale e responsive.

## Panoramica

Il progetto include:

- home page con hero visuale e sezioni introduttive
- catalogo con collezioni cucina e pagine dettaglio dedicate
- gallery immagini con visualizzatore integrato
- sezione progettazione con materiali e finiture
- pagina contatti con riferimenti showroom
- layout responsive ottimizzato per mobile, tablet e desktop

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Avvio locale

Installa le dipendenze:

```bash
npm install
```

Avvia l'ambiente di sviluppo:

```bash
npm run dev
```

Build di produzione:

```bash
npm run build
```

Avvio della build locale:

```bash
npm run start
```

Controllo lint:

```bash
npm run lint
```

## Struttura principale

```text
src/
	app/
		catalogo/
		contatti/
		gallery/
		progettazione/
	components/
	lib/
public/
	images/
```

## Contenuti del progetto

I testi condivisi, le collezioni, la gallery, i materiali e i dati di contatto sono centralizzati in [src/lib/site-data.ts](src/lib/site-data.ts).

I componenti principali del layout si trovano in:

- [src/components/site-header.tsx](src/components/site-header.tsx)
- [src/components/site-footer.tsx](src/components/site-footer.tsx)
- [src/components/page-shell.tsx](src/components/page-shell.tsx)
- [src/components/image-lightbox-gallery.tsx](src/components/image-lightbox-gallery.tsx)

## Pubblicazione

Il progetto è adatto a essere pubblicato su GitHub e distribuito su piattaforme come Vercel.

Flusso consigliato:

```bash
git add .
git commit -m "Aggiorna showroom"
git push origin main
```

## Note

- Le immagini del sito sono salvate nella cartella `public/images`.
- Alcune cartelle immagine presenti nella root del repository sono asset sorgente usati durante la costruzione del progetto.
