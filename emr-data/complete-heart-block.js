// Virtual EMR Case: Complete (Third-Degree) Heart Block
// Variant: complete-heart-block | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Walter Thompson",
    "dob": "01/15/1943",
    "age": 83,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare",
    "pcp": "Dr. Helen Russo, MD",
    "pharmacy": "CVS \u2014 Deerfield Beach, FL",
    "language": "English",
    "race": "White",
    "address": "220 SE 10th St, Deerfield Beach, FL",
    "phone": "(954) 555-2244",
    "email": "w.thompson43@email.com",
    "emergencyContact": {
      "name": "Barbara Thompson (Wife)",
      "phone": "(954) 555-2260"
    },
    "mrn": "NSU-2025-87940"
  },
  "problems": [
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "1995",
      "status": "Active",
      "notes": "On metoprolol and lisinopril"
    },
    {
      "problem": "Aortic Stenosis \u2014 Moderate",
      "icd": "I35.0",
      "onset": "2022",
      "status": "Active",
      "notes": "AVA 1.2 cm\u00b2; being monitored; calcific/degenerative"
    },
    {
      "problem": "CKD Stage 3b",
      "icd": "N18.32",
      "onset": "2020",
      "status": "Active",
      "notes": "eGFR 38; hypertensive nephrosclerosis"
    },
    {
      "problem": "BPH",
      "icd": "N40.0",
      "onset": "2015",
      "status": "Active",
      "notes": "On tamsulosin; nocturia x 2-3"
    }
  ],
  "medications": [
    {
      "name": "Metoprolol Tartrate 50mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Russo",
      "start": "06/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Lisinopril 10mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Russo",
      "start": "01/2000",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Tamsulosin 0.4mg QHS",
      "sig": "PO at bedtime",
      "prescriber": "Dr. Russo",
      "start": "03/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Aspirin 81mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Russo",
      "start": "01/2010",
      "refills": 11,
      "status": "Active"
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
      "date": "02/26/2026",
      "bp": "92/54",
      "hr": 34,
      "rr": 18,
      "temp": "97.8\u00b0F",
      "spo2": "93%",
      "wt": "172 lbs",
      "ht": "5'9\"",
      "bmi": 25.4,
      "setting": "ED"
    },
    {
      "date": "02/26/2026",
      "bp": "108/68",
      "hr": 62,
      "rr": 16,
      "temp": "98.0\u00b0F",
      "spo2": "97%",
      "wt": "172 lbs",
      "ht": "5'9\"",
      "bmi": 25.4,
      "setting": "ED \u2014 Post-TCP"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Dizziness, near-syncope, feeling faint x 2 days",
      "hpi": "83M presents via EMS after wife found him sitting on floor, unable to stand due to dizziness. Reports 2 days of progressive lightheadedness, fatigue, and one episode of near-syncope yesterday. Denies chest pain or dyspnea at rest but feels short of breath with minimal exertion. EMS ECG showed complete heart block with ventricular rate 32 bpm.",
      "exam": "Lethargic but oriented x 3. Pale. JVP mildly elevated. CV: Bradycardic, regular but slow. Cannon A waves in JVP. Soft systolic murmur at RUSB. Variable S1 intensity. Lungs: Bibasilar crackles. Extremities: Cool, trace edema.",
      "assessment": "1. Complete (third-degree) heart block with hemodynamic compromise\n2. Likely idiopathic degenerative conduction disease (Lev/Lenegre) given age\n3. Metoprolol may be contributing \u2014 HOLD\n4. Needs emergent transcutaneous pacing \u2192 permanent pacemaker",
      "plan": "1. HOLD metoprolol\n2. Atropine 1mg IV push (may not work in infranodal block)\n3. Transcutaneous pacing \u2014 capture at 70 mA, rate 60\n4. If TCP fails: transvenous pacing\n5. Cardiology STAT consult for permanent pacemaker\n6. CBC, CMP, TSH, troponin, digoxin level\n7. ICU admission\n8. Pre-pacer workup: echo, chest X-ray"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "09:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 09:00",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-02260900",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "7.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "36.8",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": "L"
            },
            {
              "test": "Platelets",
              "value": "198",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Glucose",
              "value": "92",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "42",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "2.1",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": "H"
            },
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "5.0",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "CARDIAC",
          "results": [
            {
              "test": "Troponin I",
              "value": "0.06",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": "H"
            },
            {
              "test": "BNP",
              "value": "682",
              "unit": "pg/mL",
              "range": "<100",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "3.8",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            },
            {
              "test": "Magnesium",
              "value": "1.6",
              "unit": "mg/dL",
              "range": "1.7-2.2",
              "flag": "L"
            },
            {
              "test": "Digoxin Level",
              "value": "<0.2",
              "unit": "ng/mL",
              "range": "0.8-2.0",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "12-LEAD ELECTROCARDIOGRAM",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. James Carter, MD",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Bradycardia, near-syncope",
      "technique": "Standard 12-lead ECG.",
      "findings": "Rate: 32 bpm. Complete AV dissociation \u2014 P waves at ~72 bpm, QRS complexes at 32 bpm with no consistent PR relationship. Escape rhythm: Wide QRS (148 ms) \u2014 ventricular escape. Left axis deviation. ST-T changes consistent with rate-related repolarization abnormality.\n\nNo acute ST elevation or depression.",
      "impression": "1. Complete (third-degree) AV block with slow ventricular escape rhythm at 32 bpm.\n2. Wide QRS escape \u2014 infranodal block (His-Purkinje disease).\n3. Hemodynamically significant \u2014 pacing required.",
      "dictated": "02/26/2026 15:00",
      "verified": "02/26/2026 15:20"
    }
  ],
  "immunizations": [
    {
      "vaccine": "Influenza (2025-2026)",
      "date": "10/2025",
      "site": "Left deltoid IM",
      "lot": "FL25-8001",
      "mfr": "Sanofi"
    },
    {
      "vaccine": "COVID-19 Booster (Pfizer)",
      "date": "09/2025",
      "site": "Right deltoid IM",
      "lot": "CV25-2101",
      "mfr": "Pfizer"
    },
    {
      "vaccine": "Tdap",
      "date": "03/2021",
      "site": "Left deltoid IM",
      "lot": "TD21-502",
      "mfr": "GSK"
    },
    {
      "vaccine": "Shingrix (complete)",
      "date": "2023",
      "site": "Left deltoid IM",
      "lot": "SX23-412",
      "mfr": "GSK"
    },
    {
      "vaccine": "Prevnar 20",
      "date": "03/2024",
      "site": "Left deltoid IM",
      "lot": "PV20-900",
      "mfr": "Pfizer"
    }
  ],
  "familyHistory": [
    "Father: Pacemaker at age 78, deceased at 88",
    "Mother: CHF, deceased at 82",
    "Brother: Atrial fibrillation, alive at 80"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired postal supervisor"
    ],
    [
      "Marital",
      "Married 58 years"
    ],
    [
      "Tobacco",
      "Never"
    ],
    [
      "Alcohol",
      "Rare"
    ],
    [
      "Exercise",
      "Previously walked daily; limited by symptoms x 2 days"
    ],
    [
      "Advance Directive",
      "Full code; DPOA wife Barbara"
    ]
  ],
  "meta": {
    "caseId": "complete-heart-block",
    "diagnosis": "Complete (Third-Degree) Heart Block",
    "acuity": 2,
    "presentation": "Cardiac Emergency",
    "category": "cardiac"
  }
};
