import sharp from 'sharp';

async function optimizeLogo() {
  try {
    // Create a properly sized logo for web use (max 600px wide)
    await sharp('./public/images/logo.webp')
      .resize(600, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 90 }) // Higher quality for logo
      .toFile('./public/images/logo-optimized.webp');

    console.log('✓ Logo optimized to 600px width');
    console.log('Please rename logo-optimized.webp to logo.webp');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

optimizeLogo();
