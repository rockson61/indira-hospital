# Technical Concerns & Debt

## Performance
- **Build Times**: The project generates over 5000 static pages, causing long build durations (10+ minutes).
- **Static Generation**: High volume of dynamic routes necessitates aggressive caching and fallback strategies.

## Maintenance
- **Directus Dependency**: The site is heavily dependent on a specific Directus instance. Fallback data must be manually synchronized to prevent staleness.
- **Legacy Removal**: Ongoing effort to purge "Centres of Excellence" branding in favor of "Indira Elite Medical Units".

## Future Scalability
- **Scripted Generation**: The `rockseo` generator needs to be integrated more tightly with the Next.js build process to ensure sitemap precision.
