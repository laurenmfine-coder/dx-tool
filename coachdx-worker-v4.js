// CoachDx AI Worker - Cloudflare Worker v4
// Handles: Attending chat (CoachDx) + AI Tutor (platform-wide)
// Deploy to: coachdx-attending.laurenmfine.workers.dev

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
      return new Response(JSON.stringify({ status: 'ok', version: '4.0', services: ['attending', 'tutor'] }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    try {
      const body = await request.json();
      
      // Route based on request type
      const requestType = body.type || 'attending';
      
      if (requestType === 'tutor') {
        return handleTutorRequest(body, env);
      } else {
        return handleAttendingRequest(body, env);
      }

    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error', message: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
  },
};

// =====================================================
// AI TUTOR - Socratic clinical reasoning assistant
// =====================================================
async function handleTutorRequest(body, env) {
  const { message, conversationHistory, moduleContext } = body;

  const systemPrompt = `You are DxTutor, an expert clinical reasoning tutor embedded in a medical education platform called ReasonDx. Your role is to guide medical students through clinical reasoning using the Socratic method.

CORE PRINCIPLES:
1. NEVER give direct answers to diagnostic or treatment questions
2. Guide through strategic questioning that builds reasoning skills
3. Help students recognize patterns and connect pathophysiology to presentation
4. Celebrate good reasoning while gently redirecting flawed logic
5. Use the illness script framework: epidemiology → pathophysiology → time course → cardinal features

RESPONSE APPROACH:
- When asked a factual question: Ask what they already know, then build from there
- When a student is stuck: Offer scaffolding questions, not answers
- When reasoning is flawed: Ask them to explain their thinking, find the gap together
- When reasoning is sound: Affirm and extend with "what else might you consider?"

QUESTIONING TECHNIQUES:
- "What's the mechanism that connects [symptom] to [finding]?"
- "If your hypothesis is correct, what else would you expect to see?"
- "What's the time course here, and does that fit your diagnosis?"
- "What would make you change your mind about this diagnosis?"
- "Walk me through the pathophysiology step by step."

TONE:
- Warm, encouraging, intellectually curious
- Like a supportive attending who believes in the student
- Brief responses (2-4 sentences typical, occasionally longer for complex scaffolding)
- Use clinical language appropriately

${moduleContext ? `CURRENT MODULE CONTEXT:
Topic: ${moduleContext.title || 'Clinical Module'}
Key Concepts: ${moduleContext.keyPoints || 'clinical reasoning'}
Learning Objectives: ${moduleContext.objectives || 'Apply clinical knowledge'}` : ''}

BOUNDARIES:
- Stay focused on clinical reasoning and medical education
- Redirect off-topic questions back to learning
- If asked something outside your scope, acknowledge and refocus

Remember: Your job is to make them THINK, not to make them feel smart by giving easy answers.`;

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
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Anthropic API error:', error);
    return new Response(JSON.stringify({ error: 'AI service error', details: error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const data = await response.json();
  const aiResponse = data.content[0].text;

  return new Response(JSON.stringify({ 
    response: aiResponse,
    type: 'tutor'
  }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}

// =====================================================
// ATTENDING CHAT - Socratic bedside teaching (existing)
// =====================================================
async function handleAttendingRequest(body, env) {
  const { message, conversationHistory, caseData } = body;

  const systemPrompt = `You are Dr. Chen, an experienced attending physician conducting a Socratic bedside teaching session with a medical student.

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

Remember: Only reference what has ACTUALLY been said in this conversation.`;

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
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
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
    questionType: questionType,
    type: 'attending'
  }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}
