// =====================================================
// ADVENTURE COMMUNICATION WORKER
// Cloudflare Worker for ReasonDx Adventure Cases
// Handles AI-powered communication assessment
// =====================================================

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Only allow POST
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
      });
    }

    try {
      const { scenario, turnNumber, learnerResponse, conversationHistory, clinicalContext } = await request.json();

      // Build the system prompt for dual-layer assessment
      const systemPrompt = buildSystemPrompt(scenario, turnNumber, clinicalContext);

      // Call Anthropic API
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          system: systemPrompt,
          messages: [
            {
              role: "user",
              content: `The medical trainee responded: "${learnerResponse}"\n\nEvaluate this response and return JSON only.`
            }
          ],
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Anthropic API error:", error);
        return new Response(JSON.stringify({ error: "API error", details: error }), {
          status: 500,
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
        });
      }

      const data = await response.json();
      const content = data.content[0].text;

      // Parse the JSON from Claude's response
      let evaluation;
      try {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          evaluation = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error("No JSON found in response");
        }
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        evaluation = {
          visibleScores: { empathy: 3, plainLanguage: 3, clarity: 3, tone: 3, engagement: 3 },
          hiddenScores: { accuracy: 3, appropriateUncertainty: 3 },
          strengths: ["Response received"],
          improvements: ["Unable to parse detailed feedback"],
          medicalIssues: [],
          nextEmotionalState: "same",
          characterReaction: "She listens attentively.",
          nextPrompt: null,
          overallQuality: "adequate"
        };
      }

      return new Response(JSON.stringify(evaluation), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

    } catch (error) {
      console.error("Worker error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
      });
    }
  },
};

function buildSystemPrompt(scenario, turnNumber, clinicalContext) {
  const turns = {
    1: {
      prompt: "What's happening? Is he going to be okay?",
      focus: "Breaking bad news, initial empathy",
      probes: ["Can they explain MI in plain terms?", "Do they show appropriate empathy?"]
    },
    2: {
      prompt: "But HOW? He quit smoking years ago...",
      focus: "Risk factors, avoiding blame",
      probes: ["Do they understand multifactorial risk?", "Do they avoid blaming patient/family?"]
    },
    3: {
      prompt: "What exactly are you going to do? Is the cath lab surgery?",
      focus: "Explaining procedures",
      probes: ["Can they explain PCI simply?", "Do they address her fears?"]
    },
    4: {
      prompt: "Why not clot-busting medicine like my friend's husband got?",
      focus: "Treatment rationale",
      probes: ["Do they know PCI vs lytics indications?", "Can they explain without being defensive?"]
    },
    5: {
      prompt: "What are his chances? I need to know - I have kids at home.",
      focus: "Prognosis, appropriate uncertainty",
      probes: ["Can they give realistic hope?", "Do they acknowledge uncertainty?"]
    },
    6: {
      prompt: "Is there anything I can do? Can I see him before he goes?",
      focus: "Family-centered care, closure",
      probes: ["Do they include family?", "Do they provide appropriate closure?"]
    }
  };

  const turn = turns[turnNumber] || turns[1];

  return `You are evaluating a medical trainee's communication with an anxious spouse during a medical emergency.

CLINICAL CONTEXT:
- Patient: ${clinicalContext?.patient || "58-year-old male, Robert Chen"}
- Diagnosis: ${clinicalContext?.diagnosis || "Anterior STEMI"}
- Key Findings: ${clinicalContext?.findings || "ST elevation V1-V4, Troponin 0.89 ng/mL"}
- Plan: ${clinicalContext?.plan || "Emergent cath lab for primary PCI"}
- Status: ${clinicalContext?.status || "Hemodynamically stable but symptomatic"}

FAMILY MEMBER:
- Name: Mrs. Chen (wife)
- Background: Accountant, intelligent but no medical training
- Current state: Very anxious, trying to hold it together

CURRENT TURN: ${turnNumber} of 6
She just said: "${turn.prompt}"
Assessment focus: ${turn.focus}

EVALUATE TWO LAYERS:

LAYER 1 - COMMUNICATION (Visible to learner):
- empathy (1-5): Acknowledging emotions, showing understanding
- plainLanguage (1-5): Avoiding jargon OR explaining it
- clarity (1-5): Organized, easy-to-follow
- tone (1-5): Warm, professional, honest without devastating
- engagement (1-5): Inviting questions, checking understanding

LAYER 2 - KNOWLEDGE (Hidden - revealed at end):
Based on HOW they explained things:
- pathophysiology (1-5 or null): Do they understand WHY?
- treatmentRationale (1-5 or null): Do they know WHY this treatment?
- guidelineKnowledge (1-5 or null): Do they know standards?
- prognosisKnowledge (1-5 or null): Do they understand outcomes?
- accuracy (1-5): Is information CORRECT?
- appropriateUncertainty (1-5 or null): Do they acknowledge unknowns?

FOR THIS TURN, ASSESS: ${turn.probes.join("; ")}

Return ONLY valid JSON:
{
  "visibleScores": {
    "empathy": <1-5>,
    "plainLanguage": <1-5>,
    "clarity": <1-5>,
    "tone": <1-5>,
    "engagement": <1-5>
  },
  "hiddenScores": {
    "pathophysiology": <1-5 or null>,
    "treatmentRationale": <1-5 or null>,
    "guidelineKnowledge": <1-5 or null>,
    "prognosisKnowledge": <1-5 or null>,
    "accuracy": <1-5>,
    "appropriateUncertainty": <1-5 or null>
  },
  "strengths": ["specific strength with quote if possible"],
  "improvements": ["specific suggestion"],
  "medicalIssues": ["any inaccuracies, or empty array"],
  "nextEmotionalState": "calmer|same|more-anxious|confused",
  "characterReaction": "Brief description of her visible reaction",
  "nextPrompt": "What she says next, or null if turn 6",
  "overallQuality": "excellent|good|adequate|needs-improvement"
}`;
}
