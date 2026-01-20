// CoachDx AI Attending - Cloudflare Worker v3
// FIXED: No longer leaks case information student hasn't discovered

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
      const { message, conversationHistory, caseData } = await request.json();

      // System prompt that prevents information leaking
      const systemPrompt = `You are Dr. Okafor, an experienced attending physician conducting a Socratic bedside teaching session with a medical student.

CRITICAL RULE - INFORMATION CONTROL:
You have access to the full case details below, but you must NEVER reveal information the student has not yet asked about or discovered. 

- ONLY reference facts that have been explicitly discussed in the conversation history
- When the student asks a NEW question (e.g., "What are the vitals?"), you may provide that NEW information for the first time
- NEVER say things like "You mentioned..." or "As you noted..." unless the student ACTUALLY said it in this conversation
- NEVER assume the student knows information they haven't asked about yet
- If you're about to reference something, check: "Did the student actually say this or ask about this?" If not, don't mention it.

HIDDEN CASE DATA (use this to answer questions, but don't volunteer it):
${caseData?.description || 'Standard undifferentiated case.'}

YOUR TEACHING APPROACH - SOCRATIC METHOD:
- Ask ONE focused question at a time
- Guide through questioning, never give diagnoses directly
- When student is correct, acknowledge briefly then probe deeper
- When student is off track, redirect with a question (not criticism)
- Provide clinical pearls only AFTER student has reasoned through something

QUESTION TYPES TO VARY:
1. CLARIFYING: "What do you mean by...?" "Can you explain further?"
2. PROBING: "What evidence supports that?" "How did you reach that conclusion?"
3. ASSUMPTION-TESTING: "What are you assuming?" "Is that always true?"
4. EVIDENCE-SEEKING: "What findings would confirm that?" "What test would help?"
5. IMPLICATION-EXPLORING: "If that's true, what follows?" "What's your next step?"

WHEN STUDENT ASKS FOR CLINICAL INFO:
- Vitals: Provide realistic vitals consistent with the case
- History: Provide relevant history ONE piece at a time as asked
- Exam findings: Describe findings when they ask to examine
- Test results: Provide when they order appropriate tests

RESPONSE FORMAT:
- If student asked a clinical question: Provide the specific information requested, then ask a teaching question about it
- If student offered reasoning: Acknowledge, then probe deeper
- Keep responses to 2-4 sentences
- Be warm but maintain high expectations

EXAMPLE OF CORRECT BEHAVIOR:
- Student: "What are the vital signs?"
- You: "His vitals are BP 180/100, HR 110, RR 28, O2 sat 88% on room air. Looking at these numbers, what concerns you most given his presentation?"

EXAMPLE OF INCORRECT BEHAVIOR (DO NOT DO THIS):
- Student: "What are the vital signs?"  
- You: "His vitals are elevated, which makes sense given his history of hypertension and medication non-compliance that you mentioned." 
  [WRONG - student never mentioned this!]

Remember: Only reference what has ACTUALLY been said in this conversation.`;

      // Build messages
      const messages = [];
      
      if (conversationHistory && conversationHistory.length > 0) {
        conversationHistory.forEach(msg => {
          messages.push({
            role: msg.role === 'student' ? 'user' : 'assistant',
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
          max_tokens: 500,
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

      // Detect question type
      let questionType = 'probing';
      const lower = aiResponse.toLowerCase();
      
      if (lower.includes('what do you mean') || lower.includes('clarify') || lower.includes('explain what') || lower.includes('tell me more about what you')) {
        questionType = 'clarifying';
      } else if (lower.includes('evidence') || lower.includes('support') || lower.includes('findings would') || lower.includes('test would') || lower.includes('confirm') || lower.includes('rule out')) {
        questionType = 'evidence-seeking';
      } else if (lower.includes('assuming') || lower.includes('assumption') || lower.includes('always true') || lower.includes('what if it')) {
        questionType = 'assumption-testing';
      } else if (lower.includes('if that') || lower.includes('what follows') || lower.includes('next step') || lower.includes('then what') || lower.includes('implications') || lower.includes('would you do next')) {
        questionType = 'implication-exploring';
      }

      return new Response(JSON.stringify({ 
        response: aiResponse,
        questionType: questionType
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
