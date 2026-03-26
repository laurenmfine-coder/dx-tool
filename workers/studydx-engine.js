/* eslint-disable no-console */ if(typeof window!=='undefined'&&!window.RDX_DEV){var _ce=console.error;console.error=function(){};}
/**
 * StudyDx MCQ Engine — Cloudflare Worker
 * ═══════════════════════════════════════
 * 3-pass AI pipeline for high-quality MCQ generation:
 *   Pass 1: Generate question from source content
 *   Pass 2: Quality audit against rubric
 *   Pass 3: Educational metadata tagging (ABAI/ACGME/Bloom's)
 *
 * Deploy: wrangler deploy --name studydx-engine
 * Env vars: ANTHROPIC_API_KEY
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const MODEL = 'claude-sonnet-4-20250514';
const MAX_RETRIES = 3;

// ═══════════════════════════════════════
// SYSTEM PROMPTS
// ═══════════════════════════════════════

const PASS1_GENERATE = `You are StudyDx, an expert medical education question writer for ReasonDx. You create USMLE Step 2 / ABAI board-style multiple choice questions.

QUALITY RULES (MANDATORY — violations cause rejection):
1. FULL-STEM RELEVANCE: Every sentence in the stem must be clinically necessary. No filler. Every sentence should either narrow the differential or provide data needed to answer.
2. INTEGRATION REQUIRED: The question must NOT be answerable by reading only the last sentence + options. The learner must synthesize information across the FULL vignette.
3. OPTION PARITY: All 5 options must be within 20% of each other in word count. All must have equal grammatical complexity. No "all of the above" or "none of the above".
4. PLAUSIBLE DISTRACTORS: Every incorrect option must be a clinically reasonable consideration for the stem. Common misconceptions, close differentials, or management alternatives. No absurd options.
5. SINGLE BEST ANSWER: One option must be clearly the best answer, defensible by a specific reference.
6. CLINICAL VIGNETTE FORMAT: Use realistic patient scenarios with age, sex, presentation, exam findings, and relevant data.

OUTPUT FORMAT: Respond with ONLY valid JSON, no markdown fences:
{
  "stem": "A 34-year-old woman presents to the emergency department with...",
  "options": [
    {"text": "Option A text", "explanation": "Why this is correct/incorrect"},
    {"text": "Option B text", "explanation": "Why this is correct/incorrect"},
    {"text": "Option C text", "explanation": "Why this is correct/incorrect"},
    {"text": "Option D text", "explanation": "Why this is correct/incorrect"},
    {"text": "Option E text", "explanation": "Why this is correct/incorrect"}
  ],
  "correct_index": 0,
  "explanation": "Comprehensive explanation of the correct answer and why each distractor is wrong",
  "topic_tags": ["tag1", "tag2"],
  "key_concept": "The core concept being tested"
}`;

const PASS2_AUDIT = `You are a medical education quality auditor for StudyDx. You evaluate MCQs against strict quality criteria.

Evaluate the provided question against EACH criterion. Score each 0-1 and provide specific feedback.

CRITERIA:
1. LAST-SENTENCE TEST: Cover everything except the final question sentence + options. Can a competent medical student answer correctly from just that? If yes → FAIL (score 0).
2. STEM RELEVANCE: Is every sentence in the stem necessary? Remove each sentence mentally — does the answer change? If any sentence is pure filler → score 0.5 or lower.
3. OPTION LENGTH PARITY: Calculate word counts for all 5 options. If max/min ratio exceeds 1.5 → FAIL.
4. DISTRACTOR PLAUSIBILITY: Is each incorrect option a reasonable clinical consideration? Rate each distractor 0-1.
5. GRAMMATICAL CONSISTENCY: Do all options have the same grammatical structure (all start with verbs, all are noun phrases, etc.)?
6. CLINICAL ACCURACY: Is the correct answer actually correct per current guidelines?
7. SINGLE BEST ANSWER: Is there exactly one best answer, or could reasonable clinicians disagree?

OUTPUT FORMAT: Respond with ONLY valid JSON, no markdown fences:
{
  "pass": true or false,
  "overall_score": 0.00-1.00,
  "criteria": {
    "last_sentence_test": {"score": 0.0-1.0, "note": "..."},
    "stem_relevance": {"score": 0.0-1.0, "note": "..."},
    "option_length_parity": {"score": 0.0-1.0, "note": "word counts: [n,n,n,n,n]"},
    "distractor_plausibility": {"score": 0.0-1.0, "note": "..."},
    "grammatical_consistency": {"score": 0.0-1.0, "note": "..."},
    "clinical_accuracy": {"score": 0.0-1.0, "note": "..."},
    "single_best_answer": {"score": 0.0-1.0, "note": "..."}
  },
  "revision_suggestions": ["suggestion1", "suggestion2"],
  "rejection_reasons": ["reason1"] 
}

A question PASSES if overall_score >= 0.60. Be fair in scoring — a well-constructed clinical vignette with plausible distractors should pass even if not perfect.`;

const PASS3_TAG = `You are an educational metadata tagger for StudyDx (ReasonDx platform). Tag the provided MCQ with educational framework mappings.

ABAI DOMAINS (Allergy/Immunology board exam):
1. Basic Science & Immunology
2. Diagnostic Methods & Lab Testing  
3. Upper/Lower Airway Disease
4. Skin & Ocular Allergy
5. Urticaria & Angioedema
6. Anaphylaxis
7. Asthma & Lung Disease
8. Food Allergy & Eosinophilic GI
9. Drug Allergy & Adverse Reactions
10. Insect/Venom Allergy
11. Allergen Immunotherapy
12. Primary Immunodeficiency
13. Autoimmune & Inflammatory Disease
14. Mast Cell Disorders
15. Occupational & Environmental Allergy

ACGME COMPETENCIES: PC (Patient Care), MK (Medical Knowledge), SBP (Systems-Based Practice), PBLI (Practice-Based Learning), IPC (Interpersonal Communication), PROF (Professionalism)

ACGME MILESTONE LEVELS:
1 = Novice (early learner, recall-level)
2 = Advanced beginner (can apply with guidance)
3 = Competent (independent practice for common scenarios)
4 = Proficient (manages complex/atypical cases)
5 = Expert (teaches others, handles novel situations)

BLOOM'S TAXONOMY: recall, application, analysis, synthesis

OUTPUT FORMAT: Respond with ONLY valid JSON, no markdown fences:
{
  "abai_domain": "Domain N — Name",
  "abai_domain_number": N,
  "acgme_competency": "XX",
  "acgme_milestone": "XX#",
  "acgme_milestone_level": N,
  "blooms": "level",
  "difficulty": N,
  "reasoning": "Brief explanation of why these tags were chosen"
}`;

// ═══════════════════════════════════════
// AI CALL HELPER
// ═══════════════════════════════════════

async function callAI(apiKey, systemPrompt, userMessage, maxTokens = 2000) {
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

  // Robust JSON extraction — handle markdown fences, preamble text, etc.
  let cleaned = text;
  
  // Strip markdown fences
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
  
  // If there's preamble text before the JSON, find the first { or [
  const firstBrace = cleaned.indexOf('{');
  const firstBracket = cleaned.indexOf('[');
  let jsonStart = -1;
  if (firstBrace >= 0 && (firstBracket < 0 || firstBrace < firstBracket)) jsonStart = firstBrace;
  else if (firstBracket >= 0) jsonStart = firstBracket;
  
  if (jsonStart > 0) {
    cleaned = cleaned.substring(jsonStart);
  }
  
  // Find the matching closing brace/bracket
  if (cleaned.startsWith('{')) {
    const lastBrace = cleaned.lastIndexOf('}');
    if (lastBrace > 0) cleaned = cleaned.substring(0, lastBrace + 1);
  } else if (cleaned.startsWith('[')) {
    const lastBracket = cleaned.lastIndexOf(']');
    if (lastBracket > 0) cleaned = cleaned.substring(0, lastBracket + 1);
  }

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    throw new Error(`JSON parse failed: ${e.message}\nRaw (first 500): ${text.substring(0, 500)}`);
  }
}

// ═══════════════════════════════════════
// 3-PASS PIPELINE
// ═══════════════════════════════════════

async function generateMCQ(apiKey, sourceContent, options = {}) {
  const { topic, difficulty, count = 1 } = options;
  const results = [];

  for (let q = 0; q < count; q++) {
    let question = null;
    let audit = null;
    let tags = null;
    let attempts = 0;
    let lastError = null;

    while (attempts < MAX_RETRIES) {
      attempts++;

      // ─── PASS 1: Generate ───
      const genPrompt = `Generate 1 high-quality MCQ from this content.${topic ? `\nFocus on: ${topic}` : ''}${difficulty ? `\nTarget difficulty: ${difficulty}/5` : ''}\n\nSOURCE CONTENT:\n${sourceContent}`;

      try {
        question = await callAI(apiKey, PASS1_GENERATE, genPrompt);
      } catch (e) {
        lastError = 'Pass 1: ' + e.message;
        console.error(`Pass 1 attempt ${attempts} failed:`, e.message);
        continue;
      }

      // Validate basic structure
      if (!question.stem || !question.options || question.options.length !== 5 ||
          question.correct_index === undefined || !question.explanation) {
        lastError = 'Pass 1: Invalid structure - missing stem/options/explanation. Got keys: ' + Object.keys(question || {}).join(',');
        console.warn(`Pass 1 attempt ${attempts}: invalid structure`);
        continue;
      }

      // ─── PASS 2: Quality Audit ───
      const auditPrompt = `Evaluate this MCQ:\n\nSTEM: ${question.stem}\n\nOPTIONS:\n${question.options.map((o, i) => `${i === question.correct_index ? '✓' : ' '} ${String.fromCharCode(65 + i)}. ${o.text}`).join('\n')}\n\nCORRECT: ${String.fromCharCode(65 + question.correct_index)}\nEXPLANATION: ${question.explanation}`;

      try {
        audit = await callAI(apiKey, PASS2_AUDIT, auditPrompt, 1500);
      } catch (e) {
        lastError = 'Pass 2: ' + e.message;
        console.error(`Pass 2 attempt ${attempts} failed:`, e.message);
        continue;
      }

      if (audit.pass || audit.overall_score >= 0.65) {
        break; // Quality gate passed
      }

      console.warn(`Pass 2 attempt ${attempts}: quality score ${audit.overall_score}, pass: ${audit.pass}`);
      // Retry with revision hints
      if (audit.revision_suggestions && audit.revision_suggestions.length > 0) {
        sourceContent += `\n\n[REVISION HINTS from previous attempt: ${audit.revision_suggestions.join('; ')}]`;
      }
    }

    if (!question || !audit) {
      results.push({
        success: false,
        error: 'Failed after ' + attempts + ' attempts. Last error: ' + (lastError || 'unknown'),
        audit_notes: audit ? audit.rejection_reasons : ['Generation failed'],
      });
      continue;
    }

    // If audit didn't formally pass but we have a question with a score, still return it
    // The quality score is displayed to the user so they can judge
    if (audit.overall_score < 0.5) {
      results.push({
        success: false,
        error: 'Question quality too low (score: ' + (audit.overall_score * 100).toFixed(0) + '%)',
        audit_notes: audit.rejection_reasons || ['Low quality score'],
      });
      continue;
    }

    // ─── PASS 3: Metadata Tagging ───
    const tagPrompt = `Tag this MCQ:\n\nSTEM: ${question.stem}\n\nCORRECT ANSWER: ${question.options[question.correct_index].text}\n\nKEY CONCEPT: ${question.key_concept || 'Not specified'}\n\nTOPIC TAGS: ${(question.topic_tags || []).join(', ')}`;

    try {
      tags = await callAI(apiKey, PASS3_TAG, tagPrompt, 800);
    } catch (e) {
      console.error('Pass 3 failed:', e.message);
      // Tagging failure is non-fatal — use defaults
      tags = {
        abai_domain: null,
        abai_domain_number: null,
        acgme_competency: 'MK',
        acgme_milestone: 'MK1',
        acgme_milestone_level: 2,
        blooms: 'application',
        difficulty: 3,
      };
    }

    results.push({
      success: true,
      question: {
        stem: question.stem,
        options: question.options,
        correct_index: question.correct_index,
        explanation: question.explanation,
        topic_tags: question.topic_tags || [],
        key_concept: question.key_concept || '',
      },
      quality: {
        score: audit.overall_score,
        criteria: audit.criteria,
        attempts: attempts,
      },
      tags: {
        abai_domain: tags.abai_domain,
        abai_domain_number: tags.abai_domain_number,
        acgme_competency: tags.acgme_competency,
        acgme_milestone: tags.acgme_milestone,
        acgme_milestone_level: tags.acgme_milestone_level,
        blooms: tags.blooms,
        difficulty: tags.difficulty,
      },
    });
  }

  return results;
}

// ═══════════════════════════════════════
// REQUEST HANDLER
// ═══════════════════════════════════════

export default {
  async fetch(request, env) {
    // CORS preflight
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
        case 'generate': {
          // Generate MCQs from source content
          const { content, topic, difficulty, count } = body;
          if (!content) throw new Error('content is required');
          result = await generateMCQ(env.ANTHROPIC_API_KEY, content, { topic, difficulty, count: Math.min(count || 1, 5) });
          break;
        }

        case 'generate-from-case': {
          // Generate MCQs from a case's teaching points + references
          const { teachingPoints, boardPearls, references, caseDiagnosis, caseSpecialty } = body;
          if (!teachingPoints && !boardPearls) throw new Error('teachingPoints or boardPearls required');

          const sourceContent = [
            caseDiagnosis ? `CASE DIAGNOSIS: ${caseDiagnosis}` : '',
            caseSpecialty ? `SPECIALTY: ${caseSpecialty}` : '',
            teachingPoints ? `\nKEY LEARNING POINTS:\n${(Array.isArray(teachingPoints) ? teachingPoints : [teachingPoints]).map((t, i) => `${i + 1}. ${t}`).join('\n')}` : '',
            boardPearls ? `\nBOARD PEARLS:\n${(Array.isArray(boardPearls) ? boardPearls : [boardPearls]).map((b, i) => `${i + 1}. ${b}`).join('\n')}` : '',
            references ? `\nREFERENCES:\n${(Array.isArray(references) ? references : [references]).map(r => typeof r === 'object' ? `- ${r.title} (${r.journal}, ${r.year}) ${r.url || ''}` : `- ${r}`).join('\n')}` : '',
          ].filter(Boolean).join('\n');

          result = await generateMCQ(env.ANTHROPIC_API_KEY, sourceContent, {
            topic: body.topic || caseDiagnosis,
            difficulty: body.difficulty,
            count: Math.min(body.count || 3, 5),
          });
          break;
        }

        case 'generate-from-notebook': {
          // Generate MCQs from notebook resource content
          const { resourceContent, resourceTitle, resourceUrl, notebookTopic } = body;
          if (!resourceContent) throw new Error('resourceContent is required');

          const sourceContent = [
            `SOURCE: ${resourceTitle || 'Uploaded Resource'}`,
            resourceUrl ? `URL: ${resourceUrl}` : '',
            notebookTopic ? `TOPIC FOCUS: ${notebookTopic}` : '',
            `\nCONTENT:\n${resourceContent.substring(0, 12000)}`,
          ].filter(Boolean).join('\n');

          result = await generateMCQ(env.ANTHROPIC_API_KEY, sourceContent, {
            topic: notebookTopic || resourceTitle,
            difficulty: body.difficulty,
            count: Math.min(body.count || 3, 5),
          });
          break;
        }

        case 'audit-only': {
          // Audit an existing question (for user-created MCQs)
          const { stem, options, correct_index, explanation } = body;
          if (!stem || !options) throw new Error('stem and options required');

          const auditPrompt = `Evaluate this MCQ:\n\nSTEM: ${stem}\n\nOPTIONS:\n${options.map((o, i) => `${i === correct_index ? '✓' : ' '} ${String.fromCharCode(65 + i)}. ${typeof o === 'object' ? o.text : o}`).join('\n')}\n\nCORRECT: ${String.fromCharCode(65 + correct_index)}\nEXPLANATION: ${explanation || 'Not provided'}`;

          result = await callAI(env.ANTHROPIC_API_KEY, PASS2_AUDIT, auditPrompt, 1500);
          break;
        }

        case 'tag-only': {
          // Tag an existing question with ABAI/ACGME metadata
          const { stem: tagStem, correct_answer, key_concept: kc, topic_tags: tt } = body;
          if (!tagStem) throw new Error('stem required');

          const tagPrompt = `Tag this MCQ:\n\nSTEM: ${tagStem}\n\nCORRECT ANSWER: ${correct_answer || 'Not provided'}\n\nKEY CONCEPT: ${kc || 'Not specified'}\n\nTOPIC TAGS: ${(tt || []).join(', ')}`;

          result = await callAI(env.ANTHROPIC_API_KEY, PASS3_TAG, tagPrompt, 800);
          break;
        }

        default:
          throw new Error(`Unknown type: ${type}. Use: generate, generate-from-case, generate-from-notebook, audit-only, tag-only`);
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
