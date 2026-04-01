/* emr-data/cdiff-colitis.js — C. diff Colitis — Fidaxomicin Era */
window.CASES = window.CASES || {};
window.CASES['cdiff-colitis'] = {
  id: 'cdiff-colitis', name: 'Beverly Kim', age: '72F', dob: '1953-06-14',
  mrn: 'RDX-2026-21938', setting: 'Medicine Floor', category: 'infectious', acuity: 2,
  chiefComplaint: 'Profuse watery diarrhea 10×/day, abdominal pain — 2 weeks post antibiotics',
  diagnosis: 'Severe Clostridioides difficile Colitis',
  presentation: {
    hpi: 'Beverly Kim, 72F, presents with 4 days of profuse watery, non-bloody diarrhea 10-12×/day with cramping abdominal pain. She completed a 10-day course of clindamycin 3 weeks ago for a dental procedure. No fever initially but now Tmax 38.7°C. She is dehydrated. WBC is 18,400. Cr is 1.9 (baseline 1.0). She is on a PPI and has been hospitalized twice in the past year. This is her first CDI episode.',
    pmh: ['HTN', 'Osteoporosis', 'GERD on PPI'], meds: ['Lisinopril', 'Omeprazole', 'Alendronate'],
    allergies: ['Penicillin — rash (mild)']
  },
  vitals: { BP: '102/64', HR: '108', RR: '18', Temp: '38.7°C', SpO2: '97%', GCS: '15' },
  labs: {
    'CDI Testing': 'GDH EIA positive | Toxin A/B EIA positive → CDI CONFIRMED (2-step algorithm)',
    'CBC': 'WBC 18,400 (H — severe CDI marker)', 'CMP': 'Cr 1.9 (H — AKI, baseline 1.0) | Albumin 2.8 (L)',
    'CT abdomen': 'Pancolitis, thickened colonic wall, pericolonic fat stranding. No perforation. No megacolon (transverse colon 8cm — threshold 6cm for toxic megacolon).'
  },
  orders: {
    correct: [
      { id: 'vanc-cdiff', name: 'Oral vancomycin 125mg QID × 10 days OR fidaxomicin 200mg BID × 10 days', rationale: 'IDSA 2021: oral vancomycin or fidaxomicin are first-line for CDI (all severity). Metronidazole is NO LONGER first-line — inferior to vancomycin in clinical trials. Fidaxomicin preferred if available — reduces recurrence rate vs vancomycin (MODIFY I/II trials).' },
      { id: 'metro-add-severe', name: 'Add IV metronidazole 500mg TID for severe complicated CDI with ileus', rationale: 'IV metronidazole added to oral vancomycin ONLY for complicated CDI with ileus (oral drug not reaching colon). This patient has no ileus — IV metronidazole alone is NOT acceptable.' },
      { id: 'stop-abx', name: 'Discontinue the precipitating antibiotic if still on any', rationale: 'If a CDI-causing antibiotic is still running, stop it immediately. Continuing the offending antibiotic significantly worsens CDI outcomes.' },
      { id: 'no-test-cure', name: 'Do NOT test for cure after treatment', rationale: 'CDI test of cure is NOT recommended (IDSA/SHEA). GDH and toxin can remain positive for weeks after clinical resolution. A positive test after treatment does not mean treatment failure.' },
      { id: 'surgery-consult', name: 'Surgery consult — WBC 18K, Cr 1.9, CT pancolitis', rationale: 'Severe CDI with organ dysfunction and CT evidence of pancolitis. Surgery consult for colectomy planning in case of fulminant colitis (Cr >2, WBC >15, toxic megacolon, perforation). Loop ileostomy with colonic lavage is an alternative to total colectomy.' }
    ],
    incorrect: [
      { id: 'metro-alone', name: 'Metronidazole 500mg TID alone — first-line for CDI', rationale: 'OUTDATED — metronidazole is no longer first-line for any severity of CDI per IDSA 2021. Vancomycin and fidaxomicin are superior in clinical trials. Metronidazole use for CDI is now stewardship-restricted.' },
      { id: 'probiotics-cdiff', name: 'Add Lactobacillus probiotic to prevent recurrence', rationale: 'Probiotics do NOT prevent CDI recurrence in adults per current evidence. The PLACIDE trial showed no benefit. Do not recommend as standard practice.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'CDI diagnosis: 2-step testing — GDH (sensitive screening) + toxin EIA (specific confirmation). NAAT (PCR) is sensitive but cannot distinguish colonization from infection in formed stool.',
      'First-line CDI treatment (ALL severity): oral vancomycin 125mg QID × 10 days OR fidaxomicin 200mg BID × 10 days. Metronidazole is no longer first-line per IDSA 2021.',
      'Test of cure after CDI treatment is NOT recommended — GDH and toxin can remain positive for weeks. Only test if new symptoms develop after a symptom-free interval.',
      'Severe CDI markers: WBC >15,000 OR Cr >1.5 × baseline. Fulminant CDI: hypotension, ileus, or megacolon — requires ICU and surgical consultation.'
    ],
    boardPearls: [
      'CDI risk factors: recent antibiotics (esp. clindamycin, fluoroquinolones, cephalosporins), hospitalization, age >65, PPI use, prior CDI.',
      'Recurrent CDI treatment: bezlotoxumab (monoclonal antibody against toxin B) reduces recurrence when given with antibiotics. FMT (fecal microbiota transplant) for 2+ recurrences — 80-90% efficacy (NEJM 2013).',
      'Toxic megacolon: colon diameter >6 cm (transverse) + systemic toxicity. Emergency colectomy — mortality 30-50%. Discontinue opioids and antimotility agents if present.',
      'Contact precautions (gown and gloves) for CDI. Alcohol-based hand sanitizers do NOT kill C. diff spores — hand washing with soap and water is mandatory.'
    ]
  },
  references: [{ id: 'StatPearls-CDiff', title: 'Clostridioides Difficile', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK431071/', openAccess: true }]
};
