# Contact Form Setup Guide

This guide will help you set up the contact form with email sending.

## Prerequisites

- Resend account (free tier: 3,000 emails/month)

## Step 1: Set Up Resend

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Name it (e.g., "NOLA Pool Solutions")
5. Copy the API key

## Step 2: Add Environment Variables

Add this to your `.env.local` file:

```bash
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

## Step 3: Verify Domain (Optional for Production)

For production, you'll want to verify your domain with Resend:
1. Go to **Domains** in Resend dashboard
2. Add your domain
3. Add the DNS records provided
4. Update the `from` field in `app/api/contact/route.ts` to use your verified domain

For now, the form uses `onboarding@resend.dev` which works for testing.

## Step 4: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check:
   - `benhankins.work@gmail.com` should receive a test email
   - `nolapoolsolutions@gmail.com` should receive the client email
   - The confirmation modal should appear

**Note:** Form submissions are only sent via email. No data is stored in a database.

## Email Service: Resend

**Why Resend?**
- ✅ Free tier: 3,000 emails/month
- ✅ Easy integration with Next.js
- ✅ Modern API
- ✅ Good deliverability
- ✅ Simple setup

**Alternatives:**
- SendGrid (100 emails/day free)
- Mailgun (5,000 emails/month free for 3 months)
- Formspree (form service, 50 submissions/month free)

## Troubleshooting

### Emails not sending
- Check that `RESEND_API_KEY` is set correctly
- Verify the API key is active in Resend dashboard
- Check server logs for errors

### Modal not showing
- Check browser console for JavaScript errors
- Verify the form submission is successful (check Network tab)

## Production Notes

1. **Domain Verification**: Verify your domain with Resend for better deliverability
2. **Rate Limiting**: Consider adding rate limiting to prevent spam
3. **Email Validation**: The form already validates email format
4. **Error Handling**: Errors are displayed to users and logged server-side

