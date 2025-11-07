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
- Bootstrap 5 and Font Awesome via CDN 
- Routes defined in `controllers/index.js`

## Cloud Deployment (Render)
- Created a new Web Service
- Build Command: `npm install`
- Start Command: `npm start`
- Instance: Free is OK
- Add environment variable: `NODE_ENV=production`

## Version Control Best Practices
- Initialized a **public** GitHub repository
- Meaningful commits at each milestone:
  - `chore: scaffold express app (ejs layout, bootstrap, fa)`
  - `feat: add about/projects/contact views + routes`
  - `feat(projects): render projects from array`
  - `feat(contact): basic POST handler + success alert`
  - `style: custom css + hover states`
  - `docs: readme with deployment steps & rubric mapping`
  - `ci: add render.yaml`

**Live URL:** https://express-portfolio-starter.onrender.com
**Repo URL:** https://github.com/Mandss1972/express-portfolio-starter
