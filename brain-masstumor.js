// Virtual EMR Case: Brain Mass/Tumor
// Variant: brain-masstumor | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Eleanor Whitfield",
    "dob": "05/12/1947",
    "age": 77,
    "sex": "Female",
    "mrn": "RDX-2025-41782",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B with Aetna Supplement",
    "pcp": "Dr. Kenneth Rhodes, MD",
    "pharmacy": "Publix Pharmacy — 1500 N Pine Island Rd, Plantation, FL",
    "language": "English",
    "race": "White",
    "address": "3280 NW 2nd Ave, Plantation, FL 33317",
    "phone": "(954) 555-2094",
    "email": "e.whitfield47@email.com",
    "emergencyContact": {
      "name": "Thomas Whitfield (Son)",
      "phone": "(954) 555-2130"
    }
  },
  "problems": [
    {
      "problem": "Breast Cancer, Left, Status Post Mastectomy",
      "icd": "Z85.3",
      "onset": "2017",
      "status": "Resolved",
      "notes": "Stage IIA ER+/PR+/HER2- IDC; left mastectomy 2017; adjuvant chemo (TC x4) + radiation; completed tamoxifen 5 years; surveillance NED until now"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "Well controlled on amlodipine"
    },
    {
      "problem": "Osteoporosis",
      "icd": "M81.0",
      "onset": "2019",
      "status": "Active",
      "notes": "T-score -2.9 lumbar spine; worsened on tamoxifen; on denosumab"
    },
    {
      "problem": "Hypothyroidism",
      "icd": "E03.9",
      "onset": "2010",
      "status": "Active",
      "notes": "On levothyroxine; TSH stable"
    },
    {
      "problem": "New-Onset Headaches",
      "icd": "R51.9",
      "onset": "2024",
      "status": "Active",
      "notes": "Progressive morning headaches x 3 months; worsening; concerning for intracranial pathology"
    }
  ],
  "medications": [
    {
      "name": "Amlodipine 5mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Rhodes",
      "start": "01/2006",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Levothyroxine 75mcg daily",
      "sig": "Take 1 tablet by mouth once daily on empty stomach 30 minutes before breakfast",
      "prescriber": "Dr. Rhodes",
      "start": "03/2010",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Denosumab (Prolia) 60mg SC q6months",
      "sig": "Inject 60 mg subcutaneously every 6 months — administered in office",
      "prescriber": "Dr. Rhodes",
      "start": "06/2020",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Calcium-Vitamin D 600mg/400IU BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Rhodes",
      "start": "06/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 1000mg TID PRN",
      "sig": "Take 2 tablets (500mg each) by mouth three times daily as needed for headache",
      "prescriber": "Dr. Rhodes",
      "start": "11/2024",
      "refills": 1,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfa drugs",
      "type": "Drug",
      "reaction": "Rash and facial swelling",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/08/2025",
      "bp": "148/86",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "142 lbs",
      "ht": "5'4\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/10/2024",
      "bp": "132/78",
      "hr": 68,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "146 lbs",
      "ht": "5'4\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    },
    {
      "date": "01/15/2024",
      "bp": "130/76",
      "hr": 70,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "148 lbs",
      "ht": "5'4\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Kenneth Rhodes, MD",
      "cc": "Worsening headaches x 3 months; unintentional weight loss; new right-hand weakness",
      "hpi": "77-year-old female with history of breast cancer (Stage IIA, left mastectomy 2017, completed adjuvant therapy 2022, NED on surveillance) presenting with progressive morning headaches x 3 months. Headaches are worst upon waking, described as pressure-like, diffuse, associated with nausea. Initially intermittent but now daily. Acetaminophen provides partial relief. Son reports patient has been 'not herself' — word-finding difficulty, forgetting appointments, new right-hand clumsiness when writing. Unintentional 4 lb weight loss over 3 months. No seizures. No visual changes.",
      "exam": "General: Thin elderly female, appears fatigued. Neuro: A&O x3 but slow responses. Mild right pronator drift. Grip strength 4/5 right, 5/5 left. Difficulty with serial 7s. Word-finding pauses. Gait: Mildly unsteady. CN II-XII grossly intact. DTRs 3+ bilateral upper extremities. Fundoscopic: Bilateral papilledema.",
      "assessment": "1. Progressive headaches with papilledema, right-sided weakness, and cognitive decline — HIGHLY CONCERNING for intracranial mass lesion\n2. History of breast cancer — brain metastasis must be ruled out urgently\n3. Unintentional weight loss — 4 lbs in 3 months",
      "plan": "1. URGENT MRI brain with and without contrast — ordered STAT\n2. If mass identified → URGENT neurosurgery and oncology referral\n3. Dexamethasone 4mg QID started today for vasogenic edema/elevated ICP\n4. Seizure precautions reviewed with family\n5. Hold further workup pending MRI results\n6. Son present — understands urgency"
    },
    {
      "id": "V002",
      "date": "07/10/2024",
      "type": "Specialist",
      "provider": "Dr. Patricia Grant, MD (Oncology)",
      "cc": "Annual breast cancer surveillance — 7 years post-diagnosis",
      "hpi": "76-year-old female with ER+/PR+/HER2- Stage IIA left breast cancer (mastectomy 2017, TC x4, radiation, tamoxifen x 5 years completed 2022) for annual surveillance. No new symptoms. No breast complaints. Mammogram of right breast WNL. Tumor markers CEA and CA 27-29 WNL. No bone pain, no cough, no headaches at that time. Clinically NED.",
      "exam": "General: NAD. Chest wall: Left mastectomy site healed, no nodules. Right breast: No masses. Axillae: No lymphadenopathy. Neuro: Grossly intact.",
      "assessment": "1. Breast cancer surveillance — NED at 7 years\n2. Continue annual surveillance",
      "plan": "1. Annual mammogram right breast\n2. Tumor markers in 6 months\n3. Continue denosumab for osteoporosis (cancer treatment-related)\n4. RTC 1 year"
    }
  ],
  "labs": [
    {
      "date": "01/08/2025",
      "time": "09:30",
      "orderedBy": "Dr. Kenneth Rhodes, MD",
      "collected": "01/08/2025 09:00",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-417820",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "94", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "16", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.2", "flag": "" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Calcium", "value": "10.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "38", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "34", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Alkaline Phosphatase", "value": "142", "unit": "U/L", "range": "44-147", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "8.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "11.8", "unit": "g/dL", "range": "12.0-16.0", "flag": "L" },
            { "test": "Hematocrit", "value": "35.4", "unit": "%", "range": "36.0-46.0", "flag": "L" },
            { "test": "Platelet Count", "value": "312", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "TUMOR MARKERS",
          "results": [
            { "test": "CA 27-29", "value": "48", "unit": "U/mL", "range": "<38", "flag": "H" },
            { "test": "CEA", "value": "6.2", "unit": "ng/mL", "range": "<3.0", "flag": "H" }
          ]
        },
        {
          "name": "THYROID FUNCTION",
          "results": [
            { "test": "TSH", "value": "2.8", "unit": "mIU/L", "range": "0.4-4.0", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "07/2024",
      "study": "MAMMOGRAM RIGHT BREAST — SCREENING",
      "accession": "IMG-2024-41782",
      "status": "FINAL",
      "orderedBy": "Dr. Patricia Grant, MD (Oncology)",
      "readBy": "Dr. Lisa Nakamura, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "76F with history of left breast cancer s/p mastectomy 2017. Annual screening right breast.",
      "technique": "Digital mammography, CC and MLO views, right breast.",
      "findings": "Right breast: Heterogeneously dense. No suspicious masses, calcifications, or architectural distortion.\\n\\nLeft: Mastectomy site — no imaging performed.",
      "impression": "1. BI-RADS 1 — Negative. No mammographic evidence of malignancy, right breast.\\n2. Continue annual screening.",
      "dictated": "07/12/2024 10:00",
      "verified": "07/12/2024 14:00"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (High-Dose Quadrivalent)",
      "date": "10/01/2024",
      "site": "Right deltoid IM",
      "lot": "FL2024-HD288",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Moderna 2024-25)",
      "date": "10/20/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-738",
      "mfr": "Moderna"
    },
    {
      "vaccine": "Pneumococcal (PCV20 — Prevnar 20)",
      "date": "2023",
      "site": "Right deltoid IM",
      "lot": "—",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Shingrix (2/2)",
      "date": "2020",
      "site": "Right deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2018",
      "site": "Right deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: Breast cancer (age 64), deceased at 78 (CHF)",
    "Father: Lung cancer, deceased at 70",
    "Sister: Breast cancer (age 58), alive at 72 — BRCA negative",
    "Daughter: Healthy, age 50 — BRCA testing negative"
  ],
  "socialHistory": [
    ["Occupation", "Retired high school English teacher"],
    ["Marital", "Widowed — husband deceased 2019 (MI)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Rare — glass of wine at holidays"],
    ["Drugs", "Denies"],
    ["Exercise", "Daily walks with neighbor; book club; active at church"],
    ["Housing", "Lives alone in condo; son lives 10 minutes away; checks on her daily"],
    ["Safety", "Grab bars in bathroom; no throw rugs; medical alert pendant; drives (son concerned about recent near-misses)"],
    ["Advance Directive", "Yes — healthcare proxy: son Thomas Whitfield; full code"]
  ],
  "meta": {
    "caseId": "brain-masstumor",
    "diagnosis": "Brain Mass/Tumor (Metastatic Breast Cancer)",
    "acuity": 2,
    "presentation": "Geriatric Emergency",
    "category": "neurological"
  }
};
