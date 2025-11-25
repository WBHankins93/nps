/**
 * Script to convert HEIC images to JPG and MOV to MP4, then upload to Supabase Storage
 * 
 * Usage:
 * 1. Set SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY in your .env.local file
 * 2. Run: npx tsx scripts/convert-and-upload-to-supabase.ts
 * 
 * Requirements:
 * - macOS with sips (built-in) for image conversion
 * - ffmpeg for video conversion (install via: brew install ffmpeg)
 */

import { config } from 'dotenv';
import { resolve } from 'path';
import { readdir, readFile, unlink } from 'fs/promises';
import { join } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { createClient } from '@supabase/supabase-js';

const execAsync = promisify(exec);

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

const SOURCE_DIR = join(process.cwd(), 'public/nps-images');
const BUCKET_NAME = 'nps-bucket'; // Supabase storage bucket name

interface ConversionResult {
  original: string;
  converted: string;
  type: 'image' | 'video';
}

async function convertHEICToJPG(filePath: string): Promise<string> {
  const outputPath = filePath.replace(/\.HEIC$/i, '.jpg');
  try {
    await execAsync(`sips -s format jpeg "${filePath}" --out "${outputPath}"`);
    console.log(`✅ Converted: ${filePath} → ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error);
    throw error;
  }
}

async function convertMOVToMP4(filePath: string): Promise<string> {
  const outputPath = filePath.replace(/\.MOV$/i, '.mp4');
  try {
    // Check if ffmpeg is available
    try {
      await execAsync('which ffmpeg');
    } catch {
      throw new Error('ffmpeg is not installed. Install it with: brew install ffmpeg');
    }

    // Convert with compression for web
    await execAsync(
      `ffmpeg -i "${filePath}" -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k -movflags +faststart "${outputPath}"`
    );
    console.log(`✅ Converted: ${filePath} → ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error);
    throw error;
  }
}

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
    console.log('\nTo get your Supabase credentials:');
    console.log('1. Go to your Supabase project dashboard');
    console.log('2. Navigate to Settings > API');
    console.log('3. Copy the "Project URL" and "service_role" key');
    console.log('4. Add them to your .env.local file');
    process.exit(1);
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('❌ SUPABASE_SERVICE_ROLE_KEY environment variable is not set.');
    console.log('\nThis is required for server-side uploads.');
    console.log('Get it from: Supabase Dashboard > Settings > API > service_role key');
    process.exit(1);
  }

  console.log('🚀 Starting conversion and upload to Supabase...\n');

  try {
    const files = await readdir(SOURCE_DIR);
    const results: Array<{ original: string; converted: string; supabaseUrl: string; type: string }> = [];

    // First, convert all files
    const conversions: ConversionResult[] = [];
    
    for (const file of files) {
      const filePath = join(SOURCE_DIR, file);
      const ext = file.split('.').pop()?.toUpperCase();
      
      if (ext === 'HEIC') {
        const converted = await convertHEICToJPG(filePath);
        conversions.push({ original: file, converted, type: 'image' });
      } else if (ext === 'MOV') {
        const converted = await convertMOVToMP4(filePath);
        conversions.push({ original: file, converted, type: 'video' });
      }
    }

    console.log('\n📤 Uploading converted files to Supabase...\n');

    // Upload converted files
    for (const { converted, type } of conversions) {
      const fileName = converted.split('/').pop()!;
      const supabaseUrl = await uploadToSupabase(converted, fileName);
      results.push({
        original: converted.split('/').pop()!.replace(/\.(jpg|mp4)$/i, ''),
        converted: fileName,
        supabaseUrl,
        type,
      });
      console.log(`✅ Uploaded: ${fileName}`);
    }

    console.log('\n' + '='.repeat(80));
    console.log('📋 Add these to your .env.local file:\n');
    
    results.forEach(({ converted, supabaseUrl, type }) => {
      const envVarName = `NEXT_PUBLIC_SUPABASE_${converted
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_+/g, '_')
        .toUpperCase()
        .replace(/^_|_$/g, '')}`;
      console.log(`${envVarName}=${supabaseUrl}`);
    });

    console.log('\n' + '='.repeat(80));
    console.log(`\n✨ Successfully converted and uploaded ${results.length} file(s)!\n`);
    console.log('Next steps:');
    console.log('1. Copy the environment variables above to your .env.local');
    console.log('2. Update lib/blob-config.ts or create a new config file for Supabase URLs');
    console.log('3. Test your application');
    console.log('4. Optionally delete the original HEIC/MOV files\n');

    // Ask if user wants to clean up original files
    console.log('💡 Note: Original HEIC/MOV files are still in public/nps-images/');
    console.log('   You can delete them after verifying the uploads work correctly.\n');

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();

