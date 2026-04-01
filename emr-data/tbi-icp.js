/* emr-data/tbi-icp.js — Severe TBI + ICP Management */
window.CASES = window.CASES || {};
window.CASES['tbi-icp'] = {
  id: 'tbi-icp', name: 'Derek Foster', age: '31M', dob: '1994-08-22',
  mrn: 'RDX-2026-44112', setting: 'Trauma Bay → Neuro ICU', category: 'neurologic', acuity: 1,
  chiefComplaint: 'MVC unrestrained driver — GCS 7 at scene, GCS 6 in ED, CT shows subdural hematoma',
  diagnosis: 'Severe Traumatic Brain Injury (GCS 6) with Acute Subdural Hematoma + Elevated ICP',
  presentation: {
    hpi: '31M, unrestrained driver in high-speed MVC. GCS 7 at scene (E2V2M3), intubated by EMS. GCS 6 in ED after intubation. CT head: right acute subdural hematoma 12mm thickness with 8mm midline shift, cerebral edema, effacement of basal cisterns. Pupils: right 6mm sluggish, left 4mm reactive (early transtentorial herniation). ICP monitor placed: ICP 38 mmHg (normal <20). CPP = MAP 82 − ICP 38 = 44 mmHg (target >60).',
    pmh: ['No significant PMH'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '162/94', HR: '54', RR: 'Ventilated 14', Temp: '37.2°C', SpO2: '99%', GCS: '6 (intubated/sedated)' },
  labs: {
    'CT head': 'Right acute subdural hematoma 12mm, 8mm midline shift. Cerebral edema diffuse. Effaced basal cisterns = poor prognostic sign. No herniation yet on CT — but clinical signs (sluggish pupil) indicate impending herniation.',
    'ICP monitor': 'ICP 38 mmHg. CPP = MAP − ICP = 82 − 38 = 44 mmHg (CRITICALLY LOW — target >60 mmHg).',
    'Coags': 'INR 1.1, PTT 28, Platelets 188 — normal',
    'Blood gas': 'pH 7.38, PaCO2 38, PaO2 188 on FiO2 0.5'
  },
  orders: {
    correct: [
      { id: 'neurosurg-tbi', name: 'Neurosurgery STAT — subdural hematoma >10mm with midline shift >5mm = surgical evacuation', rationale: 'BTF guidelines: acute subdural hematoma >10mm OR midline shift >5mm = surgical evacuation (craniotomy) within 4 hours. Clinical herniation signs (sluggish pupil) make this even more urgent. Time is brain.' },
      { id: 'mannitol-tbi', name: 'Mannitol 1g/kg IV bolus — herniation treatment', rationale: 'Mannitol reduces ICP by creating an osmotic gradient. Use for imminent herniation (pupillary changes, Cushing response). Goal serum osmolality 300-320 mOsm/kg. Avoid if patient is hypovolemic (can worsen hypotension).' },
      { id: 'hts-tbi', name: 'Hypertonic saline (3% or 23.4%) — ICP management', rationale: '23.4% saline 30mL IV bolus for acute herniation (via central line). 3% saline infusion for ICP maintenance. Hypertonic saline is the preferred osmotic agent in many centers — does not cause diuresis (avoids volume depletion).' },
      { id: 'cpp-tbi', name: 'Maintain CPP 60-70 mmHg — vasopressors if MAP inadequate', rationale: 'CPP = MAP − ICP. Target CPP >60 mmHg per BTF guidelines. If CPP <60 with ICP elevated, increase MAP with norepinephrine OR lower ICP with osmotic agents + sedation.' },
      { id: 'hov-tbi', name: 'HOB 30° elevation, head midline — reduces ICP', rationale: 'Head of bed 30°, head midline (no internal jugular compression) facilitates cerebral venous drainage and reduces ICP without compromising CPP.' }
    ],
    incorrect: [
      { id: 'hyperventilate-tbi', name: 'Hyperventilate to PaCO2 25 — lowers ICP by vasoconstriction', rationale: 'Prolonged hyperventilation (PaCO2 <35) causes cerebral vasoconstriction → ischemia. Current BTF guidelines: DO NOT use prolonged prophylactic hyperventilation. Brief hyperventilation (PaCO2 30-35) is acceptable ONLY for acute herniation as a bridge to definitive therapy.' },
      { id: 'no-permissive-htn', name: 'Aggressively lower BP to <140 — hypertension is harmful in TBI', rationale: 'WRONG — hypotension is FAR more dangerous than hypertension in TBI. Permissive hypertension maintains CPP. BTF guidelines: avoid SBP <90 mmHg at any point (doubles mortality). Only treat extreme hypertension (MAP >130 consistently) after ensuring adequate CPP.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'CPP = MAP − ICP. Target CPP 60-70 mmHg in severe TBI. Low CPP = cerebral ischemia. High ICP must be treated with osmotic agents while also maintaining MAP.',
      'Surgical evacuation of subdural hematoma: BTF criteria = thickness >10mm OR midline shift >5mm OR any GCS drop of ≥2 points. Surgery within 4h improves outcomes.',
      'Prolonged hyperventilation is HARMFUL — causes cerebral vasoconstriction and ischemia. Reserve brief hyperventilation (PaCO2 30-35) only for acute transtentorial herniation as a bridge.',
      'Hypotension is the most preventable cause of secondary brain injury. SBP <90 even once in severe TBI doubles mortality. Maintain aggressively.'
    ],
    boardPearls: [
      'Cushing response (reflex): hypertension + bradycardia + irregular respirations = brainstem compression from elevated ICP. Ominous sign — act immediately.',
      'Monroe-Kellie doctrine: intracranial contents (brain 80% + blood 10% + CSF 10%) are fixed volume. Any increase in one component must be compensated by decrease in another.',
      'Epidural hematoma: lucid interval (brief LOC → regains consciousness → deteriorates). Middle meningeal artery rupture from temporal bone fracture. Biconvex (lenticular) shape on CT. Surgical emergency.',
      'Diffuse axonal injury (DAI): rotational forces shear axons at gray-white junction. CT may be normal or show petechial hemorrhages. MRI (susceptibility-weighted) is more sensitive.'
    ]
  },
  references: [{ id: 'StatPearls-TBI', title: 'Head Trauma', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK536919/', openAccess: true }]
};
