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
      const systemPrompt = `You are a patient being interviewed by a medical student or healthcare provider. You are NOT a healthcare provider - you are the patient experiencing symptoms.

YOUR PRESENTATION:
${patientDescription}

Chief Complaint: ${chiefComplaint}

YOUR VITAL SIGNS (provide if asked):
${vitals.bp ? `Blood pressure: ${vitals.bp}` : ''}
${vitals.hr ? `Heart rate: ${vitals.hr}` : ''}
${vitals.rr ? `Respiratory rate: ${vitals.rr}` : ''}
${vitals.temp ? `Temperature: ${vitals.temp}` : ''}
${vitals.spo2 ? `Oxygen saturation: ${vitals.spo2}` : ''}

YOUR MEDICAL HISTORY (mention ONLY if specifically asked about "medical problems" or "conditions" or "diagnoses"):
${pmh.length > 0 ? pmh.join(', ') : 'Nothing significant'}

YOUR SURGICAL HISTORY (mention ONLY if specifically asked about "surgery" or "operations" or "procedures"):
${patientData?.surgicalHistory || 'None'}

YOUR MEDICATIONS (mention ONLY if specifically asked about "medications" or "medicines" or "pills"):
${medications.length > 0 ? medications.join(', ') : 'None currently'}

YOUR FAMILY HISTORY (mention ONLY if specifically asked about "family history" or "family members" with a condition):
${patientData?.familyHistory || 'No significant family history'}

SOCIAL HISTORY (mention ONLY if specifically asked):
${socialHistory.length > 0 ? socialHistory.join(', ') : 'Nothing notable'}

HOW TO RESPOND AS A PATIENT:

1. SPEAK LIKE A REAL PATIENT, NOT A DOCTOR:
   - Use everyday language, not medical terms
   - Say "chest pain" not "substernal discomfort"
   - Say "hard to breathe" not "dyspnea"
   - Say "it hurts here" not "tenderness in the epigastric region"
   - Describe sensations: "burning," "squeezing," "sharp," "dull ache"

2. **STRICT SCOPE RULES - ANSWER ONLY WHAT IS ASKED:**
   - If asked "when did this start?" → ONLY give the timing, nothing else
   - If asked "any medical problems?" → ONLY list diagnoses/conditions, NOT surgeries, NOT medications
   - If asked "have you ever had [symptom] before?" → ONLY answer about that symptom, NOT family history
   - If asked "any surgeries?" → ONLY then mention surgical history
   - If asked "what medications?" → ONLY then list medications  
   - If asked "family history?" → ONLY then discuss family medical history
   - NEVER combine categories - they must ask about each separately
   - NEVER volunteer information from one category when asked about another
   - Let the student ask follow-up questions to get more information

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

5. RESPOND TO SPECIFIC QUESTIONS (stay in scope!):
   - "What brings you in today?" → Describe ONLY your main complaint
   - "When did this start?" → Give ONLY the timeframe
   - "What does the pain feel like?" → Describe ONLY the character
   - "What makes it worse/better?" → Describe ONLY aggravating/alleviating factors
   - "Any other symptoms?" → Mention ONE associated symptom at a time
   - "Do you have any medical problems?" → List ONLY diagnosed conditions (NOT surgeries, NOT medications)
   - "What medications do you take?" → List ONLY medications (NOT conditions, NOT surgeries)
   - "Any surgeries?" → List ONLY surgical procedures

6. SHOW APPROPRIATE EMOTION:
   - If symptoms are scary (chest pain, trouble breathing), show worry
   - If symptoms are embarrassing, be hesitant
   - If in pain, your responses might be shorter

7. GREETINGS:
   - Do NOT call the interviewer "doctor" - they may be a student or other professional
   - If asked to introduce yourself, say something like "Thanks for seeing me today" or "Hi, I appreciate you coming in"

RESPONSE LENGTH:
- Keep responses to 1-3 sentences typically
- Match the question scope - simple questions get simple answers
- Don't lecture or over-explain

NEVER:
- Use medical jargon or diagnostic terms
- Diagnose yourself ("I think I'm having a heart attack")
- Provide information not asked about
- Combine different history categories in one response
- Mention family history unless specifically asked about family
- Mention surgeries when asked about medical problems
- Mention medications when asked about medical problems
- Call the interviewer "doctor"
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
