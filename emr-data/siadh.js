// Virtual EMR Case: SIADH (Drug-Induced — Sertraline + HCTZ)
// Variant: siadh | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Beverly Coleman",
    "patientHPI": "Ever since I retired a few months ago, I just can't shake this overwhelming sadness and I don't enjoy anything anymore. I barely want to leave my house or see anyone, and my daughter is worried because I'm not eating much and can't sleep through the night.",
    "dob": "11/03/1957",
    "age": 67,
    "sex": "Female",
    "mrn": "RDX-2025-92184",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + BlueCross Supplement",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "CVS Pharmacy — 4501 S University Dr, Riverside, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "1269 Juniper Dr, Albuquerque, NM 87111",
    "phone": "(954) 555-7842",
    "email": "b.coleman57@email.com",
    "emergencyContact": {
      "name": "Denise Coleman (Daughter)",
      "phone": "(954) 555-7848"
    },
    "chiefComplaint": "New confusion and fatigue"
  },
  "problems": [
    {
      "problem": "Major Depressive Disorder — Recurrent",
      "icd": "F33.1",
      "onset": "2018",
      "status": "Active",
      "notes": "On sertraline 150mg; dose increased from 100mg 6 weeks ago due to worsening symptoms after retirement"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "On HCTZ 25mg + lisinopril 20mg"
    },
    {
      "problem": "Osteoporosis",
      "icd": "M81.0",
      "onset": "2019",
      "status": "Active",
      "notes": "On alendronate"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 150mg daily",
      "sig": "Take 1 tablet by mouth daily (INCREASED from 100mg to 150mg 6 weeks ago)",
      "prescriber": "Dr. Adams",
      "start": "01/2025 (dose increase)",
      "refills": 3,
      "status": "Active — RECENTLY INCREASED"
    },
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Adams",
      "start": "03/2010",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "06/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Alendronate 70mg weekly",
      "sig": "Take 1 tablet by mouth once weekly on empty stomach",
      "prescriber": "Dr. Adams",
      "start": "08/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Calcium 600mg + Vitamin D 800 IU daily",
      "sig": "Take 1 tablet by mouth daily with food",
      "prescriber": "Dr. Adams",
      "start": "08/2019",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Fluoxetine",
      "type": "Drug",
      "reaction": "Severe agitation and insomnia",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "118/72",
      "hr": 78,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "148 lbs",
      "ht": "5'4\"",
      "bmi": 25.4,
      "setting": "ED"
    },
    {
      "date": "01/08/2025",
      "bp": "134/82",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "146 lbs",
      "ht": "5'4\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Worsening depression since retirement, medication adjustment",
      "hpi": "67-year-old female with MDD presenting with worsening depressive symptoms since retiring 3 months ago. Low mood, anhedonia, poor sleep, decreased appetite, social withdrawal. Daughter reports she 'barely leaves the house.' Current sertraline 100mg not providing adequate relief. No suicidal ideation. No psychotic features.",
      "exam": "General: Appears fatigued, tearful at times. CV: RRR. Lungs: CTA. Neuro: A&O x3, psychomotor slowing noted. Psych: Depressed mood, restricted affect, no SI/HI.",
      "assessment": "1. MDD — worsening, partial response to sertraline 100mg\n2. Hypertension — controlled\n3. NOTE: Patient on SSRI + HCTZ — both associated with hyponatremia risk; Na should be checked after dose increase",
      "plan": "1. Increase sertraline from 100mg to 150mg daily\n2. CMP with sodium in 2-4 weeks after dose change — ORDER PLACED\n3. Therapy referral\n4. Safety planning — daughter involved\n5. RTC 4 weeks — PATIENT DID NOT GET LABS OR RETURN"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "11:42",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "collected": "02/27/2025 11:25",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-112218",
      "status": "Final",
      "specimenType": "Serum, Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "8",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.7",
              "unit": "mg/dL",
              "range": "0.6-1.1",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "121",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": "L"
            },
            {
              "test": "Potassium",
              "value": "3.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "90",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": "L"
            },
            {
              "test": "CO2 (Bicarbonate)",
              "value": "24",
              "unit": "mEq/L",
              "range": "23-29",
              "flag": ""
            },
            {
              "test": "Uric Acid",
              "value": "2.8",
              "unit": "mg/dL",
              "range": "2.5-7.0",
              "flag": ""
            }
          ]
        },
        {
          "name": "SERUM AND URINE OSMOLALITY",
          "results": [
            {
              "test": "Serum Osmolality",
              "value": "254",
              "unit": "mOsm/kg",
              "range": "275-295",
              "flag": "L"
            },
            {
              "test": "Urine Osmolality",
              "value": "520",
              "unit": "mOsm/kg",
              "range": "300-900",
              "flag": ""
            },
            {
              "test": "Urine Sodium",
              "value": "82",
              "unit": "mEq/L",
              "range": "20-200",
              "flag": ""
            }
          ]
        },
        {
          "name": "THYROID AND CORTISOL",
          "results": [
            {
              "test": "TSH",
              "value": "2.4",
              "unit": "mIU/L",
              "range": "0.5-4.5",
              "flag": ""
            },
            {
              "test": "AM Cortisol",
              "value": "12.8",
              "unit": "µg/dL",
              "range": "6.0-18.0",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/27/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-11182",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "67-year-old with confusion, gait instability, Na 121",
      "technique": "Non-contrast axial CT head.",
      "findings": "BRAIN: No acute hemorrhage, mass, or infarction. Age-appropriate volume loss. No cerebral edema.\n\nVENTRICLES: Normal.\n\nOTHER: No fracture.",
      "impression": "1. No acute intracranial pathology",
      "dictated": "02/27/2025 12:00",
      "verified": "02/27/2025 12:08"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Fluarix Quadrivalent)",
      "date": "10/2024",
      "site": "Left deltoid IM",
      "lot": "FL921P",
      "mfr": "GSK"
    },
    {
      "vaccine": "COVID-19 (Pfizer, updated)",
      "date": "10/2024",
      "site": "Right deltoid IM",
      "lot": "PF522K",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2nd dose)",
      "date": "03/2022",
      "site": "Left deltoid IM",
      "lot": "SH208R",
      "mfr": "GSK"
    },
    {
      "vaccine": "Pneumococcal (PCV20)",
      "date": "11/2023",
      "site": "Left deltoid IM",
      "lot": "PV312T",
      "mfr": "Pfizer"
    }
  ],
  "familyHistory": [
    "Mother: Deceased at 82 — stroke, hypertension",
    "Father: Deceased at 75 — prostate cancer",
    "Sister (age 64): Depression, hypertension",
    "Daughter (age 42): Healthy"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Recently retired — former school counselor (32 years); struggling with transition"
    ],
    [
      "Marital",
      "Divorced x 15 years; lives alone; daughter visits weekly"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare — occasional wine"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Exercise",
      "Walking 20 min/day — decreased since depression worsened"
    ],
    [
      "Housing",
      "Condo; lives alone; daughter has key"
    ],
    [
      "Safety",
      "No firearms; no SI currently; daughter checks on her regularly"
    ],
    [
      "Advance Directive",
      "Healthcare proxy: Denise Coleman (daughter)"
    ]
  ],
  "meta": {
    "caseId": "siadh",
    "diagnosis": "SIADH — Drug-Induced (Sertraline + HCTZ) with Symptomatic Hyponatremia",
    "acuity": 3,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "endocrine"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Beverly appears mildly confused and speaks slowly, occasionally losing her train of thought mid-sentence. She seems somewhat withdrawn and flat in affect, expressing concern about her cognitive changes but attributing them to depression. She is cooperative but requires gentle redirection when she becomes unfocused during questioning.",
    "interviewQuestions": [
      "Can you describe the confusion you've been experiencing?",
      "When did you first notice these changes in your thinking?",
      "Have you had any changes to your medications recently?",
      "Are you having any nausea, vomiting, or headaches?",
      "Have you noticed any muscle cramps or weakness?",
      "How has your appetite and fluid intake been?",
      "Any changes in urination or thirst?",
      "Have you had any seizures or fainting episodes?",
      "Tell me about your depression - has it gotten worse lately?",
      "What medications are you currently taking?",
      "Do you have any medication allergies?",
      "Have you been taking any over-the-counter medications or supplements?",
      "Any family history of similar symptoms or metabolic disorders?"
    ],
    "patientResponses": {
      "default": "I'm sorry, I'm having trouble focusing today. Could you repeat that question?",
      "onset": "The confusion started about 2-3 weeks ago, maybe a little longer. At first I thought it was just the depression getting worse, but my daughter noticed I was repeating myself and seemed foggy.",
      "character": "It's like my brain is in a fog. I'll start to say something and forget what I was talking about. I feel mentally slow and sometimes dizzy when I stand up.",
      "location": "It's just overall mental cloudiness, not really localized anywhere. Sometimes I get a dull headache.",
      "severity": "Maybe a 6 out of 10 for how much it's affecting me. I can't concentrate to read or even follow TV shows like I used to. My daughter had to help me pay bills last week.",
      "aggravating": "It seems worse in the mornings, and when I try to do anything that requires concentration. Standing up quickly makes me feel lightheaded.",
      "relieving": "Sitting quietly helps a little, but nothing really makes the mental fog go away completely.",
      "associated": "I've been more tired than usual, and I've had some nausea on and off. My appetite has been poor, and I've felt a bit queasy, especially in the mornings.",
      "denies": "No seizures, no severe headaches, no vision changes, no chest pain or shortness of breath. No recent falls, though I have felt unsteady a few times.",
      "history": "I've never had confusion like this before. The depression, yes, but my mind was always sharp even when I was sad.",
      "medications": "Sertraline 150mg daily; Hydrochlorothiazide 25mg daily; Lisinopril 20mg daily; Alendronate 70mg weekly; Calcium 600mg + Vitamin D 800 IU daily",
      "allergies": "Fluoxetine",
      "family": "My mother had a stroke when she was older, and both my mother and sister have high blood pressure. My sister also deals with depression like me.",
      "social": "I just retired from being a school counselor after 32 years. I've been divorced for 15 years and live alone, though my daughter checks on me weekly. I don't smoke and rarely drink alcohol."
    },
    "examManeuvers": [
      "Mental status examination",
      "Orthostatic vital signs",
      "Neurological examination including reflexes",
      "Assessment of volume status",
      "Skin turgor and mucous membranes",
      "Cardiovascular examination",
      "Abdominal examination",
      "Extremity examination for edema",
      "Gait assessment",
      "Cranial nerve examination"
    ],
    "examFindings": {
      "Mental status examination": "Mild cognitive impairment with delayed recall, difficulty with concentration, oriented to person and place but unsure of exact date",
      "Orthostatic vital signs": "Mild orthostatic changes: lying 118/72 HR 78, standing 108/68 HR 88",
      "Neurological examination including reflexes": "Reflexes are diminished but symmetric, no focal neurological deficits, mild psychomotor slowing",
      "Assessment of volume status": "Euvolemic appearance, no obvious volume depletion or overload",
      "Skin turgor and mucous membranes": "Normal skin turgor, moist mucous membranes",
      "Cardiovascular examination": "Regular rate and rhythm, no murmurs, rubs, or gallops",
      "Abdominal examination": "Soft, non-tender, no organomegaly or masses",
      "Extremity examination for edema": "No peripheral edema, pulses intact",
      "Gait assessment": "Slightly unsteady gait, walks cautiously",
      "Cranial nerve examination": "Cranial nerves II-XII grossly intact"
    },
    "ddxTargets": [
      "SIADH — Drug-Induced (Sertraline Dose Increase + HCTZ Synergy) with Symptomatic Hyponatremia (Na 121) (correct diagnosis)",
      "Major Depressive Episode with Pseudodementia",
      "Medication-Induced Cognitive Impairment",
      "Cerebrovascular Accident or TIA",
      "Electrolyte Imbalance (Hyponatremia from other causes)",
      "Early-Onset Dementia or Mild Cognitive Impairment",
      "Thyroid Dysfunction"
    ],
    "biasFlags": {
      "anchoring": "Risk of anchoring on depression as the primary cause of cognitive symptoms, especially given recent retirement stressors and psychiatric history",
      "prematureClosure": "May stop investigating after attributing confusion to worsening depression without considering metabolic causes or drug interactions",
      "availabilityBias": "Recent cases of depression or dementia may overshadow consideration of drug-induced SIADH, particularly the synergistic effect of sertraline and HCTZ"
    },
    "coachPrompts": {
      "phase2": "Interesting differential diagnosis list. I notice you're considering both psychiatric and medical causes for her confusion. Given her medication list and the timing of symptoms, what specific drug-related causes should we be thinking about? How might her antidepressant and diuretic interact metabolically?",
      "phase5": "Good work on the history and physical. You've identified a euvolemic patient with cognitive impairment and some orthostatic changes. Given the constellation of confusion, nausea, and her current medications, what specific laboratory abnormality are you most concerned about? How do sertraline and hydrochlorothiazide potentially work together to cause problems?",
      "finalDebrief": "This case demonstrates how drug-induced SIADH can present subtly with cognitive symptoms that mimic psychiatric conditions. The key was recognizing that sertraline (especially at higher doses) and HCTZ have synergistic effects on ADH, leading to hyponatremia. How did your differential diagnosis evolve as you gathered more information? What clinical clues helped distinguish this from primary psychiatric illness?",
      "final": "Diagnosis: syndrome of inappropriate antidiuretic hormone secretion (SIADH), drug-induced from sertraline plus HCTZ, with symptomatic hyponatremia (Na 121). Key learning: (1) Hyponatremia evaluation starts with serum osmolality to identify tonicity, then volume status to narrow the differential. Hypotonic hyponatremia (serum osm <275 mOsm/kg) — the most common — is further divided into hypovolemic (true volume depletion — GI losses, diuretics, cerebral salt wasting, adrenal insufficiency), euvolemic (SIADH, hypothyroidism, glucocorticoid deficiency, psychogenic polydipsia, beer potomania, 'tea and toast' diet), and hypervolemic (heart failure, cirrhosis, nephrotic syndrome, CKD). Isotonic hyponatremia (pseudohyponatremia from hyperlipidemia or hyperproteinemia) and hypertonic hyponatremia (hyperglycemia, mannitol) must be ruled out. (2) SIADH diagnostic criteria: euvolemia, hypotonic hyponatremia (serum osm <275), inappropriately concentrated urine (urine osm >100), urine sodium >20-30 mmol/L (reflecting intact tubular sodium handling), normal thyroid and adrenal function, and absence of diuretic use. The classic fingerprint: low serum osm with inappropriately high urine osm. (3) SIADH causes are organized into four categories: (a) CNS — stroke, hemorrhage, trauma, infection, tumor, surgery, psychosis. (b) Pulmonary — pneumonia (especially Legionella, Mycoplasma, TB), abscess, malignancy (especially small cell lung cancer — ectopic ADH production), positive pressure ventilation. (c) Drugs — SSRIs (the most common drug cause; sertraline, fluoxetine, citalopram, escitalopram, venlafaxine), carbamazepine and oxcarbazepine, chlorpropamide, ecstasy (MDMA), cyclophosphamide, vincristine, opioids, NSAIDs. HCTZ is NOT classic SIADH but can cause hyponatremia by a similar mechanism (impaired free water excretion plus hypovolemia-stimulated ADH). (d) Malignancy (ectopic ADH production) — small cell lung cancer, head and neck cancer, others. (4) Management depends on severity and acuity. (a) Severe symptomatic hyponatremia (seizures, obtundation, coma, respiratory failure) — hypertonic 3% saline 100-150 mL IV bolus, repeat up to 3 times, targeting 4-6 mEq/L rise in first 4-6 hours to reverse symptoms. (b) Chronic or less severe — fluid restriction (usually <1 L/day) as first-line, often sufficient. (c) Address the cause: stop offending drug when possible (sertraline and HCTZ in this case; coordinate with psychiatry for depression continuation), treat underlying infection/malignancy, correct hormone deficiency. (d) Pharmacologic adjuncts when fluid restriction inadequate: salt tablets (supplement sodium), urea (promotes free water excretion), loop diuretics (in SIADH specifically when urine osm very high), vasopressin antagonists (tolvaptan, conivaptan — effective but expensive, black box for overly rapid correction; reserved for selected cases). (5) Correction rate is critical. Sodium correction should NOT exceed 8-10 mEq/L in the first 24 hours (6 in high-risk patients for ODS — chronic hyponatremia, alcohol use disorder, malnutrition, hypokalemia, advanced liver disease). Overly rapid correction causes osmotic demyelination syndrome (ODS), a devastating, often irreversible neurologic injury presenting 2-7 days later with quadriparesis, dysphagia, dysarthria, locked-in syndrome. Recheck sodium every 2 hours during active correction; if overcorrection occurs, reverse with D5W or DDAVP. Classic pitfalls: (a) correcting too rapidly, causing ODS. (b) Giving normal saline to SIADH patient and causing paradoxical worsening — in SIADH, the kidneys excrete the sodium but retain the free water. (c) Missing underlying malignancy (SCLC) in a patient with new SIADH — chest imaging is appropriate. (d) Stopping antidepressant abruptly without plan — work with psychiatry to transition to alternative (mirtazapine has lower hyponatremia risk). (e) Not counseling about sick-day rules for diuretic users — vomiting, diarrhea, decreased intake may require holding diuretic."
    }
  }
};
