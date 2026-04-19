/* js/exam-builder.js — ReasonDx Physical Exam Builder
 * Complete exam menu with expandable systems and subsections.
 * Students choose what to examine — they are NOT given a checklist.
 * Findings revealed only after deliberate selection.
 * Tracks choices for reasoning assessment.
 */
(function () {
  'use strict';

  // ── Complete physical exam catalog ─────────────────────────────
  // Organized as systems → maneuvers. Students see the system headers
  // and must decide which maneuvers are relevant to their differential.
  var EXAM_CATALOG = [
    {
      system: 'General',
      icon: '👁',
      maneuvers: [
        'General appearance and distress',
        'Level of consciousness / orientation',
        'Body habitus and nutritional status',
        'Gait and station',
      ]
    },
    {
      system: 'Vital Signs',
      icon: '📊',
      maneuvers: [
        'Blood pressure (bilateral)',
        'Heart rate and rhythm assessment',
        'Respiratory rate',
        'Temperature',
        'Oxygen saturation',
        'BMI / weight',
        'Orthostatic vital signs',
      ]
    },
    {
      system: 'Skin',
      icon: '🖐',
      maneuvers: [
        'Color, temperature, moisture',
        'Turgor and capillary refill',
        'Rash or lesion inspection',
        'Jaundice / pallor / cyanosis assessment',
        'Diaphoresis',
      ]
    },
    {
      system: 'Head & Eyes',
      icon: '👁',
      maneuvers: [
        'Head inspection (normocephalic, trauma)',
        'Pupils (size, reactivity, symmetry)',
        'Extraocular movements',
        'Fundoscopic exam',
        'Conjunctiva / sclera inspection',
        'Visual acuity (confrontation)',
      ]
    },
    {
      system: 'Ears, Nose, Throat',
      icon: '👂',
      maneuvers: [
        'Ear canal and tympanic membranes',
        'Nasal mucosa and septum',
        'Oropharynx and tonsils',
        'Dentition inspection',
        'Voice quality / hoarseness',
      ]
    },
    {
      system: 'Neck',
      icon: '🔍',
      maneuvers: [
        'Jugular venous distension (JVD)',
        'Lymph node palpation (cervical, supraclavicular)',
        'Thyroid palpation',
        'Tracheal position',
        'Carotid pulsations and bruits',
        'Meningismus (neck stiffness, Kernig, Brudzinski)',
      ]
    },
    {
      system: 'Cardiovascular',
      icon: '❤️',
      maneuvers: [
        'Precordial inspection and palpation (PMI)',
        'Auscultation — S1/S2, rhythm',
        'Auscultation — murmurs (grade, location, radiation)',
        'Auscultation — S3/S4 gallop',
        'Pericardial friction rub',
        'Peripheral pulses (radial, dorsalis pedis, posterior tibial)',
        'Ankle-brachial index',
        'Hepatojugular reflux',
        'Pulsus paradoxus',
      ]
    },
    {
      system: 'Pulmonary',
      icon: '🫁',
      maneuvers: [
        'Inspection (respiratory rate, effort, accessory muscles)',
        'Chest wall inspection (symmetry, deformity)',
        'Percussion (resonance, dullness, hyperresonance)',
        'Auscultation — breath sounds bilaterally',
        'Auscultation — wheeze, crackles, rhonchi',
        'Auscultation — pleural friction rub',
        'Tactile fremitus',
        'Diaphragmatic excursion',
        'Peak flow measurement',
      ]
    },
    {
      system: 'Abdomen',
      icon: '🩺',
      maneuvers: [
        'Inspection (distension, scars, pulsation)',
        'Auscultation — bowel sounds',
        'Auscultation — bruits (aortic, renal)',
        'Percussion (tympany, dullness)',
        'Light palpation (guarding, tenderness)',
        'Deep palpation (masses, organomegaly)',
        'Liver span (percussion)',
        'Splenomegaly assessment',
        'Murphy sign (RUQ)',
        'McBurney point / rebound tenderness',
        'Psoas sign / obturator sign',
        'Fluid wave / shifting dullness (ascites)',
        'Rectal exam (if indicated)',
      ]
    },
    {
      system: 'Musculoskeletal',
      icon: '🦴',
      maneuvers: [
        'Upper extremity ROM and strength',
        'Lower extremity ROM and strength',
        'Joint inspection (swelling, warmth, erythema)',
        'Joint palpation (tenderness, crepitus)',
        'Spine inspection and percussion',
        'Hip flexion / straight leg raise',
        'Muscle bulk and tone',
      ]
    },
    {
      system: 'Neurological',
      icon: '🧠',
      maneuvers: [
        'Mental status (orientation, attention, memory)',
        'Cranial nerves I–XII screen',
        'Motor — upper extremities (strength, drift)',
        'Motor — lower extremities (strength)',
        'Sensation — light touch / pinprick',
        'Reflexes — deep tendon (biceps, triceps, patella, Achilles)',
        'Babinski sign',
        'Coordination (finger-nose, heel-shin)',
        'Romberg sign',
        'Gait assessment',
        'Cerebellar function',
        'Tremor assessment',
      ]
    },
    {
      system: 'Extremities & Vascular',
      icon: '🦵',
      maneuvers: [
        'Peripheral edema (pitting, location, degree)',
        'Calf tenderness / Homan sign',
        'Skin changes (stasis dermatitis, ulcers)',
        'Clubbing / cyanosis / splinter hemorrhages',
        'Capillary refill time',
        'Lymphedema assessment',
      ]
    },
    {
      system: 'Psychiatric',
      icon: '💬',
      maneuvers: [
        'Appearance and behavior',
        'Speech (rate, volume, coherence)',
        'Mood and affect',
        'Thought content (SI, HI, delusions)',
        'Thought process (linear, tangential)',
        'Perceptual disturbances (hallucinations)',
        'Insight and judgment',
        'Cognitive screen (MMSE / MoCA)',
      ]
    },
  ];

  // ── Universal findings (fallback when case has none) ────────────
  var UNIVERSAL_FINDINGS = {
    'General appearance and distress':      'Patient appears stated age, alert, in mild-to-moderate distress.',
    'Level of consciousness / orientation': 'Alert and oriented to person, place, time, and situation.',
    'Body habitus and nutritional status':  'BMI as noted in vitals. No cachexia or morbid obesity on inspection.',
    'Gait and station':                     'Ambulatory without assistive device. Steady gait.',
    'Blood pressure (bilateral)':           'See vitals tab. No significant interarm differential.',
    'Heart rate and rhythm assessment':     'See vitals tab. Radial pulse regular in rhythm.',
    'Respiratory rate':                     'See vitals tab.',
    'Temperature':                          'See vitals tab.',
    'Oxygen saturation':                    'See vitals tab.',
    'BMI / weight':                         'See vitals tab.',
    'Orthostatic vital signs':              'Orthostatics not performed.',
    'Color, temperature, moisture':         'Warm, dry, intact. No pallor, cyanosis, or jaundice.',
    'Turgor and capillary refill':          'Skin turgor normal. Capillary refill < 2 seconds.',
    'Rash or lesion inspection':            'No rash, petechiae, purpura, or new lesions noted.',
    'Jaundice / pallor / cyanosis assessment': 'No icterus. Conjunctivae non-pale. No central cyanosis.',
    'Diaphoresis':                          'Skin dry. No diaphoresis.',
    'Head inspection (normocephalic, trauma)': 'Normocephalic, atraumatic. No palpable masses.',
    'Pupils (size, reactivity, symmetry)':  'Pupils equal, round, reactive to light (3mm → 2mm bilaterally). No afferent pupillary defect.',
    'Extraocular movements':                'Intact in all 6 directions. No nystagmus.',
    'Fundoscopic exam':                     'Disc margins sharp. No papilledema, hemorrhages, or exudates.',
    'Conjunctiva / sclera inspection':      'Conjunctivae pink. Sclerae white.',
    'Visual acuity (confrontation)':        'Grossly intact to confrontation fields bilaterally.',
    'Ear canal and tympanic membranes':     'TMs intact bilaterally. No erythema or effusion.',
    'Nasal mucosa and septum':              'Mucosa pink and moist. Septum midline.',
    'Oropharynx and tonsils':              'Oropharynx clear. Tonsils 1+ without exudate. Uvula midline.',
    'Dentition inspection':                 'Dentition intact. No mucosal lesions.',
    'Voice quality / hoarseness':          'Voice clear. No hoarseness.',
    'Jugular venous distension (JVD)':     'JVP not elevated at 45°. No hepatojugular reflux.',
    'Lymph node palpation (cervical, supraclavicular)': 'No cervical or supraclavicular lymphadenopathy.',
    'Thyroid palpation':                   'Thyroid midline, non-tender, no palpable nodules or goiter.',
    'Tracheal position':                   'Trachea midline.',
    'Carotid pulsations and bruits':       'Carotid upstrokes normal. No bruits bilaterally.',
    'Meningismus (neck stiffness, Kernig, Brudzinski)': 'Neck supple. Kernig and Brudzinski signs absent.',
    'Precordial inspection and palpation (PMI)': 'No visible heave or lift. PMI at 5th ICS, MCL. Non-displaced.',
    'Auscultation — S1/S2, rhythm':        'Regular rate and rhythm. S1/S2 present and normal.',
    'Auscultation — murmurs (grade, location, radiation)': 'No murmurs appreciated.',
    'Auscultation — S3/S4 gallop':        'No S3 or S4 gallop.',
    'Pericardial friction rub':            'No pericardial friction rub.',
    'Peripheral pulses (radial, dorsalis pedis, posterior tibial)': 'Peripheral pulses 2+ bilaterally.',
    'Ankle-brachial index':               'Not performed.',
    'Hepatojugular reflux':               'HJR absent.',
    'Pulsus paradoxus':                   'Not measured.',
    'Inspection (respiratory rate, effort, accessory muscles)': 'Breathing unlabored. No accessory muscle use. No nasal flaring.',
    'Chest wall inspection (symmetry, deformity)': 'Chest symmetric. No deformity or paradoxical motion.',
    'Percussion (resonance, dullness, hyperresonance)': 'Resonant throughout. No areas of dullness or hyperresonance.',
    'Auscultation — breath sounds bilaterally': 'Breath sounds present and equal bilaterally.',
    'Auscultation — wheeze, crackles, rhonchi': 'No wheezes, crackles, or rhonchi.',
    'Auscultation — pleural friction rub': 'No pleural friction rub.',
    'Tactile fremitus':                   'Fremitus equal bilaterally.',
    'Diaphragmatic excursion':            'Not measured.',
    'Peak flow measurement':              'Not performed.',
    'Inspection (distension, scars, pulsation)': 'Abdomen flat, non-distended. No visible pulsation. Well-healed scar.',
    'Auscultation — bowel sounds':        'Normoactive bowel sounds in all 4 quadrants.',
    'Auscultation — bruits (aortic, renal)': 'No aortic or renal bruits.',
    'Percussion (tympany, dullness)':     'Tympanic in most areas. No areas of shifting dullness.',
    'Light palpation (guarding, tenderness)': 'Soft, non-tender throughout. No voluntary guarding.',
    'Deep palpation (masses, organomegaly)': 'No masses. Liver and spleen not enlarged to palpation.',
    'Liver span (percussion)':            'Liver span 10 cm at MCL.',
    'Splenomegaly assessment':            'Spleen not palpable.',
    'Murphy sign (RUQ)':                  'Murphy sign negative.',
    'McBurney point / rebound tenderness':'Non-tender at McBurney point. Rebound tenderness absent.',
    'Psoas sign / obturator sign':        'Psoas and obturator signs negative.',
    'Fluid wave / shifting dullness (ascites)': 'No fluid wave. No shifting dullness.',
    'Rectal exam (if indicated)':         'Not performed.',
    'Upper extremity ROM and strength':   'Full ROM. Strength 5/5 throughout.',
    'Lower extremity ROM and strength':   'Full ROM. Strength 5/5 throughout.',
    'Joint inspection (swelling, warmth, erythema)': 'No swelling, warmth, or erythema.',
    'Joint palpation (tenderness, crepitus)': 'Non-tender. No crepitus.',
    'Spine inspection and percussion':    'Spine midline. No CVAT. No midline tenderness.',
    'Hip flexion / straight leg raise':   'Hip flexion full bilaterally. SLR negative bilaterally.',
    'Muscle bulk and tone':               'Bulk and tone normal throughout.',
    'Mental status (orientation, attention, memory)': 'Alert and oriented x4. Attention and recall intact.',
    'Cranial nerves I–XII screen':        'CN II–XII grossly intact. Olfaction not tested.',
    'Motor — upper extremities (strength, drift)': 'Strength 5/5. No pronator drift.',
    'Motor — lower extremities (strength)': 'Strength 5/5 in hip flexion, knee extension/flexion, ankle dorsiflexion/plantarflexion.',
    'Sensation — light touch / pinprick': 'Light touch intact symmetrically. No dermatomal deficits.',
    'Reflexes — deep tendon (biceps, triceps, patella, Achilles)': 'DTRs 2+ throughout and symmetric.',
    'Babinski sign':                      'Plantar response flexor bilaterally.',
    'Coordination (finger-nose, heel-shin)': 'Finger-nose intact. Heel-shin intact.',
    'Romberg sign':                       'Romberg negative.',
    'Gait assessment':                    'Normal gait. Tandem gait intact.',
    'Cerebellar function':                'No dysdiadochokinesia. Smooth pursuit intact.',
    'Tremor assessment':                  'No resting or intention tremor noted.',
    'Peripheral edema (pitting, location, degree)': 'No peripheral edema.',
    'Calf tenderness / Homan sign':       'Non-tender calves bilaterally. Homan sign unreliable — not clinically relied upon.',
    'Skin changes (stasis dermatitis, ulcers)': 'No stasis changes. No ulcerations.',
    'Clubbing / cyanosis / splinter hemorrhages': 'No clubbing, peripheral cyanosis, or splinter hemorrhages.',
    'Capillary refill time':              'Capillary refill < 2 seconds.',
    'Lymphedema assessment':              'No lymphedema.',
    'Appearance and behavior':            'Appropriate dress and grooming. No psychomotor agitation or retardation.',
    'Speech (rate, volume, coherence)':   'Normal rate, volume, and articulation. Coherent.',
    'Mood and affect':                    'Mood euthymic. Affect appropriate to content.',
    'Thought content (SI, HI, delusions)':'Denies SI/HI. No delusional ideation expressed.',
    'Thought process (linear, tangential)': 'Thought process linear and goal-directed.',
    'Perceptual disturbances (hallucinations)': 'Denies auditory, visual, or tactile hallucinations.',
    'Insight and judgment':               'Insight and judgment intact.',
    'Cognitive screen (MMSE / MoCA)':    'Not formally administered. Grossly intact on interview.',
  };

  var _selected = {};
  var _revealed = {};
  var _guided   = null;
  var _expanded = {};   // which system sections are expanded

  function _save() {
    try {
      sessionStorage.setItem('rdx-exam-state', JSON.stringify({
        selected: _selected, revealed: _revealed, expanded: _expanded
      }));
    } catch (e) {}
  }

  function _load() {
    try {
      var raw = JSON.parse(sessionStorage.getItem('rdx-exam-state'));
      if (raw) {
        _selected = raw.selected || {};
        _revealed = raw.revealed || {};
        _expanded = raw.expanded || {};
        return true;
      }
    } catch (e) {}
    return false;
  }

  function _getFinding(maneuver) {
    var caseFindings = _guided && _guided.examFindings;
    if (caseFindings && caseFindings[maneuver]) return caseFindings[maneuver];
    return UNIVERSAL_FINDINGS[maneuver] || 'Findings not documented for this maneuver in this case.';
  }

  function _selectedCount() { return Object.keys(_selected).length; }

  // ── Toggle system section expansion ────────────────────────────
  window._rdxExamToggleSystem = function (systemLabel) {
    _expanded[systemLabel] = !_expanded[systemLabel];
    _save();
    _rerender();
  };

  // ── Toggle a maneuver selection ─────────────────────────────────
  window._rdxExamToggle = function (maneuver) {
    if (_selected[maneuver]) {
      delete _selected[maneuver];
      delete _revealed[maneuver];
    } else {
      _selected[maneuver] = true;
    }
    _save();
    _rerender();
    // Keep GuidedMode advance button in sync
    if (window.GuidedMode) {
      window.GuidedMode._examDoneOverride = Object.keys(_selected);
    }
    // Re-render parent phase if in guided mode (so button enables/disables live)
    if (window.GuidedMode && GuidedMode.isActive()) {
      var phaseContainer = document.getElementById('guided-phase-content');
      if (phaseContainer) {
        phaseContainer.innerHTML = GuidedMode.renderPhase();
      } else if (window.render) {
        render();
      }
    }
  };

  // ── Reveal a finding ────────────────────────────────────────────
  window._rdxExamReveal = function (maneuver) {
    _revealed[maneuver] = true;
    _save();
    _rerender();
  };

  function _rerender() {
    var container = document.getElementById('rdx-exam-builder');
    if (!container) return;
    container.innerHTML = _buildInner();
  }

  function _buildInner() {
    var selCount = _selectedCount();
    var FF = 'font-family:\'DM Sans\',-apple-system,sans-serif;';
    var html = '';

    // ── Instruction card ──
    html += '<div style="background:#EBF5FB;border-radius:8px;padding:11px 14px;margin-bottom:16px;font-size:12px;color:#1B4F72;line-height:1.6">';
    html += '<strong>Choose examination maneuvers based on your differential.</strong> ';
    html += 'Expand a body system, then select the specific maneuvers you want to perform. ';
    html += 'Findings are revealed after you choose — be deliberate. ';
    html += '<span style="color:#2874A6;font-weight:600">Your selections are tracked as part of your reasoning assessment.</span>';
    html += '</div>';

    // ── Status bar ──
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">';
    html += '<div style="font-size:12px;color:#4a5568"><strong style="color:#2874A6">' + selCount + '</strong> maneuver' + (selCount !== 1 ? 's' : '') + ' selected</div>';
    if (selCount >= 2) {
      html += '<div style="font-size:11px;color:#1B7A3D;font-weight:600;background:#E8F5E9;padding:3px 10px;border-radius:10px">✓ Ready to advance</div>';
    } else {
      html += '<div style="font-size:11px;color:#718096">Select at least 2 maneuvers to advance</div>';
    }
    html += '</div>';

    // ── System accordion ──
    EXAM_CATALOG.forEach(function (sys) {
      var sysSelected = sys.maneuvers.filter(function (m) { return _selected[m]; }).length;
      var isExpanded = !!_expanded[sys.system];
      var safeLabel = sys.system.replace(/'/g, "\\'");

      // System header
      html += '<div style="margin-bottom:4px;border:1px solid ' + (sysSelected > 0 ? '#AED6F1' : '#E4EEF6') + ';border-radius:8px;overflow:hidden">';
      html += '<button type="button" onclick="_rdxExamToggleSystem(\'' + safeLabel + '\')" ';
      html += 'style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:9px 14px;';
      html += 'background:' + (sysSelected > 0 ? '#EBF5FB' : '#F8FAFC') + ';border:none;cursor:pointer;text-align:left;font-family:inherit">';
      html += '<div style="display:flex;align-items:center;gap:8px">';
      html += '<span style="font-size:15px">' + sys.icon + '</span>';
      html += '<span style="font-size:12px;font-weight:700;color:' + (sysSelected > 0 ? '#2874A6' : '#374151') + '">' + sys.system + '</span>';
      if (sysSelected > 0) {
        html += '<span style="font-size:10px;background:#2874A6;color:#fff;padding:1px 7px;border-radius:10px;font-weight:700">' + sysSelected + ' selected</span>';
      }
      html += '</div>';
      html += '<span style="color:#94A3B8;font-size:13px;transition:transform .2s;display:inline-block;transform:rotate(' + (isExpanded ? '90' : '0') + 'deg)">›</span>';
      html += '</button>';

      // Maneuver list (only when expanded)
      if (isExpanded) {
        html += '<div style="padding:10px 14px 12px;background:#fff;border-top:1px solid #E4EEF6">';
        sys.maneuvers.forEach(function (m) {
          var isSelected = !!_selected[m];
          var isRevealed = !!_revealed[m];
          var safeM = JSON.stringify(m);

          html += '<div style="margin-bottom:' + (isRevealed ? '12' : '6') + 'px">';

          // Maneuver row: checkbox-style button + optional reveal button
          html += '<div style="display:flex;align-items:center;gap:8px">';
          html += '<button type="button" onclick="_rdxExamToggle(' + safeM + ')" ';
          html += 'style="display:flex;align-items:center;gap:8px;padding:6px 12px 6px 8px;border-radius:6px;';
          html += 'border:1px solid ' + (isSelected ? '#2874A6' : '#D1D5DB') + ';';
          html += 'background:' + (isSelected ? '#EBF5FB' : '#fff') + ';';
          html += 'cursor:pointer;font-size:12px;color:' + (isSelected ? '#1B4F72' : '#374151') + ';font-family:inherit;text-align:left">';
          html += '<span style="width:16px;height:16px;border-radius:4px;border:2px solid ' + (isSelected ? '#2874A6' : '#9CA3AF') + ';';
          html += 'background:' + (isSelected ? '#2874A6' : 'transparent') + ';display:flex;align-items:center;justify-content:center;flex-shrink:0">';
          if (isSelected) html += '<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>';
          html += '</span>';
          html += m;
          html += '</button>';

          if (isSelected && !isRevealed) {
            html += '<button type="button" onclick="_rdxExamReveal(' + safeM + ')" ';
            html += 'style="padding:5px 12px;background:#2874A6;color:#fff;border:none;border-radius:6px;';
            html += 'font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap">Examine →</button>';
          }
          html += '</div>';

          // Revealed finding
          if (isRevealed) {
            html += '<div style="margin-top:4px;margin-left:24px;padding:10px 12px;background:#F0F9FF;border-left:3px solid #2874A6;border-radius:0 6px 6px 0">';
            html += '<div style="font-size:11px;font-weight:700;color:#1B4F72;margin-bottom:3px;text-transform:uppercase;letter-spacing:.4px">Findings</div>';
            html += '<div style="font-size:12px;color:#1e3a5f;line-height:1.6">' + _getFinding(m) + '</div>';
            html += '</div>';
          }

          html += '</div>';
        });
        html += '</div>';
      }

      html += '</div>'; // system card
    });

    return html;
  }

  // ── Public API ───────────────────────────────────────────────────
  window.ExamBuilder = {

    init: function () {
      _guided = window.EMR_DATA && window.EMR_DATA.guided;
      _load();
    },

    render: function () {
      this.init();
      return '<div id="rdx-exam-builder">' + _buildInner() + '</div>';
    },

    getSelected:      function () { return Object.keys(_selected); },
    getRevealed:      function () { return Object.keys(_revealed); },
    getSelectedCount: function () { return Object.keys(_selected).length; },

    reset: function () {
      _selected = {}; _revealed = {}; _expanded = {};
      sessionStorage.removeItem('rdx-exam-state');
    }
  };

  // Patch GuidedMode.getExamDone to read live from ExamBuilder
  setTimeout(function () {
    if (window.GuidedMode) {
      window.GuidedMode.getExamDone = function () {
        return window.ExamBuilder ? ExamBuilder.getSelected() : [];
      };
    }
  }, 500);

})();
