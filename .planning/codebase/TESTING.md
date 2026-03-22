# Testing & Quality

## Verification Loop
- **Build Verification**: `npm run build` is run before every major push to ensure static generation and type safety.
- **CI/CD**: Git hooks (via GSD) manage atomic commits and branch integrity.

## Test Suites
- `__tests__`: Contains Jest/Vitest-style component tests.
- **Production Audits**: The assistant uses `browser_subagent` to perform visual regressions and SEO audits on localhost.
