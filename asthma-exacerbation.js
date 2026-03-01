// Virtual EMR Case: Asthma Exacerbation
// Variant: asthma-exacerbation | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Deshawn Carter",
    "dob": "01/11/2002",
    "age": 24,
    "sex": "Male",
    "mrn": "NSU-2025-67219",
    "pronouns": "He/Him",
    "insurance": "Medicaid",
    "pcp": "Dr. Angela Morris, MD",
    "pharmacy": "Walgreens — 6850 Stirling Rd, Hollywood, FL",
    "language": "English",
    "race": "Black or African American",
    "address": "3018 Thomas St, Hollywood, FL 33021",
    "phone": "(954) 555-4820",
    "email": "deshawn.carter02@email.com",
    "emergencyContact": {
      "name": "Tanya Carter (Mother)",
      "phone": "(954) 555-4835"
    }
  },
  "problems": [
    {
      "problem": "Asthma, Moderate Persistent",
      "icd": "J45.40",
      "onset": "2008",
      "status": "Active",
      "notes": "Multiple ED visits for exacerbations; noncompliant with controller medications; 2 ICU admissions as child"
    },
    {
      "problem": "Allergic Rhinitis",
      "icd": "J30.9",
      "onset": "2010",
      "status": "Active",
      "notes": "Perennial; dust mite, mold, cockroach sensitized"
    },
    {
      "problem": "Eczema",
      "icd": "L20.9",
      "onset": "2005",
      "status": "Active",
      "notes": "Mild, intermittent flares"
    },
    {
      "problem": "Obesity, Class I",
      "icd": "E66.01",
      "onset": "2022",
      "status": "Active",
      "notes": "BMI 31.2"
    },
    {
      "problem": "GERD",
      "icd": "K21.0",
      "onset": "2023",
      "status": "Active",
      "notes": "Contributing to nocturnal asthma symptoms"
    }
  ],
  "medications": [
    {
      "name": "Fluticasone/Salmeterol 250/50mcg INH BID",
      "sig": "Inhale 1 puff twice daily; rinse mouth after use",
      "prescriber": "Dr. Morris",
      "start": "06/2021",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Montelukast 10mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Morris",
      "start": "08/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Albuterol 90mcg INH PRN",
      "sig": "Inhale 2 puffs every 4-6 hours as needed for shortness of breath or wheezing",
      "prescriber": "Dr. Morris",
      "start": "01/2010",
      "refills": 5,
      "status": "PRN"
    },
    {
      "name": "Omeprazole 20mg daily",
      "sig": "Take 1 capsule by mouth daily 30 minutes before breakfast",
      "prescriber": "Dr. Morris",
      "start": "04/2023",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Morris",
      "start": "03/2018",
      "refills": 6,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Aspirin",
      "type": "Drug",
      "reaction": "Bronchospasm",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "NSAIDs (Ibuprofen)",
      "type": "Drug",
      "reaction": "Wheezing, nasal congestion",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Cockroach",
      "type": "Environmental",
      "reaction": "Asthma exacerbation, rhinitis",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/15/2026",
      "bp": "138/82",
      "hr": 112,
      "rr": 28,
      "temp": "99.4°F",
      "spo2": "90%",
      "wt": "218 lbs",
      "ht": "5'10\"",
      "bmi": 31.3,
      "setting": "ED"
    },
    {
      "date": "11/04/2025",
      "bp": "124/78",
      "hr": 82,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "96%",
      "wt": "216 lbs",
      "ht": "5'10\"",
      "bmi": 31.0,
      "setting": "PCP Office"
    },
    {
      "date": "05/20/2025",
      "bp": "122/76",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "97%",
      "wt": "214 lbs",
      "ht": "5'10\"",
      "bmi": 30.7,
      "setting": "PCP Office"
    },
    {
      "date": "01/15/2025",
      "bp": "130/80",
      "hr": 100,
      "rr": 24,
      "temp": "99.0°F",
      "spo2": "92%",
      "wt": "210 lbs",
      "ht": "5'10\"",
      "bmi": 30.1,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/04/2025",
      "type": "Primary Care",
      "provider": "Dr. Angela Morris, MD",
      "cc": "Follow-up: asthma, medication refills",
      "hpi": "24-year-old male with moderate persistent asthma presenting for follow-up. Admits to inconsistent use of controller inhaler — reports using it 4-5 days/week rather than daily. Using rescue albuterol 3-4 times/week, increased from prior visit. Reports nocturnal symptoms 2-3 nights/week, often with heartburn. One ED visit in January 2025 for exacerbation treated with oral steroids. Denies current SOB. Smoking: denies tobacco but admits to occasional marijuana use (1-2x/month). GERD managed with omeprazole but takes it intermittently.",
      "exam": "General: Obese male in NAD. HEENT: Pale nasal mucosa, mild turbinate hypertrophy. Lungs: Mild bilateral expiratory wheezes, fair air movement. CV: RRR, tachycardic at 82. Abdomen: Soft, NT. Skin: Mild antecubital eczema.",
      "assessment": "1. Moderate persistent asthma — not well-controlled; medication nonadherence\n2. GERD — contributing to nocturnal asthma symptoms\n3. Allergic rhinitis — suboptimally controlled\n4. Obesity — contributing factor",
      "plan": "1. Counseled on daily controller use — demonstrated inhaler technique; set reminders\n2. Consider step-up to high-dose ICS/LABA if not improved in 4 weeks\n3. Reinforce daily omeprazole; elevate head of bed\n4. Marijuana cessation counseling\n5. PFTs ordered\n6. RTC 4 weeks"
    },
    {
      "id": "V002",
      "date": "01/15/2025",
      "type": "ED",
      "provider": "Dr. James Park, MD (Emergency Medicine)",
      "cc": "Acute shortness of breath, wheezing x 2 days",
      "hpi": "24-year-old male with known moderate persistent asthma presenting with 2 days of worsening dyspnea, cough, and wheezing. Reports URI symptoms for 4 days prior. Has been using albuterol every 2 hours with minimal relief. Ran out of controller inhaler 2 weeks ago and did not refill. Peak flow in ED 45% predicted. No fever at home. Denies chest pain.",
      "exam": "General: Sitting upright, using accessory muscles, speaking in short phrases. Lungs: Diffuse bilateral expiratory wheezes, decreased air entry at bases. CV: Tachycardic, regular. O2 sat 92% on RA.",
      "assessment": "1. Acute severe asthma exacerbation — triggered by viral URI; nonadherence to controller medications\n2. Moderate persistent asthma — uncontrolled",
      "plan": "1. Continuous nebulized albuterol/ipratropium x 1 hour\n2. IV methylprednisolone 125mg, then oral prednisone 40mg x 5 days\n3. Magnesium sulfate 2g IV\n4. Peak flow improved to 70% after treatment\n5. Discharge after 4-hour observation; refilled controller inhaler\n6. PCP follow-up in 1 week"
    },
    {
      "id": "V003",
      "date": "05/20/2025",
      "type": "Primary Care",
      "provider": "Dr. Angela Morris, MD",
      "cc": "Asthma follow-up, annual wellness",
      "hpi": "24-year-old male for follow-up after January 2025 ED visit for asthma exacerbation. Reports improved compliance with controller since ED visit. Using albuterol 1-2x/week. Nocturnal symptoms improved with consistent omeprazole use. No eczema flares. Weight stable.",
      "exam": "General: NAD, obese. HEENT: WNL. Lungs: CTAB, no wheezes. CV: RRR. Skin: Clear.",
      "assessment": "1. Moderate persistent asthma — improved with adherence\n2. GERD — improved\n3. Annual wellness",
      "plan": "1. Continue current regimen\n2. PFTs in 3 months\n3. Encourage weight loss; dietary counseling referral\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "02/15/2026",
      "time": "16:10",
      "orderedBy": "Dr. James Park, MD (ED)",
      "collected": "02/15/2026 15:45",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2026-021558",
      "status": "Final",
      "specimenType": "Arterial Blood, Serum",
      "fasting": "No",
      "groups": [
        {
          "name": "ARTERIAL BLOOD GAS (ABG)",
          "results": [
            { "test": "pH", "value": "7.42", "unit": "", "range": "7.35-7.45", "flag": "" },
            { "test": "pCO2", "value": "38", "unit": "mmHg", "range": "35-45", "flag": "" },
            { "test": "pO2", "value": "68", "unit": "mmHg", "range": "80-100", "flag": "L" },
            { "test": "HCO3", "value": "24", "unit": "mEq/L", "range": "22-26", "flag": "" },
            { "test": "O2 Saturation", "value": "91", "unit": "%", "range": "95-100", "flag": "L" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "12.6", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Neutrophils", "value": "62", "unit": "%", "range": "40-70", "flag": "" },
            { "test": "Eosinophils", "value": "6", "unit": "%", "range": "1-4", "flag": "H" },
            { "test": "Hemoglobin", "value": "15.2", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "45.6", "unit": "%", "range": "38.0-50.0", "flag": "" },
            { "test": "Platelet Count", "value": "288", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "118", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "Sodium", "value": "141", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "3.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "104", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "24", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "BUN", "value": "16", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/15/2026",
      "study": "CHEST XR PA",
      "accession": "IMG-2026-02158",
      "status": "FINAL",
      "orderedBy": "Dr. James Park, MD (ED)",
      "readBy": "Dr. David Rosenberg, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "STAT",
      "clinical": "24M with acute asthma exacerbation, hypoxia. R/O pneumonia, pneumothorax.",
      "technique": "Portable AP chest radiograph.",
      "findings": "Heart: Normal size.\\n\\nLungs: Hyperinflated lung fields bilaterally. No focal consolidation. No pleural effusion. No pneumothorax. Peribronchial thickening noted.\\n\\nBones: No acute fracture.",
      "impression": "1. Hyperinflated lungs with peribronchial thickening consistent with acute asthma/reactive airway disease.\\n2. No pneumonia or pneumothorax.",
      "dictated": "02/15/2026 16:40",
      "verified": "02/15/2026 17:15"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/10/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-335",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "11/01/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-790",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "2018",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, Obesity, alive at 48",
    "Father: Hypertension, alive at 50",
    "Brother: Asthma (childhood, outgrown), alive at 22",
    "Maternal grandmother: COPD, deceased at 70"
  ],
  "socialHistory": [
    ["Occupation", "Warehouse associate (Amazon)"],
    ["Marital", "Single"],
    ["Tobacco", "Denies cigarettes; occasional marijuana 1-2x/month (smoked)"],
    ["Alcohol", "Social, 2-3 drinks on weekends"],
    ["Drugs", "Marijuana as above; denies other substances"],
    ["Exercise", "Irregular; plays pickup basketball 1x/week"],
    ["Housing", "Apartment with 2 roommates; older building with known mold/cockroach issues"],
    ["Safety", "Denies IPV; seatbelt usually"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "asthma-exacerbation",
    "diagnosis": "Acute Severe Asthma Exacerbation",
    "acuity": 2,
    "presentation": "Allergic Reaction",
    "category": "pulmonary"
  }
};
