# AGENTS.md

## Project Overview


This project is a personal portfolio website for Brian Cheng.
The requirement should be found in Guidence.docx.

The site is built using **Astro + TypeScript** and deployed as a **fully static site** to GitHub Pages via a separate deployment repository: `briccheng.github.io`.

The website follows a **single-page layout** with multiple sections.

---

## Tech Stack

* Astro
* TypeScript
* Static site output (no backend)
* GitHub Actions for CI/CD

---

## Core Constraints

* The site must remain **fully static**
* Do NOT introduce server-side rendering (SSR)
* Do NOT add backend logic, APIs, or database connections
* Do NOT introduce unnecessary dependencies
* Prefer built-in Astro functionality over external libraries

---

## Project Structure

* `src/pages/index.astro` → main entry (single-page layout)
* `src/components/` → reusable UI components
* `src/layouts/` → layout wrappers (e.g., BaseLayout)
* `public/` → static assets (images, icons)

Keep the structure simple and easy to understand.

---

## UI & Layout Rules

The site consists of the following sections:

* Home (Hero)
* About
* Experience
* Skills
* Projects
* Contact (Footer)

Guidelines:

* Use semantic HTML (`<nav>`, `<section>`, `<footer>`)
* Ensure proper heading hierarchy (`h1 → h2 → h3`)
* Provide alt text for images
* Design must be responsive (mobile-first)

---

## Styling Guidelines

* Prefer simple CSS or scoped styles
* Avoid heavy UI frameworks unless explicitly requested
* Maintain a clean, modern, professional design
* Keep spacing and typography consistent

---

## Component Guidelines

Create modular and reusable components:

* Navbar
* Hero section
* About section
* Experience timeline
* Skills list
* ProjectCard
* Footer

Rules:

* Keep components small and focused
* Avoid unnecessary abstraction
* Reuse components where possible

---

## Deployment Rules

Deployment is automated via GitHub Actions.

Trigger:

* On push to `main` branch

Build steps:

* `npm install`
* `npm run build`

Output:

* Static files generated in `dist/`

Deployment target:

* `briccheng.github.io` repository

Deployment behavior:

* Replace all existing files in the deployment repo except:

  * `.git`
  * `CNAME` (if present)

Authentication:

* Use a Personal Access Token stored as:

  * `PAGES_DEPLOY_TOKEN`

---

## Coding Standards

* Use TypeScript where applicable
* Use descriptive and consistent naming
* Prefer readability over complexity
* Keep files concise and maintainable

---

## What NOT to Do

* Do NOT convert this project into full React or Next.js
* Do NOT add global state management libraries
* Do NOT add authentication or database logic
* Do NOT over-engineer UI components
* Do NOT manually edit files in `briccheng.github.io`

---

## Development Workflow

When implementing features:

1. Work incrementally (one section or component at a time)
2. Verify build success using `npm run build`
3. Keep commits small and meaningful
4. Ensure UI works on both mobile and desktop

---

## Optional Future Enhancements

Only implement if explicitly requested:

* Animations
* Dark mode
* Blog section
* Limited React components (for interactivity only)

---

## Summary

* Keep it simple
* Keep it static
* Keep it clean
* Prioritize performance and maintainability
