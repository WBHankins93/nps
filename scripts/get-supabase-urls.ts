/**
 * Quick script to get Supabase Storage URLs for uploaded files
 */

import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@supabase/supabase-js';

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

const BUCKET_NAME = 'nps-bucket';
const FILES = [
  'IMG_0108.jpg',
  'IMG_0443.jpg',
  'IMG_2109.jpg',
  'IMG_2837.mp4',
  'IMG_2911.jpg',
  'IMG_2988.jpg',
];

async function main() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !anonKey) {
    console.error('❌ NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, anonKey);

  console.log('📋 Supabase Storage URLs:\n');
  console.log('='.repeat(80));

  for (const file of FILES) {
    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(file);

    const envVarName = `NEXT_PUBLIC_SUPABASE_${file
      .replace(/[^a-zA-Z0-9]/g, '_')
      .replace(/_+/g, '_')
      .toUpperCase()
      .replace(/^_|_$/g, '')}`;

    console.log(`${envVarName}=${data.publicUrl}`);
  }

  console.log('='.repeat(80));
}

main();

