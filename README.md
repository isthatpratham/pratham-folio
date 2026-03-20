# Pratham Portfolio

A dual-mode personal portfolio built to showcase development, video editing, and storytelling work in a single system.

Live: https://www.prathamm.codes

---

## Overview

This is not a typical portfolio.

It is designed as a mode-based system:

* Developer Mode → projects, systems, technical work
* Editor Mode → video edits, motion work, storytelling
* Author Section → published book and writing identity

The goal is simple: present multiple skill sets without creating confusion.

---

## Features

* Mode switch (Developer ↔ Editor)
* Cloudinary-powered video streaming (no lag)
* YouTube + external + local video handling
* Cinematic editor portfolio layout
* Real client work showcase
* Book showcase with global purchase links
* Responsive across devices
* Smooth UI transitions and interactions

---

## Tech Stack

* React (Vite)
* TypeScript
* Tailwind CSS
* Cloudinary (video CDN)
* YouTube Embed API

---

## Project Structure

```
src/
  components/
    Hero.tsx
    Projects.tsx
    Editor.tsx
    BookShowcase.tsx
    ...
  
  data/
    editorProjects.ts
  
public/
  images/
```

---

## Video Handling (Important)

Videos are NOT stored in the repository.

All large video assets are hosted on Cloudinary for:

* faster load times
* reduced bundle size
* smoother playback

Example format:

```
https://res.cloudinary.com/<cloud-name>/video/upload/f_auto,q_auto/<video>.mp4
```

---

## Getting Started

Clone the repo:

```
git clone https://github.com/isthatpratham/pratham-folio.git
cd pratham-folio
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Build:

```
npm run build
```

---

## Deployment

Deployed on Vercel.

* `main` branch → production
* `editor-mode` branch → staging / preview

---

## Key Design Decisions

* Separate identities without separate websites
* Thumbnail-first video loading for performance
* Minimal text, visual-first editor portfolio
* CDN-based media delivery instead of local assets

---

## Author Section

Book: *Where She Still Exists*

Available on:

* Amazon (IN, UK, US)
* Flipkart
* NotionPress

---

## Contact

If you’re looking to collaborate or work together:

* Portfolio: https://www.prathamm.codes
* Editor Work: https://www.prathamm.codes/edit

---

## License

MIT License

---

## Final Note

Built to represent not just skills, but range.

Developer. Editor. Author.
