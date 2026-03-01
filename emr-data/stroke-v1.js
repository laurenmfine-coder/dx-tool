// Virtual EMR Case: Acute Ischemic Stroke (Left MCA)
// Variant: stroke-v1 | Acuity: ESI-1
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "Robert Chen",
    "dob": "04/22/1952",
    "age": 73,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare Part B",
    "pcp": "Dr. Patricia Moore, MD",
    "pharmacy": "Publix \u2014 Riverside, FL",
    "language": "English",
    "race": "Asian (Chinese)",
    "address": "5520 SW 39th St, Riverside, FL",
    "phone": "(954) 555-3322",
    "email": "r.chen52@email.com",
    "emergencyContact": {
      "name": "Linda Chen (Wife)",
      "phone": "(954) 555-3340"
    },
    "mrn": "RDX-2025-40169"
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation",
      "icd": "I48.91",
      "onset": "2020",
      "status": "Active",
      "notes": "Rate-controlled; on apixaban but has been non-adherent x 2 weeks (ran out)"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2005",
      "status": "Active",
      "notes": "On amlodipine/losartan"
    },
    {
      "problem": "Hyperlipidemia",
      "icd": "E78.5",
      "onset": "2008",
      "status": "Active",
      "notes": "On rosuvastatin"
    },
    {
      "problem": "Type 2 Diabetes",
      "icd": "E11.9",
      "onset": "2012",
      "status": "Active",
      "notes": "A1C 7.8; on metformin/glipizide"
    }
  ],
  "medications": [
    {
      "name": "Apixaban 5mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Moore",
      "start": "03/2020",
      "refills": 0,
      "status": "Active \u2014 ran out 2 weeks ago"
    },
    {
      "name": "Metoprolol Tartrate 50mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Moore",
      "start": "03/2020",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Amlodipine 10mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Moore",
      "start": "06/2015",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Losartan 100mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Moore",
      "start": "01/2010",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Metformin 1000mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Moore",
      "start": "04/2012",
      "refills": 5,
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
      "bp": "178/98",
      "hr": 92,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "97%",
      "wt": "172 lbs",
      "ht": "5'7\"",
      "bmi": 26.9,
      "setting": "ED \u2014 Stroke Alert"
    },
    {
      "date": "02/26/2026",
      "bp": "168/92",
      "hr": 88,
      "rr": 16,
      "temp": "98.2\u00b0F",
      "spo2": "98%",
      "wt": "172 lbs",
      "ht": "5'7\"",
      "bmi": 26.9,
      "setting": "ED \u2014 Post-tPA"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED \u2014 Stroke Alert",
      "provider": "Dr. Michelle Santos, MD (Neurology)",
      "cc": "Sudden onset R-sided weakness, slurred speech x 90 minutes",
      "hpi": "73M with AFib (off anticoagulation x 2 weeks) found by wife with sudden R-sided weakness and slurred speech 90 min ago. Was watching TV, suddenly slumped right, couldn't lift right arm, speech became garbled. Wife called 911 immediately. Last known normal 90 minutes ago. NIHSS: 16 (R hemiparesis 4, aphasia 2, R facial droop 2, dysarthria 2, neglect 2, gaze deviation 2, sensory 2).",
      "exam": "Alert but globally aphasic (can follow simple commands inconsistently). R facial droop (UMN pattern). Eyes deviated left. R hemiplegia \u2014 arm 0/5, leg 2/5. R sensory neglect. Dysarthric when attempting speech. R Babinski positive. Irregularly irregular rhythm (AFib).",
      "assessment": "1. Acute ischemic stroke \u2014 Left MCA territory. NIHSS 16.\n2. Likely cardioembolic etiology (AFib off anticoagulation)\n3. tPA candidate \u2014 within 4.5-hour window, no contraindications",
      "plan": "1. STAT CT head non-contrast \u2014 COMPLETED: No hemorrhage\n2. CT angiography head/neck\n3. tPA (alteplase) 0.9 mg/kg IV \u2014 bolus + 1hr infusion\n4. Neurology admission to Neuro ICU\n5. BP target <180/105 during tPA infusion\n6. Repeat NIHSS q1h x 6hr\n7. Thrombectomy evaluation if large vessel occlusion on CTA\n8. NPO \u2014 swallow evaluation in AM\n9. Restart anticoagulation per neurology (timing TBD)"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "10:00",
      "orderedBy": "Dr. Santos",
      "collected": "02/26/2026 10:00",
      "facility": "ReasonDx Memorial — ED Lab",
      "accession": "LAB-2026-02261000",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "COMPLETE BLOOD COUNT",
          "results": [
            {
              "test": "WBC",
              "value": "9.8",
              "unit": "K/uL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.2",
              "unit": "g/dL",
              "range": "13.5-17.5",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "42.8",
              "unit": "%",
              "range": "38.3-48.6",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "218",
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
              "value": "188",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
            },
            {
              "test": "BUN",
              "value": "22",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": "H"
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.7-1.3",
              "flag": ""
            },
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.4",
              "unit": "mEq/L",
              "range": "3.5-5.1",
              "flag": ""
            }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            {
              "test": "PT",
              "value": "12.2",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": ""
            },
            {
              "test": "INR",
              "value": "1.0",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "PTT",
              "value": "28",
              "unit": "sec",
              "range": "25-35",
              "flag": ""
            }
          ]
        },
        {
          "name": "STROKE LABS",
          "results": [
            {
              "test": "Troponin I",
              "value": "0.02",
              "unit": "ng/mL",
              "range": "<0.04",
              "flag": ""
            },
            {
              "test": "A1C",
              "value": "7.8",
              "unit": "%",
              "range": "<5.7",
              "flag": "H"
            },
            {
              "test": "TSH",
              "value": "2.4",
              "unit": "mIU/L",
              "range": "0.4-4.0",
              "flag": ""
            },
            {
              "test": "Lipid Panel \u2014 LDL",
              "value": "128",
              "unit": "mg/dL",
              "range": "<100",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "date": "02/26/2026",
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "Stroke alert \u2014 acute R hemiplegia, aphasia, NIHSS 16",
      "technique": "Non-contrast CT head.",
      "findings": "No acute intracranial hemorrhage. No midline shift. Early loss of gray-white differentiation in left insular cortex (early ischemic changes \u2014 ASPECTS 9). Chronic microvascular ischemic changes. No mass effect.",
      "impression": "1. No hemorrhage \u2014 tPA candidate.\n2. Early ischemic changes left MCA territory (ASPECTS 9).\n3. CTA recommended for large vessel occlusion evaluation.",
      "dictated": "02/26/2026 15:00",
      "verified": "02/26/2026 15:20"
    },
    {
      "date": "02/26/2026",
      "study": "CT ANGIOGRAPHY HEAD AND NECK",
      "accession": "IMG-2026-022601",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Anika Patel, MD (Radiology)",
      "facility": "ReasonDx Memorial — Radiology",
      "priority": "STAT",
      "clinical": "Large vessel occlusion evaluation",
      "technique": "CTA head and neck with IV contrast.",
      "findings": "Left M1 segment MCA occlusion identified \u2014 abrupt cutoff. Left ICA patent. Right-sided circulation patent. Circle of Willis incomplete (absent left P-comm). Vertebrobasilar system patent.",
      "impression": "1. Left M1 MCA occlusion \u2014 thrombectomy candidate.\n2. Intact cervical vasculature.\n3. Neurovascular intervention recommended.",
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
    "Father: Stroke at 70, deceased at 74",
    "Mother: HTN, T2DM, alive at 92",
    "Brother: AFib, alive at 70"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired accountant"
    ],
    [
      "Marital",
      "Married 48 years"
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
      "Tai chi 3x/week"
    ],
    [
      "Advance Directive",
      "Full code; DPOA wife Linda"
    ]
  ],
  "meta": {
    "caseId": "stroke-v1",
    "diagnosis": "Acute Ischemic Stroke (Left MCA)",
    "acuity": 1,
    "presentation": "Altered Mental Status",
    "category": "neurologic"
  }
};
