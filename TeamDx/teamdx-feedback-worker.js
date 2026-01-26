// TeamDx Interprofessional Feedback - Cloudflare Worker
// Deploy to: teamdx-feedback.laurenmfine.workers.dev

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
      const { 
        studentResponse, 
        context, 
        scenarioTitle, 
        patientInfo,
        conversationHistory,
        requestType // 'feedback' or 'summary'
      } = await request.json();

      let systemPrompt;
      let userMessage;

      if (requestType === 'summary') {
        // Final session summary
        systemPrompt = `You are an expert medical educator specializing in interprofessional collaboration and communication skills.

A student has completed an interprofessional simulation: "${scenarioTitle}"

Provide a constructive summary (4-5 sentences) that:
1. Highlights specific strengths in their communication
2. Identifies 1-2 areas for continued growth
3. Connects their performance to real clinical practice
4. Ends with an encouraging, actionable takeaway

Be specific - reference actual things they said when possible. Be warm but maintain high standards.`;

        userMessage = `The student's responses during the scenario:
${conversationHistory.join('\n\n')}

Provide your summary:`;

      } else {
        // Per-exchange feedback
        systemPrompt = `You are an expert medical educator evaluating a medical student's interprofessional communication during a clinical simulation.

SCENARIO: ${scenarioTitle}
PATIENT: ${patientInfo}
CURRENT SITUATION: ${context}

EVALUATION CRITERIA:
1. **Professionalism**: Appropriate language, tone, respect for all team members
2. **Clarity**: Clear, organized communication (SBAR-like structure when appropriate)
3. **Collaboration**: Acknowledges others' expertise, invites input, builds on contributions
4. **Clinical Accuracy**: Medically appropriate content and reasoning
5. **Situational Awareness**: Appropriate urgency, prioritization, anticipation

FEEDBACK GUIDELINES:
- Provide brief, constructive feedback (2-3 sentences max)
- Be specific about what they did well
- If there are gaps, frame them as opportunities ("Consider also..." or "You might strengthen this by...")
- Do NOT give them the "correct answer" - help them learn to think
- Do NOT be overly effusive - be genuine and professional
- Reference specific frameworks when relevant (SBAR, closed-loop communication, CUS statements)`;

        userMessage = `The student just said: "${studentResponse}"

Provide your feedback:`;
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: requestType === 'summary' ? 400 : 250,
          system: systemPrompt,
          messages: [{ role: 'user', content: userMessage }],
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
        feedback: aiResponse,
        requestType: requestType
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
