# Production Environment Variables Setup

This guide explains how to set up environment variables for production deployment.

## Required Environment Variable

### RESEND_API_KEY

This is required for the contact form to send emails.

## Setting Up RESEND_API_KEY

### Step 1: Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and sign in
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Name it (e.g., "NOLA Pool Solutions Production")
5. Copy the API key (starts with `re_`)

### Step 2: Add to Your Deployment Platform

#### For Vercel:

1. Go to your project in [Vercel Dashboard](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Click **Add New**
4. Add:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (paste the key you copied)
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**
6. **Important**: Redeploy your application for the changes to take effect

#### For Netlify:

1. Go to your site in [Netlify Dashboard](https://app.netlify.com)
2. Navigate to **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Add:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Scopes**: Select all (Production, Deploy previews, Branch deploys)
5. Click **Save**
6. **Important**: Trigger a new deploy for the changes to take effect

#### For Other Platforms:

Add `RESEND_API_KEY` as an environment variable in your platform's settings, then redeploy.

## Verifying the Setup

After adding the environment variable and redeploying:

1. Go to your live website's contact page
2. Fill out and submit the form
3. Check that:
   - The confirmation modal appears
   - You receive an email at `ben@sproutflow-studio.com`
   - The client receives an email at `nolapoolsolutions@gmail.com`

## Troubleshooting

### "Email service is not configured" Error

This means `RESEND_API_KEY` is not set or not accessible in production.

**Solutions:**
1. Verify the environment variable is set in your deployment platform
2. Make sure you redeployed after adding the variable
3. Check that the variable name is exactly `RESEND_API_KEY` (case-sensitive)
4. Verify the API key is valid in your Resend dashboard

### Emails Not Sending

1. Check your Resend dashboard for any errors or rate limits
2. Verify the API key is active (not revoked)
3. Check server logs for detailed error messages
4. Ensure you're using the correct email addresses

## Security Notes

- **Never commit** `.env.local` or environment variables to git
- Environment variables in deployment platforms are encrypted
- Rotate your API keys periodically
- Use different API keys for development and production if possible

