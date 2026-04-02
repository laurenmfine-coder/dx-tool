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

  teachingPoints: {
    keyLearning: ['Antiphospholipid syndrome (APS) diagnosis requires: (1) clinical criterion — arterial or venous thrombosis OR pregnancy morbidity, AND (2) laboratory criterion — positive lupus anticoagulant, anti-cardiolipin (IgG/IgM >40 GPL/MPL), or anti-β2-glycoprotein I (IgG/IgM >40 U/mL) on two occasions ≥12 weeks apart. Triple positivity = highest thrombotic risk.','APS anticoagulation: warfarin (INR 2-3) is the ONLY approved anticoagulant for APS with thrombosis. DOACs are INFERIOR in APS and associated with higher rates of recurrent thrombosis (TRAPS trial — rivaroxaban inferior to warfarin in triple-positive APS). Lifelong anticoagulation for confirmed APS with thrombosis.','Duration of anticoagulation: unprovoked PE without APS = 3 months minimum, then individualize (recurrence risk, bleeding risk). APS with triple positivity = LIFELONG anticoagulation. The question "can I stop?" in triple-positive APS = no.'],
    boardPearls: ['Lupus anticoagulant paradox: lupus anticoagulant PROLONGS the PTT in vitro (falsely appears anticoagulated) but causes THROMBOSIS in vivo. This is because it interferes with phospholipid-dependent clotting assays. Do not confuse a prolonged PTT from lupus anticoagulant with therapeutic anticoagulation.','APS categories: primary APS (no underlying autoimmune disease). Secondary APS (most common — associated with SLE, which occurs in 30-40%). Catastrophic APS (CAPS): rare, life-threatening, <10% of APS — simultaneous thrombosis in ≥3 organ systems, high mortality.','Thrombophilia testing timing: do NOT test during acute thrombotic event or during anticoagulation. Antithrombin III, protein C, protein S: test at least 4 weeks after stopping anticoagulation. Factor V Leiden and prothrombin G20210A can be tested anytime (genetic tests, not affected by anticoagulation).']
  },
};
