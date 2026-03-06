/**
 * CaseForge Builder — Cloudflare Worker
 * ═══════════════════════════════════════
 * AI-assisted custom case authoring for ReasonDx.
 * Parses unstructured clinical text into the EMR_DATA schema.
 *
 * Deploy: wrangler deploy --name caseforge-builder
 * Env vars: ANTHROPIC_API_KEY
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const MODEL = 'claude-sonnet-4-20250514';

const CASE_SCHEMA_PROMPT = `You are CaseForge, an AI assistant that creates structured EMR case data for the ReasonDx clinical reasoning platform. You convert unstructured clinical information into the exact JSON schema used by the Virtual EMR.

OUTPUT SCHEMA (respond with ONLY valid JSON, no markdown fences):
{
  "patient": {
    "name": "First Last",
    "dob": "MM/DD/YYYY",
    "age": "NN",
    "sex": "Male|Female",
    "pronouns": "he/him|she/her|they/them",
    "mrn": "RDX-2026-XXXXX",
    "language": "English",
    "race": "...",
    "phone": "(XXX) XXX-XXXX",
    "email": "...",
    "address": "...",
    "insurance": "...",
    "pcp": "Dr. Name, MD",
    "pharmacy": "...",
    "emergencyContact": {"name": "...", "phone": "...", "relationship": "..."},
    "chiefComplaint": "...",
    "diagnosis": "..."
  },
  "allergies": [{"allergen": "...", "reaction": "...", "severity": "mild|moderate|severe", "type": "drug|food|environmental"}],
  "immunizations": [{"name": "...", "date": "..."}],
  "familyHistory": ["..."],
  "socialHistory": [["Category", "Detail"], ...],
  "problems": [{"problem": "...", "icd": "...", "onset": "...", "status": "Active|Resolved", "notes": "..."}],
  "medications": [{"name": "...", "dose": "...", "route": "...", "frequency": "...", "indication": "..."}],
  "vitals": {"rows": [{"time": "...", "bp": "...", "hr": "...", "rr": "...", "temp": "...", "spo2": "...", "weight": "...", "pain": "..."}]},
  "hpi": "Full HPI paragraph...",
  "physicalExam": {
    "general": "...",
    "heent": "...",
    "neck": "...",
    "cardiovascular": "...",
    "pulmonary": "...",
    "abdomen": "...",
    "extremities": "...",
    "skin": "...",
    "neurologic": "..."
  },
  "labs": {
    "panel_name": {
      "title": "Panel Name",
      "rows": [{"test": "...", "value": "...", "unit": "...", "ref": "...", "flag": "H|L|C|null", "note": "..."}]
    }
  },
  "imaging": [{"type": "...", "findings": "...", "impression": "...", "ordered": "timestamp"}],
  "assessment": "Full assessment paragraph...",
  "plan": "Numbered plan...",
  "nursingNotes": [{"time": "...", "note": "..."}],
  "teachingPoints": {
    "keyLearning": ["Point 1", "Point 2", ...],
    "boardPearls": ["Pearl 1", "Pearl 2", ...]
  },
  "references": [
    {"id": "...", "title": "...", "authors": "...", "journal": "...", "year": NNNN, "url": "...", "openAccess": true, "validates": ["What this reference validates"]}
  ]
}

RULES:
1. Generate REALISTIC, de-identified patient data. Use fictional names, addresses, and contact info.
2. MRN format: RDX-2026-XXXXX (random 5-digit number).
3. All lab values must include reference ranges and appropriate flags (H/L/C for high/low/critical).
4. Physical exam should be comprehensive and consistent with the diagnosis.
5. Include AT LEAST 3 teaching points and 3 board pearls.
6. Include AT LEAST 1 open-access reference (StatPearls, PMC, CDC, WHO, AHA, etc.).
7. The case should be medically accurate and clinically realistic.
8. If the input is sparse, fill in realistic details that are consistent with the diagnosis.`;

const VALIDATE_PROMPT = `You are a medical content validator for CaseForge (ReasonDx). Review the provided EMR case data for:

1. CLINICAL ACCURACY: Are the labs, vitals, exam findings, and management consistent with the stated diagnosis?
2. COMPLETENESS: Are all required EMR sections populated with realistic data?
3. EDUCATIONAL VALUE: Are the teaching points and board pearls accurate and high-yield?
4. REFERENCE QUALITY: Are references genuinely open-access? Are URLs valid formats (ncbi.nlm.nih.gov, cdc.gov, etc.)?

OUTPUT FORMAT (ONLY valid JSON, no markdown fences):
{
  "valid": true/false,
  "score": 0.0-1.0,
  "issues": [
    {"section": "...", "severity": "error|warning|suggestion", "message": "..."}
  ],
  "suggestions": ["..."]
}`;

// ═══════════════════════════════════════
// AI CALL HELPER
// ═══════════════════════════════════════

async function callAI(apiKey, systemPrompt, userMessage, maxTokens = 4000) {
  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Anthropic API ${resp.status}: ${err}`);
  }

  const data = await resp.json();
  const text = data.content.map(b => b.text || '').join('\n').trim();
  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    throw new Error(`JSON parse failed: ${e.message}\nRaw: ${cleaned.substring(0, 500)}`);
  }
}

// ═══════════════════════════════════════
// REQUEST HANDLER
// ═══════════════════════════════════════

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'POST required' }), {
        status: 405,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    try {
      const body = await request.json();
      const { type } = body;

      if (!env.ANTHROPIC_API_KEY) {
        throw new Error('ANTHROPIC_API_KEY not configured');
      }

      let result;

      switch (type) {
        case 'parse': {
          // Parse unstructured clinical text into EMR_DATA schema
          const { text, diagnosis, specialty, difficulty } = body;
          if (!text) throw new Error('text is required');

          const prompt = [
            `Convert this clinical information into a complete EMR case:`,
            diagnosis ? `\nDIAGNOSIS: ${diagnosis}` : '',
            specialty ? `\nSPECIALTY: ${specialty}` : '',
            difficulty ? `\nTARGET DIFFICULTY: ${difficulty}/5` : '',
            `\nCLINICAL INFORMATION:\n${text}`,
          ].filter(Boolean).join('\n');

          result = await callAI(env.ANTHROPIC_API_KEY, CASE_SCHEMA_PROMPT, prompt, 6000);
          break;
        }

        case 'enhance': {
          // Take a partially completed case and fill in missing sections
          const { caseData, fillSections } = body;
          if (!caseData) throw new Error('caseData is required');

          const prompt = `This is a partially completed EMR case. Fill in the missing or incomplete sections while maintaining consistency with existing data. ${fillSections ? `Focus on: ${fillSections.join(', ')}` : 'Complete all empty sections.'}\n\nEXISTING CASE DATA:\n${JSON.stringify(caseData, null, 2)}`;

          result = await callAI(env.ANTHROPIC_API_KEY, CASE_SCHEMA_PROMPT, prompt, 6000);
          break;
        }

        case 'validate': {
          // Validate a complete case for clinical accuracy
          const { caseData: valCase } = body;
          if (!valCase) throw new Error('caseData is required');

          const prompt = `Validate this EMR case for clinical accuracy, completeness, and educational value:\n\n${JSON.stringify(valCase, null, 2)}`;

          result = await callAI(env.ANTHROPIC_API_KEY, VALIDATE_PROMPT, prompt, 2000);
          break;
        }

        case 'generate-teaching': {
          // Generate teaching points and board pearls from case data
          const { caseData: teachCase, diagnosis: teachDx } = body;
          if (!teachCase && !teachDx) throw new Error('caseData or diagnosis required');

          const prompt = `Generate comprehensive teaching points and board-style pearls for this case. Include at least 5 key learning points and 5 board pearls.\n\n${teachCase ? `CASE DATA:\n${JSON.stringify(teachCase, null, 2)}` : `DIAGNOSIS: ${teachDx}`}`;

          const teachResult = await callAI(env.ANTHROPIC_API_KEY, 
            `You generate educational content for medical cases. Output ONLY valid JSON:\n{"keyLearning": ["point1", ...], "boardPearls": ["pearl1", ...]}`,
            prompt, 2000);
          result = teachResult;
          break;
        }

        case 'suggest-references': {
          // Suggest open-access references for a case
          const { diagnosis: refDx, specialty: refSpec, topics } = body;
          if (!refDx) throw new Error('diagnosis required');

          const prompt = `Suggest 3-5 open-access references for a clinical case about: ${refDx}${refSpec ? ` (${refSpec})` : ''}${topics ? `\nKey topics: ${topics.join(', ')}` : ''}

ONLY suggest references from these open-access sources:
- StatPearls (ncbi.nlm.nih.gov/books/NBK...)
- PMC (pmc.ncbi.nlm.nih.gov/articles/PMC...)
- CDC (cdc.gov)
- WHO (who.int)
- AHA open-access (heart.org)
- GINA (ginasthma.org)
- GOLD (goldcopd.org)
- NCCN guidelines: cite PMC open-access versions only (search PMC for guideline title). Full NCCN guidelines require institutional access — do NOT direct learners to nccn.org

Output ONLY valid JSON array:
[{"title":"...","authors":"...","journal":"...","year":NNNN,"url":"...","openAccess":true,"validates":["what this validates"]}]`;

          result = await callAI(env.ANTHROPIC_API_KEY, 
            'You suggest open-access medical references. Output ONLY valid JSON arrays, no markdown.',
            prompt, 1500);
          break;
        }

        default:
          throw new Error(`Unknown type: ${type}. Use: parse, enhance, validate, generate-teaching, suggest-references`);
      }

      return new Response(JSON.stringify({ success: true, data: result }), {
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });

    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }
  },
};
