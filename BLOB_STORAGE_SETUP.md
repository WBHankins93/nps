# Vercel Blob Storage Setup Guide

This project uses Vercel Blob Storage for all images and videos to keep the repository lightweight and improve performance.

## Setup Instructions

### 1. Get Your Blob Storage Token

1. Go to your [Vercel Dashboard](https://vercel.com)
2. Navigate to **Storage** > Your Blob Store (e.g., `nola-pool-storage`)
3. Copy the **BLOB_READ_WRITE_TOKEN**
4. Add it to your `.env.local` file:

```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxxxxx
```

### 2. Upload Assets to Blob Storage

Run the upload script to migrate all files from the `public/` folder to Vercel Blob Storage:

```bash
npm run upload-assets
```

This script will:
- Upload all images and videos from the `public/` folder
- Output environment variables with the blob URLs
- Show you what to add to your `.env.local` file

### 3. Add Environment Variables

After running the upload script, copy the generated environment variables to your `.env.local` file. They will look like:

```bash
NEXT_PUBLIC_BLOB_LOGO_URL=https://xxx.public.blob.vercel-storage.com/logo-xxx.png
NEXT_PUBLIC_BLOB_SERVICES_BG_URL=https://xxx.public.blob.vercel-storage.com/services-background-xxx.jpg
# ... etc
```

### 4. Update Blob Config (Optional)

Alternatively, you can update `lib/blob-config.ts` directly with the blob URLs instead of using environment variables. The `getBlobUrl()` function will check environment variables first, then fall back to the hardcoded URLs.

### 5. Remove Files from Repository

Once everything is working:

1. Delete the media files from the `public/` folder (they're already in `.gitignore`)
2. Commit the changes:

```bash
git add .gitignore
git commit -m "Migrate assets to Vercel Blob Storage"
```

The files are already excluded from git via `.gitignore`, so they won't be committed.

## How It Works

- All image/video references use the `getBlobUrl()` function from `lib/blob-config.ts`
- The function checks for environment variables first (for production)
- Falls back to local paths during development if env vars aren't set
- This allows for seamless local development while using blob storage in production

## Adding New Assets

1. Add the file to `public/` temporarily
2. Run `npm run upload-assets` (or upload manually via Vercel dashboard)
3. Add the blob URL to `lib/blob-config.ts` or as an environment variable
4. Update your component to use `getBlobUrl('/your-file.jpg')`
5. Delete the file from `public/` (it's already gitignored)

## Video Support

Videos are also supported! The video file (`nps-cleaning.MP4`) will be uploaded and can be referenced using:

```typescript
const videoUrl = getBlobUrl('/nps-cleaning.MP4');
```

Then use it in a video element:

```tsx
<video src={videoUrl} controls />
```

