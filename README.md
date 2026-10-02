# Zhra — Portfolio

My personal portfolio as a frontend developer: a single-page site you explore by scrolling, with scroll-based animations and interactions.

**Live site:** _coming soon_ <!-- TODO: add the link after publishing -->

## Tech stack

- **React** + **Vite** (JavaScript)
- **Plain CSS** with CSS variables (no CSS framework)
- **react-icons** for skill and social icons
- No animation library: motion is built with CSS animations, scroll-driven animations and small custom hooks

## Features

- Single page: the navigation scrolls smoothly to each section and highlights the one in view
- Scroll animations: text reveals, a word-by-word highlight, parallax and stacked project cards
- Small interactions: magnetic buttons, a photo that tilts with the pointer, and a card spotlight
- Responsive, with a full-screen menu on mobile
- Accessible: respects `prefers-reduced-motion`, keyboard focus styles, ARIA labels on the menu

## Project structure

```
src/
├── components/   Navbar and Footer
├── sections/     Hero, About, Skills, Projects, Certificates, Contact (each with its own CSS)
├── data/         Content: projects, skills, certificates, social links, navigation
├── hooks/        Scroll and motion hooks (reveal, scroll progress, magnetic...)
├── utils/        Small helpers
├── styles/       Global styles and theme colors
└── assets/       Images
```

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Other commands:

```bash
npm run build    # production build in /dist
npm run preview  # preview the production build
npm run lint     # check the code with ESLint
```

## Updating the content

All content lives in `src/data/`, so the design does not need to change:

- **New project:** add an object to `src/data/projects.js` (title, description, features, tags, GitHub link, optional demo link and screenshot).
- **New skill:** add `{ name, icon }` to the right category in `src/data/skills.js`. Icons come from [react-icons](https://react-icons.github.io/react-icons).
- **New certificate:** add an object to `src/data/certificates.js` (title, issuer, date, status, description, credential link).
- **New social link:** add it to `src/data/socials.js`.

## Contact

- GitHub: [ZahraaAbas](https://github.com/ZahraaAbas)
- LinkedIn: [Zahra Abass](https://www.linkedin.com/in/zahra-abass-452835374)