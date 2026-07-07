# Mohammed Mehfil M M — Portfolio (Next.js 15)

Premium personal portfolio built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **lucide-react**.

## Run locally

```bash
npm install    # or: pnpm install / bun install / yarn
npm run dev
```

Open http://localhost:3000

## Build & start

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx      # <html>, fonts, metadata
  page.tsx        # Full portfolio (client component)
  globals.css     # Tailwind v4 + brand tokens
public/
  images/         # Portrait & casual photo
```

Fonts (Playfair Display, Inter, Montserrat) are loaded via Google Fonts in `layout.tsx`.
