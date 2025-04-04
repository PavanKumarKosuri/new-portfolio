# Pavan Portfolio

This is my personal portfolio built with React and Vite. It showcases my projects, skills, and professional background.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Routing](#routing)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This portfolio is built using Vite and React, with a focus on smooth animations and a clean, modular design. It includes pages for Home, About, Works, and Contact. The site is deployed on GitHub Pages using HashRouter for client-side routing.

## Features

- **Responsive Design:** Works on both desktop and mobile devices.
- **Smooth Animations:** Animations triggered on scroll and page load.
- **Modular CSS:** Global styles and component-specific CSS modules for maintainability.
- **Dynamic Routing:** Built with React Router (using HashRouter for GitHub Pages compatibility).
- **Project Modal:** Click on a project in the Works section to view login credentials and a link to visit the site.

## Technologies

- **React** – UI library
- **Vite** – Build tool
- **React Router DOM** – Client-side routing
- **Anime.js** – Animations
- **MoveTo** – Smooth scrolling
- **CSS Modules** – Scoped CSS
- **GitHub Pages** – Deployment

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/PavanKumarKosuri/new-portfolio.git
   cd new-portfolio
Install dependencies:

bash
Copy
npm install
Available Scripts
In the project directory, you can run:

npm run dev
Runs the app in development mode at http://localhost:5173.

npm run build
Builds the app for production into the dist folder.

npm run preview
Runs a local preview of the production build.

npm run deploy
Deploys the production build to GitHub Pages (make sure your vite.config.js base is set appropriately).

Routing
This project uses HashRouter from React Router DOM to handle client-side routing. Using HashRouter ensures that the deployed application on GitHub Pages works correctly without 404 errors on subpages.

Home Page: http://localhost:5173/#/

About Page: http://localhost:5173/#/about

Works Page: http://localhost:5173/#/works

Contact Page: http://localhost:5173/#/contact

Deployment
This portfolio is deployed to GitHub Pages. The deployment process uses the gh-pages package.

Configure Vite Base:

In vite.config.js, the base is set conditionally:

js
Copy
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/new-portfolio/" : "/",
  plugins: [react()],
  server: {
    open: true,
  },
}));
Deploy Script:

In package.json, a deploy script is configured:

json
Copy
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
Deployment Steps:

Build the project:

bash
Copy
npm run build
Deploy to GitHub Pages:

bash
Copy
npm run deploy
Then, go to your GitHub repository’s Settings → Pages and set the source to the gh-pages branch.

Feel free to fork this repository and make improvements. Pull requests are welcome.
