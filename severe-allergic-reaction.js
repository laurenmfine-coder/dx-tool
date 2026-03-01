// Virtual EMR Case: Severe Allergic Reaction (Anaphylaxis)
// Variant: severe-allergic-reaction | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Thomas Rivera",
    "dob": "02/20/1978",
    "age": 48,
    "sex": "Male",
    "mrn": "NSU-2025-46290",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield HMO",
    "pcp": "Dr. Daniel Herrera, MD",
    "pharmacy": "CVS Pharmacy — 4500 Hollywood Blvd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic",
    "address": "2240 N 56th Ave, Hollywood, FL 33021",
    "phone": "(954) 555-7812",
    "email": "t.rivera78@email.com",
    "emergencyContact": {
      "name": "Maria Rivera (Wife)",
      "phone": "(954) 555-7825"
    }
  },
  "problems": [
    {
      "problem": "Hymenoptera Venom Allergy (Honeybee)",
      "icd": "T63.441A",
      "onset": "2022",
      "status": "Active",
      "notes": "First systemic reaction 2022 (urticaria, lightheadedness after bee sting); positive venom skin test; receiving venom immunotherapy"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2015",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2018",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "History of Nasal Polyposis",
      "icd": "J33.0",
      "onset": "2019",
      "status": "Active",
      "notes": "Functional endoscopic sinus surgery 2020; recurrence of small polyps"
    },
    {
      "problem": "Chronic Rhinosinusitis",
      "icd": "J32.9",
      "onset": "2017",
      "status": "Active",
      "notes": ""
    }
  ],
  "medications": [
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Herrera",
      "start": "08/2016",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Rosuvastatin 10mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Herrera",
      "start": "03/2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Fluticasone Nasal Spray 50mcg 2 sprays each nostril BID",
      "sig": "Spray 2 sprays in each nostril twice daily",
      "prescriber": "Dr. Herrera",
      "start": "04/2020",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Montelukast 10mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Gupta",
      "start": "05/2020",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Epinephrine Auto-Injector 0.3mg (2-pack)",
      "sig": "Inject into outer thigh at onset of severe allergic reaction; call 911 immediately; carry at all times",
      "prescriber": "Dr. Gupta",
      "start": "06/2022",
      "refills": 2,
      "status": "PRN"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Herrera",
      "start": "01/2020",
      "refills": 6,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Honeybee Venom",
      "type": "Environmental",
      "reaction": "Anaphylaxis — urticaria, hypotension, throat tightness, lightheadedness",
      "severity": "Severe",
      "verified": "Yes"
    },
    {
      "allergen": "Aspirin (Historical — Previously Documented)",
      "type": "Drug",
      "reaction": "Nasal polyp exacerbation — aspirin-desensitized 2020; now tolerates 81mg daily",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/25/2026",
      "bp": "82/50",
      "hr": 124,
      "rr": 26,
      "temp": "98.2°F",
      "spo2": "92%",
      "wt": "195 lbs",
      "ht": "5'9\"",
      "bmi": 28.8,
      "setting": "ED"
    },
    {
      "date": "11/10/2025",
      "bp": "132/82",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "194 lbs",
      "ht": "5'9\"",
      "bmi": 28.6,
      "setting": "Specialist"
    },
    {
      "date": "06/04/2025",
      "bp": "134/84",
      "hr": 76,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "192 lbs",
      "ht": "5'9\"",
      "bmi": 28.3,
      "setting": "PCP Office"
    },
    {
      "date": "12/12/2024",
      "bp": "136/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "196 lbs",
      "ht": "5'9\"",
      "bmi": 28.9,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "11/10/2025",
      "type": "Specialist",
      "provider": "Dr. Sanjay Gupta, MD (Allergy/Immunology)",
      "cc": "Venom immunotherapy maintenance injection; follow-up",
      "hpi": "48-year-old male on honeybee venom immunotherapy (maintenance phase since 01/2024). Tolerating injections well. No systemic reactions to injections. Last field sting was 08/2025 — stung on arm while gardening; developed only local reaction (2 cm wheal, no systemic symptoms), demonstrating efficacy of VIT. Carries epinephrine at all times. Chronic rhinosinusitis stable on fluticasone and montelukast post-aspirin desensitization. No respiratory complaints.",
      "exam": "General: NAD. HEENT: Nasal mucosa mildly edematous, no active polyps visualized on anterior rhinoscopy. Lungs: CTAB. CV: RRR. Skin: No urticaria. Injection site observed 30 min post-injection — 1 cm wheal, no systemic symptoms.",
      "assessment": "1. Honeybee venom allergy — on maintenance VIT; demonstrated field sting tolerance\n2. Chronic rhinosinusitis with nasal polyposis — stable post-desensitization\n3. Aspirin-exacerbated respiratory disease — stable on aspirin 81mg after desensitization",
      "plan": "1. Continue VIT maintenance q4wk; plan for 5-year course\n2. Continue aspirin 81mg, montelukast, fluticasone nasal\n3. Renew EpiPen 2-pack\n4. RTC 4 weeks for next injection"
    },
    {
      "id": "V002",
      "date": "06/04/2025",
      "type": "Primary Care",
      "provider": "Dr. Daniel Herrera, MD",
      "cc": "Annual wellness; chronic disease management",
      "hpi": "48-year-old male for annual exam. HTN controlled on lisinopril. Hyperlipidemia on rosuvastatin — last lipid panel at goal. No chest pain, SOB, or exercise intolerance. Sinus symptoms improved since aspirin desensitization. Bee venom immunotherapy ongoing. Exercising 3-4x/week. Diet improved.",
      "exam": "General: NAD, well-nourished. HEENT: Mild nasal congestion, no polyps visible. CV: RRR, no murmurs. Lungs: CTAB. Abdomen: Soft, NT/ND. Extremities: No edema.",
      "assessment": "1. Annual wellness\n2. HTN — well-controlled\n3. Hyperlipidemia — at goal on rosuvastatin\n4. CRS with nasal polyposis — stable",
      "plan": "1. Continue current medications\n2. Lab work: CMP, lipid panel, CBC\n3. Colonoscopy due — referral placed\n4. RTC 6 months"
    }
  ],
  "labs": [
    {
      "date": "02/25/2026",
      "time": "13:15",
      "orderedBy": "Dr. James Park, MD (ED)",
      "collected": "02/25/2026 12:50",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2026-022561",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "14.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Neutrophils", "value": "58", "unit": "%", "range": "40-70", "flag": "" },
            { "test": "Eosinophils", "value": "2", "unit": "%", "range": "1-4", "flag": "" },
            { "test": "Hemoglobin", "value": "15.4", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "46.2", "unit": "%", "range": "38.0-50.0", "flag": "" },
            { "test": "Platelet Count", "value": "302", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL (BMP)",
          "results": [
            { "test": "Glucose", "value": "148", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "Sodium", "value": "138", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "3.8", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "102", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "22", "unit": "mEq/L", "range": "23-29", "flag": "L" },
            { "test": "BUN", "value": "22", "unit": "mg/dL", "range": "7-20", "flag": "H" },
            { "test": "Creatinine", "value": "1.2", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" }
          ]
        },
        {
          "name": "TRYPTASE",
          "results": [
            { "test": "Serum Tryptase", "value": "42.8", "unit": "ng/mL", "range": "<11.4", "flag": "H" }
          ]
        },
        {
          "name": "LACTATE",
          "results": [
            { "test": "Lactate", "value": "3.8", "unit": "mmol/L", "range": "0.5-2.0", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/25/2026",
      "study": "CHEST XR PA",
      "accession": "IMG-2026-02253",
      "status": "FINAL",
      "orderedBy": "Dr. James Park, MD (ED)",
      "readBy": "Dr. David Rosenberg, MD (Radiology)",
      "facility": "NSU Health — Davie Campus Imaging",
      "priority": "STAT",
      "clinical": "48M with anaphylaxis, hypotension, wheezing. R/O other etiologies.",
      "technique": "Portable AP chest radiograph.",
      "findings": "Heart: Normal size.\\n\\nLungs: Mild peribronchial thickening. No focal consolidation, effusion, or pneumothorax.\\n\\nBones: No acute fracture.",
      "impression": "1. Mild peribronchial thickening — may be related to bronchospasm in setting of anaphylaxis.\\n2. No pneumonia or pneumothorax.",
      "dictated": "02/25/2026 13:42",
      "verified": "02/25/2026 14:20"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/22/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-278",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/12/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-762",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Adacel)",
      "date": "2020",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "Shingrix (1/2)",
      "date": "—",
      "site": "—",
      "lot": "—",
      "mfr": "Not yet administered (age-appropriate at 50)"
    }
  ],
  "familyHistory": [
    "Mother: Asthma, alive at 74",
    "Father: Coronary artery disease (CABG age 62), Type 2 Diabetes Mellitus, alive at 76",
    "Brother: Bee sting allergy (local reactions only), alive at 45",
    "Sister: Healthy, alive at 42"
  ],
  "socialHistory": [
    ["Occupation", "Landscape architect; significant outdoor exposure"],
    ["Marital", "Married, 3 children (ages 16, 14, 10)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Moderate, 2-3 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Running 3x/week; weight training 2x/week"],
    ["Housing", "Single-family home with wife and children; extensive garden (bee exposure risk)"],
    ["Safety", "Denies IPV; seatbelt always; carries EpiPen at all times; wears medical alert bracelet"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "severe-allergic-reaction",
    "diagnosis": "Severe Allergic Reaction (Anaphylaxis — Hymenoptera Venom)",
    "acuity": 1,
    "presentation": "Allergic Reaction",
    "category": "immunologic"
  }
};
