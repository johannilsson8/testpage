# Mobile Timeline Starter

Small TypeScript starter for a mobile-first timeline page, tuned for Safari on iPhone 16 Pro in wide-screen use.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the local URL from your computer or a device on the same network.

## Notes

- The layout uses a wider centered shell sized for iPhone 16 Pro landscape and safe-area padding.
- Timeline entries are plain TypeScript data in `src/timeline.ts`.
- Put your image files in `public/images/` and point each event to them with `image: { src: "/images/your-file.jpg", alt: "Description" }`.
- The Vite dev server is configured to listen on `0.0.0.0` so it is easier to test on a phone.
