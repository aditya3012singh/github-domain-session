import sharp from "sharp";
import fs from "fs";

async function generateInstagramPortrait() {
  const width = 1080;
  const height = 1350;

  const bg = await sharp("public/assets/real_images/spiderman_2.jpg")
    .resize(width, height, { fit: "cover", position: "center" })
    .modulate({ brightness: 0.65, contrast: 1.25, saturation: 1.1 })
    .toBuffer();

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="topVignette" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#000000" stop-opacity="0.95"/>
        <stop offset="40%" stop-color="#000000" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </linearGradient>

      <linearGradient id="bottomVignette" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#000000" stop-opacity="0.98"/>
        <stop offset="45%" stop-color="#000000" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </linearGradient>

      <linearGradient id="redGlow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#E52521" stop-opacity="0"/>
        <stop offset="50%" stop-color="#E52521" stop-opacity="1"/>
        <stop offset="100%" stop-color="#E52521" stop-opacity="0"/>
      </linearGradient>

      <radialGradient id="centerRadial" cx="50%" cy="38%" r="45%">
        <stop offset="0%" stop-color="#E52521" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#topVignette)" />
    <rect width="${width}" height="${height}" fill="url(#bottomVignette)" />
    <circle cx="540" cy="500" r="480" fill="url(#centerRadial)" />

    <rect x="36" y="36" width="${width - 72}" height="${height - 72}" fill="none" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1.5"/>
    <rect x="44" y="44" width="${width - 88}" height="${height - 88}" fill="none" stroke="#E52521" stroke-opacity="0.4" stroke-width="1"/>

    <path d="M36 70 L36 36 L70 36" fill="none" stroke="#E52521" stroke-width="4"/>
    <path d="M${width - 70} 36 L${width - 36} 36 L${width - 36} 70" fill="none" stroke="#E52521" stroke-width="4"/>
    <path d="M36 ${height - 70} L36 ${height - 36} L70 ${height - 36}" fill="none" stroke="#E52521" stroke-width="4"/>
    <path d="M${width - 70} ${height - 36} L${width - 36} ${height - 36} L${width - 36} ${height - 70}" fill="none" stroke="#E52521" stroke-width="4"/>

    <line x1="44" y1="460" x2="${width - 44}" y2="460" stroke="url(#redGlow)" stroke-width="2"/>

    <g transform="translate(70, 75)">
      <polygon points="12,0 24,18 18,18 12,9 6,18 0,18" fill="#E52521" />
      <text x="36" y="16" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" letter-spacing="4">DEVUP</text>
      <text x="145" y="16" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" letter-spacing="2">// UPSKILL COLLAB</text>
    </g>

    <text x="${width - 70}" y="92" text-anchor="end" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" letter-spacing="3">KIET FRESHMAN INDUCTION 2026</text>

    <text x="540" y="240" text-anchor="middle" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="15" letter-spacing="6">
      ORIGIN STORY // 2026
    </text>

    <text x="540" y="295" text-anchor="middle" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="52" letter-spacing="2">
      EVERY HERO HAS A FIRST DAY.
    </text>

    <text x="540" y="380" text-anchor="middle" fill="#E52521" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="88" letter-spacing="3">
      SPIDER-MAN:
    </text>
    <text x="540" y="445" text-anchor="middle" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="68" letter-spacing="4">
      YOUR FIRST WEB
    </text>

    <text x="540" y="505" text-anchor="middle" fill="#CBD5E1" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="16" letter-spacing="2">
      MASTER GIT &amp; GITHUB • DISCOVER YOUR TECH DOMAIN • 0 EXP REQUIRED
    </text>

    <g transform="translate(540, 720)">
      <rect x="-460" y="0" width="920" height="150" fill="#0A0A0C" fill-opacity="0.85" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1.5" rx="8"/>

      <text x="0" y="32" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="12" letter-spacing="4">
        EXPLORE 5 SPECIALIZED TECH DOMAINS
      </text>

      <g transform="translate(-420, 56)">
        <rect x="0" y="0" width="155" height="50" fill="#18181B" stroke="#E52521" stroke-width="1.5" rx="4"/>
        <text x="77" y="24" text-anchor="middle" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13">WEB DEV</text>
        <text x="77" y="40" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10">Next.js &amp; React</text>

        <rect x="170" y="0" width="155" height="50" fill="#18181B" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.5" rx="4"/>
        <text x="247" y="24" text-anchor="middle" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13">APP DEV</text>
        <text x="247" y="40" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10">Flutter &amp; Native</text>

        <rect x="340" y="0" width="160" height="50" fill="#18181B" stroke="#E52521" stroke-width="1.5" rx="4"/>
        <text x="420" y="24" text-anchor="middle" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13">AI &amp; ML</text>
        <text x="420" y="40" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10">Python &amp; LLMs</text>

        <rect x="515" y="0" width="155" height="50" fill="#18181B" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.5" rx="4"/>
        <text x="592" y="24" text-anchor="middle" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13">DSA / CP</text>
        <text x="592" y="40" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10">Logic &amp; Problem</text>

        <rect x="685" y="0" width="155" height="50" fill="#18181B" stroke="#E52521" stroke-width="1.5" rx="4"/>
        <text x="762" y="24" text-anchor="middle" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="13">UI/UX DESIGN</text>
        <text x="762" y="40" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="10">Figma &amp; Creative</text>
      </g>

      <text x="0" y="132" text-anchor="middle" fill="#E2E8F0" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" letter-spacing="1">
        ✦ HANDS-ON GITHUB WORKSHOP: MAKE YOUR VERY FIRST COMMIT ✦
      </text>
    </g>

    <g transform="translate(540, 910)">
      <rect x="-460" y="0" width="920" height="190" fill="#0E0E12" fill-opacity="0.95" stroke="#E52521" stroke-width="2" rx="10"/>

      <g transform="translate(-410, 32)">
        <text x="0" y="0" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" letter-spacing="2">DATE</text>
        <text x="0" y="34" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="26">15–16 SEPT</text>
        <text x="0" y="60" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="16">2026</text>
        <text x="0" y="80" fill="#64748B" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11">2-Day Initiative</text>
      </g>

      <line x1="-220" y1="25" x2="-220" y2="135" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>

      <g transform="translate(-180, 32)">
        <text x="0" y="0" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" letter-spacing="2">TIME</text>
        <text x="0" y="34" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="28">05:00 PM</text>
        <text x="0" y="60" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="17">TO 07:00 PM</text>
        <text x="0" y="80" fill="#64748B" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11">Both Days</text>
      </g>

      <line x1="20" y1="25" x2="20" y2="135" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>

      <g transform="translate(60, 32)">
        <text x="0" y="0" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" letter-spacing="2">VENUE</text>
        <text x="0" y="30" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="24">H BLOCK 106</text>
        <text x="0" y="56" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="15">KIET CAMPUS</text>
        <text x="0" y="78" fill="#64748B" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11">Delhi-NCR</text>
      </g>

      <line x1="240" y1="25" x2="240" y2="135" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1"/>

      <g transform="translate(270, 32)">
        <text x="0" y="0" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" letter-spacing="2">ELIGIBILITY</text>
        <text x="0" y="30" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="24">1ST YEARS</text>
        <text x="0" y="56" fill="#10B981" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="15">FREE ENTRY</text>
        <text x="0" y="78" fill="#64748B" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="11">Pass Required</text>
      </g>

      <line x1="-460" y1="145" x2="460" y2="145" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
      <text x="0" y="172" text-anchor="middle" fill="#E2E8F0" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="12" letter-spacing="2">
        REQUIRED: BRING YOUR LAPTOP • COLLEGE ID • NO PRIOR CODING EXPERIENCE REQUIRED
      </text>
    </g>

    <g transform="translate(450, 1145)">
      <rect x="-370" y="0" width="680" height="74" fill="#E52521" rx="6"/>
      <text x="-30" y="46" text-anchor="middle" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="25" letter-spacing="2">
        YOUR-FIRST-WEB.NETLIFY.APP
      </text>
    </g>

    <g transform="translate(905, 1130)">
      <rect x="-6" y="-6" width="116" height="116" fill="#FFFFFF" rx="6"/>
      <text x="52" y="125" text-anchor="middle" fill="#CBD5E1" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="10" letter-spacing="1">SCAN TO ENTER</text>
    </g>

    <text x="540" y="1275" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" letter-spacing="3">
      INSTAGRAM: @DEVUP.KIET  •  LINKEDIN: DEVUP KIET  •  GITHUB: DEVUP-COMMUNITY
    </text>
    <text x="540" y="1298" text-anchor="middle" fill="#64748B" font-family="Arial, Helvetica, sans-serif" font-weight="500" font-size="11" letter-spacing="1">
      KIET Group of Institutions, Delhi-NCR, Ghaziabad • DevUp Upskill Collab 2026
    </text>
  </svg>
  `;

  const qrOverlay = await sharp("public/qr-code.png")
    .resize(104, 104)
    .toBuffer();

  await sharp(bg)
    .composite([
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
      { input: qrOverlay, top: 1130, left: 905 }
    ])
    .png({ quality: 95 })
    .toFile("public/devup_instagram_poster.png");

  console.log("✓ devup_instagram_poster.png generated with embedded offline QR code");
}

async function generateSquarePoster() {
  const size = 1200;

  const bg = await sharp("public/assets/real_images/spiderman_2.jpg")
    .resize(size, size, { fit: "cover", position: "center" })
    .modulate({ brightness: 0.62, contrast: 1.25, saturation: 1.1 })
    .toBuffer();

  const svgOverlay = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sqTop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#000000" stop-opacity="0.95"/>
        <stop offset="50%" stop-color="#000000" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </linearGradient>

      <linearGradient id="sqBottom" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#000000" stop-opacity="0.98"/>
        <stop offset="50%" stop-color="#000000" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <rect width="${size}" height="${size}" fill="url(#sqTop)" />
    <rect width="${size}" height="${size}" fill="url(#sqBottom)" />

    <rect x="40" y="40" width="${size - 80}" height="${size - 80}" fill="none" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1.5"/>
    <rect x="48" y="48" width="${size - 96}" height="${size - 96}" fill="none" stroke="#E52521" stroke-opacity="0.4" stroke-width="1"/>

    <!-- Header -->
    <g transform="translate(80, 80)">
      <polygon points="12,0 24,18 18,18 12,9 6,18 0,18" fill="#E52521" />
      <text x="36" y="16" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="22" letter-spacing="4">DEVUP</text>
      <text x="145" y="16" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" letter-spacing="2">// UPSKILL COLLAB</text>
    </g>
    <text x="${size - 80}" y="98" text-anchor="end" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" letter-spacing="3">LINKEDIN OFFICIAL EVENT</text>

    <!-- Main Title -->
    <text x="600" y="240" text-anchor="middle" fill="#E52521" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="16" letter-spacing="6">
      ORIGIN STORY // 2026
    </text>
    <text x="600" y="300" text-anchor="middle" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="54" letter-spacing="2">
      EVERY HERO HAS A FIRST DAY.
    </text>
    <text x="600" y="380" text-anchor="middle" fill="#E52521" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="82" letter-spacing="3">
      SPIDER-MAN:
    </text>
    <text x="600" y="445" text-anchor="middle" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="64" letter-spacing="4">
      YOUR FIRST WEB
    </text>

    <!-- Tracks Strip -->
    <g transform="translate(600, 640)">
      <rect x="-510" y="0" width="1020" height="90" fill="#0A0A0C" fill-opacity="0.9" stroke="#E52521" stroke-width="1.5" rx="8"/>
      <text x="0" y="32" text-anchor="middle" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="20" letter-spacing="2">
        5 TECH DOMAINS • GIT &amp; GITHUB LAB • FIRST COMMIT EXPERIENCE
      </text>
      <text x="0" y="65" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" letter-spacing="2">
        WEB DEV  |  APP DEV  |  AI &amp; ML  |  DSA / CP  |  UI/UX DESIGN
      </text>
    </g>

    <!-- Bottom Metadata -->
    <g transform="translate(600, 780)">
      <rect x="-510" y="0" width="1020" height="170" fill="#0E0E12" fill-opacity="0.95" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.5" rx="10"/>

      <g transform="translate(-420, 40)">
        <text x="0" y="0" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" letter-spacing="2">DATE</text>
        <text x="0" y="36" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="28">15–16 SEPT 2026</text>
      </g>

      <g transform="translate(-50, 40)">
        <text x="0" y="0" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" letter-spacing="2">TIME</text>
        <text x="0" y="36" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="28">05:00 PM – 07:00 PM</text>
      </g>

      <g transform="translate(300, 40)">
        <text x="0" y="0" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" letter-spacing="2">VENUE</text>
        <text x="0" y="36" fill="#E52521" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="28">H BLOCK 106 (KIET)</text>
      </g>

      <line x1="-510" y1="110" x2="510" y2="110" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
      <text x="0" y="142" text-anchor="middle" fill="#E2E8F0" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" letter-spacing="2">
        EXCLUSIVELY FOR 1ST YEAR FRESHMEN • FREE ADMISSION • DIGITAL PASS CONFIRMATION
      </text>
    </g>

    <!-- CTA & QR Box -->
    <g transform="translate(510, 1000)">
      <rect x="-420" y="0" width="780" height="74" fill="#E52521" rx="6"/>
      <text x="-30" y="46" text-anchor="middle" fill="#FFFFFF" font-family="Impact, Arial Black, sans-serif" font-weight="900" font-size="27" letter-spacing="2">
        REGISTER: YOUR-FIRST-WEB.NETLIFY.APP
      </text>
    </g>

    <g transform="translate(1015, 985)">
      <rect x="-6" y="-6" width="116" height="116" fill="#FFFFFF" rx="6"/>
      <text x="52" y="125" text-anchor="middle" fill="#CBD5E1" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="10" letter-spacing="1">SCAN TO ENTER</text>
    </g>

    <text x="600" y="1145" text-anchor="middle" fill="#94A3B8" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="14" letter-spacing="3">
      DEVUP UPSKILL COLLAB  •  KIET GROUP OF INSTITUTIONS
    </text>
  </svg>
  `;

  const qrSqOverlay = await sharp("public/qr-code.png")
    .resize(104, 104)
    .toBuffer();

  await sharp(bg)
    .composite([
      { input: Buffer.from(svgOverlay), top: 0, left: 0 },
      { input: qrSqOverlay, top: 985, left: 1015 }
    ])
    .png({ quality: 95 })
    .toFile("public/devup_linkedin_poster.png");

  console.log("✓ devup_linkedin_poster.png generated with embedded offline QR code");
}

async function main() {
  await generateInstagramPortrait();
  await generateSquarePoster();
}

main().catch(console.error);
