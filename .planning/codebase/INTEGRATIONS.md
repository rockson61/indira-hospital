# External Integrations

## Content Management System (CMS)
- **Directus**: Centralized source of truth for doctors, departments, and services.
- **Fallback System**: Local JSON/TS data files (`src/data`) are used to ensure resilience against CMS downtime.

## AI & Intelligence
- **Vercel AI SDK**: Orchestrates AI interactions.
- **OpenAI**: Powers dynamic content generation and assistant features.

## Medical Utilities
- **LSI-Linkify**: A custom internal utility (`src/lib/html-linkify.ts`) that automatically injects keyword bolding and internal links into clinical descriptions.
