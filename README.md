# Saaed Imam — Portfolio (Next.js App Router)

A dark, teal/indigo themed portfolio mirroring the provided design mock. Built with Next.js 14 App Router and Tailwind CSS.

## Structure

- `app/` — App Router pages
  - `layout.tsx` — root layout, Navbar + Footer
  - `globals.css` — Tailwind and theme styles
  - `page.tsx` — home, hero with video background
  - `about/`, `services/`, `work/`, `dashboards/`, `contact/`
  - `dashboards/[slug]/page.tsx` — dynamic dashboards with placeholder charts
- `components/` — UI building blocks (Hero, Navbar, ProfileCard, ParticleBG, ServiceCard, ProjectCard, Charts, Section)
- `lib/` — data (`projects.ts`, `dashboards.ts`, `theme.ts`)
- `public/` — assets (hero.mp4, images, icons)

## Scripts

- `npm run dev` — start dev server (use `-p 3001` if 3000 is busy)
- `npm run build` — production build
- `npm start` — start production server

## Notes

- Hero uses `/public/hero.mp4` for motion. Add a `poster` frame if desired.
- Drop real images in `public/images/` using the filenames created as placeholders.
- Tailwind config is TypeScript (`tailwind.config.ts`).

## Customize

- Edit text in `components/Hero.tsx`, `components/ProfileCard.tsx`, `app/page.tsx`.
- Add projects in `lib/projects.ts` and dashboards in `lib/dashboards.ts`.

