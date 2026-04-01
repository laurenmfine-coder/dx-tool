/* emr-data/ibd-crohns.js
   Inflammatory Bowel Disease — Crohn's Disease Flare vs UC Flare
   Category: gastrointestinal | Acuity: ESI-3 | Setting: ED → GI
*/
window.CASES = window.CASES || {};
window.CASES['ibd-crohns'] = {
  id: 'ibd-crohns',
  name: 'Tyler Nguyen',
  age: '26M',
  dob: '1999-04-22',
  mrn: 'RDX-2026-33841',
  setting: 'ED → Inpatient GI / Gastroenterology',
  chiefComplaint: 'Bloody diarrhea 12×/day, abdominal cramping, weight loss 15 lbs × 3 months — known Crohn\'s disease',
  diagnosis: 'Severe Crohn\'s Disease Flare — Anti-TNF Candidate',
  category: 'gastrointestinal',
  acuity: 2,
  presentation: {
    hpi: 'Tyler Nguyen, 26M with known Crohn\'s disease (ileocolonic, non-stricturing/non-penetrating pattern), presents with 3-month history of worsening abdominal pain and bloody diarrhea up to 12 times/day. He lost 15 lbs in 3 months. He was on mesalamine, which his GI stopped 6 months ago (not effective for Crohn\'s — appropriate). He has never received a biologic. He has been off steroids for 8 months. He has perianal fistula discovered on prior colonoscopy. On exam: diffuse tenderness RLQ/periumbilical, no peritoneal signs, bowel sounds active. No arthritis, no eye symptoms today.',
    pmh: ['Crohn\'s disease — diagnosed age 20, ileocolonic', 'Prior perianal fistula', 'Non-smoking'],
    meds: ['None currently — off mesalamine (never appropriate for Crohn\'s)', 'No biologics yet'],
    allergies: ['NKDA']
  },
  vitals: { BP: '112/68', HR: '104', RR: '16', Temp: '38.2°C', SpO2: '98%', GCS: '15' },
  exam: {
    abdomen: 'Tender RLQ and periumbilical. No rigidity. No rebound. Bowel sounds hyperactive. No hepatosplenomegaly. Perianal skin tags visible.',
    rectal: 'Perianal fistula opening at 6 o\'clock position — no abscess fluctuance',
    general: 'Thin, pale, ill-appearing young man. Temporal wasting.'
  },
  labs: {
    'CBC': 'WBC 14.2 (H), Hgb 9.8 (L — chronic disease + blood loss), MCV 72 (L — iron deficiency), Plt 488 (H — reactive thrombocytosis)',
    'CMP': 'Albumin 2.6 (L — malnutrition/inflammation), CRP 88 mg/L (H — normal <5), ESR 78 mm/hr (H)',
    'Fecal calprotectin (from records)': '1840 µg/g (normal <50) — severe active inflammation confirmed',
    'Stool cultures + C. diff': 'Negative — ruling out infectious trigger',
    'CT abdomen/pelvis with contrast': 'Wall thickening and hyperenhancement of terminal ileum and cecum. Fat stranding. No abscess. No free air. No obstruction. Perianal fistula confirmed — no undrained collection.',
    'CDAI (Harvey-Bradshaw Index)': 'Score 22 — SEVERE disease (>16 = severe)'
  },
  orders: {
    correct: [
      { id: 'biologic-crohns', name: 'Initiate anti-TNF biologic — infliximab 5 mg/kg IV induction (weeks 0, 2, 6) or adalimumab', rationale: 'Severe Crohn\'s + perianal fistula + biologic-naive = infliximab is indicated. Infliximab has the strongest evidence for fistulizing Crohn\'s (ACCENT II trial). Combine with azathioprine or methotrexate for combo therapy (SONIC trial — superior to monotherapy).' },
      { id: 'steroids-bridge', name: 'Methylprednisolone 40-60 mg IV daily for induction — bridge to biologic', rationale: 'Steroids induce remission but do not maintain it and cause significant long-term harm. Use as bridge to biologic initiation only. Do NOT use as maintenance.' },
      { id: 'tb-screen', name: 'IGRA (QuantiFERON-Gold) + CXR before biologic', rationale: 'Anti-TNF therapy can reactivate latent TB. Must screen and treat latent TB before initiating. Also check Hep B surface antigen and core antibody (anti-TNF can reactivate HBV).' },
      { id: 'nutrition-crohns', name: 'Nutrition consult — albumin 2.6, significant weight loss', rationale: 'Malnutrition in active Crohn\'s impairs healing and treatment response. Enteral nutrition preferred over parenteral when gut is functional. Oral supplements, NG tube if needed.' },
      { id: 'gi-consult', name: 'Gastroenterology inpatient consult — colonoscopy planning after acute control', rationale: 'Confirm disease extent and severity. Histology guides treatment. Assess for dysplasia (long-standing Crohn\'s = colorectal cancer surveillance).' }
    ],
    incorrect: [
      { id: 'abx-crohns', name: 'Antibiotics for IBD flare — fever present', rationale: 'Antibiotics are NOT indicated for routine IBD flares. They are used for septic complications (abscess, perforation) or pouchitis. Treating all fevers in IBD with antibiotics worsens outcomes and contributes to C. diff risk.' },
      { id: 'mesalamine-crohns', name: 'Start mesalamine — 5-ASA compounds for Crohn\'s', rationale: 'Mesalamine is effective in UC but NOT in Crohn\'s disease. The evidence for mesalamine in Crohn\'s is negative. This is a major misconception — do not restart it.' },
      { id: 'longterm-steroids', name: 'Prednisone 40mg maintenance — patient responded to steroids', rationale: 'Steroids are never appropriate for maintenance of Crohn\'s disease. Steroid-dependence (unable to taper without flare) is an indication for biologic escalation, not continued steroids. Long-term steroids cause irreversible harm.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Crohn\'s vs UC: Crohn\'s is transmural, can affect anywhere mouth to anus, skip lesions, fistulas. UC is mucosal, contiguous from rectum, no skip lesions. This determines treatment approach — UC is curable by colectomy; Crohn\'s recurs.',
      'Mesalamine (5-ASA) is effective in UC but NOT in Crohn\'s. This is a high-yield misconception. Crohn\'s requires immunomodulators (AZA, 6-MP) or biologics.',
      'Anti-TNF agents (infliximab, adalimumab) are the standard of care for moderate-severe Crohn\'s and fistulizing disease. Screen for latent TB and HBV before initiating.',
      'Steroids induce remission but never maintain it. Steroid-dependence = indication for biologic escalation. Long-term steroids are never acceptable maintenance therapy for IBD.'
    ],
    boardPearls: [
      'Extraintestinal manifestations: peripheral arthritis (correlates with disease activity), primary sclerosing cholangitis (PSC — more common in UC), uveitis, pyoderma gangrenosum, erythema nodosum.',
      'SONIC trial: combination infliximab + azathioprine superior to either alone for Crohn\'s (steroid-free remission 57% vs 30%).',
      'Smoking worsens Crohn\'s but is protective in UC — mechanistically interesting, clinically important to counsel.',
      'Colorectal cancer risk in long-standing Crohn\'s colitis: similar to UC. Surveillance colonoscopy starting 8 years after diagnosis.'
    ]
  },
  references: [
    { id: 'StatPearls-Crohns', title: 'Crohn Disease', authors: 'Baumgart DC, Sandborn WJ', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK436021/', openAccess: true }
  ]
};
