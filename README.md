# gravolytics-site

Public site for **AE-Spooky** and the **Gravolytics** application.

This is a standalone Next.js site with a long-form, cinematic one-page layout built around:
- spacetime visualization
- gravity wells
- orbital mechanics
- anomaly triage
- AE-Spooky research aesthetics

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Run locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production build

### Build
```bash
npm run build
```

### Start
```bash
npm run start
```

## Notes
- The site is intentionally a **single-page scrolling experience**.
- Visual language is designed to feel futuristic, mysterious, and technically disciplined rather than campy.
- The current implementation uses layered gradients, orbital line motifs, gravity-well framing, and long-scroll section transitions.

## Project structure

```text
src/app/
  layout.tsx
  page.tsx
  globals.css
```

## Author
Built under AEAI / Alumicube Engineering direction.
