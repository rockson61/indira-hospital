# Deployment Guide: Indira Hospital Website

This guide outlines the steps to deploy the Indira Hospital website to production, ensuring all recent changes, including SEO improvements and Directus integration, are live.

## Prerequisites

1.  **Vercel Account**: Ensure you have access to the Vercel project connected to your GitHub repository.
2.  **Directus Access**: Admin access to your Directus CMS instance.
3.  **Environment Variables**: The production environment must have the correct variables set.

## 1. Environment Variables
Ensure the following variables are set in your Vercel project's **Settings > Environment Variables**:

| Variable | Description | Example Value |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | URL of your Directus instance | `https://your-directus-url.com` |
| `DIRECTUS_TOKEN` | Static Admin Token for SSG | `indira_xjok28g2qgd3j6pal6hbfd` |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the website | `https://www.indirasuperspecialityhospital.com` |

> [!CAUTION]
> **NEXT_PUBLIC_API_URL** and **DIRECTUS_TOKEN** are mandatory for the build to succeed. If they are missing or incorrectly set (e.g., to the string "undefined"), the build will fail with a "TypeError: Invalid URL" or a custom error message.

## 2. Directus Configuration (Already Applied)
We have already configured Directus to support the website's features:
- **Public Permissions**: `directus_files` and `posts` have Public Read access.
- **Data Models**: Collections for `doctors`, `departments`, `services`, `posts`, `health_packages`, etc., are set up.
- **Content**: Seed data has been populated.

## 3. Deployment Steps

### Option A: Automatic Deployment (Recommended)
1.  **Push Changes**: Commit and push the latest code to the `main` branch of your GitHub repository.
    ```bash
    git add .
    git commit -m "feat: Ready for production deployment"
    git push origin main
    ```
2.  **Monitor Vercel**: Vercel will automatically detect the commit and start a new build.
3.  **Verify**: Once the build turns **Green (active)**, visit the live URL to verify.

### Option B: Manual Deployment via CLI
If you prefer identifying issues locally first:
1.  Run a local production build:
    ```bash
    npm run build
    ```
2.  Start the production server locally:
    ```bash
    npm run start
    ```
3.  Deploy using Vercel CLI (if installed):
    ```bash
    vercel --prod
    ```

## 4. Post-Deployment Verification
After deployment, strictly check the following:

1.  **Images**: Ensure all images (doctors, technology, blogs) load correctly.
2.  **Blog**: Visit `/blog` and check if posts are visible.
3.  **International**: Check `/patients/international` and a country page (e.g., `/patients/international/bangladesh`).
4.  **Forms**: Test the "Book Appointment" form functionality.
5.  **SEO**: View Page Source on the Homepage and a Doctor profile to verify `<title>` and `<meta name="description">` tags are present.

## Troubleshooting
- **"TypeError: Invalid URL (input: 'undefined')"?**
  - This means `NEXT_PUBLIC_API_URL` is missing in Vercel settings. 
  - Go to **Vercel Dashboard > Settings > Environment Variables**.
  - Add `NEXT_PUBLIC_API_URL` with your full Directus URL (e.g., `https://cms.yourhospital.com`).
  - **Do not** put quotes around the URL.
  - Redeploy.

---
**Status**: ✅ Codebase is ready for deployment.
