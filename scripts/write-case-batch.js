#!/usr/bin/env node
/**
 * write-case-batch.js
 * Reads a JSON array from stdin of {slug, ...EMR_DATA} objects
 * and writes each as emr-data/<slug>.js
 * 
 * Usage: node scripts/write-case-batch.js < cases.json
 */
const fs = require('fs');
const path = require('path');

const EMR_DIR = path.join(__dirname, '..', 'emr-data');
const PROGRESS_FILE = path.join(__dirname, '.generate-progress.json');

let progress = { completed: [], failed: [] };
try { progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')); } catch(e) {}

let input = '';
process.stdin.on('data', d => input += d);
process.stdin.on('end', () => {
  let cases;
  try {
    cases = JSON.parse(input);
  } catch(e) {
    console.error('Invalid JSON input:', e.message);
    process.exit(1);
  }

  let written = 0, skipped = 0, errors = 0;
  for (const c of cases) {
    const { slug, ...data } = c;
    if (!slug) { console.log('SKIP: no slug'); skipped++; continue; }
    
    try {
      // Basic validation
      if (!data.patient) throw new Error('missing patient');
      if (!data.meta) throw new Error('missing meta');
      if (!data.guided?.supported) throw new Error('guided.supported not true');
      if (!data.guided?.ddxTargets?.length || data.guided.ddxTargets.length < 3) throw new Error('insufficient ddxTargets');
      
      const outPath = path.join(EMR_DIR, `${slug}.js`);
      fs.writeFileSync(outPath, `\nwindow.EMR_DATA = ${JSON.stringify(data, null, 2)};\n`);
      
      if (!progress.completed.includes(slug)) progress.completed.push(slug);
      // Remove from failed if it was there
      progress.failed = progress.failed.filter(f => f.slug !== slug);
      
      console.log(`✓ ${slug}`);
      written++;
    } catch(e) {
      console.log(`✗ ${slug}: ${e.message}`);
      errors++;
    }
  }

  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
  console.log(`\nWritten: ${written}, Skipped: ${skipped}, Errors: ${errors}`);
});
