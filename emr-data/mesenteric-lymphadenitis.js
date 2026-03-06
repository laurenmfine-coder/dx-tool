// Virtual EMR Case: Mesenteric Lymphadenitis
// Variant: mesenteric-lymphadenitis | Acuity: ESI-4
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Jayden Williams",
  "patientHPI": "I've had this sore throat and stuffy nose for about five days now, along with a dry cough that won't go away. I've been running a low fever at home and just feel pretty run down overall.",
    "dob": "03/22/2006",
    "age": 19,
    "sex": "Male",
    "mrn": "RDX-2025-58294",
    "pronouns": "He/Him",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Nicole Baptiste, MD",
    "pharmacy": "Walgreens — 4001 S University Dr, Riverside, FL",
    "language": "English",
    "race": "Black or African American",
    "address": "2726 N Western Ave, Milwaukee, WI 53208",
    "phone": "(954) 555-7623",
    "email": "jwilliams2006@email.com",
    "emergencyContact": {
      "name": "Patricia Williams (Mother)",
      "phone": "(954) 555-7640"
    }
  },
  "problems": [
    {
      "problem": "Allergic Rhinitis, Seasonal",
      "icd": "J30.2",
      "onset": "2018",
      "status": "Active",
      "notes": ""
    },
    {
      "problem": "Obesity",
      "icd": "E66.01",
      "onset": "2023",
      "status": "Active",
      "notes": "BMI 23.7 — resolved; previously elevated in adolescence. Reclassify at next visit."
    },
    {
      "problem": "Recent Upper Respiratory Infection",
      "icd": "J06.9",
      "onset": "2026",
      "status": "Active",
      "notes": "Onset approximately 1 week prior to current presentation"
    }
  ],
  "medications": [
    {
      "name": "Cetirizine 10mg daily",
      "sig": "Take 1 tablet by mouth daily as needed for allergies",
      "prescriber": "Dr. Baptiste",
      "start": "04/2021",
      "refills": 5,
      "status": "PRN"
    },
    {
      "name": "Fluticasone Nasal Spray 50mcg 2 sprays each nostril daily",
      "sig": "Spray 2 sprays in each nostril once daily during allergy season",
      "prescriber": "Dr. Baptiste",
      "start": "03/2023",
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
      "bp": "122/76",
      "hr": 88,
      "rr": 16,
      "temp": "100.8°F",
      "spo2": "99%",
      "wt": "170 lbs",
      "ht": "5'11\"",
      "bmi": 23.7,
      "setting": "Urgent Care"
    },
    {
      "date": "09/10/2025",
      "bp": "118/72",
      "hr": 72,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "168 lbs",
      "ht": "5'11\"",
      "bmi": 23.4,
      "setting": "PCP Office"
    },
    {
      "date": "03/15/2025",
      "bp": "116/70",
      "hr": 70,
      "rr": 14,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "165 lbs",
      "ht": "5'11\"",
      "bmi": 23.0,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/11/2026",
      "type": "Urgent Care",
      "provider": "Dr. Sarah Kim, MD",
      "cc": "Sore throat, nasal congestion, cough x 5 days",
      "hpi": "19-year-old male presenting with 5 days of sore throat, nasal congestion, and nonproductive cough. Reports low-grade fevers at home (max 100.2°F). No shortness of breath, no rash. Has been taking OTC acetaminophen with mild relief. Appetite slightly decreased. No sick contacts identified but attends university classes.",
      "exam": "General: NAD, well-appearing. HEENT: Mild pharyngeal erythema without exudate, TMs clear bilaterally, nasal turbinates edematous. Neck: Supple, small bilateral anterior cervical lymphadenopathy, nontender. Lungs: CTAB, no wheezes. CV: RRR.",
      "assessment": "1. Acute upper respiratory infection — likely viral",
      "plan": "1. Supportive care: rest, fluids, acetaminophen/ibuprofen PRN\n2. Rapid strep negative\n3. RTC if worsening or not improving in 7-10 days"
    },
    {
      "id": "V002",
      "date": "09/10/2025",
      "type": "Primary Care",
      "provider": "Dr. Nicole Baptiste, MD",
      "cc": "Annual wellness visit / sports physical",
      "hpi": "19-year-old male for annual exam and sports physical clearance for intramural basketball. No active complaints. Seasonal allergies managed with cetirizine PRN. Denies chest pain, SOB, syncope with exercise. No prior surgeries. Immunizations up to date.",
      "exam": "General: Well-developed, well-nourished male in NAD. HEENT: WNL. CV: RRR, no murmurs, S1/S2 normal. Lungs: CTAB. Abdomen: Soft, NT/ND. MSK: Full ROM all extremities. Neuro: A&O x3, CN II-XII intact.",
      "assessment": "1. Annual wellness exam — healthy\n2. Sports clearance — no contraindications",
      "plan": "1. Cleared for sports participation\n2. Continue cetirizine PRN for seasonal allergies\n3. RTC 1 year or PRN"
    }
  ],
  "labs": [
    {
      "date": "02/18/2026",
      "time": "11:42",
      "orderedBy": "Dr. Sarah Kim, MD",
      "collected": "02/18/2026 11:20",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2026-021845",
      "status": "Final",
      "specimenType": "Serum, Whole Blood (EDTA)",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            { "test": "WBC", "value": "12.4", "unit": "x10³/µL", "range": "4.5-11.0", "flag": "H" },
            { "test": "Neutrophils", "value": "58", "unit": "%", "range": "40-70", "flag": "" },
            { "test": "Lymphocytes", "value": "32", "unit": "%", "range": "20-40", "flag": "" },
            { "test": "Hemoglobin", "value": "14.8", "unit": "g/dL", "range": "13.5-17.5", "flag": "" },
            { "test": "Hematocrit", "value": "44.2", "unit": "%", "range": "38.0-50.0", "flag": "" },
            { "test": "Platelet Count", "value": "262", "unit": "x10³/µL", "range": "150-400", "flag": "" }
          ]
        },
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "94", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "16", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "1.0", "unit": "mg/dL", "range": "0.7-1.3", "flag": "" },
            { "test": "Sodium", "value": "139", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.1", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "103", "unit": "mEq/L", "range": "98-106", "flag": "" },
            { "test": "CO2 (Bicarbonate)", "value": "25", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "ALT (SGPT)", "value": "20", "unit": "U/L", "range": "7-56", "flag": "" },
            { "test": "AST (SGOT)", "value": "24", "unit": "U/L", "range": "10-40", "flag": "" }
          ]
        },
        {
          "name": "INFLAMMATORY MARKERS",
          "results": [
            { "test": "C-Reactive Protein (CRP)", "value": "18.4", "unit": "mg/L", "range": "<5.0", "flag": "H" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/18/2026",
      "study": "CT ABDOMEN AND PELVIS WITH CONTRAST",
      "accession": "IMG-2026-02184",
      "status": "FINAL",
      "orderedBy": "Dr. Sarah Kim, MD",
      "readBy": "Dr. Elena Suarez, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "19M with RLQ pain and low-grade fever. R/O appendicitis.",
      "technique": "MDCT of the abdomen and pelvis with IV contrast.",
      "findings": "Appendix: Normal appendix identified, measuring 6 mm in diameter, without wall thickening, periappendiceal fat stranding, or appendicolith.\\n\\nBowel: No bowel obstruction or wall thickening. No free fluid.\\n\\nMesentery: Cluster of enlarged mesenteric lymph nodes in the right lower quadrant, largest measuring 12 mm in short axis. Mild surrounding fat stranding.\\n\\nSolid Organs: Liver, spleen, pancreas, kidneys, and adrenal glands unremarkable.\\n\\nPelvis: Urinary bladder normal.\\n\\nBones: No acute fracture.",
      "impression": "1. Mesenteric lymphadenitis with cluster of enlarged RLQ mesenteric lymph nodes.\\n2. Normal appendix — no evidence of acute appendicitis.\\n3. No other acute abdominal pathology.",
      "dictated": "02/18/2026 13:08",
      "verified": "02/18/2026 14:32"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (Quadrivalent)",
      "date": "09/20/2025",
      "site": "Left deltoid IM",
      "lot": "FL2025-289",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "COVID-19 (Pfizer 2025-26)",
      "date": "10/05/2025",
      "site": "Right deltoid IM",
      "lot": "CV2025-744",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap (Boostrix)",
      "date": "09/2021",
      "site": "Left deltoid IM",
      "lot": "—",
      "mfr": "GSK"
    },
    {
      "vaccine": "Meningococcal ACWY (Menactra)",
      "date": "08/2022",
      "site": "Left deltoid IM",
      "lot": "MN22-518",
      "mfr": "Sanofi Pasteur"
    },
    {
      "vaccine": "HPV (Gardasil 9) (3/3)",
      "date": "03/2020",
      "site": "Left deltoid IM",
      "lot": "HP20-331",
      "mfr": "Merck"
    }
  ],
  "familyHistory": [
    "Mother: Hypertension, Type 2 Diabetes Mellitus, alive at 48",
    "Father: Hyperlipidemia, alive at 50",
    "Sister: Healthy, age 16",
    "Maternal grandmother: Breast cancer at age 62 (deceased)"
  ],
  "socialHistory": [
    ["Occupation", "College student (sophomore, pre-nursing)"],
    ["Marital", "Single"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social, 1-2 drinks on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Intramural basketball 2x/week; gym 3x/week"],
    ["Housing", "University dormitory"],
    ["Safety", "Denies IPV; seatbelt always"],
    ["Advance Directive", "None on file"]
  ],
  "meta": {
    "caseId": "mesenteric-lymphadenitis",
    "diagnosis": "Mesenteric Lymphadenitis",
    "acuity": 4,
    "presentation": "Abdominal Pain",
    "category": "gastrointestinal"
  }
};
