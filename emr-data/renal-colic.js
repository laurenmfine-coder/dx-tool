/* emr-data/renal-colic.js — Auto-generated EMR case data for Renal Colic */
window.EMR_DATA = {
  "patient": {
    "name": "Brian Mitchell",
  "patientHPI": "This morning I woke up with the worst pain I've ever felt in my left side, like someone's twisting a knife in my back, and it shoots down toward my groin. The pain comes in waves and makes me want to throw up - I've had kidney stones before and this feels exactly the same.",
    "dob": "07/21/1989",
    "age": "37",
    "sex": "Male",
    "pronouns": "he/him",
    "mrn": "MRN-930530",
    "language": "English",
    "race": "White",
    "phone": "(414) 555-2988",
    "email": "brian.mitchell@email.com",
    "address": "7713 Larkspur Ln, Minneapolis, MN 55411",
    "insurance": "Oscar Health",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Rite Aid — Palm Ave",
    "emergencyContact": {
      "name": "Priya Mitchell",
      "phone": "(614) 555-3184",
      "relationship": "Spouse"
    },
    "chiefComplaint": "Acute-onset colicky left flank pain radiating to groin",
    "diagnosis": "Renal Colic"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Prior kidney stones (2 episodes)",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Gout",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Allopurinol",
      "dose": "100mg",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wu, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "",
      "severity": "",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/01/2026",
      "time": "07:45",
      "bp": "158/92",
      "hr": "98",
      "rr": "18",
      "temp": "37.0°C",
      "spo2": "99%",
      "pain": "10/10",
      "bmi": "21",
      "weight": "58 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/01/2026",
      "provider": "Dr. ED Attending",
      "cc": "Acute-onset colicky left flank pain radiating to groin",
      "hpi": "Brian Mitchell is a 37-year-old male presenting with acute-onset colicky left flank pain radiating to groin. Past medical history includes Prior kidney stones (2 episodes), Gout. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Renal Colic — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/01/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-496778",
      "collected": "03/01/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "7.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "13.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "41.2",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "245",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": ""
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "139",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.2",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "102",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "24",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "16",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.9",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "98",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.4",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/01/2026",
      "study": "CT Abdomen/Pelvis without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-795498",
      "clinical": "Acute-onset colicky left flank pain radiating to groin",
      "technique": "Standard protocol",
      "findings": "5mm obstructing calculus in left proximal ureter with moderate left hydronephrosis. Perinephric stranding. No second stone identified.",
      "impression": "Left ureteral calculus with obstruction. Likely to pass spontaneously. Urology follow-up if no passage in 2-4 weeks.",
      "dictated": "03/01/2026 08:30",
      "verified": "03/01/2026 09:15"
    }
  ],
  "immunizations": [
    {
      "name": "Influenza",
      "date": "10/15/2025",
      "lot": "FL-2025",
      "site": "Left Deltoid"
    },
    {
      "name": "COVID-19 (Updated)",
      "date": "09/01/2025",
      "lot": "CV-2025",
      "site": "Right Deltoid"
    },
    {
      "name": "Tdap",
      "date": "03/2020",
      "lot": "TD-2020",
      "site": "Left Deltoid"
    }
  ],
  "familyHistory": [
    "Father: kidney stones"
  ],
  "socialHistory": [
    [
      "Hydration",
      "Admits to poor fluid intake"
    ],
    [
      "Prior stones",
      "Passed 3mm and 4mm stones previously without intervention"
    ]
  ]
};
