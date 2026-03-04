/* js/rdx-patient-continuity.js — Cross-Setting Patient Continuity
 * Defines patients who appear across multiple clinical settings
 * with chronological encounter history that accumulates.
 *
 * When a learner opens a patient's chart, the system checks if that
 * patient has prior encounters in other settings and prepends them
 * as historical notes with dynamic dates.
 *
 * Usage:
 *   PatientContinuity.getEncounterChain(caseId) → array of prior encounters
 *   PatientContinuity.hasHistory(caseId) → boolean
 *   PatientContinuity.renderPriorNotes(caseId) → HTML string of prior chart notes
 *   PatientContinuity.isSharedPatient(caseId) → boolean
 *   PatientContinuity.getRelatedCases(caseId) → array of related case IDs
 *   PatientContinuity.getAllChains() → all defined encounter chains
 */
(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════
  // ENCOUNTER CHAINS
  // Each chain represents ONE patient seen across settings.
  // Encounters are ordered chronologically (earliest first).
  // 'daysAgo' is relative to today's date.
  // 'setting' matches the EMR setting values.
  // ═══════════════════════════════════════════════════════
  var CHAINS = [

    // ─── 1. CHF PROGRESSION ────────────────────────────
    // Winston Carmichael: Clinic → ED → Inpatient
    {
      patientName: 'Winston Carmichael',
      patientId: 'winston-carmichael',
      age: '65M',
      pmh: 'HTN, HFrEF (EF 30%), T2DM, CKD Stage 3',
      cases: ['chf-exacerbation'],
      encounters: [
        {
          daysAgo: 21,
          setting: 'Clinic',
          type: 'Outpatient Cardiology Follow-Up',
          provider: 'Dr. Vasquez',
          summary: 'Routine follow-up for HFrEF. Patient reports compliance with medications but admits to increased dietary sodium over holidays. Weight up 3 lbs from last visit. BNP mildly elevated at 480 (baseline 300). Increased furosemide from 40mg to 60mg daily. Reinforced low-sodium diet. Follow-up in 4 weeks.',
          vitals: { HR: 78, BP: '128/76', RR: 16, SpO2: 96, Temp: '36.8°C', Wt: '198 lbs' },
          assessment: 'Compensated HFrEF with early volume overload. Medication adjustment.',
          orders: 'Increase furosemide to 60mg daily. BMP in 1 week. Dietary counseling referral.'
        },
        {
          daysAgo: 7,
          setting: 'Clinic',
          type: 'Urgent Nurse Visit',
          provider: 'RN Tanya Brooks',
          summary: 'Patient called reporting 5-lb weight gain over 4 days and new ankle swelling. Seen in clinic urgently. Orthopnea with 3-pillow requirement (new). BNP 890. Cr 1.8 (baseline 1.4). Furosemide increased to 80mg BID. Instructed to restrict fluids to 1.5L/day. Return in 2 days or go to ED if worsening.',
          vitals: { HR: 88, BP: '142/88', RR: 20, SpO2: 93, Temp: '37.0°C', Wt: '205 lbs' },
          assessment: 'Acute decompensated HFrEF. Volume overloaded.',
          orders: 'Furosemide 80mg BID. Fluid restrict 1.5L. Daily weights. Return in 48h or ED if SOB worsens.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null, // Current encounter — learner is the provider
          summary: null,  // Learner will generate this
          vitals: { HR: 102, BP: '158/92', RR: 26, SpO2: 89, Temp: '37.1°C' },
          cc: 'Acute worsening dyspnea, unable to lie flat, brought by wife'
        }
      ]
    },

    // ─── 2. COPD / PNEUMONIA ESCALATION ────────────────
    // Barbara Collins: Clinic → ED → ICU
    {
      patientName: 'Barbara Collins',
      patientId: 'barbara-collins',
      age: '67F',
      pmh: 'COPD (GOLD D), 40 pack-year smoking history (quit 5 years ago), HTN, Osteoporosis',
      cases: ['copd-v1'],
      encounters: [
        {
          daysAgo: 30,
          setting: 'Clinic',
          type: 'Pulmonology Follow-Up',
          provider: 'Dr. Okafor',
          summary: 'Stable COPD on triple therapy (fluticasone/vilanterol + tiotropium). FEV1 42% predicted, stable from 6 months ago. Two exacerbations in past year. Vaccinations up to date. Discussed smoking cessation maintenance — patient doing well with 5 years abstinence. Pulmonary rehab ongoing.',
          vitals: { HR: 76, BP: '132/78', RR: 18, SpO2: 93, Temp: '36.7°C' },
          assessment: 'COPD GOLD D, stable on current regimen.',
          orders: 'Continue current medications. PFTs in 6 months. Annual flu vaccine next visit.'
        },
        {
          daysAgo: 5,
          setting: 'Clinic',
          type: 'Acute Visit — Respiratory Symptoms',
          provider: 'Dr. Pham (PCP)',
          summary: 'Patient presents with 3 days of increased sputum production (now yellow-green), worsening dyspnea beyond baseline, and low-grade fever. Lungs with scattered rhonchi and decreased breath sounds bilaterally. Started on azithromycin and prednisone burst (40mg × 5 days). Increased albuterol to q4h. Instructed to go to ED if worsening or SpO2 drops below 90%.',
          vitals: { HR: 92, BP: '138/82', RR: 22, SpO2: 90, Temp: '37.9°C' },
          assessment: 'Acute COPD exacerbation, likely infectious trigger.',
          orders: 'Azithromycin 500mg day 1 then 250mg × 4 days. Prednisone 40mg daily × 5 days. Albuterol q4h.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 108, BP: '142/88', RR: 28, SpO2: 85, Temp: '38.6°C' },
          cc: 'Worsening dyspnea despite antibiotics, cannot speak in full sentences'
        }
      ]
    },

    // ─── 3. DIABETES → DKA ─────────────────────────────
    // Alejandro Gutierrez: Clinic → ED
    {
      patientName: 'Alejandro Gutierrez',
      patientId: 'alejandro-gutierrez',
      age: '29M',
      pmh: 'T1DM (diagnosed age 12), Depression',
      cases: ['dka-v1'],
      encounters: [
        {
          daysAgo: 45,
          setting: 'Clinic',
          type: 'Endocrinology Follow-Up',
          provider: 'Dr. Blackwell',
          summary: 'A1C 9.8% (up from 8.2%). Patient admits to insulin non-compliance over past 2 months after losing health insurance. Running out of long-acting insulin and rationing. Currently using only rapid-acting insulin at meals, no basal. Extensive counseling on DKA risk. Connected with patient assistance program for insulin. Restarted glargine 22 units nightly. Follow-up in 4 weeks.',
          vitals: { HR: 82, BP: '118/72', RR: 14, SpO2: 99, Temp: '36.9°C' },
          assessment: 'T1DM with worsening control due to insulin access barriers. DKA risk counseled.',
          orders: 'Glargine 22 units QHS. Lispro per sliding scale. A1C recheck in 3 months. PAP enrollment.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 118, BP: '108/68', RR: 32, SpO2: 99, Temp: '37.3°C' },
          cc: 'Nausea, vomiting × 2 days, abdominal pain, extreme thirst and urination'
        }
      ]
    },

    // ─── 4. STROKE — ED → ICU → INPATIENT → REHAB ─────
    // Eugene Washington: ED → Neuro ICU → Step-Down
    {
      patientName: 'Eugene Washington',
      patientId: 'eugene-washington',
      age: '67M',
      pmh: 'Afib (not on anticoagulation — patient declined), HTN, Hyperlipidemia, Prior TIA 2 years ago',
      cases: ['acute-ischemic-stroke'],
      encounters: [
        {
          daysAgo: 730,
          setting: 'Clinic',
          type: 'Neurology Follow-Up After TIA',
          provider: 'Dr. Kim',
          summary: 'Follow-up 2 weeks post-TIA (transient left arm weakness, resolved within 1 hour). MRI brain showed no acute infarct. CTA with moderate intracranial atherosclerosis. Afib on telemetry during TIA admission. CHA2DS2-VASc score 5 — strongly recommended anticoagulation. Patient declined warfarin and DOACs due to fall concerns (walks with cane). Extensive risk-benefit counseling documented. Started aspirin 81mg as compromise. Atorvastatin increased to 80mg.',
          vitals: { HR: 82, BP: '148/88', RR: 14, SpO2: 97, Temp: '36.8°C' },
          assessment: 'Afib with high stroke risk. Patient-informed refusal of anticoagulation documented.',
          orders: 'Aspirin 81mg daily. Atorvastatin 80mg. BP target <130/80. Follow-up 3 months.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 88, BP: '192/104', RR: 16, SpO2: 97, Temp: '36.8°C' },
          cc: 'Acute left-sided weakness and slurred speech, onset 45 minutes ago per wife'
        }
      ]
    },

    // ─── 5. ANAPHYLAXIS → ALLERGY CLINIC ───────────────
    // Priya Sharma: ED → Allergy Clinic Follow-Up
    {
      patientName: 'Priya Sharma',
      patientId: 'priya-sharma',
      age: '27F',
      pmh: 'Seasonal allergic rhinitis, Asthma (mild intermittent)',
      cases: ['anaphylaxis'],
      encounters: [
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 118, BP: '88/54', RR: 26, SpO2: 93, Temp: '37.0°C' },
          cc: 'Lip swelling, diffuse hives, throat tightness and difficulty breathing after eating at restaurant'
        },
        {
          daysAgo: -14, // Future follow-up
          setting: 'Clinic',
          type: 'Allergy/Immunology Follow-Up',
          provider: 'Dr. Khoury',
          plannedNote: 'Post-anaphylaxis evaluation. Review ED records, obtain tryptase trends, skin prick testing for suspected triggers, component testing, epinephrine auto-injector training, anaphylaxis action plan.'
        }
      ]
    },

    // ─── 6. CKD → AKI → NEPHROLOGY ────────────────────
    // Reginald Hawkins: Clinic → Missed dialysis → ED
    {
      patientName: 'Reginald Hawkins',
      patientId: 'reginald-hawkins',
      age: '65M',
      pmh: 'ESRD on HD (MWF), HTN, T2DM, Peripheral neuropathy, AV fistula left arm',
      cases: ['severe-hyperkalemia-from-missed-dialysis'],
      encounters: [
        {
          daysAgo: 14,
          setting: 'Clinic',
          type: 'Nephrology Clinic',
          provider: 'Dr. Santos',
          summary: 'Routine dialysis adequacy check. Kt/V 1.3 (adequate). Dry weight 82kg. Phosphorus elevated at 6.8 — increased sevelamer. Patient reports occasional missed sessions due to transportation issues. Social work referral for transportation assistance. Interdialytic weight gains averaging 3.5kg — counseled on fluid restriction.',
          vitals: { HR: 78, BP: '152/88', RR: 16, SpO2: 96, Temp: '36.8°C' },
          assessment: 'ESRD on HD, adequate clearance but transportation barriers and volume management challenges.',
          orders: 'Increase sevelamer to 1600mg TID with meals. Social work consult for transportation. Fluid goal <1L/day.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 52, BP: '168/98', RR: 20, SpO2: 95, Temp: '36.7°C' },
          cc: 'Generalized weakness and lightheadedness, missed last 2 dialysis sessions'
        }
      ]
    },

    // ─── 7. SEPSIS — PCP → ED → ICU ───────────────────
    // Hazel Thompson: Clinic (UTI) → ED (urosepsis)
    {
      patientName: 'Hazel Thompson',
      patientId: 'hazel-thompson',
      age: '79F',
      pmh: 'Recurrent UTIs (3 in past year), T2DM, Dementia (mild), HTN, Atrial fibrillation on apixaban',
      cases: ['pyelonephritis-urosepsis'],
      encounters: [
        {
          daysAgo: 10,
          setting: 'Clinic',
          type: 'PCP Visit — Dysuria',
          provider: 'Dr. Martinez (PCP)',
          summary: 'Patient brought by daughter for 2 days of dysuria and frequency. No fever, flank pain, or confusion. UA positive for nitrites, LE, WBCs. Started on nitrofurantoin 100mg BID × 5 days (culture pending). UCx returned E. coli sensitive to nitrofurantoin. Patient completed course per daughter.',
          vitals: { HR: 80, BP: '138/78', RR: 16, SpO2: 97, Temp: '37.2°C' },
          assessment: 'Uncomplicated UTI, E. coli. Treated with nitrofurantoin.',
          orders: 'Nitrofurantoin 100mg BID × 5 days. Post-treatment UA if symptoms persist.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 112, BP: '82/48', RR: 24, SpO2: 93, Temp: '39.2°C' },
          cc: 'Found confused and febrile by daughter, not eating × 2 days, incontinent'
        }
      ]
    },

    // ─── 8. POST-DISCHARGE READMISSION ─────────────────
    // Giovanni DeLuca: Prior admit → Clinic → ED readmit
    {
      patientName: 'Giovanni DeLuca',
      patientId: 'giovanni-deluca',
      age: '67M',
      pmh: 'CAD (PCI × 2), HFpEF, T2DM, Gout, Obesity (BMI 34)',
      cases: ['nstemi-v1'],
      encounters: [
        {
          daysAgo: 60,
          setting: 'Inpatient',
          type: 'Discharge Summary — NSTEMI',
          provider: 'Dr. Vasquez (Cardiology)',
          summary: 'Admitted for NSTEMI. Troponin peaked at 2.8. Catheterization showed 90% LAD stenosis — DES placed. Started on dual antiplatelet therapy (aspirin + ticagrelor). Echo showed EF 55%, mild diastolic dysfunction, no wall motion abnormalities post-PCI. Cardiac rehab referral. Discharge on: aspirin 81mg, ticagrelor 90mg BID, metoprolol succinate 50mg, lisinopril 20mg, atorvastatin 80mg.',
          vitals: { HR: 68, BP: '122/74', RR: 14, SpO2: 98, Temp: '36.8°C' },
          assessment: 'NSTEMI, s/p LAD DES. Medical optimization. Good prognosis.',
          orders: 'DAPT × 12 months. Cardiac rehab. Cardiology follow-up 2 weeks. PCP 1 week.'
        },
        {
          daysAgo: 14,
          setting: 'Clinic',
          type: 'Cardiology Follow-Up',
          provider: 'Dr. Vasquez',
          summary: 'Post-PCI follow-up. Doing well in cardiac rehab. Tolerating medications. Groin access site healed. Denied chest pain, dyspnea, or palpitations. Continue current regimen. Discussed importance of DAPT compliance — absolutely no interruption for 12 months. Stress test in 3 months.',
          vitals: { HR: 64, BP: '118/72', RR: 14, SpO2: 98, Temp: '36.8°C' },
          assessment: 'Post-NSTEMI/PCI, doing well. Continue medical therapy.',
          orders: 'Continue all medications. Stress test at 3 months post-PCI. Cardiac rehab ongoing.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 98, BP: '168/94', RR: 20, SpO2: 96, Temp: '37.0°C' },
          cc: 'Recurrent chest pain × 2 hours, similar to prior heart attack, took aspirin at home'
        }
      ]
    },

    // ─── 9. ASTHMA — PCP → ED → ALLERGY/PULM ──────────
    // Deshawn Carter: Clinic → ED
    {
      patientName: 'Deshawn Carter',
      patientId: 'deshawn-carter',
      age: '24M',
      pmh: 'Asthma (uncontrolled persistent), Allergic rhinitis, Eczema (childhood)',
      cases: ['asthma-exacerbation'],
      encounters: [
        {
          daysAgo: 90,
          setting: 'Clinic',
          type: 'PCP Visit',
          provider: 'Dr. Owens (PCP)',
          summary: 'Asthma review. Patient using rescue inhaler daily (should be ≤2×/week). Wakes 3× per week with cough. Not on any controller medication — previous prescriptions never filled. Prescribed fluticasone 110mcg 2 puffs BID and provided spacer. Discussed importance of daily controller use. Referral to allergist placed. Follow-up 1 month.',
          vitals: { HR: 78, BP: '120/76', RR: 16, SpO2: 97, Temp: '36.9°C' },
          assessment: 'Uncontrolled persistent asthma. Not on controller therapy. Step-up indicated.',
          orders: 'Fluticasone 110mcg 2 puffs BID. Albuterol PRN. Allergist referral. RTC 4 weeks.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 112, BP: '128/78', RR: 28, SpO2: 90, Temp: '37.1°C' },
          cc: 'Severe wheezing and chest tightness × 8 hours, albuterol not helping, never filled controller Rx'
        }
      ]
    },

    // ─── 10. CELLULITIS → SEPSIS ────────────────────────
    // James Crawford: Clinic → ED
    {
      patientName: 'James Crawford',
      patientId: 'james-crawford',
      age: '55M',
      pmh: 'T2DM (A1C 9.2%), Peripheral vascular disease, Obesity, Prior left leg cellulitis × 2',
      cases: ['cellulitis'],
      encounters: [
        {
          daysAgo: 5,
          setting: 'Clinic',
          type: 'Urgent Visit — Leg Redness',
          provider: 'Dr. Pham (PCP)',
          summary: 'Patient presents with 2-day history of left lower leg erythema and warmth after a small skin break from bumping his shin on furniture. No fever. Erythema margin marked with pen — approximately 8cm × 5cm area. No drainage, no crepitus. Pedal pulses 1+ bilaterally. Started on cephalexin 500mg QID. Wound care instructions. Return in 48 hours or ED if spreading beyond marks, fever, or streaking.',
          vitals: { HR: 82, BP: '144/86', RR: 16, SpO2: 98, Temp: '37.2°C' },
          assessment: 'Non-purulent cellulitis, left lower leg. Low risk for complications.',
          orders: 'Cephalexin 500mg QID × 10 days. Leg elevation. Wound care. RTC 48h.'
        },
        {
          daysAgo: 0,
          setting: 'ED',
          type: 'ED Presentation',
          provider: null,
          summary: null,
          vitals: { HR: 104, BP: '98/62', RR: 22, SpO2: 96, Temp: '39.4°C' },
          cc: 'Left leg much worse — redness spreading beyond pen marks, new blisters, fever and chills × 1 day'
        }
      ]
    }
  ];

  // ═══════════════════════════════════════════════════════
  // INDEX — map caseId → chain
  // ═══════════════════════════════════════════════════════
  var _index = {};
  CHAINS.forEach(function(chain) {
    chain.cases.forEach(function(caseId) {
      _index[caseId] = chain;
    });
  });

  // ═══════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════
  window.PatientContinuity = {

    hasHistory: function(caseId) {
      var chain = _index[caseId];
      if (!chain) return false;
      // Has prior encounters (not just the current one)
      return chain.encounters.filter(function(e) { return e.daysAgo > 0; }).length > 0;
    },

    isSharedPatient: function(caseId) {
      return !!_index[caseId];
    },

    getEncounterChain: function(caseId) {
      var chain = _index[caseId];
      if (!chain) return [];
      return chain.encounters.filter(function(e) {
        return e.daysAgo > 0 && e.summary; // Only past encounters with content
      }).sort(function(a, b) {
        return b.daysAgo - a.daysAgo; // Oldest first
      });
    },

    getRelatedCases: function(caseId) {
      var chain = _index[caseId];
      if (!chain) return [];
      return chain.cases.filter(function(id) { return id !== caseId; });
    },

    getPatientPMH: function(caseId) {
      var chain = _index[caseId];
      return chain ? chain.pmh : null;
    },

    // Render prior encounter notes as HTML for chart display
    renderPriorNotes: function(caseId) {
      var DE = window.DateEngine;
      if (!DE) return '';
      var chain = _index[caseId];
      if (!chain) return '';

      var priors = PatientContinuity.getEncounterChain(caseId);
      if (priors.length === 0) return '';

      var html = '<div class="prior-encounters">';
      html += '<div class="prior-header">';
      html += '<span class="prior-icon">\uD83D\uDCC1</span>';
      html += '<span class="prior-title">Prior Encounters</span>';
      html += '<span class="prior-count">' + priors.length + ' previous visit' + (priors.length > 1 ? 's' : '') + '</span>';
      html += '</div>';

      priors.forEach(function(enc) {
        var date = DE.encounterDate(enc.daysAgo, 'long');
        var relLabel = DE.relativeLabel(enc.daysAgo);
        var vitalsStr = '';
        if (enc.vitals) {
          var parts = [];
          if (enc.vitals.HR) parts.push('HR ' + enc.vitals.HR);
          if (enc.vitals.BP) parts.push('BP ' + enc.vitals.BP);
          if (enc.vitals.RR) parts.push('RR ' + enc.vitals.RR);
          if (enc.vitals.SpO2) parts.push('SpO\u2082 ' + enc.vitals.SpO2 + '%');
          if (enc.vitals.Temp) parts.push('T ' + enc.vitals.Temp);
          vitalsStr = parts.join(' \u00B7 ');
        }

        html += '<div class="prior-note">';
        html += '<div class="prior-note-header">';
        html += '<div class="prior-note-date">' + date + ' <span class="prior-note-rel">(' + relLabel + ')</span></div>';
        html += '<div class="prior-note-meta">' + enc.setting + ' \u2014 ' + enc.type + (enc.provider ? ' \u2014 ' + enc.provider : '') + '</div>';
        html += '</div>';
        if (vitalsStr) {
          html += '<div class="prior-note-vitals">' + vitalsStr + '</div>';
        }
        html += '<div class="prior-note-body">' + enc.summary + '</div>';
        if (enc.assessment) {
          html += '<div class="prior-note-assessment"><strong>Assessment:</strong> ' + enc.assessment + '</div>';
        }
        if (enc.orders) {
          html += '<div class="prior-note-orders"><strong>Plan:</strong> ' + enc.orders + '</div>';
        }
        html += '</div>';
      });

      html += '</div>';

      // Styles
      html += '<style>';
      html += '.prior-encounters{margin:16px 0;border:1px solid #E2E8F0;border-radius:10px;overflow:hidden;background:#FAFBFC}';
      html += '.prior-header{display:flex;align-items:center;gap:8px;padding:12px 16px;background:linear-gradient(135deg,#EBF5FB,#D4E6F1);border-bottom:1px solid #D4E6F1}';
      html += '.prior-icon{font-size:16px}';
      html += '.prior-title{font-size:14px;font-weight:700;color:#1B4F72}';
      html += '.prior-count{margin-left:auto;font-size:11px;color:#5DADE2;font-weight:600}';
      html += '.prior-note{padding:14px 16px;border-bottom:1px solid #EEF0F4}';
      html += '.prior-note:last-child{border-bottom:none}';
      html += '.prior-note-header{margin-bottom:8px}';
      html += '.prior-note-date{font-size:13px;font-weight:700;color:#1E293B}';
      html += '.prior-note-rel{font-weight:400;color:#94A3B8;font-size:11px}';
      html += '.prior-note-meta{font-size:11px;color:#64748B;margin-top:2px}';
      html += '.prior-note-vitals{font-family:"IBM Plex Mono",monospace;font-size:11px;color:#475569;padding:6px 10px;background:#F0F4F8;border-radius:6px;margin-bottom:8px;display:inline-block}';
      html += '.prior-note-body{font-size:13px;color:#334155;line-height:1.6;margin-bottom:8px}';
      html += '.prior-note-assessment{font-size:12px;color:#1E40AF;background:#EFF6FF;padding:6px 10px;border-radius:6px;margin-bottom:4px;line-height:1.5}';
      html += '.prior-note-orders{font-size:12px;color:#166534;background:#F0FDF4;padding:6px 10px;border-radius:6px;line-height:1.5}';
      html += '</style>';

      return html;
    },

    getAllChains: function() {
      return CHAINS;
    },

    getChainForCase: function(caseId) {
      return _index[caseId] || null;
    }
  };

})();
