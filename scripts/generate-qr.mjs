import QRCode from "qrcode";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const TARGET_URL = "https://your-first-web.netlify.app/";

// 1. Center Badge SVG: Official DevUp Emblem & Brand Typography
function getDevUpBadgeSvg(width = 280, height = 110) {
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer White Quiet-Zone Border so QR modules don't touch the logo -->
    <rect x="0" y="0" width="280" height="110" rx="18" fill="#FFFFFF" />
    
    <!-- Inner Dark Badge with Subtle Orange/Red Accent Border -->
    <rect x="5" y="5" width="270" height="100" rx="14" fill="#080B11" stroke="#FF6000" stroke-width="2.5"/>
    
    <!-- Official DevUp Orange Rocket Icon -->
    <g transform="translate(24, 18) scale(0.6)">
      <!-- Rocket Main Body & Swept-back Wings -->
      <path
        d="M50 8 C32 24 23 52 23 80 C23 85 19 94 8 98 C14 99 23 96 28 89 C33 93 41 95 50 95 C59 95 67 93 72 89 C77 96 86 99 92 98 C81 94 77 85 77 80 C77 52 68 24 50 8 Z"
        fill="#FF6000"
      />
      <!-- Circular White Porthole Window -->
      <circle cx="50" cy="48" r="11" fill="#FFFFFF" />
      <!-- Rocket Flame -->
      <path
        d="M41 98 C46 110 50 120 50 120 C50 120 54 110 59 98 C54 100 46 100 41 98 Z"
        fill="#FF6000"
      />
    </g>

    <!-- Typography -->
    <!-- "DevUP" -->
    <text x="96" y="58" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="34" letter-spacing="-0.5">
      Dev<tspan font-weight="900" fill="#FFFFFF">UP</tspan>
    </text>

    <!-- Subtitle: UPSKILL </> COLLAB -->
    <text x="98" y="80" fill="#CBD5E1" font-family="monospace, monospace" font-weight="700" font-size="11" letter-spacing="1.5">
      UPSKILL <tspan fill="#FF6000">&lt;/&gt;</tspan> COLLAB
    </text>
  </svg>
  `;
}

// 2. Circular Center Badge Variant
function getDevUpCircleBadgeSvg(size = 220) {
  return `
  <svg width="${size}" height="${size}" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer White Quiet Zone Circle -->
    <circle cx="110" cy="110" r="108" fill="#FFFFFF" />
    
    <!-- Inner Dark Circle with Orange Accent -->
    <circle cx="110" cy="110" r="98" fill="#080B11" stroke="#FF6000" stroke-width="3.5" />

    <!-- Rocket Icon Centered -->
    <g transform="translate(68, 28) scale(0.85)">
      <path
        d="M50 8 C32 24 23 52 23 80 C23 85 19 94 8 98 C14 99 23 96 28 89 C33 93 41 95 50 95 C59 95 67 93 72 89 C77 96 86 99 92 98 C81 94 77 85 77 80 C77 52 68 24 50 8 Z"
        fill="#FF6000"
      />
      <circle cx="50" cy="48" r="11" fill="#FFFFFF" />
      <path
        d="M41 98 C46 110 50 120 50 120 C50 120 54 110 59 98 C54 100 46 100 41 98 Z"
        fill="#FF6000"
      />
    </g>

    <!-- Text Below Rocket -->
    <text x="110" y="158" text-anchor="middle" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="28" letter-spacing="-0.5">
      DevUP
    </text>
    <text x="110" y="180" text-anchor="middle" fill="#94A3B8" font-family="monospace" font-weight="800" font-size="9" letter-spacing="1">
      UPSKILL &lt;/&gt; COLLAB
    </text>
  </svg>
  `;
}

async function generateQRCodes() {
  const publicDir = path.resolve("public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log(`Generating local offline branded QR codes for: ${TARGET_URL}`);

  // Base QR code buffer at 1024x1024 with Error Correction Level 'H' (High - 30% redundancy)
  const qrBaseBuffer = await QRCode.toBuffer(TARGET_URL, {
    errorCorrectionLevel: "H",
    type: "png",
    margin: 2,
    scale: 16,
    width: 1024,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  });

  // 1. Primary: Branded DevUp QR Code with Center Badge (1024x1024 PNG)
  const badgeWidth = 280;
  const badgeHeight = 110;
  const badgeSvg = getDevUpBadgeSvg(badgeWidth, badgeHeight);
  const badgeBuffer = Buffer.from(badgeSvg);

  const left = Math.round((1024 - badgeWidth) / 2);
  const top = Math.round((1024 - badgeHeight) / 2);

  const devUpQrBuffer = await sharp(qrBaseBuffer)
    .composite([{ input: badgeBuffer, top, left }])
    .png({ quality: 100 })
    .toBuffer();

  const brandedPngPath = path.join(publicDir, "qr-code-devup.png");
  fs.writeFileSync(brandedPngPath, devUpQrBuffer);
  console.log(`✓ Generated: ${brandedPngPath} (with DevUp badge centered)`);

  // Also write to default qr-code.png for instant use in app
  fs.writeFileSync(path.join(publicDir, "qr-code.png"), devUpQrBuffer);
  console.log(`✓ Updated: ${path.join(publicDir, "qr-code.png")}`);

  // 2. Circular Badge Variant (1024x1024 PNG)
  const circleSize = 220;
  const circleSvg = getDevUpCircleBadgeSvg(circleSize);
  const circleBuffer = Buffer.from(circleSvg);
  const circleOffset = Math.round((1024 - circleSize) / 2);

  const circleQrBuffer = await sharp(qrBaseBuffer)
    .composite([{ input: circleBuffer, top: circleOffset, left: circleOffset }])
    .png({ quality: 100 })
    .toBuffer();

  const circlePngPath = path.join(publicDir, "qr-code-devup-circle.png");
  fs.writeFileSync(circlePngPath, circleQrBuffer);
  console.log(`✓ Generated: ${circlePngPath}`);

  // 3. Vector SVG with Embedded DevUp Center Badge
  const rawSvg = await QRCode.toString(TARGET_URL, {
    errorCorrectionLevel: "H",
    type: "svg",
    margin: 2,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  });

  // In a 41x41 viewBox, center is (20.5, 20.5)
  // Embed a vector badge at center: width 11.2, height 4.4
  const centerSvgBadge = `
    <!-- Center DevUp Badge Vector Overlay -->
    <g transform="translate(14.9, 18.3)">
      <rect x="0" y="0" width="11.2" height="4.4" rx="0.7" fill="#FFFFFF"/>
      <rect x="0.2" y="0.2" width="10.8" height="4.0" rx="0.5" fill="#080B11" stroke="#FF6000" stroke-width="0.1"/>
      <polygon points="1.2,1.0 1.6,2.6 1.4,2.6 1.2,1.8 1.0,2.6 0.8,2.6" fill="#FF6000" />
      <circle cx="1.2" cy="1.9" r="0.2" fill="#FFFFFF"/>
      <text x="2.5" y="2.7" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="900" font-size="1.5">DevUP</text>
      <text x="2.5" y="3.6" fill="#CBD5E1" font-family="monospace" font-weight="700" font-size="0.55">UPSKILL COLLAB</text>
    </g>
  </svg>`;

  const brandedSvg = rawSvg.replace("</svg>", centerSvgBadge);
  const brandedSvgPath = path.join(publicDir, "qr-code-devup.svg");
  fs.writeFileSync(brandedSvgPath, brandedSvg);
  console.log(`✓ Generated: ${brandedSvgPath} (Vector SVG with DevUp badge)`);

  // Default qr-code.svg
  fs.writeFileSync(path.join(publicDir, "qr-code.svg"), brandedSvg);
  console.log(`✓ Updated: ${path.join(publicDir, "qr-code.svg")}`);

  // 4. Crimson variant with DevUp badge
  const crimsonBase = await QRCode.toBuffer(TARGET_URL, {
    errorCorrectionLevel: "H",
    type: "png",
    margin: 2,
    width: 1024,
    color: {
      dark: "#E52521",
      light: "#000000",
    },
  });

  const crimsonBadgeSvg = `
  <svg width="280" height="110" viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="280" height="110" rx="18" fill="#000000" />
    <rect x="5" y="5" width="270" height="100" rx="14" fill="#0E0E12" stroke="#E52521" stroke-width="2.5"/>
    <g transform="translate(24, 18) scale(0.6)">
      <path d="M50 8 C32 24 23 52 23 80 C23 85 19 94 8 98 C14 99 23 96 28 89 C33 93 41 95 50 95 C59 95 67 93 72 89 C77 96 86 99 92 98 C81 94 77 85 77 80 C77 52 68 24 50 8 Z" fill="#E52521"/>
      <circle cx="50" cy="48" r="11" fill="#FFFFFF" />
      <path d="M41 98 C46 110 50 120 50 120 C50 120 54 110 59 98 C54 100 46 100 41 98 Z" fill="#E52521"/>
    </g>
    <text x="96" y="58" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="34" letter-spacing="-0.5">
      Dev<tspan font-weight="900" fill="#E52521">UP</tspan>
    </text>
    <text x="98" y="80" fill="#CBD5E1" font-family="monospace" font-weight="700" font-size="11" letter-spacing="1.5">
      UPSKILL <tspan fill="#E52521">&lt;/&gt;</tspan> COLLAB
    </text>
  </svg>`;

  const crimsonBadgeBuffer = Buffer.from(crimsonBadgeSvg);
  const crimsonQrBuffer = await sharp(crimsonBase)
    .composite([{ input: crimsonBadgeBuffer, top, left }])
    .png({ quality: 100 })
    .toBuffer();

  const crimsonPngPath = path.join(publicDir, "qr-code-crimson.png");
  fs.writeFileSync(crimsonPngPath, crimsonQrBuffer);
  console.log(`✓ Generated: ${crimsonPngPath}`);

  console.log("\nAll DevUp-branded QR codes successfully generated locally!");
}

generateQRCodes().catch((err) => {
  console.error("Error generating QR codes:", err);
  process.exit(1);
});
