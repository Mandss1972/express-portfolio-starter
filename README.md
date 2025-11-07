# Express Portfolio Starter (INFR3120 Assignment 2)

My personal portfolio built with **Node.js + Express + EJS**, Bootstrap, and Font Awesome.

## Quickstart
```bash
npm install
npm run dev   # run locally with nodemon
# or
npm start     # run normally
```

## Pages & Routes
- `/` Home
- `/about` About Me
- `/projects` Projects
- `/contact` Contact (with simple POST handler)

## Tech & Structure
- Generated structure compatible with Express Generator
- View engine: EJS with `express-ejs-layouts` (layout.ejs + partials)
- Assets organized under `public/` (JS, CSS, images)
- Bootstrap 5 and Font Awesome via CDN (per assignment requirement)
- Routes defined in `controllers/index.js`

## Cloud Deployment (Render)
- Create a new Web Service
- Build Command: `npm install`
- Start Command: `npm start`
- Instance: Free is OK for grading
- Add environment variable: `NODE_ENV=production`

## Version Control Best Practices
- Initialize a **public** GitHub repository
- Meaningful commits at each milestone:
  - `chore: scaffold express app (ejs layout, bootstrap, fa)`
  - `feat: add about/projects/contact views + routes`
  - `feat(projects): render projects from array`
  - `feat(contact): basic POST handler + success alert`
  - `style: custom css + hover states`
  - `docs: readme with deployment steps & rubric mapping`
  - `ci: add render.yaml` (optional, if using infra-as-code)

## Rubric Mapping
- **GUI/Interface (8 pts)**: Bootstrap + FA, clean layout, consistent nav/footer, responsive design.
- **Functionality (12 pts)**: At least 1 EJS view template; dedicated Express route per page; form POST.
- **Site Structure (30 pts)**:
  - Express generator-style tree with EJS layout (6)
  - Assets under `public/` (2)
  - Bootstrap & Font Awesome (10)
  - Routes in `controllers/index.js` (5)
  - Layout + shared header/footer with GitHub & LinkedIn links (7)
- **Version Control (5 pts)**: Public repo + progressive commits.
- **Cloud Deployment (5 pts)**: Live on Render/DigitalOcean/Heroku/AWS.

## Customize
- Update `controllers/index.js` projects array.
- Replace footer links with your GitHub/LinkedIn.
- Add your own CSS in `public/stylesheets/style.css` and hero copy in `views/index.ejs`.

---
© 2025 Amanda Ahanonu.
