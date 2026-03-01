// Virtual EMR Case: DRESS Syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms)
// Variant: dress-syndrome | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Marcus Jefferson",
    "dob": "08/14/1988",
    "age": 37,
    "sex": "Male",
    "mrn": "NSU-2025-41128",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield HMO",
    "pcp": "Dr. Sandra Ellis, MD",
    "pharmacy": "CVS Pharmacy — 3201 N University Dr, Davie, FL",
    "language": "English",
    "race": "Black (African American)",
    "address": "4420 SW 52nd Ct, Davie, FL 33314",
    "phone": "(954) 555-6782",
    "email": "m.jefferson88@email.com",
    "emergencyContact": {
      "name": "Keisha Jefferson (Wife)",
      "phone": "(954) 555-6798"
    }
  },
  "problems": [
    {
      "problem": "Epilepsy — New Onset (Focal to Bilateral Tonic-Clonic)",
      "icd": "G40.209",
      "onset": "2025",
      "status": "Active",
      "notes": "First seizure 12/2025 — MRI brain normal; EEG showed left temporal sharp waves; started on carbamazepine 12/28/2025"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2022",
      "status": "Active",
      "notes": "On lisinopril; well controlled"
    },
    {
      "problem": "Seasonal Allergic Rhinitis",
      "icd": "J30.2",
      "onset": "2010",
      "status": "Active",
      "notes": "Uses cetirizine PRN during pollen season"
    }
  ],
  "medications": [
    {
      "name": "Carbamazepine 200mg BID",
      "sig": "Take 1 tablet by mouth twice daily",
      "prescriber": "Dr. Patel (Neurology)",
      "start": "12/2025",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "Take 1 tablet by mouth once daily",
      "prescriber": "Dr. Ellis",
      "start": "06/2022",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Cetirizine 10mg PRN",
      "sig": "Take 1 tablet by mouth daily as needed for allergy symptoms",
      "prescriber": "Dr. Ellis",
      "start": "03/2015",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "type": "None",
      "reaction": "None",
      "severity": "",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/18/2026",
      "bp": "108/68",
      "hr": 112,
      "rr": 22,
      "temp": "103.2°F",
      "spo2": "96%",
      "wt": "188 lbs",
      "ht": "5'11\"",
      "bmi": 26.2,
      "setting": "ED"
    },
    {
      "date": "12/28/2025",
      "bp": "132/82",
      "hr": 78,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "190 lbs",
      "ht": "5'11\"",
      "bmi": 26.5,
      "setting": "Neurology Office"
    },
    {
      "date": "09/15/2025",
      "bp": "128/78",
      "hr": 72,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "192 lbs",
      "ht": "5'11\"",
      "bmi": 26.8,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "12/28/2025",
      "type": "Specialist",
      "provider": "Dr. Anil Patel, MD (Neurology)",
      "cc": "New onset seizure — follow-up and medication initiation",
      "hpi": "37M presents after witnessed seizure at work 12/15/2025. Coworkers report patient stared blankly for ~15 seconds, then had generalized tonic-clonic activity x 90 seconds with postictal confusion x 10 minutes. MRI brain normal. EEG shows left temporal sharp waves consistent with focal epilepsy. No prior seizure history. No family history of epilepsy. No recent head trauma, substance use, or sleep deprivation.",
      "exam": "NAD, A&O x3. CN II-XII intact. Motor: 5/5 throughout. DTRs 2+ symmetric. Sensation intact. Gait normal. No skin rashes.",
      "assessment": "1. New onset focal epilepsy with secondary generalization — left temporal focus",
      "plan": "1. Start carbamazepine 200mg BID — titrate as needed\n2. Baseline labs: CBC, CMP, carbamazepine level in 2 weeks\n3. Driving restrictions discussed and documented\n4. Seizure precautions reviewed\n5. Return 1 month with labs"
    },
    {
      "id": "V002",
      "date": "09/15/2025",
      "type": "Primary Care",
      "provider": "Dr. Sandra Ellis, MD",
      "cc": "Annual physical, HTN follow-up",
      "hpi": "37M presents for annual wellness exam. HTN well-controlled on lisinopril. No complaints. Reports regular exercise, healthy diet. Denies headaches, vision changes, chest pain, or dyspnea.",
      "exam": "NAD. CV: RRR, no murmurs. Lungs: CTAB. Skin: No lesions. Neuro: Intact.",
      "assessment": "1. HTN — controlled\n2. Routine preventive care — up to date",
      "plan": "1. Continue lisinopril 10mg\n2. Labs: Lipid panel, CMP, CBC\n3. Return 1 year"
    }
  ],
  "labs": [
    {
      "date": "01/12/2026",
      "time": "09:00",
      "orderedBy": "Dr. Patel (Neurology)",
      "collected": "01/12/2026 09:15",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2026-011204",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            { "test": "WBC", "value": "6.8", "unit": "K/uL", "range": "4.5-11.0", "flag": "" },
            { "test": "Hemoglobin", "value": "14.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "44.2", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelets", "value": "224", "unit": "K/uL", "range": "150-400", "flag": "" },
            { "test": "Eosinophils (%)", "value": "3.2", "unit": "%", "range": "0-5", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "92", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "ALT", "value": "22", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST", "value": "18", "unit": "U/L", "range": "10-40", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.2", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" }
          ]
        },
        {
          "name": "CARBAMAZEPINE LEVEL",
          "results": [
            { "test": "Carbamazepine", "value": "6.8", "unit": "mcg/mL", "range": "4.0-12.0", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "12/15/2025",
      "study": "MRI BRAIN WITH AND WITHOUT CONTRAST",
      "accession": "IMG-2025-121540",
      "status": "FINAL",
      "orderedBy": "Dr. Torres (ED)",
      "readBy": "Dr. Robert Nguyen, MD (Neuroradiology)",
      "facility": "Memorial Regional Hospital — Hollywood, FL",
      "priority": "STAT",
      "clinical": "New onset seizure, first event — rule out structural lesion",
      "technique": "Multiplanar, multisequence MRI of the brain performed with and without gadolinium contrast.",
      "findings": "Gray-white differentiation: Normal. No restricted diffusion on DWI.\n\nParenchyma: No mass, hemorrhage, or acute infarction. No cortical dysplasia. Hippocampal formations symmetric without mesial temporal sclerosis.\n\nVentricular system: Normal size and morphology.\n\nExtra-axial spaces: Unremarkable.\n\nPost-contrast: No pathologic enhancement.\n\nVascular: Normal flow voids.",
      "impression": "1. Normal MRI brain.\n2. No structural epileptogenic lesion identified.",
      "dictated": "12/15/2025 22:40",
      "verified": "12/16/2025 08:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-8440", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Pfizer)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-1780", "mfr": "Pfizer" },
    { "vaccine": "Tdap", "date": "11/2022", "site": "Left deltoid IM", "lot": "TD22-712", "mfr": "GSK" },
    { "vaccine": "Hepatitis B Series", "date": "2005", "site": "Right deltoid IM", "lot": "HB05-330", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother: Hypertension, T2DM, alive at 64",
    "Father: Hypertension, CAD — CABG at 58, alive at 66",
    "Brother: Healthy, alive at 40",
    "Maternal grandmother: Drug allergy (severe reaction to phenytoin — hospitalized)"
  ],
  "socialHistory": [
    ["Occupation", "IT project manager at financial services firm"],
    ["Marital", "Married 8 years; 2 children (ages 3 and 6)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 2-3 beers per week; stopped since seizure diagnosis"],
    ["Drugs", "Denies"],
    ["Exercise", "Jogging 3x/week, weight training 2x/week — paused since seizure"],
    ["Housing", "Single-family home with wife and children"],
    ["Safety", "Driving restriction in effect; wife driving; seatbelt; no firearms"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "dress-syndrome",
    "diagnosis": "DRESS Syndrome (Carbamazepine-Induced Drug Reaction with Eosinophilia and Systemic Symptoms — Hepatitis, Lymphadenopathy, and Diffuse Morbilliform Eruption)",
    "acuity": 2,
    "presentation": "Skin / Soft Tissue Emergency",
    "category": "dermatologic"
  }
};
