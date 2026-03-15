/* emr-data/acute-psychosis.js
   First-Episode Psychosis — Medical Workup and Safety Assessment
   Category: psychiatric | Acuity: ESI-2
   Settings: ED, Floor
*/
window.EMR_DATA = {
  "base": {
    "patient": {
      "name": "Tyler Okonkwo",
      "patientHPI": "Patient brought by police after neighbors called about him screaming that the government was drilling into his head. He is speaking in fragments and says 'they're watching through the walls. I can hear them planning.' He is refusing to answer questions and standing in the corner facing the wall.",
      "dob": "08/14/2001", "age": "24", "sex": "Male", "pronouns": "he/him",
      "mrn": "MRN-445078", "language": "English", "race": "Black/African American",
      "phone": "(718) 555-5078", "email": "",
      "address": "1224 Flatbush Ave, Brooklyn, NY 11226",
      "insurance": "Medicaid", "pcp": "None",
      "pharmacy": "Duane Reade — Flatbush",
      "emergencyContact": { "name": "Grace Okonkwo", "phone": "(718) 555-3310", "relationship": "Mother" }
    },
    "allergies": [{ "allergen": "Unknown — unable to obtain history", "reaction": "", "severity": "", "type": "" }],
    "immunizations": [{ "name": "Unknown — no records", "date": "", "lot": "", "site": "" }],
    "familyHistory": ["Mother reports: uncle with schizophrenia on maternal side — 'he had a breakdown in his 20s'"],
    "socialHistory": [
      ["Baseline", "Mother states: was normal last year — college student (dropped out 6 months ago), became increasingly withdrawn, stopped calling family"],
      ["Prodrome", "Mother reports 6 months of social withdrawal, neglecting hygiene, talking to himself, paranoid comments ('the neighbors are spying on me')"],
      ["Substances", "Cannabis daily x4 years. Denies other drugs — urine tox pending."],
      ["Living", "Lives alone in apartment — mother had not seen him in 3 weeks"],
      ["Work/school", "Dropped out of college 6 months ago — previously good student"]
    ]
  },
  "encounters": {
    "ed": {
      "patient": {
        "chiefComplaint": "24M, first-episode psychosis — paranoid delusions, auditory hallucinations, disorganized speech — MEDICAL WORKUP to exclude organic cause MANDATORY before psychiatric diagnosis",
        "diagnosis": "First-Episode Psychosis — Schizophrenia (DSM-5 criteria met) — Organic Causes Excluded"
      },
      "problems": [
        { "id": "prob-1", "description": "First-episode psychosis — positive symptoms: paranoid delusions ('government drilling into head'), auditory hallucinations ('I can hear them'), disorganized speech. Negative symptoms: social withdrawal x6 months, flat affect, avolition. Duration >6 months (prodrome counted). DSM-5 schizophrenia criteria met after organic causes excluded.", "status": "Active", "onset": "Subacute", "icd10": "F20.9" },
        { "id": "prob-2", "description": "Safety assessment — not expressing suicidal ideation currently. Was brought involuntarily — lacks insight into illness. May require involuntary psychiatric hold (state criteria: danger to self, danger to others, or gravely disabled — patient is gravely disabled).", "status": "Active", "onset": "Acute", "icd10": "Z03.89" },
        { "id": "prob-3", "description": "Cannabis use disorder — daily use x4 years. Cannabis can exacerbate psychosis but 6-month prodrome and family history suggest primary psychotic disorder, not cannabis-induced psychosis alone.", "status": "Active", "onset": "Chronic", "icd10": "F12.20" },
        { "id": "prob-4", "description": "Organic causes EXCLUDED: normal metabolic panel, thyroid, CBC, HIV, RPR, urine tox (only cannabis), CT head normal, no fever.", "status": "Resolved", "onset": "Acute", "icd10": "Z03.89" }
      ],
      "medications": [
        { "id": "med-1", "name": "Olanzapine", "dose": "10mg", "route": "PO/IM", "frequency": "Once in ED — for acute agitation if escalates. IM if refusing PO.", "status": "PRN — use if agitated/dangerous", "prescriber": "Dr. Psychiatry Attending" },
        { "id": "med-2", "name": "Lorazepam", "dose": "2mg", "route": "IM", "frequency": "PRN adjunct to antipsychotic for acute agitation", "status": "PRN", "prescriber": "Dr. Psychiatry Attending" }
      ],
      "vitals": [{ "date": "03/15/2026", "time": "22:00", "bp": "138/84", "hr": "102", "rr": "18", "temp": "37.0°C", "spo2": "99%", "pain": "Unable to assess" }],
      "visits": [{
        "id": "visit-1", "type": "Emergency Psychiatric Evaluation", "date": "03/15/2026", "provider": "Dr. Attending + Psychiatry Consult",
        "cc": "First-episode psychosis — safety assessment and organic workup",
        "hpi": "24M brought by police, EMS activated after neighbor called about screaming. On arrival: standing in corner of room, mumbling, refusing to face physician, intermittently shouting about 'the government.' Mother contacted — provides collateral history of 6-month prodrome with withdrawal, self-neglect, paranoid statements.\n\nMENTAL STATUS EXAM:\n- Appearance: disheveled, poor hygiene, wearing layered clothes despite warm weather\n- Behavior: guarded, pacing, intermittent eye contact\n- Speech: disorganized, poverty of content, loosening of associations\n- Mood: 'they're watching me' (paranoid)\n- Affect: flat, incongruent\n- Thought process: disorganized, tangential, flight of ideas\n- Thought content: paranoid delusions (government surveillance, drilling), ideas of reference\n- Perceptions: auditory hallucinations present ('can hear them planning')\n- Cognition: unable to formally test due to lack of cooperation\n- Insight: NONE — no awareness of illness\n\nORGANIC CAUSES TO EXCLUDE BEFORE PSYCHIATRIC DIAGNOSIS:\n✓ Metabolic: glucose, Na, Ca, BUN/Cr — NORMAL\n✓ Thyroid: TSH — NORMAL\n✓ Infection: CBC, UA, RPR — NORMAL\n✓ Drugs: urine tox — cannabis only\n✓ CNS: CT head — no mass, no hemorrhage, no focal lesion\n✓ HIV: negative\n✓ Autoimmune encephalitis: consider anti-NMDA receptor Ab if not responding to antipsychotics (common mimicker in young adults)\n→ NO ORGANIC CAUSE FOUND — primary psychiatric diagnosis appropriate",
        "assessment": "First-episode psychosis — schizophrenia spectrum. Organic workup negative. Safety: gravely disabled — needs inpatient psychiatric admission. Goals: antipsychotic initiation, safety monitoring, family education, link to early psychosis intervention program.",
        "plan": "Involuntary psychiatric hold (gravely disabled — cannot care for self). Inpatient psychiatric admission. Start antipsychotic: risperidone 2mg daily (start low, titrate up — first episode responds to lower doses). Avoid olanzapine long-term (metabolic syndrome risk in young patients). Psychiatry inpatient admission. Anti-NMDA receptor antibody testing (rule out autoimmune encephalitis — treatable cause). Substance use counseling (cannabis cessation essential — worsens psychosis). Family education. Link to Early Psychosis Intervention (EPI) program on discharge — significantly improves long-term outcomes."
      }],
      "labs": [{
        "date": "03/15/2026", "time": "22:20", "status": "Final", "orderedBy": "Dr. Attending",
        "accession": "LAB-445078", "collected": "03/15/2026 22:15", "fasting": "Not fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood and Urine",
        "groups": [
          { "name": "ORGANIC PSYCHOSIS WORKUP", "results": [
            { "test": "Glucose", "value": "94", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Calcium", "value": "9.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "TSH", "value": "2.1", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" },
            { "test": "Creatinine", "value": "0.9", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "WBC", "value": "7.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "HIV-1/2 Ag/Ab", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "RPR", "value": "Non-reactive", "unit": "", "range": "Non-reactive", "flag": "" },
            { "test": "Ammonia", "value": "28", "unit": "µmol/L", "range": "15-45", "flag": "" }
          ]},
          { "name": "URINE TOXICOLOGY", "results": [
            { "test": "Cannabis (THC)", "value": "POSITIVE", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Cocaine", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Amphetamines", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Phencyclidine (PCP)", "value": "Negative", "unit": "", "range": "Negative", "flag": "" },
            { "test": "Opiates", "value": "Negative", "unit": "", "range": "Negative", "flag": "" }
          ]},
          { "name": "AUTOIMMUNE ENCEPHALITIS PANEL (PENDING)", "results": [
            { "test": "Anti-NMDA Receptor IgG (CSF/serum)", "value": "Pending — 5-7 days", "unit": "", "range": "Negative", "flag": "" }
          ]}
        ]
      }],
      "imaging": [
        { "id": "img-1", "type": "CT Head Without Contrast",
          "date": "03/15/2026", "time": "22:45", "orderedBy": "Dr. Attending",
          "findings": "No intracranial hemorrhage. No mass lesion. No midline shift. No acute ischemic changes. Ventricles normal size and configuration. No hydrocephalus.",
          "impression": "Normal CT head — no structural cause for psychosis identified. MRI brain would be more sensitive if autoimmune encephalitis suspected.", "critical": false }
      ]
    },
    "inpatient": {
      "patient": {
        "chiefComplaint": "Inpatient psychiatry day 3 — risperidone 2mg daily, agitation decreasing, beginning to engage",
        "diagnosis": "First-Episode Schizophrenia — Inpatient Stabilization — Risperidone"
      },
      "problems": [
        { "id": "prob-1", "description": "Schizophrenia — first episode, positive response to risperidone at day 3. Delusions less prominent. Auditory hallucinations decreased frequency. Able to eat and engage briefly with staff.", "status": "Improving", "onset": "Subacute", "icd10": "F20.9" },
        { "id": "prob-2", "description": "Anti-NMDA receptor antibody — NEGATIVE (resulted day 3). Primary psychiatric diagnosis confirmed.", "status": "Resolved", "onset": "Acute", "icd10": "Z03.89" },
        { "id": "prob-3", "description": "Cannabis cessation — counseled. Cannabis use strongly associated with psychosis onset and relapse. Abstinence essential for medication response.", "status": "Active", "onset": "Chronic", "icd10": "F12.20" }
      ],
      "medications": [
        { "id": "med-1", "name": "Risperidone", "dose": "2mg", "route": "PO", "frequency": "Daily — low dose first episode (first-episode psychosis very responsive)", "status": "Active", "prescriber": "Dr. Psychiatry Attending" },
        { "id": "med-2", "name": "Benztropine", "dose": "1mg", "route": "PO", "frequency": "BID PRN EPS (extrapyramidal symptoms from risperidone)", "status": "Active", "prescriber": "Dr. Psychiatry Attending" }
      ],
      "vitals": [{ "date": "03/17/2026", "time": "08:00", "bp": "118/76", "hr": "84", "rr": "16", "temp": "36.9°C", "spo2": "99%", "pain": "1/10" }],
      "visits": [{
        "id": "visit-2", "type": "Inpatient Psychiatry Progress Note", "date": "03/17/2026", "provider": "Dr. Psychiatry Attending",
        "cc": "Day 3 — first-episode psychosis — partial response to risperidone",
        "hpi": "Meaningful improvement by day 3. Patient accepts meals, maintained room hygiene, allowed vital signs. Speech more organized — linear thought process emerging. Delusions less fixed — now says 'I know it sounds crazy, but I still feel like something is wrong.' Auditory hallucinations decreased to 1-2x/day from constant. Insight beginning to emerge (important prognostic sign).\n\nKEY TEACHING: First-episode psychosis prognosis:\n- 20% one episode, full recovery with treatment\n- 30% remission between episodes, some residual symptoms\n- 50% chronic course with ongoing symptoms\n- Best predictor of recovery: early treatment, duration of untreated psychosis (DUP), medication adherence, cannabis abstinence, social support\n\nAnti-NMDA receptor Ab NEGATIVE — confirms primary psychiatric diagnosis. Critical to exclude in young patients with rapid-onset psychosis (anti-NMDA encephalitis is treatable with immunotherapy).",
        "assessment": "Positive early response to risperidone. Discharge planning to Early Psychosis Intervention program. Long-acting injectable (LAI) antipsychotic discussion for adherence.",
        "plan": "Continue risperidone 2mg daily. Consider LAI (risperidone microspheres or paliperidone palmitate) if adherence concern — discuss with patient and family. Discharge to Early Psychosis Intervention program (EPI) — significantly improves long-term outcomes, provides case management, therapy, family education. Substance use treatment — cannabis cessation. Family psychoeducation. Follow-up psychiatry 1 week post-discharge."
      }],
      "labs": [{
        "date": "03/17/2026", "time": "06:00", "status": "Final", "orderedBy": "Dr. Psychiatry Attending",
        "accession": "LAB-445079", "collected": "03/17/2026 05:55", "fasting": "Fasting",
        "facility": "ReasonDx Medical Center", "specimenType": "Blood",
        "groups": [
          { "name": "ANTIPSYCHOTIC METABOLIC MONITORING", "results": [
            { "test": "Fasting Glucose", "value": "88", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "Fasting Lipids — LDL", "value": "108", "unit": "mg/dL", "range": "<100 ideal", "flag": "H" },
            { "test": "Prolactin", "value": "28", "unit": "ng/mL", "range": "2-18 (elevated — risperidone effect)", "flag": "H" },
            { "test": "Anti-NMDA IgG (RESULT)", "value": "NEGATIVE", "unit": "", "range": "Negative", "flag": "" }
          ]}
        ]
      }],
      "imaging": []
    }
  },
  "references": [
    { "id": "StatPearls-Schizophrenia", "title": "Schizophrenia", "authors": "Patel KR, Cherian J, Gohil K, Atkinson D", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK539864/", "openAccess": true, "validates": ["DSM-5 criteria", "Organic workup", "First-episode antipsychotic selection", "Anti-NMDA encephalitis differential", "Early Psychosis Intervention programs"] },
    { "id": "StatPearls-AntiNMDA", "title": "Anti-N-Methyl-D-Aspartate Receptor Encephalitis", "authors": "Dalmau J, Armangué T, Planagumà J, et al.", "journal": "StatPearls", "year": 2024, "doi": "", "url": "https://www.ncbi.nlm.nih.gov/books/NBK442013/", "openAccess": true, "validates": ["Anti-NMDA encephalitis as psychosis mimicker", "Testing indications", "Immunotherapy treatment"] }
  ]
};
