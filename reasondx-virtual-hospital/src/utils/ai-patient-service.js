/**
 * ReasonDx Virtual Hospital - AI Patient Service
 * 
 * Handles AI-powered patient responses using Claude API.
 * Generates natural conversation grounded in clinical facts from peer-reviewed sources.
 */

const API_ENDPOINT = 'https://coachdx-attending.laurenmfine.workers.dev';
const MODEL = 'claude-sonnet-4-20250514';

/**
 * Get AI-generated patient response
 * @param {string} question - Student's question
 * @param {Object} patient - Current patient with case data
 * @param {Object[]} conversationHistory - Prior messages in this encounter
 * @param {Object} options - Additional options (tier, etc.)
 * @returns {string} Patient's response
 */
export async function getPatientResponse(question, patient, conversationHistory = [], options = {}) {
  const { tier = 'free' } = options;
  
  // For free tier, try scripted response first
  if (tier === 'free') {
    const scripted = getScriptedResponse(question, patient);
    if (scripted) return scripted;
    
    // Check AI call limit
    const aiCallsUsed = conversationHistory.filter(m => m.aiGenerated).length;
    if (aiCallsUsed >= 5) {
      return "I'm not sure what you mean. Could you ask another way?";
    }
  }
  
  try {
    // Build system prompt from patient data
    const systemPrompt = buildPatientSystemPrompt(patient);
    
    // Build messages array
    const messages = [
      ...conversationHistory.map(m => ({
        role: m.role === 'student' ? 'user' : 'assistant',
        content: m.text
      })),
      { role: 'user', content: question }
    ];
    
    // Call Claude API via Cloudflare Worker proxy
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'passthrough',
        model: MODEL,
        max_tokens: 300,
        system: systemPrompt,
        messages
      })
    });
    
    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('AI Patient Service error:', response.status, errData);
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    const patientResponse = data.content[0].text;
    
    // Validate response
    const validated = validateResponse(patientResponse, patient);
    
    return validated;
    
  } catch (error) {
    console.error('AI patient response error:', error);
    // Fall back to scripted
    return getScriptedFallback(question, patient);
  }
}

/**
 * Build system prompt from patient data
 * @param {Object} patient - Patient with variant and clinical facts
 * @returns {string} System prompt for Claude
 */
export function buildPatientSystemPrompt(patient) {
  const { demographics, variant } = patient;
  const { patient: persona, clinicalFacts: cf } = variant;
  const cc = cf.chiefComplaint;
  
  return `You are ${demographics.name}, a ${demographics.age}-year-old ${demographics.gender} in the emergency department.

PERSONALITY:
${persona.emotionalState}. ${persona.communicationStyle}
${persona.languageNotes ? `Note: ${persona.languageNotes}` : ''}

YOUR SYMPTOMS:
- Chief complaint: "${cc.patientPhrasing.join('" or "')}"
- Location: ${cc.location}
- Started: ${cc.onset}
- Duration: ${cc.duration}
- Severity: ${cc.severity}
- What makes it worse: ${cc.aggravating.join(', ')}
- What makes it better: ${cc.relieving.join(', ')}
${cc.radiation.length > 0 ? `- Spreads to: ${cc.radiation.join(', ')}` : ''}

ASSOCIATED SYMPTOMS (confirm if asked):
${cf.associatedSymptoms.present.map(s => `- YES: ${s}`).join('\n')}

THINGS TO DENY (pertinent negatives):
${cf.associatedSymptoms.absent.map(s => `- NO: ${s}`).join('\n')}

YOUR MEDICAL HISTORY:
- Past problems: ${cf.pmh.join(', ') || 'None'}
- Medications: ${cf.medications.map(m => `${m.name} ${m.dose}`).join(', ') || 'None'}
- Allergies: ${cf.allergies.map(a => `${a.allergen} (${a.reaction})`).join(', ') || 'None'}
- Family history: ${cf.familyHistory.join(', ') || 'None significant'}

SOCIAL HISTORY:
- Smoking: ${cf.socialHistory.smoking}
- Alcohol: ${cf.socialHistory.alcohol}
- Occupation: ${cf.socialHistory.occupation}

BEHAVIORAL RULES:
1. Stay in character as the patient at all times
2. Use everyday language, not medical terms (say "sugar" not "diabetes", "pressure" not "hypertension")
3. Answer only what is asked - don't volunteer your entire history unprompted
4. Show appropriate emotion (you're worried, scared, uncomfortable)
5. NEVER diagnose yourself or say things like "I think I'm having a heart attack"
6. NEVER give the student medical advice
7. If asked about something not specified above, respond as a real patient would with reasonable uncertainty
8. Keep responses conversational and under 2-3 sentences unless more detail is specifically asked for

WORD CHOICES:
- USE these words for your symptoms: ${cc.patientPhrasing.join(', ')}
- AVOID these words (they suggest different diagnoses): ${cc.avoidPhrasing?.join(', ') || 'none specified'}`;
}

/**
 * Attempt to find a scripted response for common questions
 * @param {string} question - Student's question
 * @param {Object} patient - Current patient
 * @returns {string|null} Scripted response or null
 */
export function getScriptedResponse(question, patient) {
  const q = question.toLowerCase();
  const cf = patient.variant.clinicalFacts;
  const cc = cf.chiefComplaint;
  
  // Chief complaint
  if (q.includes('what brings you') || q.includes('why are you here') || q.includes('what\'s wrong')) {
    return `${cc.patientPhrasing[0]} in my ${cc.location}. It started ${cc.onset.toLowerCase()} and it's been ${cc.duration.toLowerCase()}.`;
  }
  
  // Pain severity
  if (q.includes('how bad') || q.includes('scale') || q.includes('1 to 10') || q.includes('severity')) {
    return `I'd say it's about a ${cc.severity.split('/')[0].match(/\d+/)?.[0] || '8'} out of 10. ${cc.severity.includes('worst') ? "This is the worst I've ever felt." : ''}`;
  }
  
  // Location
  if (q.includes('where') && (q.includes('pain') || q.includes('hurt') || q.includes('feel'))) {
    const radiation = cc.radiation.length > 0 
      ? ` It also goes to my ${cc.radiation.join(' and ')}.`
      : '';
    return `Right here, in my ${cc.location}.${radiation}`;
  }
  
  // When did it start
  if (q.includes('when') && (q.includes('start') || q.includes('begin'))) {
    return `It started ${cc.onset.toLowerCase()}. It's been going on for ${cc.duration.toLowerCase()}.`;
  }
  
  // What makes it worse
  if (q.includes('worse') || q.includes('aggravat')) {
    if (cc.aggravating.length > 0) {
      return `It gets worse when ${cc.aggravating.join(' or when ')}.`;
    }
    return `Nothing specific seems to make it worse.`;
  }
  
  // What makes it better
  if (q.includes('better') || q.includes('reliev') || q.includes('help')) {
    if (cc.relieving.length > 0 && !cc.relieving.includes('nothing')) {
      return `${cc.relieving.join(' and ')} seem${cc.relieving.length === 1 ? 's' : ''} to help a little.`;
    }
    return `Nothing really helps. I even tried ${cc.relieving.includes('antacid') ? 'antacid but it didn\'t work' : 'resting but it\'s still there'}.`;
  }
  
  // Medications
  if (q.includes('medication') || q.includes('medicine') || q.includes('taking')) {
    if (cf.medications.length > 0) {
      const meds = cf.medications.map(m => `${m.name} ${m.dose}`).join(', ');
      return `I take ${meds}.`;
    }
    return `I don't take any medications.`;
  }
  
  // Allergies
  if (q.includes('allerg')) {
    if (cf.allergies.length > 0) {
      const allergies = cf.allergies.map(a => `${a.allergen} - I got a ${a.reaction}`).join(', and ');
      return `Yes, ${allergies}.`;
    }
    return `No, no allergies that I know of.`;
  }
  
  // Medical history
  if (q.includes('medical history') || q.includes('health problems') || q.includes('medical problems')) {
    if (cf.pmh.length > 0) {
      return `I have ${cf.pmh.join(', ')}.`;
    }
    return `I've been pretty healthy overall.`;
  }
  
  // No scripted match
  return null;
}

/**
 * Get a fallback response when AI is unavailable
 * @param {string} question - Student's question
 * @param {Object} patient - Current patient
 * @returns {string} Fallback response
 */
export function getScriptedFallback(question, patient) {
  const scripted = getScriptedResponse(question, patient);
  if (scripted) return scripted;
  
  // Generic fallbacks
  const fallbacks = [
    "I'm not sure I understand what you're asking. Could you rephrase that?",
    "Can you ask that in a different way?",
    "I don't know the answer to that exactly.",
    "Hmm, I'd have to think about that. Is there something else I can help you with?"
  ];
  
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

/**
 * Validate AI response for consistency
 * @param {string} response - AI-generated response
 * @param {Object} patient - Current patient data
 * @returns {string} Validated (possibly modified) response
 */
export function validateResponse(response, patient) {
  let validated = response;
  
  // Check for self-diagnosis (filter out)
  const selfDiagnosisPatterns = [
    /i think i('m| am) having a heart attack/i,
    /i think i have /i,
    /this is probably /i,
    /i'm pretty sure i have /i,
    /sounds like i have /i
  ];
  
  for (const pattern of selfDiagnosisPatterns) {
    if (pattern.test(validated)) {
      validated = validated.replace(pattern, 'I\'m really worried about what\'s happening to me');
    }
  }
  
  // Check for medical advice (filter out)
  const medicalAdvicePatterns = [
    /you should order /i,
    /you need to /i,
    /make sure you check /i,
    /don't forget to /i
  ];
  
  for (const pattern of medicalAdvicePatterns) {
    if (pattern.test(validated)) {
      // Remove the medical advice portion
      validated = validated.split('.')[0] + '.';
    }
  }
  
  return validated;
}

/**
 * Process response for educational tracking
 * @param {string} question - Student's question
 * @param {string} response - Patient's response
 * @param {Object} patient - Current patient
 * @returns {Object} Tracking data
 */
export function processForTracking(question, response, patient) {
  const q = question.toLowerCase();
  const tracking = {
    oldcarts: null,
    symptomAsked: null,
    pertinentPositive: null,
    pertinentNegative: null
  };
  
  // Check OLDCARTS elements
  if (q.includes('when') || q.includes('start') || q.includes('begin')) {
    tracking.oldcarts = 'onset';
  } else if (q.includes('where') && (q.includes('pain') || q.includes('hurt'))) {
    tracking.oldcarts = 'location';
  } else if (q.includes('how long') || q.includes('duration')) {
    tracking.oldcarts = 'duration';
  } else if (q.includes('what does') || q.includes('describe') || q.includes('feel like')) {
    tracking.oldcarts = 'character';
  } else if (q.includes('worse') || q.includes('aggravat')) {
    tracking.oldcarts = 'aggravating';
  } else if (q.includes('better') || q.includes('reliev')) {
    tracking.oldcarts = 'relieving';
  } else if (q.includes('how bad') || q.includes('scale') || q.includes('severity')) {
    tracking.oldcarts = 'severity';
  }
  
  // Check for symptom inquiries
  const cf = patient.variant.clinicalFacts;
  const allSymptoms = [
    ...cf.associatedSymptoms.present,
    ...cf.associatedSymptoms.absent
  ];
  
  for (const symptom of allSymptoms) {
    const keywords = symptom.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    if (keywords.some(kw => q.includes(kw))) {
      tracking.symptomAsked = symptom;
      if (cf.associatedSymptoms.present.includes(symptom)) {
        tracking.pertinentPositive = symptom;
      } else {
        tracking.pertinentNegative = symptom;
      }
      break;
    }
  }
  
  return tracking;
}

export default {
  getPatientResponse,
  buildPatientSystemPrompt,
  getScriptedResponse,
  getScriptedFallback,
  validateResponse,
  processForTracking
};
