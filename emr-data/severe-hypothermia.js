/* emr-data/severe-hypothermia.js — EMR case data for Severe Accidental Hypothermia */
window.EMR_DATA = {
  "patient": {
    "name": "Jasmine Thompson",
  "patientHPI": "I don't really remember what happened - someone said they found me outside and I was really cold. I feel confused and everything seems foggy, and I can't stop shivering even though they've been warming me up.",
    "dob": "06/06/1964",
    "age": "62",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-361889",
    "language": "English",
    "race": "Black/African American",
    "phone": "(312) 555-6890",
    "email": "jasmine.thompson@email.com",
    "address": "9829 Walnut Dr, Baltimore, MD 21206",
    "insurance": "UnitedHealthcare",
    "pcp": "Dr. Karen Liu, DO",
    "pharmacy": "Walmart Pharmacy — Pines Blvd",
    "emergencyContact": {
      "name": "Thomas Hill",
      "phone": "(713) 555-9796",
      "relationship": "Adult Child"
    },
    "chiefComplaint": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
    "diagnosis": "Severe Accidental Hypothermia"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Unknown — patient unidentified. Track marks on bilateral arms suggest IV drug use history. Appears malnourished. Possible chronic alcohol use.",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "Unknown",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. James Wilson, MD"
    }
  ],
  "allergies": [
    {
      "allergen": "Unknown",
      "reaction": "Unknown",
      "severity": "Moderate",
      "type": "Drug"
    }
  ],
  "vitals": [
    {
      "date": "03/03/2026",
      "time": "07:31",
      "bp": "78/50 (difficult to obtain — vasoconstriction)",
      "hr": "34 (bradycardia)",
      "rr": "8 (slow, shallow)",
      "temp": "82.4°F (28°C) rectal — core temp by esophageal probe preferred",
      "spo2": "Unable to obtain (vasoconstriction — pulse ox unreliable in hypothermia)",
      "pain": "/10",
      "bmi": "27",
      "weight": "82 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "hpi": "Jasmine Thompson is a 62-year-old female presenting with ems report: 'found unresponsive in alley, ambient temp 18°f. appears homeless. slow pulse.' no specific pain reported — global obtundation. Past medical history includes Unknown — patient unidentified. Track marks on bilateral arms suggest IV drug use history. Appears malnourished. Possible chronic alcohol use.. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Severe Accidental Hypothermia — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-142513",
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
              "value": "9",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "12.6",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": ""
            },
            {
              "test": "Hematocrit",
              "value": "39",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "300",
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
              "value": "5.4",
              "unit": "mEq/L",
              "range": "3.5-5.0",
              "flag": "H"
            },
            {
              "test": "Chloride",
              "value": "98",
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
              "value": "15",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "1.1",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "58",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": "H"
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
              "test": "Core Temperature",
              "value": "82.4°F (28°C)",
              "unit": "",
              "range": "97-99°F",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.22",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "4.8",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "Ethanol Level",
              "value": "186",
              "unit": "mg/dL",
              "range": "0",
              "flag": "H"
            },
            {
              "test": "CK Total",
              "value": "1,200",
              "unit": "U/L",
              "range": "22-198",
              "flag": "H"
            },
            {
              "test": "Amylase",
              "value": "180",
              "unit": "U/L",
              "range": "30-110",
              "flag": "H"
            },
            {
              "test": "Urine Drug Screen",
              "value": "Positive: opioids, benzodiazepines",
              "unit": "",
              "range": "Negative",
              "flag": "H"
            }
          ]
        }
      ]
    }
  ],
  "imaging": [
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "CT Head without Contrast",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-252798",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard protocol",
      "findings": "No acute intracranial pathology. No hemorrhage. Mild generalized atrophy.",
      "impression": "Normal — AMS from hypothermia and intoxication, not structural",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "Chest X-ray",
      "status": "Final",
      "priority": "Routine",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-190213",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard protocol",
      "findings": "Low lung volumes. No focal consolidation. No aspiration pattern currently.",
      "impression": "Low volumes from shallow breathing. Monitor for aspiration pneumonia.",
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
      "accession": "IMG-707385",
      "clinical": "EMS report: 'Found unresponsive in alley, ambient temp 18°F. Appears homeless. Slow pulse.' No specific pain reported — global obtundation",
      "technique": "Standard 12-lead",
      "findings": "Marked bradycardia at 34 bpm. OSBORN (J) WAVES — pathognomonic for hypothermia (positive deflection at J-point, most prominent in inferior and lateral leads). Prolonged PR, QRS, and QT intervals. Atrial fibrillation (slow ventricular response). Baseline artifact from shivering/tremor",
      "impression": "Osborn waves with slow AFib — classic hypothermic ECG. Cardiac rhythm is unstable — handle patient GENTLY (even minimal stimulation can trigger ventricular fibrillation in severe hypothermia).",
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
    "Unknown"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Unknown — nicotine-stained fingers"
    ],
    [
      "Alcohol",
      "Possible — alcohol odor on breath (alcohol causes peripheral vasodilation → faster heat loss)"
    ],
    [
      "Drugs",
      "Track marks suggest IV drug use (possible heroin/fentanyl — opioids impair thermoregulation)"
    ],
    [
      "Occupation",
      "Unknown — appears homeless"
    ],
    [
      "Living",
      "Likely unhoused"
    ]
  ]
};
