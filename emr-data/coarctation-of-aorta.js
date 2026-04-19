/* emr-data/coarctation-of-aorta.js — Critical Coarctation of Aorta — Ductal Dependent */
window.CASES = window.CASES || {};
window.CASES['coarctation-of-aorta'] = {
  id: 'coarctation-of-aorta', name: 'Tommy Lee', age: '3M', dob: '2025-12-31',
  mrn: 'RDX-2026-60155', setting: 'Peds Cardiology', category: 'pediatric', acuity: 2,
  chiefComplaint: 'Critical Coarctation of Aorta — Ductal Dependent',
  diagnosis: 'Critical Coarctation of Aorta — Ductal Dependent',
  presentation: {
    hpi: '3-month-old male. Fussy, poor feeding, pallor, diaphoresis. BP: right arm 98/60, both legs UNDETECTABLE. Femoral pulses absent. CXR: cardiomegaly, \'3 sign\' (eventually — not at 3 months). PGE1 was started by neonatology — ductus is providing flow to lower body. Critical coarctation: stenosis severe enough to require PDA for systemic perfusion.',
    pmh: ['See clinical encounter'], meds: ['Age/condition-appropriate'], allergies: ['NKDA']
  },
  vitals: { BP: 'Right arm 98/60 | Both legs: undetectable', HR: '168', RR: '52', Temp: '37.0°C', SpO2: '96% right arm / 75% legs' },
  labs: { 'Echo': 'Severe coarctation at isthmus (juxtaductal). Bicuspid aortic valve (associated in 50-85%). PDA patent — providing lower body perfusion. Mild LV dysfunction.', 'Lactate': '4.2 (H — lower body ischemia)', 'Urine output': 'Oliguria — renal hypoperfusion' },
  orders: {
    correct: [
      { id: 'pge1-coarc', name: 'Prostaglandin E1 (alprostadil) 0.05-0.1 mcg/kg/min IV — maintain ductal patency', rationale: 'Critical coarctation is ductal-dependent — the PDA provides blood flow to the lower body. PGE1 prevents ductus from closing. Essential bridge to surgical repair. Side effects: apnea (have intubation ready), fever, hypotension.' },
      { id: 'surgical-repair', name: 'Surgical repair — resection + end-to-end anastomosis or subclavian flap repair', rationale: 'Definitive treatment: surgical resection of coarctation segment + end-to-end anastomosis. Neonates/infants: surgery. Older children/adults: catheter-based balloon angioplasty ± stenting.' }
    ],
    incorrect: [
      { id: 'diuretics-coarc', name: 'Furosemide — cardiomegaly, possible heart failure', rationale: 'While LV dysfunction exists, the primary problem is inadequate perfusion to the lower body. Diuretics worsen preload and may precipitate shock. PGE1 to maintain ductal flow is the priority.' },
      { id: 'close-ductus', name: 'Give indomethacin — close the PDA to reduce pulmonary overcirculation', rationale: 'In critical coarctation, the PDA is LIFE-SAVING — it provides blood flow to the lower body. Closing the ductus (with indomethacin or ibuprofen) would cause lower body ischemia, renal failure, and death. PGE1 OPENS the ductus — the opposite.' }
    ]
  },
  teachingPoints: {
    keyLearning: ['Coarctation: upper extremity hypertension + absent/weak femoral pulses + BP differential (arm > leg >20 mmHg) = coarctation until proven otherwise. Check all 4 limb BPs in any infant with shock or heart murmur.', 'Critical coarctation = ductal-dependent: PGE1 must be started immediately and maintained until surgical repair.', 'Bicuspid aortic valve: associated in 50-85% of coarctation. Lifelong surveillance for aortic stenosis/regurgitation and ascending aortic dilation (even after coarctation repair).'],
    boardPearls: ['Rib notching on CXR: intercostal collateral vessels erode inferior rib margins. Takes years to develop — seen in older children and adults, not neonates.', '\'3 sign\' on CXR: indentation at the site of coarctation with pre- and post-stenotic dilation — looks like the number 3 on the aortic knuckle.', 'Adult coarctation: headaches, arm hypertension, leg claudication, reduced exercise tolerance. Check 4-limb BPs in any young hypertensive.']
  },
  references: [{ id: 'StatPearls', title: 'Critical Coarctation of Aorta — Ductal Dependent', journal: 'StatPearls', year: 2024,
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK430727/', openAccess: true }]
};
