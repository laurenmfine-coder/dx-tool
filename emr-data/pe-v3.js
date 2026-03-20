/* CASE: pe-v3 — Rachel Owusu — Hypercoagulability Workup, Long-term Anticoagulation Decision */
window.CASES = window.CASES || {};
window.CASES['pe-v3'] = {
  id: 'pe-v3',
  name: 'Rachel Owusu',
  age: '38F',
  dob: '1987-11-14',
  mrn: '623910',
  setting: 'Hematology Outpatient Clinic — 3 months post-PE',
  chiefComplaint: 'Hypercoagulability results review — how long to anticoagulate?',
  diagnosis: 'Antiphospholipid Syndrome (APS) — Unprovoked PE with Triple Positivity',
  category: 'hematologic',
  continuityNote: 'Prior encounters: pe-v1 (DVT, apixaban started), pe-v2 (submassive PE, PERT, CDT, UFH). Now 3 months post-event. Hypercoagulability results available.',
  presentation: {
    hpi: 'Rachel, 38F, returns to hematology clinic 3 months after submassive PE treated with catheter-directed thrombolysis (see pe-v2). Currently on warfarin (INR 2.4, therapeutic). Thrombophilia workup results now available: Lupus anticoagulant POSITIVE (repeat positive at 12 weeks). Anti-cardiolipin IgG 84 GPL units (>40 = positive). Anti-β2-glycoprotein I IgG 68 U/mL (>40 = positive). Triple positive APS. She asks: "Can I stop the blood thinners in 3 months like the doctor said originally?"',
    pmh: ['DVT (5 months ago)', 'Submassive PE (3 months ago)', 'APS newly diagnosed'],
    meds: ['Warfarin — current INR 2.4 (therapeutic)', 'No other anticoagulants'],
    socialHx: 'Now enrolled in state Medicaid. Works full-time. Wants to have children in the future.',
    ros: 'No new thrombotic symptoms. Occasional joint pains (reported as new), mild photosensitivity (new).'
  },
  vitals: {
    BP: '118/72', HR: '74', RR: '14', Temp: '36.9°C', SpO2: '98% RA'
  },
  labs: {
    'Lupus anticoagulant': 'Positive (confirmed on repeat at 12 weeks)',
    'Anti-cardiolipin IgG': '84 GPL units (positive >40)',
    'Anti-β2-GPI IgG': '68 U/mL (positive >40)',
    ANA: '1:320 speckled',
    'Anti-dsDNA': 'Borderline positive',
    'CBC/CMP': 'Normal. Plt 162.',
    'Current INR': '2.4'
  },
  orders: {
    correct: [
      { id: 'lifelong-ac-pv3', name: 'Lifelong anticoagulation — do NOT stop at 3 months', rationale: 'Triple-positive APS with venous thromboembolism has >50% recurrence risk off anticoagulation. This is a lifelong diagnosis.' },
      { id: 'warfarin-pv3', name: 'Continue warfarin — target INR 2–3, NOT apixaban', rationale: 'DOAC (apixaban, rivaroxaban) are inferior to warfarin for APS — TRAPS and RAPS trials showed higher recurrence with DOACs in APS. Warfarin is the standard of care.' },
      { id: 'rheum-pv3', name: 'Rheumatology referral — evaluate for SLE (ANA 1:320, photosensitivity, joint pains)', rationale: 'APS can be primary or secondary to SLE. New ANA, joint pains, photosensitivity require systemic autoimmune evaluation.' },
      { id: 'pregnancy-counsel-pv3', name: 'Pregnancy counseling — requires hematology + MFM co-management', rationale: 'APS in pregnancy requires LMWH + low-dose aspirin. Warfarin is teratogenic. Must plan carefully.' },
      { id: 'hcq-pv3', name: 'Discuss hydroxychloroquine — reduces APS thrombosis risk', rationale: 'HCQ has antithrombotic and immunomodulatory effects in APS, independent of its SLE indications. Strongly considered in triple-positive APS.' }
    ],
    incorrect: [
      { id: 'stop-ac-pv3', name: 'Stop anticoagulation at 6 months — "provoked" by OCP', rationale: 'APS is an underlying hypercoagulable state — it transforms any thrombosis into an unprovoked one. Standard treatment duration guidelines do not apply. This patient has >50% annual recurrence risk.' },
      { id: 'doac-pv3', name: 'Switch to apixaban — easier than warfarin, no INR checks', rationale: 'DOACs are specifically contraindicated in triple-positive APS. TRAPS trial (rivaroxaban) and RAPS trial both showed higher recurrence rates vs warfarin. FDA label warns against DOAC use in APS.' },
      { id: 'ivc-filter-pv3', name: 'Place IVC filter — additional protection against PE recurrence', rationale: 'IVC filters do NOT reduce PE mortality and increase DVT risk long-term. They are indicated only when anticoagulation is absolutely contraindicated — which is not the case here.' }
    ]
  }
};
