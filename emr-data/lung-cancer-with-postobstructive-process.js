// Virtual EMR Case: Lung Cancer with Post-Obstructive Process
// Variant: lung-cancer-with-postobstructive-process | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Frank DeLuca",
    "dob": "01/14/1957",
    "age": 69,
    "sex": "Male",
    "mrn": "RDX-2025-40644",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B with Medigap Plan F",
    "pcp": "Dr. Catherine Brennan, MD",
    "pharmacy": "Publix Pharmacy — 2200 S University Dr, Riverside, FL",
    "language": "English",
    "race": "White (Italian American)",
    "address": "3825 NE 22nd Ave, Fort Lauderdale, FL 33308",
    "phone": "(954) 555-6147",
    "email": "f.deluca57@email.com",
    "emergencyContact": {
      "name": "Patricia DeLuca (Wife)",
      "phone": "(954) 555-6160"
    }
  },
  "problems": [
    {
      "problem": "COPD, GOLD Stage III",
      "icd": "J44.1",
      "onset": "2015",
      "status": "Active",
      "notes": "FEV1 42% predicted; on triple inhaler therapy; 2 exacerbations in past year requiring oral steroids; home O2 PRN"
    },
    {
      "problem": "Tobacco Use Disorder — Active",
      "icd": "F17.210",
      "onset": "1975",
      "status": "Active",
      "notes": "50+ pack-year history; currently smoking 1/2 PPD; multiple failed quit attempts; tried Chantix (2020) — discontinued due to vivid dreams"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2010",
      "status": "Active",
      "notes": "On lisinopril; well controlled"
    },
    {
      "problem": "Benign Prostatic Hyperplasia",
      "icd": "N40.0",
      "onset": "2019",
      "status": "Active",
      "notes": "On tamsulosin; nocturia 2-3x per night"
    },
    {
      "problem": "Osteoarthritis — Bilateral Knees",
      "icd": "M17.0",
      "onset": "2016",
      "status": "Active",
      "notes": "Uses acetaminophen; declined TKR; limits mobility"
    },
    {
      "problem": "Unintentional Weight Loss",
      "icd": "R63.4",
      "onset": "2025",
      "status": "Active",
      "notes": "18 lb loss over 4 months; workup in progress; decreased appetite"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone Furoate/Umeclidinium/Vilanterol (Trelegy Ellipta) 1 puff daily",
      "sig": "Inhale 1 puff daily, rinse mouth after use",
      "prescriber": "Dr. Brennan",
      "start": "02/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Albuterol HFA 90mcg 2 puffs PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for shortness of breath",
      "prescriber": "Dr. Brennan",
      "start": "06/2015",
      "refills": 5,
      "status": "PRN"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Brennan",
      "start": "04/2011",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Tamsulosin 0.4mg QHS",
      "sig": "Take 1 capsule by mouth at bedtime",
      "prescriber": "Dr. Brennan",
      "start": "09/2019",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Brennan",
      "start": "01/2017",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Home Oxygen 2L NC PRN",
      "sig": "Use supplemental O2 at 2L/min via nasal cannula as needed for SpO2 <90% or with exertion",
      "prescriber": "Dr. Brennan",
      "start": "11/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Azithromycin",
      "type": "Drug",
      "reaction": "Severe nausea, vomiting, and abdominal pain",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "NKDA (other)",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/22/2026",
      "bp": "138/82",
      "hr": 102,
      "rr": 24,
      "temp": "100.8°F",
      "spo2": "87%",
      "wt": "162 lbs",
      "ht": "5'9\"",
      "bmi": 23.9,
      "setting": "ED"
    },
    {
      "date": "01/10/2026",
      "bp": "134/78",
      "hr": 88,
      "rr": 20,
      "temp": "98.4°F",
      "spo2": "91%",
      "wt": "165 lbs",
      "ht": "5'9\"",
      "bmi": 24.4,
      "setting": "PCP Office"
    },
    {
      "date": "10/20/2025",
      "bp": "130/76",
      "hr": 82,
      "rr": 18,
      "temp": "98.2°F",
      "spo2": "92%",
      "wt": "172 lbs",
      "ht": "5'9\"",
      "bmi": 25.4,
      "setting": "PCP Office"
    },
    {
      "date": "06/15/2025",
      "bp": "128/78",
      "hr": 78,
      "rr": 18,
      "temp": "98.6°F",
      "spo2": "93%",
      "wt": "180 lbs",
      "ht": "5'9\"",
      "bmi": 26.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/10/2026",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "Worsening cough, weight loss, follow-up CT findings",
      "hpi": "69M with severe COPD, active smoker (50+ pack-years) presents for follow-up of progressive cough and unintentional weight loss of 18 lbs over 4 months. Reports cough has changed character — now productive of blood-tinged sputum x 2 weeks. Increased dyspnea on exertion; now short of breath walking across living room. Using rescue inhaler 6-8x/day (baseline 2-3x). Decreased appetite, early satiety. Night sweats x 1 month. Low-grade fevers intermittently. CT chest (12/2025) showed suspicious RUL mass.",
      "exam": "Cachectic-appearing male in mild respiratory distress at rest. CV: Tachycardic, RRR, no murmurs. Lungs: Decreased breath sounds RUL with dullness to percussion; scattered expiratory wheezes bilaterally. Lymph: Palpable 1.5 cm right supraclavicular node, firm, non-tender. Ext: No clubbing (mild nail changes).",
      "assessment": "1. RUL mass — highly suspicious for primary lung malignancy given smoking history, hemoptysis, weight loss, supraclavicular lymphadenopathy\n2. COPD — worsening, likely compounded by mass effect\n3. Weight loss — 18 lbs in 4 months; likely malignancy-related",
      "plan": "1. STAT referral to pulmonology for bronchoscopy with biopsy\n2. PET/CT ordered\n3. CBC, CMP, LDH, calcium (paraneoplastic screen)\n4. Oncology referral pending pathology\n5. Smoking cessation counseling — patient receptive\n6. Discussed findings and concern for malignancy with patient and wife — tearful but understanding"
    },
    {
      "id": "V002",
      "date": "10/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Catherine Brennan, MD",
      "cc": "COPD follow-up, new weight loss",
      "hpi": "69M with COPD presents for routine follow-up. Reports 8 lb weight loss over past 2 months. States appetite decreased; feeling full after small meals. Cough persistent but attributes to COPD. No hemoptysis at this time. Reports mild night sweats. Continues to smoke 1/2 PPD.",
      "exam": "NAD. Thin habitus, clothes loose-fitting. CV: RRR. Lungs: Diminished breath sounds bilaterally, scattered rhonchi. Ext: No edema.",
      "assessment": "1. COPD — stable on current regimen\n2. Unintentional weight loss — 8 lbs in 2 months; concerning given smoking history\n3. Night sweats — workup indicated",
      "plan": "1. CT chest without contrast ordered — evaluate for occult malignancy\n2. Labs: CBC, CMP, TSH, LDH, albumin\n3. Smoking cessation counseling\n4. Return for CT results"
    }
  ],
  "labs": [
    {
      "date": "01/10/2026",
      "time": "10:00",
      "orderedBy": "Dr. Brennan",
      "collected": "01/10/2026 10:20",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-011042",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "14.2", "unit": "K/uL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "11.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "L" },
            { "test": "Hematocrit", "value": "34.0", "unit": "%", "range": "38.3-48.6", "flag": "L" },
            { "test": "Platelets", "value": "412", "unit": "K/uL", "range": "150-400", "flag": "H" },
            { "test": "MCV", "value": "88", "unit": "fL", "range": "80-100", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "108", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "18", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "134", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Calcium", "value": "11.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "H" },
            { "test": "Albumin", "value": "3.0", "unit": "g/dL", "range": "3.5-5.5", "flag": "L" },
            { "test": "Corrected Calcium", "value": "12.2", "unit": "mg/dL", "range": "8.5-10.5", "flag": "H" },
            { "test": "ALT", "value": "32", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "28", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Alk Phos", "value": "142", "unit": "U/L", "range": "44-147", "flag": "" }
          ]
        },
        {
          "name": "ADDITIONAL LABS",
          "results": [
            { "test": "LDH", "value": "310", "unit": "U/L", "range": "140-280", "flag": "H" },
            { "test": "ESR", "value": "68", "unit": "mm/hr", "range": "0-20", "flag": "H" },
            { "test": "CRP", "value": "4.8", "unit": "mg/dL", "range": "<0.5", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "12/08/2025",
      "study": "CT CHEST WITHOUT CONTRAST",
      "accession": "IMG-2025-120844",
      "status": "FINAL",
      "orderedBy": "Dr. Brennan",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "COPD, unintentional weight loss, night sweats — evaluate for malignancy",
      "technique": "Helical CT of the chest performed without IV contrast per protocol.",
      "findings": "Lungs: 4.2 x 3.8 cm spiculated mass in the right upper lobe, centered on the right upper lobe bronchus, with near-complete obstruction of the bronchial lumen. Post-obstructive atelectasis/consolidation noted distal to the mass in the posterior segment of RUL. Additional 8mm ground-glass nodule in the right middle lobe (indeterminate). Left lung clear.\n\nMediastinum: Enlarged right paratracheal lymph node (2.1 cm short axis) and subcarinal lymph node (1.8 cm). Aortopulmonary window lymph node 1.2 cm.\n\nPleura: Small right pleural effusion.\n\nBony structures: No lytic or blastic lesions.\n\nUpper abdomen (included): No hepatic lesions. Bilateral adrenal glands normal.",
      "impression": "1. 4.2 cm spiculated RUL mass with bronchial obstruction — highly suspicious for primary bronchogenic carcinoma.\n2. Post-obstructive atelectasis/consolidation RUL.\n3. Mediastinal lymphadenopathy — suspicious for metastatic involvement (N2 disease).\n4. Small right pleural effusion.\n5. 8mm RML ground-glass nodule — indeterminate, recommend follow-up.\n6. Recommend PET/CT and tissue diagnosis.",
      "dictated": "12/08/2025 16:30",
      "verified": "12/08/2025 18:00"
    },
    {
      "date": "03/2024",
      "study": "CHEST X-RAY PA AND LATERAL",
      "accession": "IMG-2024-30210",
      "status": "FINAL",
      "orderedBy": "Dr. Brennan",
      "readBy": "Dr. Patricia Gomez, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "Routine",
      "clinical": "COPD, annual surveillance",
      "technique": "PA and lateral views of the chest obtained.",
      "findings": "Heart: Normal size.\n\nLungs: Hyperinflated lung fields consistent with COPD. Flattened diaphragms. No focal consolidation, mass, or effusion. Apical scarring bilateral (old granulomatous disease vs smoking-related).\n\nBony structures: Mild degenerative changes thoracic spine.",
      "impression": "1. COPD — hyperinflated lungs.\n2. Apical scarring, chronic.\n3. No acute disease.",
      "dictated": "03/14/2024 10:00",
      "verified": "03/14/2024 12:30"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9004", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-2014", "mfr": "Pfizer" },
    { "vaccine": "Prevnar 20", "date": "06/2023", "site": "Left deltoid IM", "lot": "PV20-618", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "04/2021", "site": "Left deltoid IM", "lot": "TD21-284", "mfr": "GSK" },
    { "vaccine": "Shingrix (1/2)", "date": "08/2023", "site": "Right deltoid IM", "lot": "SX23-442", "mfr": "GSK" },
    { "vaccine": "Shingrix (2/2)", "date": "10/2023", "site": "Right deltoid IM", "lot": "SX23-610", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Father: Lung cancer (diagnosed age 68, deceased age 70) — 40+ pack-year smoker",
    "Mother: COPD, deceased at 82 (respiratory failure)",
    "Brother: Bladder cancer at age 64, alive at 67",
    "Sister: Healthy, alive at 72"
  ],
  "socialHistory": [
    ["Occupation", "Retired auto mechanic (42 years) — significant occupational exposure to asbestos brake pads, exhaust fumes, solvents"],
    ["Marital", "Married 44 years"],
    ["Tobacco", "Active smoker — 1/2 PPD currently; 50+ pack-year history; started age 18; multiple quit attempts"],
    ["Alcohol", "2-3 beers daily; more on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Severely limited by dyspnea; no structured exercise; uses scooter at stores"],
    ["Housing", "Lives with wife in single-family home; one-story; has 3 steps to entrance"],
    ["Safety", "Denies IPV; seatbelt; firearms in home (locked gun safe)"],
    ["Advance Directive", "Living will signed; Full code currently but open to discussion; DPOA designated (wife Patricia)"]
  ],
  "meta": {
    "caseId": "lung-cancer-with-postobstructive-process",
    "diagnosis": "Lung Cancer (Suspected Squamous Cell Carcinoma, RUL) with Post-Obstructive Pneumonia and Hypercalcemia of Malignancy",
    "acuity": 3,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  }
};
