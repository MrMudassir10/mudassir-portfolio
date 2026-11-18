# Muhammad Mudassir: portfolio

Next.js (App Router) and TypeScript. Dark and light mode, project detail views, count-up numbers and an AI assistant.

## Run it

```bash
npm install
cp .env.example .env.local     # then edit it (see below)
npm run dev                    # http://localhost:3000
```

Check a production build before you deploy:

```bash
npm run typecheck
npm run build
npm start
```

## Edit your content

Everything you will want to change is in `src/data`:

| File | What it holds |
| --- | --- |
| `src/data/site.ts` | Name, description, and your links (GitHub, LinkedIn, email, phone, WhatsApp, resume, X) |
| `src/data/projects.ts` | Your projects: text, numbers, tech stack, links, image |
| `src/data/content.ts` | Proof numbers, services, process, skills, experience, FAQ, tech ticker |

**Placeholder links stay hidden.** Any link that still points to `example.com` or `your-handle` is not shown on the site, so visitors never hit a dead page. Replace it with a real URL and it appears.

- **Resume button:** put your PDF at `public/resume.pdf`, then set `resume: "/resume.pdf"` in `src/data/site.ts`.
- **Project links:** set `live`, `code` and `case` for each project in `src/data/projects.ts`.
- **Project screenshots:** replace the images in `public/img/` (dark) and `public/img/light/` (light) with real screenshots, same file names, about 1100 x 688 px. The site shows the dark one in dark mode and the light one in light mode.
- **Your photo:** replace `public/avatar.jpg`. Share image for LinkedIn and WhatsApp: `public/og.png` (1200 x 630).

Every project also has its own page, for example `/projects/lead-radar`, which you can put on your resume.

## The AI assistant

The chat button calls `src/app/api/chat/route.ts`, which runs on the server. Your OpenAI key is never sent to the browser.

- Set `OPENAI_API_KEY` in `.env.local` (and in your host's environment settings). `OPENAI_MODEL` picks the model.
- It answers only from your own data (`src/lib/assistant.ts` builds the prompt from `src/data`).
- Without a key, or if OpenAI fails, it falls back to short built-in answers, so the button never breaks.
- It keeps at most 6 messages of context, 300 characters each, and allows about 12 questions per minute per visitor.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New, Project**, and import the repository. No build settings are needed.
3. Add the environment variables from `.env.example` (`OPENAI_API_KEY`, `OPENAI_MODEL`, `NEXT_PUBLIC_SITE_URL` set to your real address).
4. Deploy. Then put the address on your resume, LinkedIn and GitHub profile.

## Before you share it

- [ ] Replace placeholder links and screenshots (above).
- [ ] Make sure the numbers match your resume. The site says 80 REST APIs and a 16-person Agile team.
- [ ] Re-read the Lead Radar and Job Portal text. It must describe what you actually built.
