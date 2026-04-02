/* emr-data/sinusitis.js */
window.CASES = window.CASES || {};
window.CASES['sinusitis'] = {
  id: 'sinusitis', name: 'Sofia Martinez', age: '38F', dob: '1987-04-12',
  mrn: 'RDX-2026-77289', setting: 'ED', category: 'infectious', acuity: 2,
  chiefComplaint: 'Facial pain + nasal congestion + purulent discharge × 12 days — not improving',
  diagnosis: 'Acute Bacterial Rhinosinusitis — Amoxicillin Indicated',
  presentation: { hpi: 'Sofia Martinez, 38F, 12 days of maxillary facial pain/pressure, purulent nasal discharge, maxillary tooth pain, and fever 38.2°C. Initial cold-like symptoms lasted 5 days then worsened (double worsening — classic ABRS pattern). Failed decongestants and nasal saline. CT sinuses: maxillary sinus opacification with air-fluid level.', pmh: ['No significant PMH'], meds: ['None'], allergies: ['NKDA'] },
  vitals: { BP: '122/76', HR: '78', RR: '14', Temp: '38.2°C', SpO2: '99%' },
  labs: { 'CT sinuses': 'Bilateral maxillary sinus opacification with air-fluid levels. Right-sided more prominent. No orbital involvement. No intracranial extension.' },
  orders: {
    correct: [
      { id: 'amox-sinus', name: 'Amoxicillin 500mg TID × 5-7 days (or amoxicillin-clavulanate if beta-lactamase risk)', rationale: 'ABRS diagnostic criteria: symptoms ≥10 days without improvement OR severe symptoms OR double worsening after 5-day improvement. Amoxicillin 500mg TID is first-line. Duration: 5-7 days (not 10-14 days — shorter courses equally effective with less resistance). Add clavulanate for recent antibiotics, daycare exposure, or geography with high resistance.' },
      { id: 'nasal-steroids', name: 'Intranasal corticosteroid (fluticasone) — adjunct, reduces inflammation', rationale: 'Intranasal steroids reduce mucosal inflammation and improve drainage. Mild adjunct benefit in ABRS. Minimal systemic absorption.' }
    ],
    incorrect: [
      { id: 'observe-sinus', name: 'Observe — most sinusitis is viral', rationale: 'Viral rhinosinusitis (<10 days, no double worsening): observe with symptom management. But 12 days with double worsening + fever = ABRS by criteria → antibiotics are indicated.' },
      { id: 'azithromycin-sinus', name: 'Azithromycin — covers atypicals', rationale: 'Macrolides have high resistance rates (20-30%) for S. pneumoniae and H. influenzae. Not first-line for sinusitis. Reserve for true penicillin allergy (anaphylaxis). Azithromycin is appropriate for community-acquired pneumonia but not sinusitis.' }
    ]
  },
  teachingPoints: {
    keyLearning: ['ABRS criteria: ≥10 days without improvement OR severe symptoms (fever ≥39°C + purulent discharge) OR double worsening after initial improvement. Treatment: amoxicillin 500mg TID × 5-7 days.', 'Complications of sinusitis: orbital cellulitis/abscess (Chandler classification), intracranial extension (meningitis, epidural abscess, cavernous sinus thrombosis). CT urgently for orbital or neurological signs.', 'Cavernous sinus thrombosis: bilateral eye findings, proptosis, high fever, septic — ophthalmological emergency.'],
    boardPearls: ['Acute vs subacute vs chronic: acute <4 weeks, subacute 4-12 weeks, chronic >12 weeks (CRS). CRS with nasal polyps → consider dupilumab.', 'Complications: periorbital cellulitis (pre-septal) vs orbital cellulitis (post-septal — proptosis, ophthalmoplegia, pain with eye movement) — orbital requires IV antibiotics + CT + ophthalmology.', 'Allergic fungal sinusitis: atopic patient, eosinophilic mucin, non-invasive. CT: heterogeneous opacification. Treatment: surgery + steroids, not antifungals.']
  },
  references: [{ id: 'StatPearls-Sinusitis', title: 'Sinusitis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK519492/', openAccess: true }]
};
