# Ombrera Kitchens website

Bilingual (English / Arabic with full RTL) website for Ombrera Kitchens, a fictional luxury kitchen design studio in Riyadh. A MYFRIX concept project.

Stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS, GSAP + ScrollTrigger, Lenis smooth scroll, next/font (Bodoni Moda, Instrument Sans, Amiri, IBM Plex Sans Arabic).

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000. The عربي / EN button in the header switches language (remembered per browser).

- `npm run build` then `npm start`: production build.
- `npm run check:links`: checks every internal link, anchor, slug reference and image. Fails if anything is missing.

## Pages

| Route | Page |
|---|---|
| `/` | Home: intro, day/night hero with hotspots, scroll-fill statement, pinned styles gallery, material switcher, animated layout plans, before/after, projects, details, process, showroom, testimonial, CTA |
| `/styles` and `/styles/[slug]` | 6 styles: `modern-handleless`, `italian-luxury`, `japandi`, `classic-shaker`, `industrial`, `gulf-majlis` |
| `/layouts` | 5 layouts with self-drawing floor plans and a comparison table |
| `/materials` | Material switcher and material library |
| `/projects` and `/projects/[slug]` | `al-nakheel-villa` (with before/after), `obhur-beach-house`, `marina-sky-residence`, `salmiya-townhouse` |
| `/showroom` | Showroom, visit steps, materials, appliances, location and hours |
| `/consultation` | Consultation form with WhatsApp pre-fill |

## Editing content

All text is in `src/lib/data/` with English and Arabic for every string: `site.ts` (brand, contact details, page copy, form options), `styles.ts`, `layouts.ts` (including floor-plan shapes), `materials.ts`, `projects.ts`.

Images live in `public/images/` as WebP, named by page and section. Replace a photo by keeping the same file name. The day/night hero, the four `switch-*` images and the before/after pair must keep identical framing.

**Before going live:** replace the placeholder email, phone and WhatsApp number in `site.ts` and have a native speaker review the Arabic.

## Consultation form

`/api/enquiry` validates every field, has a honeypot spam trap, and emails the request through Resend when configured. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL`. Without them the form works in demo mode (shows the thank-you message, nothing is sent). The WhatsApp button opens a pre-filled chat with the visitor's selections.

## Deploy to Vercel

1. Push this `website` folder to a new GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repo, keep the Next.js defaults.
3. Add `NEXT_PUBLIC_SITE_URL` (your final URL) and, optionally, the Resend variables.
4. Deploy.

## Built-in quality

- SEO: unique titles and descriptions, canonical URLs, Open Graph image, sitemap, robots, LocalBusiness and Breadcrumb structured data.
- Accessibility: skip link, keyboard-operable menu, toggles, hotspots and before/after slider (arrow keys), labelled form fields with errors, `prefers-reduced-motion` turns off animation, intro and smooth scroll.
- Robust motion: the intro hides itself even if scripts fail, page transitions navigate on a timer so links never stick, and image reveals can never leave a photo covered.
