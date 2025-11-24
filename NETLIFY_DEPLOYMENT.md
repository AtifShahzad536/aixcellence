# Netlify Deployment Guide

## 🚀 Quick Setup

### Step 1: Create Netlify Account & Connect GitHub

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select repository: `muhammadwahaib/aixcellence`
5. Netlify will auto-detect settings from `netlify.toml`

### Step 2: Configure Build Settings

Netlify will automatically detect:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### Step 3: Set Up GitHub Actions (Optional)

If you want to use GitHub Actions for deployment:

1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Add these secrets:

#### Required Secrets:

1. **NETLIFY_AUTH_TOKEN**
   - Get from: Netlify Dashboard → User settings → Applications → New access token
   - Create token with "Deploy" scope

2. **NETLIFY_SITE_ID**
   - Get from: Netlify Dashboard → Site settings → General → Site details
   - Copy the "Site ID"

### Step 4: Enable Netlify Analytics (Optional)

1. Netlify Dashboard → Site settings → Analytics
2. Enable "Netlify Analytics"
3. Update `index.html` with your actual Site ID in the analytics script

### Step 5: Environment Variables (If Needed)

1. Netlify Dashboard → Site settings → Environment variables
2. Add any required variables (e.g., `VITE_API_URL`)

## 📋 Configuration Files

### `netlify.toml`
- Build configuration
- Redirect rules for SPA routing
- Cache headers for static assets

### `.github/workflows/deploy.yml`
- GitHub Actions workflow for automated deployment
- Runs on push to `main` branch

## 🔧 Manual Deployment

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 🌐 Custom Domain

1. Netlify Dashboard → Domain settings
2. Add custom domain: `aixcellence.co`
3. Follow DNS configuration instructions
4. SSL certificate will be automatically provisioned

## 📊 Features

- **Automatic Deployments**: On every push to `main`
- **Preview Deployments**: On pull requests
- **Analytics**: Built-in Netlify Analytics
- **Form Handling**: Netlify Forms (if needed)
- **Edge Functions**: Available for serverless functions

## 🔗 Useful Links

- [Netlify Documentation](https://docs.netlify.com)
- [Netlify CLI](https://cli.netlify.com)
- [Netlify Analytics](https://docs.netlify.com/analytics/overview/)

---

For issues or questions, contact: hi@aixcellence.co

