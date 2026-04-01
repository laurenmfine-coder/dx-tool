/* emr-data/tuberculosis.js — Active Pulmonary TB */
window.CASES = window.CASES || {};
window.CASES['tuberculosis'] = {
  id: 'tuberculosis', name: 'Miguel Santos', age: '34M', dob: '1991-05-29',
  mrn: 'RDX-2026-55281', setting: 'ED → Pulmonology/ID + Airborne Isolation', category: 'infectious', acuity: 2,
  chiefComplaint: 'Night sweats, 20-lb weight loss, productive cough × 3 months — immigrant from high-prevalence country',
  diagnosis: 'Active Pulmonary Tuberculosis',
  presentation: {
    hpi: '34M, recent immigrant from the Philippines (high TB prevalence). 3 months of productive cough with blood-streaked sputum (hemoptysis), drenching night sweats, fever, and 20-lb unintentional weight loss. He works at a restaurant and lives with 5 family members in one apartment. CXR: right upper lobe cavitary lesion with surrounding consolidation. Sputum AFB smear: 3+ acid-fast bacilli.',
    pmh: ['No prior TB treatment', 'HIV negative (tested today)'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '118/72', HR: '96', RR: '20', Temp: '38.4°C', SpO2: '94% RA' },
  labs: {
    'CXR': 'Right upper lobe cavitary lesion with surrounding airspace consolidation — classic active TB pattern',
    'Sputum AFB smear × 3': 'Smear 1: 3+ AFB, Smear 2: 2+ AFB, Smear 3: 1+ AFB — HIGHLY INFECTIOUS',
    'Sputum NAAT (GeneXpert MTB/RIF)': 'M. tuberculosis detected. Rifampin resistance NOT detected = drug-sensitive TB',
    'HIV': 'Negative',
    'LFTs': 'AST 28, ALT 32 (important baseline — all 4 RIPE drugs are hepatotoxic)',
    'CBC': 'WBC 8.8, Hgb 10.2 (L — anemia of chronic disease/inflammation), Plt 418',
    'Contact investigation': 'Public health department notified — all 5 household contacts require testing'
  },
  orders: {
    correct: [
      { id: 'airborne-tb', name: 'Airborne precautions IMMEDIATELY — negative pressure room, N95 masks', rationale: 'Active pulmonary TB with 3+ smear = highly infectious. Place in negative pressure room immediately. Standard masks are INSUFFICIENT — N95 respirators required for all healthcare providers. Report to public health within 24h (mandatory reportable disease).' },
      { id: 'ripe-tb', name: 'RIPE therapy: Rifampin + Isoniazid + Pyrazinamide + Ethambutol × 2 months, then RH × 4 months', rationale: 'Standard 6-month RIPE regimen for drug-sensitive TB. Intensive phase (2 months RIPE) + continuation phase (4 months RH). DOT (directly observed therapy) is standard of care to ensure adherence and prevent acquired resistance.' },
      { id: 'b6-tb', name: 'Pyridoxine (Vitamin B6) 25-50mg daily — prevents INH neuropathy', rationale: 'Isoniazid (INH) causes peripheral neuropathy from B6 depletion. Pyridoxine supplementation is mandatory with INH therapy, especially in diabetics, alcoholics, pregnant women, and malnourished patients.' },
      { id: 'dot-tb', name: 'Directly Observed Therapy (DOT) — mandatory for all TB', rationale: 'DOT is the standard of care for TB treatment. A health worker watches the patient swallow every dose. This is not optional — non-adherence = acquired drug resistance = MDR-TB (much more difficult to treat).' },
      { id: 'ph-tb', name: 'Public health department notification + contact investigation', rationale: 'TB is a mandatory reportable disease in all US states. Must notify within 24h. Public health coordinates contact investigation for all close contacts (household, workplace). Contacts need TST or IGRA, CXR, and treatment of latent TB if indicated.' }
    ],
    incorrect: [
      { id: 'monotherapy-tb', name: 'Start INH alone while awaiting cultures', rationale: 'NEVER monotherapy for active TB. Monotherapy guarantees acquired resistance. Active TB always requires at least 3 drugs (empirically 4 until sensitivities return). Monotherapy is appropriate only for LATENT TB treatment.' },
      { id: 'standard-room-tb', name: 'Place in standard isolation — regular surgical mask is sufficient', rationale: 'Standard surgical masks are INSUFFICIENT for airborne precautions. TB requires: negative pressure room + N95 respirators (or PAPRs) for all healthcare workers. Failure to implement airborne precautions is a major infection control violation.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Active TB: airborne precautions (negative pressure room + N95) BEFORE any other management. Mandatory public health reporting within 24h. Contact investigation for all close contacts.',
      'RIPE therapy: Rifampin + Isoniazid + Pyrazinamide + Ethambutol × 2 months, then Rifampin + Isoniazid × 4 months = 6 months total. DOT is standard of care.',
      'NEVER start monotherapy for active TB — guaranteed acquired resistance. Active TB = minimum 3 drugs.',
      'Pyridoxine (B6) with INH is mandatory — prevents peripheral neuropathy, especially in high-risk patients (DM, alcoholism, malnutrition, pregnancy).'
    ],
    boardPearls: [
      'Latent TB treatment: INH × 9 months (DOT preferred) OR INH + rifapentine × 3 months (weekly DOT) OR RIF × 4 months. No DOT typically needed for latent TB.',
      'IGRA (QuantiFERON-Gold) vs TST: IGRA preferred in BCG-vaccinated individuals (BCG causes false-positive TST). Both acceptable for latent TB screening.',
      'MDR-TB: resistant to INH + rifampin. Requires 18-24 months of second-line agents (fluoroquinolones, injectables). XDR-TB: also resistant to fluoroquinolones + injectable agents.',
      'TB-HIV co-infection: treat HIV simultaneously. Rifampin interacts with many antiretrovirals — use rifabutin as substitute in some regimens. HIV increases TB reactivation risk 50-fold.'
    ]
  },
  references: [{ id: 'StatPearls-TB', title: 'Tuberculosis', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK441916/', openAccess: true }]
};
