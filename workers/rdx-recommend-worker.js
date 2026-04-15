/**
 * rdx-recommend-worker.js
 * Smart case recommendation engine for ReasonDx
 * Uses semantic similarity + profession + performance history
 * Deploy: wrangler deploy --config wrangler-recommend.toml
 */

const SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';

// Case tag relationships — what tags are related to each other
const TAG_GRAPH = {
  cardiology: ['emergency', 'internal-medicine', 'pharmacology', 'surgery'],
  pulmonology: ['emergency', 'internal-medicine', 'critical-care', 'cardiology'],
  neurology: ['emergency', 'psychiatry', 'internal-medicine', 'critical-care'],
  nephrology: ['internal-medicine', 'pharmacology', 'cardiology', 'endocrinology'],
  gastroenterology: ['surgery', 'internal-medicine', 'pharmacology', 'infectious-disease'],
  endocrinology: ['internal-medicine', 'pharmacology', 'nephrology', 'cardiology'],
  'infectious-disease': ['emergency', 'internal-medicine', 'pharmacology', 'critical-care'],
  hematology: ['internal-medicine', 'oncology', 'pharmacology', 'emergency'],
  rheumatology: ['internal-medicine', 'pharmacology', 'nephrology'],
  emergency: ['cardiology', 'pulmonology', 'neurology', 'surgery', 'critical-care'],
  surgery: ['emergency', 'gastroenterology', 'internal-medicine', 'critical-care'],
  pharmacology: ['internal-medicine', 'cardiology', 'nephrology', 'endocrinology'],
  psychiatry: ['neurology', 'pharmacology', 'internal-medicine'],
  pediatrics: ['emergency', 'internal-medicine', 'infectious-disease'],
  'critical-care': ['emergency', 'pulmonology', 'cardiology', 'nephrology'],
  'internal-medicine': ['cardiology', 'pulmonology', 'nephrology', 'gastroenterology'],
};

// Profession → primary + stretch tags
const PROFESSION_TAGS = {
  medicine:  { primary: ['internal-medicine', 'emergency', 'cardiology', 'neurology'], stretch: ['surgery', 'ob-gyn', 'psychiatry'] },
  pa:        { primary: ['internal-medicine', 'emergency', 'surgery'], stretch: ['cardiology', 'neurology', 'ob-gyn'] },
  pharmacy:  { primary: ['pharmacology', 'internal-medicine', 'cardiology'], stretch: ['nephrology', 'endocrinology', 'infectious-disease'] },
  nursing:   { primary: ['critical-care', 'internal-medicine', 'pharmacology'], stretch: ['emergency', 'pediatrics', 'ob-gyn'] },
  pt:        { primary: ['musculoskeletal', 'neurology', 'cardiopulmonary'], stretch: ['geriatrics', 'pediatrics', 'sports-medicine'] },
  ot:        { primary: ['neurology', 'psychiatry', 'musculoskeletal'], stretch: ['pediatrics', 'geriatrics', 'cognitive'] },
  dentistry: { primary: ['oral-medicine', 'pharmacology', 'infectious-disease'], stretch: ['cardiology', 'endocrinology', 'hematology'] },
  optometry: { primary: ['ophthalmology', 'neurology', 'endocrinology'], stretch: ['rheumatology', 'hematology', 'hypertension'] },
  mbs:       { primary: ['pathophysiology', 'pharmacology', 'internal-medicine'], stretch: ['cardiology', 'endocrinology', 'neurology'] },
  vet:       { primary: ['general', 'pharmacology', 'infectious-disease'], stretch: ['endocrinology', 'cardiology', 'emergency'] },
  other:     { primary: ['general', 'internal-medicine'], stretch: ['emergency', 'pharmacology'] },
};

// Difficulty progression
const DIFFICULTY_LEVELS = ['beginner', 'intermediate', 'advanced', 'expert'];

function scoreCaseForUser(caseObj, userProfile) {
  let score = 0;
  const { profession, completedTags, errorModes, totalCasesCompleted } = userProfile;
  const profTags = PROFESSION_TAGS[profession] || PROFESSION_TAGS.other;
  const caseTags = caseObj.tags || [];

  // +3 if case matches primary profession tags
  if (caseTags.some(t => profTags.primary.includes(t))) score += 3;

  // +1 if case is a stretch tag (adjacent learning)
  if (caseTags.some(t => profTags.stretch.includes(t))) score += 1;

  // +2 if case addresses a known error mode weakness
  if (errorModes?.includes('ANCHORING') && caseTags.includes('emergency')) score += 2;
  if (errorModes?.includes('PREMATURE_CLOSURE') && caseTags.includes('internal-medicine')) score += 2;
  if (errorModes?.includes('HISTORY_GAP') && caseTags.includes('general')) score += 2;

  // -3 if already completed recently (avoid repetition)
  if (completedTags?.slice(-20).includes(caseObj.id)) score -= 3;

  // +1 for appropriate difficulty progression
  const targetDifficulty = DIFFICULTY_LEVELS[Math.min(
    Math.floor((totalCasesCompleted || 0) / 10),
    DIFFICULTY_LEVELS.length - 1
  )];
  if (caseObj.difficulty === targetDifficulty) score += 1;

  // Small random factor to avoid always recommending same case
  score += Math.random() * 0.5;

  return score;
}

async function getUserProfile(userId, supabaseKey) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/profiles?id=eq.${userId}&select=profession_id,total_cases_completed,streak_days`,
      { headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` } }
    );
    const data = await res.json();
    return data?.[0] || {};
  } catch(e) {
    return {};
  }
}

async function getCompletedCases(userId, supabaseKey) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/simulation_sessions?user_id=eq.${userId}&select=case_id,primary_tag&order=created_at.desc&limit=50`,
      { headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` } }
    );
    const data = await res.json();
    return data || [];
  } catch(e) {
    return [];
  }
}

export default {
  async fetch(request, env) {
    // CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    const SUPABASE_KEY = env.SUPABASE_ANON_KEY;

    try {
      const body = await request.json();
      const { userId, profession, completedCaseIds, errorModes, totalCasesCompleted, availableCases } = body;

      // Build user profile
      let profile = {
        profession: profession || 'medicine',
        completedTags: completedCaseIds || [],
        errorModes: errorModes || [],
        totalCasesCompleted: totalCasesCompleted || 0,
      };

      // If userId provided, enrich from Supabase
      if (userId && SUPABASE_KEY) {
        const [dbProfile, completedSessions] = await Promise.all([
          getUserProfile(userId, SUPABASE_KEY),
          getCompletedCases(userId, SUPABASE_KEY)
        ]);
        profile.profession = dbProfile.profession_id || profile.profession;
        profile.totalCasesCompleted = dbProfile.total_cases_completed || profile.totalCasesCompleted;
        profile.completedTags = completedSessions.map(s => s.case_id);
      }

      // Score available cases
      const cases = availableCases || [];
      const scored = cases
        .map(c => ({ ...c, score: scoreCaseForUser(c, profile) }))
        .sort((a, b) => b.score - a.score);

      // Return top 5 recommendations with reasoning
      const profTags = PROFESSION_TAGS[profile.profession] || PROFESSION_TAGS.other;
      const recommendations = scored.slice(0, 5).map(c => ({
        id: c.id,
        title: c.title,
        tags: c.tags,
        score: Math.round(c.score * 10) / 10,
        reason: c.tags?.some(t => profTags.primary.includes(t))
          ? `Core ${profile.profession} topic`
          : c.tags?.some(t => profTags.stretch.includes(t))
          ? 'Expands your clinical breadth'
          : 'Builds foundational reasoning',
        url: `/browse.html?mode=simulate&case=${c.id}`,
      }));

      // Also return a "challenge" case (higher difficulty)
      const challengeCase = scored.find(c =>
        !profile.completedTags.includes(c.id) &&
        c.difficulty === 'advanced'
      );

      return new Response(JSON.stringify({
        success: true,
        profession: profile.profession,
        totalCompleted: profile.totalCasesCompleted,
        recommendations,
        challengeCase: challengeCase ? {
          id: challengeCase.id,
          title: challengeCase.title,
          url: `/browse.html?mode=simulate&case=${challengeCase.id}`,
        } : null,
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });

    } catch(e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
};
