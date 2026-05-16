# BEC 2026 Landing Page — Implementation Plan

## 1. Project Stack & Architecture

### Recommended Stack
Use:

- Next.js 15 (App Router) → scalable, SEO-friendly, production-ready
- Tailwind CSS → rapid styling and responsive utilities
- Framer Motion → smooth animations & transitions
- Swiper.js → gallery carousel/slider
- Lucide React → clean modern icons
- TypeScript → maintainable codebase

---

# 2. Project Folder Structure

```bash
bec-2026/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── requirements.tsx
│   ├── timeline.tsx
│   ├── resources.tsx
│   ├── gallery.tsx
│   ├── sponsorship.tsx
│   ├── footer.tsx
│   ├── section-title.tsx
│   └── ui/
│       ├── button.tsx
│       ├── glass-card.tsx
│       └── container.tsx
│
├── public/
│   ├── images/
│   ├── sponsors/
│   └── gallery/
│
├── lib/
│   └── constants.ts
│
└── tailwind.config.ts
```

---

# 3. Design System Setup

## Typography

### Heading Font
- Playfair Display
OR
- Syne

### Body Font
- Plus Jakarta Sans
OR
- Inter

### Import Fonts

```tsx
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
```

---

# 4. Tailwind Theme Configuration

## Color Tokens

```ts
colors: {
  primary: "#0F766E",   // Deep Teal
  secondary: "#2DD4BF", // Mint
  accent: "#FBBF24",    // Gold
}
```

---

# 5. Global UI Principles

## Visual Rules

### Hero Section
- Rich radial gradients
- Ambient blur circles
- Large centered typography
- Glassmorphism CTA container

### Other Sections
- White / soft gradient background
- Spacious padding
- Minimal clean layout

### Card Style

```css
bg-white/70
backdrop-blur-md
border border-white/20
rounded-3xl
shadow-xl
```

---

# 6. Navbar Implementation

## Requirements

### Behavior
- Sticky top navbar
- Transparent initially
- Blur background on scroll
- Smooth scroll anchors

### Layout
- Left: BEC logo/text
- Right:
  - Tentang
  - Ketentuan
  - Timeline
  - Berkas
  - Dokumentasi
  - Sponsorship
  - Kontak

### Mobile
- Hamburger menu
- Fullscreen drawer navigation

---

# 7. Section-by-Section Implementation

---

# SECTION 1 — Hero Section

## Goals
Create strong first impression.

## Layout
Two-column desktop:
- Left → content
- Right → decorative floating shapes / illustration

Mobile:
- Single centered column

## Content
- Main headline
- Supporting paragraph
- 2 CTA buttons

## Visual Elements
- Radial gradient background
- Floating blur circles
- Optional animated particles

## CTA Styles

### Primary
```css
bg-accent
hover:scale-105
```

### Secondary
```css
border border-white/40
bg-white/10
```

---

# SECTION 2 — Tentang BEC

## Layout
Centered max-width container.

## Content
- Section title
- 1–2 concise paragraphs

## Visual Style
Minimal clean white background.

---

# SECTION 3 — Ketentuan Peserta

## Layout
Responsive grid cards.

Desktop:
```txt
2 columns
```

Mobile:
```txt
1 column
```

## Component Style
Glass cards with icons.

## Suggested Items
- Mahasiswa aktif
- D3/D4/S1
- Universitas Indonesia
- Team/individual rules
- Submission rules

---

# SECTION 4 — Timeline

## Layout
Vertical timeline on mobile.
Horizontal timeline on desktop.

## Components
Each step contains:
- Date
- Event name

## Styling
Teal solid cards with white text.

## Interaction
- Hover lift effect
- Timeline line animation

---

# SECTION 5 — Resources Section

## Layout
Grid of action cards/buttons.

## Buttons

### Active Buttons
- Pendaftaran Abstrak
- Buku Panduan
- Pengumpulan Full Paper

### Disabled Buttons
- Poster & PPT (Menyusul)

## States

### Active
```css
bg-primary
hover:bg-secondary
```

### Disabled
```css
opacity-50
cursor-not-allowed
```

---

# SECTION 6 — Gallery Carousel

## Library
Use:

```bash
npm install swiper
```

## Features
- Auto-slide
- Infinite loop
- Navigation arrows
- Pagination dots
- Touch swipe mobile

## Content
6–10 images from previous events.

## Styling
Rounded images with subtle shadow.

---

# SECTION 7 — Sponsorship

## Layout
Responsive logo grid.

Desktop:
```txt
4 columns
```

Tablet:
```txt
3 columns
```

Mobile:
```txt
2 columns
```

## Box Style
```css
border
rounded-2xl
bg-white
```

## Optional
Grayscale logos → colored on hover.

---

# SECTION 8 — Footer

## Layout
2-column desktop.
Stacked mobile.

## Left
### Narahubung
- WhatsApp PIC
- Email

## Right
### Sosial Media
- Instagram
- TikTok
- LinkedIn
- Email

## Styling
Dark teal background with white text.

---

# 8. Animation & Interaction Plan

## Use Framer Motion For

### Hero
- Fade-up entrance
- Floating glow animation

### Sections
- Scroll reveal animation

### Buttons
- Scale hover
- Opacity transitions

### Timeline
- Sequential reveal

---

# 9. Responsive Strategy

## Breakpoints

### Mobile First
```txt
sm → tablet
md → laptop
lg → desktop
xl → wide screen
```

## Mobile Optimizations
- Reduce hero font size
- Stack all grids
- Reduce section padding
- Swipe carousel enabled

---

# 10. Accessibility Plan

## Requirements
- Semantic HTML
- aria-label for buttons/icons
- Keyboard navigable navbar
- Proper contrast ratios
- Alt text for images

---

# 11. Performance Optimization

## Image Optimization
Use Next.js `<Image />`

## Lazy Loading
- Gallery images
- Sponsor logos

## Animation Optimization
Use GPU-friendly transforms only.

---

# 12. SEO & Metadata

## Add Metadata

```tsx
export const metadata = {
  title: "BEC 2026",
  description: "Brawijaya Essay Competition 2026",
};
```

## OpenGraph
Add preview image.

---

# 13. Deployment Plan

## Recommended Platform
- Vercel

## CI/CD
Auto deploy from GitHub main branch.

---

# 14. Development Phases

## Phase 1 — Setup
- Initialize Next.js
- Install Tailwind
- Configure fonts/colors

## Phase 2 — Core Layout
- Navbar
- Hero
- Section wrappers

## Phase 3 — Content Sections
- About
- Requirements
- Timeline
- Resources

## Phase 4 — Interactive Components
- Carousel
- Animations
- Mobile menu

## Phase 5 — Polish
- Responsive fixes
- Accessibility
- SEO
- Performance

## Phase 6 — Deployment
- Production build
- Deploy to Vercel

---

# 15. Recommended NPM Packages

```bash
npm install framer-motion
npm install swiper
npm install lucide-react
npm install clsx
npm install tailwind-merge
```

---

# 16. Final UI Direction Summary

The final website should feel:

- Premium academic
- Modern yet formal
- Minimal and clean
- Energetic in the hero section
- Calm and readable in content sections
- Responsive and smooth
- Similar interaction flow to the reference Framer website
- Professional enough for national-scale competition branding