# AMC Sweep – Premium Landing Page

A premium, world-class single-page site for **AMC Sweep**, Dublin's premier chimney sweep service. Built with **Vite**, **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Stack

- **Vite** – Fast build and dev server
- **React 18** – UI
- **Tailwind CSS** – Styling (Midnight Slate + Golden Honey palette)
- **Framer Motion** – Scroll animations, magnetic buttons, parallax
- **Lucide React** – Icons

## Setup & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build (Static Site)

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Features

- **Glassmorphism** – Frosted header and service cards (backdrop-blur)
- **Magnetic buttons** – Primary CTAs follow the cursor slightly on hover
- **Scroll animations** – Staggered fade/slide with Framer Motion
- **Hero parallax** – Chimney illustration moves with scroll
- **Custom chimney SVG** – Stylized chimney with CSS-animated smoke
- **Bento grid** – Services section with varied card sizes
- **FAQ accordion** – Smooth expand/collapse
- **Contact form** – Real-time email validation (green border when valid)
- **Sticky Call button** – Mobile-only, fixed at bottom for quick calls

## Project Structure

```
src/
  App.jsx           # Main app, composes all sections
  main.jsx           # React entry
  index.css          # Tailwind + custom keyframes (smoke)
  components/
    Header.jsx       # Glass nav, mobile menu
    Hero.jsx         # Parallax hero + chimney SVG
    ChimneyHeroSVG.jsx
    MagneticButton.jsx
    About.jsx
    Services.jsx     # Bento grid, Lucide icons
    WhyChooseUs.jsx
    Testimonials.jsx
    FAQ.jsx          # Accordion
    Contact.jsx      # Form + validation
    StickyCallButton.jsx
    Footer.jsx
```

Replace `aidan@amcsweep.ie` and `087 123 4567` with real contact details. Add your Facebook/Instagram URLs in `Footer.jsx`.
