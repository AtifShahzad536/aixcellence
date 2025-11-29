# Vercel Deployment Instructions

## Issue: GitHub User Permission Error

If you're getting "insufficient permissions" error for GitHub user `superman32432432`:

### Solution 1: Vercel Dashboard Settings

1. Go to Vercel Dashboard → Your Project → Settings → Git
2. Under "Deployment Protection":
   - Turn OFF "Only allow deployments from users with Vercel accounts"
   - Turn ON "Allow deployments from GitHub collaborators"
3. Save settings

### Solution 2: Manual Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login with your Vercel account (the one that has access)
vercel login

# Navigate to project directory
cd Aixcellece

# Deploy to production
vercel --prod
```

### Solution 3: Add GitHub User to Vercel Team

1. Vercel Dashboard → Team Settings → Members
2. Click "Invite Member"
3. Enter GitHub username: `superman32432432`
4. Send invitation

### Solution 4: Use GitHub Account with Vercel Access

Make sure you're pushing commits using the GitHub account that has Vercel access:

```bash
# Check current git user
git config user.name
git config user.email

# Update if needed (use your Vercel-linked GitHub account)
git config user.name "YourVercelLinkedUsername"
git config user.email "your-vercel-email@example.com"
```

## After Fixing

Once permissions are fixed, any push to `main` branch will automatically trigger Vercel deployment.







