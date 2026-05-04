import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Max dimensions per image category
const CONFIGS = {
  'assets/home/home-hero.jpg':      { width: 1920, quality: 82 },
  'assets/home/cours-reformer.jpg': { width: 900,  quality: 80 },
  'assets/home/cours-mat.jpg':      { width: 900,  quality: 80 },
  'assets/home/cours-hot.jpg':      { width: 900,  quality: 80 },
  'assets/home/cours-yoga.jpg':     { width: 900,  quality: 80 },
  'assets/home/coffee-shop.jpg':    { width: 1200, quality: 80 },
  'assets/home/galerie-1.jpg':      { width: 800,  quality: 78 },
  'assets/home/galerie-2.jpg':      { width: 800,  quality: 78 },
  'assets/home/galerie-3.jpg':      { width: 800,  quality: 78 },
  'assets/home/galerie-4.jpg':      { width: 800,  quality: 78 },
  'assets/home/galerie-5.jpg':      { width: 800,  quality: 78 },
  'assets/home/shop-1.jpg':         { width: 700,  quality: 80 },
  'assets/home/shop-2.jpg':         { width: 700,  quality: 80 },
  'assets/home/shop-3.jpg':         { width: 700,  quality: 80 },
  'assets/home/class-passes.jpg':   { width: 1200, quality: 80 },
  'assets/club/banniere.jpg':       { width: 1920, quality: 82 },
  'assets/club/fondateurs-1.jpg':   { width: 900,  quality: 80 },
  'assets/club/fondateurs-2.jpg':   { width: 900,  quality: 80 },
  'assets/club/lieu-mouvement.jpg': { width: 1200, quality: 80 },
  'contact/contact-1.jpg':          { width: 900,  quality: 80 },
  'contact/contact-2.jpg':          { width: 900,  quality: 80 },
  'contact/contact-3.jpg':          { width: 900,  quality: 80 },
  'contact/contact-4.jpg':          { width: 900,  quality: 80 },
  'tarif/bloc-offres-speciales.jpg':{ width: 1200, quality: 80 },
};

let totalSavedBytes = 0;

async function optimizeImage(relPath, config) {
  const srcPath = join(ROOT, relPath);
  const webpPath = srcPath.replace(/\.jpg$/i, '.webp');

  try {
    const before = (await stat(srcPath)).size;

    // Compress JPEG in-place
    const jpegBuf = await sharp(srcPath)
      .resize({ width: config.width, withoutEnlargement: true })
      .jpeg({ quality: config.quality, mozjpeg: true })
      .toBuffer();

    // Write optimized WebP alongside
    await sharp(srcPath)
      .resize({ width: config.width, withoutEnlargement: true })
      .webp({ quality: config.quality - 2, effort: 6 })
      .toFile(webpPath);

    // Overwrite original JPEG
    await sharp(jpegBuf).toFile(srcPath);

    const after = (await stat(srcPath)).size;
    const webpSize = (await stat(webpPath)).size;
    const saved = before - after;
    totalSavedBytes += saved;

    console.log(`✓ ${relPath}`);
    console.log(`  JPEG: ${kb(before)} → ${kb(after)} (−${kb(saved)}) | WebP: ${kb(webpSize)}`);
  } catch (err) {
    console.error(`✗ ${relPath}: ${err.message}`);
  }
}

function kb(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}

console.log('🖼  Optimizing images...\n');
for (const [rel, cfg] of Object.entries(CONFIGS)) {
  await optimizeImage(rel, cfg);
}
console.log(`\n✅ Done — total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(1)}MB`);
