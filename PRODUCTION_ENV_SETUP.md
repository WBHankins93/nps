# Production Environment Variables Setup

This guide explains how to set up environment variables for production deployment.

## Required Environment Variables

### RESEND_API_KEY (Required)

This is required for the contact form to send emails.

### RESEND_FROM_EMAIL (Optional - for production)

When using a verified domain, set this to your custom email address (e.g., `noreply@nolapoolsolutions.com`). If not set, defaults to `onboarding@resend.dev` which can only send to verified email addresses.

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

## Domain Verification (Required for Production)

**Important**: When using `onboarding@resend.dev`, Resend can only send emails to verified email addresses. To send to the client's email (`nolapoolsolutions@gmail.com`), you need to verify your domain.

### Step 1: Verify Your Domain in Resend

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **Add Domain**
3. Enter your domain: `nolapoolsolutions.com`
4. Resend will provide DNS records to add:
   - **SPF record** (TXT)
   - **DKIM record** (TXT)
   - **DMARC record** (TXT) - optional but recommended

### Step 2: Add DNS Records

1. Go to your domain registrar (where you manage DNS for nolapoolsolutions.com)
2. Add the DNS records provided by Resend
3. Wait for DNS propagation (usually 5-30 minutes, can take up to 48 hours)

### Step 3: Verify Domain Status

1. Go back to Resend dashboard → Domains
2. Wait for the domain status to show as "Verified" (green checkmark)

### Step 4: Update Environment Variables

Once your domain is verified:

1. Add a new environment variable:
   - **Key**: `RESEND_FROM_EMAIL`
   - **Value**: `noreply@nolapoolsolutions.com` (or any email using your verified domain)
2. Redeploy your application

### Alternative: Temporary Workaround

If you can't verify the domain immediately:
- Emails will be sent to `ben@sproutflow-studio.com` only
- The email will include a note to forward it to `nolapoolsolutions@gmail.com`
- This works for testing but requires manual forwarding

## Verifying the Setup

After adding the environment variable and redeploying:

1. Go to your live website's contact page
2. Fill out and submit the form
3. Check that:
   - The confirmation modal appears
   - You receive an email at `ben@sproutflow-studio.com`
   - If domain is verified: The client receives an email at `nolapoolsolutions@gmail.com`
   - If domain is NOT verified: Forward the email to `nolapoolsolutions@gmail.com`

## Troubleshooting

### "Email service is not configured" Error

This means `RESEND_API_KEY` is not set or not accessible in production.

**Solutions:**
1. Verify the environment variable is set in your deployment platform
2. Make sure you redeployed after adding the variable
3. Check that the variable name is exactly `RESEND_API_KEY` (case-sensitive)
4. Verify the API key is valid in your Resend dashboard

### "You can only send testing emails to your own email address" Error

This means you're trying to send to an unverified email address while using `onboarding@resend.dev`.

**Solutions:**
1. **Verify your domain** (recommended for production) - see "Domain Verification" section above
2. **Temporary workaround**: The form will send to `ben@sproutflow-studio.com` only. Forward emails manually to the client.

### Emails Not Sending

1. Check your Resend dashboard for any errors or rate limits
2. Verify the API key is active (not revoked)
3. Check server logs for detailed error messages
4. Ensure you're using the correct email addresses
5. If using custom domain, verify it's fully verified in Resend dashboard

## Security Notes

- **Never commit** `.env.local` or environment variables to git
- Environment variables in deployment platforms are encrypted
- Rotate your API keys periodically
- Use different API keys for development and production if possible

