/**
 * Supabase Asset URLs Configuration
 * 
 * This file contains the mapping of local file paths to Supabase Storage URLs.
 * After uploading files to Supabase Storage, update the URLs here or use environment variables.
 */

export const supabaseAssets = {
  // Images from nps-images folder
  'IMG_0108.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_0108_JPG || '',
  'IMG_0443.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_0443_JPG || '',
  'IMG_2109.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_2109_JPG || '',
  'IMG_2911.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_2911_JPG || '',
  'IMG_2988.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_2988_JPG || '',
  
  // Video from nps-images folder
  'IMG_2837.mp4': process.env.NEXT_PUBLIC_SUPABASE_IMG_2837_MP4 || '',
} as const;

/**
 * Get Supabase URL for an asset
 */
export function getSupabaseAssetUrl(filename: string): string {
  return supabaseAssets[filename as keyof typeof supabaseAssets] || '';
}

/**
 * Get all available asset URLs
 */
export function getAllSupabaseAssets() {
  return Object.entries(supabaseAssets)
    .filter(([_, url]) => url) // Only return assets with URLs
    .map(([filename, url]) => ({ filename, url }));
}

