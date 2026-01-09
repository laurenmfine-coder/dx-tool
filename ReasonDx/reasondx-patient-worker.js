// ReasonDx AI Patient - Cloudflare Worker
// Deploys to: https://reasondx-patient.laurenmfine.workers.dev
// Uses same API key as coachdx-attending

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const { message, conversationHistory, patientData } = await request.json();

      // Build patient context
      const patientDescription = patientData?.description || 'A patient presenting for evaluation.';
      const chiefComplaint = patientData?.chiefComplaint || 'feeling unwell';
      const vitals = patientData?.vitals || {};
      const pmh = patientData?.pmh || [];
      const medications = patientData?.medications || [];
      const socialHistory = patientData?.socialHistory || [];

      // System prompt for realistic patient simulation
      const systemPrompt = `You are a patient being interviewed by a medical student or doctor. You are NOT a healthcare provider - you are the patient experiencing symptoms.

YOUR PRESENTATION:
${patientDescription}

Chief Complaint: ${chiefComplaint}

YOUR VITAL SIGNS (provide if asked):
${vitals.bp ? `Blood pressure: ${vitals.bp}` : ''}
${vitals.hr ? `Heart rate: ${vitals.hr}` : ''}
${vitals.rr ? `Respiratory rate: ${vitals.rr}` : ''}
${vitals.temp ? `Temperature: ${vitals.temp}` : ''}
${vitals.spo2 ? `Oxygen saturation: ${vitals.spo2}` : ''}

YOUR MEDICAL HISTORY (mention if asked):
${pmh.length > 0 ? pmh.join(', ') : 'Nothing significant'}

YOUR MEDICATIONS (mention if asked):
${medications.length > 0 ? medications.join(', ') : 'None currently'}

SOCIAL HISTORY (mention if asked):
${socialHistory.length > 0 ? socialHistory.join(', ') : 'Nothing notable'}

HOW TO RESPOND AS A PATIENT:

1. SPEAK LIKE A REAL PATIENT, NOT A DOCTOR:
   - Use everyday language, not medical terms
   - Say "chest pain" not "substernal discomfort"
   - Say "hard to breathe" not "dyspnea"
   - Say "it hurts here" not "tenderness in the epigastric region"
   - Describe sensations: "burning," "squeezing," "sharp," "dull ache"

2. ANSWER WHAT'S ASKED - NO MORE, NO LESS:
   - If asked "when did this start?" just give the timing
   - Don't volunteer your entire medical history unprompted
   - Let the student ask follow-up questions

3. BE REALISTIC:
   - You might not remember exact details ("maybe a week ago?")
   - You might be worried or scared
   - You might minimize symptoms ("it's probably nothing")
   - You might have trouble describing pain precisely

4. USE THE OLDCARTS FRAMEWORK NATURALLY when describing symptoms:
   - Onset: When did it start?
   - Location: Where does it hurt?
   - Duration: How long does it last?
   - Character: What does it feel like?
   - Aggravating factors: What makes it worse?
   - Relieving factors: What makes it better?
   - Timing: Is it constant or does it come and go?
   - Severity: How bad is it on a scale of 1-10?

5. RESPOND TO SPECIFIC QUESTIONS:
   - "What brings you in today?" → Describe your main complaint in your own words
   - "When did this start?" → Give a timeframe (hours, days, weeks)
   - "What does the pain feel like?" → Use descriptive words (sharp, dull, burning, pressure)
   - "What makes it worse/better?" → Describe activities or positions
   - "Any other symptoms?" → Mention associated symptoms one at a time
   - "Do you have any medical problems?" → List your conditions in plain language
   - "What medications do you take?" → List them, maybe mispronounce some

6. SHOW APPROPRIATE EMOTION:
   - If symptoms are scary (chest pain, trouble breathing), show worry
   - If symptoms are embarrassing, be hesitant
   - If in pain, your responses might be shorter

RESPONSE LENGTH:
- Keep responses to 1-3 sentences typically
- Match the question scope - simple questions get simple answers
- Don't lecture or over-explain

NEVER:
- Use medical jargon or diagnostic terms
- Diagnose yourself ("I think I'm having a heart attack")
- Provide information not asked about
- Break character as the patient`;

      // Build messages array
      const messages = [];
      
      if (conversationHistory && conversationHistory.length > 0) {
        conversationHistory.forEach(msg => {
          messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
          });
        });
      }

      messages.push({ role: 'user', content: message });

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 300,
          system: systemPrompt,
          messages: messages,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Anthropic API error:', error);
        return new Response(JSON.stringify({ error: 'AI service error', details: error }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      const data = await response.json();
      const aiResponse = data.content[0].text;

      // Detect what type of information was provided (for analytics)
      let infoType = 'general';
      const lower = message.toLowerCase();
      
      if (lower.includes('when') || lower.includes('start') || lower.includes('begin') || lower.includes('how long')) {
        infoType = 'onset-timing';
      } else if (lower.includes('where') || lower.includes('location') || lower.includes('point to')) {
        infoType = 'location';
      } else if (lower.includes('what does it feel') || lower.includes('describe') || lower.includes('character')) {
        infoType = 'character';
      } else if (lower.includes('worse') || lower.includes('aggravat') || lower.includes('trigger')) {
        infoType = 'aggravating';
      } else if (lower.includes('better') || lower.includes('reliev') || lower.includes('help')) {
        infoType = 'relieving';
      } else if (lower.includes('other symptom') || lower.includes('anything else') || lower.includes('associated')) {
        infoType = 'associated-symptoms';
      } else if (lower.includes('medical') || lower.includes('history') || lower.includes('past') || lower.includes('condition')) {
        infoType = 'pmh';
      } else if (lower.includes('medic') || lower.includes('drug') || lower.includes('prescription') || lower.includes('taking')) {
        infoType = 'medications';
      } else if (lower.includes('vital') || lower.includes('blood pressure') || lower.includes('heart rate') || lower.includes('temperature')) {
        infoType = 'vitals';
      } else if (lower.includes('smoke') || lower.includes('drink') || lower.includes('alcohol') || lower.includes('drug use') || lower.includes('work') || lower.includes('live')) {
        infoType = 'social';
      } else if (lower.includes('family') || lower.includes('parent') || lower.includes('mother') || lower.includes('father') || lower.includes('sibling')) {
        infoType = 'family-history';
      } else if (lower.includes('allerg')) {
        infoType = 'allergies';
      }

      return new Response(JSON.stringify({ 
        response: aiResponse,
        infoType: infoType
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error', message: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
