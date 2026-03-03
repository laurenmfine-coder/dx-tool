/* emr-data/dic-massive-transfusion.js — EMR case data for Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage */
window.EMR_DATA = {
  "patient": {
    "name": "Esperanza Ruiz",
    "dob": "11/16/1966",
    "age": "60",
    "sex": "Female",
    "pronouns": "she/her",
    "mrn": "MRN-531656",
    "language": "English",
    "race": "White",
    "phone": "(334) 331-2971",
    "email": "esperanza.ruiz@email.com",
    "address": "9642 Maple Ave, Boca Raton, FL 33431",
    "insurance": "Humana Gold Plus",
    "pcp": "Dr. Lisa Chang, MD",
    "pharmacy": "Walmart Pharmacy — Federal Hwy",
    "emergencyContact": {
      "name": "Richard Walker",
      "phone": "(901) 530-3252",
      "relationship": "Partner"
    },
    "chiefComplaint": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
    "diagnosis": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage"
  },
  "problems": [
    {
      "id": "prob-1",
      "description": "Delayed splenic rupture",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    },
    {
      "id": "prob-2",
      "description": "Otherwise healthy 38-year-old",
      "status": "Active",
      "onset": "Chronic",
      "icd10": ""
    }
  ],
  "medications": [
    {
      "id": "med-1",
      "name": "None routine",
      "dose": "",
      "route": "PO",
      "frequency": "Daily",
      "status": "Active",
      "prescriber": "Dr. Lisa Chang, MD"
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
      "time": "08:48",
      "bp": "72/48",
      "hr": "138",
      "rr": "28",
      "temp": "35.3°C",
      "spo2": "91%",
      "pain": "2500/10",
      "bmi": "22",
      "weight": "81 kg"
    }
  ],
  "visits": [
    {
      "id": "visit-ed",
      "type": "Emergency Visit",
      "date": "03/03/2026",
      "provider": "Dr. ED Attending",
      "cc": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "hpi": "Esperanza Ruiz is a 60-year-old female presenting with surgical team: 'patient is oozing from everywhere — wound, iv sites, ng tube. blood isn't clotting.' diffuse — bleeding from surgical wound, peripheral iv insertion sites, nasogastric tube, foley catheter (hematuria). Past medical history includes Delayed splenic rupture, Otherwise healthy 38-year-old. See chart for full details.",
      "exam": "See physical examination documentation.",
      "assessment": "Disseminated Intravascular Coagulation (DIC) with Massive Hemorrhage — clinical presentation and workup consistent with diagnosis.",
      "plan": "See orders and management plan."
    }
  ],
  "labs": [
    {
      "date": "03/03/2026",
      "time": "08:00",
      "status": "Final",
      "orderedBy": "Dr. ED Attending",
      "accession": "LAB-296007",
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
              "value": "10.4",
              "unit": "x10³/µL",
              "range": "4.5-11.0",
              "flag": ""
            },
            {
              "test": "Hemoglobin",
              "value": "5.8",
              "unit": "g/dL",
              "range": "12.0-16.0",
              "flag": "L"
            },
            {
              "test": "Hematocrit",
              "value": "42",
              "unit": "%",
              "range": "36-46",
              "flag": ""
            },
            {
              "test": "Platelets",
              "value": "28",
              "unit": "x10³/µL",
              "range": "150-400",
              "flag": "L"
            }
          ]
        },
        {
          "name": "BASIC METABOLIC PANEL",
          "results": [
            {
              "test": "Sodium",
              "value": "140",
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
              "value": "104",
              "unit": "mEq/L",
              "range": "98-106",
              "flag": ""
            },
            {
              "test": "CO2/Bicarb",
              "value": "25",
              "unit": "mEq/L",
              "range": "22-28",
              "flag": ""
            },
            {
              "test": "BUN",
              "value": "20",
              "unit": "mg/dL",
              "range": "7-20",
              "flag": ""
            },
            {
              "test": "Creatinine",
              "value": "0.6",
              "unit": "mg/dL",
              "range": "0.6-1.2",
              "flag": ""
            },
            {
              "test": "Glucose",
              "value": "77",
              "unit": "mg/dL",
              "range": "70-100",
              "flag": ""
            },
            {
              "test": "Calcium",
              "value": "10.4",
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
              "test": "PT/INR",
              "value": "2.8",
              "unit": "",
              "range": "0.9-1.1",
              "flag": "H"
            },
            {
              "test": "PTT",
              "value": "68",
              "unit": "sec",
              "range": "25-35",
              "flag": "H"
            },
            {
              "test": "Fibrinogen",
              "value": "62",
              "unit": "mg/dL",
              "range": "200-400",
              "flag": "H"
            },
            {
              "test": "D-dimer",
              "value": ">20",
              "unit": "mcg/mL",
              "range": "<0.5",
              "flag": "H"
            },
            {
              "test": "Peripheral Smear",
              "value": "Schistocytes present (fewer than in TTP). Decreased platelets on smear.",
              "unit": "",
              "range": "Normal",
              "flag": "H"
            },
            {
              "test": "Lactate",
              "value": "9.2",
              "unit": "mmol/L",
              "range": "0.5-2.0",
              "flag": "H"
            },
            {
              "test": "ABG pH",
              "value": "7.12",
              "unit": "",
              "range": "7.35-7.45",
              "flag": "H"
            },
            {
              "test": "Ionized Calcium",
              "value": "0.82",
              "unit": "mmol/L",
              "range": "1.12-1.32",
              "flag": "H"
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
      "accession": "IMG-153647",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "technique": "Standard protocol",
      "findings": "Heart size normal. No consolidation, pneumothorax, or effusion.",
      "impression": "No acute cardiopulmonary process.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-1",
      "date": "03/03/2026",
      "study": "POCUS – FAST Exam",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Radiologist",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-215395",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "technique": "Standard protocol",
      "findings": "Small amount of free fluid in Morrison pouch and pelvis (post-surgical). IVC flat (collapsing completely — severe hypovolemia). No pericardial effusion.",
      "impression": "Hypovolemic — aggressive resuscitation needed. Post-operative fluid expected but monitor for expanding hemoperitoneum.",
      "dictated": "03/03/2026 08:30",
      "verified": "03/03/2026 09:15"
    },
    {
      "id": "img-2",
      "date": "03/03/2026",
      "study": "12-Lead ECG",
      "status": "Final",
      "priority": "STAT",
      "orderedBy": "Dr. ED Physician",
      "readBy": "Dr. Cardiology",
      "facility": "ReasonDx Medical Center",
      "accession": "IMG-192951",
      "clinical": "Surgical team: 'Patient is oozing from everywhere — wound, IV sites, NG tube. Blood isn't clotting.' Diffuse — bleeding from surgical wound, peripheral IV insertion sites, nasogastric tube, Foley catheter (hematuria)",
      "technique": "Standard 12-lead",
      "findings": "Sinus tachycardia at 138 bpm. Low voltage (hypovolemia). No ST elevation",
      "impression": "Sinus tachycardia — hemorrhagic shock",
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
    "No bleeding disorders",
    "No clotting disorders"
  ],
  "socialHistory": [
    [
      "Tobacco",
      "Social"
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
      "Construction worker"
    ],
    [
      "Living",
      "Lives with girlfriend"
    ]
  ]
};
