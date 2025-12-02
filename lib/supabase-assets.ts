/**
 * Supabase Asset URLs Configuration
 * 
 * This file contains the mapping of local file paths to Supabase Storage URLs.
 * After uploading files to Supabase Storage, update the URLs here or use environment variables.
 */

export const supabaseAssets = {
  // Images from nps-images folder
  'IMG_0108.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_0108_JPG || '/nps-images/IMG_0108.jpg',
  'IMG_0443.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_0443_JPG || '/nps-images/IMG_0443.jpg',
  'IMG_2109.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_2109_JPG || '/nps-images/IMG_2109.jpg',
  'IMG_2911.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_2911_JPG || '/nps-images/IMG_2911.jpg',
  'IMG_2988.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_2988_JPG || '/nps-images/IMG_2988.jpg',
  
  // Video from nps-images folder
  'IMG_2837.mp4': process.env.NEXT_PUBLIC_SUPABASE_IMG_2837_MP4 || '/nps-images/IMG_2837.mp4',
  
  // Images from nps-newest-images folder
  'IMG_5640.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_5640_JPG || '/nps-newest-images/IMG_5640.jpg',
  'IMG_5645.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_5645_JPG || '/nps-newest-images/IMG_5645.jpg',
  'IMG_5650.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_5650_JPG || '/nps-newest-images/IMG_5650.jpg',
  'IMG_5705.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_5705_JPG || '/nps-newest-images/IMG_5705.jpg',
  'IMG_5804.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_5804_JPG || '/nps-newest-images/IMG_5804.jpg',
  'IMG_5853.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_5853_JPG || '/nps-newest-images/IMG_5853.jpg',
  'IMG_6023.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_6023_JPG || '/nps-newest-images/IMG_6023.jpg',
  'IMG_6192.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_6192_JPG || '/nps-newest-images/IMG_6192.jpg',
  'IMG_6235.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_6235_JPG || '/nps-newest-images/IMG_6235.jpg',
  'IMG_6630.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_6630_JPG || '/nps-newest-images/IMG_6630.jpg',
  'IMG_6674.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_6674_JPG || '/nps-newest-images/IMG_6674.jpg',
  'IMG_6843.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_6843_JPG || '/nps-newest-images/IMG_6843.jpg',
  'IMG_7004.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_7004_JPG || '/nps-newest-images/IMG_7004.jpg',
  'IMG_7005.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_7005_JPG || '/nps-newest-images/IMG_7005.jpg',
  'IMG_7031.jpg': process.env.NEXT_PUBLIC_SUPABASE_IMG_7031_JPG || '/nps-newest-images/IMG_7031.jpg',
} as const;

/**
 * Get Supabase URL for an asset
 * Falls back to local path if Supabase URL is not set
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

