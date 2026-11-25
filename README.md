# BrainStim Centers Landing Page

Intake landing page for **BrainStim Centers** (Valencia, Calabasas, Van Nuys, Lancaster, Fremont) focused on neuro-navigated TMS for people whose medication hasn't helped.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- GoHighLevel embeds (`go.4tms.com`) for booking calendar + inquiry form

## Brand

Colors, type and photography follow [brainstimcenters.com](https://www.brainstimcenters.com/) and the logo: deep navy (`#1D2340`), amber (`#C98B2B` / `#E2A752`), mist (`#F4F5F8`), Libre Caslon Display + Public Sans.

## CTAs

- Primary: Book your Free Consultation → `#book` (calendar embed `NOhXkZBypjHrzJMxSxd1`)
- Primary: Call → click-to-call
- Secondary: Find out if you Qualify → `#qualify` (form `26rXAJztyxP9yNhOkEsk`, rendered inline)

## Before launch

- The brief says the Book CTA links to `brainstimcenters.com/consult.html`, but a calendar embed was also supplied. The page books on-page by default. To send visitors to the client's page instead, change `BOOK_HREF` in `src/lib/constants.ts`.
- The supplied form is named "TMS: New Web Inquiry + Params - Memory". Confirm it is the right form for this page.
- Clinical stats and insurer names are taken from the client's own site. Have the client confirm them.

## Develop

```bash
npm install
npm run dev
```
