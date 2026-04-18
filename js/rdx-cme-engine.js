/* eslint-disable no-console */
var rdxLog = (window.RDX_CONFIG && window.RDX_CONFIG.DEBUG) ? console.log.bind(console) : function(){};

/* eslint-disable no-console */ if(typeof window!=='undefined'&&!window.RDX_DEV){var _cl=console.log;console.log=function(){};}
/**
 * rdx-cme-engine.js — ReasonDx CME Module Engine
 * Shared engine for all genetics CME modules.
 * Each module passes a MODULE_DATA object and this engine renders everything.
 * 
 * Structure:
 *   1. Learning Objectives
 *   2. Pre-test (3 Qs, unscored — establishes baseline)
 *   3. Mechanism Explainer (pathophysiology visual + text)
 *   4. Clinical Case (10 Questions with feedback + pearls)
 *   5. Post-test (same 3 Qs — shows knowledge gain)
 *   6. Reference Panel (GeneReviews, OMIM, Orphanet, ClinVar, ACMG, StatPearls)
 *   7. Credit Attestation
 */

class RdxCmeEngine {
  constructor(moduleData, containerId) {
    this.data = moduleData;
    this.container = document.getElementById(containerId);
    this.state = {
      phase: 'objectives', // objectives | pretest | mechanism | case | posttest | references | attestation
      pretest: { answers: {}, complete: false },
      caseAnswers: {},
      posttest: { answers: {}, complete: false },
      caseScore: 0,
      startTime: Date.now(),
      currentQuestion: 0,
    };
    this.render();
  }

  // ── PHASE ROUTER ────────────────────────────────────────────────────────────
  render() {
    switch (this.state.phase) {
      case 'objectives':   this.renderObjectives(); break;
      case 'pretest':      this.renderPretest(); break;
      case 'mechanism':    this.renderMechanism(); break;
      case 'case':         this.renderCase(); break;
      case 'posttest':     this.renderPosttest(); break;
      case 'references':   this.renderReferences(); break;
      case 'attestation':  this.renderAttestation(); break;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  advance(toPhase) {
    this.state.phase = toPhase;
    if (toPhase === 'case') this.state.currentQuestion = 0;
    this.render();
  }

  // ── PROGRESS BAR ────────────────────────────────────────────────────────────
  progressBar(activeStep) {
    const steps = ['Objectives', 'Pre-test', 'Mechanism', 'Case', 'Post-test', 'References', 'Credit'];
    const phases = ['objectives', 'pretest', 'mechanism', 'case', 'posttest', 'references', 'attestation'];
    return `
      <div class="cme-progress">
        ${steps.map((s, i) => {
          const isDone = phases.indexOf(this.state.phase) > i;
          const isActive = phases[i] === this.state.phase;
          return `<div class="cme-step ${isDone ? 'done' : isActive ? 'active' : ''}">
            <div class="cme-step-dot">${isDone ? '✓' : i + 1}</div>
            <div class="cme-step-label">${s}</div>
          </div>${i < steps.length - 1 ? '<div class="cme-step-line' + (isDone ? ' done' : '') + '"></div>' : ''}`;
        }).join('')}
      </div>`;
  }

  // ── 1. OBJECTIVES ────────────────────────────────────────────────────────────
  renderObjectives() {
    const d = this.data;
    this.container.innerHTML = `
      ${this.progressBar('objectives')}
      <div class="cme-card cme-animate">
        <div class="cme-module-header" style="background:${d.color.gradient}">
          <div class="cme-module-tag">${d.emoji} CME Module · ${d.credits} AMA PRA Category 1 Credits™</div>
          <h1 class="cme-module-title">${d.title}</h1>
          <p class="cme-module-sub">${d.subtitle}</p>
          <div class="cme-meta-row">
            <span class="cme-meta-chip">⏱ ~${d.timeMinutes} minutes</span>
            <span class="cme-meta-chip">📋 ${d.caseQuestions.length} questions</span>
            <span class="cme-meta-chip">🎓 ${d.audience}</span>
          </div>
        </div>
        <div class="cme-card-body">
          <div class="cme-section-label">Learning Objectives</div>
          <p class="cme-body-text" style="margin-bottom:16px">Upon completion of this module, the learner will be able to:</p>
          <div class="cme-objectives-list">
            ${d.objectives.map((o, i) => `
              <div class="cme-objective">
                <div class="cme-obj-num">${i + 1}</div>
                <div class="cme-obj-text">${o}</div>
              </div>`).join('')}
          </div>
          <div class="cme-disclosure-box">
            <div class="cme-disclosure-title">Disclosures & Accreditation</div>
            <p class="cme-disclosure-text">This activity has been planned and implemented in accordance with the accreditation requirements of the Accreditation Council for Continuing Medical Education (ACCME). The content author, Lauren Fine, MD, FAAAAI, has disclosed no relevant financial relationships. This module is intended for educational purposes only and does not constitute medical advice.</p>
          </div>
          <div class="cme-btn-row">
            <button class="rdx-btn rdx-btn-primary rdx-btn-lg" onclick="cmeEngine.advance('pretest')">
              Begin Pre-test →
            </button>
          </div>
        </div>
      </div>`;
  }

  // ── 2. PRE-TEST ──────────────────────────────────────────────────────────────
  renderPretest(isPost = false) {
    const questions = this.data.knowledgeCheck;
    const phase = isPost ? 'posttest' : 'pretest';
    const stateKey = isPost ? 'posttest' : 'pretest';
    const title = isPost ? 'Post-test — Knowledge Check' : 'Pre-test — Baseline Assessment';
    const subtitle = isPost
      ? 'Answer the same questions again to measure your knowledge gain from this module.'
      : 'Answer these questions before viewing the content. Your responses are unscored — this establishes your baseline.';

    this.container.innerHTML = `
      ${this.progressBar(phase)}
      <div class="cme-card cme-animate">
        <div class="cme-card-header">
          <div class="cme-section-label">${isPost ? '📊 Post-test' : '📝 Pre-test'}</div>
          <h2 class="cme-card-title">${title}</h2>
          <p class="cme-body-text" style="color:var(--rdx-text-muted)">${subtitle}</p>
        </div>
        <div class="cme-card-body" id="kc-body">
          ${questions.map((q, qi) => `
            <div class="cme-kc-question" id="kc-q${qi}" style="margin-bottom:28px">
              <div class="cme-kc-stem">${qi + 1}. ${q.stem}</div>
              <div class="cme-kc-options">
                ${q.choices.map((c, ci) => `
                  <label class="cme-kc-option" id="kc-opt-${qi}-${ci}">
                    <input type="radio" name="kc-${qi}" value="${ci}"
                      onchange="cmeEngine.recordKC(${qi}, ${ci}, ${isPost})">
                    <span class="cme-kc-letter">${['A','B','C','D'][ci]}</span>
                    <span>${c}</span>
                  </label>`).join('')}
              </div>
              ${isPost ? this.renderKCFeedback(qi) : ''}
            </div>`).join('')}
          <div id="kc-submit-row" class="cme-btn-row" style="display:none">
            <button class="rdx-btn rdx-btn-primary rdx-btn-lg" onclick="cmeEngine.submitKC(${isPost})">
              ${isPost ? 'View Results & References →' : 'Begin Mechanism Explainer →'}
            </button>
          </div>
        </div>
      </div>`;
  }

  recordKC(qi, ci, isPost) {
    const stateKey = isPost ? 'posttest' : 'pretest';
    this.state[stateKey].answers[qi] = ci;
    if (Object.keys(this.state[stateKey].answers).length === this.data.knowledgeCheck.length) {
      document.getElementById('kc-submit-row').style.display = 'flex';
    }
  }

  renderKCFeedback(qi) {
    const q = this.data.knowledgeCheck[qi];
    const ans = this.state.posttest.answers[qi];
    if (ans === undefined) return '';
    const correct = ans === q.correct;
    return `<div class="cme-kc-feedback ${correct ? 'correct' : 'wrong'}">
      <strong>${correct ? '✓ Correct.' : `✗ Correct answer: ${['A','B','C','D'][q.correct]}.`}</strong> ${q.explanation}
    </div>`;
  }

  submitKC(isPost) {
    const stateKey = isPost ? 'posttest' : 'pretest';
    this.state[stateKey].complete = true;
    if (isPost) {
      this.advance('references');
    } else {
      this.advance('mechanism');
    }
  }

  // ── 3. MECHANISM EXPLAINER ───────────────────────────────────────────────────
  renderMechanism() {
    const m = this.data.mechanism;
    this.container.innerHTML = `
      ${this.progressBar('mechanism')}
      <div class="cme-card cme-animate">
        <div class="cme-card-header">
          <div class="cme-section-label">🔬 Mechanism Explainer</div>
          <h2 class="cme-card-title">${m.title}</h2>
          <p class="cme-body-text" style="color:var(--rdx-text-muted)">${m.overview}</p>
        </div>
        <div class="cme-card-body">
          ${m.sections.map(s => `
            <div class="cme-mech-section">
              <div class="cme-mech-title">${s.heading}</div>
              <div class="cme-mech-text">${s.content}</div>
              ${s.keyPoints ? `<div class="cme-mech-points">
                ${s.keyPoints.map(p => `<div class="cme-mech-point"><span class="cme-point-dot">◆</span>${p}</div>`).join('')}
              </div>` : ''}
            </div>`).join('')}

          <div class="cme-pathway-box">
            <div class="cme-pathway-label">Key Pathway Summary</div>
            <div class="cme-pathway-steps">
              ${m.pathway.map((step, i) => `
                <div class="cme-pathway-step">
                  <div class="cme-pathway-node">${i + 1}</div>
                  ${i < m.pathway.length - 1 ? '<div class="cme-pathway-connector"></div>' : ''}
                  <div class="cme-pathway-text">${step}</div>
                </div>`).join('')}
            </div>
          </div>

          <div class="cme-btn-row">
            <button class="rdx-btn rdx-btn-primary rdx-btn-lg" onclick="cmeEngine.advance('case')">
              Begin Clinical Case →
            </button>
          </div>
        </div>
      </div>`;
  }

  // ── 4. CLINICAL CASE ─────────────────────────────────────────────────────────
  renderCase() {
    const q = this.data.caseQuestions[this.state.currentQuestion];
    const qi = this.state.currentQuestion;
    const total = this.data.caseQuestions.length;
    const pct = ((qi + 1) / total) * 100;
    const letters = ['A','B','C','D','E'];

    // Patient vignette only shown on first question
    const vignette = qi === 0 ? `
      <div class="cme-vignette-card">
        <div class="cme-section-label" style="margin-bottom:10px">Patient Vignette</div>
        <div class="cme-patient-grid">
          ${this.data.patient.stats.map(s => `
            <div class="cme-patient-stat">
              <div class="cme-stat-label">${s.label}</div>
              <div class="cme-stat-value">${s.value}</div>
            </div>`).join('')}
        </div>
        <div class="cme-vignette-text">${this.data.patient.vignette}</div>
      </div>` : '';

    this.container.innerHTML = `
      ${this.progressBar('case')}
      <div class="cme-progress-case">
        <span class="cme-case-progress-label">Question ${qi + 1} of ${total}</span>
        <div class="cme-case-track"><div class="cme-case-fill" style="width:${pct}%"></div></div>
        <span class="cme-case-score">${this.state.caseScore} correct</span>
      </div>
      ${vignette}
      <div class="cme-card cme-animate">
        <div class="cme-card-body">
          <div class="cme-section-label" style="margin-bottom:8px">Question ${qi + 1}</div>
          <div class="cme-question-stem">${q.stem}</div>
          <div class="cme-answer-grid" id="aq-${qi}">
            ${q.choices.map((c, ci) => `
              <button class="cme-answer-btn" id="cme-ans-${qi}-${ci}"
                onclick="cmeEngine.selectAnswer(${qi}, ${ci})">
                <span class="cme-choice-letter">${letters[ci]}</span>
                <span>${c}</span>
              </button>`).join('')}
          </div>
          <div class="cme-feedback" id="cme-fb-${qi}">
            <div class="cme-fb-title" id="cme-fbt-${qi}"></div>
            <div class="cme-fb-text" id="cme-fbx-${qi}"></div>
            ${q.pearls ? `<div class="cme-fb-pearls" id="cme-fbp-${qi}"></div>` : ''}
          </div>
          <button class="cme-next-btn" id="cme-nb-${qi}"
            onclick="cmeEngine.nextQuestion(${qi})">
            ${qi < total - 1 ? 'Next Question →' : 'Continue to Post-test →'}
          </button>
        </div>
      </div>`;
  }

  selectAnswer(qi, ai) {
    if (this.state.caseAnswers[qi] !== undefined) return;
    this.state.caseAnswers[qi] = ai;
    const q = this.data.caseQuestions[qi];
    const correct = ai === q.correct;
    if (correct) this.state.caseScore++;

    const letters = ['A','B','C','D','E'];
    for (let i = 0; i < q.choices.length; i++) {
      const btn = document.getElementById(`cme-ans-${qi}-${i}`);
      if (!btn) continue;
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('correct');
      else if (i === ai && !correct) btn.classList.add('wrong');
      else btn.classList.add('dimmed');
    }

    const fb = document.getElementById(`cme-fb-${qi}`);
    if (fb) {
      document.getElementById(`cme-fbt-${qi}`).textContent = correct ? '✓ Correct Reasoning' : '✗ Revisit This Concept';
      document.getElementById(`cme-fbx-${qi}`).textContent = correct ? q.feedback.correct : q.feedback.wrong;
      if (q.pearls) {
        document.getElementById(`cme-fbp-${qi}`).innerHTML =
          `<div class="cme-pearls-label">Clinical Pearls</div>` +
          q.pearls.map(p => `<div class="cme-pearl">◆ ${p}</div>`).join('');
      }
      fb.classList.add('show', correct ? 'correct' : 'wrong');
    }
    const nb = document.getElementById(`cme-nb-${qi}`);
    if (nb) nb.classList.add('show');
  }

  nextQuestion(qi) {
    if (this.state.currentQuestion < this.data.caseQuestions.length - 1) {
      this.state.currentQuestion++;
      this.renderCase();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.advance('posttest');
    }
  }

  // ── 5. POST-TEST ─────────────────────────────────────────────────────────────
  renderPosttest() { this.renderPretest(true); }

  // ── 6. REFERENCES ────────────────────────────────────────────────────────────
  renderReferences() {
    const refs = this.data.references;
    const pre = this.state.pretest.answers;
    const post = this.state.posttest.answers;
    const kc = this.data.knowledgeCheck;

    // Knowledge gain calculation
    const preScore = kc.filter((q, i) => pre[i] === q.correct).length;
    const postScore = kc.filter((q, i) => post[i] === q.correct).length;
    const gain = postScore - preScore;

    this.container.innerHTML = `
      ${this.progressBar('references')}
      <div class="cme-card cme-animate">
        <div class="cme-card-header">
          <div class="cme-section-label">📊 Your Results</div>
          <h2 class="cme-card-title">Module Performance Summary</h2>
        </div>
        <div class="cme-card-body">
          <div class="cme-results-grid">
            <div class="cme-result-stat">
              <div class="cme-result-num">${this.state.caseScore}/${this.data.caseQuestions.length}</div>
              <div class="cme-result-label">Case Questions Correct</div>
            </div>
            <div class="cme-result-stat">
              <div class="cme-result-num">${preScore}/3</div>
              <div class="cme-result-label">Pre-test Score</div>
            </div>
            <div class="cme-result-stat">
              <div class="cme-result-num">${postScore}/3</div>
              <div class="cme-result-label">Post-test Score</div>
            </div>
            <div class="cme-result-stat ${gain > 0 ? 'positive' : gain < 0 ? 'negative' : ''}">
              <div class="cme-result-num">${gain > 0 ? '+' : ''}${gain}</div>
              <div class="cme-result-label">Knowledge Gain</div>
            </div>
          </div>

          <div class="cme-section-label" style="margin-top:28px;margin-bottom:12px">📚 Evidence Base & References</div>
          <p class="cme-body-text" style="color:var(--rdx-text-muted);margin-bottom:18px">All content in this module is derived from open-access, peer-reviewed sources. Links open in a new tab.</p>

          ${refs.map((r, i) => `
            <div class="cme-ref">
              <div class="cme-ref-num">${i + 1}</div>
              <div class="cme-ref-content">
                <div class="cme-ref-source">
                  <span class="cme-ref-badge cme-ref-${r.type}">${r.type.toUpperCase()}</span>
                  ${r.source}
                </div>
                <div class="cme-ref-title">${r.title}</div>
                ${r.doi ? `<a class="cme-ref-link" href="https://doi.org/${r.doi}" target="_blank" rel="noopener">DOI: ${r.doi} ↗</a>` : ''}
                ${r.url && !r.doi ? `<a class="cme-ref-link" href="${r.url}" target="_blank" rel="noopener">${r.url} ↗</a>` : ''}
              </div>
            </div>`).join('')}

          <div class="cme-btn-row" style="margin-top:28px">
            <button class="rdx-btn rdx-btn-primary rdx-btn-lg" onclick="cmeEngine.advance('attestation')">
              Claim CME Credit →
            </button>
          </div>
        </div>
      </div>`;
  }

  // ── 7. ATTESTATION ───────────────────────────────────────────────────────────
  renderAttestation() {
    const elapsed = Math.round((Date.now() - this.state.startTime) / 60000);
    const score = Math.round((this.state.caseScore / this.data.caseQuestions.length) * 100);

    this.container.innerHTML = `
      ${this.progressBar('attestation')}
      <div class="cme-card cme-animate">
        <div class="cme-card-header" style="text-align:center;padding:40px 32px 24px">
          <div style="font-size:3rem;margin-bottom:12px">🎓</div>
          <h2 class="cme-card-title" style="font-family:var(--rdx-font-serif);font-size:1.8rem">Module Complete</h2>
          <p class="cme-body-text" style="color:var(--rdx-text-muted)">${this.data.title}</p>
        </div>
        <div class="cme-card-body">
          <div class="cme-attestation-box">
            <div class="cme-att-title">Attestation of Participation</div>
            <p class="cme-att-text">By claiming credit, you attest that you personally participated in this educational activity, that the information presented was objective and balanced, and that you have completed a minimum of ${this.data.timeMinutes} minutes of educational content.</p>
            <div class="cme-att-stats">
              <div><strong>Module:</strong> ${this.data.title}</div>
              <div><strong>Credits:</strong> ${this.data.credits} AMA PRA Category 1 Credit™</div>
              <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <div><strong>Case Score:</strong> ${score}% (${this.state.caseScore}/${this.data.caseQuestions.length})</div>
              <div><strong>Time:</strong> ~${elapsed} minutes</div>
            </div>
            <div style="margin-top:20px">
              <label class="cme-att-check">
                <input type="checkbox" id="att-confirm" onchange="document.getElementById('att-btn').disabled=!this.checked">
                I attest that I personally participated in this CME activity and that the above information is accurate.
              </label>
            </div>
          </div>

          <div class="cme-btn-row" style="margin-top:24px">
            <button class="rdx-btn rdx-btn-accent rdx-btn-lg" id="att-btn" disabled
              onclick="cmeEngine.claimCredit()">
              🎓 Claim ${this.data.credits} CME Credit
            </button>
            <a class="rdx-btn rdx-btn-ghost" href="/genetics/genetics-cme.html">
              Return to CME Hub
            </a>
          </div>
        </div>
      </div>`;
  }

  claimCredit() {
    const btn = document.getElementById('att-btn');
    btn.textContent = '✓ Credit Claimed — Certificate Sent';
    btn.disabled = true;
    btn.style.background = 'var(--rdx-success)';
    // In production: POST to Supabase, trigger email certificate
    rdxLog('CME credit claimed:', {
      module: this.data.id,
      score: this.state.caseScore,
      date: new Date().toISOString()
    });
  }
}

// Global instance
let cmeEngine;
function initCME(moduleData) {
  cmeEngine = new RdxCmeEngine(moduleData, 'cme-container');
}
