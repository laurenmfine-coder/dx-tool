// Virtual EMR Case: Pulmonary Embolism — Massive (Presenting with Syncope)
// Variant: pulmonary-embolism-syncope | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Claudia Reyes-Batista",
    "dob": "03/09/1978",
    "age": 47,
    "sex": "Female",
    "mrn": "NSU-2025-42572",
    "pronouns": "She/Her",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Patricia Morales, MD",
    "pharmacy": "Publix Pharmacy — 3100 Stirling Rd, Hollywood, FL",
    "language": "English, Spanish",
    "race": "Hispanic (Dominican American)",
    "address": "5824 Plunkett St, Hollywood, FL 33023",
    "phone": "(954) 555-7720",
    "email": "c.reyesbatista@email.com",
    "emergencyContact": {
      "name": "Luis Batista (Husband)",
      "phone": "(954) 555-7738"
    }
  },
  "problems": [
    {
      "problem": "Left Tibial Plateau Fracture — Status Post ORIF",
      "icd": "S82.101A",
      "onset": "2026",
      "status": "Active",
      "notes": "Slip-and-fall at work 01/18/2026; ORIF performed 01/20/2026; non-weight-bearing in long leg cast x 6 weeks; due for cast removal 03/03/2026; VTE prophylaxis: enoxaparin 40mg SQ daily — patient reports inconsistent use due to injection site bruising"
    },
    {
      "problem": "Obesity, BMI 36.2",
      "icd": "E66.01",
      "onset": "2015",
      "status": "Active",
      "notes": "Class II obesity"
    },
    {
      "problem": "Oral Contraceptive Use",
      "icd": "Z79.3",
      "onset": "2020",
      "status": "Active",
      "notes": "Combined OCP (norgestimate-ethinyl estradiol); not stopped perioperatively — additional VTE risk factor"
    },
    {
      "problem": "Migraine Without Aura",
      "icd": "G43.009",
      "onset": "2008",
      "status": "Active",
      "notes": "On sumatriptan PRN; 2-3 episodes per month"
    }
  ],
  "medications": [
    {
      "name": "Enoxaparin 40mg SQ daily",
      "sig": "Inject 40 mg subcutaneously once daily for VTE prophylaxis",
      "prescriber": "Dr. Chen (Orthopedic Surgery)",
      "start": "01/2026",
      "refills": 0,
      "status": "Active"
    },
    {
      "name": "Norgestimate-Ethinyl Estradiol (Sprintec) daily",
      "sig": "Take 1 tablet by mouth daily per pack directions",
      "prescriber": "Dr. Morales",
      "start": "03/2020",
      "refills": 11,
      "status": "Active"
    },
    {
      "name": "Sumatriptan 50mg PRN",
      "sig": "Take 1 tablet by mouth at onset of migraine; may repeat once after 2 hours if needed",
      "prescriber": "Dr. Morales",
      "start": "06/2010",
      "refills": 3,
      "status": "PRN"
    },
    {
      "name": "Oxycodone 5mg PRN (post-surgical)",
      "sig": "Take 1 tablet by mouth every 6 hours as needed for severe pain",
      "prescriber": "Dr. Chen (Orthopedic Surgery)",
      "start": "01/2026",
      "refills": 0,
      "status": "PRN"
    },
    {
      "name": "Acetaminophen 500mg PRN",
      "sig": "Take 1-2 tablets by mouth every 6 hours as needed for pain; max 3000mg/day",
      "prescriber": "Dr. Morales",
      "start": "01/2026",
      "refills": 3,
      "status": "PRN"
    }
  ],
  "allergies": [
    {
      "allergen": "Ibuprofen",
      "type": "Drug",
      "reaction": "GI bleeding — melena episode requiring ER visit (2016)",
      "severity": "Severe",
      "verified": "Yes"
    }
  ],
  "vitals": [
    {
      "date": "02/26/2026",
      "bp": "86/52",
      "hr": 128,
      "rr": 28,
      "temp": "98.8°F",
      "spo2": "88%",
      "wt": "208 lbs",
      "ht": "5'5\"",
      "bmi": 34.6,
      "setting": "ED"
    },
    {
      "date": "02/04/2026",
      "bp": "128/82",
      "hr": 78,
      "rr": 16,
      "temp": "98.4°F",
      "spo2": "98%",
      "wt": "212 lbs",
      "ht": "5'5\"",
      "bmi": 35.3,
      "setting": "Orthopedic Office"
    },
    {
      "date": "09/18/2025",
      "bp": "126/80",
      "hr": 74,
      "rr": 16,
      "temp": "98.6°F",
      "spo2": "99%",
      "wt": "214 lbs",
      "ht": "5'5\"",
      "bmi": 35.6,
      "setting": "PCP Office"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/04/2026",
      "type": "Specialist",
      "provider": "Dr. David Chen, MD (Orthopedic Surgery)",
      "cc": "Post-op follow-up — left tibial plateau fracture ORIF, 2 weeks",
      "hpi": "47F presents 2 weeks post-ORIF left tibial plateau fracture. Wound healing well. Pain managed with oxycodone (using 1-2 tabs daily, down from 4/day week 1). Non-weight-bearing in long leg cast. Using wheelchair at home. Reports difficulty with enoxaparin self-injections — large bruises at injection sites; admits missing 3-4 doses in past week. OCP was not stopped prior to surgery (oversight in urgent surgical setting). Denies calf swelling, redness, or SOB.",
      "exam": "Surgical wound (lateral approach): Clean, dry, intact. Staples in place. No erythema, drainage, or dehiscence. Cast intact. Distal pulses palpable. Sensation intact toes. Toes warm, cap refill <2 sec.",
      "assessment": "1. Left tibial plateau fracture — 2 weeks post-ORIF, healing well\n2. VTE prophylaxis non-adherence — concerning given multiple risk factors (fracture, immobility, OCP, obesity)",
      "plan": "1. Staple removal at 3 weeks\n2. CRITICAL: Emphasized importance of enoxaparin adherence — patient has 4 major VTE risk factors (fracture/surgery, immobility, OCP, obesity)\n3. Discussed OCP — recommend stopping; switch to progesterone-only or non-hormonal method; patient to call OB/GYN\n4. Cast removal and transition to hinged brace at 6 weeks (03/03)\n5. Return 2 weeks"
    },
    {
      "id": "V002",
      "date": "09/18/2025",
      "type": "Primary Care",
      "provider": "Dr. Patricia Morales, MD",
      "cc": "Annual wellness, migraine management",
      "hpi": "47F presents for annual exam. Migraines stable — 2-3/month, responsive to sumatriptan. On combined OCP for contraception and menstrual regulation. Weight stable at 214 lbs. Denies chest pain, dyspnea, or leg swelling.",
      "exam": "Obese female. CV: RRR, no murmurs. Lungs: CTAB. Ext: No edema. Neuro: Intact.",
      "assessment": "1. Migraine — stable\n2. Obesity — counseled on weight management\n3. OCP use — reviewed risk factors; patient declines change",
      "plan": "1. Continue current medications\n2. Labs: Lipid panel, CMP, CBC, A1c\n3. Return 1 year"
    }
  ],
  "labs": [
    {
      "date": "09/18/2025",
      "time": "09:00",
      "orderedBy": "Dr. Morales",
      "collected": "09/18/2025 09:15",
      "facility": "NSU Health — Davie Campus Lab",
      "accession": "LAB-2025-800918",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "Yes (10 hrs)",
      "groups": [
        {
          "name": "COMPREHENSIVE METABOLIC PANEL",
          "results": [
            { "test": "Glucose", "value": "98", "unit": "mg/dL", "range": "70-100", "flag": "" },
            { "test": "BUN", "value": "14", "unit": "mg/dL", "range": "7-20", "flag": "" },
            { "test": "Creatinine", "value": "0.8", "unit": "mg/dL", "range": "0.6-1.1", "flag": "" },
            { "test": "Sodium", "value": "140", "unit": "mEq/L", "range": "136-145", "flag": "" },
            { "test": "Potassium", "value": "4.0", "unit": "mEq/L", "range": "3.5-5.1", "flag": "" }
          ]
        },
        {
          "name": "LIPID PANEL",
          "results": [
            { "test": "Total Cholesterol", "value": "218", "unit": "mg/dL", "range": "<200", "flag": "H" },
            { "test": "LDL", "value": "138", "unit": "mg/dL", "range": "<100", "flag": "H" },
            { "test": "HDL", "value": "48", "unit": "mg/dL", "range": ">50", "flag": "L" },
            { "test": "Triglycerides", "value": "162", "unit": "mg/dL", "range": "<150", "flag": "H" }
          ]
        },
        {
          "name": "HEMOGLOBIN A1C",
          "results": [
            { "test": "HbA1c", "value": "5.6", "unit": "%", "range": "<5.7", "flag": "" }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "01/18/2026",
      "study": "X-RAY LEFT KNEE AND TIBIA 3-VIEW",
      "accession": "IMG-2026-011822",
      "status": "FINAL",
      "orderedBy": "Dr. Torres (ED)",
      "readBy": "Dr. Alan Wu, MD (Radiology)",
      "facility": "Memorial Regional Hospital — Hollywood, FL",
      "priority": "STAT",
      "clinical": "Fall with left knee pain, inability to bear weight",
      "technique": "AP, lateral, and oblique views of the left knee and proximal tibia.",
      "findings": "Comminuted fracture of the lateral tibial plateau (Schatzker Type II) with 6mm articular depression. No associated fibular fracture. Moderate joint effusion (lipohemarthrosis on cross-table lateral). No distal tibial or femoral fractures.",
      "impression": "1. Schatzker Type II lateral tibial plateau fracture with 6mm depression — surgical candidate.\n2. Lipohemarthrosis consistent with intra-articular fracture.",
      "dictated": "01/18/2026 19:30",
      "verified": "01/18/2026 20:00"
    }
  ],
  "immunizations": [
    { "vaccine": "Influenza (2025-2026)", "date": "10/2025", "site": "Left deltoid IM", "lot": "FL25-9224", "mfr": "Sanofi" },
    { "vaccine": "COVID-19 Booster (Moderna)", "date": "10/2025", "site": "Right deltoid IM", "lot": "CV25-2340", "mfr": "Moderna" },
    { "vaccine": "Tdap", "date": "07/2022", "site": "Left deltoid IM", "lot": "TD22-488", "mfr": "GSK" },
    { "vaccine": "HPV (Gardasil 9) — Series Complete", "date": "2020", "site": "Left deltoid IM", "lot": "HP20-508", "mfr": "Merck" }
  ],
  "familyHistory": [
    "Mother: DVT after hip replacement at age 62, HTN, alive at 72",
    "Father: T2DM, CAD — MI at 58, alive at 74",
    "Sister: Factor V Leiden heterozygous (diagnosed after DVT during pregnancy), alive at 50",
    "Brother: Healthy, alive at 44"
  ],
  "socialHistory": [
    ["Occupation", "Warehouse supervisor at distribution center — on workers' comp leave since fracture"],
    ["Marital", "Married 18 years; 2 children (ages 12 and 15)"],
    ["Tobacco", "Never smoker"],
    ["Alcohol", "Social — 1-2 drinks on weekends"],
    ["Drugs", "Denies"],
    ["Exercise", "Previously walked 30 min daily; currently immobile in wheelchair since fracture"],
    ["Housing", "Single-family home with husband and children; bedroom upstairs — sleeping on couch since fracture"],
    ["Safety", "Denies IPV; seatbelt; no firearms"],
    ["Advance Directive", "None — not discussed"]
  ],
  "meta": {
    "caseId": "pulmonary-embolism-syncope",
    "diagnosis": "Massive Pulmonary Embolism with Syncope (Post-Orthopedic Surgery DVT — Tibial Plateau ORIF with Non-Adherence to VTE Prophylaxis, Active Combined OCP, Obesity, Family History of VTE/Factor V Leiden)",
    "acuity": 1,
    "presentation": "Syncope",
    "category": "cardiovascular"
  }
};
