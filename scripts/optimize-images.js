/**
 * Image Optimization Script for Zonca Global Investment
 *
 * This script automatically optimizes images for web usage:
 * - Resizes to specified dimensions
 * - Compresses JPG/PNG files
 * - Generates WebP versions
 * - Maintains aspect ratios
 *
 * Usage:
 *   node scripts/optimize-images.js
 *
 * Requirements:
 *   npm install --save-dev sharp
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '..', 'public', 'images-source'), // Raw images
  outputDir: path.join(__dirname, '..', 'public', 'images'),        // Optimized images

  // Image specifications
  specs: {
    products: {
      width: 800,
      height: 600,
      jpgQuality: 80,
      webpQuality: 75
    },
    projects: {
      width: 800,
      height: 600,
      jpgQuality: 85,
      webpQuality: 80
    },
    hero: {
      width: 1920,
      height: 1080,
      jpgQuality: 85,
      webpQuality: 80
    },
    team: {
      width: 800,
      height: 1000,
      jpgQuality: 90,
      webpQuality: 85
    }
  }
};

// Determine category from file path
function getCategory(filePath) {
  if (filePath.includes('products')) return 'products';
  if (filePath.includes('projects')) return 'projects';
  if (filePath.includes('hero')) return 'hero';
  if (filePath.includes('team')) return 'team';
  return 'products'; // default
}

// Optimize single image
async function optimizeImage(inputPath, outputPath, category) {
  const spec = CONFIG.specs[category];
  const fileName = path.basename(outputPath, path.extname(outputPath));
  const outputDir = path.dirname(outputPath);

  try {
    console.log(`📸 Processing: ${path.basename(inputPath)}`);

    // Read image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`   Original: ${metadata.width}×${metadata.height}, ${(metadata.size / 1024).toFixed(1)} KB`);

    // Resize and optimize JPG
    const jpgPath = path.join(outputDir, fileName + '.jpg');
    await image
      .resize(spec.width, spec.height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: spec.jpgQuality,
        progressive: true,
        mozjpeg: true
      })
      .toFile(jpgPath);

    const jpgStats = await fs.stat(jpgPath);
    console.log(`   ✅ JPG: ${spec.width}×${spec.height}, ${(jpgStats.size / 1024).toFixed(1)} KB`);

    // Generate WebP version
    const webpPath = path.join(outputDir, fileName + '.webp');
    await sharp(inputPath)
      .resize(spec.width, spec.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({
        quality: spec.webpQuality
      })
      .toFile(webpPath);

    const webpStats = await fs.stat(webpPath);
    console.log(`   ✅ WebP: ${spec.width}×${spec.height}, ${(webpStats.size / 1024).toFixed(1)} KB`);

    const savings = ((1 - webpStats.size / jpgStats.size) * 100).toFixed(1);
    console.log(`   💾 WebP savings: ${savings}%\n`);

    return { success: true, jpgSize: jpgStats.size, webpSize: webpStats.size };
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}\n`);
    return { success: false, error: error.message };
  }
}

// Get all image files recursively
async function getImageFiles(dir) {
  const files = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const subFiles = await getImageFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Directory doesn't exist yet
    console.warn(`⚠️  Directory not found: ${dir}`);
  }

  return files;
}

// Main execution
async function main() {
  console.log('🚀 Zonca Global Investment - Image Optimization');
  console.log('================================================\n');

  // Check if sharp is installed
  try {
    await import('sharp');
  } catch (e) {
    console.error('❌ Error: sharp is not installed');
    console.error('   Run: npm install --save-dev sharp');
    process.exit(1);
  }

  // Create output directories
  const dirs = ['products', 'projects', 'hero', 'team', 'patterns'];
  for (const dir of dirs) {
    const dirPath = path.join(CONFIG.outputDir, dir);
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`✅ Created: ${dirPath}`);
  }
  console.log('');

  // Get all source images
  const sourceImages = await getImageFiles(CONFIG.inputDir);

  if (sourceImages.length === 0) {
    console.log('⚠️  No source images found!');
    console.log(`   Place your images in: ${CONFIG.inputDir}`);
    console.log('   Following the structure: products/, projects/, hero/, team/\n');

    // Create example structure
    for (const dir of dirs) {
      await fs.mkdir(path.join(CONFIG.inputDir, dir), { recursive: true });
    }

    console.log('✅ Created example structure in images-source/');
    return;
  }

  console.log(`📂 Found ${sourceImages.length} images to optimize\n`);

  // Process each image
  let stats = { success: 0, failed: 0, totalJpg: 0, totalWebp: 0 };

  for (const inputPath of sourceImages) {
    const relativePath = path.relative(CONFIG.inputDir, inputPath);
    const outputPath = path.join(CONFIG.outputDir, relativePath);
    const outputDir = path.dirname(outputPath);

    // Create output directory
    await fs.mkdir(outputDir, { recursive: true });

    // Get category and optimize
    const category = getCategory(relativePath);
    const result = await optimizeImage(inputPath, outputPath, category);

    if (result.success) {
      stats.success++;
      stats.totalJpg += result.jpgSize;
      stats.totalWebp += result.webpSize;
    } else {
      stats.failed++;
    }
  }

  // Summary
  console.log('================================================');
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('================================================');
  console.log(`✅ Success: ${stats.success} images`);
  console.log(`❌ Failed: ${stats.failed} images`);
  console.log(`📦 Total JPG size: ${(stats.totalJpg / 1024).toFixed(1)} KB`);
  console.log(`📦 Total WebP size: ${(stats.totalWebp / 1024).toFixed(1)} KB`);

  if (stats.totalJpg > 0) {
    const totalSavings = ((1 - stats.totalWebp / stats.totalJpg) * 100).toFixed(1);
    console.log(`💾 Total WebP savings: ${totalSavings}%`);
  }

  console.log('\n✨ Optimization complete!\n');
}

// Run
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
