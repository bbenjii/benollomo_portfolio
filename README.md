This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Photography

The previous `/photography` route redirects permanently to `/pics`.

`/pics` renders `src/data/photography.json` as a responsive gallery with a fullscreen viewer. The catalog contains public original/thumbnail URLs, dimensions, and editable titles and alt text. Images load directly from the existing S3 storage; no storage credentials or running ChronoFrame instance are required.

The catalog is a snapshot of 123 photos from the local ChronoFrame database, refreshed on October 26, 2026, excluding photos in hidden albums. Uploads, deletions, and visibility changes do not sync automatically: update the catalog and rebuild to change the portfolio selection. Captions and descriptive alt text can be edited in the same file. The `infoSections` field includes grouped EXIF details, file information, and capture dates. Photos with coordinates have a `location` field used for the OpenStreetMap preview. `public/photography-histograms.json` contains 128-bin RGB/luminance histograms calculated from the thumbnails; refresh it alongside the catalog when changing photos.

The gallery supports country, city, camera, and lens filters, plus capture-date, title, file-size sorting, and shuffle. The compact toolbar opens floating filter and sort panels. Category tabs support multiple selections (OR within a category, AND between categories), with photo-detail search and clear-all. The viewer stays within the displayed result set and order. Shuffle stays stable while toggling controls or filtering until you shuffle again. These selections reset on page reload.

The viewer supports 1–4× zoom with buttons, double-click, wheel, or pinch; drag to pan while zoomed. Swiping between photos is enabled at 1×. The information button opens a ChronoFrame-style sidebar (or floating bottom panel on mobile) with basic information, shooting parameters, histogram, equipment, shooting mode, and technical parameters. Empty fields and sections are omitted. An optional `video` URL enables a LIVE badge and muted, inline playback with native controls. The current catalog has no Live Photo video pairs, so these controls remain hidden until matching videos are added. Playback support depends on the browser and video codec; failed playback returns to the still image with a message.

## Next.js resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
