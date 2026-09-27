# Rohit Sharma · Portfolio

Personal portfolio built with **Next.js 16**, **three.js** and **GSAP**.

The hero opens as a flat design canvas (a dot grid with artboard frames, like Figma).
The artboards then dissolve and the grid lifts into a living 3D surface. That is the
"design to code" story of the work. Moving the mouse sends a ripple through the surface,
and scrolling glides the camera over it.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build and host

```bash
npm run build      # writes a static site to /out
npm start          # preview the /out folder locally
```

Upload the contents of `/out` to any host: Vercel, Netlify, GitHub Pages or cPanel.
On Vercel you can also just import the repo; it detects Next.js automatically.

## Edit the content

Everything you see on the site lives in **`lib/data.ts`**: profile, stats, projects,
experience and skills. Change it there; the components update on their own.

Things to fill in:

- `projects`: one-line summaries and tech tags for each site
- `profile.linkedin` / `profile.github`: add URLs to show the links
- `public/Rohit_Sharma_CV.pdf`: replace with your latest CV

## Structure

```
app/
  layout.tsx        page shell, fonts, SEO metadata
  page.tsx          section order
  globals.css       all styles (colors and fonts are variables at the top)
components/
  HeroScene.tsx     three.js scene + GSAP intro and scroll animation
  Hero.tsx          name reveal
  About.tsx         intro and counting stats
  Work.tsx          project list
  Experience.tsx    timeline that draws as you scroll
  Skills.tsx
  Contact.tsx
lib/
  data.ts           all content
  gsap.ts           GSAP + ScrollTrigger setup
```

## Accessibility and performance

- Respects "reduce motion": animations are skipped and the 3D scene is shown still.
- The 3D render loop pauses when the hero is off screen.
- If WebGL is unavailable, the page works without the scene.
