/**
 * rdx-profession-onboarding.js
 * ReasonDx Profession Onboarding Selector
 * 
 * DROP-IN MODULE — add <script src="rdx-profession-onboarding.js"></script>
 * before </body> on register.html (and any page needing profession gating).
 *
 * WHAT IT DOES:
 *  1. Injects a profession-selector step into the registration flow
 *  2. Persists profession profile to localStorage (reasondx-user) + Supabase profiles
 *  3. Exports RDX_ProfessionProfile globally for use by browse.html / case engine
 *  4. Tags cases at runtime via RDX_ProfessionProfile.getCaseTags()
 *
 * SUPABASE: Requires these columns on the profiles table (run migration SQL below).
 */

// ─── PROFESSION TAXONOMY ────────────────────────────────────────────────────

const RDX_PROFESSIONS = [
  {
    id: 'medicine',
    label: 'Medicine',
    icon: '🩺',
    description: 'MD / DO student or resident',
    tracks: [
      { id: 'mbs', label: 'Master of Biomedical Sciences (pre-med)' },
      { id: 'm1_m2', label: 'M1 / M2 — Pre-clinical' },
      { id: 'm3_m4', label: 'M3 / M4 — Clinical clerkships' },
      { id: 'resident', label: 'Resident / Fellow' },
    ],
    boardExam: 'USMLE / COMLEX',
    caseTagPriority: ['general', 'internal-medicine', 'surgery', 'pediatrics', 'ob-gyn', 'psychiatry'],
    color: '#2874A6',
  },
  {
    id: 'pa',
    label: 'Physician Assistant',
    icon: '🏥',
    description: 'PA student or practicing PA',
    tracks: [
      { id: 'pa_didactic', label: 'Didactic year' },
      { id: 'pa_clinical', label: 'Clinical year / rotations' },
      { id: 'pa_grad', label: 'Graduate / practicing PA' },
    ],
    boardExam: 'PANCE / PANRE',
    caseTagPriority: ['general', 'internal-medicine', 'surgery', 'emergency', 'pediatrics'],
    color: '#1A7A4A',
  },
  {
    id: 'pharmacy',
    label: 'Pharmacy',
    icon: '💊',
    description: 'PharmD student or pharmacist',
    tracks: [
      { id: 'pharmd_p1_p2', label: 'P1 / P2 — Foundational sciences' },
      { id: 'pharmd_p3_p4', label: 'P3 / P4 — APPEs / rotations' },
      { id: 'pharmd_grad', label: 'Practicing pharmacist' },
    ],
    boardExam: 'NAPLEX',
    caseTagPriority: ['pharmacology', 'internal-medicine', 'cardiology', 'infectious-disease', 'endocrinology'],
    color: '#7B2D8B',
  },
  {
    id: 'optometry',
    label: 'Optometry',
    icon: '👁️',
    description: 'OD student or optometrist',
    tracks: [
      { id: 'od_preclinical', label: 'Pre-clinical years' },
      { id: 'od_clinical', label: 'Clinical rotations' },
      { id: 'od_grad', label: 'Practicing optometrist' },
    ],
    boardExam: 'NBEO',
    caseTagPriority: ['ophthalmology', 'neurology', 'endocrinology', 'rheumatology', 'internal-medicine'],
    color: '#C0622F',
  },
  {
    id: 'dentistry',
    label: 'Dentistry',
    icon: '🦷',
    description: 'DMD / DDS student or dentist',
    tracks: [
      { id: 'dds_preclinical', label: 'Pre-clinical years' },
      { id: 'dds_clinical', label: 'Clinical years' },
      { id: 'dds_grad', label: 'Practicing dentist' },
    ],
    boardExam: 'NBDE / INBDE',
    caseTagPriority: ['oral-medicine', 'pharmacology', 'internal-medicine', 'neurology', 'infectious-disease'],
    color: '#2E86AB',
  },
  {
    id: 'pt',
    label: 'Physical Therapy',
    icon: '🦴',
    description: 'DPT student or physical therapist',
    tracks: [
      { id: 'dpt_didactic', label: 'Didactic curriculum' },
      { id: 'dpt_clinical', label: 'Clinical education / internships' },
      { id: 'dpt_grad', label: 'Practicing PT' },
    ],
    boardExam: 'NPTE',
    caseTagPriority: ['musculoskeletal', 'neurology', 'cardiopulmonary', 'pediatrics', 'geriatrics'],
    color: '#D4500A',
  },
  {
    id: 'ot',
    label: 'Occupational Therapy',
    icon: '🖐️',
    description: 'MOT / OTD student or therapist',
    tracks: [
      { id: 'ot_didactic', label: 'Didactic curriculum' },
      { id: 'ot_fieldwork', label: 'Fieldwork / clinical placements' },
      { id: 'ot_grad', label: 'Practicing OT' },
    ],
    boardExam: 'NBCOT',
    caseTagPriority: ['neurology', 'psychiatry', 'musculoskeletal', 'pediatrics', 'geriatrics'],
    color: '#5C6BC0',
  },
  {
    id: 'nursing',
    label: 'Nursing',
    icon: '💉',
    description: 'BSN / MSN / DNP student or nurse',
    tracks: [
      { id: 'bsn', label: 'BSN program' },
      { id: 'np', label: 'Nurse Practitioner (NP) program' },
      { id: 'nursing_grad', label: 'Practicing RN / NP / CRNA' },
    ],
    boardExam: 'NCLEX / AANP / ANCC',
    caseTagPriority: ['general', 'internal-medicine', 'critical-care', 'pediatrics', 'ob-gyn'],
    color: '#00897B',
  },
  {
    id: 'mbs',
    label: 'Biomedical Sciences',
    icon: '🔬',
    description: 'MBS or pre-health graduate student',
    tracks: [
      { id: 'mbs_y1', label: 'Year 1 — Foundational sciences' },
      { id: 'mbs_y2', label: 'Year 2 — Applied sciences' },
      { id: 'mbs_research', label: 'Research track' },
    ],
    boardExam: 'MCAT preparation',
    caseTagPriority: ['general', 'internal-medicine', 'pharmacology', 'pathophysiology'],
    color: '#F57F17',
  },
  {
    id: 'other',
    label: 'Other Health Profession',
    icon: '⚕️',
    description: 'Respiratory therapy, clinical psychology, nutrition, etc.',
    tracks: [
      { id: 'other_student', label: 'Student' },
      { id: 'other_grad', label: 'Graduate / practicing clinician' },
    ],
    boardExam: 'Varies',
    caseTagPriority: ['general', 'internal-medicine'],
    color: '#607D8B',
  },
];

// ─── CASE TAG MAP ────────────────────────────────────────────────────────────
// Maps profession + track → case filter tags used by browse.html ?profession= param

const RDX_CASE_TAG_MAP = {
  medicine:   ['general', 'internal-medicine', 'cardiology', 'pulmonology', 'neurology', 
               'gastroenterology', 'nephrology', 'endocrinology', 'hematology', 
               'infectious-disease', 'rheumatology', 'surgery', 'pediatrics', 'ob-gyn', 
               'psychiatry', 'emergency', 'dermatology', 'ophthalmology', 'ent'],
  pa:         ['general', 'internal-medicine', 'cardiology', 'pulmonology', 'neurology',
               'gastroenterology', 'nephrology', 'endocrinology', 'infectious-disease', 
               'surgery', 'emergency', 'pediatrics', 'ob-gyn', 'dermatology'],
  pharmacy:   ['pharmacology', 'internal-medicine', 'cardiology', 'endocrinology', 
               'infectious-disease', 'nephrology', 'hematology', 'psychiatry', 
               'gastroenterology', 'pulmonology'],
  optometry:  ['ophthalmology', 'neurology', 'endocrinology', 'rheumatology', 
               'hypertension', 'hematology', 'infectious-disease', 'internal-medicine'],
  dentistry:  ['oral-medicine', 'pharmacology', 'internal-medicine', 'neurology', 
               'infectious-disease', 'endocrinology', 'hematology', 'cardiology'],
  pt:         ['musculoskeletal', 'neurology', 'cardiopulmonary', 'pediatrics', 
               'geriatrics', 'sports-medicine', 'spine', 'post-surgical'],
  ot:         ['neurology', 'psychiatry', 'musculoskeletal', 'pediatrics', 
               'geriatrics', 'cognitive', 'burns', 'sensory'],
  nursing:    ['general', 'internal-medicine', 'critical-care', 'pediatrics', 
               'ob-gyn', 'psychiatry', 'emergency', 'pharmacology'],
  mbs:        ['general', 'internal-medicine', 'pharmacology', 'pathophysiology',
               'cardiology', 'endocrinology', 'neurology', 'infectious-disease'],
  other:      ['general', 'internal-medicine'],
};

// ─── PROFESSION PROFILE CLASS ────────────────────────────────────────────────

class ProfessionProfile {
  constructor(data = {}) {
    this.professionId   = data.professionId   || null;
    this.trackId        = data.trackId        || null;
    this.programName    = data.programName    || null; // e.g. "NSU KPCAM"
    this.institution    = data.institution    || null;
    this.yearOfTraining = data.yearOfTraining || null;
    this.researchConsent= data.researchConsent|| false;
    this.cohortId       = data.cohortId       || null; // for research grouping
    this.completedAt    = data.completedAt    || null;
  }

  get profession() {
    return RDX_PROFESSIONS.find(p => p.id === this.professionId) || null;
  }

  get track() {
    if (!this.profession) return null;
    return this.profession.tracks.find(t => t.id === this.trackId) || null;
  }

  get caseTags() {
    return RDX_CASE_TAG_MAP[this.professionId] || RDX_CASE_TAG_MAP['other'];
  }

  get priorityTags() {
    return this.profession ? this.profession.caseTagPriority : ['general'];
  }

  get boardExam() {
    return this.profession ? this.profession.boardExam : null;
  }

  get isComplete() {
    return !!(this.professionId && this.trackId);
  }

  // Returns URL params to append to browse.html for filtered case view
  getBrowseParams() {
    const params = new URLSearchParams();
    if (this.professionId) params.set('profession', this.professionId);
    if (this.trackId) params.set('track', this.trackId);
    return params.toString();
  }

  toJSON() {
    return {
      professionId:    this.professionId,
      trackId:         this.trackId,
      programName:     this.programName,
      institution:     this.institution,
      yearOfTraining:  this.yearOfTraining,
      researchConsent: this.researchConsent,
      cohortId:        this.cohortId,
      completedAt:     this.completedAt,
    };
  }

  // Save to localStorage
  save() {
    const user = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
    user.professionProfile = this.toJSON();
    localStorage.setItem('reasondx-user', JSON.stringify(user));
    // Also save flat keys for easy access by other modules
    localStorage.setItem('rdx-profession', this.professionId || '');
    localStorage.setItem('rdx-track', this.trackId || '');
    localStorage.setItem('rdx-case-tags', JSON.stringify(this.caseTags));
  }

  // Load from localStorage
  static load() {
    const user = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
    return new ProfessionProfile(user.professionProfile || {});
  }

  // Sync to Supabase profiles table
  async syncToSupabase(supabaseClient, userId) {
    if (!supabaseClient || !userId) return;
    try {
      await supabaseClient.from('profiles').upsert({
        id: userId,
        profession_id:    this.professionId,
        track_id:         this.trackId,
        program_name:     this.programName,
        year_of_training: this.yearOfTraining,
        research_consent: this.researchConsent,
        cohort_id:        this.cohortId,
        profession_set_at: new Date().toISOString(),
      }, { onConflict: 'id' });
    } catch (e) {
      console.warn('[RDX Profession] Supabase sync failed:', e);
    }
  }
}

// Expose globally
window.RDX_ProfessionProfile = ProfessionProfile;
window.RDX_PROFESSIONS = RDX_PROFESSIONS;
window.RDX_CASE_TAG_MAP = RDX_CASE_TAG_MAP;

// ─── ONBOARDING MODAL UI ─────────────────────────────────────────────────────

class ProfessionOnboardingModal {
  constructor(options = {}) {
    this.onComplete = options.onComplete || (() => {});
    this.allowSkip  = options.allowSkip  !== false;
    this.step       = 1; // 1 = profession, 2 = track + details, 3 = research consent
    this.selected   = new ProfessionProfile();
    this.el         = null;
  }

  inject() {
    // Remove any existing modal
    document.getElementById('rdx-profession-modal')?.remove();

    const modal = document.createElement('div');
    modal.id = 'rdx-profession-modal';
    modal.innerHTML = this._buildModalHTML();
    document.body.appendChild(modal);
    this.el = modal;

    this._attachStyles();
    this._bindEvents();
    this._renderStep(1);

    // Animate in
    requestAnimationFrame(() => {
      modal.querySelector('.rdx-po-backdrop').style.opacity = '1';
      modal.querySelector('.rdx-po-card').style.transform = 'translateY(0) scale(1)';
      modal.querySelector('.rdx-po-card').style.opacity = '1';
    });
  }

  _buildModalHTML() {
    return `
      <div class="rdx-po-backdrop">
        <div class="rdx-po-card">
          <div class="rdx-po-header">
            <div class="rdx-po-logo">
              <span class="rdx-po-logo-mark">Rx</span>
              <span class="rdx-po-logo-text">ReasonDx</span>
            </div>
            <div class="rdx-po-step-indicator">
              <span class="rdx-po-step-dot active" data-step="1"></span>
              <span class="rdx-po-step-dot" data-step="2"></span>
              <span class="rdx-po-step-dot" data-step="3"></span>
            </div>
          </div>
          <div class="rdx-po-body" id="rdx-po-body">
            <!-- Rendered by JS -->
          </div>
          <div class="rdx-po-footer">
            <button class="rdx-po-btn-back" id="rdx-po-back" style="display:none">← Back</button>
            <div class="rdx-po-footer-right">
              ${this.allowSkip ? '<button class="rdx-po-btn-skip" id="rdx-po-skip">Set up later</button>' : ''}
              <button class="rdx-po-btn-next" id="rdx-po-next" disabled>Continue →</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _renderStep(step) {
    this.step = step;
    const body = document.getElementById('rdx-po-body');
    const nextBtn = document.getElementById('rdx-po-next');
    const backBtn = document.getElementById('rdx-po-back');

    // Update step dots
    this.el.querySelectorAll('.rdx-po-step-dot').forEach(dot => {
      dot.classList.toggle('active', parseInt(dot.dataset.step) <= step);
    });

    backBtn.style.display = step > 1 ? 'block' : 'none';

    if (step === 1) {
      body.innerHTML = this._buildStep1();
      nextBtn.textContent = 'Continue →';
      nextBtn.disabled = !this.selected.professionId;
      this._bindProfessionCards();
    } else if (step === 2) {
      body.innerHTML = this._buildStep2();
      nextBtn.textContent = 'Continue →';
      nextBtn.disabled = !this.selected.trackId;
      this._bindStep2();
    } else if (step === 3) {
      body.innerHTML = this._buildStep3();
      nextBtn.textContent = 'Start Learning →';
      nextBtn.disabled = false;
      this._bindStep3();
    }
  }

  _buildStep1() {
    const cards = RDX_PROFESSIONS.map(p => `
      <button class="rdx-po-prof-card ${this.selected.professionId === p.id ? 'selected' : ''}"
              data-profession="${p.id}"
              style="--prof-color: ${p.color}">
        <span class="rdx-po-prof-icon">${p.icon}</span>
        <span class="rdx-po-prof-label">${p.label}</span>
        <span class="rdx-po-prof-desc">${p.description}</span>
      </button>
    `).join('');

    return `
      <div class="rdx-po-step" id="rdx-po-step-1">
        <h2 class="rdx-po-title">What's your health profession?</h2>
        <p class="rdx-po-subtitle">We'll personalize your case library and reasoning pathways to match your training.</p>
        <div class="rdx-po-prof-grid">
          ${cards}
        </div>
      </div>
    `;
  }

  _buildStep2() {
    const prof = RDX_PROFESSIONS.find(p => p.id === this.selected.professionId);
    if (!prof) return '';

    const trackOptions = prof.tracks.map(t => `
      <button class="rdx-po-track-btn ${this.selected.trackId === t.id ? 'selected' : ''}"
              data-track="${t.id}"
              style="--prof-color: ${prof.color}">
        ${t.label}
      </button>
    `).join('');

    const years = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5+', 'Graduate / Practicing'];
    const yearOptions = years.map(y => `<option value="${y}" ${this.selected.yearOfTraining === y ? 'selected' : ''}>${y}</option>`).join('');

    return `
      <div class="rdx-po-step" id="rdx-po-step-2">
        <h2 class="rdx-po-title">${prof.icon} ${prof.label}</h2>
        <p class="rdx-po-subtitle">Tell us where you are in your training — we'll adjust case complexity and board exam focus accordingly.</p>

        <div class="rdx-po-section-label">Where are you in your program?</div>
        <div class="rdx-po-track-grid">
          ${trackOptions}
        </div>

        <div class="rdx-po-row">
          <div class="rdx-po-field">
            <label class="rdx-po-field-label">Year of training <span class="rdx-po-optional">(optional)</span></label>
            <select id="rdx-po-year" class="rdx-po-select">
              <option value="">Select year...</option>
              ${yearOptions}
            </select>
          </div>
          <div class="rdx-po-field">
            <label class="rdx-po-field-label">Program / School <span class="rdx-po-optional">(optional)</span></label>
            <input type="text" id="rdx-po-program" class="rdx-po-input"
                   placeholder="e.g. NSU KPCAM"
                   value="${this.selected.programName || ''}">
          </div>
        </div>

        <div class="rdx-po-board-badge" style="--prof-color: ${prof.color}">
          <span class="rdx-po-board-label">Board exam:</span>
          <span class="rdx-po-board-exam">${prof.boardExam}</span>
        </div>
      </div>
    `;
  }

  _buildStep3() {
    const prof = RDX_PROFESSIONS.find(p => p.id === this.selected.professionId);
    const tags = this.selected.caseTags.slice(0, 6);

    return `
      <div class="rdx-po-step" id="rdx-po-step-3">
        <h2 class="rdx-po-title">Your personalized ReasonDx is ready</h2>
        <p class="rdx-po-subtitle">Here's what we've tuned for you:</p>

        <div class="rdx-po-summary-card" style="--prof-color: ${prof ? prof.color : '#2874A6'}">
          <div class="rdx-po-summary-row">
            <span class="rdx-po-summary-icon">${prof ? prof.icon : '⚕️'}</span>
            <div>
              <div class="rdx-po-summary-title">${prof ? prof.label : 'Health Professional'}</div>
              <div class="rdx-po-summary-sub">${this.selected.track ? this.selected.track.label : ''}</div>
            </div>
          </div>
          <div class="rdx-po-tag-row">
            ${tags.map(t => `<span class="rdx-po-tag">${t}</span>`).join('')}
            ${this.selected.caseTags.length > 6 ? `<span class="rdx-po-tag rdx-po-tag-more">+${this.selected.caseTags.length - 6} more</span>` : ''}
          </div>
        </div>

        <div class="rdx-po-consent-block">
          <label class="rdx-po-consent-label">
            <input type="checkbox" id="rdx-po-consent" class="rdx-po-consent-check"
                   ${this.selected.researchConsent ? 'checked' : ''}>
            <div class="rdx-po-consent-text">
              <span class="rdx-po-consent-title">Join the ReasonDx Research Study</span>
              <span class="rdx-po-consent-desc">
                Allow de-identified data about your reasoning patterns to be used in educational research. 
                Your data will never be shared with your program or institution. You may withdraw at any time.
              </span>
            </div>
          </label>
        </div>
      </div>
    `;
  }

  _bindProfessionCards() {
    this.el.querySelectorAll('.rdx-po-prof-card').forEach(card => {
      card.addEventListener('click', () => {
        this.el.querySelectorAll('.rdx-po-prof-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selected.professionId = card.dataset.profession;
        this.selected.trackId = null; // reset track on profession change
        document.getElementById('rdx-po-next').disabled = false;
      });
    });
  }

  _bindStep2() {
    // Track buttons
    this.el.querySelectorAll('.rdx-po-track-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.el.querySelectorAll('.rdx-po-track-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selected.trackId = btn.dataset.track;
        document.getElementById('rdx-po-next').disabled = false;
      });
    });

    // Year select
    document.getElementById('rdx-po-year')?.addEventListener('change', e => {
      this.selected.yearOfTraining = e.target.value;
    });

    // Program input
    document.getElementById('rdx-po-program')?.addEventListener('input', e => {
      this.selected.programName = e.target.value;
    });
  }

  _bindStep3() {
    document.getElementById('rdx-po-consent')?.addEventListener('change', e => {
      this.selected.researchConsent = e.target.checked;
    });
  }

  _bindEvents() {
    document.getElementById('rdx-po-next')?.addEventListener('click', () => {
      if (this.step < 3) {
        this._renderStep(this.step + 1);
      } else {
        this._complete();
      }
    });

    document.getElementById('rdx-po-back')?.addEventListener('click', () => {
      if (this.step > 1) this._renderStep(this.step - 1);
    });

    document.getElementById('rdx-po-skip')?.addEventListener('click', () => {
      this._dismiss();
    });
  }

  _complete() {
    this.selected.completedAt = new Date().toISOString();
    this.selected.save();

    // Animate out
    const card = this.el.querySelector('.rdx-po-card');
    card.style.transform = 'translateY(-20px) scale(0.97)';
    card.style.opacity = '0';

    setTimeout(() => {
      this.el.remove();
      this.onComplete(this.selected);
    }, 300);
  }

  _dismiss() {
    const card = this.el.querySelector('.rdx-po-card');
    card.style.transform = 'translateY(20px) scale(0.97)';
    card.style.opacity = '0';
    setTimeout(() => {
      this.el.remove();
      this.onComplete(null);
    }, 250);
  }

  _attachStyles() {
    if (document.getElementById('rdx-po-styles')) return;
    const style = document.createElement('style');
    style.id = 'rdx-po-styles';
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');

      :root {
        --rdx-blue: #2874A6;
        --rdx-blue-light: #EBF5FB;
        --rdx-text: #1a2332;
        --rdx-muted: #64748b;
        --rdx-border: #e2e8f0;
        --rdx-radius: 14px;
      }

      #rdx-profession-modal {
        font-family: 'DM Sans', sans-serif;
        position: fixed;
        inset: 0;
        z-index: 99999;
      }

      .rdx-po-backdrop {
        width: 100%;
        height: 100%;
        background: rgba(10, 20, 40, 0.65);
        backdrop-filter: blur(6px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
        opacity: 0;
        transition: opacity 0.25s ease;
      }

      .rdx-po-card {
        background: #fff;
        border-radius: 20px;
        width: 100%;
        max-width: 640px;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08);
        transform: translateY(24px) scale(0.97);
        opacity: 0;
        transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease;
        overflow: hidden;
      }

      .rdx-po-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 28px 16px;
        border-bottom: 1px solid var(--rdx-border);
        flex-shrink: 0;
      }

      .rdx-po-logo {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .rdx-po-logo-mark {
        background: var(--rdx-blue);
        color: white;
        font-family: 'DM Serif Display', serif;
        font-size: 14px;
        font-weight: 400;
        padding: 3px 7px;
        border-radius: 6px;
        letter-spacing: 0.5px;
      }

      .rdx-po-logo-text {
        font-size: 15px;
        font-weight: 700;
        color: var(--rdx-text);
        letter-spacing: -0.3px;
      }

      .rdx-po-step-indicator {
        display: flex;
        gap: 6px;
        align-items: center;
      }

      .rdx-po-step-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--rdx-border);
        transition: background 0.2s, transform 0.2s;
      }

      .rdx-po-step-dot.active {
        background: var(--rdx-blue);
        transform: scale(1.2);
      }

      .rdx-po-body {
        flex: 1;
        overflow-y: auto;
        padding: 24px 28px;
      }

      .rdx-po-title {
        font-family: 'DM Serif Display', serif;
        font-size: 1.5rem;
        color: var(--rdx-text);
        margin: 0 0 6px;
        line-height: 1.25;
      }

      .rdx-po-subtitle {
        color: var(--rdx-muted);
        font-size: 0.9rem;
        margin: 0 0 20px;
        line-height: 1.5;
      }

      /* Profession Cards Grid */
      .rdx-po-prof-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 10px;
      }

      .rdx-po-prof-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        padding: 14px 14px 12px;
        border: 2px solid var(--rdx-border);
        border-radius: var(--rdx-radius);
        background: white;
        cursor: pointer;
        text-align: left;
        transition: border-color 0.15s, box-shadow 0.15s, transform 0.1s;
        position: relative;
        overflow: hidden;
      }

      .rdx-po-prof-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: var(--prof-color, var(--rdx-blue));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.2s ease;
      }

      .rdx-po-prof-card:hover {
        border-color: var(--prof-color, var(--rdx-blue));
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        transform: translateY(-1px);
      }

      .rdx-po-prof-card:hover::before,
      .rdx-po-prof-card.selected::before {
        transform: scaleX(1);
      }

      .rdx-po-prof-card.selected {
        border-color: var(--prof-color, var(--rdx-blue));
        background: color-mix(in srgb, var(--prof-color, var(--rdx-blue)) 6%, white);
        box-shadow: 0 4px 20px color-mix(in srgb, var(--prof-color, var(--rdx-blue)) 20%, transparent);
      }

      .rdx-po-prof-icon {
        font-size: 1.6rem;
        line-height: 1;
        margin-bottom: 2px;
      }

      .rdx-po-prof-label {
        font-weight: 700;
        font-size: 0.85rem;
        color: var(--rdx-text);
        line-height: 1.2;
      }

      .rdx-po-prof-desc {
        font-size: 0.72rem;
        color: var(--rdx-muted);
        line-height: 1.3;
      }

      /* Track buttons */
      .rdx-po-section-label {
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--rdx-muted);
        margin-bottom: 10px;
      }

      .rdx-po-track-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 20px;
      }

      .rdx-po-track-btn {
        padding: 12px 16px;
        border: 2px solid var(--rdx-border);
        border-radius: 10px;
        background: white;
        text-align: left;
        font-size: 0.9rem;
        font-family: 'DM Sans', sans-serif;
        cursor: pointer;
        transition: border-color 0.15s, background 0.15s;
        color: var(--rdx-text);
      }

      .rdx-po-track-btn:hover {
        border-color: var(--prof-color, var(--rdx-blue));
      }

      .rdx-po-track-btn.selected {
        border-color: var(--prof-color, var(--rdx-blue));
        background: color-mix(in srgb, var(--prof-color, var(--rdx-blue)) 8%, white);
        font-weight: 600;
      }

      /* Row + fields */
      .rdx-po-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin-bottom: 16px;
      }

      .rdx-po-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .rdx-po-field-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--rdx-text);
      }

      .rdx-po-optional {
        color: var(--rdx-muted);
        font-weight: 400;
      }

      .rdx-po-select,
      .rdx-po-input {
        padding: 10px 12px;
        border: 2px solid var(--rdx-border);
        border-radius: 9px;
        font-size: 0.9rem;
        font-family: 'DM Sans', sans-serif;
        color: var(--rdx-text);
        background: white;
        outline: none;
        transition: border-color 0.15s;
      }

      .rdx-po-select:focus,
      .rdx-po-input:focus {
        border-color: var(--rdx-blue);
      }

      /* Board exam badge */
      .rdx-po-board-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        background: color-mix(in srgb, var(--prof-color, var(--rdx-blue)) 10%, white);
        border: 1px solid color-mix(in srgb, var(--prof-color, var(--rdx-blue)) 25%, transparent);
        border-radius: 8px;
        font-size: 0.82rem;
      }

      .rdx-po-board-label {
        color: var(--rdx-muted);
        font-weight: 500;
      }

      .rdx-po-board-exam {
        font-weight: 700;
        color: var(--prof-color, var(--rdx-blue));
      }

      /* Summary card (step 3) */
      .rdx-po-summary-card {
        border: 2px solid color-mix(in srgb, var(--prof-color) 30%, transparent);
        background: color-mix(in srgb, var(--prof-color) 5%, white);
        border-radius: 14px;
        padding: 18px 20px;
        margin-bottom: 20px;
      }

      .rdx-po-summary-row {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 14px;
      }

      .rdx-po-summary-icon {
        font-size: 2.2rem;
        line-height: 1;
      }

      .rdx-po-summary-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--rdx-text);
      }

      .rdx-po-summary-sub {
        font-size: 0.85rem;
        color: var(--rdx-muted);
        margin-top: 2px;
      }

      .rdx-po-tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .rdx-po-tag {
        padding: 4px 10px;
        background: color-mix(in srgb, var(--prof-color) 15%, white);
        color: color-mix(in srgb, var(--prof-color) 80%, black);
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: capitalize;
      }

      .rdx-po-tag-more {
        background: var(--rdx-border);
        color: var(--rdx-muted);
      }

      /* Research consent */
      .rdx-po-consent-block {
        border: 1px solid var(--rdx-border);
        border-radius: 12px;
        padding: 16px;
        background: #f8fafc;
      }

      .rdx-po-consent-label {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        cursor: pointer;
      }

      .rdx-po-consent-check {
        width: 18px;
        height: 18px;
        margin-top: 2px;
        accent-color: var(--rdx-blue);
        flex-shrink: 0;
        cursor: pointer;
      }

      .rdx-po-consent-text {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .rdx-po-consent-title {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--rdx-text);
      }

      .rdx-po-consent-desc {
        font-size: 0.8rem;
        color: var(--rdx-muted);
        line-height: 1.5;
      }

      /* Footer */
      .rdx-po-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 28px 20px;
        border-top: 1px solid var(--rdx-border);
        flex-shrink: 0;
        gap: 12px;
      }

      .rdx-po-footer-right {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: auto;
      }

      .rdx-po-btn-back {
        background: none;
        border: 1px solid var(--rdx-border);
        border-radius: 9px;
        padding: 10px 16px;
        font-size: 0.88rem;
        font-family: 'DM Sans', sans-serif;
        color: var(--rdx-muted);
        cursor: pointer;
        transition: border-color 0.15s, color 0.15s;
      }

      .rdx-po-btn-back:hover {
        border-color: var(--rdx-text);
        color: var(--rdx-text);
      }

      .rdx-po-btn-skip {
        background: none;
        border: none;
        font-size: 0.85rem;
        font-family: 'DM Sans', sans-serif;
        color: var(--rdx-muted);
        cursor: pointer;
        padding: 6px 8px;
        text-decoration: underline;
        text-underline-offset: 3px;
      }

      .rdx-po-btn-skip:hover {
        color: var(--rdx-text);
      }

      .rdx-po-btn-next {
        background: var(--rdx-blue);
        color: white;
        border: none;
        border-radius: 10px;
        padding: 11px 22px;
        font-size: 0.9rem;
        font-weight: 700;
        font-family: 'DM Sans', sans-serif;
        cursor: pointer;
        transition: background 0.15s, transform 0.1s, opacity 0.15s;
        letter-spacing: 0.01em;
      }

      .rdx-po-btn-next:hover:not(:disabled) {
        background: #1e5f91;
        transform: translateY(-1px);
      }

      .rdx-po-btn-next:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        transform: none;
      }

      @media (max-width: 500px) {
        .rdx-po-prof-grid { grid-template-columns: repeat(2, 1fr); }
        .rdx-po-row { grid-template-columns: 1fr; }
        .rdx-po-body { padding: 18px 18px; }
        .rdx-po-footer { padding: 14px 18px 18px; }
        .rdx-po-header { padding: 16px 18px 14px; }
      }
    `;
    document.head.appendChild(style);
  }
}

// Expose modal class globally
window.RDX_ProfessionOnboardingModal = ProfessionOnboardingModal;

// ─── AUTO-INIT LOGIC ─────────────────────────────────────────────────────────
// Show modal if:
//  (a) user is logged in (reasondx-user exists in localStorage), AND
//  (b) profession has not been set yet
//  OR if URL param ?setup-profession=1 forces it

function rdxShouldShowProfessionOnboarding() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('setup-profession') === '1') return true;

  const user = JSON.parse(localStorage.getItem('reasondx-user') || '{}');
  if (!user || !user.email) return false; // Not logged in

  const profile = ProfessionProfile.load();
  return !profile.isComplete;
}

function rdxInitProfessionOnboarding(options = {}) {
  if (!rdxShouldShowProfessionOnboarding()) return;

  const modal = new ProfessionOnboardingModal({
    allowSkip: options.allowSkip !== false,
    onComplete: async (profile) => {
      if (!profile) return; // skipped

      // Sync to Supabase if client is available
      if (window.supabase && window.supabase.auth) {
        const { data: { user } } = await window.supabase.auth.getUser();
        if (user) await profile.syncToSupabase(window.supabase, user.id);
      }

      // Fire custom event so other modules can react
      document.dispatchEvent(new CustomEvent('rdx:professionSet', {
        detail: { profile: profile.toJSON() }
      }));

      // Redirect to browse with profession filter if on a neutral page
      if (options.redirectOnComplete) {
        window.location.href = `browse.html?${profile.getBrowseParams()}`;
      }
    }
  });

  modal.inject();
}

// ─── SUPABASE MIGRATION SQL (run once in Supabase SQL Editor) ────────────────
// Stored as a comment for easy access — copy and run in Supabase dashboard.
/*
-- Add profession columns to profiles table
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS profession_id       TEXT,
  ADD COLUMN IF NOT EXISTS track_id            TEXT,
  ADD COLUMN IF NOT EXISTS program_name        TEXT,
  ADD COLUMN IF NOT EXISTS year_of_training    TEXT,
  ADD COLUMN IF NOT EXISTS research_consent    BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS cohort_id           TEXT,
  ADD COLUMN IF NOT EXISTS profession_set_at   TIMESTAMPTZ;

-- Index for research queries by profession
CREATE INDEX IF NOT EXISTS idx_profiles_profession ON profiles(profession_id);
CREATE INDEX IF NOT EXISTS idx_profiles_cohort ON profiles(cohort_id);
*/

// Auto-run on DOMContentLoaded (safe — checks conditions internally)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => rdxInitProfessionOnboarding());
} else {
  rdxInitProfessionOnboarding();
}
