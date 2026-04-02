window.CASES = window.CASES || {};
window.CASES['schizophrenia'] = {
  id: 'schizophrenia', name: 'James Walker', age: '22M', dob: '2003-01-29',
  mrn: 'RDX-2026-58812', setting: 'Inpatient Psychiatry',
  chiefComplaint: 'First psychotic break — hearing voices commanding him to harm himself, stopped medications',
  diagnosis: 'Schizophrenia — First Episode Psychosis, Medication Non-Adherence',
  category: 'psychiatric', acuity: 2,
  presentation: {
    hpi: '22M, engineering student. 6 months of social withdrawal, declining grades. Now: auditory command hallucinations ("a voice telling me to jump"), paranoid delusions (FBI monitoring his apartment), disorganized speech, flat affect. He stopped risperidone 1 month ago because of side effects (galactorrhea — elevated prolactin from D2 blockade). He has no insight into his illness.',
    pmh: ['Schizophrenia — diagnosed 8 months ago'], meds: ['Risperidone 4mg (stopped 1 month ago)'], allergies: ['NKDA']
  },
  vitals: { BP: '124/76', HR: '88', RR: '14', Temp: '37.0°C', SpO2: '99%' },
  labs: {
    'Prolactin': '84 ng/mL (H — risperidone-induced hyperprolactinemia — reason he stopped)',
    'UDS': 'Negative', 'TSH': 'Normal', 'CBC/BMP': 'Normal',
    'Glucose/A1c': 'Glucose 92, A1c 5.4% — baseline metabolic screening (antipsychotics increase metabolic risk)'
  },
  orders: {
    correct: [
      { id: 'antipsychotic-schiz', name: 'Switch to aripiprazole 15mg daily or quetiapine 400mg — prolactin-sparing antipsychotics', rationale: 'Risperidone caused hyperprolactinemia (galactorrhea) → non-adherence. Switch to a prolactin-sparing antipsychotic. Aripiprazole is a partial D2 agonist — lowers prolactin, weight-neutral, activating. Quetiapine: sedating, also prolactin-sparing. Avoid further risperidone or haloperidol in this patient.' },
      { id: 'lai-schiz', name: 'Discuss long-acting injectable (LAI) antipsychotic — non-adherence is the #1 cause of relapse', rationale: 'Non-adherence to oral antipsychotics: 50% within first year, 75% by year 5. LAIs (paliperidone palmitate monthly, aripiprazole monthly, olanzapine pamoate) eliminate adherence problem and reduce relapse rates 30-50%. Ideal for this patient.' },
      { id: 'safety-schiz', name: 'Safety assessment — command hallucinations to self-harm → 1:1 observation, safety plan', rationale: 'Command auditory hallucinations to harm self = highest immediate suicide/harm risk. Requires 1:1 observation and safety precautions. These are not symbolic — they must be taken seriously.' },
      { id: 'metabolic-screen', name: 'Metabolic monitoring — annual glucose, lipids, weight, waist circumference', rationale: 'All antipsychotics increase metabolic risk (especially clozapine, olanzapine > quetiapine, risperidone > aripiprazole, ziprasidone). Monitor weight at every visit, fasting glucose and lipids at baseline, 3 months, and annually.' }
    ],
    incorrect: [
      { id: 'force-risperidone', name: 'Restart risperidone — it worked for his psychosis', rationale: 'Patient stopped risperidone due to galactorrhea (side effect driven by prolactin elevation from D2 blockade). Restarting the same medication without addressing the side effect will result in the same non-adherence. Switch to a prolactin-sparing agent.' },
      { id: 'antidepressant-schiz', name: 'Start sertraline for flat affect and social withdrawal', rationale: 'Negative symptoms of schizophrenia (flat affect, avolition, anhedonia, alogia, asociality) are NOT depression and do not respond to antidepressants. The primary treatment is antipsychotic medication + psychosocial rehabilitation. SSRIs are not first-line for negative symptoms.' }
    ]
  },
  teachingPoints: {
    keyLearning: [
      'Schizophrenia diagnosis (DSM-5): ≥2 of 5 symptoms (delusions, hallucinations, disorganized speech, disorganized/catatonic behavior, negative symptoms) for ≥1 month + functional decline + total duration ≥6 months. At least 1 must be delusions, hallucinations, or disorganized speech.',
      'Antipsychotic side effects determine adherence: EPS (haloperidol, high-potency typicals), hyperprolactinemia (risperidone, haloperidol), metabolic syndrome (clozapine, olanzapine), QTc prolongation (ziprasidone, haloperidol), weight gain (olanzapine, clozapine).',
      'Long-acting injectables dramatically improve adherence and reduce relapse. Discuss proactively with all patients — not just as punishment for non-adherence.',
      'Clozapine: only antipsychotic proven for treatment-resistant schizophrenia (2+ failed antipsychotics). REQUIRES weekly WBC monitoring (agranulocytosis risk 1%). Also effective for suicidality and violence.'
    ],
    boardPearls: [
      'NMS (neuroleptic malignant syndrome): hyperthermia + rigidity + autonomic instability + elevated CK + encephalopathy — from any dopamine antagonist. Treatment: stop antipsychotic, dantrolene (muscle relaxation), bromocriptine/amantadine (dopamine agonism), supportive ICU care.',
      'Tardive dyskinesia: involuntary orofacial/limb movements from chronic D2 blockade. Risk with all typical antipsychotics, lower with atypicals. Treatment: VMAT2 inhibitors (valbenazine, deutetrabenazine — FDA approved).',
      'First-episode psychosis workup: MRI brain, EEG, ANA, TSH, B12, RPR, HIV, urine toxicology — exclude organic causes before diagnosing schizophrenia.',
      'Schizoaffective disorder: schizophrenia symptoms + major mood episode (depression or mania). Must have psychotic symptoms during periods WITHOUT mood episode.'
    ]
  },
  references: [{ id: 'StatPearls-Schizophrenia', title: 'Schizophrenia', journal: 'StatPearls', year: 2024, url: 'https://www.ncbi.nlm.nih.gov/books/NBK539864/', openAccess: true }]
};
