// Virtual EMR Case: Acute Hemolytic Transfusion Reaction
// Variant: acute-hemolytic-transfusion-reaction | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Gloria Fontaine",
  "patientHPI": "I came in for my regular blood transfusion yesterday and felt fine during it, but about six hours later I started feeling awful - really hot and cold at the same time, my back was killing me, and I felt like I was going to throw up. My urine this morning looked like dark tea, which really scared me.",
    "dob": "12/05/1958",
    "age": 66,
    "sex": "Female",
    "mrn": "RDX-2025-19483",
    "pronouns": "She/Her",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Eduardo Reyes, MD",
    "pharmacy": "CVS Pharmacy — 3001 N Federal Hwy, Fort Lauderdale, FL",
    "language": "English, Haitian Creole",
    "race": "Black/African American",
    "address": "8773 Peachtree Rd, Chicago, IL 60651",
    "phone": "(954) 555-4782",
    "email": "g.fontaine58@email.com",
    "emergencyContact": {
      "name": "Pierre Fontaine (Son)",
      "phone": "(954) 555-4801"
    }
  },
  "problems": [
    {
      "problem": "Myelodysplastic Syndrome — RCMD subtype",
      "icd": "D46.1",
      "onset": "2023",
      "status": "Active",
      "notes": "Diagnosed by bone marrow biopsy 03/2023; transfusion-dependent anemia; followed by hematology-oncology"
    },
    {
      "problem": "Chronic Anemia, Transfusion-Dependent",
      "icd": "D64.9",
      "onset": "2023",
      "status": "Active",
      "notes": "Requires pRBC transfusion every 2-3 weeks; baseline Hgb 7-8 g/dL"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "Well-controlled on amlodipine"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2014",
      "status": "Active",
      "notes": "A1c 7.2%; on metformin"
    },
    {
      "problem": "Iron Overload — Secondary (Transfusional)",
      "icd": "E83.10",
      "onset": "2024",
      "status": "Active",
      "notes": "Ferritin >1500; on deferasirox"
    },
    {
      "problem": "Red Cell Alloantibodies — anti-E, anti-Kell",
      "icd": "D59.8",
      "onset": "2024",
      "status": "Active",
      "notes": "Identified on antibody screen 06/2024; requires antigen-negative crossmatch-compatible blood"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Reyes",
      "start": "03/2011",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Metformin 500mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Reyes",
      "start": "08/2014",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Deferasirox 360mg daily",
      "sig": "Take tablets by mouth on empty stomach; at least 30 minutes before food",
      "prescriber": "Dr. Patel (Hematology)",
      "start": "02/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Folic Acid 1mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Patel (Hematology)",
      "start": "04/2023",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 650mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Reyes",
      "start": "01/2023",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Ibuprofen",
      "type": "Drug",
      "reaction": "GI bleeding (melena)",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "IV Contrast (Iodinated)",
      "type": "Drug",
      "reaction": "Urticaria, facial flushing",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/27/2025",
      "bp": "132/78",
      "hr": 96,
      "rr": 18,
      "temp": "98.8°F",
      "spo2": "96%",
      "wt": "158 lbs",
      "ht": "5'3\"",
      "bmi": 28.0,
      "setting": "ED"
    },
    {
      "date": "01/13/2025",
      "bp": "128/76",
      "hr": 92,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "157 lbs",
      "ht": "5'3\"",
      "bmi": 27.8,
      "setting": "ED"
    },
    {
      "date": "11/20/2024",
      "bp": "130/80",
      "hr": 88,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "97%",
      "wt": "160 lbs",
      "ht": "5'3\"",
      "bmi": 28.3,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/13/2025",
      "type": "ED",
      "provider": "Dr. Karen Okonkwo, MD",
      "cc": "Scheduled transfusion — symptomatic anemia",
      "hpi": "66-year-old female with MDS presents for scheduled pRBC transfusion. Reports progressive fatigue and exertional dyspnea over past 4 days. Pre-transfusion Hgb 6.8 g/dL. Known alloantibodies (anti-E, anti-Kell) — antigen-negative units ordered from blood bank. Transfusion completed without incident; post-transfusion Hgb 8.4 g/dL. Tolerated well, no febrile or allergic reactions.",
      "exam": "General: Fatigued-appearing female, pale conjunctivae. CV: Tachycardic, RRR, systolic flow murmur. Lungs: CTAB. Extremities: No edema.",
      "assessment": "1. MDS with symptomatic anemia — transfusion completed\n2. Known red cell alloantibodies — antigen-negative blood used\n3. Iron overload — ferritin trending up; continue deferasirox",
      "plan": "1. Post-transfusion monitoring x 2 hours — no reaction\n2. Recheck CBC in 2 weeks\n3. Next transfusion anticipated in 2-3 weeks\n4. Hematology follow-up 02/05/2025"
    },
    {
      "id": "V002",
      "date": "11/20/2024",
      "type": "Primary Care",
      "provider": "Dr. Eduardo Reyes, MD",
      "cc": "Follow-up: DM2, HTN, MDS",
      "hpi": "66-year-old female for chronic disease management. MDS stable — transfusion-dependent, followed by hematology. DM well-controlled. BP at goal. Reports fatigue between transfusions but functional. No bleeding, bruising, or infections.",
      "exam": "General: Pale, NAD. HEENT: Pale conjunctivae. CV: RRR, I/VI systolic murmur. Lungs: CTAB. Abdomen: Soft, NT. Extremities: No edema. Skin: No petechiae or bruising.",
      "assessment": "1. MDS — transfusion-dependent; hematology managing\n2. T2DM — A1c 7.2%, at goal\n3. HTN — controlled\n4. Iron overload — on chelation",
      "plan": "1. Continue current medications\n2. A1c recheck in 3 months\n3. Coordinate with hematology for transfusion schedule\n4. RTC 3 months"
    }
  ],
  "labs": [
    {
      "date": "01/27/2025",
      "time": "07:45",
      "orderedBy": "Dr. Karen Okonkwo, MD",
      "collected": "01/27/2025 07:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-012710",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "3.8", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "L" },
            { "test": "Hemoglobin", "value": "6.4", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "19.2", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "MCV", "value": "102", "unit": "fL", "range": "80-100", "flag": "H" },
            { "test": "Platelet Count", "value": "88", "unit": "x10³/µL", "range": "150-400", "flag": "L" },
            { "test": "ANC", "value": "1.8", "unit": "x10³/µL", "range": "1.5-8.0", "flag": "" }
          ]
        },
        {
          "name": "TYPE AND SCREEN / CROSSMATCH",
          "results": [
            { "test": "ABO/Rh", "value": "O Positive", "unit": "", "range": "—", "flag": "" },
            { "test": "Antibody Screen", "value": "Positive", "unit": "", "range": "Negative", "flag": "H" },
            { "test": "Antibody Identification", "value": "Anti-E, Anti-Kell", "unit": "", "range": "—", "flag": "" },
            { "test": "Crossmatch", "value": "Compatible (E-neg, K-neg units)", "unit": "", "range": "—", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "118", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "22", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Potassium", "value": "4.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" }
          ]
        },
        {
          "name": "IRON STUDIES",
          "results": [
            { "test": "Ferritin", "value": "1680", "unit": "ng/mL", "range": "12-150", "flag": "H" },
            { "test": "Serum Iron", "value": "185", "unit": "µg/dL", "range": "60-170", "flag": "H" },
            { "test": "TIBC", "value": "210", "unit": "µg/dL", "range": "250-370", "flag": "L" },
            { "test": "Transferrin Saturation", "value": "88", "unit": "%", "range": "20-50", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "09/15/2024",
      "study": "CT ABDOMEN AND PELVIS WITH CONTRAST",
      "accession": "IMG-2024-09151",
      "status": "FINAL",
      "orderedBy": "Dr. Priya Patel, MD (Hematology)",
      "readBy": "Dr. James Chen, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "66F MDS, iron overload, evaluate hepatosplenomegaly.",
      "technique": "CT abdomen and pelvis with IV contrast (premedicated for contrast allergy).",
      "findings": "Liver: Mildly enlarged (18 cm craniocaudal). Diffusely increased hepatic attenuation on pre-contrast images consistent with iron deposition. No focal lesions.\\n\\nSpleen: Mildly enlarged (14 cm). Homogeneous.\\n\\nPancreas, adrenals, kidneys: Unremarkable.\\n\\nBowel: No obstruction or wall thickening.\\n\\nLymph nodes: No pathologic lymphadenopathy.\\n\\nPelvis: Unremarkable for age.",
      "impression": "1. Hepatomegaly with increased hepatic attenuation — consistent with iron overload.\\n2. Mild splenomegaly — likely related to MDS.\\n3. No focal hepatic lesion or lymphadenopathy.",
      "dictated": "09/15/2024 14:20",
      "verified": "09/15/2024 16:45"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent, High-Dose)",
      "date": "10/10/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-HD092",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "11/01/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-521",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "01/2023",
      "site": "Left deltoid IM",
      "lot": "PV23-088",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "SX22-410",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2017",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    }
  ],
  "familyHistory": [
    "Mother: Sickle cell trait, HTN, deceased at 72 (stroke)",
    "Father: T2DM, prostate cancer, deceased at 70",
    "Sister: Breast cancer at age 60, alive",
    "Brother: HTN, alive at 62"
  ],
  "socialHistory": [
    ["Occupation", "Retired nurse"],
    ["Marital", "Widowed; lives with son"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Denies — stopped due to MDS"],
    ["Drugs", "Denies"],
    ["Exercise", "Limited due to fatigue; walks short distances"],
    ["Housing", "Lives with son in single-family home"],
    ["Safety", "Denies IPV; no firearms; fall precautions discussed"],
    ["Advance Directive", "Health care proxy: son Pierre Fontaine; DNR/DNI NOT designated"]
  ],
  "meta": {
    "caseId": "acute-hemolytic-transfusion-reaction",
    "diagnosis": "Acute Hemolytic Transfusion Reaction (ABO Incompatibility)",
    "acuity": 1,
    "presentation": "Hematologic Emergency",
    "category": "hematologic"
  },
  "guided": {
    "supported": true,
    "patientPersona": "Gloria Fontaine appears critically ill and in severe distress. They are cooperative but answers are brief due to pain or respiratory compromise. Family members may be at bedside providing additional history.",
    "interviewQuestions": [
        "Tell me what brought you in today. When did hematologic emergency start?",
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
        "onset": "'The symptoms started I came in for my regular blood transfusion yesterday and felt fine during it, bu.'",
        "character": "'It's hematologic emergency \u2014 it's been bothering me quite a bit.'",
        "location": "'It's primarily in the area you would expect for this presentation. It may radiate somewhat.'",
        "severity": "'I'd say about a seven or eight out of ten. It's significantly affecting my daily activities.'",
        "aggravating": "'Activity and movement tend to make it worse. Certain positions are more uncomfortable.'",
        "relieving": "'Rest helps somewhat, but nothing has fully relieved it. I've tried some home remedies without success.'",
        "associated": "'Yes, I've had some associated symptoms consistent with Acute Hemolytic Transfusion Reaction.'",
        "denies": "'I do not have fever, chills, weight loss, or other constitutional symptoms. No rash or skin changes.'",
        "history": "'I have not had anything exactly like this before, though I do have my usual medical conditions.'",
        "medications": "'I take Amlodipine 5mg daily; Metformin 500mg BID; Deferasirox 360mg daily; Folic Acid 1mg daily; Acetaminophen 650mg PRN.'",
        "allergies": "'My allergies are Ibuprofen, IV Contrast (Iodinated).'",
        "family": "Mother: Sickle cell trait, HTN, deceased at 72 (stroke)  Father: T2DM, prostate cancer, deceased at 70  Sister: Breast cancer at age 60, alive",
        "social": "Occupation: Retired nurse  Marital: Widowed; lives with son  Tobacco: Never smoker  Alcohol: Denies \u2014 stopped due to MDS  Drugs: Denies"
    },
    "examManeuvers": [
        "General appearance and pallor",
        "Vital signs",
        "Skin for pallor, jaundice, petechiae, or purpura",
        "Lymph node assessment",
        "Spleen palpation",
        "Liver assessment",
        "Cardiovascular auscultation",
        "Neurological assessment"
    ],
    "examFindings": {
        "General appearance and pallor": "Clinical finding consistent with Acute Hemolytic Transfusion Reaction. Document specifically what you observe.",
        "Vital signs": "Clinical finding consistent with Acute Hemolytic Transfusion Reaction. Document specifically what you observe.",
        "Skin for pallor, jaundice, petechiae, or purpura": "Clinical finding consistent with Acute Hemolytic Transfusion Reaction. Document specifically what you observe.",
        "Lymph node assessment": "Clinical finding consistent with Acute Hemolytic Transfusion Reaction. Document specifically what you observe.",
        "Spleen palpation": "Clinical finding consistent with Acute Hemolytic Transfusion Reaction. Document specifically what you observe.",
        "Liver assessment": "Clinical finding consistent with Acute Hemolytic Transfusion Reaction. Document specifically what you observe.",
        "Cardiovascular auscultation": "Clinical finding consistent with Acute Hemolytic Transfusion Reaction. Document specifically what you observe.",
        "Neurological assessment": "Clinical finding consistent with Acute Hemolytic Transfusion Reaction. Document specifically what you observe."
    },
    "ddxTargets": [
        "Acute Hemolytic Transfusion Reaction (correct diagnosis)",
        "Most likely alternative diagnosis",
        "Third differential diagnosis",
        "Must-not-miss diagnosis",
        "Second must-not-miss",
        "Common clinical mimic",
        "Alternative presentation to consider"
    ],
    "biasFlags": {
        "anchoring": "Students may anchor on the most obvious feature of this presentation and miss alternative diagnoses. For Acute Hemolytic Transfusion Reaction, carefully consider the full differential including must-not-miss conditions.",
        "prematureClosure": "After identifying Acute Hemolytic Transfusion Reaction, students may not adequately look for complications or co-existing conditions. Complete your workup even after forming a leading hypothesis.",
        "availabilityBias": "Students may overweight or underweight Acute Hemolytic Transfusion Reaction based on recent cases seen. Apply systematic clinical reasoning rather than relying on pattern recognition alone."
    },
    "coachPrompts": {
        "phase2": "You've reviewed Gloria Fontaine's chart. Before you interview them \u2014 what does the chart suggest about the most likely diagnosis? What are your top three diagnoses? What specifically from the chart supports each one?",
        "phase5": "You've taken the history and performed the exam. How has your differential changed? What findings most influenced your thinking? Which diagnoses have you moved up or down, and why?",
        "finalDebrief": "The diagnosis is Acute Hemolytic Transfusion Reaction (ABO Incompatibility). How did your differential evolve through this case? At what point were you most confident? What would you do differently, and what did you do well?"
    }
}
};
