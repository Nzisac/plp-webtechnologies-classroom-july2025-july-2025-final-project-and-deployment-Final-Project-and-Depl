Umoja Coding Club — Website

A simple, kid-friendly website for a coding club (ages 8–15), built with vanilla HTML, CSS, and JavaScript.
Pages: Home, Programs, Contact / Join.
Accessible, responsive, and easy to host on GitHub Pages or any static host.

✨ Features

Modern, responsive layout (mobile-first)

Theming with light/dark mode toggle (saved in localStorage)

Animated hero, cards, and reveal-on-scroll

Programs page with level switcher (Beginner/Intermediate/Advanced)

Contact/Join forms with inline validation and aria-live feedback

Optional local fonts (Roboto + Fredoka families)

SEO basics (titles, descriptions, canonicals, JSON-LD optional)

🗂️ Project Structure
/
├─ index.html
├─ programs.html
├─ contact.html
├─ README.md
├─ styles/
│  └─ styles.css
├─ scripts/
│  └─ script.js
└─ fonts/
   ├─ Roboto/
   │  └─ static/ (e.g., Roboto-Regular.woff2/.ttf, Roboto-Bold.woff2/.ttf, etc.)
   └─ Fredoka/
      └─ static/ (e.g., Fredoka-Regular.ttf, Fredoka-Bold.ttf, ... + condensed variants)

Getting Started (Local Development)
Option A — VS Code + Live Server (recommended)

Open the project folder in VS Code.

Right-click index.html → Open with Live Server.

🧩 JavaScript

All shared behavior lives in scripts/script.js:

Mobile menu toggle (#menuToggle toggles .active on #navLinks)

Theme toggle (sets data-theme and stores preference)

Reveal-on-scroll animation

Programs level switcher

Contact/Join form handling with inline feedback

♿ Accessibility

Use of semantic elements (nav, section, etc.)

aria-current="page" for the active nav link

aria-live="polite" for form feedback messages

Visible focus states on inputs

Labels properly associated to inputs via for/id

🔍 SEO Basics

Unique <title> and <meta name="description"> per page

Canonical links

Optional JSON-LD (Schema.org):

Useful but not required; ensure it matches visible content.

🌐 Deployment
GitHub Pages

Push this folder to a repo.

Settings → Pages → Deploy from branch → main / / (root).

Open https://<username>.github.io/<repo>/.

Note: Use relative links (href="contact.html") rather than root-absolute (/contact.html) so Pages works at /repo/….

Any static host (Netlify, Vercel, etc.)

Just deploy the folder as a static site (no build needed).

🛠️ Troubleshooting

“Cannot GET /contact.html”

The file isn’t at that path. Ensure contact.html is in the same folder as index.html, and link as href="contact.html".

When using Live Server, start it from the folder that contains your pages.

Nav toggle works on one page but not another

The page likely isn’t loading scripts/script.js, or the path is wrong.
Check DevTools → Network → is the script 200 or 404? Include the script on every page.

Fonts not loading

Add @font-face rules (see Fonts section).

Paths from styles/styles.css to fonts must use ../fonts/....

Check DevTools → Network → filter by “Font” and look for 404 or CORS errors.

Roadmap Ideas

Add a Gallery page (student projects)

Basic analytics (privacy-friendly)

Form submission backend (EmailJS, Netlify Forms, or a simple serverless function)

i18n (multilingual support)

Unit tests for form logic (optional)

🤝 Contributing

Fork and clone the repo.

Create a feature branch: git checkout -b feature/xyz.

Commit with clear messages and open a PR.

📬 Contact

Email: info@umojacodingclub.com

Site: Umoja Coding Club (this project)

📝 License

MIT — use, modify, and share freely. Add attribution where helpful.