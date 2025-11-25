/**
 * Script to upload existing public assets to Supabase Storage
 * 
 * This migrates the existing images from public/ to Supabase Storage
 * for consistency with the new nps-images assets.
 * 
 * Usage: npx tsx scripts/upload-existing-assets-to-supabase.ts
 */

import { config } from 'dotenv';
import { resolve } from 'path';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { createClient } from '@supabase/supabase-js';

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

const SOURCE_DIR = join(process.cwd(), 'public');
const BUCKET_NAME = 'nps-bucket';

// Files to skip (keep local)
const SKIP_FILES = ['logo.png', '.gitkeep'];

async function uploadToSupabase(filePath: string, fileName: string): Promise<string> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  const fileBuffer = await readFile(filePath);
  const fileBlob = new Blob([fileBuffer]);
  
  // Determine content type
  const ext = fileName.split('.').pop()?.toLowerCase();
  const contentType = 
    ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' :
    ext === 'png' ? 'image/png' :
    ext === 'gif' ? 'image/gif' :
    ext === 'webp' ? 'image/webp' :
    ext === 'mp4' ? 'video/mp4' :
    'application/octet-stream';

  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, fileBlob, {
      contentType,
      upsert: true, // Overwrite if exists
    });

  if (error) {
    throw error;
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(fileName);

  return urlData.publicUrl;
}

async function main() {
  // Check for required environment variables
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.error('❌ NEXT_PUBLIC_SUPABASE_URL environment variable is not set.');
    process.exit(1);
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('❌ SUPABASE_SERVICE_ROLE_KEY environment variable is not set.');
    process.exit(1);
  }

  console.log('🚀 Starting upload of existing assets to Supabase...\n');

  try {
    const files = await readdir(SOURCE_DIR);
    const imageFiles = files.filter(file => {
      const ext = file.split('.').pop()?.toLowerCase();
      return (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp' || ext === 'mp4') 
        && !SKIP_FILES.includes(file);
    });

    if (imageFiles.length === 0) {
      console.log('ℹ️  No image files found to upload.');
      return;
    }

    console.log(`Found ${imageFiles.length} file(s) to upload:\n`);

    const results: Array<{ filename: string; url: string }> = [];

    for (const file of imageFiles) {
      const filePath = join(SOURCE_DIR, file);
      const url = await uploadToSupabase(filePath, file);
      results.push({ filename: file, url });
      console.log(`✅ Uploaded: ${file}`);
    }

    console.log('\n' + '='.repeat(80));
    console.log('📋 Environment variables for .env.local:\n');
    
    results.forEach(({ filename, url }) => {
      const envVarName = `NEXT_PUBLIC_SUPABASE_${filename
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_+/g, '_')
        .toUpperCase()
        .replace(/^_|_$/g, '')
        .replace(/_JPG$|_JPEG$|_PNG$|_GIF$|_WEBP$|_MP4$/, '')}`;
      console.log(`${envVarName}=${url}`);
    });

    console.log('\n' + '='.repeat(80));
    console.log(`\n✨ Successfully uploaded ${results.length} file(s)!\n`);
    console.log('Next steps:');
    console.log('1. Copy the environment variables above to your .env.local');
    console.log('2. Update lib/blob-config.ts or components to use Supabase URLs');
    console.log('3. Test your application');
    console.log('4. After verifying, you can delete the local files from public/ (they\'re gitignored)\n');

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();

