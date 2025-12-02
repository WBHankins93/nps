/**
 * Script to convert images in nps-newest-images folder to web-compatible formats
 * - HEIC → JPG
 * - PNG → JPG (for web optimization)
 * - JPEG → JPG (rename extension)
 * 
 * Usage: npx tsx scripts/convert-nps-newest-images.ts
 * 
 * Requirements:
 * - macOS with sips (built-in) for image conversion
 */

import { readdir, rename, unlink } from 'fs/promises';
import { join } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

const SOURCE_DIR = join(process.cwd(), 'public/nps-newest-images');

async function convertHEICToJPG(filePath: string): Promise<string> {
  const outputPath = filePath.replace(/\.HEIC$/i, '.jpg');
  try {
    await execAsync(`sips -s format jpeg "${filePath}" --out "${outputPath}"`);
    await unlink(filePath); // Delete original file
    console.log(`✅ Converted: ${filePath.split('/').pop()} → ${outputPath.split('/').pop()}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error);
    throw error;
  }
}

async function convertPNGToJPG(filePath: string): Promise<string> {
  const outputPath = filePath.replace(/\.PNG$/i, '.jpg');
  try {
    await execAsync(`sips -s format jpeg "${filePath}" --out "${outputPath}"`);
    await unlink(filePath); // Delete original file
    console.log(`✅ Converted: ${filePath.split('/').pop()} → ${outputPath.split('/').pop()}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error);
    throw error;
  }
}

async function renameJPEGToJPG(filePath: string): Promise<string> {
  const outputPath = filePath.replace(/\.JPEG$/i, '.jpg');
  try {
    await rename(filePath, outputPath);
    console.log(`✅ Renamed: ${filePath.split('/').pop()} → ${outputPath.split('/').pop()}`);
    return outputPath;
  } catch (error) {
    console.error(`❌ Error renaming ${filePath}:`, error);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting conversion of nps-newest-images...\n');

  try {
    const files = await readdir(SOURCE_DIR);
    const conversions: Array<{ original: string; converted: string }> = [];

    for (const file of files) {
      const filePath = join(SOURCE_DIR, file);
      const ext = file.split('.').pop()?.toUpperCase();

      if (ext === 'HEIC') {
        const converted = await convertHEICToJPG(filePath);
        conversions.push({ original: file, converted: converted.split('/').pop()! });
      } else if (ext === 'PNG') {
        const converted = await convertPNGToJPG(filePath);
        conversions.push({ original: file, converted: converted.split('/').pop()! });
      } else if (ext === 'JPEG') {
        const converted = await renameJPEGToJPG(filePath);
        conversions.push({ original: file, converted: converted.split('/').pop()! });
      } else if (ext === 'JPG') {
        console.log(`ℹ️  Skipping ${file} (already JPG)`);
      } else {
        console.log(`⚠️  Skipping ${file} (unknown format: ${ext})`);
      }
    }

    console.log('\n' + '='.repeat(80));
    console.log(`\n✨ Successfully converted ${conversions.length} file(s)!\n`);
    
    if (conversions.length > 0) {
      console.log('Converted files:');
      conversions.forEach(({ original, converted }) => {
        console.log(`  ${original} → ${converted}`);
      });
      console.log('\n💡 Original files have been replaced with converted versions.');
      console.log('   All images are now in JPG format and ready for web use.\n');
    }

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();

