#!/usr/bin/env node
/**
 * generate-missing-cases.js
 * 
 * Generates EMR_DATA JS files for all CRT index entries that are missing case files.
 * Uses the Anthropic API to generate realistic, clinically accurate case data.
 * 
 * Usage: node scripts/generate-missing-cases.js [--slug <slug>] [--profession <prof>] [--limit <n>]
 * 
 * Options:
 *   --slug <slug>        Generate only a specific case
 *   --profession <prof>  Generate only cases for a specific profession
 *   --limit <n>          Limit to n cases (default: all)
 *   --dry-run            Show what would be generated without writing files
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const EMR_DATA_DIR = path.join(ROOT, 'emr-data');

// Parse CLI args
const args = process.argv.slice(2);
const getArg = (flag) => { const i = args.indexOf(flag); return i >= 0 ? args[i+1] : null; };
const hasFlag = (flag) => args.includes(flag);
const FILTER_SLUG = getArg('--slug');
const FILTER_PROF = getArg('--profession');
const LIMIT = getArg('--limit') ? parseInt(getArg('--limit')) : Infinity;
const DRY_RUN = hasFlag('--dry-run');

// Load CRT index
const crtSrc = fs.readFileSync(path.join(EMR_DATA_DIR, 'crt-index.js'), 'utf8');
const CRT = JSON.parse(crtSrc.match(/window\.CRT_INDEX\s*=\s*(\{[\s\S]+\});/)[1]);

// Non-case files to exclude from the file existence check
const NON_CASE = new Set(['crt-index','case-tokens','manifest','patient-names',
  'case-specialty-map','handoff-data','auto-handoff','day-progression',
  'day-evolution','coachdx-analytics','crt-data','dx-database','rdx-case-results']);

// Find all missing cases
const existingFiles = new Set(fs.readdirSync(EMR_DATA_DIR)
  .filter(f => f.endsWith('.js')).map(f => f.replace('.js', '')));

let targets = Object.entries(CRT)
  .filter(([slug]) => !existingFiles.has(slug))
  .filter(([slug]) => !FILTER_SLUG || slug === FILTER_SLUG)
  .filter(([, entry]) => !FILTER_PROF || entry.profession === FILTER_PROF)
  .slice(0, LIMIT);

if (targets.length === 0) {
  console.log('No missing cases to generate (or all already exist).');
  process.exit(0);
}

console.log(`Generating ${targets.length} case files...`);
if (DRY_RUN) console.log('DRY RUN — no files will be written\n');

// Load a reference case for the system prompt
const refCase = JSON.parse(
  fs.readFileSync(path.join(EMR_DATA_DIR, 'sepsisseptic-shock.js'), 'utf8')
    .match(/window\.EMR_DATA\s*=\s*(\{[\s\S]+\})\s*;/)[1]
);

// Call Anthropic API
async function callAnthropic(prompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }]
    });

    const headers = {
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01',
      'Content-Length': Buffer.byteLength(body)
    };
    if (apiKey) headers['x-api-key'] = apiKey;

    const req = https.request({
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) reject(new Error(parsed.error.message));
          else resolve(parsed.content[0].text);
        } catch(e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// Build a profession-aware context string
function professionContext(profession, profQuestion) {
  const ctx = {
    pt: 'physical therapy — focus on functional movement, rehabilitation milestones, musculoskeletal assessment, strength/ROM, gait, exercise prescription',
    ot: 'occupational therapy — focus on ADL performance, occupational profile, adaptive equipment, home safety, return to meaningful roles',
    pa: 'physician assistant — scope of practice, when to escalate to attending, primary care and urgent care clinical decision-making',
    dentistry: 'dentistry — oral health, dental anatomy, oral-systemic connections, dental procedures, medication impacts on oral health',
    nursing: 'nursing — patient surveillance, SBAR communication, medication safety, care coordination, patient education',
    optometry: 'optometry — ocular anatomy, fundoscopic findings, visual fields, intraocular pressure, systemic disease manifestations in the eye',
    pharmacy: 'pharmacy — pharmacokinetics, drug interactions, therapeutic drug monitoring, formulary decisions, patient counseling',
    mbs: 'medical and biosciences — molecular mechanisms, biochemical pathways, enzyme kinetics, cell biology, genetics',
    medicine: 'medicine — clinical reasoning, diagnosis, management, disposition',
    'vet-medicine': 'veterinary medicine — species-specific anatomy and physiology, comparative medicine, zoonotic disease, animal behavior, one-health perspective'
  };
  return ctx[profession] || `${profession} clinical practice`;
}

// Main prompt for case generation
function buildPrompt(slug, entry) {
  const setting = entry.category === 'cardiovascular' ? 'ED' : 
                  entry.acuity <= 1 ? 'ED' : 
                  entry.acuity === 3 ? 'outpatient' : 'inpatient ward';

  return `You are generating a clinical education case file for ReasonDx, an AI-powered clinical reasoning platform used by ${entry.profession} students and trainees.

Generate a complete EMR_DATA object for this case. Return ONLY valid JSON with no markdown, no backticks, no explanation.

CASE SPECS:
- Slug: ${slug}
- Chief complaint: ${entry.chiefComplaint}
- Diagnosis: The correct diagnosis should be strongly suggested but NOT explicitly stated in the chart
- Category: ${entry.category}
- Acuity: ${entry.acuity} (1=emergent, 2=urgent, 3=routine, 4=wellness)
- Profession: ${entry.profession} (${professionContext(entry.profession, entry.profQuestion)})
- Profession question context: ${entry.profQuestion}
- Setting: ${setting}
${entry.arcId ? `- IPE Arc: This case is part of the "${entry.arcLabel}" arc (arcId: ${entry.arcId}, position ${entry.arcOrder}). The same patient is seen by multiple professions.` : ''}
${entry.studyCase ? `- Research study case: biasTarget="${entry.biasTarget}", scriptConflict=${entry.scriptConflict}` : ''}

SCHEMA REQUIREMENTS (produce all these fields):
{
  "patient": {
    "name": "Full Name",
    "dob": "MM/DD/YYYY",
    "age": number,
    "sex": "Male|Female|Non-binary",
    "mrn": "RDX-2025-XXXXX",
    "pronouns": "She/Her|He/Him|They/Them",
    "insurance": "insurance name",
    "pcp": "Dr. Name, MD",
    "pharmacy": "pharmacy name and address",
    "language": "English",
    "chiefComplaint": "presenting complaint in patient's words",
    "race": "diverse and realistic",
    "address": "realistic Florida address",
    "phone": "(XXX) 555-XXXX",
    "email": "email@domain.com",
    "emergencyContact": {"name": "Name (Relationship)", "phone": "(XXX) 555-XXXX"}
  },
  "problems": [{"problem": string, "icd": string, "onset": "YYYY", "status": "Active", "notes": ""}],
  "medications": [{"name": string, "sig": string, "prescriber": "Dr. Name", "start": "MM/YYYY", "refills": number, "status": "Active"}],
  "allergies": [{"allergen": string, "type": "Drug|Food|Environmental", "reaction": string, "severity": "Mild|Moderate|Severe", "verified": "Yes"}],
  "vitals": [
    3 entries with dates (most recent first), each: {"date": "MM/DD/YYYY", "bp": "XXX/XX", "hr": number, "rr": number, "temp": "XX.X°F", "spo2": "XX%", "wt": "XXX lbs", "ht": "5'X\\"", "bmi": number, "setting": "ED|Office|Ward"}
  ],
  "visits": [
    2-3 prior visit notes with: {"date": string, "type": "ED|Office|Inpatient", "provider": string, "summary": string, "assessment": string, "plan": string}
  ],
  "labs": [
    {"date": string, "panel": "panel name", "results": [{"test": string, "value": string, "unit": string, "ref": string, "flag": "H|L|''"}]}
  ],
  "imaging": [
    {"date": string, "study": string, "indication": string, "findings": string, "impression": string}
  ],
  "immunizations": [
    {"vaccine": string, "date": string, "lot": string, "site": string}
  ],
  "familyHistory": [
    {"relation": string, "condition": string, "age": string}
  ],
  "socialHistory": {
    "smoking": string, "alcohol": string, "drugs": string, "occupation": string, "exercise": string, "diet": string, "livingArrangement": string
  },
  "meta": {
    "caseId": "${slug}",
    "diagnosis": "Full diagnosis name",
    "acuity": ${entry.acuity},
    "presentation": "${entry.displayTitle}",
    "category": "${entry.category}"
  },
  "guided": {
    "supported": true,
    "patientPersona": "2-3 sentences describing how this patient presents — emotional state, communication style, key behaviors that affect the interview",
    "interviewQuestions": [12-15 clinically relevant open and focused questions appropriate for ${entry.profession} to ask],
    "patientResponses": {
      "default": "Patient's default response when asked an unclear question",
      "key question 1": "specific response",
      ... (8-12 key question-response pairs that reveal the diagnosis through careful history)
    },
    "examManeuvers": [8-12 exam techniques relevant to this case and ${entry.profession}],
    "examFindings": {
      "General": "appearance finding",
      "Vitals": "vital sign interpretation",
      ... (relevant system findings, 6-10 total)
    },
    "ddxTargets": [
      "Correct diagnosis (clearly labeled)",
      5-6 realistic alternatives that share features with this presentation
    ],
    "biasFlags": {
      "anchoring": "If [specific anchoring pattern], flag anchoring. [What correct reasoning looks like]",
      "premature_closure": "If [closure pattern], flag premature closure.",
      "availability": "optional — if availability bias is relevant"
    },
    "coachPrompts": {
      "phase2": "Coach prompt after initial DDx (history only). Do not give the diagnosis. Ask about breadth.",
      "phase5": "Coach prompt after H&P complete. Reference {{ddx2}} and {{ddx5}}. Guide toward narrowing.",
      "phase7": "Coach prompt after results reviewed. Reference {{ddx5}}. Guide toward diagnosis.",
      "final": "Final debrief prompt. Reference diagnosis. Discuss key learning points for ${entry.profession}."
    }
  }
}

IMPORTANT RULES:
1. The chart must NOT explicitly state the diagnosis — the student must reason to it
2. Vitals, labs, and imaging must be consistent with the correct diagnosis
3. Labs and imaging should have realistic abnormal values (not all normal)
4. The patientResponses must reward good questioning — key historical clues should come from asking the right questions
5. For ${entry.profession}: exam maneuvers and exam findings must be appropriate for that profession's scope and setting
6. Patient demographics must be diverse and realistic for South Florida
7. The biasFlags must name specific things that would actually happen in this case
8. Return ONLY the JSON object, starting with { and ending with }`;
}

// Sleep helper for rate limiting
const sleep = ms => new Promise(r => setTimeout(r, ms));

// Progress tracking
const progressFile = path.join(__dirname, '.generate-progress.json');
let progress = { completed: [], failed: [] };
if (fs.existsSync(progressFile)) {
  try { progress = JSON.parse(fs.readFileSync(progressFile, 'utf8')); } catch(e) {}
}

// Skip already completed
targets = targets.filter(([slug]) => !progress.completed.includes(slug));
console.log(`${progress.completed.length} already done, ${targets.length} remaining\n`);

async function generateCase(slug, entry) {
  const prompt = buildPrompt(slug, entry);
  
  try {
    console.log(`  Generating ${slug} (${entry.profession})...`);
    const raw = await callAnthropic(prompt);
    
    // Strip any markdown fences
    const cleaned = raw.replace(/^```json\s*/,'').replace(/\s*```\s*$/,'').trim();
    
    // Validate JSON
    const data = JSON.parse(cleaned);
    
    // Basic validation
    if (!data.patient || !data.meta || !data.guided) {
      throw new Error('Missing required top-level keys');
    }
    if (!data.guided.supported) {
      throw new Error('guided.supported is not true');
    }
    if (!data.guided.ddxTargets || data.guided.ddxTargets.length < 3) {
      throw new Error('Insufficient ddxTargets');
    }
    
    // Write the file
    const output = `\nwindow.EMR_DATA = ${JSON.stringify(data, null, 2)};\n`;
    
    if (!DRY_RUN) {
      fs.writeFileSync(path.join(EMR_DATA_DIR, `${slug}.js`), output, 'utf8');
    }
    
    progress.completed.push(slug);
    if (!DRY_RUN) fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
    console.log(`  ✓ ${slug}`);
    return true;
    
  } catch(e) {
    console.log(`  ✗ ${slug}: ${e.message}`);
    progress.failed.push({ slug, error: e.message });
    if (!DRY_RUN) fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
    return false;
  }
}

async function main() {
  let success = 0, fail = 0;
  
  for (let i = 0; i < targets.length; i++) {
    const [slug, entry] = targets[i];
    console.log(`[${i+1}/${targets.length}] ${slug}`);
    
    const ok = await generateCase(slug, entry);
    if (ok) success++; else fail++;
    
    // Rate limiting: 1 request per 2 seconds
    if (i < targets.length - 1) await sleep(2000);
  }
  
  console.log(`\n=== Done: ${success} generated, ${fail} failed ===`);
  if (fail > 0) {
    console.log('Failed cases:', progress.failed.map(f => f.slug).join(', '));
    console.log('Re-run to retry failed cases.');
  }
  
  // Run token map regeneration if new cases were added
  if (success > 0 && !DRY_RUN) {
    console.log('\nToken map is already up to date (new cases are not in CRT index).');
    console.log('If you added new CRT entries, run: node scripts/gen-case-tokens.js');
  }
}

main().catch(console.error);
