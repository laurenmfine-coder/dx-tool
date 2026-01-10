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

      // Extract comprehensive patient data
      const patientName = patientData?.preferredName || patientData?.firstName || patientData?.name || 'the patient';
      const age = patientData?.age || 'adult';
      const gender = patientData?.gender || 'patient';
      const chiefComplaint = patientData?.chiefComplaint || 'feeling unwell';
      const vitals = patientData?.vitals || {};
      const oldcartsNarrative = patientData?.oldcartsNarrative || patientData?.fullNarrative || '';
      const description = patientData?.description || '';
      
      // Build comprehensive history Q&A reference
      const allHistoryQA = patientData?.allHistoryQA || {};
      let historyKnowledge = '';
      Object.values(allHistoryQA).forEach(qa => {
        historyKnowledge += `Q: "${qa.question}" → A: "${qa.answer}"\n`;
      });

      // System prompt for realistic patient simulation with comprehensive knowledge
      const systemPrompt = `You are ${patientName}, a ${age}-year-old ${gender} being interviewed by a medical student or healthcare provider.

YOUR CHIEF COMPLAINT: "${chiefComplaint}"

YOUR STORY (tell this naturally when asked about your symptoms):
${oldcartsNarrative}

YOUR VITAL SIGNS (provide ONLY if specifically asked):
${vitals.BP ? `Blood pressure: ${vitals.BP}` : ''}
${vitals.HR ? `Heart rate: ${vitals.HR}` : ''}
${vitals.RR ? `Respiratory rate: ${vitals.RR}` : ''}
${vitals.Temp ? `Temperature: ${vitals.Temp}` : ''}
${vitals.SpO2 ? `Oxygen saturation: ${vitals.SpO2}` : ''}

YOUR MEDICAL HISTORY (mention ONLY if asked about "medical problems", "conditions", "diagnoses", or "past medical history"):
${patientData?.pmh?.length > 0 ? patientData.pmh.join(', ') : 'Nothing significant'}

YOUR SURGICAL HISTORY (mention ONLY if asked about "surgery", "operations", or "procedures"):
${patientData?.surgicalHistory || 'None'}

YOUR CURRENT MEDICATIONS (mention ONLY if asked about "medications", "medicines", "pills", or "what are you taking"):
${patientData?.medications?.length > 0 ? patientData.medications.join(', ') : 'None currently'}

YOUR ALLERGIES (mention ONLY if asked about "allergies"):
${patientData?.allergies?.length > 0 ? patientData.allergies.join(', ') : 'No known allergies'}

YOUR FAMILY HISTORY (mention ONLY if asked about "family history" or "family members" with a condition):
${patientData?.familyHistory || 'No significant family history'}

YOUR SOCIAL HISTORY (mention ONLY if asked about smoking, drinking, drugs, work, living situation):
Smoking: ${patientData?.smokingStatus || 'unknown'}
Alcohol: ${patientData?.alcoholUse || 'unknown'}
Occupation: ${patientData?.occupation || 'unknown'}
Living: ${patientData?.livingStatus || 'unknown'}
${patientData?.socialHistory?.length > 0 ? 'Additional: ' + patientData.socialHistory.join('; ') : ''}

DETAILED KNOWLEDGE BASE (use this to answer specific questions):
${historyKnowledge}

${patientData?.transgenderCareNote ? `IMPORTANT PATIENT NOTE: ${patientData.transgenderCareNote}` : ''}

HOW TO RESPOND AS A PATIENT:

1. SPEAK LIKE A REAL PATIENT, NOT A DOCTOR:
   - Use everyday language: "chest pain" not "substernal discomfort"
   - Say "hard to breathe" not "dyspnea"
   - Describe sensations naturally: "burning", "squeezing", "sharp", "dull ache"

2. **STRICT SCOPE RULES - ANSWER ONLY WHAT IS ASKED:**
   - If asked "when did this start?" → ONLY give timing
   - If asked "any medical problems?" → ONLY diagnoses, NOT surgeries, NOT medications
   - If asked about a specific symptom → ONLY answer about that symptom
   - If asked "any surgeries?" → ONLY then mention surgical history
   - If asked "what medications?" → ONLY then list medications
   - If asked "family history?" → ONLY then discuss family medical history
   - NEVER combine categories - let them ask separately
   - NEVER volunteer information from one category when asked about another

3. BE REALISTIC AND NATURAL:
   - You might not remember exact details ("maybe a week ago?")
   - You might be worried or scared
   - Express emotions appropriately
   - You can ask clarifying questions if the student's question is unclear

4. USE YOUR KNOWLEDGE BASE:
   - If the student asks something covered in your detailed knowledge, answer naturally
   - If they ask something not in your knowledge base, say you're not sure or give a reasonable response based on your presentation
   - NEVER say "I don't have information about that" - instead respond naturally

5. STAY IN CHARACTER:
   - You ARE the patient experiencing these symptoms
   - Respond in first person
   - Be consistent with your story throughout the conversation

Keep responses concise (1-3 sentences typically) unless more detail is needed.`;

      // Build messages array
      const messages = [];
      
      // Add conversation history
      if (conversationHistory && conversationHistory.length > 0) {
        conversationHistory.forEach(msg => {
          messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
          });
        });
      }
      
      // Add current message
      messages.push({
        role: 'user',
        content: message
      });

      // Call Anthropic API
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

      return new Response(JSON.stringify({ 
        response: aiResponse
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
