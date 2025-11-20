import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const portfolioDir = './public/images/portfolio';

async function optimizeImages() {
  try {
    const files = await readdir(portfolioDir);
    const pngFiles = files.filter(f => f.endsWith('.png') && f.startsWith('tfrco'));

    console.log(`Found ${pngFiles.length} TFRCO PNG files to optimize`);

    for (const file of pngFiles) {
      const inputPath = join(portfolioDir, file);
      const outputPath = join(portfolioDir, file.replace('.png', '.webp'));

      console.log(`Optimizing ${file}...`);

      await sharp(inputPath)
        .resize(1920, null, { // Max width 1920px, maintain aspect ratio
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✓ Created ${file.replace('.png', '.webp')}`);
    }

    console.log('\n✅ All images optimized!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

optimizeImages();
