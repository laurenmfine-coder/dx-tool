/* emr-data/hiv-aids.js — HIV/AIDS: New Diagnosis + PCP Pneumonia */
window.CASES = window.CASES || {};
window.CASES['hiv-aids'] = {
  id: 'hiv-aids', name: 'Marcus Thompson', age: '31M', dob: '1994-06-08',
  mrn: 'RDX-2026-44881', setting: 'ID Clinic → Inpatient Medicine', category: 'infectious', acuity: 2,
  chiefComplaint: 'New HIV diagnosis + 3 weeks dyspnea — CD4 count 58, PCP pneumonia',
  diagnosis: 'AIDS-Defining Illness: Pneumocystis Jirovecii Pneumonia (PCP) — CD4 58',
  presentation: {
    hpi: '31M, new HIV diagnosis found incidentally when donating blood. Presents with 3-week history of progressive exertional dyspnea, nonproductive cough, low-grade fever. CD4 count 58 (normal >500). HIV viral load 890,000 copies/mL. CXR: bilateral interstitial infiltrates, worse in perihilar regions. He is hypoxic at rest (SpO2 88%). Beta-D-glucan elevated. BAL (if done) would show P. jirovecii.',
    pmh: ['New HIV diagnosis'], meds: ['None'], allergies: ['NKDA']
  },
  vitals: { BP: '118/72', HR: '104', RR: '26', Temp: '38.3°C', SpO2: '88% RA → 94% 4L NC' },
  labs: {
    'HIV': 'HIV-1 antibody positive. CD4 count 58 (AIDS — <200). Viral load 890,000 copies/mL.',
    'LDH': '680 IU/L (H — elevated in PCP, correlates with severity)',
    'Beta-D-glucan': '>500 pg/mL (H — sensitive marker for PCP and invasive fungal infection)',
    'ABG': 'pH 7.44, PaO2 58 mmHg, PaCO2 32, A-a gradient 52 (H — significant)',
    'CXR': 'Bilateral perihilar interstitial infiltrates — "bat wing" pattern consistent with PCP',
    'Sputum/BAL': 'Pneumocystis jirovecii detected on silver stain (if obtained) — clinical diagnosis acceptable'
  },
  orders: {
    correct: [
      { id: 'tmp-smx-pcp', name: 'TMP-SMX 15-20 mg/kg/day (trimethoprim component) IV/PO × 21 days — first-line PCP treatment', rationale: 'TMP-SMX is first-line for PCP of any severity. Dose by trimethoprim component: 15-20 mg/kg/day divided q6-8h. IV for moderate-severe (PaO2 <70), PO acceptable for mild. Duration: 21 days.' },
      { id: 'steroids-pcp', name: 'Prednisone 40mg BID × 5 days, then taper — for moderate-severe PCP (PaO2 <70)', rationale: 'Adjunctive steroids for moderate-severe PCP (PaO2 <70 or A-a gradient >35) reduce mortality by 50% (NEJM 1990). Start within 72h of antibiotics. Taper: 40mg BID × 5 days → 40mg daily × 5 days → 20mg daily × 11 days.' },
      { id: 'art-timing', name: 'Start ART within 2 weeks of PCP diagnosis — do NOT delay', rationale: 'ACTG A5164 trial: early ART (within 2 weeks) in AIDS-defining OI significantly reduces AIDS progression and death vs deferred ART. Exception: TB (risk of IRIS — defer 2-8 weeks depending on CD4). For PCP: start ART within 2 weeks.' },
      { id: 'id-consult', name: 'Infectious disease consult — OI workup, ART regimen selection', rationale: 'CD4 58: screen for all AIDS-defining OIs. Cryptococcal antigen (screen at CD4 <100), toxoplasma IgG, CMV, MAC (CD4 <50). ART regimen: integrase-based preferred (bictegravir/TAF/FTC or dolutegravir + 2 NRTIs).' }
    ],
    incorrect: [
      { id: 'fluconazole-pcp', name: 'Fluconazole — treat possible fungal pneumonia', rationale: 'Fluconazole does NOT cover PCP. PCP requires TMP-SMX (first-line), atovaquone, or pentamidine. Fluconazole covers Candida and Cryptococcus, not Pneumocystis.' },
      { id: 'defer-art', name: 'Defer ART until PCP resolved — IRIS risk', rationale: 'For most OIs including PCP: early ART (within 2 weeks) improves outcomes and is now standard of care. The IRIS concern is primarily for TB and cryptococcal meningitis. Do not defer ART for PCP.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'PCP prophylaxis: TMP-SMX DS daily when CD4 <200 (or thrush). Treatment: TMP-SMX 15-20 mg/kg/day × 21 days. Adjunctive steroids mandatory for moderate-severe disease (PaO2 <70, A-a gradient >35).',
      'CD4 count determines OI risk thresholds: PCP (<200), toxoplasmosis (<100), MAC (<50), CMV (<50), cryptococcal meningitis (<100). Screen appropriately.',
      'Start ART within 2 weeks for most AIDS-defining OIs (ACTG A5164). Exception: cryptococcal meningitis and TB (defer 2-8 weeks to reduce IRIS risk).',
      'U=U (Undetectable = Untransmittable): HIV-positive patients on effective ART with undetectable viral load cannot transmit HIV sexually. Counsel all patients.'
    ],
    boardPearls: [
      'ART drug classes: NRTIs (backbone), INSTI (integrase inhibitor — preferred), NNRTI, PI, entry inhibitors. First-line: bictegravir/TAF/emtricitabine (Biktarvy) or dolutegravir + 2 NRTIs.',
      'Immune reconstitution inflammatory syndrome (IRIS): paradoxical worsening of OI after ART initiation as immune system recovers. Most common with TB and cryptococcal meningitis. Treat with steroids for severe IRIS.',
      'PCP BAL: silver stain (GMS) or immunofluorescence shows characteristic cysts/trophozoites. Clinical + Beta-D-glucan + LDH elevation often sufficient for diagnosis.',
      'Cryptococcal meningitis in HIV: LP opening pressure often >25 cmH2O. Treatment: liposomal amphotericin B + flucytosine × 2 weeks, then fluconazole. Therapeutic LPs for elevated ICP.'
    ]
  },
  references: [{ id: 'StatPearls-PCP', title: 'Pneumocystis Pneumonia', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK482370/', openAccess: true }]
};
