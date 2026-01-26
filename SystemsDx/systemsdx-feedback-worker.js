// SystemsDx Patient Safety Feedback - Cloudflare Worker
// Deploy to: systemsdx-feedback.laurenmfine.workers.dev

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
        question,
        moduleTitle,
        caseNarrative,
        moduleType, // 'rca', 'swiss', 'feedback', 'disclosure'
        allResponses, // for summary
        requestType // 'feedback' or 'summary'
      } = await request.json();

      let systemPrompt;
      let userMessage;

      if (requestType === 'summary') {
        // Final module summary
        systemPrompt = `You are an expert in patient safety, human factors, and healthcare quality improvement. You teach medical students to think in systems, not blame individuals.

A student has completed a patient safety analysis module: "${moduleTitle}"

KEY PRINCIPLES TO REINFORCE:
- Systems thinking over individual blame
- Latent conditions vs active failures
- Swiss cheese model of defenses
- Just Culture (distinguishing human error, at-risk behavior, reckless behavior)
- High Reliability Organization principles
- Psychological safety and speaking up

Provide constructive feedback (4-5 sentences) that:
1. Acknowledges specific strengths in their systems thinking
2. Identifies where they could deepen their analysis
3. Reinforces key patient safety concepts they demonstrated (or should consider)
4. Provides one actionable insight for clinical practice

Be encouraging but rigorous. Patient safety matters.`;

        userMessage = `The student's responses:
${JSON.stringify(allResponses, null, 2)}

Provide your summary:`;

      } else {
        // Per-question feedback
        const moduleContexts = {
          rca: `ROOT CAUSE ANALYSIS MODULE
Focus on: Contributing factors, latent conditions, system vulnerabilities
Key frameworks: 5 Whys, Fishbone diagram, Human factors analysis
Avoid: Individual blame, "be more careful" solutions`,
          
          swiss: `SWISS CHEESE MODEL MODULE  
Focus on: Defense layers, holes aligning, redundancy
Key concepts: Active failures vs latent conditions, error traps, recovery opportunities
Avoid: Single-point solutions, assuming humans won't err`,
          
          feedback: `CONSTRUCTIVE FEEDBACK MODULE
Focus on: Psychological safety, learning culture, Just Culture principles
Key frameworks: Advocacy-inquiry, SBI feedback model, growth mindset
Avoid: Shame, blame, public humiliation approaches`,
          
          disclosure: `ERROR DISCLOSURE MODULE
Focus on: Transparency, empathy, accountability, ongoing support
Key principles: Honesty, appropriate apology, explanation without excuses
Avoid: Defensive language, minimizing, abandoning patient/family`
        };

        systemPrompt = `You are an expert in patient safety and healthcare quality improvement, teaching medical students systems thinking.

${moduleContexts[moduleType] || moduleContexts.rca}

CASE: "${moduleTitle}"
${caseNarrative}

EVALUATION APPROACH:
- Assess whether the student is thinking in SYSTEMS, not blaming individuals
- Look for recognition of latent conditions and organizational factors
- Check if proposed solutions are systemic (not just "be more careful")
- Note understanding of human factors and cognitive limitations
- Recognize good application of safety frameworks

FEEDBACK GUIDELINES:
- Provide brief feedback (3-4 sentences)
- Acknowledge what they got right in their systems thinking
- Point out gaps WITHOUT giving the complete answer
- Suggest frameworks or concepts to consider
- Be encouraging but maintain rigor - patient safety matters`;

        userMessage = `Question: ${question}

Student's response: "${studentResponse}"

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
          max_tokens: requestType === 'summary' ? 400 : 300,
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
