/**
 * rdx-og-image-worker.js
 * Dynamic OG image generation for ReasonDx topic, blog, and approach pages
 * Returns SVG-based social preview cards as PNG-compatible SVG
 * Deploy: wrangler deploy --config wrangler-og-image.toml
 */

const BRAND_BLUE = '#2874A6';
const BRAND_DARK = '#1f5f8b';
const WHITE = '#ffffff';
const SLATE = '#1e293b';
const MUTED = '#64748b';

// Topic category → emoji + color
const CATEGORY_MAP = {
  cardiology: { emoji: '❤️', color: '#dc2626', label: 'Cardiology' },
  pulmonology: { emoji: '🫁', color: '#2563eb', label: 'Pulmonology' },
  neurology: { emoji: '🧠', color: '#7c3aed', label: 'Neurology' },
  nephrology: { emoji: '🫘', color: '#0891b2', label: 'Nephrology' },
  gastroenterology: { emoji: '🩺', color: '#b45309', label: 'Gastroenterology' },
  endocrinology: { emoji: '⚗️', color: '#059669', label: 'Endocrinology' },
  'infectious-disease': { emoji: '🦠', color: '#dc2626', label: 'Infectious Disease' },
  hematology: { emoji: '🔴', color: '#dc2626', label: 'Hematology' },
  rheumatology: { emoji: '🦴', color: '#d97706', label: 'Rheumatology' },
  emergency: { emoji: '🚨', color: '#dc2626', label: 'Emergency Medicine' },
  surgery: { emoji: '🔪', color: '#475569', label: 'Surgery' },
  psychiatry: { emoji: '💭', color: '#7c3aed', label: 'Psychiatry' },
  pediatrics: { emoji: '👶', color: '#2874a6', label: 'Pediatrics' },
  pharmacology: { emoji: '💊', color: '#059669', label: 'Pharmacology' },
  'internal-medicine': { emoji: '🏥', color: '#2874a6', label: 'Internal Medicine' },
  blog: { emoji: '✍️', color: '#2874a6', label: 'Clinical Reasoning Blog' },
  approach: { emoji: '📋', color: '#0891b2', label: 'Clinical Approach' },
  default: { emoji: '🩺', color: BRAND_BLUE, label: 'Clinical Reasoning' },
};

function wrapText(text, maxChars) {
  if (text.length <= maxChars) return [text];
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars) {
      if (current) lines.push(current.trim());
      current = word;
    } else {
      current = (current + ' ' + word).trim();
    }
    if (lines.length >= 2) break;
  }
  if (current && lines.length < 3) lines.push(current.trim());
  if (lines.length === 3 && lines[2].length > maxChars - 3) {
    lines[2] = lines[2].substring(0, maxChars - 3) + '...';
  }
  return lines;
}

function generateOGImage(title, subtitle, category, type) {
  const cat = CATEGORY_MAP[category] || CATEGORY_MAP.default;
  const titleLines = wrapText(title, 36);
  const titleY1 = titleLines.length === 1 ? 280 : 255;
  const titleY2 = titleY1 + 52;

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${cat.color}"/>
      <stop offset="100%" style="stop-color:${BRAND_BLUE}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Accent bar top -->
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)"/>

  <!-- Left color accent -->
  <rect x="0" y="0" width="8" height="630" fill="${cat.color}" opacity="0.6"/>

  <!-- Grid lines decorative -->
  <line x1="0" y1="200" x2="1200" y2="200" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  <line x1="0" y1="400" x2="1200" y2="400" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  <line x1="400" y1="0" x2="400" y2="630" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  <line x1="800" y1="0" x2="800" y2="630" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

  <!-- Brand pill top left -->
  <rect x="60" y="52" width="160" height="36" rx="18" fill="${BRAND_BLUE}" opacity="0.9"/>
  <text x="140" y="75" font-family="system-ui,sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle" letter-spacing="1">REASONDX</text>

  <!-- Category pill -->
  <rect x="60" y="110" width="220" height="32" rx="6" fill="${cat.color}" opacity="0.2"/>
  <rect x="60" y="110" width="4" height="32" rx="2" fill="${cat.color}"/>
  <text x="76" y="131" font-family="system-ui,sans-serif" font-size="14" font-weight="600" fill="${cat.color}" letter-spacing=".5">${cat.label.toUpperCase()}</text>

  <!-- Emoji large -->
  <text x="1080" y="200" font-size="120" text-anchor="middle" opacity="0.15">${cat.emoji}</text>

  <!-- Title line 1 -->
  <text x="60" y="${titleY1}" font-family="Georgia,serif" font-size="52" font-weight="400" fill="white" opacity="0.97">${titleLines[0] || ''}</text>
  ${titleLines[1] ? `<text x="60" y="${titleY2}" font-family="Georgia,serif" font-size="52" font-weight="400" fill="white" opacity="0.97">${titleLines[1]}</text>` : ''}
  ${titleLines[2] ? `<text x="60" y="${titleY2 + 52}" font-family="Georgia,serif" font-size="52" font-weight="400" fill="white" opacity="0.97">${titleLines[2]}</text>` : ''}

  <!-- Subtitle -->
  <text x="60" y="${titleLines.length >= 2 ? 390 : 355}" font-family="system-ui,sans-serif" font-size="22" fill="rgba(255,255,255,0.55)">${subtitle}</text>

  <!-- Bottom bar -->
  <rect x="0" y="555" width="1200" height="75" fill="rgba(0,0,0,0.3)"/>
  <text x="60" y="600" font-family="system-ui,sans-serif" font-size="18" fill="rgba(255,255,255,0.5)">reasondx.com</text>
  <text x="1140" y="600" font-family="system-ui,sans-serif" font-size="18" fill="rgba(255,255,255,0.4)" text-anchor="end">Clinical Reasoning Education</text>

  <!-- Decorative circles -->
  <circle cx="1150" cy="450" r="200" fill="${cat.color}" opacity="0.04"/>
  <circle cx="1100" cy="500" r="120" fill="${BRAND_BLUE}" opacity="0.06"/>
</svg>`;
}

function getMetaFromUrl(url) {
  const path = new URL(url).pathname;

  // Blog articles
  if (path.includes('/blog/')) {
    const slug = path.split('/blog/')[1]?.replace('.html', '') || '';
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return { title, subtitle: 'ReasonDx Clinical Reasoning Blog', category: 'blog', type: 'blog' };
  }

  // Approach pages
  if (path.includes('approach-')) {
    const slug = path.split('approach-')[1]?.replace('.html', '') || '';
    const title = 'How to Approach ' + slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return { title, subtitle: 'Systematic Clinical Approach | ReasonDx', category: 'approach', type: 'approach' };
  }

  // Topic pages
  if (path.includes('/topics/')) {
    const slug = path.split('/topics/')[1]?.replace('.html', '') || '';
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    // Guess category from slug
    let category = 'default';
    if (/acs|afib|heart|cardiac|svt|valvular|tamponade/.test(slug)) category = 'cardiology';
    else if (/sepsis|pneumonia|tuberculosis|hiv|endocarditis/.test(slug)) category = 'infectious-disease';
    else if (/stroke|seizure|meningitis|ms|guillain|neuro/.test(slug)) category = 'neurology';
    else if (/aki|renal|kidney|hyponatremia|hyperkalemia/.test(slug)) category = 'nephrology';
    else if (/copd|asthma|pe|ards|pleural|pulmonary/.test(slug)) category = 'pulmonology';
    else if (/dka|diabetes|thyroid|adrenal|pituitary/.test(slug)) category = 'endocrinology';
    else if (/anaphylaxis|allergy|urticaria|angioedema/.test(slug)) category = 'default';
    else if (/pancreatitis|gi|liver|hepatitis|cirrhosis|cholecystitis/.test(slug)) category = 'gastroenterology';
    else if (/drug|medication|pharmacology|warfarin/.test(slug)) category = 'pharmacology';
    else if (/shock|trauma|burns|emergency|acls/.test(slug)) category = 'emergency';
    return { title, subtitle: 'Clinical Reasoning Module | ReasonDx', category, type: 'topic' };
  }

  // Board exam prep
  if (path.includes('board-exam')) {
    return { title: 'Board Exam Prep', subtitle: 'USMLE, NCLEX, NAPLEX, PANCE & More', category: 'default', type: 'landing' };
  }

  // For educators
  if (path.includes('for-educators')) {
    return { title: 'ReasonDx for Educators', subtitle: 'Clinical Reasoning Curriculum Tools', category: 'default', type: 'landing' };
  }

  // Default
  return { title: 'ReasonDx', subtitle: 'AI-Powered Clinical Reasoning Education', category: 'default', type: 'home' };
}

export default {
  async fetch(request) {
    const url = request.url;
    const { title, subtitle, category, type } = getMetaFromUrl(url);

    // Allow CORS
    const headers = {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
    };

    const svg = generateOGImage(title, subtitle, category, type);
    return new Response(svg, { headers });
  }
};
