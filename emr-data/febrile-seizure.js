window.CASES = window.CASES || {};
window.CASES['febrile-seizure'] = {
  id: 'febrile-seizure', name: 'Lily Thompson', age: '2F', dob: '2023-01-15',
  mrn: 'RDX-2026-38221', setting: 'Pediatric ED',
  chiefComplaint: '2-year-old with febrile seizure — parents terrified, wanting admission and CT',
  diagnosis: 'Simple Febrile Seizure — Reassure, No LP, No CT, No AED',
  category: 'pediatric', acuity: 2,
  presentation: {
    hpi: '2-year-old girl, 1-2 minute generalized tonic-clonic seizure while febrile (38.9°C). She returned to baseline within 20 minutes. No focal features. No recurrence. No prior seizure. Immunizations up to date (vaccinated against Hib and S. pneumoniae — meningitis risk low). No nuchal rigidity, no petechiae, no toxic appearance. Alert, playful now. Exam normal except fever. Source: left ear erythema + bulging TM (otitis media).',
    pmh: ['No prior seizures', 'Normal development'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { Temp: '38.9°C', HR: '128 (febrile tachycardia)', RR: '24', SpO2: '99%', BP: '92/58' },
  labs: { 'Glucose (POC)': '94 mg/dL (normal)', 'No further labs needed': 'Simple febrile seizure — labs are not routinely indicated' },
  orders: {
    correct: [
      { id: 'antipyretics-fs', name: 'Acetaminophen or ibuprofen — treat fever for comfort', rationale: 'Antipyretics treat fever for comfort. They do NOT prevent recurrence of febrile seizures — meta-analyses show antipyretics do not reduce febrile seizure recurrence rate. Parents often believe fever must be "controlled perfectly" — correct this misconception.' },
      { id: 'treat-otitis-fs', name: 'Amoxicillin for acute otitis media — treat the source of fever', rationale: 'The underlying infection causing fever should be treated. AOM with bulging TM in a 2-year-old → amoxicillin 80-90 mg/kg/day.' },
      { id: 'reassurance-fs', name: 'Parental reassurance + education — no AED needed, excellent prognosis', rationale: 'Simple febrile seizures: (1) Risk of epilepsy is low (2-4% — vs 1% general population). (2) Risk of recurrence: ~30% overall. (3) No long-term neurological sequelae. (4) No need for AEDs (harm outweighs benefit). Families are understandably terrified — structured reassurance is a therapeutic intervention.' }
    ],
    incorrect: [
      { id: 'ct-fs', name: 'CT head — rule out structural cause', rationale: 'CT is NOT indicated for simple febrile seizure. No evidence of brain trauma, no focal neurological signs, no signs of increased ICP. Radiation exposure without benefit. AAP guidelines: no imaging for simple febrile seizure.' },
      { id: 'lp-fs', name: 'Lumbar puncture — rule out meningitis', rationale: 'LP is NOT routinely indicated for simple febrile seizure in a vaccinated child who is back to baseline. AAP guidelines: LP is considered for age <12 months (immune response immature) or if meningeal signs present or toxic appearance. This fully vaccinated 2-year-old who is now playful does not require LP.' },
      { id: 'aed-fs', name: 'Start levetiracetam — prevent future seizures', rationale: 'AEDs are NOT recommended for simple febrile seizures. Cochrane review: AEDs reduce recurrence but do NOT change risk of epilepsy, cognitive outcomes, or other meaningful endpoints. The harms outweigh benefits for simple febrile seizures.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Simple febrile seizure: 6 months to 5 years, febrile, generalized, <15 minutes, returns to baseline within 1 hour, single episode within 24 hours. NO workup needed (no CT, no LP, no EEG, no AED) in a vaccinated child back to baseline.',
      'Complex febrile seizure (any one of): focal features, duration >15 min, recurrence within 24h, age <6 months or >5 years, failure to return to baseline → warrants further evaluation (LP, EEG, MRI).',
      'Antipyretics do NOT prevent febrile seizure recurrence — a common and important parental misconception to address.',
      'Febrile seizure risk of epilepsy: 2-4% (baseline ~1%). Simple febrile seizure → no increased risk of intellectual disability, behavioral disorders, or death.'
    ],
    boardPearls: [
      'LP indications in febrile seizure: age <12 months (immature immunity, unreliable meningeal signs), unvaccinated against Hib/S. pneumoniae, prior antibiotic treatment (masks meningitis signs), meningeal signs, toxic appearance.',
      'Prolonged febrile seizure (>5 min): benzodiazepine to abort — rectal diazepam, IM midazolam, or intranasal midazolam. Parents can be taught to administer at home.',
      'Risk factors for febrile seizure recurrence: first seizure before age 15 months, family history of febrile seizures, fever <1°C below threshold, brief duration between fever onset and seizure.',
      'Dravet syndrome: initially presents as prolonged febrile seizures in the first year → evolves to refractory epilepsy. SCN1A mutation. Avoid phenytoin and carbamazepine (worsen seizures).'
    ]
  },
  references: [{ id: 'StatPearls-FebSeizure', title: 'Febrile Seizure', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK448117/', openAccess: true }]
};
