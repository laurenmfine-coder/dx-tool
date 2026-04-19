const crypto = require('crypto');
const fs = require('fs');

const SALT = 'rdx-v1-2026';

function slugToToken(slug) {
  const h = crypto.createHmac('sha256', SALT).update(slug).digest('hex');
  return h.slice(0,4) + '-' + h.slice(4,8);
}

const src = fs.readFileSync('emr-data/crt-index.js','utf8');
const match = src.match(/window\.CRT_INDEX\s*=\s*(\{[\s\S]+\});/);
const obj = JSON.parse(match[1]);
const slugs = Object.keys(obj);

const slugToTokenMap = {};
const tokenToSlugMap = {};

for (const slug of slugs) {
  const token = slugToToken(slug);
  slugToTokenMap[slug] = token;
  tokenToSlugMap[token] = slug;
}

// Check for collisions
const tokens = Object.values(slugToTokenMap);
const uniqueTokens = new Set(tokens);
if (tokens.length !== uniqueTokens.size) {
  console.error('COLLISION DETECTED!');
  process.exit(1);
}

console.log(`Generated ${tokens.length} unique tokens for ${slugs.length} slugs`);

const out = `// Auto-generated — do NOT edit by hand.
// Regenerate: node scripts/gen-case-tokens.js
// Salt: rdx-v1-2026 (keep constant — tokens must be stable across deploys)
window.RDX_CASE_TOKENS = ${JSON.stringify({slugToToken: slugToTokenMap, tokenToSlug: tokenToSlugMap}, null, 2)};
`;

fs.writeFileSync('emr-data/case-tokens.js', out);
console.log('Wrote emr-data/case-tokens.js');
