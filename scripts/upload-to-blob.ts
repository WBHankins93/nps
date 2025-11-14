/**
 * Script to upload public assets to Vercel Blob Storage
 * 
 * Usage:
 * 1. Set BLOB_READ_WRITE_TOKEN in your .env.local file
 * 2. Run: npm run upload-assets
 * 
 * This will upload all files from the public folder to Vercel Blob Storage
 * and output the URLs that should be added to your environment variables.
 */

import { config } from 'dotenv';
import { resolve } from 'path';
import { put } from '@vercel/blob';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

// Load .env.local file
config({ path: resolve(process.cwd(), '.env.local') });

const PUBLIC_DIR = join(process.cwd(), 'public');

interface UploadResult {
  localPath: string;
  blobUrl: string;
  envVarName: string;
}

async function uploadFile(fileName: string): Promise<UploadResult | null> {
  const filePath = join(PUBLIC_DIR, fileName);
  const localPath = `/${fileName}`;
  
  // Skip if it's a directory or hidden file
  if (fileName.startsWith('.') || fileName.includes('node_modules')) {
    return null;
  }

  try {
    const fileBuffer = await readFile(filePath);
    const fileBlob = new Blob([fileBuffer]);
    
    // Upload to blob storage with public access
    const { url } = await put(fileName, fileBlob, {
      access: 'public',
      addRandomSuffix: false, // Keep original filename
    });

    // Generate environment variable name
    const envVarName = `NEXT_PUBLIC_BLOB_${fileName
      .replace(/[^a-zA-Z0-9]/g, '_')
      .replace(/_+/g, '_')
      .toUpperCase()
      .replace(/^_|_$/g, '')}`;

    return {
      localPath,
      blobUrl: url,
      envVarName,
    };
  } catch (error) {
    console.error(`Error uploading ${fileName}:`, error);
    return null;
  }
}

async function main() {
  // Check for BLOB_READ_WRITE_TOKEN
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN environment variable is not set.');
    console.log('\nTo get your token:');
    console.log('1. Go to your Vercel dashboard');
    console.log('2. Navigate to Storage > Your Blob Store');
    console.log('3. Copy the "BLOB_READ_WRITE_TOKEN"');
    console.log('4. Add it to your .env.local file');
    process.exit(1);
  }

  console.log('🚀 Starting upload to Vercel Blob Storage...\n');

  try {
    const files = await readdir(PUBLIC_DIR);
    const results: UploadResult[] = [];

    // Filter out directories and process files
    for (const file of files) {
      const result = await uploadFile(file);
      if (result) {
        results.push(result);
        console.log(`✅ Uploaded: ${file}`);
      }
    }

    console.log('\n' + '='.repeat(80));
    console.log('📋 Add these to your .env.local file:\n');
    
    results.forEach(({ envVarName, blobUrl }) => {
      console.log(`${envVarName}=${blobUrl}`);
    });

    console.log('\n' + '='.repeat(80));
    console.log(`\n✨ Successfully uploaded ${results.length} file(s)!\n`);
    console.log('Next steps:');
    console.log('1. Copy the environment variables above to your .env.local');
    console.log('2. Update lib/blob-config.ts with the new URLs (or use env vars)');
    console.log('3. Test your application');
    console.log('4. Remove files from public/ folder and commit .gitignore changes\n');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();

