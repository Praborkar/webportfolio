# Prabor Kar | Portfolio

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

Personal portfolio of **Prabor Kar**, a full-stack and mobile developer from Noida, India. It shows the Flutter and React Native apps I have published on Google Play, a hospitality SaaS built with Next.js and PostgreSQL, my experience, and how to reach me.

**Live site:** https://webportfolio-nine-self.vercel.app

---

## Design

A notebook-and-scrapbook look: lined paper, taped labels, polaroids, sticky notes and flat dev-themed illustrations.

- **Fonts:** Jersey 10 (pixel display), Gaegu (handwriting), Space Mono (labels), Inter (body).
- **Colours:** warm paper, ink black, with yellow, pink, mint and blue accents.
- **Responsive:** tested from 320px phones to 1920px desktops, with no horizontal scrolling.
- **Motion:** Framer Motion animations; respects `prefers-reduced-motion`.

## Sections

| Section | What it shows |
| :--- | :--- |
| **Home** | Name, tagline, resume download, floating illustrations |
| **About** | Short bio, focus areas, photo |
| **Work** | Auto-advancing carousel of published apps, plus a Theoretic Hotels case study |
| **Experience** | Roles at Futurebits, freelance and internships, education, certifications |
| **Toolbox** | Languages, frameworks, databases and tools |
| **Contact** | Message form, plus GitHub, LinkedIn and email links |

## Tech stack

| Layer | Technology |
| :--- | :--- |
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS (with a few shadcn/ui components) |
| Animation | Framer Motion |
| Carousel | Embla (via the shadcn/ui carousel) |
| Icons | Lucide React |
| Routing | React Router |

## Getting started

```bash
git clone https://github.com/Praborkar/webportfolio.git
cd webportfolio
npm install
npm run dev
```

The dev server runs at http://localhost:8080. No environment variables are needed.

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Project structure

```
public/                  Static files: resume PDF, photos, favicons, og-image, robots.txt, sitemap.xml
src/
  components/
    HeroPortfolio.tsx    Home section
    AboutSection.tsx     About section
    WorkSection.tsx      Featured works carousel and case study
    ExperienceSection.tsx  Experience, education, certifications
    ToolboxSection.tsx   Skills
    ContactSection.tsx   Contact form and links
    TopNav.tsx / Footer.tsx
    scrap.tsx            Tape labels, polaroids, section titles
    doodles.tsx          SVG illustrations
    ui/                  shadcn/ui components
  data/publishedWork.ts  The apps shown in the carousel
  pages/                 Index and NotFound
```

## Updating the content

- **Apps and projects:** edit `src/data/publishedWork.ts`.
- **Experience, education, certifications:** edit the arrays at the top of `src/components/ExperienceSection.tsx`.
- **Skills:** edit `src/components/ToolboxSection.tsx`.
- **Bio:** edit `src/components/AboutSection.tsx`.
- **Resume:** replace `public/Prabor_Kar_Resume.pdf`.

## Ron, the AI assistant

A chat widget ("Ask Ron") on every page answers visitor questions about Prabor's work. The browser calls `/api/chat` (`api/chat.ts`), a Vercel serverless function that calls the Google Gemini API with the `gemini-3.1-flash-lite` model.

- Set `GOOGLE_API_KEY` in the Vercel project settings. It is read on the server only.
- Without the key, Ron shows a friendly "not set up yet" message and the rest of the site is unaffected.
- `npm run dev` does not run `/api` functions. To test Ron locally, use `vercel dev` with the key in a `.env` file.
- Ron's facts live in the `SYSTEM_PROMPT` in `api/chat.ts`. Update them when your experience or projects change.
- The endpoint is rate-limited per IP (best effort). Also set a monthly spend limit in the Google Cloud console.

## Contact form

The form has no mail backend. On submit it opens the visitor's email app with the message pre-filled (a `mailto:` link to prabork@gmail.com). To send messages directly, connect a service such as EmailJS, Formspree or Web3Forms in `src/components/ContactSection.tsx`.

## SEO

`index.html` contains the title, description, canonical URL, Open Graph and Twitter tags, and JSON-LD structured data (`WebSite` and `Person`). `public/robots.txt` and `public/sitemap.xml` point at the live URL.

If the site moves to a different address, update the URL in `index.html`, `public/robots.txt` and `public/sitemap.xml`. After deploying, submit the sitemap in Google Search Console.

## Deployment

The site is a static single-page app. `vercel.json` rewrites every route to `index.html` and adds basic security headers.

1. Import the repository into [Vercel](https://vercel.com) (or Netlify).
2. Use the defaults: build command `npm run build`, output directory `dist`.

## Contact

- **Portfolio:** https://webportfolio-nine-self.vercel.app
- **GitHub:** [Praborkar](https://github.com/Praborkar)
- **LinkedIn:** [Prabor Kar](https://www.linkedin.com/in/prabor-kar/)
- **Email:** prabork@gmail.com
