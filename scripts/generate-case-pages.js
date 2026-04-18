/**
 * generate-case-pages.js
 * Generates static SEO-optimized HTML pages for each ReasonDx clinical case.
 * Run: node scripts/generate-case-pages.js
 * Output: /cases/{case-id}/index.html
 */

const fs = require('fs');
const path = require('path');

// ── Load CRT_INDEX ──────────────────────────────────────────────────────────
const crtRaw = fs.readFileSync(path.join(__dirname, '../emr-data/crt-index.js'), 'utf8');
const match = crtRaw.match(/window\.CRT_INDEX\s*=\s*(\{[\s\S]*\});/);
if (!match) { console.error('Could not parse CRT_INDEX'); process.exit(1); }
const CRT_INDEX = eval('(' + match[1] + ')');

// ── Category labels ─────────────────────────────────────────────────────────
const CAT_LABELS = {
  cardiovascular:'Cardiovascular', pulmonary:'Pulmonary', neurologic:'Neurology',
  infectious:'Infectious Disease', gastrointestinal:'Gastroenterology', allergy:'Allergy & Immunology',
  allergy_immunology:'Allergy & Immunology', endocrine:'Endocrinology', toxicologic:'Toxicology',
  toxicology:'Toxicology', renal:'Nephrology', hematologic:'Hematology', hematology:'Hematology',
  emergency:'Emergency Medicine', rheumatologic:'Rheumatology', psychiatric:'Psychiatry',
  obstetric:'Obstetrics & Gynecology', pediatric:'Pediatrics', geriatric:'Geriatrics',
  musculoskeletal:'Musculoskeletal', ophthalmic:'Ophthalmology', dermatologic:'Dermatology',
  orthopedic:'Orthopedics', vascular:'Vascular Surgery', trauma:'Trauma',
  surgical:'Surgery', general:'General Medicine', genetics:'Genetics', pharmacologic:'Pharmacology',
  cardiology:'Cardiovascular', neurology:'Neurology', gi:'Gastroenterology',
  cardiac:'Cardiovascular', neurological:'Neurology', respiratory:'Pulmonary',
  cardiorenal:'Cardiovascular / Renal', anesthetic:'Anesthesia', oncologic:'Oncology',
  gynecologic:'Gynecology', environmental:'Environmental Medicine', urologic:'Urology',
  ent:'ENT', other:'General Medicine'
};

const ACUITY_LABELS = { 1:'Critical', 2:'Urgent', 3:'Intermediate', 4:'Non-Urgent', 5:'Routine' };
const PROF_LABELS = {
  medicine:'Medicine', pa:'Physician Assistant', pharmacy:'Pharmacy', pt:'Physical Therapy',
  ot:'Occupational Therapy', optometry:'Optometry', dentistry:'Dentistry', nursing:'Nursing',
  mbs:'Medical/Basic Sciences'
};

// ── Slug helpers ─────────────────────────────────────────────────────────────
function toSlug(id) {
  return id.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').trim('-');
}

function titleCase(str) {
  return (str || '').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function cleanTitle(c) {
  return c.displayTitle || (c.chiefComplaint || '').split('/')[0].trim();
}

// ── Build related cases (same category) ─────────────────────────────────────
function getRelated(id, cat, limit = 5) {
  return Object.entries(CRT_INDEX)
    .filter(([k, v]) => k !== id && (v.category === cat || v.cat === cat))
    .slice(0, limit)
    .map(([k, v]) => ({ id: k, title: cleanTitle(v), cat: v.category || v.cat }));
}

// ── Generate one case page ───────────────────────────────────────────────────
function generatePage(id, c) {
  const title = cleanTitle(c);
  const subtitle = c.displaySubtitle || '';
  const category = CAT_LABELS[c.category] || CAT_LABELS[c.cat] || 'Clinical Medicine';
  const acuity = ACUITY_LABELS[c.acuity] || 'Intermediate';
  const profession = PROF_LABELS[c.profession] || 'Medicine';
  const related = getRelated(id, c.category || c.cat);

  const pageTitle = `${titleCase(title)} — Clinical Reasoning Case | ReasonDx`;
  const metaDesc = `Practice clinical reasoning for ${titleCase(title)} in ${category}. AI-powered simulation with Dr. Patel guiding history, physical exam, and differential diagnosis. Free for medical students.`;

  const profQuestion = c.profQuestion || '';
  const chiefComplaint = c.chiefComplaint || title;
  const slug = toSlug(id);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<meta name="description" content="${metaDesc}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.reasondx.com/cases/${slug}/">
<link rel="icon" href="/favicon-32x32.png">

<!-- Open Graph -->
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="https://www.reasondx.com/cases/${slug}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="ReasonDx">

<!-- Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "${titleCase(title)} — Clinical Reasoning",
  "description": "${metaDesc}",
  "url": "https://www.reasondx.com/cases/${slug}/",
  "provider": {
    "@type": "Organization",
    "name": "ReasonDx",
    "url": "https://www.reasondx.com"
  },
  "educationalLevel": "Professional",
  "about": {
    "@type": "MedicalCondition",
    "name": "${titleCase(title)}"
  },
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "student"
  }
}
</script>

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EKCVJ1SMN3"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-EKCVJ1SMN3');</script>

<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0f1923;color:#e2e8f0;line-height:1.6}
  .topbar{background:#0a1520;border-bottom:1px solid rgba(255,255,255,.08);padding:14px 24px;display:flex;align-items:center;gap:12px}
  .logo{font-size:20px;font-weight:800;color:#fff;text-decoration:none}.logo span{color:#2874A6}
  .hero{max-width:860px;margin:0 auto;padding:48px 24px 32px}
  .breadcrumb{font-size:13px;color:rgba(255,255,255,.4);margin-bottom:16px}
  .breadcrumb a{color:rgba(255,255,255,.4);text-decoration:none}.breadcrumb a:hover{color:#2874A6}
  h1{font-size:clamp(24px,4vw,36px);font-weight:800;color:#fff;margin-bottom:8px;line-height:1.2}
  .subtitle{font-size:16px;color:rgba(255,255,255,.55);margin-bottom:24px}
  .badges{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:32px}
  .badge{padding:5px 12px;border-radius:20px;font-size:12px;font-weight:600;border:1px solid}
  .badge-cat{background:rgba(40,116,166,.15);color:#60A5FA;border-color:rgba(40,116,166,.3)}
  .badge-acuity-1,.badge-acuity-2{background:rgba(239,68,68,.12);color:#FCA5A5;border-color:rgba(239,68,68,.25)}
  .badge-acuity-3{background:rgba(234,179,8,.12);color:#FDE047;border-color:rgba(234,179,8,.25)}
  .badge-acuity-4,.badge-acuity-5{background:rgba(34,197,94,.12);color:#86EFAC;border-color:rgba(34,197,94,.25)}
  .badge-prof{background:rgba(168,85,247,.12);color:#C4B5FD;border-color:rgba(168,85,247,.25)}
  .cta-box{background:linear-gradient(135deg,#1a2f47,#142030);border:1px solid rgba(40,116,166,.3);border-radius:16px;padding:32px;margin-bottom:40px;text-align:center}
  .cta-box h2{font-size:22px;font-weight:700;margin-bottom:8px;color:#fff}
  .cta-box p{color:rgba(255,255,255,.6);font-size:14px;margin-bottom:20px}
  .cta-btn{display:inline-block;background:#2874A6;color:#fff;padding:14px 32px;border-radius:10px;font-size:16px;font-weight:700;text-decoration:none;transition:background .15s}
  .cta-btn:hover{background:#1B4F72}
  .content{max-width:860px;margin:0 auto;padding:0 24px 60px}
  .section{margin-bottom:36px}
  .section h2{font-size:18px;font-weight:700;color:#fff;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,.08)}
  .section p{color:rgba(255,255,255,.7);font-size:15px;line-height:1.7}
  .steps{list-style:none;counter-reset:steps}
  .steps li{counter-increment:steps;padding:10px 0 10px 44px;position:relative;color:rgba(255,255,255,.7);font-size:15px;border-bottom:1px solid rgba(255,255,255,.06)}
  .steps li:last-child{border-bottom:none}
  .steps li::before{content:counter(steps);position:absolute;left:0;top:10px;background:#2874A6;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700}
  .related{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
  .related-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px;text-decoration:none;transition:border-color .15s}
  .related-card:hover{border-color:#2874A6}
  .related-card-title{font-size:13px;font-weight:600;color:#fff;margin-bottom:4px}
  .related-card-cat{font-size:11px;color:rgba(255,255,255,.4)}
  footer{background:#0a1520;border-top:1px solid rgba(255,255,255,.08);padding:24px;text-align:center;font-size:13px;color:rgba(255,255,255,.3)}
  footer a{color:rgba(255,255,255,.4);text-decoration:none}
</style>
</head>
<body>

<div class="topbar">
  <a href="/" class="logo">Reason<span>Dx</span></a>
  <span style="color:rgba(255,255,255,.3);font-size:13px">Clinical Reasoning Education</span>
</div>

<div class="hero">
  <div class="breadcrumb">
    <a href="/">Home</a> / <a href="/browse.html">Cases</a> / <a href="/browse.html?cat=${encodeURIComponent(c.category || c.cat || '')}">${category}</a> / ${titleCase(title)}
  </div>
  <h1>${titleCase(title)}${subtitle ? ` — ${subtitle}` : ''}</h1>
  <p class="subtitle">Clinical reasoning simulation for healthcare students and educators</p>
  <div class="badges">
    <span class="badge badge-cat">${category}</span>
    <span class="badge badge-acuity-${c.acuity || 3}">${acuity}</span>
    <span class="badge badge-prof">${profession}</span>
  </div>
</div>

<div class="content">
  <div class="cta-box">
    <h2>Practice This Case</h2>
    <p>Work through the full clinical encounter with AI patient and attending. Free, no signup required.</p>
    <a href="/simulation-engine.html?case=${encodeURIComponent(id)}" class="cta-btn">▶ Start Simulation</a>
  </div>

  <div class="section">
    <h2>About This Case</h2>
    <p>This clinical reasoning case presents a patient with <strong>${chiefComplaint.toLowerCase()}</strong> in a ${category.toLowerCase()} context. Learners work through a structured 10-phase simulation covering initial differential, history-taking, physical examination, labs and imaging, and management planning.</p>
    ${profQuestion ? `<p style="margin-top:12px;font-style:italic;color:rgba(255,255,255,.5)">"${profQuestion}"</p>` : ''}
  </div>

  <div class="section">
    <h2>How the Simulation Works</h2>
    <ol class="steps">
      <li>Read the patient presentation and form your initial differential diagnosis</li>
      <li>Interview the AI patient to gather history and explore your hypotheses</li>
      <li>Perform a focused physical examination based on your differential</li>
      <li>Order appropriate labs and imaging, then interpret the results</li>
      <li>Revise your diagnosis and develop a management plan</li>
      <li>Receive personalized teaching feedback from your AI attending, Dr. Patel</li>
    </ol>
  </div>

  <div class="section">
    <h2>What You'll Learn</h2>
    <p>This case builds skills in systematic clinical reasoning, hypothesis-driven history-taking, appropriate test ordering, and evidence-based management. It is designed for <strong>${profession}</strong> students and practicing clinicians seeking to sharpen diagnostic thinking in ${category.toLowerCase()}.</p>
  </div>

  ${related.length > 0 ? `
  <div class="section">
    <h2>Related Cases in ${category}</h2>
    <div class="related">
      ${related.map(r => `
      <a href="/cases/${toSlug(r.id)}/" class="related-card">
        <div class="related-card-title">${titleCase(r.title)}</div>
        <div class="related-card-cat">${CAT_LABELS[r.cat] || r.cat}</div>
      </a>`).join('')}
    </div>
  </div>` : ''}

  <div class="section">
    <h2>About ReasonDx</h2>
    <p>ReasonDx is an AI-powered clinical reasoning education platform developed by Dr. Lauren Fine, MD, FAAAAI, Associate Professor and Assistant Dean of Clinical Skills Education at a leading medical school. The platform features 394 simulation cases across 10 health professions, designed to train the cognitive processes underlying accurate diagnosis.</p>
  </div>
</div>

<footer>
  <p>© 2026 ReasonDx · <a href="/terms.html">Terms</a> · <a href="/browse.html">Browse All Cases</a> · <a href="/for-educators.html">For Educators</a></p>
</footer>

</body>
</html>`;
}

// ── Main: generate all pages ─────────────────────────────────────────────────
const casesDir = path.join(__dirname, '../cases');
if (!fs.existsSync(casesDir)) fs.mkdirSync(casesDir);

let count = 0;
const sitemapEntries = [];

for (const [id, c] of Object.entries(CRT_INDEX)) {
  // Skip alias/stub entries
  if (!c.chiefComplaint && !c.displayTitle) continue;
  
  const slug = toSlug(id);
  const dir = path.join(casesDir, slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const html = generatePage(id, c);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  
  sitemapEntries.push(`  <url>
    <loc>https://www.reasondx.com/cases/${slug}/</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  
  count++;
}

// ── Append to sitemap ────────────────────────────────────────────────────────
const sitemapPath = path.join(__dirname, '../sitemap.xml');
let sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>';

// Remove existing case entries to avoid duplicates
sitemap = sitemap.replace(/\s*<url>\s*<loc>https:\/\/www\.reasondx\.com\/cases\/.*?<\/url>/gs, '');
sitemap = sitemap.replace('</urlset>', sitemapEntries.join('\n') + '\n</urlset>');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`✅ Generated ${count} case pages in /cases/`);
console.log(`✅ Updated sitemap.xml with ${count} case URLs`);
