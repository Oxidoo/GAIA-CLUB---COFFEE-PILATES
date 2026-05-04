// Concatenates all pre-transpiled component JS files into a single bundle.js
// Order matters: dependencies (shared) must come before consumers (home, etc.)
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '..');

const ORDER = [
  'components/shared.js',
  'components/home.js',
  'components/club.js',
  'components/cours.js',
  'components/tarifs.js',
  'components/contact.js',
  'components/tweaks.js',
  'components/speed-insights.js',
  'components/app.js',
];

const parts = ORDER.map(f => readFileSync(join(root, f), 'utf8'));
const bundle = parts.join('\n');
const dest = join(root, 'components/bundle.js');
writeFileSync(dest, bundle);

const kb = (bundle.length / 1024).toFixed(1);
console.log(`Bundle written: components/bundle.js (${kb} KB, ${ORDER.length} files)`);
