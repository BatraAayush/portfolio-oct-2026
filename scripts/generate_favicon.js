const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ultra-bold, high-visibility AB favicon
// Designed with large optical weight so it is instantly readable in browser tabs
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
    <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
  </defs>

  <!-- Deep Obsidian Background Squircle -->
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>

  <!-- High-contrast Vibrant Accent Border -->
  <rect x="8" y="8" width="496" height="496" rx="88" fill="none" stroke="url(#blueAccent)" stroke-width="20"/>

  <!-- Subtle electric blue bottom accent bar for extra tech aesthetic -->
  <rect x="96" y="440" width="320" height="14" rx="7" fill="url(#blueAccent)"/>

  <!-- Big, Bold, Ultra-Visible "AB" Monogram -->
  <text 
    x="256" 
    y="352" 
    text-anchor="middle" 
    font-family="'Arial Black', Arial, 'Segoe UI', Impact, sans-serif" 
    font-size="330" 
    font-weight="900" 
    letter-spacing="-14" 
    fill="url(#textGrad)">AB</text>
</svg>`;

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'app');

  // Save SVG
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgIcon);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgIcon);
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgIcon);

  // Generate PNG sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    const buf = await sharp(Buffer.from(svgIcon))
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers[size] = buf;
    if (size === 180) {
      fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), buf);
    }
    if (size === 192) {
      fs.writeFileSync(path.join(publicDir, 'icon-192.png'), buf);
    }
    if (size === 512) {
      fs.writeFileSync(path.join(publicDir, 'icon-512.png'), buf);
    }
  }

  // Multi-resolution ICO (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = icoSizes.length;

  let offset = headerSize + (dirEntrySize * numImages);
  const dirEntries = [];
  const imageDataList = [];

  for (const s of icoSizes) {
    const png = pngBuffers[s];
    imageDataList.push(png);

    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(s === 256 ? 0 : s, 0); // width
    entry.writeUInt8(s === 256 ? 0 : s, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    dirEntries.push(entry);
    offset += png.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4); // number of images

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...imageDataList]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

  console.log('Successfully regenerated AB favicons with big visible font!');
}

run().catch(console.error);
