// Virtual EMR Case: Acute-on-Chronic Subdural Hematoma
// Variant: subdural-hematoma | Acuity: ESI-2
// Auto-generated from ED Board clinical data

window.EMR_DATA = {
  "patient": {
    "name": "George Mitchell",
    "dob": "02/14/1942",
    "age": 84,
    "sex": "Male",
    "pronouns": "He/Him",
    "insurance": "Medicare",
    "pcp": "Dr. Steven Park, MD",
    "pharmacy": "Publix \u2014 Pompano Beach, FL",
    "language": "English",
    "race": "White",
    "address": "620 NE 14th St, Pompano Beach, FL",
    "phone": "(954) 555-7744",
    "email": "g.mitchell42@email.com",
    "emergencyContact": {
      "name": "Nancy Mitchell (Daughter)",
      "phone": "(954) 555-7760"
    },
    "mrn": "NSU-2025-80008"
  },
  "problems": [
    {
      "problem": "Atrial Fibrillation",
      "icd": "I48.91",
      "onset": "2019",
      "status": "Active",
      "notes": "On apixaban 5mg BID"
    },
    {
      "problem": "Fall 10 Days Ago",
      "icd": "W19",
      "onset": "02/2026",
      "status": "Active",
      "notes": "Fell hitting head on coffee table; seen at urgent care \u2014 CT not done; small forehead laceration repaired with steri-strips"
    },
    {
      "problem": "Hypertension",
      "icd": "I10",
      "onset": "2000",
      "status": "Active",
      "notes": "On losartan"
    },
    {
      "problem": "Mild Dementia",
      "icd": "F01.50",
      "onset": "2023",
      "status": "Active",
      "notes": "Vascular dementia; MMSE 20/30"
    }
  ],
  "medications": [
    {
      "name": "Apixaban 5mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Park",
      "start": "06/2019",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Losartan 50mg daily",
      "sig": "PO daily",
      "prescriber": "Dr. Park",
      "start": "06/2005",
      "refills": 5,
      "status": "Active"
    },
    {
      "name": "Memantine 10mg BID",
      "sig": "PO BID",
      "prescriber": "Dr. Park",
      "start": "01/2024",
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
      "bp": "162/88",
      "hr": 72,
      "rr": 14,
      "temp": "98.2\u00b0F",
      "spo2": "97%",
      "wt": "165 lbs",
      "ht": "5'8\"",
      "bmi": 25.1,
      "setting": "ED"
    }
  ],
  "visits": [
    {
      "id": "V001",
      "date": "02/26/2026",
      "type": "ED",
      "provider": "Dr. James Carter, MD",
      "cc": "Progressive confusion, left-sided weakness x 3 days",
      "hpi": "84M on apixaban with fall + head strike 10 days ago presents with progressive decline over 3 days. Daughter reports he has been increasingly confused (worse than baseline dementia), having difficulty with left hand, and now dragging his left foot. Headache reported 'on and off' for a week. No new falls. No seizure activity. No fever. CT was NOT done at initial urgent care visit \u2014 only laceration repair. Classic delayed presentation of subdural hematoma in anticoagulated elderly patient.",
      "exam": "Drowsy but arousable, oriented to name only (baseline oriented x 2). Healing laceration right forehead. Left pronator drift. Left grip strength 3/5 (R 5/5). Left lower extremity 4/5 throughout. Upgoing left plantar reflex (Babinski). Pupils equal and reactive. No papilledema (limited exam). Gait not tested \u2014 unsteady.",
      "assessment": "1. Acute-on-chronic subdural hematoma \u2014 right-sided, given L-sided deficits\n2. Anticoagulated patient (apixaban) \u2014 increases bleed risk and complicates surgical planning\n3. Subacute presentation over 10 days following head trauma\n4. Need urgent reversal and neurosurgical evaluation",
      "plan": "1. STAT CT head without contrast\n2. HOLD apixaban\n3. Andexanet alfa (factor Xa reversal agent) if available; otherwise 4-factor PCC\n4. Neurosurgery STAT consult\n5. CBC, CMP, coags (anti-Xa level), type & screen\n6. Seizure precautions\n7. If large with midline shift \u2192 likely surgical evacuation (burr holes or craniotomy)\n8. ICU admission\n9. Goals of care discussion with daughter (POA)"
    }
  ],
  "labs": [
    {
      "date": "02/26/2026",
      "time": "11:00",
      "orderedBy": "Dr. James Carter, MD",
      "collected": "02/26/2026 11:10",
      "facility": "NSU Memorial \u2014 ED Lab",
      "accession": "LAB-2026-260441",
      "status": "Final",
      "specimenType": "Venous Blood",
      "fasting": "No",
      "groups": [
        {
          "name": "CBC",
          "results": [
            {
              "test": "WBC",
              "value": "8.8",
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
              "test": "Platelets",
              "value": "168",
              "unit": "K/uL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "COAGULATION",
          "results": [
            {
              "test": "PT",
              "value": "13.2",
              "unit": "sec",
              "range": "11.0-13.5",
              "flag": ""
            },
            {
              "test": "INR",
              "value": "1.1",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            },
            {
              "test": "Anti-Xa (Apixaban)",
              "value": "2.8",
              "unit": "ng/mL",
              "range": "<1.0 trough",
              "flag": "H"
            }
          ]
        },
        {
          "name": "BMP",
          "results": [
            {
              "test": "Sodium",
              "value": "140",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.2",
              "unit": "mg/dL",
              "range": "0.7-1.3",
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
      "study": "CT HEAD WITHOUT CONTRAST",
      "accession": "IMG-2026-260441",
      "status": "FINAL",
      "orderedBy": "Dr. James Carter, MD",
      "readBy": "Dr. Thomas Lee, MD (Neuroradiology)",
      "facility": "NSU Memorial \u2014 Radiology",
      "priority": "STAT",
      "clinical": "Anticoagulated elderly patient, progressive confusion and L hemiparesis after head trauma 10 days ago",
      "technique": "Non-contrast CT head.",
      "findings": "Large right-sided mixed-density subdural hematoma (acute-on-chronic) measuring maximum 22 mm thickness. Hyperdense (acute) component posteriorly with hypodense (chronic) component anteriorly. Rightward-to-leftward midline shift of 12 mm. Effacement of right lateral ventricle. Left lateral ventricle mildly dilated (trapped). No uncal herniation. Underlying brain parenchyma with chronic microvascular changes.",
      "impression": "1. Large right acute-on-chronic subdural hematoma (22 mm max thickness).\n2. Significant midline shift (12 mm) with mass effect.\n3. NEUROSURGICAL EMERGENCY \u2014 evacuation recommended.\n4. Reversal of anticoagulation required pre-operatively.",
      "dictated": "02/26/2026 11:20",
      "verified": "02/26/2026 11:30"
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
      "vaccine": "COVID-19 Booster",
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
    "Wife: Deceased 2021 (breast cancer)",
    "Daughter: Healthy, alive at 56",
    "Son: HTN, alive at 58"
  ],
  "socialHistory": [
    [
      "Occupation",
      "Retired postal worker"
    ],
    [
      "Marital",
      "Widowed; lives with daughter since 2022"
    ],
    [
      "Tobacco",
      "Former \u2014 quit 1990"
    ],
    [
      "Alcohol",
      "None currently"
    ],
    [
      "Exercise",
      "Very limited mobility"
    ],
    [
      "Advance Directive",
      "Full code per daughter (POA) \u2014 with caveat: 'no prolonged life support if no meaningful recovery'"
    ]
  ],
  "meta": {
    "caseId": "subdural-hematoma",
    "diagnosis": "Acute-on-Chronic Subdural Hematoma",
    "acuity": 2,
    "presentation": "Geriatric Emergency",
    "category": "geriatric"
  }
};
