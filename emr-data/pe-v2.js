/* CASE: pe-v2 — Rachel Owusu — Submassive PE with Right Heart Strain */
window.CASES = window.CASES || {};
window.CASES['pe-v2'] = {
  id: 'pe-v2',
  name: 'Rachel Owusu',
  age: '38F',
  dob: '1987-11-14',
  mrn: '623910',
  setting: 'Emergency Department',
  chiefComplaint: 'Syncope, dyspnea, right heart strain on echo — 3 weeks post-DVT diagnosis',
  diagnosis: 'Submassive (Intermediate-High Risk) Pulmonary Embolism with RV Dysfunction',
  category: 'pulmonary',
  continuityNote: 'Prior encounter: pe-v1 — left femoral DVT diagnosed 5 weeks ago, started apixaban. Recurrent event despite anticoagulation.',
  presentation: {
    hpi: 'Rachel Owusu, 38F, presents via EMS after syncopal episode at work. Found diaphoretic, HR 122, BP 96/58. She was started on apixaban 5 weeks ago for left femoral DVT (see Prior Chart) but admits: "I couldn\'t afford the brand name — I\'ve been taking half doses." CTA chest: bilateral PE, saddle configuration. Troponin I 0.82. BNP 1,240. Bedside echo: RV:LV ratio 1.2, septal bowing, McConnell\'s sign. SBP currently 94 after 1L IVF. Not in cardiac arrest.',
    pmh: ['DVT left femoral (5 weeks ago)', 'OCP use (discontinued at DVT diagnosis)', 'Hypercoagulability workup pending'],
    meds: ['Apixaban 5mg BID (patient reports taking 2.5mg BID due to cost)'],
    allergies: ['NKDA'],
    socialHx: 'Uninsured. Works as a home health aide. Cannot afford full-dose apixaban.'
  },
  vitals: {
    BP: '94/58', HR: '122', RR: '26', Temp: '37.1°C', SpO2: '89% on 4L NC'
  },
  exam: {
    general: 'Diaphoretic, pale, anxious',
    cv: 'Tachycardic, JVD elevated, right parasternal heave, S3 gallop',
    resp: 'Tachypneic, decreased breath sounds bilateral bases',
    extremities: 'Left leg — residual swelling from prior DVT'
  },
  labs: {
    trop: 'Troponin I 0.82 (↑)',
    BNP: '1,240 pg/mL (↑)',
    ABG: 'pH 7.38, pO2 58, pCO2 32',
    BMP: 'Cr 0.9, lactate 2.4'
  },
  imaging: {
    ctpa: 'Bilateral PE, saddle embolus. RV/LV diameter ratio 1.2 on axial images.',
    echo: 'RV dilation, septal flattening (D-sign), McConnell\'s sign (RV free wall hypokinesis with apical sparing). TAPSE 12 mm (reduced).'
  },
  orders: {
    correct: [
      { id: 'pert-pv2', name: 'PERT (Pulmonary Embolism Response Team) activation', rationale: 'Submassive PE with RV dysfunction — multidisciplinary decision needed: systemic lysis vs CDT vs anticoagulation alone' },
      { id: 'heparin-pv2', name: 'UFH 80 u/kg bolus + 18 u/kg/hr infusion — switch from apixaban', rationale: 'UFH allows rapid reversal if systemic thrombolysis or procedure needed. Apixaban cannot be reversed rapidly.' },
      { id: 'norepi-pv2', name: 'Norepinephrine for MAP support — avoid aggressive fluids', rationale: 'RV is volume-overloaded, not depleted. Fluids worsen RV dilation and septal shift. Vasopressors maintain coronary perfusion.' },
      { id: 'monitor-pv2', name: 'ICU admission — serial echo, troponin trend, hemodynamics q1h', rationale: 'Submassive PE can deteriorate to massive. Proactive ICU monitoring with pre-planned escalation threshold.' },
      { id: 'cdt-pv2', name: 'Catheter-directed thrombolysis consideration — escalate if hemodynamics worsen', rationale: 'CDT reduces thrombus burden with lower bleeding risk than systemic lysis. Indicated if deterioration despite anticoagulation.' },
      { id: 'access-pv2', name: 'Social work consult — insurance enrollment, medication access for anticoagulation', rationale: 'Apixaban underuse from cost caused this recurrence. Enroll in Eliquis patient assistance or transition to warfarin (cost-free with INR monitoring).' }
    ],
    incorrect: [
      { id: 'systemic-tpa-pv2', name: 'Systemic alteplase 100mg IV immediately — BP 94 systolic', rationale: 'BP 94 with IVF response is submassive, not massive PE. Systemic thrombolysis is for SBP <90 not responding to resuscitation, or cardiac arrest. Bleeding risk is high at age 38.' },
      { id: 'continue-apixaban-pv2', name: 'Continue apixaban — just increase to therapeutic dose', rationale: 'Cannot reliably establish therapeutic anticoagulation with oral agents in unstable submassive PE. UFH with continuous infusion and aPTT monitoring is required for reliable, reversible anticoagulation.' },
      { id: 'fluids-pv2', name: 'Aggressive IV fluids — BP 94, patient looks volume-depleted', rationale: 'The failing RV is already volume-overloaded from back-pressure. Additional fluid worsens RV dilation, shifts septum further left (D-sign), and reduces LV output — a deadly cycle.' }
    ]
  },

  teachingPoints: {
    keyLearning: ['Submassive (intermediate-high risk) PE: hemodynamically stable (SBP ≥90) BUT evidence of RV dysfunction (RV:LV ratio >0.9 on echo, McConnell sign, septal bowing) AND elevated cardiac biomarkers (troponin, BNP/NT-proBNP). Systemic thrombolysis not routinely given — but PERT (PE response team) activation is appropriate.','Thrombolysis decision for submassive PE: systemic tPA (alteplase 100mg over 2h) reserved for hemodynamic compromise (SBP <90 or drop ≥40 mmHg for >15 min). For submassive: catheter-directed thrombolysis (CDT) or catheter-directed embolectomy may be appropriate at PERT centers. MOPETT, ULTIMA, SEATTLE II trials support CDT safety.','McConnell sign: free wall RV hypokinesis with preserved apex contraction. High specificity (>90%) for acute PE. The preserved apex is because the LV tethers the RV apex — the free wall is not tethered and fails first in acute pressure overload.'],
    boardPearls: ['RV:LV ratio >0.9 on echo or CT = RV strain = intermediate-high risk. Troponin elevation alone without RV dysfunction = intermediate-low risk.','Anticoagulation despite hemodynamic borderline: immediate anticoagulation with UFH or LMWH is indicated for all PE. For intermediate-high risk: UFH preferred (can be stopped rapidly if thrombolysis needed). Hold DOACs until thrombolysis decision is made.','Recurrent PE on anticoagulation: check adherence first (most common cause). If truly recurrent on therapeutic anticoagulation: thrombophilia workup, switch to LMWH (more reliable levels), IVC filter consideration, oncology workup if no other cause.']
  },
};
