# Deployment Guide - Tayi Yoga Website

## ⚠️ IMPORTANT: Styling Not Loading?

This project uses **Cloudflare Workers with Assets**, which requires specific deployment configuration.

## Option 1: Deploy via Cloudflare Pages (Recommended)

### Configure Cloudflare Pages Dashboard

1. Go to your Cloudflare Pages project dashboard
2. Navigate to: **Settings → Builds & deployments**
3. Update the configuration:

   ```
   Build command: npm run build
   Build output directory: (leave blank or use "/")
   Root directory: (leave blank)
   ```

4. **IMPORTANT**: Under "Environment variables", ensure you have:
   - Framework preset: **None** (or leave as auto-detect)

5. **Save** and trigger a new deployment

### Why this matters:
- The build creates files in `dist/client/` and `dist/tayi_yoga/`
- Cloudflare needs to deploy the Worker bundle, not just static files
- The `wrangler.json` configuration points to the correct asset directory

## Option 2: Deploy via Wrangler CLI

If Cloudflare Pages auto-deployment continues to fail:

```bash
# Install wrangler globally (if not already installed)
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login

# Deploy the worker
npm run deploy
```

This will deploy directly using the Wrangler CLI, bypassing Pages.

## Verifying the Fix

After redeployment, you should see:
- ✅ Full navigation header with dropdown menus
- ✅ Styled buttons and cards
- ✅ Proper colors (earth tones, sand, leaf green)
- ✅ Responsive layout
- ✅ Smooth animations

## Current Build Output

The build creates:
- `dist/client/` - React app with CSS and JS bundles
- `dist/tayi_yoga/` - Worker bundle for Cloudflare
- All Tailwind CSS styles are in: `dist/client/assets/index-*.css`

## Need Help?

If styles still don't load after following these steps:
1. Check the browser console for 404 errors on CSS files
2. Verify the Cloudflare Pages build logs
3. Ensure the deployment used the correct build command
4. Try Option 2 (Wrangler CLI deployment) as a fallback
