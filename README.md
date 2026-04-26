# Dog Grooming Site

Marketing website for a dog grooming business, built with React and Vite.

## Overview

- **Purpose**: A fast, modern, responsive site to showcase services and brand.
- **Frontend**: React (JSX) + Vite.
- **Styling**: CSS modules/files per component (see `src/components/`).

## Tech Stack

- **React**: UI components
- **Vite**: dev server + production build
- **ESLint**: linting

## Getting Started

### Prerequisites

- **Node.js**: recommended current LTS
- **npm**: comes with Node.js

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will start the dev server and open the site in your browser.

## Scripts

- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Preview build**: `npm run preview`
- **Lint**: `npm run lint`

## Project Structure

```text
dog-grooming-site/
  src/
    assets/          # images, logos, icons
    components/      # reusable UI components (each with JSX + CSS)
    App.jsx          # app composition
    main.jsx         # app entry
  index.html
  vite.config.js
```

## Deployment

Create a production build:

```bash
npm run build
```

Then deploy the generated `dist/` folder to your host (e.g., Netlify, Vercel, GitHub Pages, or any static hosting).

## Customization

- **Branding / images**: update files in `src/assets/`
- **Site sections**: edit components in `src/components/`
- **Global styles**: `src/App.css` (and component-level CSS files)

## License

This project is currently **unlicensed**. Add a license file if you plan to distribute or open-source it.
