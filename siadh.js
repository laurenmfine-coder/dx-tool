// Virtual EMR Case: SIADH (Drug-Induced — Sertraline + HCTZ)
// Variant: siadh | Acuity: ESI-3
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Beverly Coleman",
    "dob": "11/03/1957",
    "age": 67,
    "sex": "Female",
    "mrn": "RDX-2025-92184",
    "pronouns": "She/Her",
    "insurance": "Medicare Part A/B + BlueCross Supplement",
    "pcp": "Dr. Jennifer Adams, MD",
    "pharmacy": "CVS Pharmacy — 4501 S University Dr, Riverside, FL",
    "language": "English",
    "race": "Black/African American",
    "address": "5612 SW 38th Ct, Fort Lauderdale, FL 33314",
    "phone": "(954) 555-7842",
    "email": "b.coleman57@email.com",
    "emergencyContact": {
      "name": "Denise Coleman (Daughter)",
      "phone": "(954) 555-7848"
    }
  },
  "problems": [
    {
      "problem": "Major Depressive Disorder — Recurrent",
      "icd": "F33.1",
      "onset": "2018",
      "status": "Active",
      "notes": "On sertraline 150mg; dose increased from 100mg 6 weeks ago due to worsening symptoms after retirement"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "On HCTZ 25mg + lisinopril 20mg"
    },
    {
      "problem": "Osteoporosis",
      "icd": "M81.0",
      "onset": "2019",
      "status": "Active",
      "notes": "On alendronate"
    }
  ],
  "medications": [
    {
      "name": "Sertraline 150mg daily",
      "sig": "Take 1 tablet by mouth daily (INCREASED from 100mg to 150mg 6 weeks ago)",
      "prescriber": "Dr. Adams",
      "start": "01/2025 (dose increase)",
      "refills": 3,
      "status": "Active — RECENTLY INCREASED"
    },
    {
      "name": "Hydrochlorothiazide 25mg daily",
      "sig": "Take 1 tablet by mouth daily in the morning",
      "prescriber": "Dr. Adams",
      "start": "03/2010",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Lisinopril 20mg daily",
      "sig": "Take 1 tablet by mouth daily",
      "prescriber": "Dr. Adams",
      "start": "06/2012",
      "refills": 4,
      "status": "Active"
    },
    {
      "name": "Alendronate 70mg weekly",
      "sig": "Take 1 tablet by mouth once weekly on empty stomach",
      "prescriber": "Dr. Adams",
      "start": "08/2019",
      "refills": 3,
      "status": "Active"
    },
    {
      "name": "Calcium 600mg + Vitamin D 800 IU daily",
      "sig": "Take 1 tablet by mouth daily with food",
      "prescriber": "Dr. Adams",
      "start": "08/2019",
      "refills": 3,
      "status": "Active"
    }
  ],
  "allergies": [
    {
      "allergen": "Fluoxetine",
      "type": "Drug",
      "reaction": "Severe agitation and insomnia",
      "severity": "Moderate",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/27/2025",
      "bp": "118/72",
      "hr": 78,
      "rr": 16,
      "temp": "98.2°F",
      "spo2": "98%",
      "wt": "148 lbs",
      "ht": "5'4\"",
      "bmi": 25.4,
      "setting": "ED"
    },
    {
      "date": "01/08/2025",
      "bp": "134/82",
      "hr": 74,
      "rr": 14,
      "temp": "98.4°F",
      "spo2": "99%",
      "wt": "146 lbs",
      "ht": "5'4\"",
      "bmi": 25.1,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "01/08/2025",
      "type": "Primary Care",
      "provider": "Dr. Jennifer Adams, MD",
      "cc": "Worsening depression since retirement, medication adjustment",
      "hpi": "67-year-old female with MDD presenting with worsening depressive symptoms since retiring 3 months ago. Low mood, anhedonia, poor sleep, decreased appetite, social withdrawal. Daughter reports she 'barely leaves the house.' Current sertraline 100mg not providing adequate relief. No suicidal ideation. No psychotic features.",
      "exam": "General: Appears fatigued, tearful at times. CV: RRR. Lungs: CTA. Neuro: A&O x3, psychomotor slowing noted. Psych: Depressed mood, restricted affect, no SI/HI.",
      "assessment": "1. MDD — worsening, partial response to sertraline 100mg\n2. Hypertension — controlled\n3. NOTE: Patient on SSRI + HCTZ — both associated with hyponatremia risk; Na should be checked after dose increase",
      "plan": "1. Increase sertraline from 100mg to 150mg daily\n2. CMP with sodium in 2-4 weeks after dose change — ORDER PLACED\n3. Therapy referral\n4. Safety planning — daughter involved\n5. RTC 4 weeks — PATIENT DID NOT GET LABS OR RETURN"
    }
  ],
  "labs": [
    {
      "date": "02/27/2025",
      "time": "11:42",
      "orderedBy": "Dr. Kevin Tran, MD (ED)",
      "collected": "02/27/2025 11:25",
      "facility": "ReasonDx Medical Center Lab",
      "accession": "LAB-2025-112218",
      "status": "Final",
      "specimenType": "Serum, Urine",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL (CMP)",
          "results": [
            { "test": "Glucose", "value": "92", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "8", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.7", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "121", "unit": "mEq/L", "range": "136-145", "flag": "L" },
            { "test": "Potassium", "value": "3.6", "unit": "mEq/L", "range": "3.5-5.0", "flag": "" },
            { "test": "Chloride", "value": "90", "unit": "mEq/L", "range": "98-106", "flag": "L" },
            { "test": "CO2 (Bicarbonate)", "value": "24", "unit": "mEq/L", "range": "23-29", "flag": "" },
            { "test": "Uric Acid", "value": "2.8", "unit": "mg/dL", "range": "2.5-7.0", "flag": "" }
          ]
        },
        {
          "name": "SERUM AND URINE OSMOLALITY",
          "results": [
            { "test": "Serum Osmolality", "value": "254", "unit": "mOsm/kg", "range": "275-295", "flag": "L" },
            { "test": "Urine Osmolality", "value": "520", "unit": "mOsm/kg", "range": "300-900", "flag": "" },
            { "test": "Urine Sodium", "value": "82", "unit": "mEq/L", "range": "20-200", "flag": "" }
          ]
        },
        {
          "name": "THYROID AND CORTISOL",
          "results": [
            { "test": "TSH", "value": "2.4", "unit": "mIU/L", "range": "0.5-4.5", "flag": "" },
            { "test": "AM Cortisol", "value": "12.8", "unit": "µg/dL", "range": "6.0-18.0", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/27/2025",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2025-11182",
      "status": "FINAL",
      "orderedBy": "Dr. Kevin Tran, MD",
      "readBy": "Dr. Angela Reyes, MD (Radiology)",
      "facility": "ReasonDx Medical Center Imaging",
      "priority": "STAT",
      "clinical": "67-year-old with confusion, gait instability, Na 121",
      "technique": "Non-contrast axial CT head.",
      "findings": "BRAIN: No acute hemorrhage, mass, or infarction. Age-appropriate volume loss. No cerebral edema.\n\nVENTRICLES: Normal.\n\nOTHER: No fracture.",
      "impression": "1. No acute intracranial pathology",
      "dictated": "02/27/2025 12:00",
      "verified": "02/27/2025 12:08"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (Fluarix Quadrivalent)", "date": "10/2024", "site": "Left deltoid IM", "lot": "FL921P", "mfr": "GSK" },
    { "vaccine": "COVID-19 (Pfizer, updated)", "date": "10/2024", "site": "Right deltoid IM", "lot": "PF522K", "mfr": "Pfizer" },
    { "vaccine": "Shingrix (2nd dose)", "date": "03/2022", "site": "Left deltoid IM", "lot": "SH208R", "mfr": "GSK" },
    { "vaccine": "Pneumococcal (PCV20)", "date": "11/2023", "site": "Left deltoid IM", "lot": "PV312T", "mfr": "Pfizer" }
  ],
  "familyHistory": [
    "Mother: Deceased at 82 — stroke, hypertension",
    "Father: Deceased at 75 — prostate cancer",
    "Sister (age 64): Depression, hypertension",
    "Daughter (age 42): Healthy"
  ],
  "socialHistory": [
    ["Occupation", "Recently retired — former school counselor (32 years); struggling with transition"],
    ["Marital", "Divorced x 15 years; lives alone; daughter visits weekly"],
    ["Tobacco", "Never"],
    ["Alcohol", "Rare — occasional wine"],
    ["Drugs", "Denies"],
    ["Exercise", "Walking 20 min/day — decreased since depression worsened"],
    ["Housing", "Condo; lives alone; daughter has key"],
    ["Safety", "No firearms; no SI currently; daughter checks on her regularly"],
    ["Advance Directive", "Healthcare proxy: Denise Coleman (daughter)"]
  ],
  "meta": {
    "caseId": "siadh",
    "diagnosis": "SIADH — Drug-Induced (Sertraline Dose Increase + HCTZ Synergy) with Symptomatic Hyponatremia (Na 121)",
    "acuity": 3,
    "presentation": "Renal / Electrolyte Emergency",
    "category": "endocrine"
  }
};
