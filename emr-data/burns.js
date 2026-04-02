/* emr-data/burns.js — Severe Burns: Parkland Formula + Airway */
window.CASES = window.CASES || {};
window.CASES['burns'] = {
  id: 'burns', name: 'Kevin Torres', age: '29M', dob: '1996-05-11',
  mrn: 'RDX-2026-88132', setting: 'ED → Burn ICU', category: 'trauma', acuity: 1,
  chiefComplaint: 'House fire — 35% TBSA burns, singed nasal hairs, hoarse voice, carbonaceous sputum',
  diagnosis: 'Major Thermal Burns (35% TBSA) with Inhalation Injury',
  presentation: {
    hpi: '29M, rescued from house fire after 10 minutes entrapment. EMS: singed nasal hairs, eyebrows, carbonaceous (black) sputum, hoarse voice — inhalation injury until proven otherwise. Burns: face, anterior trunk, both arms. Using Rule of Nines: head (9%) + anterior trunk (18%) + both arms (9% each) ≈ 35% TBSA. 2nd degree (blisters, painful) mixed with 3rd degree (waxy/leathery, painless) burns.',
    pmh: ['No significant PMH'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '118/76', HR: '108', RR: '22', Temp: '37.8°C', SpO2: '94% RA' },
  labs: {
    'Rule of Nines': 'Head/neck 9% | Anterior trunk 18% | Posterior trunk 18% | Each arm 9% | Each leg 18% | Perineum 1%',
    'Parkland Formula': '4 mL × weight (80 kg) × %TBSA (35) = 11,200 mL LR in first 24h. HALF in first 8h from time of burn (not time of arrival) = 5,600 mL/first 8h. Other half over 16h.',
    'ABG': 'pH 7.38, PaO2 74 on 15L NRB, CO-Hgb 18% (H — carbon monoxide poisoning)',
    'CXR': 'No infiltrates (yet — inhalation injury may develop over 24-48h)',
    'COHgb': '18% — significant CO poisoning'
  },
  orders: {
    correct: [
      { id: 'intubate-burns', name: 'Early intubation — hoarseness + singed hairs + carbonaceous sputum = inhalation injury', rationale: 'DO NOT WAIT for respiratory failure. Upper airway edema from inhalation injury progresses rapidly and can make intubation impossible within hours. Hoarse voice + singed nasal hairs + carbonaceous sputum = intubate immediately. RSI with video laryngoscope preferred (visualize edema).' },
      { id: 'parkland-burns', name: 'Parkland formula: 4 mL × 80 kg × 35% TBSA = 11,200 mL LR in 24h', rationale: 'First 24h fluid resuscitation: Lactated Ringer\'s (preferred over NS — reduces hyperchloremic acidosis). Half (5,600 mL) over the FIRST 8 HOURS from time of burn (not arrival time). If the burn happened 2h ago, give 5,600 mL over 6h. Remaining half over next 16h. Titrate to UO 0.5-1 mL/kg/hr.' },
      { id: '100o2-burns', name: '100% O2 via NRB now, then via ETT — carbon monoxide poisoning', rationale: 'COHgb 18% = significant CO poisoning. 100% O2 reduces CO half-life from 5h (room air) to 60-90 min. Intubate and ventilate on 100% FiO2. Hyperbaric O2 if available for severe CO (COHgb >25%, LOC, cardiac involvement).' },
      { id: 'wound-cover', name: 'Cover burns with clean dry dressings — no ice, no butter', rationale: 'Burns: cover with clean dry gauze or sterile dressings. Do NOT use ice (worsens tissue injury, hypothermia), do NOT use butter or toothpaste (infection risk, impairs assessment). Keep patient warm — burn patients are extremely hypothermia-prone (loss of skin barrier).' }
    ],
    incorrect: [
      { id: 'wait-intubate', name: 'Observe — airway looks okay right now, intubate if gets worse', rationale: 'CRITICAL ERROR — progressive upper airway edema from inhalation injury can render intubation impossible within 1-2 hours. The window for safe intubation closes rapidly. Hoarse voice + singed hairs = intubate NOW, not "when it gets worse."' },
      { id: 'ice-burns', name: 'Apply ice packs to cool the burns', rationale: 'Ice causes additional tissue injury (thermal injury from cold) and systemic hypothermia. Cool the wound with cool (not cold) water for 20 minutes only. Burns patients lose thermoregulation and cool quickly — do not worsen hypothermia.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Inhalation injury signs: singed nasal hairs/eyebrows, hoarse voice, carbonaceous sputum, facial burns, history of enclosed space. Early intubation is mandatory — upper airway edema progresses rapidly and closes the intubation window.',
      'Parkland formula: 4 mL × kg × %TBSA = total LR for 24h. Half in FIRST 8 HOURS from time of burn. Use Lactated Ringer\'s (not NS). Titrate to UO 0.5-1 mL/kg/hr.',
      'Rule of Nines: head 9%, each arm 9%, anterior trunk 18%, posterior trunk 18%, each leg 18%, perineum 1%. Exclude 1st degree burns (superficial) from TBSA calculation.',
      'Carbon monoxide poisoning: COHgb >10% = significant exposure. Pulse oximetry is FALSELY NORMAL (cannot distinguish COHgb from oxyhemoglobin). Treat with 100% O2. Hyperbaric O2 for severe exposure.'
    ],
    boardPearls: [
      'Escharotomy: circumferential full-thickness burns of extremities or chest cause compartment syndrome from eschar restriction. Escharotomy (not fasciotomy) releases the eschar.',
      'Burn center transfer criteria: >10% TBSA 2nd/3rd degree, face/hands/feet/genitalia/perineum/major joints, electrical, chemical, inhalation injury, circumferential burns.',
      'Curling\'s ulcer: stress ulcer from major burns. All major burn patients require PPI or H2 blocker prophylaxis.',
      'Burn wound sepsis: most common cause of death in major burns after first 48h (after resuscitation phase). Common organisms: Pseudomonas aeruginosa, MRSA, Candida. Topical antimicrobials: silver sulfadiazine, mafenide acetate, bacitracin.'
    ]
  },
  references: [{ id: 'StatPearls-Burns', title: 'Burn Evaluation and Management', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430741/', openAccess: true }]
};
