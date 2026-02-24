// ═══════════════════════════════════════════════════════════
// DX-BIAS-ASSESSMENT — Communication & Implicit Bias Feedback
// Analyzes clinical conversations for equity, assumptions, 
// and communication quality across the ReasonDx ecosystem.
// ═══════════════════════════════════════════════════════════

const BiasAssessment = {
  workerUrl: 'https://coachdx-attending.laurenmfine.workers.dev',
  model: 'claude-sonnet-4-20250514',
  conversations: [],   // Running log of all exchanges
  assessments: [],     // Completed assessments
  panelInjected: false,
  panelVisible: false,
  autoAssessThreshold: 8,  // Auto-assess after N student messages
  studentMsgCount: 0,

  // ─── SYSTEM PROMPT ────────────────────────────────────
  systemPrompt: `You are an expert in clinical reasoning, cognitive bias in medicine, health equity, and patient-centered communication. You assess medical student clinical encounters holistically — both their REASONING PROCESS and their COMMUNICATION.

PART 1: COGNITIVE & CLINICAL REASONING BIASES
Assess the student's history-taking, differential diagnosis, workup, and management for:

- ANCHORING BIAS: Locking onto an early diagnosis and failing to consider alternatives. Signs: narrow questioning focused on one diagnosis, ignoring data that contradicts the anchor, not adjusting differential when new information emerges.
- PREMATURE CLOSURE: Accepting a diagnosis before adequately verifying it. Signs: stopping history after 2-3 questions, not exploring associated symptoms or risk factors, ordering only confirmatory tests.
- AVAILABILITY BIAS: Overweighting diagnoses that are common or recently encountered over rarer but possible conditions. Signs: going straight to the most common cause without considering dangerous alternatives.
- CONFIRMATION BIAS: Seeking only information that confirms a suspected diagnosis. Signs: selective exam systems, ordering labs that confirm but not those that could rule out alternatives, ignoring negative findings.
- FRAMING EFFECT: Being unduly influenced by how information is presented. Signs: accepting the triage note at face value without independent verification, letting the chief complaint overly narrow the approach.
- SEARCH SATISFYING: Stopping the search once one abnormality is found. Signs: finding one diagnosis and not looking for concurrent pathology, incomplete review of systems after finding one positive.
- REPRESENTATIVENESS: Assuming a patient must have a typical presentation of a disease. Signs: ruling out diagnoses because the presentation is atypical, anchoring on classic presentations.
- BASE RATE NEGLECT: Ignoring disease prevalence when estimating probability. Signs: overweighting rare diagnoses without risk factors, underweighting common diagnoses.
- DIAGNOSTIC MOMENTUM: Accepting a prior diagnosis (from triage, EMS, referring provider) without independent verification.
- OMISSION BIAS: Preferring inaction over action when both carry risk. Signs: not ordering time-sensitive tests or treatments, delayed disposition.

PART 2: HISTORY-TAKING QUALITY
- Was the history systematic (OLDCARTS, associated symptoms, PMH, meds, allergies, social, family)?
- Were red flag symptoms explored?
- Were risk factors assessed?
- Were the RIGHT questions asked for the differential, or was questioning narrow?
- Was the patient allowed to tell their story, or was the history interrogation-style?

PART 3: DIFFERENTIAL & WORKUP ANALYSIS
If expert differential data is provided, compare the student's approach:
- Did they consider the correct diagnosis in their questioning pattern?
- Did they cast a wide enough net initially before narrowing?
- Were dangerous "can't miss" diagnoses considered (even if unlikely)?
- Was the workup appropriate — labs and imaging that test the differential, not just confirm one diagnosis?
- Were there unnecessary tests ordered (shotgun approach)?

PART 4: IMPLICIT BIAS & COMMUNICATION
- Assumptions based on demographics (pain tolerance, compliance, substance use, etc.)
- Communication quality: empathy, health literacy, shared decision-making
- Cultural humility and social determinants of health consideration
- Professional communication with team members (nurses, consultants, attendings)

FORMAT YOUR RESPONSE AS JSON:
{
  "overallScore": 0-100,
  "category": "Excellent|Good|Developing|Needs Attention",
  "reasoningScore": 0-100,
  "communicationScore": 0-100,
  "strengths": ["...", "..."],
  "cognitiveBiases": [
    { "bias": "anchoring|premature_closure|confirmation|availability|search_satisfying|framing|representativeness|base_rate_neglect|diagnostic_momentum|omission", "severity": "info|caution|flag", "evidence": "...", "impact": "...", "correction": "..." }
  ],
  "historyAssessment": {
    "score": 0-100,
    "systemsCovered": ["...", "..."],
    "missedAreas": ["...", "..."],
    "redFlagsExplored": true/false,
    "notes": "..."
  },
  "differentialAssessment": {
    "breadthScore": 0-100,
    "dangerousMissed": ["...", "..."],
    "notes": "..."
  },
  "biasFlags": [
    { "type": "anchoring|assumption|communication|equity", "severity": "info|caution|flag", "observation": "...", "suggestion": "..." }
  ],
  "communicationNotes": ["...", "..."],
  "growthAreas": ["...", "..."],
  "oneLineSummary": "..."
}

Be constructive and educational. Frame cognitive biases as learning opportunities with specific examples from their conversation. If the student demonstrated strong reasoning, say so and explain WHY it was strong. Always provide at least 2-3 growth areas. Only flag genuine bias — an efficient history is not the same as premature closure.`,

  // ─── LOG A CONVERSATION EXCHANGE ──────────────────────
  logExchange(role, text, context = {}) {
    this.conversations.push({
      role,          // 'student', 'patient', 'nurse', 'attending', 'consultant', 'system'
      text,
      context,       // { characterName, stage, caseId, etc. }
      timestamp: Date.now()
    });

    if (role === 'student') {
      this.studentMsgCount++;
      // Auto-assess at threshold
      if (this.studentMsgCount > 0 && this.studentMsgCount % this.autoAssessThreshold === 0) {
        this.showAssessmentHint();
      }
    }
  },

  // ─── IMPORT EXISTING CONVERSATION ─────────────────────
  importTranscript(exchanges) {
    // Import from chatHistory format: [{role: 'student'|'patient', text: '...'}]
    exchanges.forEach(e => {
      this.logExchange(e.role, e.text, e.context || {});
    });
  },

  // ─── COLLECT CLINICAL DECISION DATA ─────────────────
  // Pull structured data from whichever platform is active
  collectClinicalData() {
    const data = {};
    try {
      // ── ED Board ──────────────────────────────────
      if (typeof patients !== 'undefined' && typeof selectedPatientId !== 'undefined') {
        const p = patients.find(x => x.id === selectedPatientId);
        if (p) {
          data.source = 'ED Board';
          data.chatHistory = (p.chatHistory || []).map(m => m.role + ': ' + m.text);
          data.examSystemsExplored = p.discovered?.examSystems || [];
          data.labsOrdered = p.discovered?.labsReady || [];
          data.imagingOrdered = p.discovered?.imagingReady || [];
          data.treatmentsOrdered = p.discovered?.treatmentsOrdered || [];
          data.questionCount = (p.chatHistory || []).filter(m => m.role === 'student').length;
          data.presentation = p.presentation || '';
          data.acuity = p.acuity || '';
          data.diagnosis = p.diagnosis || '';
          data.patientName = p.name || '';
          data.demographics = (p.age || '') + ' ' + (p.gender || '');
          if (p.caseData?.variants) {
            const v = p.caseData.variants.find(v => v.id === p.variantId) || p.caseData.variants[0];
            if (v?.clinicalFacts?.expertApproach?.differentialWithProbabilities) {
              data.expertDifferential = v.clinicalFacts.expertApproach.differentialWithProbabilities;
            }
            if (v?.clinicalFacts?.riskFactors) {
              data.riskFactors = v.clinicalFacts.riskFactors;
            }
            if (v?.clinicalFacts?.associatedSymptoms) {
              data.associatedSymptoms = v.clinicalFacts.associatedSymptoms;
            }
            if (v?.keyLearningPoints) {
              data.keyLearningPoints = v.keyLearningPoints;
            }
          }
        }
      }

      // ── SimRoomDx ─────────────────────────────────
      if (typeof CASE_LIBRARY !== 'undefined' && typeof selectedCaseId !== 'undefined') {
        const c = CASE_LIBRARY.find(x => x.id === selectedCaseId);
        if (c) {
          data.source = data.source || 'SimRoomDx';
          data.presentation = c.brief || '';
          data.patientName = c.patient?.name || '';
          data.demographics = c.patient?.age || '';
          data.diagnosis = c.title || c.id || '';
          // Mechanism data — rich clinical context
          if (c.mechanism) {
            data.pathophysiology = c.mechanism.pathophysiology || [];
            data.anatomy = c.mechanism.anatomy || [];
            data.pharmacology = c.mechanism.pharmacology || [];
            data.clinicalReasoningPearls = c.mechanism.clinicalReasoning || [];
          }
        }
        // Conversation with characters
        if (typeof conversationHistory !== 'undefined') {
          data.simConversation = conversationHistory.map(m => {
            const role = m.role === 'user' ? 'STUDENT' : (m.charId || 'CHARACTER').toUpperCase();
            return role + ': ' + m.content;
          });
          data.charactersInteracted = [...new Set(conversationHistory.filter(m => m.charId).map(m => m.charId))];
          data.studentMsgCount = conversationHistory.filter(m => m.role === 'user').length;
        }
      }

      // ── Consultant Callback ───────────────────────
      if (typeof SPECIALISTS !== 'undefined' && typeof selectedSpec !== 'undefined' && selectedSpec) {
        const spec = SPECIALISTS[selectedSpec];
        data.source = data.source || 'Consultant Callback';
        data.specialistType = selectedSpec;
        data.specialistName = spec?.name || selectedSpec;
        data.specialistPersonality = spec?.personality || '';
        if (typeof currentScenario !== 'undefined' && currentScenario) {
          data.presentation = currentScenario.title || currentScenario.presentation || '';
          data.consultQuestion = currentScenario.question || '';
          data.keyDataPoints = currentScenario.keyData || [];
        }
        if (typeof studentResponses !== 'undefined') {
          data.studentResponses = studentResponses.map(r => r.response);
          data.exchangeCount = studentResponses.length;
        }
      }

      // ── SBAR Trainer ──────────────────────────────
      if (typeof document !== 'undefined') {
        const sField = document.getElementById('inputSituation');
        const bField = document.getElementById('inputBackground');
        const aField = document.getElementById('inputAssessment');
        const rField = document.getElementById('inputRecommendation');
        if (sField && bField && aField && rField) {
          const s = sField.value || '', b = bField.value || '', a = aField.value || '', r = rField.value || '';
          if (s || b || a || r) {
            data.source = data.source || 'SBAR Trainer';
            data.sbarContent = { situation: s, background: b, assessment: a, recommendation: r };
            data.sbarCompleteness = {
              situation: s.length > 10,
              background: b.length > 10,
              assessment: a.length > 10,
              recommendation: r.length > 10
            };
          }
        }
      }

    } catch (e) {
      console.log('BiasAssessment: Could not collect clinical data', e);
    }
    return data;
  },

  // ─── RUN BIAS ASSESSMENT ──────────────────────────────
  async runAssessment(context = 'general') {
    if (this.conversations.length < 2) {
      this.showPanel({ oneLineSummary: 'Not enough conversation data to assess yet. Keep going!', overallScore: null, strengths: [], cognitiveBiases: [], biasFlags: [], communicationNotes: [], growthAreas: [], category: 'Insufficient Data' });
      return;
    }

    this.showPanel({ loading: true });

    // Build transcript
    const transcript = this.conversations.map(e => {
      const label = e.role === 'student' ? 'STUDENT' : e.role.toUpperCase();
      const ctx = e.context?.characterName ? ` (${e.context.characterName})` : '';
      return `${label}${ctx}: ${e.text}`;
    }).join('\n');

    // Collect structured clinical data
    const clinicalData = this.collectClinicalData();

    let clinicalContext = '';
    if (clinicalData.source) clinicalContext += `\nSOURCE: ${clinicalData.source}`;
    if (clinicalData.presentation) clinicalContext += `\nPRESENTATION: ${clinicalData.presentation}`;
    if (clinicalData.demographics) clinicalContext += `\nDEMOGRAPHICS: ${clinicalData.demographics}`;
    if (clinicalData.diagnosis) clinicalContext += `\nACTUAL DIAGNOSIS (student does NOT know this): ${clinicalData.diagnosis}`;

    // ED Board specifics
    if (clinicalData.examSystemsExplored?.length) clinicalContext += `\nEXAM SYSTEMS EXPLORED: ${clinicalData.examSystemsExplored.join(', ')}`;
    if (clinicalData.labsOrdered?.length) clinicalContext += `\nLABS ORDERED: ${clinicalData.labsOrdered.join(', ')}`;
    if (clinicalData.imagingOrdered?.length) clinicalContext += `\nIMAGING ORDERED: ${clinicalData.imagingOrdered.join(', ')}`;
    if (clinicalData.treatmentsOrdered?.length) clinicalContext += `\nTREATMENTS ORDERED: ${clinicalData.treatmentsOrdered.join(', ')}`;
    if (clinicalData.expertDifferential?.length) {
      clinicalContext += `\nEXPERT DIFFERENTIAL (for comparison): ${clinicalData.expertDifferential.map(d => d.diagnosis + ' (' + d.probability + '%)').join(', ')}`;
    }
    if (clinicalData.riskFactors) {
      if (clinicalData.riskFactors.present?.length) clinicalContext += `\nRISK FACTORS PRESENT: ${clinicalData.riskFactors.present.join('; ')}`;
      if (clinicalData.riskFactors.absent?.length) clinicalContext += `\nIMPORTANT NEGATIVES: ${clinicalData.riskFactors.absent.join('; ')}`;
    }
    if (clinicalData.associatedSymptoms) {
      if (clinicalData.associatedSymptoms.present?.length) clinicalContext += `\nSYMPTOMS PRESENT (student should discover): ${clinicalData.associatedSymptoms.present.join('; ')}`;
      if (clinicalData.associatedSymptoms.absent?.length) clinicalContext += `\nSYMPTOMS ABSENT (important to ask about): ${clinicalData.associatedSymptoms.absent.join('; ')}`;
    }

    // SimRoomDx specifics
    if (clinicalData.pathophysiology?.length) clinicalContext += `\nPATHOPHYSIOLOGY CHAIN: ${clinicalData.pathophysiology.join(' → ')}`;
    if (clinicalData.clinicalReasoningPearls?.length) clinicalContext += `\nKEY REASONING POINTS: ${clinicalData.clinicalReasoningPearls.join('; ')}`;
    if (clinicalData.charactersInteracted?.length) clinicalContext += `\nCHARACTERS INTERACTED WITH: ${clinicalData.charactersInteracted.join(', ')}`;
    if (clinicalData.simConversation?.length) clinicalContext += `\nSIMROOMDX TRANSCRIPT (last 20):\n${clinicalData.simConversation.slice(-20).join('\n')}`;

    // Consultant Callback specifics
    if (clinicalData.specialistType) clinicalContext += `\nCONSULTANT: ${clinicalData.specialistName} (${clinicalData.specialistType})`;
    if (clinicalData.specialistPersonality) clinicalContext += `\nCONSULTANT PERSONALITY: ${clinicalData.specialistPersonality}`;
    if (clinicalData.consultQuestion) clinicalContext += `\nCONSULT QUESTION: ${clinicalData.consultQuestion}`;
    if (clinicalData.keyDataPoints?.length) clinicalContext += `\nKEY DATA POINTS EXPECTED: ${clinicalData.keyDataPoints.join('; ')}`;

    // SBAR specifics
    if (clinicalData.sbarContent) {
      const sc = clinicalData.sbarContent;
      clinicalContext += `\nSBAR SUBMISSION:\n  S: ${sc.situation}\n  B: ${sc.background}\n  A: ${sc.assessment}\n  R: ${sc.recommendation}`;
      const completeness = clinicalData.sbarCompleteness;
      const missing = Object.entries(completeness).filter(([k,v]) => !v).map(([k]) => k);
      if (missing.length) clinicalContext += `\nINCOMPLETE SBAR SECTIONS: ${missing.join(', ')}`; 
    }

    const userPrompt = `Assess this clinical encounter for COGNITIVE BIASES in reasoning, history-taking quality, differential breadth, and communication/implicit bias.

CONTEXT: ${context}
STUDENT MESSAGES: ${this.studentMsgCount}
TOTAL EXCHANGES: ${this.conversations.length}
${clinicalContext}

TRANSCRIPT:
${transcript}

Respond ONLY with the JSON object, no other text.`;

    try {
      const response = await fetch(this.workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: this.model,
          max_tokens: 2000,
          system: this.systemPrompt,
          messages: [{ role: 'user', content: userPrompt }]
        })
      });

      const data = await response.json();
      const text = (data.content && data.content[0] && data.content[0].text) || '{}';
      const clean = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      const assessment = JSON.parse(clean);

      assessment.timestamp = Date.now();
      assessment.context = context;
      assessment.messageCount = this.conversations.length;
      this.assessments.push(assessment);
      this.showPanel(assessment);
    } catch (err) {
      console.error('BiasAssessment error:', err);
      this.showPanel({
        oneLineSummary: 'Assessment temporarily unavailable. Your conversation has been logged.',
        overallScore: null, strengths: [], cognitiveBiases: [], biasFlags: [], communicationNotes: [],
        growthAreas: [], category: 'Error'
      });
    }
  },

  // ─── SHOW HINT TO RUN ASSESSMENT ──────────────────────
  showAssessmentHint() {
    if (!this.panelInjected) this.injectPanel();
    const hint = document.getElementById('bias-hint');
    if (hint) {
      hint.style.display = 'flex';
      setTimeout(() => { if (hint) hint.style.display = 'none'; }, 8000);
    }
  },

  // ─── INJECT PANEL INTO PAGE ───────────────────────────
  injectPanel() {
    if (this.panelInjected) return;
    this.panelInjected = true;

    // Inject CSS
    const style = document.createElement('style');
    style.id = 'bias-assessment-styles';
    style.textContent = `
      #bias-fab { position:fixed; bottom:24px; right:24px; z-index:9999; width:52px; height:52px; border-radius:50%; background:linear-gradient(135deg,#2874A6,#1B4F72); color:#fff; border:none; cursor:pointer; font-size:22px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 16px rgba(0,0,0,.2); transition:all .2s; }
      #bias-fab:hover { transform:scale(1.08); box-shadow:0 6px 24px rgba(0,0,0,.3); }
      #bias-fab .fab-badge { position:absolute; top:-2px; right:-2px; width:18px; height:18px; border-radius:50%; background:#EF4444; color:#fff; font-size:9px; font-weight:800; display:none; align-items:center; justify-content:center; }
      #bias-hint { position:fixed; bottom:84px; right:24px; z-index:9998; background:#1E293B; color:#fff; padding:10px 16px; border-radius:10px; font-size:12px; font-weight:500; display:none; align-items:center; gap:8px; box-shadow:0 4px 12px rgba(0,0,0,.2); max-width:280px; cursor:pointer; }
      #bias-hint::after { content:''; position:absolute; bottom:-6px; right:24px; width:12px; height:12px; background:#1E293B; transform:rotate(45deg); }
      #bias-panel { position:fixed; bottom:84px; right:24px; z-index:9998; width:380px; max-height:70vh; background:#fff; border:1px solid #E2E8F0; border-radius:16px; box-shadow:0 12px 40px rgba(0,0,0,.15); overflow:hidden; display:none; flex-direction:column; font-family:'DM Sans',sans-serif; }
      #bias-panel.visible { display:flex; }
      .bp-header { background:linear-gradient(135deg,#2874A6,#1B4F72); color:#fff; padding:16px 20px; display:flex; align-items:center; justify-content:space-between; }
      .bp-title { font-weight:700; font-size:15px; }
      .bp-close { background:none; border:none; color:rgba(255,255,255,.7); cursor:pointer; font-size:18px; padding:4px 8px; }
      .bp-close:hover { color:#fff; }
      .bp-body { padding:16px 20px; overflow-y:auto; flex:1; }
      .bp-loading { text-align:center; padding:40px 20px; color:#64748B; }
      .bp-loading .spinner { display:inline-block; width:28px; height:28px; border:3px solid #E2E8F0; border-top:3px solid #2874A6; border-radius:50%; animation:bp-spin 1s linear infinite; margin-bottom:12px; }
      @keyframes bp-spin { to { transform:rotate(360deg); } }
      .bp-score { display:flex; align-items:center; gap:14px; margin-bottom:16px; padding-bottom:14px; border-bottom:1px solid #F1F5F9; }
      .bp-score-circle { width:52px; height:52px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; font-weight:800; color:#fff; flex-shrink:0; }
      .bp-score-circle.excellent { background:#059669; }
      .bp-score-circle.good { background:#2874A6; }
      .bp-score-circle.developing { background:#D97706; }
      .bp-score-circle.needs-attention { background:#DC2626; }
      .bp-score-text h3 { font-size:14px; font-weight:700; color:#1E293B; margin-bottom:2px; }
      .bp-score-text p { font-size:12px; color:#64748B; line-height:1.4; }
      .bp-section { margin-bottom:14px; }
      .bp-section-title { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:#64748B; margin-bottom:8px; display:flex; align-items:center; gap:6px; }
      .bp-item { font-size:12px; color:#334155; line-height:1.5; padding:6px 10px; background:#F8FAFC; border-radius:8px; margin-bottom:4px; }
      .bp-flag { padding:10px 12px; border-radius:10px; margin-bottom:6px; font-size:12px; line-height:1.5; }
      .bp-flag.info { background:#EBF5FB; border-left:3px solid #2874A6; }
      .bp-flag.caution { background:#FEF3C7; border-left:3px solid #D97706; }
      .bp-flag.flag { background:#FEE2E2; border-left:3px solid #DC2626; }
      .bp-flag-type { font-weight:700; font-size:10px; text-transform:uppercase; letter-spacing:.04em; margin-bottom:3px; }
      .bp-flag.info .bp-flag-type { color:#2874A6; }
      .bp-flag.caution .bp-flag-type { color:#D97706; }
      .bp-flag.flag .bp-flag-type { color:#DC2626; }
      .bp-flag-obs { color:#334155; margin-bottom:4px; }
      .bp-flag-sug { color:#059669; font-style:italic; }
      .bp-run-btn { width:100%; padding:12px; background:linear-gradient(135deg,#2874A6,#1B4F72); color:#fff; border:none; border-radius:10px; font-weight:700; font-size:13px; cursor:pointer; transition:all .2s; margin-top:8px; }
      .bp-run-btn:hover { opacity:.9; }
      .bp-run-btn:disabled { opacity:.5; cursor:not-allowed; }
      .bp-empty { text-align:center; padding:32px 16px; color:#94A3B8; font-size:13px; }
      @media(max-width:500px){ #bias-panel { width:calc(100vw - 32px); right:16px; bottom:80px; } }
    `;
    document.head.appendChild(style);

    // Inject FAB button
    const fab = document.createElement('button');
    fab.id = 'bias-fab';
    fab.title = 'Communication & Bias Assessment';
    fab.innerHTML = '⚖️<span class="fab-badge" id="biasBadge"></span>';
    fab.onclick = () => this.togglePanel();
    document.body.appendChild(fab);

    // Inject hint
    const hint = document.createElement('div');
    hint.id = 'bias-hint';
    hint.innerHTML = '📊 Ready for a communication check? Click here or the ⚖️ button.';
    hint.onclick = () => { hint.style.display = 'none'; this.togglePanel(); };
    document.body.appendChild(hint);

    // Inject panel
    const panel = document.createElement('div');
    panel.id = 'bias-panel';
    panel.innerHTML = `
      <div class="bp-header">
        <span class="bp-title">⚖️ Communication Assessment</span>
        <button class="bp-close" onclick="BiasAssessment.togglePanel()">&times;</button>
      </div>
      <div class="bp-body" id="biasBody">
        <div class="bp-empty">
          <div style="font-size:32px;margin-bottom:12px">⚖️</div>
          <div style="font-weight:600;color:#1E293B;margin-bottom:4px">Communication & Bias Check</div>
          <div>Analyzes your conversations for implicit bias, health equity awareness, and communication quality.</div>
          <button class="bp-run-btn" id="biasRunBtn" onclick="BiasAssessment.runFromPanel()">Run Assessment</button>
        </div>
      </div>
    `;
    document.body.appendChild(panel);
  },

  // ─── TOGGLE PANEL ─────────────────────────────────────
  togglePanel() {
    if (!this.panelInjected) this.injectPanel();
    const panel = document.getElementById('bias-panel');
    this.panelVisible = !this.panelVisible;
    panel.classList.toggle('visible', this.panelVisible);
  },

  // ─── RUN FROM PANEL BUTTON ────────────────────────────
  async runFromPanel() {
    const btn = document.getElementById('biasRunBtn');
    if (btn) { btn.disabled = true; btn.textContent = 'Analyzing...'; }
    await this.runAssessment(this.currentContext || 'Clinical encounter');
    if (btn) { btn.disabled = false; btn.textContent = 'Run Assessment'; }
  },

  // ─── SHOW RESULTS IN PANEL ────────────────────────────
  showPanel(assessment) {
    if (!this.panelInjected) this.injectPanel();

    const body = document.getElementById('biasBody');
    const panel = document.getElementById('bias-panel');

    // Show panel
    this.panelVisible = true;
    panel.classList.add('visible');

    if (assessment.loading) {
      body.innerHTML = '<div class="bp-loading"><div class="spinner"></div><div>Analyzing conversation for bias and communication patterns...</div></div>';
      return;
    }

    if (assessment.overallScore === null && !assessment.biasFlags?.length) {
      body.innerHTML = `
        <div class="bp-empty">
          <div style="font-size:24px;margin-bottom:8px">📝</div>
          <div>${assessment.oneLineSummary || 'No data yet.'}</div>
          <button class="bp-run-btn" id="biasRunBtn" onclick="BiasAssessment.runFromPanel()">Run Assessment</button>
        </div>`;
      return;
    }

    // Update badge
    const badge = document.getElementById('biasBadge');
    const flagCount = (assessment.biasFlags || []).filter(f => f.severity !== 'info').length;
    if (badge && flagCount > 0) {
      badge.style.display = 'flex';
      badge.textContent = flagCount;
    }

    // Render results
    const cat = (assessment.category || 'Good').toLowerCase().replace(/\s+/g, '-');
    let html = '';

    // Score header with sub-scores
    html += `<div class="bp-score">
      <div class="bp-score-circle ${cat}">${assessment.overallScore || '—'}</div>
      <div class="bp-score-text">
        <h3>${assessment.category || 'Assessment'}</h3>
        <p>${assessment.oneLineSummary || ''}</p>
        ${assessment.reasoningScore != null || assessment.communicationScore != null ? `
        <div style="display:flex;gap:12px;margin-top:6px">
          ${assessment.reasoningScore != null ? `<span style="font-size:10px;font-weight:700;color:#2874A6">🧠 Reasoning: ${assessment.reasoningScore}</span>` : ''}
          ${assessment.communicationScore != null ? `<span style="font-size:10px;font-weight:700;color:#059669">💬 Communication: ${assessment.communicationScore}</span>` : ''}
        </div>` : ''}
      </div>
    </div>`;

    // Strengths
    if (assessment.strengths?.length) {
      html += `<div class="bp-section">
        <div class="bp-section-title">✅ Strengths</div>
        ${assessment.strengths.map(s => `<div class="bp-item">• ${s}</div>`).join('')}
      </div>`;
    }

    // COGNITIVE BIASES (new section)
    if (assessment.cognitiveBiases?.length) {
      html += `<div class="bp-section">
        <div class="bp-section-title">🧠 Cognitive Biases in Reasoning</div>
        ${assessment.cognitiveBiases.map(b => `
          <div class="bp-flag ${b.severity || 'info'}">
            <div class="bp-flag-type">${(b.bias || 'note').replace(/_/g,' ')}</div>
            <div class="bp-flag-obs">${b.evidence || ''}</div>
            ${b.impact ? `<div style="color:#92400E;font-size:11px;margin:3px 0">⚠️ Impact: ${b.impact}</div>` : ''}
            ${b.correction ? `<div class="bp-flag-sug">💡 ${b.correction}</div>` : ''}
          </div>
        `).join('')}
      </div>`;
    }

    // HISTORY ASSESSMENT (new section)
    if (assessment.historyAssessment) {
      const ha = assessment.historyAssessment;
      html += `<div class="bp-section">
        <div class="bp-section-title">📋 History-Taking Quality ${ha.score != null ? `<span style="margin-left:auto;color:#2874A6;font-weight:800">${ha.score}/100</span>` : ''}</div>
        ${ha.notes ? `<div class="bp-item">${ha.notes}</div>` : ''}
        ${ha.systemsCovered?.length ? `<div class="bp-item" style="font-size:11px"><strong>Covered:</strong> ${ha.systemsCovered.join(', ')}</div>` : ''}
        ${ha.missedAreas?.length ? `<div class="bp-item" style="font-size:11px;background:#FEF3C7"><strong>Missed:</strong> ${ha.missedAreas.join(', ')}</div>` : ''}
        ${ha.redFlagsExplored === false ? `<div class="bp-item" style="background:#FEE2E2;font-size:11px">⚠️ Red flag symptoms were not adequately explored</div>` : ''}
        ${ha.redFlagsExplored === true ? `<div class="bp-item" style="background:#ECFDF5;font-size:11px">✅ Red flags explored</div>` : ''}
      </div>`;
    }

    // DIFFERENTIAL ASSESSMENT (new section)
    if (assessment.differentialAssessment) {
      const da = assessment.differentialAssessment;
      html += `<div class="bp-section">
        <div class="bp-section-title">🔍 Differential & Workup ${da.breadthScore != null ? `<span style="margin-left:auto;color:#2874A6;font-weight:800">${da.breadthScore}/100</span>` : ''}</div>
        ${da.notes ? `<div class="bp-item">${da.notes}</div>` : ''}
        ${da.dangerousMissed?.length ? `<div class="bp-item" style="background:#FEE2E2;font-size:11px"><strong>Can't-Miss diagnoses not explored:</strong> ${da.dangerousMissed.join(', ')}</div>` : ''}
      </div>`;
    }

    // Implicit bias flags (original section)
    if (assessment.biasFlags?.length) {
      html += `<div class="bp-section">
        <div class="bp-section-title">⚖️ Implicit Bias & Equity</div>
        ${assessment.biasFlags.map(f => `
          <div class="bp-flag ${f.severity || 'info'}">
            <div class="bp-flag-type">${f.type || 'Note'}</div>
            <div class="bp-flag-obs">${f.observation}</div>
            ${f.suggestion ? `<div class="bp-flag-sug">💡 ${f.suggestion}</div>` : ''}
          </div>
        `).join('')}
      </div>`;
    }

    // Communication notes
    if (assessment.communicationNotes?.length) {
      html += `<div class="bp-section">
        <div class="bp-section-title">💬 Communication</div>
        ${assessment.communicationNotes.map(n => `<div class="bp-item">${n}</div>`).join('')}
      </div>`;
    }

    // Growth areas
    if (assessment.growthAreas?.length) {
      html += `<div class="bp-section">
        <div class="bp-section-title">🌱 Growth Areas</div>
        ${assessment.growthAreas.map(g => `<div class="bp-item">${g}</div>`).join('')}
      </div>`;
    }

    // Re-run button
    html += `<button class="bp-run-btn" id="biasRunBtn" onclick="BiasAssessment.runFromPanel()">Re-assess Conversation</button>`;

    body.innerHTML = html;
  },

  // ─── SET CONTEXT ──────────────────────────────────────
  setContext(ctx) {
    this.currentContext = ctx;
  },

  // ─── RESET FOR NEW ENCOUNTER ──────────────────────────
  reset() {
    this.conversations = [];
    this.studentMsgCount = 0;
    const badge = document.getElementById('biasBadge');
    if (badge) badge.style.display = 'none';
  }
};

// Auto-inject panel when script loads
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    BiasAssessment.injectPanel();
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BiasAssessment;
}
