/* emr-data/crao.js — EMR case data for Central Retinal Artery Occlusion (CRAO) */
window.EMR_DATA = {
  "patient": {
    "name": "Dolores Eriksen",
  "patientHPI": "I woke up this morning and I can't see anything out of my left eye - it's like someone just turned off the lights on that side. It happened suddenly and completely, and I'm terrified because I've never had anything like this happen before.",
    "dob": "07/10/1976",
    "age": "50",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-310304",
    "language": "English",
    "race": "American Indian",
    "phone": "(630) 555-7172",
    "email": "dolores.eriksen@email.com",
    "address": "3063 Poplar Ave, Minneapolis, MN 55401",
    "insurance": "Aetna HMO",
    "pcp": "Dr. Amy Patel, MD",
    "pharmacy": "Publix Pharmacy — Broward Blvd",
    "emergencyContact": {
      "name": "Priya Baker",
      "phone": "(317) 555-3658",
      "relationship": "Sibling"
    },
    "chiefComplaint": "I can't see out of my left eye Left eye — complete",
    "diagnosis": "Central Retinal Artery Occlusion (CRAO)"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Atrial fibrillation",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Hypertension",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-3",
      "description": "Hyperlipidemia",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-4",
      "description": "Carotid stenosis",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Apixaban",
      "dose": "5mg BID (admits missing doses frequently)",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-2",
      "name": "Metoprolol",
      "dose": "50mg BID",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Michael Torres, DO"
    },
    {
      "id": "med-3",
      "name": "Atorvastatin",
      "dose": "40mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Karen Liu, DO"
    },
    {
      "id": "med-4",
      "name": "Lisinopril",
      "dose": "10mg daily",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "NKDA",
      "reaction": "No Known Drug Allergies",
      "severity": "",
      "type": ""
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "06:31",
      "bp": "158/86",
      "hr": "78 (irregularly irregular)",
      "rr": "14",
      "temp": "36.9°C",
      "spo2": "98%",
      "pain": "/10",
      "bmi": "25",
      "weight": "75 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "I can't see out of my left eye Left eye — complete",
      "hpi": "Dolores Eriksen is a 50-year-old female presenting with i can't see out of my left eye left eye — complete. Past medical history includes Atrial fibrillation, Hypertension, Hyperlipidemia, Carotid stenosis. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Central Retinal Artery Occlusion (CRAO) — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-586214",
      "collected": "03/03/2026 07:50",
      "fasting": "Not fasting",
      "facility": "ReasonDx Medical Center",
      "specimenType": "Blood",
      "groups": [
        {
          "name": "CBC WITH DIFFERENTIAL",
          "results": [
            {
              "test": "WBC",
              "value": "6.2",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "14.2",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "47",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "248",
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
              "value": "143",
              "unit": "mEq/L",
              "range": "136-145",
              "flag": ""
            },
            {
              "test": "Potassium",
              "value": "4.6",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": ""
            },
            {
              "test": "Chloride",
              "value": "100",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "28",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "10",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "108",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "9.6",
              "unit": "mg/dL",
              "range": "8.5-10.5",
              "flag": ""
            }
          ]
        },
        {
          "name": "CASE-SPECIFIC STUDIES",
          "results": [
            {
              "test": "ESR",
              "value": "18",
              "unit": "mm/hr",
              "range": "<20",
              "flag": ""
            },
            {
              "test": "CRP",
              "value": "0.6",
              "unit": "mg/dL",
              "range": "<0.5",
              "flag": ""
            },
            {
              "test": "PT/INR",
              "value": "1.1",
              "unit": "",
              "range": "0.9-1.1",
              "flag": ""
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-cxr",
      "date": "03/03/2026",
      "study": "Chest X-Ray PA/Lateral",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-651554",
      "clinical": "I can't see out of my left eye Left eye — complete",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-817175",
      "clinical": "I can't see out of my left eye Left eye — complete",
      "technique": "Standard protocol",
      "findings": "No acute intracranial hemorrhage. No mass. Old lacunar infarcts in bilateral basal ganglia. Mild generalized atrophy.",
      "impression": "No acute stroke on CT — note that retinal artery occlusion may not show on standard brain CT",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "CTA Head and Neck",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-392599",
      "clinical": "I can't see out of my left eye Left eye — complete",
      "technique": "Standard protocol",
      "findings": "70% stenosis of left internal carotid artery at the bifurcation with heterogeneous plaque. Right ICA: 40% stenosis. Intracranial vessels: no large vessel occlusion. Left ophthalmic artery patent but diminished caliber.",
      "impression": "Significant left ICA stenosis — likely source of retinal embolism. Consider carotid endarterectomy.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-3",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-292893",
      "clinical": "I can't see out of my left eye Left eye — complete",
      "technique": "Standard 12-lead",
      "findings": "Atrial fibrillation at 78 bpm. No ST changes. Left ventricular hypertrophy",
      "impression": "Atrial fibrillation — probable embolic source for retinal artery occlusion",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
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
    "Father: stroke at 68",
    "Mother: MI at 72"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "30 pack-years, quit 5 years ago"
    ],
    [
      "Alcohol",
      "Occasional"
    ],
    [
      "Drugs",
      "Denies"
    ],
    [
      "Occupation",
      "Retired engineer"
    ],
    [
      "Living",
      "Lives with wife"
    ]
  ]
};
