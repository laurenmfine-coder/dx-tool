/* emr-data/burns.js — Thermal Burns: Fluid Resuscitation + Rule of Nines */
window.CASES = window.CASES || {};
window.CASES['burns'] = {
  id: 'burns', name: 'Carlos Ruiz', age: '42M', dob: '1983-07-19',
  mrn: 'RDX-2026-52218', setting: 'ED → Burn Unit', category: 'surgical', acuity: 2,
  chiefComplaint: 'House fire — 35% TBSA flame burns, singed eyebrows, hoarse voice',
  diagnosis: 'Major Thermal Burns (35% TBSA, 2nd + 3rd degree) with Suspected Inhalation Injury',
  presentation: {
    hpi: '42M rescued from house fire, smoke inhalation exposure ~20 minutes. Flame burns to bilateral anterior thighs, abdomen, bilateral arms, and face. Singed nasal hairs, hoarse voice, soot in oropharynx. No stridor yet but airway at risk. Rule of Nines: anterior torso (18%) + bilateral arms (9% each) — approx 35% TBSA involved. Mix of blistered partial thickness (2nd degree) and white/insensate full thickness (3rd degree). Weight 80kg.',
    pmh: ['No significant PMH'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '118/76', HR: '116', RR: '22', Temp: '36.8°C', SpO2: '94% RA' },
  labs: {
    'COHb': 'Carboxyhemoglobin 22% (H — CO poisoning from smoke inhalation)',
    'ABG': 'pH 7.38, PaO2 88 (SpO2 falsely normal on pulse ox with CO poisoning)',
    'Bronchoscopy': 'Pending — soot below cords, carbonaceous deposits in airways',
    'CXR': 'No acute infiltrate yet — inhalation injury may manifest 24-48h later as ARDS'
  },
  orders: {
    correct: [
      { id: 'airway-burns', name: 'Emergent intubation — inhalation injury with hoarseness = intubate NOW', rationale: 'Hoarse voice + singed hair + soot = inhalation injury. Airway edema progresses rapidly over 24-48h. Intubate EARLY while airway is still manageable. Waiting until stridor develops = difficult or impossible intubation. Use video laryngoscopy + have surgical airway backup ready.' },
      { id: '100-o2', name: '100% O2 via NRB mask (until intubated) — CO poisoning with COHb 22%', rationale: 'CO poisoning: pulse oximetry is falsely normal (reads COHb as oxyhemoglobin). 100% O2 reduces CO half-life from 4-5h (room air) to 60-90 min. Intubate and ventilate with 100% FiO2. HBO if COHb >25%, LOC, cardiac involvement.' },
      { id: 'parkland-burns', name: 'Parkland formula: 4 mL/kg × %TBSA (2nd+3rd degree only) in first 24h', rationale: 'Parkland formula: 4 × 80 kg × 35% TBSA = 11,200 mL LR in 24h. Give half in first 8h from time of burn (not arrival), other half over next 16h. LR preferred over NS (hyperchloremic acidosis risk). Titrate to UO 0.5-1 mL/kg/hr.' },
      { id: 'foley-burns', name: 'Foley catheter — titrate fluids to urine output 0.5-1 mL/kg/hr (30-50 mL/hr)', rationale: 'Urine output is the best clinical indicator of adequate resuscitation in burns. Place Foley immediately. Over-resuscitation (too much fluid) causes abdominal compartment syndrome and worsens edema.' }
    ],
    incorrect: [
      { id: 'ice-burns', name: 'Apply ice to burns to reduce pain and inflammation', rationale: 'Ice causes vasoconstriction and can extend burn depth. Correct first aid: cool running water (15-20°C) for 20 minutes. Never ice.' },
      { id: 'ns-burns', name: '0.9% normal saline for resuscitation', rationale: 'Large-volume NS causes hyperchloremic metabolic acidosis. Lactated Ringer\'s is the preferred resuscitation fluid for major burns (Parkland formula uses LR).' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Rule of Nines: head 9%, each arm 9%, chest 18%, abdomen 18%, each leg 18%, perineum 1%. Only 2nd degree (partial thickness — blistered, painful) and 3rd degree (full thickness — white/charred, insensate) count toward TBSA for fluid calculation.',
      'Airway management in inhalation injury: hoarseness + singed hair + soot = intubate NOW. Edema progresses over 24-48h making late intubation extremely difficult.',
      'Parkland formula: 4 mL/kg × % TBSA burned in first 24h (LR). Half in first 8h from time of burn. Titrate to UO 0.5-1 mL/kg/hr.',
      'CO poisoning: pulse ox reads COHb as oxyhemoglobin — SpO2 appears normal despite life-threatening CO. Treat with 100% O2; HBO for COHb >25%, LOC, or cardiac involvement.'
    ],
    boardPearls: [
      'Transfer to burn center: burns >20% TBSA, full-thickness burns, burns to face/hands/feet/genitalia/major joints, circumferential burns, inhalation injury, electrical burns.',
      'Escharotomy: circumferential full-thickness burns of extremities → compartment syndrome. Chest escharotomy for ventilatory restriction. Performed at the bedside — no anesthesia needed (3rd degree is insensate).',
      'Electrical burns: entry and exit wounds underestimate true tissue damage (current travels through body). Cardiac monitoring for 24h. Risk of rhabdomyolysis — aggressive hydration, target UO 1-2 mL/kg/hr.',
      'Curling\'s ulcer: stress ulcer of duodenum in major burns. Prophylaxis with PPI or H2 blocker for all major burns.'
    ]
  },
  references: [{ id: 'StatPearls-Burns', title: 'Burns', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK430741/', openAccess: true }]
};
