/**
 * Blob Storage Configuration
 * 
 * This file contains the mapping of local file paths to Vercel Blob Storage URLs.
 * After uploading files to Vercel Blob Storage, update the URLs here.
 * 
 * To upload files, run: npm run upload-assets
 */

export const blobUrls = {
  // Logo
  '/logo.png': process.env.NEXT_PUBLIC_BLOB_LOGO_PNG || '/logo.png',
  
  // Background images
  '/services-background.jpg': process.env.NEXT_PUBLIC_BLOB_SERVICES_BACKGROUND_JPG || '/services-background.jpg',
  '/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg': process.env.NEXT_PUBLIC_BLOB_ZHIQIANG_WANG_UWB32BEONUW_UNSPLASH_JPG || '/zhiqiang-wang-uWB32BEOnuw-unsplash.jpg',
  '/artem-militonian-UYW6FZLlnL8-unsplash.jpg': process.env.NEXT_PUBLIC_BLOB_ARTEM_MILITONIAN_UYW6FZLLNL8_UNSPLASH_JPG || '/artem-militonian-UYW6FZLlnL8-unsplash.jpg',
  
  // Service images
  '/pool-maintenance.jpg': process.env.NEXT_PUBLIC_BLOB_POOL_MAINTENANCE_JPG || '/pool-maintenance.jpg',
  '/equipment-repair.jpg': process.env.NEXT_PUBLIC_BLOB_EQUIPMENT_REPAIR_JPG || '/equipment-repair.jpg',
  '/pool-renovation.jpg': process.env.NEXT_PUBLIC_BLOB_POOL_RENOVATION_JPG || '/pool-renovation.jpg',
  
  // Gallery images
  '/adonyi-gabor-DfSDlvCZz40-unsplash.jpg': process.env.NEXT_PUBLIC_BLOB_ADONYI_GABOR_DFSDLVCZZ40_UNSPLASH_JPG || '/adonyi-gabor-DfSDlvCZz40-unsplash.jpg',
  '/jubeo-hernandez-ZmWLGkPe1Sg-unsplash.jpg': process.env.NEXT_PUBLIC_BLOB_JUBEO_HERNANDEZ_ZMWLGKPE1SG_UNSPLASH_JPG || '/jubeo-hernandez-ZmWLGkPe1Sg-unsplash.jpg',
  '/tim-bermudez-sIiyCDSbDpE-unsplash.jpg': process.env.NEXT_PUBLIC_BLOB_TIM_BERMUDEZ_SIIYCDSBDPE_UNSPLASH_JPG || '/tim-bermudez-sIiyCDSbDpE-unsplash.jpg',
  '/adheesha-paranagama-kOYh8C_xLUQ-unsplash.jpg': process.env.NEXT_PUBLIC_BLOB_ADHEESHA_PARANAGAMA_KOYH8C_XLUQ_UNSPLASH_JPG || '/adheesha-paranagama-kOYh8C_xLUQ-unsplash.jpg',
  
  // Video
  '/nps-cleaning.MP4': process.env.NEXT_PUBLIC_BLOB_NPS_CLEANING_MP4 || '/nps-cleaning.MP4',
} as const;

/**
 * Get blob URL for a local file path
 */
export function getBlobUrl(localPath: string): string {
  return blobUrls[localPath as keyof typeof blobUrls] || localPath;
}

