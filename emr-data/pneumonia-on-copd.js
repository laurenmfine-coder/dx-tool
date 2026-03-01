// Virtual EMR Case: Pneumonia on COPD (Acute Exacerbation with Superimposed Infection)
// Variant: pneumonia-on-copd | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Eugene Whitfield",
    "dob": "04/02/1953",
    "age": 72,
    "sex": "Male",
    "mrn": "RDX-2025-40868",
    "pronouns": "He/Him",
    "insurance": "Medicaid (Florida)",
    "pcp": "Dr. Amanda Liu, MD",
    "pharmacy": "Walgreens — 3100 Broward Blvd, Fort Lauderdale, FL",
    "language": "English",
    "race": "White",
    "address": "1045 SW 2nd Ct, Fort Lauderdale, FL 33312",
    "phone": "(954) 555-3297",
    "email": "e.whitfield53@email.com",
    "emergencyContact": {
      "name": "Carol Jenkins (Daughter)",
      "phone": "(954) 555-3310"
    }
  },
  "problems": [
    {
      "problem": "COPD, GOLD Stage IV (Very Severe)",
      "icd": "J44.1",
      "onset": "2010",
      "status": "Active",
      "notes": "FEV1 28% predicted (04/2025); on continuous home O2 2L NC at rest, 4L with exertion; 4 exacerbations in past year (2 requiring hospitalization); chronic CO2 retention — baseline pCO2 52"
    },
    {
      "problem": "Tobacco Use Disorder — Former",
      "icd": "F17.211",
      "onset": "1968",
      "status": "Resolved",
      "notes": "60+ pack-year history; quit 2018 after ICU admission for respiratory failure; on supplemental O2 since"
    },
    {
      "problem": "Cor Pulmonale",
      "icd": "I27.81",
      "onset": "2023",
      "status": "Active",
      "notes": "RV dilation on echo; RVSP 52 mmHg; peripheral edema managed with diuretics"
    },
    {
      "problem": "Atrial Flutter — Chronic",
      "icd": "I48.92",
      "onset": "2022",
      "status": "Active",
      "notes": "Rate-controlled with diltiazem; on apixaban; not a candidate for ablation per EP"
    },
    {
      "problem": "Chronic Respiratory Failure with Hypoxia and Hypercapnia",
      "icd": "J96.11",
      "onset": "2022",
      "status": "Active",
      "notes": "Continuous O2 therapy; baseline SpO2 88-90% on 2L; baseline ABG: pH 7.36, pCO2 52, pO2 62, HCO3 30"
    },
    {
      "problem": "Malnutrition — Moderate",
      "icd": "E44.0",
      "onset": "2024",
      "status": "Active",
      "notes": "BMI 18.2; reduced caloric intake due to dyspnea while eating; on nutritional supplements; albumin 3.0"
    },
    {
      "problem": "Osteoporosis",
      "icd": "M81.0",
      "onset": "2021",
      "status": "Active",
      "notes": "T-score -3.1 lumbar spine; likely corticosteroid-related; on vitamin D + calcium; declined bisphosphonate (esophageal concerns)"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone Furoate/Umeclidinium/Vilanterol (Trelegy Ellipta) 1 puff daily",
      "sig": "Inhale 1 puff daily, rinse mouth after use",
      "prescriber": "Dr. Liu",
      "start": "08/2022",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Ipratropium/Albuterol (DuoNeb) nebulized QID",
      "sig": "Nebulize 1 vial four times daily and PRN for acute dyspnea",
      "prescriber": "Dr. Liu",
      "start": "01/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Roflumilast 500mcg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Singh (Pulmonology)",
      "start": "06/2024",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Diltiazem ER 180mg daily",
      "sig": "Take 1 capsule by mouth once daily",
      "prescriber": "Dr. Liu",
      "start": "11/2022",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Apixaban 5mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Liu",
      "start": "01/2023",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Furosemide 40mg daily",
      "sig": "Take 1 tablet by mouth once daily in the morning",
      "prescriber": "Dr. Liu",
      "start": "04/2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Supplemental Oxygen 2-4L NC",
      "sig": "Continuous 2L at rest; increase to 4L with exertion; target SpO2 88-92%",
      "prescriber": "Dr. Singh (Pulmonology)",
      "start": "12/2018",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Cholecalciferol (Vitamin D3) 2000 IU daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Liu",
      "start": "03/2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Calcium Carbonate 600mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Liu",
      "start": "03/2021",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Ensure Plus — 2 cans daily",
      "sig": "Drink 1 can twice daily as nutritional supplement",
      "prescriber": "Dr. Liu",
      "start": "09/2024",
      "refills": 0,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Levofloxacin",
      "type": "Drug",
      "reaction": "Tendon pain bilateral Achilles — discontinued promptly",
      "severity": "Moderate",
      "verified": "Yes"
    },
    {
      "allergen": "Latex",
      "type": "Environmental",
      "reaction": "Contact urticaria on hands",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "108/68",
      "hr": 112,
      "rr": 32,
      "temp": "101.6°F",
      "spo2": "82%",
      "wt": "128 lbs",
      "ht": "5'8\"",
      "bmi": 19.5,
      "setting": "ED"
    },
    {
      "date": "01/08/2026",
      "bp": "118/72",
      "hr": 88,
      "rr": 22,
      "temp": "98.0°F",
      "spo2": "89%",
      "wt": "131 lbs",
      "ht": "5'8\"",
      "bmi": 19.9,
      "setting": "Pulmonology Office"
    },
    {
      "date": "10/14/2025",
      "bp": "122/76",
      "hr": 84,
      "rr": 20,
      "temp": "98.2°F",
      "spo2": "90%",
      "wt": "134 lbs",
      "ht": "5'8\"",
      "bmi": 20.4,
      "setting": "PCP Office"
    },
    {
      "date": "07/22/2025",
      "bp": "116/70",
      "hr": 92,
      "rr": 24,
      "temp": "98.4°F",
      "spo2": "88%",
      "wt": "132 lbs",
      "ht": "5'8\"",
      "bmi": 20.1,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2026",
      "type": "Specialist",
      "provider": "Dr. Rajesh Singh, MD (Pulmonology)",
      "cc": "COPD management, post-exacerbation follow-up",
      "hpi": "72M with GOLD Stage IV COPD, cor pulmonale, chronic respiratory failure presents for post-exacerbation follow-up. Was hospitalized 12/2025 for COPD exacerbation (viral-triggered — negative for flu/COVID/RSV). Required BiPAP for 3 days. Completed prednisone taper. Reports returning to baseline — dyspneic with any activity but able to perform ADLs with rest breaks. Using nebulizer QID as prescribed. Weight down 3 lbs since discharge.",
      "exam": "Cachectic, barrel-chested, sitting forward with pursed-lip breathing at rest. CV: Tachycardic, irregularly irregular. Lungs: Globally diminished breath sounds; scattered expiratory wheezes; prolonged expiratory phase; no crackles today. Ext: 1+ pitting edema bilateral ankles. Nails: Mild clubbing.",
      "assessment": "1. COPD GOLD IV — at baseline post-exacerbation; 4th exacerbation this year\n2. Chronic respiratory failure — stable on home O2\n3. Cor pulmonale — stable, edema controlled\n4. Malnutrition — weight trending down",
      "plan": "1. Continue triple inhaler + nebulized DuoNeb + roflumilast\n2. Discussed transplant referral — patient not interested at this time\n3. Palliative care referral for symptom management — accepted\n4. Nutritional supplementation — increase Ensure to 3/day\n5. PFTs in 3 months\n6. Return 2 months or sooner for exacerbation"
    },
    {
      "id": "V002",
      "date": "07/22/2025",
      "type": "ED",
      "provider": "Dr. Steven Ramirez, MD (Emergency Medicine)",
      "cc": "Worsening dyspnea, increased sputum, unable to speak in full sentences",
      "hpi": "72M with severe COPD on home O2 presents with 3-day progressive worsening of dyspnea and increased purulent sputum production. Reports green sputum, increased volume, and low-grade fevers. Daughter noticed confusion this morning. Patient unable to complete sentences. Increased home O2 to 4L without improvement. No chest pain. No hemoptysis.",
      "exam": "Severe respiratory distress; tripod position; accessory muscle use; pursed-lip breathing. CV: Irregular, tachycardic at 108. Lungs: Bilateral expiratory wheezes with prolonged expiration; coarse rhonchi R base. SpO2 84% on 4L NC. ABG: pH 7.28, pCO2 68, pO2 52, HCO3 31.",
      "assessment": "1. Acute COPD exacerbation with acute-on-chronic hypercapnic respiratory failure\n2. Suspected superimposed bacterial infection (purulent sputum, fever)",
      "plan": "1. BiPAP initiated — 15/5, FiO2 0.35\n2. Methylprednisolone 125mg IV\n3. Nebulized ipratropium/albuterol q2h\n4. Doxycycline 100mg BID (fluoroquinolone allergy)\n5. Blood/sputum cultures\n6. CXR, CBC, BMP, procalcitonin\n7. Admit to step-down unit"
    }
  ],
  "labs": [
    {
      "date": "01/08/2026",
      "time": "10:00",
      "orderedBy": "Dr. Singh",
      "collected": "01/08/2026 10:15",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-010824",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "9.8", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "15.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "48.2", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelets", "value": "210", "unit": "K/uL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "98", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "22", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.1", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.4", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" },
            { "test": "Chloride", "value": "96", "unit": "mEq/L", "range": "98-106", "flag": "L" },
            { "test": "CO2", "value": "32", "unit": "mEq/L", "range": "23-29", "flag": "H" }
          ]
        },
        {
          "name": "ARTERIAL BLOOD GAS (BASELINE)",
          "results": [
            { "test": "pH", "value": "7.36", "unit": "", "range": "7.35-7.45", "flag": "" },
            { "test": "pCO2", "value": "52", "unit": "mmHg", "range": "35-45", "flag": "H" },
            { "test": "pO2", "value": "62", "unit": "mmHg", "range": "80-100", "flag": "L" },
            { "test": "HCO3", "value": "30", "unit": "mEq/L", "range": "22-26", "flag": "H" },
            { "test": "O2 Sat", "value": "89", "unit": "%", "range": "95-100", "flag": "L" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "07/22/2025",
      "study": "CHEST X-RAY PORTABLE AP",
      "accession": "IMG-2025-72246",
      "status": "FINAL",
      "orderedBy": "Dr. Ramirez (ED)",
      "readBy": "Dr. Patricia Gomez, MD (Radiology)",
      "facility": "Memorial Regional Hospital — Hollywood, FL",
      "priority": "STAT",
      "clinical": "COPD exacerbation, fever, purulent sputum — rule out pneumonia",
      "technique": "Portable AP chest radiograph obtained.",
      "findings": "Heart: Mildly enlarged, likely right-sided predominance. Pulmonary arteries prominent.\n\nLungs: Severely hyperinflated with flattened diaphragms. New patchy consolidation in the right lower lobe and right middle lobe. Left lung with increased interstitial markings but no focal consolidation. No pneumothorax.\n\nPleura: Small right pleural effusion, new.\n\nBony structures: Mild thoracic kyphosis. Compression fracture T8 (old).",
      "impression": "1. New RLL/RML consolidation — pneumonia in setting of COPD exacerbation.\n2. Small right pleural effusion, new (parapneumonic vs reactive).\n3. Severely hyperinflated lungs consistent with COPD.\n4. Old T8 compression fracture.\n5. Cardiomegaly with prominent pulmonary arteries — cor pulmonale.",
      "dictated": "07/22/2025 19:30",
      "verified": "07/22/2025 20:15"
    },
    {
      "date": "04/10/2025",
      "study": "PULMONARY FUNCTION TESTS",
      "accession": "PFT-2025-04102",
      "status": "FINAL",
      "orderedBy": "Dr. Singh",
      "readBy": "Dr. Rajesh Singh, MD (Pulmonology)",
      "facility": "ReasonDx Medical Center Pulmonary Lab",
      "priority": "Routine",
      "clinical": "COPD — annual PFTs",
      "technique": "Full spirometry with bronchodilator reversibility, lung volumes, and DLCO performed per ATS standards.",
      "findings": "Pre-bronchodilator: FVC 2.18L (54% predicted), FEV1 0.82L (28% predicted), FEV1/FVC 0.38. Post-bronchodilator: FEV1 0.90L (30% predicted) — 10% improvement (not significant).\n\nLung volumes: TLC 8.2L (128% predicted — hyperinflation). RV 5.4L (242% predicted — severe air trapping). RV/TLC 0.66.\n\nDLCO: 34% predicted — severely reduced.",
      "impression": "1. GOLD Stage IV COPD (FEV1 28% predicted).\n2. Severe hyperinflation and air trapping.\n3. Severely reduced diffusing capacity.\n4. No significant bronchodilator reversibility.",
      "dictated": "04/10/2025 15:00",
      "verified": "04/10/2025 16:30"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-8718", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-1602", "mfr": "Moderna" },
    { "vaccine": "Prevnar 20", "date": "02/2024", "site": "Left deltoid IM", "lot": "PV20-702", "mfr": "Pfizer" },
    { "vaccine": "Pneumovax 23", "date": "04/2024", "site": "Right deltoid IM", "lot": "PV23-844", "mfr": "Merck" },
    { "vaccine": "Tdap", "date": "05/2022", "site": "Left deltoid IM", "lot": "TD22-448", "mfr": "GSK" },
    { "vaccine": "Shingrix (1/2)", "date": "09/2023", "site": "Right deltoid IM", "lot": "SX23-488", "mfr": "GSK" },
    { "vaccine": "Shingrix (2/2)", "date": "11/2023", "site": "Right deltoid IM", "lot": "SX23-660", "mfr": "GSK" }
  ],
  "familyHistory": [
    "Father: COPD (45+ pack-year smoker), deceased at 64 (respiratory failure)",
    "Mother: Hypertension, CHF, deceased at 77",
    "Brother: Lung cancer at age 62, deceased at 63",
    "Daughter: Healthy, age 46"
  ],
  "socialHistory": [
    ["Occupation", "Retired commercial painter (38 years) — significant exposure to paint fumes, solvents, isocyanates; no respirator use for first 20 years"],
    ["Marital", "Divorced x 15 years; lives alone"],
    ["Tobacco", "Former — 60+ pack-year history (1.5 PPD x 45 years); quit 2018 after ICU admission"],
    ["Alcohol", "Former heavy drinker; sober x 10 years (AA participant)"],
    ["Drugs", "Remote cocaine use in 30s; denies current use"],
    ["Exercise", "Bedside exercises only; cannot walk more than 20 feet without severe dyspnea even on O2"],
    ["Housing", "One-bedroom apartment, ground floor; daughter visits 3x/week; home health aide 5 days/week for meal prep and ADL assistance"],
    ["Safety", "Fall risk — uses walker; no rugs; grab bars in bathroom; Lifeline medical alert button"],
    ["Advance Directive", "DNR/DNI — signed and in chart; comfort care preferred; DPOA designated (daughter Carol); palliative care consulted"]
  ],
  "meta": {
    "caseId": "pneumonia-on-copd",
    "diagnosis": "Community-Acquired Pneumonia Superimposed on COPD GOLD Stage IV (Acute Hypercapnic Respiratory Failure with Sepsis)",
    "acuity": 2,
    "presentation": "Shortness of Breath",
    "category": "pulmonary"
  }
};
