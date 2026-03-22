---
created: 2026-03-22T00:24:06.939Z
title: Integrate rockseo generator into Next.js build
area: tooling
files:
  - rockseo/generate-pages-from-gaps.mjs
  - next.config.ts
---

## Problem

The `rockseo` generator currently runs as a standalone script. It needs to be integrated more tightly with the Next.js build process to ensure sitemap precision and automated page generation during production builds. This will prevent inconsistencies between the generated SEO pages and the actual build state.

## Solution

Move the `rockseo` logic into a pre-build hook or a custom Next.js plugin to ensure it runs during `npm run build`. This might involve creating a wrapper script that runs the generator before calling `next build`.
