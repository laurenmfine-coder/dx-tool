// Virtual EMR Case: DVT with Phlegmasia Cerulea Dolens
// Variant: dvt-with-phlegmasia | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Carmen Delgado-Ruiz",
  "patientHPI": "My left leg has been getting more and more swollen and painful over the past few days, and now it's turned this scary dark blue color. The pain is unbearable and my whole leg feels tight and heavy - I can barely move it.",
    "dob": "05/22/1966",
    "age": 59,
    "sex": "Female",
    "mrn": "RDX-2025-41234",
    "pronouns": "She/Her",
    "insurance": "Humana Gold Plus (Medicare Advantage)",
    "pcp": "Dr. Patricia Morales, MD",
    "pharmacy": "Walgreens — 2701 Stirling Rd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Puerto Rican)",
    "address": "5453 Hickory Rd, Indianapolis, IN 46203",
    "phone": "(954) 555-4412",
    "email": "c.delgado66@email.com",
    "emergencyContact": {
      "name": "Roberto Ruiz (Husband)",
      "phone": "(954) 555-4428"
    }
  },
  "problems": [
    {
      "problem": "Pancreatic Adenocarcinoma — Stage III",
      "icd": "C25.9",
      "onset": "2025",
      "status": "Active",
      "notes": "Diagnosed 09/2025; locally advanced unresectable; on FOLFIRINOX (started 10/2025); last cycle 02/2026; CA 19-9 declining from 842 to 380; ECOG 1"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2018",
      "status": "Active",
      "notes": "New onset preceded cancer diagnosis by 7 months — likely paraneoplastic/pancreatic insufficiency; on metformin + glipizide; A1c 7.8"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2012",
      "status": "Active",
      "notes": "On losartan; generally controlled"
    },
    {
      "problem": "Chemotherapy-Induced Nausea",
      "icd": "R11.0",
      "onset": "2025",
      "status": "Active",
      "notes": "Managed with ondansetron + dexamethasone pre-chemo"
    },
    {
      "problem": "Port-A-Cath — Right Subclavian",
      "icd": "Z95.828",
      "onset": "2025",
      "status": "Active",
      "notes": "Placed 10/2025 for FOLFIRINOX; accessed for chemo cycles; flushed monthly"
    }
  ],
  "medications": [
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Morales",
      "start": "04/2018",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Glipizide 5mg daily",
      "sig": "Take 1 tablet by mouth once daily before breakfast",
      "prescriber": "Dr. Morales",
      "start": "01/2025",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Losartan 50mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Morales",
      "start": "08/2013",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Ondansetron 8mg PRN",
      "sig": "Take 1 tablet by mouth every 8 hours as needed for nausea",
      "prescriber": "Dr. Garcia (Oncology)",
      "start": "10/2025",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Pancrelipase (Creon) 36,000 units TID",
      "sig": "Take 1 capsule by mouth with each meal",
      "prescriber": "Dr. Garcia (Oncology)",
      "start": "11/2025",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Dexamethasone 4mg (chemo days only)",
      "sig": "Take 1 tablet by mouth on morning of and day after chemotherapy",
      "prescriber": "Dr. Garcia (Oncology)",
      "start": "10/2025",
      "refills": 2,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Morphine",
      "type": "Drug",
      "reaction": "Severe pruritus and urticaria",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Iodinated Contrast",
      "type": "Drug",
      "reaction": "Nausea, flushing (mild reaction during staging CT — premedication protocol used subsequently)",
      "severity": "Mild",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/24/2026",
      "bp": "96/58",
      "hr": 118,
      "rr": 22,
      "temp": "99.8°F",
      "spo2": "94%",
      "wt": "138 lbs",
      "ht": "5'4\"",
      "bmi": 23.7,
      "setting": "ED"
    },
    {
      "date": "02/04/2026",
      "bp": "118/74",
      "hr": 82,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "142 lbs",
      "ht": "5'4\"",
      "bmi": 24.4,
      "setting": "Oncology Infusion Center"
    },
    {
      "date": "11/18/2025",
      "bp": "122/76",
      "hr": 78,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "146 lbs",
      "ht": "5'4\"",
      "bmi": 25.1,
      "setting": "Oncology Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/04/2026",
      "type": "Specialist",
      "provider": "Dr. Alejandro Garcia, MD (Medical Oncology)",
      "cc": "Cycle 8 FOLFIRINOX — pre-chemo evaluation",
      "hpi": "59F with Stage III pancreatic adenocarcinoma on FOLFIRINOX presents for cycle 8 pre-chemo evaluation. CA 19-9 declined from 842 to 380 — partial response. Tolerating chemo with grade 2 nausea managed with ondansetron. Reports fatigue (ECOG 1). Weight down 4 lbs from prior cycle — attributed to decreased appetite. Denies neuropathy, diarrhea, or mucositis. Port site clean, no signs of infection.",
      "exam": "Thin but NAD. CV: RRR. Lungs: CTAB. Abdomen: Soft, mild epigastric tenderness (baseline). Port: R subclavian, no erythema/discharge, good blood return. Ext: No edema, no calf tenderness. Skin: No rash.",
      "assessment": "1. Pancreatic cancer — partial response to FOLFIRINOX; CA 19-9 declining\n2. Chemotherapy-related fatigue — grade 1\n3. Weight loss — ongoing, multifactorial",
      "plan": "1. Proceed with cycle 8 FOLFIRINOX\n2. Restaging CT abdomen/pelvis after cycle 10\n3. Nutritional counseling; increase Creon if steatorrhea\n4. Labs: CBC, CMP, CA 19-9\n5. VTE prophylaxis discussed — patient declined LMWH due to injection burden; monitored clinically"
    },
    {
      "id": "V002",
      "date": "09/22/2025",
      "type": "Specialist",
      "provider": "Dr. Alejandro Garcia, MD (Medical Oncology)",
      "cc": "New diagnosis pancreatic cancer — treatment planning",
      "hpi": "59F referred from GI after EUS-guided FNA confirmed pancreatic adenocarcinoma (body/tail). Staging CT shows locally advanced tumor with SMA involvement — unresectable. No distant metastases. CA 19-9: 842. Reports 15 lb weight loss over 3 months, epigastric pain radiating to back, new-onset diabetes. ECOG 0.",
      "exam": "NAD, thin. Abdomen: Mild epigastric tenderness, no masses palpable. No hepatomegaly. No ascites. Ext: No edema.",
      "assessment": "1. Pancreatic adenocarcinoma, locally advanced (Stage III) — unresectable",
      "plan": "1. FOLFIRINOX chemotherapy — port placement scheduled\n2. Genetic counseling ordered (BRCA, Lynch)\n3. Palliative care referral\n4. Start pancrelipase for exocrine insufficiency\n5. Baseline labs, echocardiogram"
    }
  ],
  "labs": [
    {
      "date": "02/04/2026",
      "time": "08:30",
      "orderedBy": "Dr. Garcia",
      "collected": "02/04/2026 08:45",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-020444",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (8 hrs)",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "5.2", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "10.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "33.2", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelets", "value": "312", "unit": "K/uL", "range": "150-400", "flag": "" },
            { "test": "ANC", "value": "3.8", "unit": "K/uL", "range": ">1.5", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "148", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "16", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "3.8", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "ALT", "value": "34", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "30", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Albumin", "value": "3.2", "unit": "g/dL", "range": "3.5-5.5", "flag": "L" }
          ]
        },
        {
          "name": "TUMOR MARKER",
          "results": [
            { "test": "CA 19-9", "value": "380", "unit": "U/mL", "range": "<37", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "11/18/2025",
      "study": "CT ABDOMEN/PELVIS WITH CONTRAST",
      "accession": "IMG-2025-111840",
      "status": "FINAL",
      "orderedBy": "Dr. Garcia",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "Pancreatic adenocarcinoma — restaging after 4 cycles FOLFIRINOX",
      "technique": "CT abdomen and pelvis with IV contrast (premedication protocol for prior mild contrast reaction).",
      "findings": "Pancreas: Previously identified body/tail mass now measures 3.8 x 3.2 cm (previously 4.6 x 4.0 cm) — partial response. Tumor continues to abut the SMA (~180° encasement) — unresectable by Ahuja criteria. Splenic vein occluded (unchanged) with perigastric varices.\n\nLiver: No hepatic metastases.\n\nLymph nodes: Peripancreatic nodes decreased in size. No retroperitoneal lymphadenopathy.\n\nAscites: Trace free fluid in pelvis (new — may be physiologic vs early peritoneal disease).\n\nOther: Bilateral kidneys normal. No bone lesions.",
      "impression": "1. Partial response — pancreatic body/tail mass decreased from 4.6 to 3.8 cm.\n2. Persistent SMA encasement — remains unresectable.\n3. New trace pelvic free fluid — recommend correlation.\n4. No hepatic metastases.",
      "dictated": "11/18/2025 15:00",
      "verified": "11/18/2025 17:30"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-8622", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "09/2025", "site": "Right deltoid IM", "lot": "CV25-1504", "mfr": "Moderna" },
    { "vaccine": "Tdap", "date": "06/2021", "site": "Left deltoid IM", "lot": "TD21-344", "mfr": "GSK" },
    { "vaccine": "Shingrix (1/2)", "date": "03/2024", "site": "Right deltoid IM", "lot": "SX24-180", "mfr": "GSK" },
    { "vaccine": "Shingrix (2/2)", "date": "05/2024", "site": "Right deltoid IM", "lot": "SX24-308", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Father: Colorectal cancer at age 68, deceased at 72",
    "Mother: T2DM, HTN, alive at 84",
    "Sister: Breast cancer at age 52 (BRCA2 positive), alive at 56",
    "Brother: Healthy, alive at 62"
  ],
  "socialHistory": [
    ["Occupation", "Middle school teacher (math) — on medical leave since 10/2025 for chemotherapy"],
    ["Marital", "Married 32 years; 2 adult children (ages 28 and 30)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Former social drinker — stopped at cancer diagnosis"],
    ["Drugs", "Denies"],
    ["Exercise", "Walks 20 minutes daily when feeling well; reduced activity on chemo weeks"],
    ["Housing", "Single-family home with husband; adult children live nearby and visit frequently"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "Living will and DPOA completed at cancer diagnosis; Full code currently; palliative care involved"]
  ],
  "meta": {
    "caseId": "dvt-with-phlegmasia",
    "diagnosis": "Phlegmasia Cerulea Dolens — Massive Iliofemoral DVT (Left Leg) in Trousseau Syndrome (Pancreatic Cancer-Associated VTE, Status Post Declined Prophylaxis)",
    "acuity": 1,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "vascular"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Carmen Delgado-Ruiz appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did skin / soft tissue emergency start?",
        "Can you describe exactly how it started \u2014 sudden or gradual?",
        "Where is the problem located? Does it spread anywhere?",
        "How would you rate the severity on a scale of 1 to 10?",
        "What makes it worse? What makes it better?",
        "Do you have any other symptoms along with this?",
        "Have you had anything like this before?",
        "Tell me about your medical history \u2014 any chronic conditions?",
        "What medications are you currently taking?",
        "Do you have any allergies to medications?",
        "Tell me about your family medical history.",
        "Tell me about your lifestyle \u2014 work, tobacco, alcohol, substances."
    ],
    "patientResponses": {
        "default": "She pauses and thinks for a moment. 'I'm not sure exactly \u2014 can you be more specific?'",
        "onset": "'The symptoms started My left leg has been getting more and more swollen and painful over the past few.'",
        "character": "'It's skin / soft tissue emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Metformin 500mg BID; Glipizide 5mg daily; Losartan 50mg daily; Ondansetron 8mg PRN; Pancrelipase (Creon) 36,000 units TID; Dexamethasone 4mg (chemo days only).'",
        "allergies": "'My allergies are Morphine, Iodinated Contrast.'",
        "family": "Father: Colorectal cancer at age 68, deceased at 72  Mother: T2DM, HTN, alive at 84  Sister: Breast cancer at age 52 (BRCA2 positive), alive at 56",
        "social": "Occupation: Middle school teacher (math) \u2014 on medical leave since 10/2025 for chemotherapy  Marital: Married 32 years; 2 adult children (ages 28 and 30)  Tobacco: Never smoker  Alcohol: Former social drinker \u2014 stopped at cancer diagnosis  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance and level of distress",
        "Vital signs review",
        "Cardiovascular auscultation",
        "Pulmonary auscultation",
        "Abdominal examination",
        "Extremity assessment",
        "Skin examination",
        "Targeted system examination"
    ],
    "examFindings": {
        "General appearance and level of distress": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
        "Vital signs review": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
        "Pulmonary auscultation": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
        "Abdominal examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
        "Extremity assessment": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
        "Skin examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe.",
        "Targeted system examination": "Clinical finding consistent with Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT. Document specifically what you observe."
    },
    "ddxTargets": [
        "Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Carmen Delgado-Ruiz's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Phlegmasia Cerulea Dolens \u2014 Massive Iliofemoral DVT (Left Leg) in Trousseau Syndrome (Pancreatic Cancer-Associated VTE, Status Post Declined Prophylaxis). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
