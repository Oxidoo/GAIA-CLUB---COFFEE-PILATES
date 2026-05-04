import { transformFileSync } from '@babel/core';
import { writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = join(__dirname, '..', 'components');

const files = readdirSync(COMPONENTS_DIR).filter(f => f.endsWith('.jsx'));

let totalIn = 0, totalOut = 0;
for (const f of files) {
  const inPath = join(COMPONENTS_DIR, f);
  const outPath = inPath.replace(/\.jsx$/, '.js');
  const inSize = statSync(inPath).size;

  const result = transformFileSync(inPath, {
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    compact: true,
    comments: false,
    babelrc: false,
    configFile: false,
  });

  writeFileSync(outPath, result.code);
  const outSize = statSync(outPath).size;
  totalIn += inSize;
  totalOut += outSize;
  console.log(`✓ ${f} → ${f.replace('.jsx', '.js')}  (${Math.round(inSize/1024)}KB → ${Math.round(outSize/1024)}KB)`);
}
console.log(`\nTotal: ${Math.round(totalIn/1024)}KB → ${Math.round(totalOut/1024)}KB`);
