// ReasonDx Simulated Patient Chat - Cloudflare Worker
// Deploy to: reasondx-patient.laurenmfine.workers.dev
//
// Receives patient context + student question, returns an in-character patient response.
// The platform sends { message, conversationHistory, patientData } and expects { response }.

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
      return new Response(
        JSON.stringify({ status: 'ok', version: '1.0', service: 'reasondx-patient' }),
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
      );
    }

    try {
      const { message, conversationHistory, patientData } = await request.json();

      // Build patient identity from context
      const demographics = patientData.demographics || {};
      const name = demographics.name || 'the patient';
      const age = demographics.age || '';
      const gender = demographics.gender || '';
      const chiefComplaint = patientData.chiefComplaint || patientData.cc || 'feeling unwell';

      // Build knowledge base from patientData
      let knowledgeBlock = '';

      if (patientData.narrative) {
        knowledgeBlock += `FULL CASE NARRATIVE:\n${patientData.narrative}\n\n`;
      }

      if (patientData.vitals) {
        knowledgeBlock += `VITALS: ${JSON.stringify(patientData.vitals)}\n\n`;
      }

      if (patientData.symptoms && patientData.symptoms.length > 0) {
        knowledgeBlock += `SYMPTOMS: ${patientData.symptoms.join('; ')}\n\n`;
      }

      if (patientData.pmh && patientData.pmh.length > 0) {
        knowledgeBlock += `PAST MEDICAL HISTORY: ${patientData.pmh.join('; ')}\n\n`;
      }

      if (patientData.medications && patientData.medications.length > 0) {
        knowledgeBlock += `MEDICATIONS: ${patientData.medications.join('; ')}\n\n`;
      }

      if (patientData.socialHistory && patientData.socialHistory.length > 0) {
        knowledgeBlock += `SOCIAL HISTORY: ${patientData.socialHistory.join('; ')}\n\n`;
      }

      if (patientData.familyHistory && patientData.familyHistory.length > 0) {
        knowledgeBlock += `FAMILY HISTORY: ${patientData.familyHistory.join('; ')}\n\n`;
      }

      if (patientData.allergies && patientData.allergies.length > 0) {
        knowledgeBlock += `ALLERGIES: ${patientData.allergies.join('; ')}\n\n`;
      }

      if (patientData.physicalExam) {
        knowledgeBlock += `PHYSICAL EXAM FINDINGS: ${JSON.stringify(patientData.physicalExam)}\n\n`;
      }

      if (patientData.labResults) {
        knowledgeBlock += `LAB RESULTS: ${JSON.stringify(patientData.labResults)}\n\n`;
      }

      // Include all structured Q&A if available
      if (patientData.allAnswers) {
        knowledgeBlock += `ALL HISTORY QUESTIONS & ANSWERS:\n`;
        Object.entries(patientData.allAnswers).forEach(([id, qa]) => {
          knowledgeBlock += `  Q: ${qa.question}\n  A: ${qa.answer}\n\n`;
        });
      }

      const systemPrompt = `You are a simulated patient in a clinical skills training exercise. You are role-playing as a patient being interviewed by a medical student.

YOUR IDENTITY:
- Name: ${name}
- Age: ${age}
- Gender: ${gender}
- Chief Complaint: "${chiefComplaint}"

YOUR COMPLETE MEDICAL INFORMATION (use this to answer questions):
${knowledgeBlock}

CRITICAL RULES FOR STAYING IN CHARACTER:
1. You ARE the patient. Speak in first person. Never break character.
2. Answer ONLY what the student asks. Do NOT volunteer extra information.
3. Use natural patient language, NOT medical jargon. Say "chest pain" not "substernal chest pressure." Say "it hurts when I breathe" not "pleuritic pain."
4. Express appropriate emotions: worried, scared, in pain, frustrated — whatever fits the scenario.
5. If asked something not covered in your case data, give a realistic "I don't know" or "I'm not sure" — patients don't have perfect information.
6. If asked about symptoms, describe them the way a real patient would — with uncertainty, imprecise timing, and personal context.
7. Keep responses conversational and brief (1-3 sentences typical). Patients don't give speeches.
8. If the student asks about your vitals or test results, you would NOT know these — say "I'm not sure, you'd have to check" or similar.
9. If the student uses medical terminology you wouldn't understand, ask them to explain in simpler terms.
10. NEVER reveal the diagnosis. You are a patient who doesn't know what's wrong — that's why you're at the hospital.

EMOTIONAL AUTHENTICITY:
- If your condition is serious, show appropriate worry
- If you're in pain, reflect that in your responses (short answers, distraction)
- If the student is kind and explains things, show relief and gratitude
- If the student is brusque, you can be slightly guarded

Remember: A great simulated patient makes the student WORK for the information through good history-taking.`;

      // Build messages
      const messages = [];
      if (conversationHistory && conversationHistory.length > 0) {
        conversationHistory.forEach(msg => {
          messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content,
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
        return new Response(
          JSON.stringify({ error: 'AI service error', details: error }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          }
        );
      }

      const data = await response.json();
      const aiResponse = data.content[0].text;

      return new Response(
        JSON.stringify({ response: aiResponse }),
        { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } }
      );
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error', message: error.message }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        }
      );
    }
  },
};
