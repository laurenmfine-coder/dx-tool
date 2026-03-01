// Virtual EMR Case: Brain Abscess
// Variant: brain-abscess | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Ricardo Jimenez",
    "dob": "11/04/1978",
    "age": 46,
    "sex": "Male",
    "mrn": "RDX-2025-47821",
    "pronouns": "He/Him",
    "insurance": "BlueCross BlueShield PPO",
    "pcp": "Dr. Ana Castillo, MD",
    "pharmacy": "Walgreens — 5001 S University Dr, Riverside, FL",
    "language": "English, Spanish",
    "race": "Hispanic/Latino",
    "address": "2714 SW 42nd Terrace, Fort Lauderdale, FL 33312",
    "phone": "(954) 555-7312",
    "email": "r.jimenez78@email.com",
    "emergencyContact": {
      "name": "Sofia Jimenez (Wife)",
      "phone": "(954) 555-7340"
    }
  },
  "problems": [
    {
      "problem": "Chronic Sinusitis",
      "icd": "J32.9",
      "onset": "2019",
      "status": "Chronic",
      "notes": "Recurrent maxillary and frontal sinusitis; multiple antibiotic courses; ENT referral recommended but not yet completed"
    },
    {
      "problem": "Type 2 Diabetes Mellitus",
      "icd": "E11.65",
      "onset": "2017",
      "status": "Active",
      "notes": "A1c trending up; suboptimal control"
    },
    {
      "problem": "Dental Caries with Periapical Abscess — history",
      "icd": "K04.7",
      "onset": "2024",
      "status": "Resolved",
      "notes": "Molar #19 extraction 08/2024 after periapical abscess; completed antibiotics"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2020",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Obesity, Class II",
      "icd": "E66.01",
      "onset": "2018",
      "status": "Active",
      "notes": "BMI 37; dietary counseling"
    }
  ],
  "medications": [
    {
      "name": "Metformin 1000mg BID",
      "sig": "Take 1 tablet by mouth twice daily with meals",
      "prescriber": "Dr. Castillo",
      "start": "03/2018",
      "refills": 2,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Castillo",
      "start": "01/2021",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Fluticasone 50mcg nasal spray BID",
      "sig": "Spray 2 sprays in each nostril twice daily",
      "prescriber": "Dr. Castillo",
      "start": "06/2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amoxicillin-Clavulanate 875mg/125mg BID",
      "sig": "Take 1 tablet by mouth twice daily for 14 days",
      "prescriber": "Dr. Castillo",
      "start": "01/2025",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Atorvastatin 20mg QHS",
      "sig": "Take 1 tablet by mouth at bedtime",
      "prescriber": "Dr. Castillo",
      "start": "09/2020",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Sulfonamides",
      "type": "Drug",
      "reaction": "Diffuse maculopapular rash",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "01/20/2025",
      "bp": "142/88",
      "hr": 92,
      "rr": 16,
      "temp": "100.8°F",
      "spo2": "97%",
      "wt": "248 lbs",
      "ht": "5'10\"",
      "bmi": 35.6,
      "setting": "Urgent Care"
    },
    {
      "date": "11/05/2024",
      "bp": "138/86",
      "hr": 78,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "98%",
      "wt": "245 lbs",
      "ht": "5'10\"",
      "bmi": 35.2,
      "setting": "PCP Office"
    },
    {
      "date": "07/15/2024",
      "bp": "144/90",
      "hr": 82,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "242 lbs",
      "ht": "5'10\"",
      "bmi": 34.7,
      "setting": "PCP Office"
    },
    {
      "date": "01/22/2024",
      "bp": "136/84",
      "hr": 76,
      "rr": 14,
      "temp": "98.2°F",
      "spo2": "99%",
      "wt": "238 lbs",
      "ht": "5'10\"",
      "bmi": 34.2,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/20/2025",
      "type": "Urgent Care",
      "provider": "Dr. Kevin Pham, MD",
      "cc": "Headache and facial pressure x 10 days, worsening",
      "hpi": "46-year-old male presents with 10 days of progressive bifrontal headache and maxillary facial pressure. Initially thought to be recurrent sinusitis; started Augmentin 5 days ago by PCP without improvement. Now reports nausea, subjective fevers, and new difficulty concentrating. Denies trauma, vision changes, or neck stiffness.",
      "exam": "General: Ill-appearing male, mildly diaphoretic. HEENT: TTP over bilateral maxillary sinuses; purulent drainage from left naris. Neck: Supple, no meningismus. CV: RRR, no murmurs. Lungs: CTAB. Neuro: A&O x3, CN II-XII intact, no focal deficits on screening exam. Mild difficulty with serial 7s.",
      "assessment": "1. Persistent sinusitis with worsening headache — incomplete response to antibiotics\n2. Concern for intracranial complication given immunocompromised state (DM) and worsening symptoms on antibiotics",
      "plan": "1. CT sinuses ordered; recommend CT head with contrast or MRI brain if symptoms do not improve within 48 hours\n2. Continue Augmentin; add pseudoephedrine PRN\n3. Return precautions: fever >101, vision changes, weakness, confusion, seizure → ED immediately"
    },
    {
      "id": "V002",
      "date": "11/05/2024",
      "type": "Primary Care",
      "provider": "Dr. Ana Castillo, MD",
      "cc": "Follow-up: diabetes, hypertension, sinusitis",
      "hpi": "46-year-old male for routine follow-up. Diabetes control suboptimal with A1c 8.1%. Reports 2 episodes of sinusitis in past 6 months requiring antibiotics. BP elevated today. Weight stable. Denies chest pain, SOB, polyuria.",
      "exam": "General: NAD, obese male. HEENT: Mild bilateral maxillary TTP, no purulence currently. Neck: Supple. CV: RRR. Lungs: CTAB. Abdomen: Soft, obese, NT. Extremities: No edema. Feet exam: intact sensation, no ulcers.",
      "assessment": "1. T2DM — A1c 8.1%, above goal\n2. HTN — suboptimally controlled\n3. Recurrent sinusitis — recommend ENT referral\n4. Obesity — dietary counseling",
      "plan": "1. Increase Metformin to 1000mg BID; recheck A1c in 3 months\n2. Continue Lisinopril 20mg; consider adding amlodipine if BP not at goal\n3. ENT referral placed for chronic sinusitis evaluation\n4. Dietary counseling; exercise 150 min/week goal\n5. RTC 3 months"
    },
    {
      "id": "V003",
      "date": "07/15/2024",
      "type": "Primary Care",
      "provider": "Dr. Ana Castillo, MD",
      "cc": "Acute sinusitis",
      "hpi": "46-year-old male presents with 7 days of facial pressure, nasal congestion, purulent rhinorrhea, and low-grade fever. Third episode this year. Denies dental pain currently. History of periapical abscess treated with extraction in 08/2024 (upcoming at time of visit — rescheduled from earlier).",
      "exam": "General: NAD. HEENT: Bilateral maxillary TTP, purulent drainage R naris, oropharynx mildly erythematous. Neck: No LAD. Lungs: CTAB.",
      "assessment": "1. Acute bacterial sinusitis — recurrent\n2. Recommend dental clearance and ENT evaluation",
      "plan": "1. Amoxicillin-Clavulanate 875mg BID x 10 days\n2. Nasal saline irrigation\n3. Continue fluticasone nasal spray\n4. Dental follow-up for molar extraction\n5. ENT referral if recurrence"
    }
  ],
  "labs": [
    {
      "date": "11/05/2024",
      "time": "09:15",
      "orderedBy": "Dr. Ana Castillo, MD",
      "collected": "11/05/2024 08:30",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-112847",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "Yes (12 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "158", "unit": "mg/dL", "range": "70-100", "flag": "H" },
            { "test": "BUN", "value": "18", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.5", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "101", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Calcium", "value": "9.4", "unit": "mg/dL", "range": "8.5-10.5", "flag": "" },
            { "test": "ALT (SGPT)", "value": "32", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "28", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1c",
          "results": [
            { "test": "HbA1c", "value": "8.1", "unit": "%", "range": "<5.7 normal; 5.7-6.4 prediabetes", "flag": "H" },
            { "test": "Est. Avg Glucose (eAG)", "value": "186", "unit": "mg/dL", "range": "—", "flag": "" }
          ]
        },
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "11.2", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Hemoglobin", "value": "14.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "44.1", "unit": "%", "range": "38.3-48.6", "flag": "" },
            { "test": "Platelet Count", "value": "282", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/20/2025",
      "study": "CT SINUSES WITHOUT CONTRAST",
      "accession": "IMG-2025-01201",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Pham, MD",
      "readBy": "Dr. Lisa Moreno, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "46M recurrent sinusitis, worsening headache on antibiotics, DM2.",
      "technique": "Helical CT of the paranasal sinuses without IV contrast, axial and coronal reformations.",
      "findings": "Maxillary sinuses: Bilateral mucosal thickening with near-complete opacification of the left maxillary sinus. Air-fluid level on the right.\\n\\nFrontal sinuses: Mucosal thickening bilaterally with partial opacification of the left frontal sinus. Possible bony dehiscence of the posterior table of the left frontal sinus — correlation with contrast-enhanced study recommended.\\n\\nEthmoid sinuses: Bilateral anterior and posterior ethmoid opacification.\\n\\nSphenoid sinuses: Mild mucosal thickening.\\n\\nOrbits: No proptosis or periorbital soft tissue swelling.\\n\\nNote: Limited evaluation of intracranial contents on sinus protocol.",
      "impression": "1. Extensive pansinusitis, most severe on the left.\\n2. Possible posterior table dehiscence of the left frontal sinus — recommend contrast-enhanced CT or MRI brain to evaluate for intracranial extension.",
      "dictated": "01/20/2025 14:22",
      "verified": "01/20/2025 15:08"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "10/01/2024",
      "site": "Left deltoid IM",
      "lot": "FL2024-331",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2024-25)",
      "date": "10/15/2024",
      "site": "Right deltoid IM",
      "lot": "CV2024-882",
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
      "vaccine": "Hepatitis B (3/3)",
      "date": "1998",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: T2DM, HTN, alive at 72",
    "Father: Stroke at age 64, deceased at 68",
    "Brother: T2DM, age 50",
    "Maternal grandmother: Brain tumor (type unknown), deceased at 60"
  ],
  "socialHistory": [
    ["Occupation", "Construction foreman"],
    ["Marital", "Married, 2 children"],
    ["Tobacco", "Former smoker — 10 pack-years; quit 2017"],
    ["Alcohol", "Social, 3-4 beers on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Minimal; physically active at work"],
    ["Housing", "Lives with wife and children in single-family home"],
    ["Safety", "Denies IPV; wears hard hat at work"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "brain-abscess",
    "diagnosis": "Brain Abscess (Secondary to Sinusitis with Contiguous Spread)",
    "acuity": 2,
    "presentation": "Headache",
    "category": "neurologic"
  }
};
