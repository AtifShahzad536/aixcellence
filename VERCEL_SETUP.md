# Vercel Deployment Setup Guide

## 🚀 Quick Setup

### Step 1: Connect GitHub Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose your repository: `muhammadwahaib/aixcellence`
5. Click **"Import"**

### Step 2: Configure Project Settings

Vercel will auto-detect:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

These are already configured in `vercel.json`, so no changes needed!

### Step 3: Set Environment Variables (Optional)

If you need environment variables (e.g., API URLs):

1. Go to **Project Settings** → **Environment Variables**
2. Add variables:
   - `VITE_API_URL` = `https://aixcbackend-production.up.railway.app` (if needed)

### Step 4: Deploy

1. Click **"Deploy"**
2. Vercel will automatically:
   - Install dependencies
   - Build the project
   - Deploy to production
   - Set up automatic deployments on every push to `main`

## ✅ Automatic Deployments

Once connected, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run builds automatically

## 🔧 Configuration Files

### `vercel.json`
- Already configured for Vite
- SPA routing enabled (all routes → `index.html`)
- Cache headers optimized for static assets
- Clean URLs enabled

### `.gitignore`
- `.vercel` folder is ignored (Vercel config)
- `dist` folder is ignored (build output)

## 📊 Monitoring

- **Deployments**: Check in Vercel Dashboard
- **Build Logs**: Available in each deployment
- **Analytics**: Available in Vercel Dashboard (if enabled)

## 🌐 Custom Domain

To add a custom domain:

1. Go to **Project Settings** → **Domains**
2. Add your domain: `aixcellence.co`
3. Follow DNS configuration instructions
4. Vercel will automatically configure SSL

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Verify `package.json` dependencies
- Ensure Node.js version is 18+

### Deployment Fails
- Check environment variables
- Verify `vercel.json` configuration
- Check GitHub repository permissions

### Network Errors
- Verify API URLs in environment variables
- Check CORS settings on backend
- Ensure backend is running and accessible

## 📝 Notes

- **No GitHub Actions needed** - Vercel handles deployments automatically
- **Preview deployments** - Every PR gets a preview URL
- **Instant rollbacks** - Rollback to any previous deployment with one click
- **Edge Network** - Automatic global CDN distribution

---

For more information, visit [Vercel Documentation](https://vercel.com/docs)






