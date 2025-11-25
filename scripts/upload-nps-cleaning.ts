/**
 * Script to upload nps-cleaning.MP4 to Supabase Storage
 */

import { config } from 'dotenv';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { createClient } from '@supabase/supabase-js';

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

const SOURCE_FILE = join(process.cwd(), 'public/nps-cleaning.MP4');
const BUCKET_NAME = 'nps-bucket';
const FILENAME = 'nps-cleaning.MP4';

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

  // Upload to Supabase Storage
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, fileBlob, {
      contentType: 'video/mp4',
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
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('❌ Supabase credentials not found in .env.local');
    process.exit(1);
  }

  console.log('🚀 Uploading nps-cleaning.MP4 to Supabase...\n');

  try {
    const url = await uploadToSupabase(SOURCE_FILE, FILENAME);
    console.log('✅ Uploaded successfully!\n');
    console.log('='.repeat(80));
    console.log('📋 Add this to your .env.local file:\n');
    console.log(`NEXT_PUBLIC_SUPABASE_NPS_CLEANING_MP4=${url}`);
    console.log('='.repeat(80));
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();

