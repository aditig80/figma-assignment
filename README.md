# Elementum — React Assignment

A pixel-accurate React implementation of the Elementum Figma design.
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-black?style=for-the-badge)](https://figma-assignment-lovat.vercel.app/)

🔗 **Live Demo:** [https://figma-assignment-lovat.vercel.app/](https://figma-assignment-lovat.vercel.app/)

## Tech Stack
- **React 18** — component-based UI
- **CSS Modules / Global CSS** — scoped, responsive styling
- **DM Serif Display + Manrope** — typography matching the design
- **Docker + Nginx** — production-ready containerised deployment

## Project Structure
```
src/
├── App.jsx        # All components (Navbar, Hero, Tomorrow, Progress, WhatWeOffer, Testimonials, Newsletter, Footer)
├── App.css        # All styles with responsive breakpoints
└── index.js       # Entry point
public/
└── index.html
Dockerfile
docker-compose.yml
```

## Run Locally (without Docker)
```bash
npm install
npm start
# Open http://localhost:3000
```

## Run with Docker (required for submission)
```bash
docker-compose up --build
# Open http://localhost:3000
```

## Sections Implemented
- ✅ Navbar (sticky, responsive with hamburger menu)
- ✅ Hero — large heading with highlights, floating team avatars, decorative shapes
- ✅ Tomorrow section — split layout with circular image and geometric accents
- ✅ Progress section — mirrored split layout
- ✅ What We Can Offer — bordered table layout
- ✅ Testimonials — floating avatars with centered quote card
- ✅ Newsletter — mint background with CTA
- ✅ Footer — four-column grid

## Responsive Breakpoints
| Breakpoint | Layout |
|---|---|
| > 1024px | Full desktop layout |
| 768–1024px | Tablet — reduced padding |
| < 768px | Mobile — stacked columns, hamburger nav |
| < 480px | Small mobile — further font/spacing reduction |

## Animations
- Page load `fadeUp` stagger on hero elements
- Floating `floatY` keyframe on decorative shapes
- Hover underline slide on nav links
- Hover scale on team avatars
- Hover lift on CTA button
