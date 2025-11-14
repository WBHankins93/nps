# How to Get Your Google Reviews Link

To get the proper Google Reviews URL (not just a search link), follow these steps:

## Method 1: Using Google Business Profile (Recommended)

1. **Go to your Google Business Profile**
   - Visit [business.google.com](https://business.google.com)
   - Sign in and select your business

2. **Get your Place ID**
   - In your Google Business Profile dashboard, go to "Info" section
   - Look for your Place ID (or find it in the URL when viewing your business on Google Maps)

3. **Create the Review URL**
   - Format: `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`
   - Example: `https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4`

## Method 2: Using Google Maps Short URL

1. **Find your business on Google Maps**
   - Search for "NOLA Pool Solutions" on Google Maps
   - Click on your business listing

2. **Get the short URL**
   - Look for a "Share" button
   - Copy the short URL (format: `https://g.page/r/YOUR_PLACE_ID/review`)
   - Or use: `https://g.page/r/YOUR_PLACE_ID/review`

## Method 3: Using Business Name Search (Fallback)

If you don't have a Place ID yet, you can use:
```
https://www.google.com/maps/place/?q=NOLA+Pool+Solutions+New+Orleans
```

This will take users to your business on Google Maps where they can leave a review.

## Adding to Your Site

Once you have your review URL, add it to your `.env.local` file:

```bash
NEXT_PUBLIC_GOOGLE_REVIEWS_URL=https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
```

Or update it directly in:
- `components/sections/ContactSection.tsx` (line ~246)
- `components/Footer.tsx` (line ~10)

## Current Implementation

The site currently uses a fallback URL that searches for your business. Once you have your actual Place ID, update the environment variable or the code directly.

## Testing

1. Click the "Leave Us A Review!" button in the footer
2. Or click "Write a Review" on the Contact page
3. Verify it takes you directly to the review page (not just a search)

