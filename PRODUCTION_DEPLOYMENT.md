# Production Deployment Guide

This guide covers everything you need to deploy NOLA Pool Solutions to production.

## 🚀 Pre-Deployment Checklist

### 1. Upload All Assets to Supabase Storage

You need to upload **all** assets to Supabase Storage so they're available in production. Run these scripts locally:

#### Step 1: Upload existing public assets
```bash
npm run upload-existing-to-supabase
```

This uploads:
- All images from `public/` folder (except logo.png)
- The `nps-cleaning.MP4` video

#### Step 2: Upload nps-images folder
```bash
npm run upload-to-supabase
```

This uploads:
- All images from `public/nps-images/` folder
- Converts HEIC → JPG and MOV → MP4 if needed

#### Step 3: Upload logo (if needed)
If you want to use Supabase for the logo too, you can manually upload `logo.png` or modify the script.

**After running these scripts**, copy ALL the environment variables they output. You'll need them for production.

### 2. Collect All Required Environment Variables

You'll need to add these to your production hosting platform (Vercel, etc.):

#### Required Core Variables:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

#### Required Site Configuration:
```bash
NEXT_PUBLIC_SITE_URL=https://nolapoolsolutions.com
NEXT_PUBLIC_GOOGLE_REVIEWS_URL=https://g.page/r/YOUR_PLACE_ID/review
```

#### All Asset URLs (from upload scripts):
```bash
# From upload-existing-to-supabase script:
NEXT_PUBLIC_SUPABASE_SERVICES_BACKGROUND_JPG=https://...
NEXT_PUBLIC_SUPABASE_ZHIQIANG_WANG_UWB32BEONUW_UNSPLASH_JPG=https://...
NEXT_PUBLIC_SUPABASE_ARTEM_MILITONIAN_UYW6FZLLNL8_UNSPLASH_JPG=https://...
NEXT_PUBLIC_SUPABASE_POOL_MAINTENANCE_JPG=https://...
NEXT_PUBLIC_SUPABASE_EQUIPMENT_REPAIR_JPG=https://...
NEXT_PUBLIC_SUPABASE_POOL_RENOVATION_JPG=https://...
NEXT_PUBLIC_SUPABASE_ADONYI_GABOR_DFSDLVCZZ40_UNSPLASH_JPG=https://...
NEXT_PUBLIC_SUPABASE_JUBEO_HERNANDEZ_ZMWLGKPE1SG_UNSPLASH_JPG=https://...
NEXT_PUBLIC_SUPABASE_TIM_BERMUDEZ_SIIYCDSBDPE_UNSPLASH_JPG=https://...
NEXT_PUBLIC_SUPABASE_ADHEESHA_PARANAGAMA_KOYH8C_XLUQ_UNSPLASH_JPG=https://...
NEXT_PUBLIC_SUPABASE_NPS_CLEANING_MP4=https://...

# From upload-to-supabase script (nps-images):
NEXT_PUBLIC_SUPABASE_IMG_0108_JPG=https://...
NEXT_PUBLIC_SUPABASE_IMG_0443_JPG=https://...
NEXT_PUBLIC_SUPABASE_IMG_2109_JPG=https://...
NEXT_PUBLIC_SUPABASE_IMG_2837_MP4=https://...
NEXT_PUBLIC_SUPABASE_IMG_2911_JPG=https://...
NEXT_PUBLIC_SUPABASE_IMG_2988_JPG=https://...
```

**Note:** The exact variable names will be output by the scripts. Copy them exactly as shown.

### 3. Deploy to Vercel (or your hosting platform)

#### Option A: Vercel (Recommended)

1. **Push your code to GitHub** (make sure `.env.local` is NOT committed)

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables in Vercel:**
   - Go to your project settings
   - Navigate to **Settings** > **Environment Variables**
   - Add **ALL** the environment variables from Step 2 above
   - Make sure to add them for **Production**, **Preview**, and **Development** environments
   - Click "Save"

4. **Deploy:**
   - Vercel will automatically deploy
   - Or click "Deploy" in the dashboard

5. **Configure Custom Domain:**
   - Go to **Settings** > **Domains**
   - Add your custom domain (e.g., `nolapoolsolutions.com`)
   - Follow DNS configuration instructions

#### Option B: Other Platforms

For other platforms (Netlify, Railway, Render, etc.):

1. Add all environment variables in their dashboard
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Deploy

### 4. Verify Production Deployment

After deployment, check:

- ✅ All images load correctly (not broken images)
- ✅ Videos play correctly
- ✅ Contact form works
- ✅ All links work
- ✅ Site is accessible via custom domain
- ✅ SEO metadata is correct (check page source)

### 5. Post-Deployment (Optional Cleanup)

Once everything is working in production, you can optionally:

1. **Remove local files from `public/`** (they're already in `.gitignore`)
   - The app will use Supabase URLs instead
   - This keeps your repo lightweight

2. **Test that everything still works** after removing local files

## 🔒 Security Notes

- **NEVER commit** `.env.local` to git (already in `.gitignore`)
- **NEVER expose** `SUPABASE_SERVICE_ROLE_KEY` in client-side code (it's only used server-side)
- The `NEXT_PUBLIC_*` variables are safe to expose (they're public by design)

## 📝 Quick Reference

### Minimum Required for Production:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`
- All asset URL environment variables (from upload scripts)

### Optional but Recommended:
- `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` (for reviews link)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (if you need client-side Supabase access)

## 🆘 Troubleshooting

### Images not loading?
- Check that all environment variables are set in production
- Verify Supabase bucket is **Public**
- Check browser console for 404 errors

### Build fails?
- Make sure all required environment variables are set
- Check that Supabase credentials are correct
- Review build logs for specific errors

### Assets still using local paths?
- Verify environment variables are set correctly
- Check that variable names match exactly (case-sensitive)
- Clear build cache and redeploy

