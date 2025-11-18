# Deployment Guide

This guide will help you set up CI/CD pipeline for automatic deployment to Vercel.

## 🚀 Quick Start

### Step 1: Push to GitHub

```bash
git push -u origin main
```

### Step 2: Connect to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `muhammadwahaib/aixcellence`
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

Vercel will automatically:
- Build your project
- Deploy to production
- Set up automatic deployments on every push to `main`

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Step 3: Set Up GitHub Actions Secrets (For CI/CD)

If you want to use GitHub Actions for deployment, you need to add secrets:

1. Go to your GitHub repository: https://github.com/muhammadwahaib/aixcellence
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

#### Required Secrets:

1. **VERCEL_TOKEN**
   - Get it from: https://vercel.com/account/tokens
   - Create a new token with full access

2. **VERCEL_ORG_ID**
   - Get it from: https://vercel.com/account
   - Or run: `vercel whoami` and check your account settings

3. **VERCEL_PROJECT_ID**
   - After first deployment, find it in:
   - Vercel Dashboard → Your Project → Settings → General
   - Or run: `vercel inspect` in your project directory

### Step 4: Verify Deployment

After pushing to GitHub:
- GitHub Actions will run CI checks
- Vercel will automatically deploy (if connected via dashboard)
- Or GitHub Actions will deploy (if secrets are configured)

## 📋 CI/CD Pipeline Overview

### GitHub Actions Workflows

1. **CI Workflow** (`.github/workflows/ci.yml`)
   - Runs on every push and pull request
   - Installs dependencies
   - Type checks
   - Builds the project
   - Verifies build output

2. **Deploy Workflow** (`.github/workflows/deploy.yml`)
   - Runs on push to `main` branch
   - Builds the project
   - Deploys to Vercel production
   - Requires Vercel secrets to be configured

### Vercel Configuration

The `vercel.json` file configures:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: All routes redirect to `index.html`
- Cache headers for static assets
- Content-Type headers for sitemap and robots.txt

## 🔧 Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

## 🌐 Environment Variables

If you need environment variables:

1. Add them in Vercel Dashboard → Project Settings → Environment Variables
2. Or add them to `.env.local` (not committed to git)

## 📊 Monitoring

- **Vercel Dashboard**: Monitor deployments, analytics, and logs
- **GitHub Actions**: Check workflow runs in the "Actions" tab

## 🐛 Troubleshooting

### Build Fails

1. Check GitHub Actions logs
2. Verify `package.json` dependencies
3. Ensure Node.js version is 18+

### Deployment Fails

1. Check Vercel deployment logs
2. Verify `vercel.json` configuration
3. Ensure all secrets are set correctly

### GitHub Actions Not Running

1. Check if workflows are enabled in repository settings
2. Verify workflow files are in `.github/workflows/`
3. Check Actions tab for error messages

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

For issues or questions, contact: hi@aixcellenc.com

