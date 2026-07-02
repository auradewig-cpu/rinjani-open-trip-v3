import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'G:\\X-WebsiteKlien\\Rinjani Open Trip\\Rinjani Open Trip V3\\asset';
const outDir = 'G:\\X-WebsiteKlien\\Rinjani Open Trip\\Rinjani Open Trip V3\\asset-compressed';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(srcDir)
  .filter(f => f.toLowerCase().endsWith('.webp'))
  .sort();

const total = files.length;
let totalBefore = 0;
let totalAfter = 0;

for (let i = 0; i < total; i++) {
  const file = files[i];
  const srcPath = path.join(srcDir, file);
  const outPath = path.join(outDir, file);

  const beforeSize = fs.statSync(srcPath).size;
  totalBefore += beforeSize;

  const buf = await sharp(srcPath)
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 30 })
    .toBuffer();

  fs.writeFileSync(outPath, buf);

  const afterSize = fs.statSync(outPath).size;
  totalAfter += afterSize;

  if ((i + 1) % 20 === 0 || i === total - 1) {
    const pct = (((i + 1) / total) * 100).toFixed(0);
    console.log(`[${pct}%] Processed ${i + 1}/${total} files`);
  }
}

const beforeMB = (totalBefore / 1024 / 1024).toFixed(2);
const afterMB = (totalAfter / 1024 / 1024).toFixed(2);
const avgAfterKB = (totalAfter / 1024 / total).toFixed(1);
const saved = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);

console.log('\n--- Compression Report ---');
console.log(`Files        : ${total}`);
console.log(`Before       : ${beforeMB} MB (${(totalBefore/1024/total).toFixed(1)} KB avg)`);
console.log(`After        : ${afterMB} MB (${avgAfterKB} KB avg)`);
console.log(`Reduction    : ${saved}%`);
console.log(`Target check : avg ≤20KB? ${parseFloat(avgAfterKB) <= 20 ? 'YES' : 'NO'}  |  total ≤4MB? ${parseFloat(afterMB) <= 4 ? 'YES' : 'NO'}`);
