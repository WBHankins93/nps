# Supabase Storage Setup Guide

This project uses Supabase Storage for images and videos instead of Vercel Blob Storage.

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be ready

### 2. Create a Storage Bucket

1. In your Supabase dashboard, go to **Storage**
2. Click **"New bucket"**
3. Name it: `nps-bucket`
4. Make it **Public** (so images/videos can be accessed without authentication)
5. Click **"Create bucket"**

### 3. Get Your Supabase Credentials

1. Go to **Settings** > **API**
2. Copy the following:
   - **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - **service_role** key (this is your `SUPABASE_SERVICE_ROLE_KEY` - keep this secret!)

### 4. Add Credentials to .env.local

Add these to your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**Important:** The `SUPABASE_SERVICE_ROLE_KEY` should NEVER be committed to git. It's already in `.gitignore`.

### 5. Convert and Upload Files

Run the conversion and upload script:

```bash
npm run upload-to-supabase
```

This script will:
- Convert HEIC images to JPG (using macOS `sips`)
- Convert MOV videos to MP4 (requires `ffmpeg` - install with `brew install ffmpeg`)
- Upload all converted files to Supabase Storage
- Output environment variables with the Supabase URLs

### 6. Install ffmpeg (if needed)

If you don't have ffmpeg installed:

```bash
brew install ffmpeg
```

### 7. Add Environment Variables

After running the upload script, copy the generated environment variables to your `.env.local` file.

## File Conversion

The script automatically converts:
- **HEIC images** → **JPG** (web-friendly format)
- **MOV videos** → **MP4** (web-friendly format with compression)

## Storage Structure

Files are stored in Supabase Storage bucket `nps-bucket` with their original filenames (converted extensions).

## Accessing Files

Files uploaded to Supabase Storage are accessible via public URLs like:
```
https://your-project.supabase.co/storage/v1/object/public/nps-bucket/filename.jpg
```

## Updating Your Code

After uploading, you can reference the files using the environment variables or directly via Supabase URLs. Update your components to use these URLs instead of local paths.

## Cleanup

After verifying everything works:
- You can delete the original HEIC/MOV files from `public/nps-images/`
- The converted JPG/MP4 files will remain there (they're gitignored)

